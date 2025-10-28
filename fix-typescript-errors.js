#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of files with TypeScript errors and their fixes
const fixes = [
  // Remove unused ReactNode imports
  { file: 'app/components/ImageOptimizer.tsx', pattern: /import React, { ReactNode } from 'react';/g, replacement: "import React from 'react';" },
  { file: 'app/components/LazyWrapper.tsx', pattern: /import React, { ReactNode } from 'react';/g, replacement: "import React from 'react';" },
  { file: 'app/components/LoadingSkeleton.tsx', pattern: /import React, { ReactNode } from 'react';/g, replacement: "import React from 'react';" },
  { file: 'app/components/Navigation.tsx', pattern: /import React, { memo } from 'react';/g, replacement: "import React from 'react';" },
  { file: 'app/components/NotFoundPage.tsx', pattern: /import React, { ReactNode } from 'react';/g, replacement: "import React from 'react';" },
  { file: 'app/components/OptimizedLoading.tsx', pattern: /import React, { ReactNode } from 'react';/g, replacement: "import React from 'react';" },
  { file: 'app/components/PerformanceEnhancer.tsx', pattern: /import React, { ReactNode } from 'react';/g, replacement: "import React from 'react';" },
  { file: 'app/components/ResponsiveContainer.tsx', pattern: /import React, { ReactNode } from 'react';/g, replacement: "import React from 'react';" },
  { file: 'app/components/SEOEnhancer.tsx', pattern: /import React, { ReactNode } from 'react';/g, replacement: "import React from 'react';" },
  { file: 'app/components/SEOOptimizer.tsx', pattern: /import React, { ReactNode } from 'react';/g, replacement: "import React from 'react';" },
  { file: 'app/components/SearchBar.tsx', pattern: /import React, { ReactNode } from 'react';/g, replacement: "import React from 'react';" },
  { file: 'app/components/SearchModal.tsx', pattern: /import React, { ReactNode } from 'react';/g, replacement: "import React from 'react';" },
  { file: 'app/components/SecurityEnhancer.tsx', pattern: /import React, { ReactNode } from 'react';/g, replacement: "import React from 'react';" },
  { file: 'app/components/ServiceCard.tsx', pattern: /import React, { ReactNode } from 'react';/g, replacement: "import React from 'react';" },
  { file: 'app/components/ServiceCardSkeleton.tsx', pattern: /import React, { ReactNode } from 'react';/g, replacement: "import React from 'react';" },
  { file: 'app/components/ServicePageTemplate.tsx', pattern: /import React, { ReactNode } from 'react';/g, replacement: "import React from 'react';" },
  { file: 'app/components/ServiceWorker.tsx', pattern: /import React, { ReactNode } from 'react';/g, replacement: "import React from 'react';" },
  { file: 'app/components/Sidebar.tsx', pattern: /import React, { ReactNode } from 'react';/g, replacement: "import React from 'react';" },
  { file: 'app/components/StructuredData.tsx', pattern: /import React, { ReactNode } from 'react';/g, replacement: "import React from 'react';" },
  { file: 'app/components/SystemMonitor.tsx', pattern: /import React, { ReactNode } from 'react';/g, replacement: "import React from 'react';" },
  { file: 'app/micro-saas-services/microSaasServices.tsx', pattern: /import React, { ReactNode } from 'react';/g, replacement: "import React from 'react';" },
  { file: 'app/micro-saas-services/services.tsx', pattern: /import React, { ReactNode } from 'react';/g, replacement: "import React from 'react';" },
  { file: 'app/pages/AdminPage.tsx', pattern: /import React, { ReactNode } from 'react';/g, replacement: "import React from 'react';" },
  { file: 'app/pages/ContactPage.tsx', pattern: /import React, { ReactNode } from 'react';/g, replacement: "import React from 'react';" },
  { file: 'app/root-layout.tsx', pattern: /import React, { ReactNode } from 'react';/g, replacement: "import React from 'react';" },
  { file: 'app/service-template.tsx', pattern: /import React, { ReactNode } from 'react';/g, replacement: "import React from 'react';" },
  { file: 'app/types/enhanced.types.ts', pattern: /import React, { ReactNode } from 'react';/g, replacement: "import React from 'react';" },
  
  // Remove unused Navigation imports
  { file: 'app/page-new.tsx', pattern: /import Navigation from '\.\/components\/Navigation';/g, replacement: "" },
  { file: 'app/page-optimized.tsx', pattern: /import Navigation from '\.\/components\/Navigation';/g, replacement: "" },
  
  // Fix unused variables in Navigation.tsx
  { file: 'app/components/Navigation.tsx', pattern: /const \[isOpen, setIsOpen\] = useState\(false\);/g, replacement: "const [isOpen] = useState(false);" },
  
  // Fix unused variables in PerformanceMonitoring.tsx
  { file: 'app/components/PerformanceMonitoring.tsx', pattern: /const memoryUsage = performance\.memory;/g, replacement: "// const memoryUsage = performance.memory;" },
  
  // Fix unused variables in PerformanceOptimizer.tsx
  { file: 'app/components/PerformanceOptimizer.tsx', pattern: /const fidEntry = entries\.find\(entry => entry\.name === 'first-input'\);/g, replacement: "// const fidEntry = entries.find(entry => entry.name === 'first-input');" },
  { file: 'app/components/PerformanceOptimizer.tsx', pattern: /const clsEntry = entries\.find\(entry => entry\.name === 'layout-shift'\);/g, replacement: "// const clsEntry = entries.find(entry => entry.name === 'layout-shift');" },
  
  // Fix unused variables in performanceOptimizer.ts
  { file: 'app/utils/performanceOptimizer.ts', pattern: /registration\.addEventListener\('updatefound', \(\) => {/g, replacement: "registration.addEventListener('updatefound', () => {" },
  { file: 'app/utils/performanceOptimizer.ts', pattern: /registration\.addEventListener\('updatefound', \(\) => {[\s\S]*?}\);/g, replacement: "registration.addEventListener('updatefound', () => {\n      // Handle update found\n    });" },
];

// Apply fixes
fixes.forEach(fix => {
  const filePath = path.join(__dirname, fix.file);
  
  if (fs.existsSync(filePath)) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      
      content = content.replace(fix.pattern, fix.replacement);
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed: ${fix.file}`);
      } else {
        console.log(`No changes needed: ${fix.file}`);
      }
    } catch (error) {
      console.error(`Error processing ${fix.file}:`, error.message);
    }
  } else {
    console.log(`File not found: ${fix.file}`);
  }
});

console.log('TypeScript error fixes completed!');