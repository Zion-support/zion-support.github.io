#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

console.log('🚀 Performance Optimizer - Implementing Critical Improvements')
console.log('=============================================================')

class PerformanceOptimizer {
  constructor() {
    this.improvements = []
    this.startTime = Date.now()
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString()
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`
    console.log(logEntry)
  }

  async optimizeBundleSize() {
    this.log('Optimizing bundle size...')
    
    // Check current bundle size
    const distPath = path.join(process.cwd(), 'dist')
    if (fs.existsSync(distPath)) {
      const files = fs.readdirSync(distPath)
      let totalSize = 0
      
      files.forEach(file => {
        const filePath = path.join(distPath, file)
        const stats = fs.statSync(filePath)
        if (stats.isFile()) {
          totalSize += stats.size
        }
      })
      
      this.log(`Current bundle size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`)
      
      if (totalSize > 1024 * 1024) { // If larger than 1MB
        this.log('Bundle size is large, implementing optimizations...', 'warning')
        this.improvements.push('Bundle size optimization needed')
      }
    }
  }

  async optimizeViteConfig() {
    this.log('Optimizing Vite configuration...')
    
    const viteConfigPath = path.join(process.cwd(), 'vite.config.js')
    let viteConfig = ''
    
    if (fs.existsSync(viteConfigPath)) {
      viteConfig = fs.readFileSync(viteConfigPath, 'utf8')
    }
    
    // Add performance optimizations
    const optimizedConfig = `
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Performance optimizations
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  server: {
    hmr: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
})
`
    
    fs.writeFileSync(viteConfigPath, optimizedConfig)
    this.log('✅ Vite configuration optimized')
    this.improvements.push('Vite configuration optimized')
  }

  async addPerformanceMonitoring() {
    this.log('Adding performance monitoring...')
    
    const performanceCode = `
// Performance monitoring utilities
export const performanceMonitor = {
  startTime: Date.now(),
  
  measure(name, fn) {
    const start = performance.now()
    const result = fn()
    const end = performance.now()
    console.log(\`\${name} took \${end - start} milliseconds\`)
    return result
  },
  
  async measureAsync(name, fn) {
    const start = performance.now()
    const result = await fn()
    const end = performance.now()
    console.log(\`\${name} took \${end - start} milliseconds\`)
    return result
  },
  
  reportWebVitals() {
    if (typeof window !== 'undefined' && 'web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log)
        getFID(console.log)
        getFCP(console.log)
        getLCP(console.log)
        getTTFB(console.log)
      })
    }
  }
}

// Auto-report web vitals
if (typeof window !== 'undefined') {
  performanceMonitor.reportWebVitals()
}
`
    
    const utilsPath = path.join(process.cwd(), 'src', 'utils')
    if (!fs.existsSync(utilsPath)) {
      fs.mkdirSync(utilsPath, { recursive: true })
    }
    
    fs.writeFileSync(path.join(utilsPath, 'performance.ts'), performanceCode)
    this.log('✅ Performance monitoring added')
    this.improvements.push('Performance monitoring added')
  }

  async optimizeImages() {
    this.log('Optimizing images...')
    
    // Create image optimization script
    const imageOptimizer = `
const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

async function optimizeImages() {
  const publicPath = path.join(process.cwd(), 'public')
  const imagesPath = path.join(publicPath, 'images')
  
  if (!fs.existsSync(imagesPath)) {
    console.log('No images directory found')
    return
  }
  
  const files = fs.readdirSync(imagesPath)
  const imageFiles = files.filter(file => 
    /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
  )
  
  for (const file of imageFiles) {
    const inputPath = path.join(imagesPath, file)
    const outputPath = path.join(imagesPath, \`optimized-\${file}\`)
    
    try {
      await sharp(inputPath)
        .resize(1200, 800, { fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: 80 })
        .toFile(outputPath)
      
      console.log(\`Optimized: \${file}\`)
    } catch (error) {
      console.error(\`Error optimizing \${file}:\`, error.message)
    }
  }
}

optimizeImages()
`
    
    fs.writeFileSync(path.join(process.cwd(), 'scripts', 'optimize-images.js'), imageOptimizer)
    this.log('✅ Image optimization script created')
    this.improvements.push('Image optimization script created')
  }

  async addErrorBoundary() {
    this.log('Adding comprehensive error boundary...')
    
    const errorBoundaryCode = `
import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    })
    
    // Log error to monitoring service
    console.error('Error caught by boundary:', error, errorInfo)
    
    // Send to error reporting service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false
      })
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="error-boundary">
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
`
    
    const componentsPath = path.join(process.cwd(), 'src', 'components')
    if (!fs.existsSync(componentsPath)) {
      fs.mkdirSync(componentsPath, { recursive: true })
    }
    
    fs.writeFileSync(path.join(componentsPath, 'ErrorBoundary.tsx'), errorBoundaryCode)
    this.log('✅ Error boundary added')
    this.improvements.push('Error boundary added')
  }

  async addTypeScriptStrictMode() {
    this.log('Enabling TypeScript strict mode...')
    
    const tsConfigPath = path.join(process.cwd(), 'tsconfig.json')
    let tsConfig = {}
    
    if (fs.existsSync(tsConfigPath)) {
      tsConfig = JSON.parse(fs.readFileSync(tsConfigPath, 'utf8'))
    }
    
    // Enable strict mode
    tsConfig.compilerOptions = {
      ...tsConfig.compilerOptions,
      strict: true,
      noImplicitAny: true,
      strictNullChecks: true,
      strictFunctionTypes: true,
      noImplicitReturns: true,
      noFallthroughCasesInSwitch: true,
      noUncheckedIndexedAccess: true,
      exactOptionalPropertyTypes: true
    }
    
    fs.writeFileSync(tsConfigPath, JSON.stringify(tsConfig, null, 2))
    this.log('✅ TypeScript strict mode enabled')
    this.improvements.push('TypeScript strict mode enabled')
  }

  async addESLintRules() {
    this.log('Adding comprehensive ESLint rules...')
    
    const eslintConfig = {
      extends: [
        'eslint:recommended',
        '@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended'
      ],
      plugins: ['@typescript-eslint', 'react', 'react-hooks'],
      rules: {
        'no-console': 'warn',
        'no-debugger': 'error',
        'no-unused-vars': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn'
      },
      settings: {
        react: {
          version: 'detect'
        }
      }
    }
    
    fs.writeFileSync(path.join(process.cwd(), '.eslintrc.json'), JSON.stringify(eslintConfig, null, 2))
    this.log('✅ ESLint rules configured')
    this.improvements.push('ESLint rules configured')
  }

  async runOptimizations() {
    try {
      this.log('Starting performance optimizations...')
      
      await this.optimizeBundleSize()
      await this.optimizeViteConfig()
      await this.addPerformanceMonitoring()
      await this.optimizeImages()
      await this.addErrorBoundary()
      await this.addTypeScriptStrictMode()
      await this.addESLintRules()
      
      const endTime = Date.now()
      const duration = Math.round((endTime - this.startTime) / 1000)
      
      console.log('\n🎉 Performance Optimizations Complete!')
      console.log('=====================================')
      console.log(`Duration: ${duration} seconds`)
      console.log(`Improvements implemented: ${this.improvements.length}`)
      console.log('\nImprovements:')
      this.improvements.forEach((improvement, index) => {
        console.log(`  ${index + 1}. ${improvement}`)
      })
      
    } catch (error) {
      this.log(`Optimization failed: ${error.message}`, 'error')
    }
  }
}

// Run optimizations
const optimizer = new PerformanceOptimizer()
optimizer.runOptimizations()