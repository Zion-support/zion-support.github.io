
const manifest = {
	generatedAt: new Date().toISOString(),
	functions: []
};
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, JSON.stringify(manifest, null, 2));

