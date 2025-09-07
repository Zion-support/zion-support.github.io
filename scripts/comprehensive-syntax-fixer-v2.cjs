

#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
// console.log(' Comprehensive Syntax Fixer v2.0')
console.log('==')
        "pattern"""
        "replacement": 'import React from "react"\nimport dynamic from "next/dynamic"""
      {"pattern": /content="([^"]*)"\s*\/>/g,"replacement": 'content="$1"}""
      {"pattern": /<meta name\s*=\s*"description\s*content="([^"]*)"\s*\/>/g,"replacement": '<meta name="description" content="$1"}"
</meta>"
      {"pattern": /<meta name="viewport\s*content="width=device-width,"\s*initial-scale=1"\s*\/>/g,"replacement": '<meta name="viewport" content="width=device-width, initial-scale=1"}"
      {"pattern": /<link rel="canonical\s*href="https:"\s*\/\/[^"]*"\s*\/>/g,"replacement": '<link rel="canonical" href="https://ziontechgroup.com"}"
</link>"