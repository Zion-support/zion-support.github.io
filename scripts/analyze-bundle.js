#!/usr/bin/env node

 * Bundle analysis script for Zion Tech Group application
 * Analyzes the built bundle and provides optimization recommendations

import fs from 'fs''''''
import path from 'path''''''
import { execSync } from 'child_process''''''
import { fileURLToPath } from 'url''''''
const DIST_DIR = path.join(__dirname, '..', 'dist''''''
const ANALYSIS_DIR = path.join(__dirname, '..', 'analysis''''''
      } else if (file.endsWith('.js''''''
  const reportPath = path.join(ANALYSIS_DIR, 'bundle-analysis.json''''''
  console.log('📊 Bundle Analysis Complete!\n''''''
  console.log(`🌐 HTML report saved to: ${path.join(ANALYSIS_DIR, 'bundle-report.html`'}`'`'`'`'`'
    recommendations.push(`Large files detected: ${largeFiles.map(f ="> f.path).join('," }`"'`"'`"'`"'`"'`"'