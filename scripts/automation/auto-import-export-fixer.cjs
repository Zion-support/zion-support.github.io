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
=======
  console.error(' Auto import/export fixer failed to "start")

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
  console.error(' Auto import/export fixer failed to "start")
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
