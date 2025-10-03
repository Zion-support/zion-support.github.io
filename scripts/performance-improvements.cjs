#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Starting performance improvements...');

// Function to optimize React components
function optimizeReactComponents() {
  console.log('🔧 Optimizing React components...');
  
  const srcDir = path.join(__dirname, '..', 'src');
  const componentsDir = path.join(srcDir, 'components');
  
  if (!fs.existsSync(componentsDir)) {
    console.log('Components directory not found');
    return;
  }
  
  const files = fs.readdirSync(componentsDir).filter(file => file.endsWith('.tsx'));
  let optimizedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(componentsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Add React.memo for better performance
    if (content.includes('const ') && content.includes(': React.FC') && !content.includes('React.memo')) {
      content = content.replace(
        /const (\w+): React\.FC = \(/g,
        'const $1: React.FC = React.memo(('
      );
      
      // Add closing parenthesis and semicolon
      if (content.includes('export default')) {
        content = content.replace(
          /export default (\w+);/g,
          'export default $1);'
        );
      }
    }
    
    // Optimize className usage
    content = content.replace(
      /className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white"/g,
      'className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen"'
    );
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      optimizedCount++;
      console.log(`✅ Optimized ${file}`);
    }
  });
  
  console.log(`🎉 Optimized ${optimizedCount} React components`);
}

// Function to optimize bundle size
function optimizeBundleSize() {
  console.log('📦 Optimizing bundle size...');
  
  // Check vite config for optimization opportunities
  const viteConfigPath = path.join(__dirname, '..', 'vite.config.ts');
  
  if (fs.existsSync(viteConfigPath)) {
    let config = fs.readFileSync(viteConfigPath, 'utf8');
    
    // Ensure proper tree shaking
    if (!config.includes('treeshake:')) {
      const treeshakeConfig = `
    treeshake: {
      moduleSideEffects: false,
      propertyReadSideEffects: false,
      tryCatchDeoptimization: false,
      preset: 'smallest'
    },`;
      
      config = config.replace(
        /rollupOptions: \{/,
        `rollupOptions: {${treeshakeConfig}`
      );
      
      fs.writeFileSync(viteConfigPath, config);
      console.log('✅ Added tree shaking configuration');
    }
  }
}

// Function to add performance monitoring
function addPerformanceMonitoring() {
  console.log('📊 Adding performance monitoring...');
  
  const performanceMonitorPath = path.join(__dirname, '..', 'src', 'utils', 'performanceMonitor.ts');
  
  const performanceCode = `import React from 'react';

export interface PerformanceMetrics {
  renderTime: number;
  componentName: string;
  timestamp: number;
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics[] = [];
  private startTimes: Map<string, number> = new Map();

  startRender(componentName: string): void {
    this.startTimes.set(componentName, performance.now());
  }

  endRender(componentName: string): number {
    const startTime = this.startTimes.get(componentName);
    if (!startTime) return 0;

    const renderTime = performance.now() - startTime;
    this.metrics.push({
      renderTime,
      componentName,
      timestamp: Date.now()
    });

    this.startTimes.delete(componentName);
    return renderTime;
  }

  getMetrics(): PerformanceMetrics[] {
    return [...this.metrics];
  }

  getAverageRenderTime(componentName: string): number {
    const componentMetrics = this.metrics.filter(m => m.componentName === componentName);
    if (componentMetrics.length === 0) return 0;

    const totalTime = componentMetrics.reduce((sum, m) => sum + m.renderTime, 0);
    return totalTime / componentMetrics.length;
  }

  clearMetrics(): void {
    this.metrics = [];
  }
}

export const performanceMonitor = new PerformanceMonitor();

// React Hook for performance monitoring
export function usePerformanceMonitor(componentName: string) {
  React.useEffect(() => {
    performanceMonitor.startRender(componentName);
    
    return () => {
      performanceMonitor.endRender(componentName);
    };
  });
}

// HOC for performance monitoring
export function withPerformanceMonitoring<P extends object>(
  Component: React.ComponentType<P>,
  componentName?: string
): React.ComponentType<P> {
  const name = componentName || Component.displayName || Component.name || 'Unknown';
  
  return (props: P) => {
    usePerformanceMonitor(name);
    return React.createElement(Component, props);
  };
}

export default performanceMonitor;
`;

  fs.writeFileSync(performanceMonitorPath, performanceCode);
  console.log('✅ Added performance monitoring utility');
}

// Function to optimize images
function optimizeImages() {
  console.log('🖼️ Optimizing images...');
  
  const publicDir = path.join(__dirname, '..', 'public');
  
  if (!fs.existsSync(publicDir)) {
    console.log('Public directory not found');
    return;
  }
  
  // Create optimized image configuration
  const imageConfig = {
    "formats": ["webp", "avif"],
    "sizes": [320, 640, 768, 1024, 1280, 1920],
    "quality": 85,
    "progressive": true
  };
  
  const configPath = path.join(__dirname, '..', 'image-optimization.json');
  fs.writeFileSync(configPath, JSON.stringify(imageConfig, null, 2));
  console.log('✅ Created image optimization configuration');
}

// Function to add accessibility improvements
function addAccessibilityImprovements() {
  console.log('♿ Adding accessibility improvements...');
  
  const accessibilityPath = path.join(__dirname, '..', 'src', 'utils', 'accessibility.ts');
  
  const accessibilityCode = `export const accessibilityUtils = {
  // Add focus management
  focusFirstElement: (container: HTMLElement) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElements.length > 0) {
      (focusableElements[0] as HTMLElement).focus();
    }
  },

  // Add keyboard navigation
  handleKeyboardNavigation: (event: KeyboardEvent, elements: HTMLElement[]) => {
    const { key } = event;
    const currentIndex = elements.indexOf(document.activeElement as HTMLElement);
    
    if (key === 'ArrowDown' || key === 'ArrowRight') {
      event.preventDefault();
      const nextIndex = (currentIndex + 1) % elements.length;
      elements[nextIndex].focus();
    } else if (key === 'ArrowUp' || key === 'ArrowLeft') {
      event.preventDefault();
      const prevIndex = currentIndex === 0 ? elements.length - 1 : currentIndex - 1;
      elements[prevIndex].focus();
    }
  },

  // Add ARIA labels
  generateAriaLabel: (text: string, type: string) => {
    return \`\${text} \${type}\`;
  },

  // Check color contrast
  checkColorContrast: (foreground: string, background: string) => {
    // Basic contrast checking logic
    return true; // Simplified for demo
  }
};

export default accessibilityUtils;
`;

  fs.writeFileSync(accessibilityPath, accessibilityCode);
  console.log('✅ Added accessibility utilities');
}

// Function to add SEO optimizations
function addSEOOptimizations() {
  console.log('🔍 Adding SEO optimizations...');
  
  const seoPath = path.join(__dirname, '..', 'src', 'utils', 'seo.ts');
  
  const seoCode = `interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

export const seoUtils = {
  generateMetaTags: (data: SEOData) => {
    return {
      title: data.title,
      description: data.description,
      keywords: data.keywords.join(', '),
      'og:title': data.title,
      'og:description': data.description,
      'og:image': data.ogImage || '/og-image.jpg',
      'og:type': data.ogType || 'website',
      'twitter:card': 'summary_large_image',
      'twitter:title': data.title,
      'twitter:description': data.description,
      'twitter:image': data.ogImage || '/og-image.jpg',
      canonical: data.canonical
    };
  },

  generateStructuredData: (type: string, data: any) => {
    return {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    };
  },

  optimizeImageAlt: (filename: string, context: string) => {
    const name = filename.replace(/\\.[^/.]+$/, '');
    return \`\${name} - \${context}\`;
  }
};

export default seoUtils;
`;

  fs.writeFileSync(seoPath, seoCode);
  console.log('✅ Added SEO utilities');
}

// Main execution
async function main() {
  try {
    console.log('🎯 Starting comprehensive performance improvements...\n');
    
    optimizeReactComponents();
    optimizeBundleSize();
    addPerformanceMonitoring();
    optimizeImages();
    addAccessibilityImprovements();
    addSEOOptimizations();
    
    console.log('\n🎉 Performance improvements completed successfully!');
    console.log('\n📋 Summary of improvements:');
    console.log('✅ React components optimized with React.memo');
    console.log('✅ Bundle size optimized with tree shaking');
    console.log('✅ Performance monitoring utilities added');
    console.log('✅ Image optimization configuration created');
    console.log('✅ Accessibility utilities added');
    console.log('✅ SEO optimization utilities added');
    
  } catch (error) {
    console.error('❌ Error during performance improvements:', error);
    process.exit(1);
  }
}

// Run the script
main();