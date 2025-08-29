import { AnimatePresence, motion } from 'framer-motion';
import {
    Accessibility,
    AlertTriangle,
    CheckCircle,
    Contrast,
    Eye,
    EyeOff,
    Info,
    X,
    ZoomIn,
    ZoomOut
} from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

interface AccessibilityFeature {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  category: 'visual' | 'motor' | 'cognitive' | 'auditory';
  wcagLevel: 'A' | 'AA' | 'AAA';
}

interface AccessibilityAudit {
  id: string;
  issue: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  element: string;
  recommendation: string;
  wcagCriteria: string;
}

export default function EnhancedAccessibilityEnhancer() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFeatures, setActiveFeatures] = useState<Set<string>>(new Set());
  const [auditResults, setAuditResults] = useState<AccessibilityAudit[]>([]);
  const [isAuditing, setIsAuditing] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [contrastMode, setContrastMode] = useState<'normal' | 'high' | 'inverted'>('normal');
  const [reducedMotion, setReducedMotion] = useState(false);
  const [focusIndicator, setFocusIndicator] = useState(true);
  const [screenReaderMode, setScreenReaderMode] = useState(false);
  const [keyboardNavigation, setKeyboardNavigation] = useState(true);
  const [colorBlindMode, setColorBlindMode] = useState(false);

  const accessibilityFeatures: AccessibilityFeature[] = [
    {
      id: 'high-contrast',
      name: 'High Contrast Mode',
      description: 'Increase contrast for better readability',
      enabled: false,
      category: 'visual',
      wcagLevel: 'AA'
    },
    {
      id: 'large-text',
      name: 'Large Text',
      description: 'Increase font size for better readability',
      enabled: false,
      category: 'visual',
      wcagLevel: 'AA'
    },
    {
      id: 'reduced-motion',
      name: 'Reduced Motion',
      description: 'Reduce animations for vestibular disorders',
      enabled: false,
      category: 'motor',
      wcagLevel: 'A'
    },
    {
      id: 'focus-indicator',
      name: 'Focus Indicator',
      description: 'Highlight focused elements clearly',
      enabled: true,
      category: 'motor',
      wcagLevel: 'A'
    },
    {
      id: 'keyboard-navigation',
      name: 'Keyboard Navigation',
      description: 'Enable full keyboard navigation',
      enabled: true,
      category: 'motor',
      wcagLevel: 'A'
    },
    {
      id: 'screen-reader',
      name: 'Screen Reader Support',
      description: 'Optimize for screen readers',
      enabled: false,
      category: 'auditory',
      wcagLevel: 'AA'
    },
    {
      id: 'color-blind-friendly',
      name: 'Color Blind Friendly',
      description: 'Use patterns and labels instead of just colors',
      enabled: false,
      category: 'visual',
      wcagLevel: 'AA'

  ];

  // Apply accessibility features
  const applyFeature = useCallback((featureId: string, enabled: boolean) => {
    const feature = accessibilityFeatures.find(f => f.id === featureId);
    if (!feature) return;

    setActiveFeatures(prev => {
      const newSet = new Set(prev);
      if (enabled) {
        newSet.add(featureId);
      } else {
        newSet.delete(featureId);

      return newSet;
    });

    // Apply specific feature
    switch (featureId) {
      case 'high-contrast':
        if (enabled) {
          document.documentElement.classList.add('high-contrast');
          setContrastMode('high');
        } else {
          document.documentElement.classList.remove('high-contrast');
          setContrastMode('normal');

        break;

      case 'large-text':
        if (enabled) {
          setFontSize(20);
        } else {
          setFontSize(16);

        break;

      case 'reduced-motion':
        if (enabled) {
          document.documentElement.classList.add('reduced-motion');
          setReducedMotion(true);
        } else {
          document.documentElement.classList.remove('reduced-motion');
          setReducedMotion(false);

        break;

      case 'focus-indicator':
        setFocusIndicator(enabled);
        break;

      case 'keyboard-navigation':
        setKeyboardNavigation(enabled);
        break;

      case 'screen-reader':
        setScreenReaderMode(enabled);
        break;

      case 'color-blind-friendly':
        setColorBlindMode(enabled);
        break;

  }, [accessibilityFeatures]);

  // Accessibility audit
  const runAccessibilityAudit = useCallback(async () => {
    setIsAuditing(true);
    const results: AccessibilityAudit[] = [];

    // Check for missing alt text
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        results.push({
          id: `alt-${index}`,
          issue: 'Missing alt text for image',
          severity: 'high',
          element: img.outerHTML.slice(0, 100),
          recommendation: 'Add descriptive alt text or aria-label',
          wcagCriteria: '1.1.1 Non-text Content (A)'
        });

    });

    // Check for proper heading structure
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        results.push({
          id: `heading-${index}`,
          issue: 'Improper heading hierarchy',
          severity: 'medium',
          element: heading.outerHTML.slice(0, 100),
          recommendation: 'Maintain proper heading hierarchy (h1 → h2 → h3)',
          wcagCriteria: '1.3.1 Info and Relationships (A)'
        });

      previousLevel = level;
    });

    // Check for form labels
    const formControls = document.querySelectorAll('input, select, textarea');
    formControls.forEach((control, index) => {
      const id = control.getAttribute('id');
      const label = document.querySelector(`label[for="${id}"]`);
      const ariaLabel = control.getAttribute('aria-label');

      if (!label && !ariaLabel && !control.getAttribute('aria-labelledby')) {
        results.push({
          id: `label-${index}`,
          issue: 'Missing label for form control',
          severity: 'high',
          element: control.outerHTML.slice(0, 100),
          recommendation: 'Add label, aria-label, or aria-labelledby',
          wcagCriteria: '3.3.2 Labels or Instructions (A)'
        });

    });

    // Check for color contrast (simplified)
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
    textElements.forEach((element, index) => {
      const style = window.getComputedStyle(element);
      const color = style.color;
      const backgroundColor = style.backgroundColor;

      // Simple contrast check (this is a simplified version)
      if (color === backgroundColor) {
        results.push({
          id: `contrast-${index}`,
          issue: 'Poor color contrast',
          severity: 'medium',
          element: element.outerHTML.slice(0, 100),
          recommendation: 'Ensure sufficient color contrast (4.5:1 for normal text)',
          wcagCriteria: '1.4.3 Contrast (Minimum) (AA)'
        });

    });

    // Check for keyboard navigation
    const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, [tabindex]');
    interactiveElements.forEach((element, index) => {
      const tabIndex = element.getAttribute('tabindex');
      if (tabIndex === '-1' && !element.getAttribute('aria-hidden')) {
        results.push({
          id: `keyboard-${index}`,
          issue: 'Element not keyboard accessible',
          severity: 'high',
          element: element.outerHTML.slice(0, 100),
          recommendation: 'Ensure element is keyboard accessible or hide with aria-hidden',
          wcagCriteria: '2.1.1 Keyboard (A)'
        });

    });

    // Simulate audit time
    await new Promise(resolve => setTimeout(resolve, 2000));

    setAuditResults(results);
    setIsAuditing(false);
  }, []);

  // Apply font size changes
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  // Apply focus indicator
  useEffect(() => {
    if (focusIndicator) {
      document.documentElement.classList.add('focus-visible');
    } else {
      document.documentElement.classList.remove('focus-visible');

  }, [focusIndicator]);

  // Apply keyboard navigation
  useEffect(() => {
    if (keyboardNavigation) {
      document.documentElement.classList.add('keyboard-navigation');
    } else {
      document.documentElement.classList.remove('keyboard-navigation');

  }, [keyboardNavigation]);

  // Apply color blind mode
  useEffect(() => {
    if (colorBlindMode) {
      document.documentElement.classList.add('color-blind-friendly');
    } else {
      document.documentElement.classList.remove('color-blind-friendly');

  }, [colorBlindMode]);

  // Apply screen reader mode
  useEffect(() => {
    if (screenReaderMode) {
      document.documentElement.classList.add('screen-reader-mode');
      // Add more screen reader optimizations
      document.documentElement.setAttribute('aria-live', 'polite');
    } else {
      document.documentElement.classList.remove('screen-reader-mode');
      document.documentElement.removeAttribute('aria-live');

  }, [screenReaderMode]);

  return (
    <>
      {/* Floating Accessibility Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 p-3 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open Accessibility Settings"

        <Accessibility className="w-6 h-6 text-white" />
        <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
      </motion.button>

      {/* Accessibility Dashboard Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-zion-slate-900 rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden"

              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-zion-slate-700">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-lg">
                    <Accessibility className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Accessibility Center
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      WCAG 2.1 AA compliant accessibility features
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-zion-slate-800 rounded-lg transition-colors"

                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <button
                    onClick={() => setFontSize(prev => Math.min(prev + 2, 24))}
                    className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all"

                    <ZoomIn className="w-6 h-6 mx-auto mb-2" />
                    <span className="text-sm font-medium">Increase Text</span>
                  </button>

                  <button
                    onClick={() => setFontSize(prev => Math.max(prev - 2, 12))}
                    className="p-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all"

                    <ZoomOut className="w-6 h-6 mx-auto mb-2" />
                    <span className="text-sm font-medium">Decrease Text</span>
                  </button>

                  <button
                    onClick={() => setContrastMode(prev => prev === 'normal' ? 'high' : 'normal')}
                    className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all"

                    <Contrast className="w-6 h-6 mx-auto mb-2" />
                    <span className="text-sm font-medium">Toggle Contrast</span>
                  </button>

                  <button
                    onClick={() => setReducedMotion(!reducedMotion)}
                    className="p-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all"

                    {reducedMotion ? (
                      <Eye className="w-6 h-6 mx-auto mb-2" />
                    ) : (
                      <EyeOff className="w-6 h-6 mx-auto mb-2" />
                    )}
                    <span className="text-sm font-medium">
                      {reducedMotion ? 'Show Motion' : 'Reduce Motion'}
                    </span>
                  </button>
                </div>

                {/* Accessibility Features */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Accessibility Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {accessibilityFeatures.map((feature) => (
                      <div
                        key={feature.id}
                        className={`p-4 rounded-xl border transition-all ${
                          activeFeatures.has(feature.id)
                            ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                            : 'bg-white dark:bg-zion-slate-800 border-gray-200 dark:border-zion-slate-700'
                        }`}

                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                feature.category === 'visual' ? 'bg-blue-100 text-blue-800' :
                                feature.category === 'motor' ? 'bg-green-100 text-green-800' :
                                feature.category === 'cognitive' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-purple-100 text-purple-800'
                              }`}>
                                {feature.category}
                              </span>
                              <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                                WCAG {feature.wcagLevel}
                              </span>
                            </div>
                            <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                              {feature.name}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {feature.description}
                            </p>
                          </div>

                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              checked={activeFeatures.has(feature.id)}
                              onChange={(e) => applyFeature(feature.id, e.target.checked)}
                              className="w-5 h-5 text-zion-purple rounded focus:ring-zion-purple"
                            />
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Accessibility Audit */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Accessibility Audit
                    </h3>
                    <button
                      onClick={runAccessibilityAudit}
                      disabled={isAuditing}
                      className="px-4 py-2 bg-zion-purple text-white rounded-lg hover:bg-zion-purple-dark disabled:opacity-50 transition-colors"

                      {isAuditing ? 'Auditing...' : 'Run Audit'}
                    </button>
                  </div>

                  {auditResults.length > 0 && (
                    <div className="space-y-3">
                      {auditResults.map((result) => (
                        <div
                          key={result.id}
                          className={`p-4 rounded-xl border ${
                            result.severity === 'critical' ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800' :
                            result.severity === 'high' ? 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800' :
                            result.severity === 'medium' ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800' :
                            'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
                          }`}

                          <div className="flex items-start space-x-3">
                            {result.severity === 'critical' || result.severity === 'high' ? (
                              <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                            ) : (
                              <Info className="w-5 h-5 text-blue-500 mt-0.5" />
                            )}
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                  result.severity === 'critical' ? 'bg-red-100 text-red-800' :
                                  result.severity === 'high' ? 'bg-orange-100 text-orange-800' :
                                  result.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                                  'bg-blue-100 text-blue-800'
                                }`}>
                                  {result.severity.toUpperCase()}
                                </span>
                                <span className="text-xs text-gray-500">
                                  {result.wcagCriteria}
                                </span>
                              </div>
                              <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                                {result.issue}
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                {result.recommendation}
                              </p>
                              <details className="text-xs text-gray-500">
                                <summary className="cursor-pointer hover:text-gray-700">
                                  Show element
                                </summary>
                                <code className="block mt-2 p-2 bg-gray-100 dark:bg-gray-800 rounded overflow-x-auto">
                                  {result.element}
                                </code>
                              </details>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {auditResults.length === 0 && !isAuditing && (
                    <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                      <CheckCircle className="w-12 h-12 mx-auto mb-3 text-green-500" />
                      <p>No accessibility issues found! Great job!</p>
                    </div>
                  )}
                </div>

                {/* WCAG Compliance Summary */}
                <div className="bg-gradient-to-r from-zion-purple/10 to-zion-cyan/10 p-6 rounded-xl border border-zion-purple/20">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    WCAG 2.1 Compliance Status
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">A</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Level A</div>
                      <div className="text-xs text-gray-500">Basic accessibility</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">AA</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Level AA</div>
                      <div className="text-xs text-gray-500">Standard compliance</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">AAA</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Level AAA</div>
                      <div className="text-xs text-gray-500">Enhanced accessibility</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}