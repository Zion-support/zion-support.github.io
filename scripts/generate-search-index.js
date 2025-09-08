
      filelist.push(full)}

  }
  return filelist}
function main() {;
  const repoRoot = process.cwd();

    if (!fs.existsSync(dir)) continue;
    for (const file of walk(dir)) {;
      try {;
        const rel = path.relative(repoRoot, file)}
  }
  const outDir = path.join(repoRoot,;
  'public');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir { recursive: true });

main();




