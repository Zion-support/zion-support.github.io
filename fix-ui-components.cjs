#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing UI components...\n');

// Create a clean Button component
const buttonComponent = `import React from 'react';
import { cn } from '../../utils/cn';

const buttonVariants = {
  default: 'bg-blue-600 text-white hover:bg-blue-700',
  outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50',
  ghost: 'text-gray-700 hover:bg-gray-100',
  destructive: 'bg-red-600 text-white hover:bg-red-700'
};

const buttonSizes = {
  sm: 'px-3 py-1.5 text-sm',
  default: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg'
};

export function Button({ 
  className = '', 
  variant = 'default', 
  size = 'default', 
  children, 
  ...props 
}) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}`;

// Create a clean Input component
const inputComponent = `import React from 'react';

export function Input({ className = '', type = 'text', ...props }) {
  return (
    <input
      type={type}
      className={cn(
        'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  );
}`;

// Create a clean Textarea component
const textareaComponent = `import React from 'react';

export function Textarea({ className = '', ...props }) {
  return (
    <textarea
      className={cn(
        'flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  );
}`;

// Create a clean Card component
const cardComponent = `import React from 'react';

export function Card({ className = '', children, ...props }) {
  return (
    <div
      className={cn(
        'rounded-lg border border-gray-200 bg-white shadow-sm',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}`;

// Create a clean Tooltip components
const tooltipComponent = `import React, { useState } from 'react';

export function Tooltip({ children, content, ...props }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      {...props}
    >
      {children}
      {isVisible && (
        <div className="absolute z-50 px-2 py-1 text-xs text-white bg-gray-900 rounded shadow-lg bottom-full left-1/2 transform -translate-x-1/2 mb-1">
          {content}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
        </div>
      )}
    </div>
  );
}

export function TooltipContent({ children, className = '', ...props }) {
  return (
    <div className={cn('px-2 py-1 text-xs text-white bg-gray-900 rounded', className)} {...props}>
      {children}
    </div>
  );
}

export function TooltipProvider({ children }) {
  return <>{children}</>;
}

export function TooltipTrigger({ children, ...props }) {
  return <div {...props}>{children}</div>;
}`;

// Create a clean use-toast hook
const useToastComponent = `import { useState } from 'react';

interface Toast {
  id: string;
  title: string;
  description?: string;
  variant?: 'default' | 'destructive';
}

let toasts: Toast[] = [];
let listeners: (() => void)[] = [];

export function toast({ title, description, variant = 'default' }: Omit<Toast, 'id'>) {
  const id = Math.random().toString(36).substr(2, 9);
  const newToast = { id, title, description, variant };
  
  toasts = [...toasts, newToast];
  listeners.forEach(listener => listener());
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    toasts = toasts.filter(t => t.id !== id);
    listeners.forEach(listener => listener());
  }, 5000);
}

export function useToast() {
  const [toastList, setToastList] = useState<Toast[]>(toasts);
  
  useState(() => {
    const listener = () => setToastList([...toasts]);
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  });
  
  return { toast, toasts: toastList };
}`;

// Create a simple cn utility
const cnUtility = `export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}`;

// Write all components
const components = [
  { path: 'src/components/ui/button.tsx', content: buttonComponent },
  { path: 'src/components/ui/input.tsx', content: inputComponent },
  { path: 'src/components/ui/textarea.tsx', content: textareaComponent },
  { path: 'src/components/ui/card.tsx', content: cardComponent },
  { path: 'src/components/ui/tooltip.tsx', content: tooltipComponent },
  { path: 'src/components/ui/use-toast.tsx', content: useToastComponent },
  { path: 'src/utils/cn.ts', content: cnUtility }
];

components.forEach(({ path: filePath, content }) => {
  try {
    // Ensure directory exists
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Created: ${filePath}`);
  } catch (error) {
    console.error(`❌ Error creating ${filePath}:`, error.message);
  }
});

console.log('\n🎉 UI components fixed!');