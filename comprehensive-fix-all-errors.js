#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
console.log('🔧 Starting comprehensive error fixing and merge conflict resolution...'
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js'
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules'
  fixed = fixed.replace(/<React\.Fragment>\s*<\/React\.Fragment>/g, '<></>'
  fixed = fixed.replace(/<React\.Fragment>/g, '<>'
  fixed = fixed.replace(/<\/React\.Fragment>/g, '</>'
  fixed = fixed.replace(/return\s*\(\s*\)\s*</g, 'return ('
  fixed = fixed.replace(/return\s*\(\s*\)\s*$/gm, 'return null;'
  fixed = fixed.replace(/;+/g, ';'
  fixed = fixed.replace(/''+/g, "
  fixed = fixed.replace(/""+/g, '"
  fixed = fixed.replace(/"([^"]*?)\n/g, '"$1"
  fixed = fixed.replace(/'([^']*?)\n/g, "
  fixed = fixed.replace(/className="([^"]*?)";+"/g, 'className="$1"
  fixed = fixed.replace(/className='([^']*?)';+'/g, "