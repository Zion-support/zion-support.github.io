'use strict';

const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

// Next 16.4.5 copies already-rendered HTML/RSC a second time during static
// export. Keep both names while sharing their immutable file contents.
// This is scoped to a disposable build workspace, never a running server.
const EXPORT_SHA256 = 'fe150e30d817b8b7d4ee5f4f5f6ce091e96f5fb715964abf91cc85423ad09a27';

function inside(root, file) {
  const relative = path.relative(root, file);
  return relative !== '' && relative !== '..' && !relative.startsWith('..' + path.sep) && !path.isAbsolute(relative);
}

function createCopy({ root, io = fs.promises, stats = {} }) {
  const sourceRoot = path.join(root, '.next', 'server', 'app');
  const outputRoot = path.join(root, 'out');
  const copy = io.copyFile.bind(io);
  stats.linkedFiles = 0;
  stats.linkedBytes = 0;
  stats.fallbackCopies = 0;
  return async function copyStaticArtifact(source, destination, mode = 0) {
    if (mode !== 0 || typeof source !== 'string' || typeof destination !== 'string') {
      return copy(source, destination, mode);
    }
    const src = path.resolve(source);
    const dst = path.resolve(destination);
    if (!inside(sourceRoot, src) || !inside(outputRoot, dst) || !/\.(html|rsc)$/.test(src)) {
      return copy(source, destination, mode);
    }
    // Resolve paths to exclude symlink escapes and only link regular files.
    const [actualSrc, actualParent, stat] = await Promise.all([
      io.realpath(src), io.realpath(path.dirname(dst)), io.lstat(src),
    ]);
    if (actualSrc !== src || actualParent !== path.dirname(dst) || !stat.isFile()) {
      return copy(source, destination, mode);
    }
    try {
      // link is exclusive: a pre-existing public asset keeps copyFile's
      // overwrite semantics via the fallback below. Never unlink any input.
      await io.link(src, dst);
      stats.linkedFiles++;
      stats.linkedBytes += stat.size;
    } catch (error) {
      if (!['EXDEV', 'EPERM', 'ENOTSUP', 'EOPNOTSUPP', 'ENOSYS', 'EEXIST'].includes(error.code)) throw error;
      stats.fallbackCopies++;
      return copy(source, destination, mode);
    }
  };
}

function install(root = fs.realpathSync(process.cwd())) {
  const nextRoot = path.dirname(require.resolve('next/package.json', { paths: [root] }));
  const version = JSON.parse(fs.readFileSync(path.join(nextRoot, 'package.json'), 'utf8')).version;
  const exportFile = path.join(nextRoot, 'dist', 'export', 'index.js');
  const hash = crypto.createHash('sha256').update(fs.readFileSync(exportFile)).digest('hex');
  if (version !== '16.4.5' || hash !== EXPORT_SHA256) {
    throw new Error('Static-export disk optimization requires review for this Next version. Use the original build command until reviewed.');
  }
  const original = fs.promises.copyFile;
  const stats = {};
  fs.promises.copyFile = createCopy({ root, stats });
  return { stats, restore() { fs.promises.copyFile = original; } };
}

module.exports = { createCopy, install };
