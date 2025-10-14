#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
console.log('🔧 Fixing remaining parsing errors...'
  fixed = fixed.replace(/import\s+.*?from\s+['"
    if (!p1.endsWith('"') && !p1.endsWith("
      return match.replace(p1, p1 + '"
  fixed = fixed.replace(/import\s+.*?from\s+['"
  fixed = fixed.replace(/import\s+.*?from\s+['"][^'"
  fixed = fixed.replace(/import\s+React\s+from\s+['"]react['"]\s*$/gm, 'import React from "react"
  fixed = fixed.replace(/import\s+.*?from\s+['"][^'"