const fs = require('fs');
const path = require('path');

// List of files with syntax errors that need fixing
const filesToFix = [
  'components/layout/EnhancedFooter.tsx',
  'components/layout/EnhancedNavigation.tsx', 
  'components/layout/MainLayout.tsx',
  'components/ui/Card.tsx',
  'pages/contact.tsx',
  'pages/sitemap.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Fix malformed import statements
    if (content.includes("import React from 'react';'import")) {
      content = content.replace(
        /import React from 'react';'import/g,
        "import React from 'react';\nimport"
      );
      fixed = true;
    }
    
    if (content.includes("';'import")) {
      content = content.replace(/';\s*'import/g, "';\nimport");
      fixed = true;
    }
    
    if (content.includes("';'const")) {
      content = content.replace(/';\s*'const/g, "';\n\nconst");
      fixed = true;
    }
    
    if (content.includes("';'interface")) {
      content = content.replace(/';\s*'interface/g, "';\n\ninterface");
      fixed = true;
    }
    
    // Fix malformed JSX in Card.tsx
    if (filePath.includes('Card.tsx')) {
      content = content.replace(
        /import React from 'react';'import { cn } from '\.\.\/\.\.\/src\/lib\/utils';''const Card = React\.forwardRef<;/g,
        `import React from 'react';
import { cn } from '../../src/lib/utils';

const Card = React.forwardRef<
  HTMLDivElement, 
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-lg border bg-card text-card-foreground shadow-sm', 
      className
    )}
    {...props}
  />
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef<
  HTMLDivElement, 
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };`
      );
      fixed = true;
    }
    
    // Fix duplicate useState import in contact.tsx
    if (filePath.includes('contact.tsx')) {
      content = content.replace(
        /import React, { useState } from 'react';\s*import type { NextPage } from 'next';\s*import MainLayout from '\.\.\/components\/layout\/MainLayout';\s*import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle, Loader2 } from 'lucide-react';\s*import { useState } from 'react';/g,
        `import React, { useState } from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle, Loader2 } from 'lucide-react';`
      );
      fixed = true;
    }
    
    if (fixed) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    } else {
      console.log(`No fixes needed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);

console.log('Syntax error fixes completed!');