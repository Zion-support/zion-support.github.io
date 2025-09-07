#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class FinalComprehensiveFix {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    }[type] || 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  fixServicePages() {
    this.log('🔧 Fixing service pages...', 'PROGRESS');

    const servicePages = [
      'app/services/automation/page.tsx',
      'app/services/consulting/page.tsx'
    ];

    for (const pagePath of servicePages) {
      const fullPath = path.join(this.projectRoot, pagePath);
      if (fs.existsSync(fullPath)) {
        try {
          let content = fs.readFileSync(fullPath, 'utf8');
          
          // Ensure proper closing
          if (!content.trim().endsWith('}')) {
            content += '\n}';
          }
          
          // Remove extra closing braces
          content = content.replace(/\n}\n}$/g, '\n}');
          
          fs.writeFileSync(fullPath, content);
          this.fixedFiles.push(pagePath);
          this.log(`Fixed ${pagePath}`, 'SUCCESS');
        } catch (error) {
          this.errors.push(`Failed to fix ${pagePath}: ${error.message}`);
        }
      }
    }
  }

  createMissingDependencies() {
    this.log('🔧 Creating missing dependencies...', 'PROGRESS');

    // Create lib/utils.ts
    const libUtilsPath = path.join(this.projectRoot, 'lib', 'utils.ts');
    const libDir = path.dirname(libUtilsPath);
    if (!fs.existsSync(libDir)) {
      fs.mkdirSync(libDir, { recursive: true });
    }

    const utilsContent = `import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`;

    fs.writeFileSync(libUtilsPath, utilsContent);
    this.fixedFiles.push('lib/utils.ts');

    // Create data/docsSearchData.ts
    const dataDir = path.join(this.projectRoot, 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const docsSearchDataContent = `export interface SearchSuggestion {
  text: string;
  description?: string;
  category?: string;
}

export const docsSearchSuggestions: SearchSuggestion[] = [
  { text: "Getting Started", description: "Learn how to get started with our API", category: "Guides" },
  { text: "API Reference", description: "Complete API reference documentation", category: "Reference" },
  { text: "Webhooks", description: "Webhook configuration and events", category: "Integration" },
  { text: "Authentication", description: "API authentication methods", category: "Security" },
  { text: "Rate Limits", description: "API rate limiting information", category: "Reference" },
  { text: "Error Codes", description: "API error codes and handling", category: "Reference" }
];

export function getDocsSearchPath(query: string): string | null {
  const suggestions = docsSearchSuggestions.find(s => 
    s.text.toLowerCase().includes(query.toLowerCase()) ||
    s.description?.toLowerCase().includes(query.toLowerCase())
  );
  
  if (suggestions) {
    switch (suggestions.text) {
      case "Getting Started":
        return "/developers/docs/getting-started";
      case "API Reference":
        return "/developers/docs/reference";
      case "Webhooks":
        return "/developers/docs/webhooks";
      case "Authentication":
        return "/developers/docs/authentication";
      case "Rate Limits":
        return "/developers/docs/rate-limits";
      case "Error Codes":
        return "/developers/docs/errors";
      default:
        return null;
    }
  }
  
  return null;
}`;

    fs.writeFileSync(path.join(dataDir, 'docsSearchData.ts'), docsSearchDataContent);
    this.fixedFiles.push('data/docsSearchData.ts');

    // Create types/search.ts
    const typesDir = path.join(this.projectRoot, 'types');
    if (!fs.existsSync(typesDir)) {
      fs.mkdirSync(typesDir, { recursive: true });
    }

    const searchTypesContent = `export interface SearchSuggestion {
  text: string;
  description?: string;
  category?: string;
}`;

    fs.writeFileSync(path.join(typesDir, 'search.ts'), searchTypesContent);
    this.fixedFiles.push('types/search.ts');

    this.log('Missing dependencies created', 'SUCCESS');
  }

  fixEnhancedSearchInput() {
    this.log('🔧 Fixing EnhancedSearchInput component...', 'PROGRESS');

    const searchDir = path.join(this.projectRoot, 'src', 'components', 'search');
    if (!fs.existsSync(searchDir)) {
      fs.mkdirSync(searchDir, { recursive: true });
    }

    const enhancedSearchInputContent = `import React, { useState, useEffect, useRef, useMemo } from "react";
import { Search, X } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { SearchSuggestion } from "@/types/search";

interface EnhancedSearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onSelectSuggestion: (suggestion: SearchSuggestion) => void;
  searchSuggestions: SearchSuggestion[];
  placeholder?: string;
  className?: string;
}

export function EnhancedSearchInput({
  value,
  onChange,
  onSelectSuggestion,
  searchSuggestions,
  placeholder = "Search...",
  className = ""
}: EnhancedSearchInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const filteredSuggestions = useMemo(() => {
    if (!value.trim()) return searchSuggestions;
    return searchSuggestions.filter(suggestion =>
      suggestion.text.toLowerCase().includes(value.toLowerCase()) ||
      suggestion.description?.toLowerCase().includes(value.toLowerCase())
    );
  }, [value, searchSuggestions]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex(prev => 
          prev < filteredSuggestions.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex(prev => 
          prev > 0 ? prev - 1 : filteredSuggestions.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (highlightedIndex >= 0 && highlightedIndex < filteredSuggestions.length) {
          onSelectSuggestion(filteredSuggestions[highlightedIndex]);
          setIsOpen(false);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        break;
    }
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    onSelectSuggestion(suggestion);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={inputRef}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          type="text"
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            setIsOpen(true);
            setHighlightedIndex(-1);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={\`pl-10 pr-10 \${className}\`}
        />
        {value && (
          <button
            type="button"
            onClick={() => {
              onChange('');
              setIsOpen(false);
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {isOpen && filteredSuggestions.length > 0 && (
        <ul
          ref={listRef}
          className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto"
        >
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className={\`px-4 py-2 cursor-pointer hover:bg-gray-100 \${index === highlightedIndex ? 'bg-gray-100' : ''}\`}
            >
              <div className="font-medium text-gray-900">{suggestion.text}</div>
              {suggestion.description && (
                <div className="text-sm text-gray-500">{suggestion.description}</div>
              )}
              {suggestion.category && (
                <div className="text-xs text-blue-600 mt-1">{suggestion.category}</div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}`;

    fs.writeFileSync(path.join(searchDir, 'EnhancedSearchInput.tsx'), enhancedSearchInputContent);
    this.fixedFiles.push('src/components/search/EnhancedSearchInput.tsx');

    this.log('EnhancedSearchInput component fixed', 'SUCCESS');
  }

  createUIComponents() {
    this.log('🔧 Creating UI components...', 'PROGRESS');

    const uiDir = path.join(this.projectRoot, 'src', 'components', 'ui');
    if (!fs.existsSync(uiDir)) {
      fs.mkdirSync(uiDir, { recursive: true });
    }

    const inputComponentContent = `import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };`;

    fs.writeFileSync(path.join(uiDir, 'input.tsx'), inputComponentContent);
    this.fixedFiles.push('src/components/ui/input.tsx');

    this.log('UI components created', 'SUCCESS');
  }

  async run() {
    this.log('🚀 Starting final comprehensive fix...', 'PROGRESS');

    try {
      this.fixServicePages();
      this.createMissingDependencies();
      this.fixEnhancedSearchInput();
      this.createUIComponents();

      this.log('🎉 Final comprehensive fix completed!', 'SUCCESS');
      this.log(`✅ Fixed files: ${this.fixedFiles.length}`, 'SUCCESS');
      
      if (this.errors.length > 0) {
        this.log(`⚠️ Errors encountered: ${this.errors.length}`, 'WARNING');
        this.errors.forEach(error => this.log(`   ${error}`, 'ERROR'));
      }

      return {
        fixedFiles: this.fixedFiles,
        errors: this.errors,
        success: this.errors.length === 0
      };
    } catch (error) {
      this.log(`❌ Fix failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const fixer = new FinalComprehensiveFix();
  fixer.run().catch(console.error);
}

module.exports = FinalComprehensiveFix;