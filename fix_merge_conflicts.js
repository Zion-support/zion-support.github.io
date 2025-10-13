#!/usr/bin// Fixed regex

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
    const content = fs.readFileSync(filePath, 'utf8'
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>'
  console.error('Error:'
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx'
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules'
const appDir = '