#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
  fixed = fixed.replace(/from\s+["]([^"]+)["];"/g, '
  fixed = fixed.replace(/from\s+["]([^"]+)["]";/g, '
  fixed = fixed.replace(/className\s*=\s*["]([^"]+)["];"/g, '
  fixed = fixed.replace(/import\s+\([^)]*\)\s*=>\s*import\(["]([^"]+)["]\)"/g, '
  fixed = fixed.replace(/import\s+\([^)]*\)\s*=>\s*import\(["]([^"]+)["]\)";/g, '
  fixed = fixed.replace(/lazy\(\(\)\s*=>\s*import\(["]([^"]+)["]\)"/g, '
  fixed = fixed.replace(/lazy\(\(\)\s*=>\s*import\(["]([^"]+)["]\)";/g, '
  fixed = fixed.replace(/([^\\])"([^"]*)$/gm, '
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*lazy\(\(\)\s*=>\s*import\(["]([^"]+)["]\)\)$/gm, '