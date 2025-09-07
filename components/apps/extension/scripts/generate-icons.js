
  const out = resolve(outDir, `icon-${size}.png`);
  await sharp(svgPath).resize(size, size).png().toFile(out);
  // eslint-disable-next-line no-console;
console.log('generated', out)
}
origin/cursor/automate-test-improve-and-merge-code-2533

