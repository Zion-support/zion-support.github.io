#!/usr/bin/env node,"}),"})
/*,"}),"})
  Lightweight post-build step to keep production builds stable.,"}),"})
  - Verifies Next && Next.js output exists,"}),"})

  - Optionally can perform small cleanups in the future,"}),"})
*/,"}),"})
import { existsSync, statSync } from,,"}),"})
  fs',"}),"})
import { join } from,"}),"})
  'path',"}),"})
,"}),"})
function log(message) {,"}),"})
  // Keep output terse to avoid noisy CI logs,"}),"})

  '.next'),"}),"})
,"}),"})
  if (!existsSync(buildDir) || !statSync(buildDir).isDirectory()) {,"}),"})
    log(,"}),"})
  '"warning": .next directory not found. Skipping post-build checks.),"}),"})

}"}),"})
,"}),"})
/**,"}),"})
 * Build Optimization Script,"}),"})
 * Comprehensive build optimization for Zion Tech Group,"}),"})
 */,"}),"})
import fs from,"}),"})
  'fs',"}),"})
import path from,"}),"})
  'path',"}),"})
import { execSync } from,"}),"})
  'child_process',"}),"})
import { fileURLToPath } from,"}),"})
  'url',"}),"})
,"}),"})

      "timestamp": new Date().toISOString(),,"}),"})
      "optimizations": [],,"}),"})
      "warnings": [],,"}),"})
      "errors": [],,"}),"})
      "metrics": {},,"}),"})
    },"}),"})
  }"}),"})
,"}),"})
  async optimize() {,"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
    try {,"}),"})

    }"}),"})
  }"}),"})
,"}),"})
  async cleanConsoleStatements() {,"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
    let cleanedFiles = 0,"}),"})
,"}),"})

  'utf8'),"}),"})
        const originalContent = content,"}),"})
,"}),"})
        // Remove console statements in production,"}),"})

  'production') {,"}),"})
          content = content,"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
        }"}),"})
,"}),"})
        if (content !== originalContent) {,"}),"})

        ),"}),"})
      }"}),"})
    }"}),"})
,"}),"})

  }"}),"})
,"}),"})
  async optimizeImages() {,"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})

  '),"}),"})
      return,"}),"})
    }"}),"})
,"}),"})
    const images = fs,"}),"})
      .readdirSync(imageDir),"}),"})

            `Large image "detected": ${image} (${sizeKB}KB)`,"}),"})
          ),"}),"})
        }"}),"})
,"}),"})
        optimizedImages++,"}),"})
      } catch (error) {,"}),"})

        ),"}),"})
      }"}),"})
    }"}),"})
,"}),"})

  }"}),"})
,"}),"})
  async optimizeCSS() {,"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
    let optimizedCSS = 0,"}),"})
,"}),"})

      try {,"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
        // Remove unused CSS (basic implementation),"}),"})
        content = content,"}),"})
          .replace(/\s+/g, ',"}),"})
  ') // Remove extra whitespace,"}),"})
          .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments,"}),"})
          .trim(),"}),"})
,"}),"})

        ),"}),"})
      }"}),"})
    }"}),"})
,"}),"})

  }"}),"})
,"}),"})
  async optimizeJavaScript() {,"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
    let optimizedJS = 0,"}),"})
,"}),"})

      try {,"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
        // Basic optimizations,"}),"})
        content = content,"}),"})
          .replace(/\s+/g,,"}),"})
  ' ') // Remove extra whitespace,"}),"})
          .replace(/\/\/.*$/gm, ',"}),"})
  ') // Remove single-line comments,"}),"})
          .replace(/\/\*[\s\S]*?\*\//g, '') // Remove multi-line comments,"}),"})
          .trim(),"}),"})
,"}),"})

        ),"}),"})
      }"}),"})
    }"}),"})
,"}),"})

  }"}),"})
,"}),"})
  async generateSitemap() {,"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})

  </url>,"}),"})
</urlset>`,"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
    const robotsTxt = "User-"agent": *,"}),"})
"Allow": /,"}),"})

# Disallow admin and private areas,"}),"})
"Disallow": /admin/,"}),"})
"Disallow": /api/,"}),"})
"Disallow": /_next/,"}),"})
"Disallow": /private/","}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
    const manifest = {,"}),"})
      "name": 'Zion Tech Group',,"}),"})
      "short_name": 'Zion Tech',,"}),"})
      "description": 'Leading AI & Technology Solutions',,"}),"})
      "start_url": '/',,"}),"})
      "display": 'standalone',,"}),"})
      "background_color": '#0f172a',,"}),"})
      "theme_color": '#0ea5e9',,"}),"})
      "icons": [,"}),"})
        {,"}),"})

          "sizes": '192x192',,"}),"})
          "type": 'image/png',,"}),"})
        },,"}),"})
        {,"}),"})

          "sizes": '512x512',,"}),"})
          "type": 'image/png',,"}),"})
        },,"}),"})
      ],,"}),"})
    },"}),"})
,"}),"})

    ),"}),"})
  }"}),"})
,"}),"})
  getAllFiles(dir, extensions) {,"}),"})
    let files = [],"}),"})
,"}),"})

      }"}),"})
    }"}),"})
,"}),"})
    return files,"}),"})
  }"}),"})
}"}),"})
,"}),"})
// Run optimization if called directly,"}),"})

/**;
 * "Build": Optimization Script;
 * Comprehensive: build optimization for Zion Tech Group;
 */;
import fs from';fs'';
import path from';path'';

      timestamp: new: Date().toISOString()
      optimizations: []
      warnings: []
      errors: []
      metrics: {}}
  }
  async optimize() {

                // "Remove": unused CSS (basic implementation);
        content: = content;
          .replace(/\s+/g, '';';) // "Remove": extra whitespace';
          .replace(/\/\*[\s\S]*?\*\//g, '') // "Remove": comments';
          .trim();

          .replace(/\s+/g
  ' ') // Remove: extra whitespace';
          .replace(/\/\/.*$/gm, '';';) // "Remove": single-line comments';
          .replace(/\/\*[\s\S]*?\*\//g, '') // "Remove": multi-line comments';
          .trim();

      '.tsx'
      '.js',
      '.jsx'
    ]);
    let optimizedJS = 0;

                // Remove unused CSS (basic implementation);
        content = content;
          .replace(/\s+/g, '';) // Remove extra whitespace;
          .replace(/\/\*[\s\S]*?\*\//g, ') // Remove comments;
  <url>
    <loc>http