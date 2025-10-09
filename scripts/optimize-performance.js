#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to optimize React components for better performance
function optimizeComponent(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Add React.memo to functional components that don't have it
    if (content.includes('const ') && content.includes(': React.FC') && !content.includes('React.memo')) {
      // This is a basic optimization - in practice, you'd want more sophisticated detection
      }
    
    // Add useCallback to event handlers
    if (content.includes('onClick') && !content.includes('useCallback')) {
      }
    
    // Check for missing key props in lists
    if (content.includes('.map(') && !content.includes('key=')) {
      without key props`);
    }
    
    // Check for inline object/function definitions in JSX
    if (content.includes('style={{') || content.includes('onClick={()')) {
      }
    
    return modified;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to add performance optimizations
async function addPerformanceOptimizations() {
  const componentFiles = await glob('app/components/**/*.{ts,tsx}', {
    ignore: ['**/node_modules/**', '**/dist/**', '**/build/**']
  });
  
  let totalFiles = 0;
  let optimizedFiles = 0;
  
  for (const file of componentFiles) {
    totalFiles++;
    if (optimizeComponent(file)) {
      optimizedFiles++;
    }
  }
  
  }

// Function to create a performance monitoring component
function createPerformanceMonitor() {
  const performanceMonitorContent = `import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true);
      
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
          }
        }
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      
      return () => observer.disconnect();
    }
  }, []);

  if (!isVisible || !metrics) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-4 rounded-lg text-xs font-mono z-50">
      <div className="font-bold mb-2">Performance Metrics</div>
      <div>LCP: {metrics.lcp?.toFixed(2)}ms</div>
      <div>FID: {metrics.fid?.toFixed(2)}ms</div>
      <div>CLS: {metrics.cls?.toFixed(3)}</div>
    </div>
  );
};

export default PerformanceMonitor;
`;

  fs.writeFileSync('app/components/PerformanceMonitor.tsx', performanceMonitorContent);
  }

// Function to optimize images
function createImageOptimization() {
  const imageOptimizationContent = `import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={\`\${className}\`}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      style={{
        width: width ? \`\${width}px\` : 'auto',
        height: height ? \`\${height}px\` : 'auto'
      }}
    />
  );
};

export default OptimizedImage;
`;

  fs.writeFileSync('app/components/OptimizedImage.tsx', imageOptimizationContent);
  }

// Main function
async function main() {
  await addPerformanceOptimizations();
  createPerformanceMonitor();
  createImageOptimization();
  
  }

main().catch(console.error);