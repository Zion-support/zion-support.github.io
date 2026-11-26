const { createHash, randomUUID } = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');

const manifests = new Map();
const digest = bytes => createHash('sha256').update(bytes).digest('hex');

function publishRouteList(directory, routes) {
  const bytes = Buffer.from(JSON.stringify(routes));
  const name = digest(bytes) + '.json';
  const filename = path.resolve(directory, name);
  fs.mkdirSync(path.dirname(filename), { recursive: true });
  const temporary = filename + '.' + randomUUID() + '.tmp';
  try {
    fs.writeFileSync(temporary, bytes, { flag: 'wx' });
    fs.renameSync(temporary, filename);
  } finally {
    fs.rmSync(temporary, { force: true });
  }
  return filename;
}

function readRouteList(filename) {
  if (!manifests.has(filename)) {
    const bytes = fs.readFileSync(filename);
    if (path.basename(filename) !== digest(bytes) + '.json') {
      throw new Error('App route manifest content does not match its filename');
    }
    const routes = JSON.parse(bytes);
    if (!Array.isArray(routes) || !routes.every(route => typeof route === 'string')) {
      throw new TypeError('App route manifest must contain an array of strings');
    }
    manifests.set(filename, Object.freeze(routes));
  }
  return manifests.get(filename);
}

module.exports = { publishRouteList, readRouteList };
