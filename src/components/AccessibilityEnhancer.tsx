

import React, { useState, useEffect } from 'react'; interface AccessibilityEnhancerProps { children: React.ReactNode; } const AccessibilityEnhancer: React.FC < AccessibilityEnhancerProps> = ({ children }) => { const [accessibilitySettings, setAccessibilitySettings] = useState ({ highContrast: false, largeText: false, reducedMotion: false, focusVisible: true }) ; useEffect ( () => {'';

import React, { useState, useEffect } from 'react'; interface AccessibilityEnhancerProps { children: React.ReactNode;  } const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => { const [accessibilitySettings, setAccessibilitySettings] = useState({ highContrast: false, largeText: false, reducedMotion: false, focusVisible: true }); useEffect(() => {
>>>>>>> origin/cursor/website-audit-content-update-and-deployment-23ff

>>>>>>> pr-10728
