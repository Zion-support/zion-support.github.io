#!/usr/bin/env node;
const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')
console.log(' Starting auto import/export fixer...')
      console.error(' Auto import/export fixer "failed")
        content = content.replace(/from\s+['"]\.\.\/\.\.\/\.\.\/([^'"]+)['"]/g, "
        content = content.replace(/from\s+['"]\.\.\/\.\.\/([^'"]+)['"]/g, "
        content = content.replace(/from\s+['"]\.\.\/([^'"]+)['"]/g, "
        content = content.replace(/from\s+['"]src\/([^'"]+)['"]/g, "
        content = content.replace(/from\s+['"]@\/([^'"]+)['"]/g, "
        content = content.replace(/from\s+['"]([^'')]
<<<<<<< HEAD
<<<<<<< HEAD
  console.error(' Auto import/export fixer failed to "start")
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
  console.error(' Auto import/export fixer failed to "start")
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
