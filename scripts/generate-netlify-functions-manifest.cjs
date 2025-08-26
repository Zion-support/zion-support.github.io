#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

const outDir = path.join(process.cwd(), 'automation')
const outFile = path.join(outDir, 'netlify-functions-manifest.json')

const manifest = {
	generatedAt: new Date().toISOString(),
	functions: [],
}

fs.mkdirSync(outDir, { recursive: true })
fs.writeFileSync(outFile, JSON.stringify(manifest, null, 2), 'utf8')
console.log('[netlify:manifest] Wrote', path.relative(process.cwd(), outFile))