<<<<<<< HEAD
import React from 'react'; const AccessibilityContext = createContext(null); export const useAccessibility = () => { const context = useContext(AccessibilityContext); if (!context) { throw new Error(" "useAccessibility must be used within an AccessibilityProvider" ); } return context; };"""
=======
import React from 'react'; const AccessibilityContext = createContext(null); export const useAccessibility = () => { const context = useContext(AccessibilityContext); if (!context) { throw new Error(" "useAccessibility must be used within an AccessibilityProvider" ); } return context; };
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
