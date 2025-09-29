import React from 'react';
import { AppRouter } from './router';

import { resourcePreloader } from './utils/resourcePreloader';
import { criticalCSSManager } from './utils/criticalCSSManager';
import { sriUtility } from './security/sriUtility';
import { csrfProtection } from './security/csrfProtection';
import { structuredDataManager } from './seo/structuredDataManager';
import { keyboardNavigationManager } from './accessibility/keyboardNavigationManager';
import { screenReaderSupport } from './accessibility/screenReaderSupport';
import './index.css';
import { performanceMonitor } from './utils/performanceMonitor';
import { securityManager } from './utils/securityHeaders';
import { accessibilityEnhancer } from './utils/accessibilityEnhancer';

export default function App(): React.JSX.Element {
  React.useEffect(() => {
    // Initialize performance monitoring
    performanceMonitor.reportPerformance();
    
    // Initialize accessibility enhancements
    accessibilityEnhancer.init();
    
    // Log security configuration
    const securityReport = securityManager.getSecurityReport();
    if (process.env.NODE_ENV === 'development') {
      console.log('Security Score:', securityReport.score);
      
      // Report accessibility score
      const accessibilityScore = accessibilityEnhancer.getAccessibilityScore();
      console.log('Accessibility Score:', accessibilityScore);
    }
  }, []);

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}