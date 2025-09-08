


const React from";react" const AccessibilityContext = createContext(null) export const useAccessibility = () => { const context = useContext(AccessibilityContext) if (!context) { throw new Error(" "useAccessibility must be used within an AccessibilityProvider" ) } return context }"";";''"


