import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Volume2, MousePointer, Keyboard, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

interface AccessibilityTest {
  id: string;
  name: string;
  description: string;
  status: 'pass' | 'fail' | 'warning' | 'pending';
  category: 'color' | 'contrast' | 'keyboard' | 'screen-reader' | 'focus' | 'semantic';
  fix?: string;
}

const AccessibilityTester: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [tests, setTests] = useState<AccessibilityTest[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const accessibilityTests: Omit<AccessibilityTest, 'status'>[] = [
    {
      id: 'color-contrast',
      name: 'Color Contrast',
      description: 'Check if text has sufficient contrast ratio',
      category: 'contrast'
    },
    {
      id: 'color-only-info',
      name: 'Color-Only Information',
      description: 'Ensure information is not conveyed by color alone',
      category: 'color'
    },
    {
      id: 'keyboard-navigation',
      name: 'Keyboard Navigation',
      description: 'All interactive elements are keyboard accessible',
      category: 'keyboard'
    },
    {
      id: 'focus-indicators',
      name: 'Focus Indicators',
      description: 'Visible focus indicators for keyboard navigation',
      category: 'focus'
    },
    {
      id: 'heading-structure',
      name: 'Heading Structure',
      description: 'Proper heading hierarchy (h1, h2, h3, etc.)',
      category: 'semantic'
    },
    {
      id: 'alt-text',
      name: 'Alt Text',
      description: 'Images have appropriate alt text',
      category: 'screen-reader'
    },
    {
      id: 'form-labels',
      name: 'Form Labels',
      description: 'Form inputs have associated labels',
      category: 'screen-reader'
    },
    {
      id: 'aria-labels',
      name: 'ARIA Labels',
      description: 'Interactive elements have proper ARIA labels',
      category: 'screen-reader'
    },
    {
      id: 'skip-links',
      name: 'Skip Links',
      description: 'Skip links for keyboard navigation',
      category: 'keyboard'
    },
    {
      id: 'text-scaling',
      name: 'Text Scaling',
      description: 'Text scales properly up to 200%',
      category: 'contrast'
    }
  ];

  useEffect(() => {
    // Initialize tests
    setTests(accessibilityTests.map(test => ({ ...test, status: 'pending' as const })));
  }, []);

  const runTests = async () => {
    setIsRunning(true);
    const newTests = [...tests];

    for (let i = 0; i < newTests.length; i++) {
      newTests[i].status = 'pending';
      setTests([...newTests]);
      
      // Simulate test execution
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const result = await performTest(newTests[i]);
      newTests[i] = { ...newTests[i], ...result };
      setTests([...newTests]);
    }

    setIsRunning(false);
  };

  const performTest = async (test: AccessibilityTest): Promise<Partial<AccessibilityTest>> => {
    switch (test.id) {
      case 'color-contrast':
        return await testColorContrast();
      case 'color-only-info':
        return await testColorOnlyInfo();
      case 'keyboard-navigation':
        return await testKeyboardNavigation();
      case 'focus-indicators':
        return await testFocusIndicators();
      case 'heading-structure':
        return await testHeadingStructure();
      case 'alt-text':
        return await testAltText();
      case 'form-labels':
        return await testFormLabels();
      case 'aria-labels':
        return await testAriaLabels();
      case 'skip-links':
        return await testSkipLinks();
      case 'text-scaling':
        return await testTextScaling();
      default:
        return { status: 'fail', fix: 'Unknown test' };
    }
  };

  const testColorContrast = async (): Promise<Partial<AccessibilityTest>> => {
    // Check if elements have sufficient contrast
    const elements = document.querySelectorAll('*');
    let hasLowContrast = false;
    
    for (const element of elements) {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      // Basic contrast check (simplified)
      if (color === backgroundColor) {
        hasLowContrast = true;
        break;
      }
    }
    
    return {
      status: hasLowContrast ? 'fail' : 'pass',
      fix: hasLowContrast ? 'Increase color contrast between text and background' : undefined
    };
  };

  const testColorOnlyInfo = async (): Promise<Partial<AccessibilityTest>> => {
    // Check if information is conveyed by color alone
    const colorOnlyElements = document.querySelectorAll('[style*="color"]');
    let hasColorOnlyInfo = false;
    
    for (const element of colorOnlyElements) {
      const text = element.textContent || '';
      if (text.trim() && !element.getAttribute('aria-label') && !(element as HTMLElement).title) {
        hasColorOnlyInfo = true;
        break;
      }
    }
    
    return {
      status: hasColorOnlyInfo ? 'warning' : 'pass',
      fix: hasColorOnlyInfo ? 'Add text or icons to supplement color information' : undefined
    };
  };

  const testKeyboardNavigation = async (): Promise<Partial<AccessibilityTest>> => {
    // Check if all interactive elements are keyboard accessible
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]');
    let hasKeyboardIssues = false;
    
    for (const element of interactiveElements) {
      if (element.getAttribute('tabindex') === '-1' && element.matches('button, a, input, select, textarea')) {
        hasKeyboardIssues = true;
        break;
      }
    }
    
    return {
      status: hasKeyboardIssues ? 'fail' : 'pass',
      fix: hasKeyboardIssues ? 'Ensure all interactive elements are keyboard accessible' : undefined
    };
  };

  const testFocusIndicators = async (): Promise<Partial<AccessibilityTest>> => {
    // Check if focus indicators are visible
    const focusableElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');
    let hasFocusIssues = false;
    
    for (const element of focusableElements) {
      const styles = window.getComputedStyle(element, ':focus');
      if (styles.outline === 'none' && !styles.boxShadow) {
        hasFocusIssues = true;
        break;
      }
    }
    
    return {
      status: hasFocusIssues ? 'warning' : 'pass',
      fix: hasFocusIssues ? 'Add visible focus indicators for keyboard navigation' : undefined
    };
  };

  const testHeadingStructure = async (): Promise<Partial<AccessibilityTest>> => {
    // Check heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let hasStructureIssues = false;
    let lastLevel = 0;
    
    for (const heading of headings) {
      const level = parseInt(heading.tagName[1]);
      if (level > lastLevel + 1) {
        hasStructureIssues = true;
        break;
      }
      lastLevel = level;
    }
    
    return {
      status: hasStructureIssues ? 'fail' : 'pass',
      fix: hasStructureIssues ? 'Fix heading hierarchy - no skipping levels' : undefined
    };
  };

  const testAltText = async (): Promise<Partial<AccessibilityTest>> => {
    // Check if images have alt text
    const images = document.querySelectorAll('img');
    let hasAltIssues = false;
    
    for (const img of images) {
      if (!img.alt && !img.getAttribute('aria-label')) {
        hasAltIssues = true;
        break;
      }
    }
    
    return {
      status: hasAltIssues ? 'fail' : 'pass',
      fix: hasAltIssues ? 'Add alt text or aria-label to images' : undefined
    };
  };

  const testFormLabels = async (): Promise<Partial<AccessibilityTest>> => {
    // Check if form inputs have labels
    const inputs = document.querySelectorAll('input, select, textarea');
    let hasLabelIssues = false;
    
    for (const input of inputs) {
      const id = input.id;
      const label = document.querySelector(`label[for="${id}"]`);
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledBy = input.getAttribute('aria-labelledby');
      
      if (!label && !ariaLabel && !ariaLabelledBy) {
        hasLabelIssues = true;
        break;
      }
    }
    
    return {
      status: hasLabelIssues ? 'fail' : 'pass',
      fix: hasLabelIssues ? 'Add labels or ARIA attributes to form inputs' : undefined
    };
  };

  const testAriaLabels = async (): Promise<Partial<AccessibilityTest>> => {
    // Check if interactive elements have ARIA labels
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
    let hasAriaIssues = false;
    
    for (const element of interactiveElements) {
      const text = element.textContent?.trim();
      const ariaLabel = element.getAttribute('aria-label');
      const ariaLabelledBy = element.getAttribute('aria-labelledby');
      
      if (!text && !ariaLabel && !ariaLabelledBy) {
        hasAriaIssues = true;
        break;
      }
    }
    
    return {
      status: hasAriaIssues ? 'warning' : 'pass',
      fix: hasAriaIssues ? 'Add ARIA labels to interactive elements without text' : undefined
    };
  };

  const testSkipLinks = async (): Promise<Partial<AccessibilityTest>> => {
    // Check if skip links exist
    const skipLinks = document.querySelectorAll('a[href="#main"], a[href="#content"], .skip-link');
    
    return {
      status: skipLinks.length > 0 ? 'pass' : 'warning',
      fix: skipLinks.length === 0 ? 'Add skip links for keyboard navigation' : undefined
    };
  };

  const testTextScaling = async (): Promise<Partial<AccessibilityTest>> => {
    // Check if text scales properly
    const body = document.body;
    const originalFontSize = window.getComputedStyle(body).fontSize;
    
    // Simulate 200% scaling
    body.style.fontSize = '200%';
    const scaledFontSize = window.getComputedStyle(body).fontSize;
    body.style.fontSize = originalFontSize;
    
    const scaled = parseFloat(scaledFontSize) > parseFloat(originalFontSize) * 1.5;
    
    return {
      status: scaled ? 'pass' : 'warning',
      fix: !scaled ? 'Ensure text scales properly with browser zoom' : undefined
    };
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pass': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'fail': return <XCircle className="w-4 h-4 text-red-500" />;
      case 'warning': return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      default: return <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pass': return 'text-green-500';
      case 'fail': return 'text-red-500';
      case 'warning': return 'text-yellow-500';
      default: return 'text-gray-500';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'color': return <Eye className="w-4 h-4" />;
      case 'contrast': return <EyeOff className="w-4 h-4" />;
      case 'keyboard': return <Keyboard className="w-4 h-4" />;
      case 'screen-reader': return <Volume2 className="w-4 h-4" />;
      case 'focus': return <MousePointer className="w-4 h-4" />;
      case 'semantic': return <CheckCircle className="w-4 h-4" />;
      default: return <AlertTriangle className="w-4 h-4" />;
    }
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Show accessibility tester"
      >
        <Eye className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-xl p-4 max-w-md z-50">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
          <Eye className="w-5 h-5 mr-2" />
          Accessibility Tester
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label="Close accessibility tester"
        >
          ×
        </button>
      </div>
      
      <div className="mb-4">
        <button
          onClick={runTests}
          disabled={isRunning}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isRunning ? 'Running Tests...' : 'Run Accessibility Tests'}
        </button>
      </div>
      
      <div className="space-y-2 max-h-96 overflow-y-auto">
        {tests.map((test) => (
          <div key={test.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-2 flex-1">
                {getCategoryIcon(test.category)}
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                      {test.name}
                    </h4>
                    {getStatusIcon(test.status)}
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    {test.description}
                  </p>
                  {test.fix && (
                    <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                      Fix: {test.fix}
                    </p>
                  )}
                </div>
              </div>
              <span className={`text-xs font-medium ${getStatusColor(test.status)}`}>
                {test.status}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-600">
        <button
          onClick={() => {
            localStorage.setItem('showAccessibilityTester', 'false');
            setIsVisible(false);
          }}
          className="text-xs text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
        >
          Hide permanently
        </button>
      </div>
    </div>
  );
};

export default AccessibilityTester;