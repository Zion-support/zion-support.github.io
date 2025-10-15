#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
  fixed = fixed.replace(/from\s+["]([^"]+)["];"/g, '
  fixed = fixed.replace(/className\s*=\s*["]([^"]+)["];"/g, '
  fixed = fixed.replace(/([^\\])"([^"]*)$/gm, '