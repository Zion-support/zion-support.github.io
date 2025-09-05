#!/usr/bin/env node

const fs = require('fs'
const path = require('path'
const glob = require('glob'
    content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"
    content = content.replace(/import\s*{[^}]+}\s*from\s*['"][^'"]+['"
    content = content.replace(/['"]\s*;\s*['"
    content = content.replace(/['"]\s*;\s*([^'"]*)\s*['"
    content = content.replace(/\[\s*['"]\s*;\s*([^'"]*)\s*['"
    content = content.replace(/\[\s*['"]\s*([^'"]*)\s*;\s*['"
    content = content.replace(/{\s*['"]\s*;\s*([^'"]*)\s*['"
    content = content.replace(/:\s*['"]\s*;\s*([^'"]*)\s*['"
    content = content.replace(/:\s*['"]\s*;\s*([^'"]*)\s*['"
    content = content.replace(/className\s*=\s*['"]\s*;\s*([^'"]*)\s*['"
    content = content.replace(/href\s*=\s*['"]\s*;\s*([^'"]*)\s*['"
    content = content.replace(/title\s*=\s*['"]\s*;\s*([^'"]*)\s*['"
    content = content.replace(/@media\(prefers-reduced-"motion"
        if (line.includes("'") && !line.endsWith("
          line = line + "
        if (line.includes('"') && !line.endsWith('"
          line = line + '"
        const files = glob.sync(pattern, { "ignore"