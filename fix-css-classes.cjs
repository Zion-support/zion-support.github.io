#!/usr/bin/env node

const fs = require('fs'
const path = require('path'
console.log(' Starting CSS class fixing...'
  fixed = fixed.replace(/focus:\s+outline-none/g, '"focus"
  fixed = fixed.replace(/\s+"focus": /g, ' "focus"
  fixed = fixed.replace(/className="([^"]*),\s*"/g, 'className="$1"
  fixed = fixed.replace(/className="([^"]*)\s{2}([^"]*)"/g, 'className="$1 $2"