#!/usr/bin/env node

import fs from 'fs'
import path from 'path'

function listFiles(dir, exts) {
	const out = []
	for (const entry of fs.readdirSync(dir)) {
		const full = path.join(dir, entry)
		const st = fs.statSync(full)
		if (st.isDirectory()) {
			if (entry === 'node_modules' || entry.startsWith('.')) continue
			out.push(...listFiles(full, exts))
		} else if (exts.some(ext => full.endsWith(ext))) {
			out.push(full)
		}
	}
	return out
}

function fixContent(content) {
	let next = content
	next = next.replace(/,\s*;/g, ',')
	next = next.replace(/;\s*,/g, ',')
	next = next.replace(/;\s*\]/g, ']')
	next = next.replace(/;\s*\}/g, '}')
	return next
}

function fixFile(filePath) {
	try {
		const before = fs.readFileSync(filePath, 'utf8')
		const after = fixContent(before)
		if (after !== before) {
			fs.writeFileSync(filePath, after, 'utf8')
			console.log(`Fixed: ${filePath}`)
			return true
		}
		return false
	} catch (e) {
		console.error(`Error fixing ${filePath}:`, e.message)
		return false
	}
}

const files = listFiles('.', ['.js', '.jsx', '.ts', '.tsx'])
let fixed = 0
for (const f of files) if (fixFile(f)) fixed++
console.log(`Fixed syntax errors in ${fixed} files.`)