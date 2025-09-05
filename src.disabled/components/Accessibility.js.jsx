import React from\';react\' const AccessibilityContext = createContext(null) export const useAccessibility = () => { const context = useContext(AccessibilityContext) if (!context) { throw new Error(\' \'useAccessibility must be used within an AccessibilityProvider\' ) } return context }\'';\';
<<<<<<< HEAD
const React from";react" const AccessibilityContext = createContext(null) export const useAccessibility = () => { const context = useContext(AccessibilityContext) if (!context) { throw new Error(" "useAccessibility must be used within an AccessibilityProvider" ) } return context }"";";''"
=======
const React from";react" const AccessibilityContext = createContext(null) export const useAccessibility = () => { const context = useContext(AccessibilityContext) if (!context) { throw new Error(" "useAccessibility must be used within an AccessibilityProvider" ) } return context }"";";''"
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
