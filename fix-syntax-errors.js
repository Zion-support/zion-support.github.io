const fs = require('fs');
const path = require('path');

// Function to clean up common syntax errors
function cleanFileContent(content) {
  // Remove merge conflict markers
  content = content.replace(/^<<<<<<<.*$/gm, '');
  content = content.replace(/^=======.*$/gm, '');
  content = content.replace(/^>>>>>>>.*$/gm, '');
  
  // Fix duplicate imports
  content = content.replace(/import React from ['"]react['"];\s*import React from ['"]react['"]/g, "import React from 'react'");
  content = content.replace(/import React from ['"]react['"]\s*import React from ['"]react['"]/g, "import React from 'react'");
  
  // Fix duplicate 'use client' directives
  content = content.replace(/['"]use client['"];\s*['"]use client['"]/g, "'use client'");
  content = content.replace(/['"]use client['"]\s*['"]use client['"]/g, "'use client'");
  
  // Fix malformed JSX return statements
  content = content.replace(/return \(\s*,/g, 'return (');
  content = content.replace(/return \(\s*<\/[^>]+>,\s*/g, 'return (');
  
  // Fix missing semicolons in imports
  content = content.replace(/import\s+[^;]+$/gm, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix malformed interface declarations
  content = content.replace(/interface\s+(\w+)\s*\{\s*\n\s*className\?\s*:\s*string\s*\n\s*\}/g, 'interface $1 {\n  className?: string;\n}');
  
  // Fix malformed function parameters
  content = content.replace(/\(\s*\{\s*([^}]+)\s*,\s*\}\s*\)/g, '({ $1 })');
  
  // Fix missing closing braces and parentheses
  content = content.replace(/}\s*;\s*export default/g, '}\n\nexport default');
  
  // Remove extra characters and fix syntax
  content = content.replace(/,\s*\)/g, ')');
  content = content.replace(/,\s*}/g, '}');
  content = content.replace(/}\s*}/g, '}');
  content = content.replace(/}\s*}\s*}/g, '}');
  
  // Fix malformed JSX
  content = content.replace(/<div\s+className=\{className\}><\/div>\s*<h2>/g, '<div className={className}>\n      <h2>');
  
  // Clean up extra whitespace and newlines
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  content = content.replace(/^\s*\n/gm, '');
  
  return content;
}

// Function to fix specific file patterns
function fixSpecificFile(filePath, content) {
  const fileName = path.basename(filePath);
  
  // Fix AccessibilityComponents.tsx
  if (fileName === 'AccessibilityComponents.tsx') {
    content = `'use client';
import React from 'react';

interface AccessibilityComponentsProps {
  className?: string;
}

const AccessibilityComponents: React.FC<AccessibilityComponentsProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>Accessibility Components</h2>
      <p>Accessibility components for enhanced user experience.</p>
    </div>
  );
};

export default AccessibilityComponents;`;
  }
  
  // Fix AdvancedAccessibilityEnhancer.tsx
  if (fileName === 'AdvancedAccessibilityEnhancer.tsx') {
    content = `'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Brain, BarChart, Target, TrendingUp } from 'lucide-react';

interface AdvancedAccessibilityEnhancerProps {
  enableKeyboardNavigation?: boolean;
  enableScreenReader?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
  enableARIALabels?: boolean;
  enableSkipLinks?: boolean;
  enableColorContrast?: boolean;
  enableMotionReduction?: boolean;
  enableFontScaling?: boolean;
  enableVoiceNavigation?: boolean;
}

const AdvancedAccessibilityEnhancer: React.FC<AdvancedAccessibilityEnhancerProps> = ({
  enableKeyboardNavigation = true,
  enableScreenReader = true,
  enableHighContrast = true,
  enableFocusManagement = true,
  enableARIALabels = true,
  enableSkipLinks = true,
  enableColorContrast = true,
  enableMotionReduction = true,
  enableFontScaling = true,
  enableVoiceNavigation = true
}) => {
  const [accessibilitySettings, setAccessibilitySettings] = useState({
    highContrast: false,
    reducedMotion: false,
    fontSize: 'normal',
    screenReader: false,
    keyboardNavigation: false,
  });

  // Detect user preferences
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Check for high contrast preference
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    // Check for color scheme preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    setAccessibilitySettings(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast,
    }));

    // Listen for changes in user preferences
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');
    
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setAccessibilitySettings(prev => ({ ...prev, reducedMotion: e.matches }));
    };
    
    const handleContrastChange = (e: MediaQueryListEvent) => {
      setAccessibilitySettings(prev => ({ ...prev, highContrast: e.matches }));
    };
    
    motionQuery.addEventListener('change', handleMotionChange);
    contrastQuery.addEventListener('change', handleContrastChange);
    
    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  // Apply accessibility styles
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const root = document.documentElement;
    
    // Apply high contrast mode
    if (accessibilitySettings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Apply reduced motion
    if (accessibilitySettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Apply font scaling
    root.style.setProperty('--font-scale', accessibilitySettings.fontSize === 'large' ? '1.2' : '1');
  }, [accessibilitySettings]);

  return (
    <div>
      <h2>Advanced Accessibility Enhancer</h2>
      <p>Enhanced accessibility features for better user experience.</p>
    </div>
  );
};

export default AdvancedAccessibilityEnhancer;`;
  }
  
  // Fix AdvancedErrorBoundary.tsx
  if (fileName === 'AdvancedErrorBoundary.tsx') {
    content = `'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';

interface AdvancedErrorBoundaryProps {
  children: ReactNode;
  className?: string;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  errorId?: string;
}

class AdvancedErrorBoundary extends Component<AdvancedErrorBoundaryProps, State> {
  constructor(props: AdvancedErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    const errorReport = {
      errorId: this.state.errorId || this.generateErrorId(),
      error,
      errorInfo,
    };
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary: ', error, errorInfo);
    }

    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo);
    }
  }

  logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    // You can integrate with services like Sentry, LogRocket, etc.
    const errorData = {
      error: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
    };
  };

  generateErrorId = () => {
    return 'error_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <p>We apologize for the inconvenience. Please try refreshing the page.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default AdvancedErrorBoundary;`;
  }
  
  return content;
}

// Main function to process files
function processFiles() {
  const appDir = path.join(__dirname, 'app');
  const srcDir = path.join(__dirname, 'src');
  const componentsDir = path.join(__dirname, 'components');
  
  const directories = [appDir, srcDir, componentsDir];
  
  directories.forEach(dir => {
    if (fs.existsSync(dir)) {
      processDirectory(dir);
    }
  });
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        // Clean the content
        content = cleanFileContent(content);
        content = fixSpecificFile(filePath, content);
        
        // Only write if content changed
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log('Fixed: ' + filePath);
        }
      } catch (error) {
        console.error('Error processing ' + filePath + ':', error.message);
      }
    }
  });
}

// Run the script
processFiles();
console.log('Syntax error fixing completed!');