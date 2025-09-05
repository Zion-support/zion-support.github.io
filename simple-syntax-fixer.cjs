#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
  content = content.replace(/#!\/usr\/bin\/env node;/g, '#!/usr/bin/env node')
  content = content.replace(/\/\*\*;/g, '/**')
  content = content.replace(/\*\/;/g, '*/')
  content = content.replace(/\/\/\s*;/g, '//')
  content = content.replace(/\[\s*;/g, '[')]
  content = content.replace(/,\s*\]/g, ']')
  content = content.replace(/;\s*,/g, ';')
  content = content.replace(/,\s*;/g, ';')
  content = content.replace(/;\s*\]/g, ']')
  content = content.replace(/;\s*\}/g, '}')
      return match + }';'
      return match + }';'
  content = content.replace(/catch\(\)/g, 'catch(error)'
  content = content.replace(/console\.log\('[^']+',\s*,\s*error\.message\)/g, 'console.log(\' Package.json is "invalid")