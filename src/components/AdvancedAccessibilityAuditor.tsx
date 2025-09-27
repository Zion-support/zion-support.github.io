import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccessibilityIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  severity: 'critical' | 'serious' | 'moderate' | 'minor';
  rule: string;
  description: string;
  element: string;
  selector: string;
  impact: string;
  help: string;
  wcagLevel: 'A' | 'AA' | 'AAA';
  wcagCriteria: string;
  line?: number;
  column?: number;
}

interface AccessibilityMetrics {
  score: number;
  totalIssues: number;
  criticalIssues: number;
  seriousIssues: number;
  moderateIssues: number;
  minorIssues: number;
  issues: AccessibilityIssue[];
  wcagCompliance: {
    levelA: number;
    levelAA: number;
    levelAAA: number;
  };
  colorContrast: {
    passed: number;
    failed: number;
    total: number;
  };
  keyboardNavigation: {
    focusableElements: number;
    tabOrderIssues: number;
    keyboardTraps: number;
  };
  screenReader: {
    missingAltText: number;
    missingLabels: number;
    missingHeadings: number;
  };
}

interface AdvancedAccessibilityAuditorProps {
  onAuditComplete?: (metrics: AccessibilityMetrics) => void;
  onIssueFound?: (issue: AccessibilityIssue) => void;
  className?: string;
}

export const AdvancedAccessibilityAuditor: React.FC<AdvancedAccessibilityAuditorProps> = ({
  onAuditComplete,
  onIssueFound,
  className = ''
}) => {
  const [isAuditing, setIsAuditing] = useState(false);
  const [metrics, setMetrics] = useState<AccessibilityMetrics | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedSeverity, setSelectedSeverity] = useState<string>('all');

  const auditAccessibility = useCallback(async () => {
    if (typeof window === 'undefined') return;

    setIsAuditing(true);
    const issues: AccessibilityIssue[] = [];

    try {
      // Check for missing alt text
      const images = document.querySelectorAll('img');
      images.forEach((img, index) => {
        if (!img.alt && !img.getAttribute('aria-label')) {
          issues.push({
            id: `alt-text-${index}`,
            type: 'error',
            severity: 'critical',
            rule: 'image-alt',
            description: 'Image missing alternative text',
            element: img.tagName,
            selector: getSelector(img),
            impact: 'Screen readers cannot convey the purpose of this image',
            help: 'Add an alt attribute to describe the image content',
            wcagLevel: 'A',
            wcagCriteria: '1.1.1'
          });
        }
      });

      // Check for missing form labels
      const inputs = document.querySelectorAll('input, textarea, select');
      inputs.forEach((input, index) => {
        const id = input.getAttribute('id');
        const ariaLabel = input.getAttribute('aria-label');
        const ariaLabelledby = input.getAttribute('aria-labelledby');
        const label = id ? document.querySelector(`label[for="${id}"]`) : null;

        if (!label && !ariaLabel && !ariaLabelledby) {
          issues.push({
            id: `form-label-${index}`,
            type: 'error',
            severity: 'serious',
            rule: 'label',
            description: 'Form control missing label',
            element: input.tagName,
            selector: getSelector(input),
            impact: 'Screen readers cannot identify the purpose of this form control',
            help: 'Add a label element or aria-label attribute',
            wcagLevel: 'A',
            wcagCriteria: '1.3.1'
          });
        }
      });

      // Check for heading structure
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      let previousLevel = 0;
      headings.forEach((heading, index) => {
        const level = parseInt(heading.tagName.charAt(1));
        if (level > previousLevel + 1) {
          issues.push({
            id: `heading-structure-${index}`,
            type: 'warning',
            severity: 'moderate',
            rule: 'heading-order',
            description: 'Heading level skipped',
            element: heading.tagName,
            selector: getSelector(heading),
            impact: 'Screen reader users may be confused by the heading structure',
            help: 'Use heading levels in order (h1, h2, h3, etc.)',
            wcagLevel: 'A',
            wcagCriteria: '1.3.1'
          });
        }
        previousLevel = level;
      });

      // Check for color contrast
      const elements = document.querySelectorAll('*');
      let contrastIssues = 0;
      elements.forEach((element) => {
        const styles = window.getComputedStyle(element);
        const color = styles.color;
        const backgroundColor = styles.backgroundColor;
        
        if (color && backgroundColor && color !== 'rgba(0, 0, 0, 0)' && backgroundColor !== 'rgba(0, 0, 0, 0)') {
          const contrast = calculateContrast(color, backgroundColor);
          if (contrast < 4.5) {
            contrastIssues++;
            issues.push({
              id: `contrast-${contrastIssues}`,
              type: 'error',
              severity: 'serious',
              rule: 'color-contrast',
              description: 'Insufficient color contrast',
              element: element.tagName,
              selector: getSelector(element),
              impact: 'Text may be difficult to read for users with visual impairments',
              help: 'Increase the contrast ratio between text and background colors',
              wcagLevel: 'AA',
              wcagCriteria: '1.4.3'
            });
          }
        }
      });

      // Check for keyboard navigation
      const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]');
      let tabOrderIssues = 0;
      focusableElements.forEach((element, index) => {
        const tabIndex = element.getAttribute('tabindex');
        if (tabIndex && parseInt(tabIndex) > 0) {
          tabOrderIssues++;
        }
      });

      // Check for missing ARIA labels
      const interactiveElements = document.querySelectorAll('button, a, input, textarea, select, [role]');
      interactiveElements.forEach((element, index) => {
        const ariaLabel = element.getAttribute('aria-label');
        const ariaLabelledby = element.getAttribute('aria-labelledby');
        const textContent = element.textContent?.trim();
        
        if (!ariaLabel && !ariaLabelledby && !textContent) {
          issues.push({
            id: `aria-label-${index}`,
            type: 'warning',
            severity: 'moderate',
            rule: 'aria-label',
            description: 'Interactive element missing accessible name',
            element: element.tagName,
            selector: getSelector(element),
            impact: 'Screen readers cannot identify the purpose of this element',
            help: 'Add an aria-label or ensure the element has visible text',
            wcagLevel: 'A',
            wcagCriteria: '4.1.2'
          });
        }
      });

      // Calculate metrics
      const criticalIssues = issues.filter(issue => issue.severity === 'critical').length;
      const seriousIssues = issues.filter(issue => issue.severity === 'serious').length;
      const moderateIssues = issues.filter(issue => issue.severity === 'moderate').length;
      const minorIssues = issues.filter(issue => issue.severity === 'minor').length;

      const score = Math.max(0, 100 - (criticalIssues * 20) - (seriousIssues * 10) - (moderateIssues * 5) - (minorIssues * 2));

      const newMetrics: AccessibilityMetrics = {
        score,
        totalIssues: issues.length,
        criticalIssues,
        seriousIssues,
        moderateIssues,
        minorIssues,
        issues,
        wcagCompliance: {
          level, A: calculateWCAGCompliance(issues, 'A'),
          levelAA: calculateWCAGCompliance(issues, 'AA'),
          levelAAA: calculateWCAGCompliance(issues, 'AAA')
        },
        colorContrast: {
          passe, d: contrastIssues,
          failed: contrastIssues,
          total: contrastIssues * 2
        },
        keyboardNavigation: {
          focusableElement, s: focusableElements.length,
          tabOrderIssues,
          keyboardTraps: 0
        },
        screenReader: {
          missingAltTex, t: issues.filter(issue => issue.rule === 'image-alt').length,
          missingLabels: issues.filter(issue => issue.rule === 'label').length,
          missingHeadings: issues.filter(issue => issue.rule === 'heading-order').length
        }
      };

      setMetrics(newMetrics);
      onAuditComplete?.(newMetrics);

      // Notify about each issue
      issues.forEach(issue => onIssueFound?.(issue));

    } catch (error) {
      console.error('Accessibility audit failed:', error);
    } finally {
      setIsAuditing(false);
    }
  }, [onAuditComplete, onIssueFound]);

  const getSelector = (element: Element): string => {
    if (element.id) return `#${element.id}`;
    if (element.className) return `.${element.className.split(' ')[0]}`;
    return element.tagName.toLowerCase();
  };

  const calculateContrast = (color1: string, color2: string): number => {
    // Simplified contrast calculation
    // In a real implementation, you'd use a proper color contrast library
    return 4.5; // Placeholder
  };

  const calculateWCAGCompliance = (issues: AccessibilityIssue[], level: string): number => {
    const levelIssues = issues.filter(issue => issue.wcagLevel === level);
    return Math.max(0, 100 - (levelIssues.length * 10));
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-100 dark:bg-red-900/20';
      case 'serious': return 'text-orange-600 bg-orange-100 dark:bg-orange-900/20';
      case 'moderate': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20';
      case 'minor': return 'text-blue-600 bg-blue-100 dark:bg-blue-900/20';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/20';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    if (score >= 50) return 'text-orange-500';
    return 'text-red-500';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 50) return 'Needs Improvement';
    return 'Poor';
  };

  const filteredIssues = metrics?.issues.filter(issue => {
    const typeMatch = selectedFilter === 'all' || issue.type === selectedFilter;
    const severityMatch = selectedSeverity === 'all' || issue.severity === selectedSeverity;
    return typeMatch && severityMatch;
  }) || [];

  useEffect(() => {
    auditAccessibility();
  }, [auditAccessibility]);

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white" id="accessibility-auditor">Accessibility Auditor</h2>
          <p className="text-gray-600 dark:text-gray-400">WCAG compliance and accessibility analysis</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${isAuditing ? 'bg-blue-500 animate-pulse' : 'bg-gray-400'}`} />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {isAuditing ? 'Auditing...' : 'Ready'}
            </span>
          </div>
          <button
            onClick={auditAccessibility}
            disabled={isAuditing}
            className="px-4py-2bg-blue-500 hover:bg-blue-600 disable, d:bg-gray-400 text-white rounded-lg text-sm font-mediumtransition-colors"
           aria-label="{isAuditing ? 'Auditing...' : 'Run Audit'}">
            {isAuditing ? 'Auditing...' : 'Run Audit'}
          </button>
        </div>
      </div>

      {metrics && (
        <>
          {/* Accessibility Score */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6text-whitemb-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semiboldmb-2" id="accessibility-score">Accessibility Score</h3>
                <div className="flex items-center space-x-4">
                  <div className={`text-4xl font-bold ${getScoreColor(metrics.score)}`}
                    {metrics.score}
                  </div>
                  <div>
                    <div className="text-lg font-medium">{getScoreLabel(metrics.score)}</div>
                    <div className="text-sm opacity-90">{metrics.totalIssues} issues found</div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">{metrics.wcagCompliance.levelAA}%</div>
                <div className="text-sm opacity-90">WCAG AA Compliance</div>
              </div>
            </div>
          </div>

          {/* Issue Summary */}
          <div className="grid grid-cols-1md:grid-cols-4gap-4mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 dark:bg-red-900/20 rounded-lgp-4"
            >
              <div className="text-2xl font-boldtext-red-600">{metrics.criticalIssues}</div>
              <div className="text-smtext-red-600">Critical Issues</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-orange-50 dark:bg-orange-900/20 rounded-lgp-4"
            >
              <div className="text-2xl font-boldtext-orange-600">{metrics.seriousIssues}</div>
              <div className="text-smtext-orange-600">Serious Issues</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lgp-4"
            >
              <div className="text-2xl font-boldtext-yellow-600">{metrics.moderateIssues}</div>
              <div className="text-smtext-yellow-600">Moderate Issues</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-blue-50 dark:bg-blue-900/20 rounded-lgp-4"
            >
              <div className="text-2xl font-boldtext-blue-600">{metrics.minorIssues}</div>
              <div className="text-smtext-blue-600">Minor Issues</div>
            </motion.div>
          </div>

          {/* WCAG Compliance */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark: text-whitemb-4" id="wcag-compliance">WCAG Compliance</h3>
            <div className="grid grid-cols-1m, d:grid-cols-3gap-4">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lgp-4">
                <div className="text-2xl font-boldtext-green-500">{metrics.wcagCompliance.levelA}%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Level A</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lgp-4">
                <div className="text-2xl font-boldtext-blue-500">{metrics.wcagCompliance.levelAA}%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Level AA</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lgp-4">
                <div className="text-2xl font-boldtext-purple-500">{metrics.wcagCompliance.levelAAA}%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Level AAA</div>
              </div>
            </div>
          </div>

          {/* Issues List */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white" id="issues-found">Issues Found</h3>
              <div className="flexspace-x-2">
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-3py-1border border-gray-300 dark: border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="all">All Types</option>
                  <option value="error">Errors</option>
                  <option value="warning">Warnings</option>
                  <option value="info">Info</option>
                </select>
                <select
                  value={selectedSeverity}
                  onChange={(e) => setSelectedSeverity(e.target.value)}
                  className="px-3py-1border border-gray-300 dark: border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="all">All Severities</option>
                  <option value="critical">Critical</option>
                  <option value="serious">Serious</option>
                  <option value="moderate">Moderate</option>
                  <option value="minor">Minor</option>
                </select>
              </div>
            </div>

            <div className="space-y-2max-h-64 overflow-y-auto">
              <AnimatePresence>
                {filteredIssues.map((issue) => (
                  <motion.div
                    key={issue.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className={`p-4rounded-lg border-l-4 ${getSeverityColor(issue.severity)}`}
                  >
                    <div className="flex items-startjustify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2mb-2">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {issue.description}
                          </span>
                          <span className={`px-2py-1rounded text-xs font-medium ${getSeverityColor(issue.severity)}`}
                            {issue.severity}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          {issue.impact}
                        </div>
                        <div className="text-sm text-gray-600 dark: text-gray-400 mb-2">
                          <strong>Hel, p:</strong> {issue.help}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-500">
                          Elemen, t: {issue.element} • Selector: {issue.selector} • WCAG {issue.wcagLevel} ({issue.wcagCriteria})
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdvancedAccessibilityAuditor;