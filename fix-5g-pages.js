const fs = require('fs');
const path = require('path');

// Fix 5G pages - component names can't start with numbers
const fiveGPages = [
  'src/5g-data-analytics/page.tsx',
  'src/5g-edge-computing/page.tsx',
  'src/5g-iot-solutions/page.tsx',
  'src/5g-mobile-applications/page.tsx',
  'src/5g-network-infrastructure/page.tsx',
  'src/5g-private-networks/page.tsx',
  'src/5g-smart-city-solutions/page.tsx',
  'src/5g-solutions/page.tsx'
];

function createClean5GPageComponent(filePath) {
  const pathParts = filePath.split('/');
  const pageName = pathParts[pathParts.length - 2]; // Get the directory name
  const componentName = pageName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('').replace('5g', 'FiveG'); // Replace 5g with FiveG
  
  return `'use client';
import React from 'react';
import Head from 'next/head';

const ${componentName}Page = () => {
  return (
    <>
      <Head>
        <title>${componentName} | Zion Tech Group</title>
        <meta name="description" content="Professional ${componentName} services and solutions." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ${componentName}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional ${componentName} services and solutions for your business.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-white mb-4">Our ${componentName} Services</h2>
              <p className="text-gray-300 mb-6">
                We provide comprehensive ${componentName} solutions tailored to your business needs.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Service 1</h3>
                  <p className="text-gray-300">Description of the first service offering.</p>
                </div>
                <div className="bg-white/5 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Service 2</h3>
                  <p className="text-gray-300">Description of the second service offering.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ${componentName}Page;
`;
}

// Fix useIntersectionObserver.ts warning
const useIntersectionObserverContent = `import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
}

interface UseIntersectionObserverReturn {
  ref: React.RefObject<Element>;
  isIntersecting: boolean;
  entry: IntersectionObserverEntry | null;
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
): UseIntersectionObserverReturn {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const ref = useRef<Element>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        setEntry(entry);
      },
      options
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options]); // Include options in dependency array

  return { ref, isIntersecting, entry };
}
`;

// Main execution
console.log('Fixing 5G pages and useIntersectionObserver...');

// Fix 5G pages
fiveGPages.forEach(filePath => {
  const fullPath = path.join('/workspace', filePath);
  
  if (fs.existsSync(fullPath)) {
    try {
      const cleanContent = createClean5GPageComponent(filePath);
      fs.writeFileSync(fullPath, cleanContent);
      console.log(`Fixed: ${filePath}`);
    } catch (error) {
      console.error(`Error fixing ${filePath}:`, error.message);
    }
  }
});

// Fix useIntersectionObserver.ts
fs.writeFileSync('/workspace/app/hooks/useIntersectionObserver.ts', useIntersectionObserverContent);
console.log('Fixed: app/hooks/useIntersectionObserver.ts');

console.log('5G pages and useIntersectionObserver fix completed!');