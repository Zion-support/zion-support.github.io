#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
    content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'')]
    content = content.replace(/import\s*{[^}]+}\s*from\s*['"][^'"]+['')]
    content = content.replace(/['"]\s*;\s*['')]
    content = content.replace(/['"]\s*;\s*([^'"]*)\s*['']
    content = content.replace(/\[\s*['"]\s*;\s*([^'"]*)\s*['']
    content = content.replace(/{\s*['"]\s*;\s*([^'"]*)\s*[''}]
    content = content.replace(/className\s*=\s*['"]\s*;\s*([^'"]*)\s*['']