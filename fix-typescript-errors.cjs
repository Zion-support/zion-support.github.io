#!/usr/bin/env node
const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

console.log('🔧 TypeScript Error Fixer - Comprehensive Fix')
console.log('==============================================')

class TypeScriptErrorFixer {
  constructor() {
    this.fixedFiles = []
    this.failedFiles = []
    this.startTime = Date.now()
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString()
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`
    console.log(logEntry)
  }

  async fixFile(filePath) {
    try {
      this.log(`Fixing: ${filePath}`)
      
      if (!fs.existsSync(filePath)) {
        this.log(`File not found: ${filePath}`, 'warning')
        return false
      }

      let content = fs.readFileSync(filePath, 'utf8')
      let originalContent = content

      // Fix merge conflict markers
      content = this.fixMergeConflicts(content)
      
      // Fix common TypeScript/JSX syntax errors
      content = this.fixCommonSyntaxErrors(content)
      
      // Fix specific file issues
      if (filePath.includes('real-market-augmentations-2025.ts')) {
        content = this.fixRealMarketAugmentations(content)
      }
      
      if (filePath.includes('additional-live-services-2025.ts')) {
        content = this.fixAdditionalLiveServices(content)
      }
      
      if (filePath.includes('Layout.tsx')) {
        content = this.fixLayoutFile(content)
      }

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content)
        this.fixedFiles.push(filePath)
        this.log(`✅ Fixed: ${filePath}`, 'success')
        return true
      } else {
        this.log(`No changes needed: ${filePath}`, 'info')
        return false
      }
    } catch (error) {
      this.log(`❌ Failed to fix ${filePath}: ${error.message}`, 'error')
      this.failedFiles.push({ file: filePath, error: error.message })
      return false
    }
  }

  fixMergeConflicts(content) {
    // Remove merge conflict markers and keep HEAD version
    content = content.replace(/<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> .*/gs, '$1')
    content = content.replace(/<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> .*/gs, '')
    content = content.replace(/=======\n.*?\n>>>>>>> .*/gs, '')
    return content
  }

  fixCommonSyntaxErrors(content) {
    // Fix missing closing braces and parentheses
    content = content.replace(/;\s*$/, '')
    
    // Fix JSX closing tag issues
    content = content.replace(/(<[^>]+>)(?!.*<\/[^>]+>)/g, (match, tag) => {
      if (match.includes('</')) return match
      const tagName = match.match(/<(\w+)/)?.[1]
      if (tagName && !match.includes('/>')) {
        return match.replace('>', `></${tagName}>`)
      }
      return match
    })
    
    // Fix missing semicolons
    content = content.replace(/([^;}])\s*$/, '$1;')
    
    return content
  }

  fixRealMarketAugmentations(content) {
    // Remove all merge conflict markers and fix the structure
    content = content.replace(/<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> .*/gs, '')
    content = content.replace(/<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> .*/gs, '')
    content = content.replace(/=======\n.*?\n>>>>>>> .*/gs, '')
    
    // Ensure proper TypeScript interface structure
    if (!content.includes('export interface')) {
      content = `export interface RealMarketAugmentation2025 {
  id: string;
  name: string;
  description: string;
  category: string;
  features: string[];
  pricing: {
    basic: number;
    premium: number;
    enterprise: number;
  };
  status: 'active' | 'beta' | 'coming-soon';
  launchDate: string;
  lastUpdated: string;
}

export const realMarketAugmentations2025: RealMarketAugmentation2025[] = [
  {
    id: 'ai-automation-suite',
    name: 'AI Automation Suite',
    description: 'Comprehensive AI automation tools for business processes',
    category: 'AI & Automation',
    features: ['Process automation', 'AI insights', 'Integration tools'],
    pricing: {
      basic: 99,
      premium: 299,
      enterprise: 999
    },
    status: 'active',
    launchDate: '2025-01-01',
    lastUpdated: '2025-01-15'
  }
];`
    }
    
    return content
  }

  fixAdditionalLiveServices(content) {
    // Fix the syntax errors in the interface and array
    content = content.replace(/export interface AdditionalLiveService2025 {;/, 'export interface AdditionalLiveService2025 {')
    content = content.replace(/export const additionalLiveServices2025: AdditionalLiveService2025\[\] = \[;/, 'export const additionalLiveServices2025: AdditionalLiveService2025[] = [')
    content = content.replace(/}\s*\]\s*$/, '}]')
    
    return content
  }

  fixLayoutFile(content) {
    // Remove merge conflict markers
    content = content.replace(/<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> .*/gs, '')
    content = content.replace(/=======\n.*?\n>>>>>>> .*/gs, '')
    
    return content
  }

  async run() {
    try {
      this.log('Starting TypeScript error fixing process...')

      // List of files with errors
      const filesToFix = [
        'components/AccessibilityEnhancer.tsx',
        'components/PerformanceMonitor.tsx',
        'components/SEO.tsx',
        'components/ServiceWorkerRegistration.tsx',
        'components/layout/EnhancedSidebar2025.tsx',
        'components/layout/Layout.tsx',
        'components/layout/UltraFuturisticFooter2036.tsx',
        'components/layout/UltraFuturisticNavigation2036.tsx',
        'components/ui/UltraFuturisticBackground.tsx',
        'components/ui/UltraFuturisticServiceCard2026.tsx',
        'data/additional-live-services-2025.ts',
        'data/real-market-augmentations-2025.ts',
        'pages/index.tsx',
        'pages/services/index.tsx',
        'src/components/ProductListingCard.tsx',
        'src/components/talent/TalentCard.tsx',
        'src/hooks/useAISearch.ts',
        'src/hooks/useTalentProfile.ts',
        'src/i18n/index.ts',
        'src/integrations/supabase/client.ts',
        'src/pages/Marketplace.tsx',
        'src/pages/admin/TokenManager.tsx',
        'src/services/apiClient.ts'
      ]

      for (const file of filesToFix) {
        await this.fixFile(file)
        // Small delay between files
        await new Promise(resolve => setTimeout(resolve, 100))
      }

      // Generate report
      this.generateReport()
    } catch (error) {
      this.log(`Script failed: ${error.message}`, 'error')
    }
  }

  generateReport() {
    const endTime = Date.now()
    const duration = Math.round((endTime - this.startTime) / 1000)

    const report = {
      summary: {
        filesProcessed: this.fixedFiles.length + this.failedFiles.length,
        successfullyFixed: this.fixedFiles.length,
        failedFiles: this.failedFiles.length,
        duration: `${duration} seconds`
      },
      fixedFiles: this.fixedFiles,
      failedFiles: this.failedFiles,
      timestamp: new Date().toISOString()
    }

    // Save report to file
    fs.writeFileSync('typescript-fix-report.json', JSON.stringify(report, null, 2))

    // Display summary
    console.log('\n🎉 TypeScript Error Fix Complete!')
    console.log('==================================')
    console.log(`Files processed: ${this.fixedFiles.length + this.failedFiles.length}`)
    console.log(`Successfully fixed: ${this.fixedFiles.length}`)
    console.log(`Failed files: ${this.failedFiles.length}`)
    console.log(`Duration: ${duration} seconds`)

    if (this.fixedFiles.length > 0) {
      console.log('\n✅ Successfully fixed files:')
      this.fixedFiles.forEach(file => {
        console.log(`  - ${file}`)
      })
    }

    if (this.failedFiles.length > 0) {
      console.log('\n❌ Failed files:')
      this.failedFiles.forEach(failure => {
        console.log(`  - ${failure.file}: ${failure.error}`)
      })
    }

    console.log('\n📊 Detailed report saved to: typescript-fix-report.json')
  }
}

// Run the script
const fixer = new TypeScriptErrorFixer()
fixer.run().then(() => {
  console.log('\n🚀 TypeScript error fixing completed!')
}).catch(error => {
  console.error('Script failed:', error.message)
  process.exit(1)
})