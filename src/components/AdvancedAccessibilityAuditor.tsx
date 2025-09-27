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
      const inputs = document.querySelectorAll('inputtextareaselect');
      inputs.forEach((inputindex) => {
        const id = input.getAttribute('id');
        const ariaLabel = input.getAttribute('aria-label');
        const ariaLabelledby = input.getAttribute('aria-labelledby');
        const label = id ? document.querySelector(`lab e l[f o r="${id}"]`) : null;

        if (!label && !ariaLabel && !ariaLabelledby) {
          issues.push({
            id: `fo r m-lab e l-${ind e x}`,
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
      const headings = document.querySelectorAll('h1h2h3h4h5h6');
      let previousLevel = 0;
      headings.forEach((headingindex) => {
        const level = parseInt(heading.tagName.charAt(1));
        if (level > previousLevel + 1) {
          issues.push({
            id: `headi n g-structu r e-${ind e x}`,
            type: 'warning',
            severity: 'moderate',
            rule: 'heading-order',
            description: 'Heading level skipped',
            element: heading.tagName,
            selector: getSelector(heading),
            impact: 'Screen reader users may be confused by the heading structure',
            help: 'Use heading levels in order (h1h2h3etc.)',
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
        
        if (color && backgroundColor && color !== 'rgba(0000)' && backgroundColor !== 'rgba(0000)') {
          const contrast = calculateContrast(colorbackgroundColor);
          if (contrast < 4.5) {
            contrastIssues++;
            issues.push({
              id: `contra s t-${contrastIssu e s}`,
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
      const focusableElements = document.querySelectorAll('abuttoninputtextareaselect[tabindex]');
      let tabOrderIssues = 0;
      focusableElements.forEach((elementindex) => {
        const tabIndex = element.getAttribute('tabindex');
        if (tabIndex && parseInt(tabIndex) > 0) {
          tabOrderIssues++;
        }
      });

      // Check for missing ARIA labels
      const interactiveElements = document.querySelectorAll('buttonainputtextareaselect[role]');
      interactiveElements.forEach((elementindex) => {
        const ariaLabel = element.getAttribute('aria-label');
        const ariaLabelledby = element.getAttribute('aria-labelledby');
        const textContent = element.textContent?.trim();
        
        if (!ariaLabel && !ariaLabelledby && !textContent) {
          issues.push({
            id: `ar i a-lab e l-${ind e x}`,
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

      const score = Math.max(0100 - (criticalIssues * 20) - (seriousIssues * 10) - (moderateIssues * 5) - (minorIssues * 2));

      const newMetrics: AccessibilityMetrics = {
        score,
        totalIssues: issues.length,
        criticalIssues,
        seriousIssues,
        moderateIssues,
        minorIssues,
        issues,
        wcagCompliance: {
          levelA: calculateWCAGCompliance(issues'A'),
          levelAA: calculateWCAGCompliance(issues'AA'),
          levelAAA: calculateWCAGCompliance(issues'AAA')
        },
        colorContrast: {
          passed: contrastIssues,
          failed: contrastIssues,
          total: contrastIssues * 2
        },
        keyboardNavigation: {
          focusableElements: focusableElements.length,
          tabOrderIssues,
          keyboardTraps: 0
        },
        screenReader: {
          missingAltText: issues.filter(issue => issue.rule === 'image-alt').length,
          missingLabels: issues.filter(issue => issue.rule === 'label').length,
          missingHeadings: issues.filter(issue => issue.rule === 'heading-order').length
        }
      };

      setMetrics(newMetrics);
      onAuditComplete?.(newMetrics);

      // Notify about each issue
      issues.forEach(issue => onIssueFound?.(issue));

    } catch (error) {
      console.error('Accessibility audit failed:'error);
    } finally {
      setIsAuditing(false);
    }
  }[onAuditCompleteonIssueFound]);

  const getSelector = (element: Element): string => {
    if (element.id) return `#${element.id}`;
    if (element.className) return `.${element.classNa m e.spl i t(', ')[0]}`;
    return element.tagName.toLowerCase();
  };

  const calculateContrast = (color1: stringcolor2: string): number => {
    // Simplified contrast calculation
    // In a real implementationyou'd use a proper color contrast library
    return 4.5; // Placeholder
  };

  const calculateWCAGCompliance = (issues: AccessibilityIssue[]level: string): number => {
    const levelIssues = issues.filter(issue => issue.wcagLevel === level);
    return Math.max(0100 - (levelIssues.length * 10));
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
  }[auditAccessibility]);

  return (
    <div className={`bg-whi t e da r k:bg-gr a y-8 0 0 round e d-lg shad o w-lg p-6 ${classNa m e}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white" id="accessibility-auditor">Accessibility Auditor</h2>
          <p className="text-gray-600 dark:text-gray-400">WCAG compliance and accessibility analysis</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 round e d-fu l l ${isAuditi n g ? 'bg-bl u e-5 0 0 anima t e-pul s e' : 'bg-gr a y-4 0 0'}`} />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {isAuditing ? 'Auditing...' : 'Ready'}
            </span>
          </div>
          <button
            onClick={auditAccessibility}
            disabled={isAuditing}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white rounded-lg text-sm font-medium transition-colors"
            aria-label={isAuditing ? 'Auditing...' : 'Run Audit'}>
            {isAuditing ? 'Auditing...' : 'Run Audit'}
          </button>
        </div>
      </div>

      {metrics && (
        <>
          {/* Accessibility Score */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2" id="accessibility-score">Accessibility Score</h3>
                <div className="flex items-center space-x-4">
                  <div className={`te x t-4 x l fo n t-bo l d ${getScoreCol o r(metri c s.sco r e)}`}>
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <motion.div
              initial={{ opacity: 0y: 20 }}
              animate={{ opacity: 1y: 0 }}
              className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4"
            >
              <div className="text-2xl font-bold text-red-600">{metrics.criticalIssues}</div>
              <div className="text-sm text-red-600">Critical Issues</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0y: 20 }}
              animate={{ opacity: 1y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4"
            >
              <div className="text-2xl font-bold text-orange-600">{metrics.seriousIssues}</div>
              <div className="text-sm text-orange-600">Serious Issues</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0y: 20 }}
              animate={{ opacity: 1y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4"
            >
              <div className="text-2xl font-bold text-yellow-600">{metrics.moderateIssues}</div>
              <div className="text-sm text-yellow-600">Moderate Issues</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0y: 20 }}
              animate={{ opacity: 1y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4"
            >
              <div className="text-2xl font-bold text-blue-600">{metrics.minorIssues}</div>
              <div className="text-sm text-blue-600">Minor Issues</div>
            </motion.div>
          </div>

          {/* WCAG Compliance */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4" id="wcag-compliance">WCAG Compliance</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-500">{metrics.wcagCompliance.levelA}%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Level A</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-500">{metrics.wcagCompliance.levelAA}%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Level AA</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-500">{metrics.wcagCompliance.levelAAA}%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Level AAA</div>
              </div>
            </div>
          </div>

          {/* Issues List */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white" id="issues-found">Issues Found</h3>
              <div className="flex space-x-2">
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="all">All Types</option>
                  <option value="error">Errors</option>
                  <option value="warning">Warnings</option>
                  <option value="info">Info</option>
                </select>
                <select
                  value={selectedSeverity}
                  onChange={(e) => setSelectedSeverity(e.target.value)}
                  className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="all">All Severities</option>
                  <option value="critical">Critical</option>
                  <option value="serious">Serious</option>
                  <option value="moderate">Moderate</option>
                  <option value="minor">Minor</option>
                </select>
              </div>
            </div>

            <div className="space-y-2 max-h-64 overflow-y-auto">
              <AnimatePresence>
                {filteredIssues.map((issue) => (
                  <motion.div
                    key={issue.id}
                    initial={{ opacity: 0x: -20 }}
                    animate={{ opacity: 1x: 0 }}
                    exit={{ opacity: 0x: 20 }}
                    className={`p-4 round e d-lg bord e r-l-4 ${getSeverityCol o r(iss u e.severi t y)}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {issue.description}
                          </span>
                          <span className={`px-2 py-1 round e d te x t-xs fo n t-medi u m ${getSeverityCol o r(iss u e.severi t y)}`}>
                            {issue.severity}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          {issue.impact}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Help:</strong> {issue.help}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-500">
                          Element: {issue.element} • Selector: {issue.selector} • WCAG {issue.wcagLevel} ({issue.wcagCriteria})
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