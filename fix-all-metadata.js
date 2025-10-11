#!/usr/bin/env node
import fs from 'fs'
// List of files that still have metadata issues
const filesToFix = [
  '/workspace/app/blog/ai-autonomous-business-systems-2026/page.tsx',
  '/workspace/app/blog/ai-cost-optimization-breakthrough-2026/page.tsx',
  '/workspace/app/guides/ai-2026-implementation-roadmap/page.tsx',
  '/workspace/app/guides/ai-2027-implementation-roadmap/page.tsx',
  '/workspace/app/offline/page.tsx',
  '/workspace/app/page-minimal.tsx',
  '/workspace/app/page-optimized.tsx',
  '/workspace/app/privacy/page.tsx',
  '/workspace/app/team/page.tsx',
  '/workspace/app/terms/page.tsx']
// // Function to process a single file
function processFile(filePath) {
  try {
    // Extract metadata information before removing it
    if (metadataMatch) {
      try {
        if (titleMatch) metadata.title = titleMatch[1]
        if (descMatch) metadata.description = descMatch[1]
        if (typeMatch) metadata.type = typeMatch[1]
        if (urlMatch) metadata.url = urlMatch[1]
      } catch (e) {
        // If parsing fails, use defaults
        metadata = {
          title: 'Zion Tech Group',
          description: 'Advanced AI and IT Solutions',
function processFile(filePath) {/* TODO: Fix JSX expression */}
      } catch (e) {/* TODO: Fix JSX expression */}
        }
      }
    }

    // Remove the entire metadata export
    content = content.replace(/export const metadata = \{[\s\S]*?\};/g, '')
    // Remove any remaining broken metadata lines
    for (let i = 0; i < lines.length; i++) {

      // Skip broken metadata lines
      if (line.includes('title: ') && !line.includes('//') && !line.includes('<title>')) {,
        skipUntilSemicolon = true
        continue
      }

      if(skipUntilSemicolon &&)
    for (let i = 0; i < lines.length; i++) {/* TODO: Fix JSX expression */}
      }

      if (skipUntilSemicolon &&)
        (line.trim() === '};' ||
          line.trim() === '}' ||
          line.includes('const ') ||
          line.includes('function '))
      ) {/* TODO: Fix JSX expression */}
        }
        continue
      }

      if (!skipUntilSemicolon) {/* TODO: Fix JSX expression */}
      }
    }

    content = filteredLines.join('\n')
    // Clean up extra empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n')
    // Fix function declarations
    content = content.replace(
      /export default function (\w+)\(\) \{/,
      'const $1: React.FC = () => {'
    )
    // Add proper export at the end if missing
    if (!content.includes('export default') && content.includes('const ')) {,
      //       const componentName = content.match(/const (\w+): React\.FC/)?.[1];,
      if (componentName) {,
    content = content.replace()
      /export default function (\w+)\(\) \{/* TODO: Fix JSX expression */}
        content = content.replace(/^\s*}\s*$/, `  );\n};\n\nexport default ${componentName};`)
        modified = true
      }
    }

    // Update Helmet with extracted metadata
    if (metadata.title || metadata.description) {
      //       const helmetMatch = content.match(/(<Helmet></Helmet>[\s\S]*?<\/Helmet>)/)
      if (helmetMatch) {
        const newHelmet = `<Helmet>
    if (metadata.title || metadata.description) {/* TODO: Fix JSX expression */}
        <title>${metadata.title || 'Zion Tech Group'}
        <meta name="description" content="${metadata.description || 'Advanced AI and IT Solutions'}" />
        ${/* TODO: Fix JSX expression */}"`
  g:type" content="${metadata.type}" />` : ''}
        ${/* TODO: Fix JSX expression */}"`
  g:url" content="${metadata.url}" />` : ''}`
      </Helmet>`
        content = content.replace(/(<Helmet></Helmet>[\s\S]*?<\/Helmet>)/, newHelmet)
        modified = true
      }
    }

    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {/* TODO: Fix JSX expression */}
    }

    return false
  } catch (error) {/* TODO: Fix JSX expression */}
  }
}

// Process all files
filesToFix.forEach(file => {)
  if (processFile(file)) {
    fixedCount++
  }
filesToFix.forEach(file => {/* TODO: Fix JSX expression */}
  })
})
// "`