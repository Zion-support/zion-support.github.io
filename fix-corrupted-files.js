const fs = require('fs');
const path = require('path');

// List of corrupted files and their proper content
const filesToFix = {
  'app/components/AnimatedText.tsx': `'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = '', 
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {text}
    </motion.div>
  )
}

export default AnimatedText`,

  'app/components/Breadcrumb.tsx': `'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <ChevronRightIcon className="h-4 w-4" />
          )}
          {item.href ? (
            <Link href={item.href} className="hover:text-gray-900">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}

export default Breadcrumb`
};

// Fix each file
Object.entries(filesToFix).forEach(([filePath, content]) => {
  const fullPath = path.join(process.cwd(), filePath);
  
  try {
    // Delete the corrupted file
    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath);
    }
    
    // Create the directory if it doesn't exist
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Write the new content
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('All files have been fixed!');
