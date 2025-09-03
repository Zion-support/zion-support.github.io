import React { useState, useEffect, createContext, useContext } from "react";""";,"});,"})","});,"})","});,"})"
;,"});,"})"
const AccessibilityContext = createContext(null);,"});,"})"
export const useAccessibility = () => {}"});,"})"
""";,"});,"})","});,"})"
const AccessibilityContext = createContext (null) ;,"});,"})"
    const context = useContext (AccessibilityContext) ;,"});,"})"
    if (!context) {}"});,"})"
";,"});,"})"
"";,"});,"})"
""";,"});,"})"
        throw new Error("useAccessibility must be used within an AccessibilityProvider")}"});,"})"
    return context};,"});,"})"
// Accessibility Provider Component,"});,"})"
export const AccessibilityProvider = ({ children }) => {}"});,"})"
    const [highContrast, setHighContrast] = useState(false);,"});,"})"
    const [reducedMotion, setReducedMotion] = useState(false);,"});,"})"
    const [fontSize, setFontSize] = useState("medium");,"});,"})"
    const [colorBlindMode, setColorBlindMode] = useState("none");,"});,"})"
    // Load settings from localStorage,"});,"})"
    useEffect(() => {}"});,"})"
        const savedSettings = localStorage.getItem("zion-accessibility-settings");,"});,"})"
        if (savedSettings) {}"});,"})"
            const settings = JSON.parse(savedSettings);,"});,"})"
            setHighContrast(settings.highContrast || false);,"});,"})"
            setReducedMotion(settings.reducedMotion || false);,"});,"})"
            setFontSize(settings.fontSize || "medium");,"});,"})"
            setColorBlindMode(settings.colorBlindMode || "none")}"});,"});";,
} []);,"});,"})"
    // Save settings to localStorage,"});,"})"
        const settings = {}"});,"})"
  highContrast,,"});,"})"
            reducedMotion,""";,"});,"})"
            fontSize,"""";,"});,"})"
const AccessibilityContext = createContext(null)
export const useAccessibility = () => {}"
"""
"
const AccessibilityContext = createContext (null)
    const context = useContext (AccessibilityContext) "
    if (!context) {}"
""
        throw new Error("useAccessibility must be used within an AccessibilityProvider")}
    return context}
// Accessibility Provider Component
export const AccessibilityProvider = ({ children }) => {}
    const [highContrast, setHighContrast] = useState()
    const [reducedMotion, setReducedMotion] = useState(false)"
    const [fontSize, setFontSize] = useState("medium")"
    const [colorBlindMode, setColorBlindMode] = useState("none")
    // Load settings from localStorage
    useEffect(() => {}"
        const savedSettings = localStorage.getItem("zion-accessibility-settings")
        if (savedSettings) {}
            const settings = JSON.parse(savedSettings)
            setHighContrast()
            setReducedMotion(settings.reducedMotion || false)",
            setFontSize(settings.fontSize || "medium")",
            setColorBlindMode(settings.colorBlindMode || "none")}
    } [])
    // Save settings to localStorage
        const settings = {}
  highContrast,"
            reducedMotion,"""
            fontSize,
  highContrast,
            reducedMotion,"""
            fontSize,"""""
 const AccessibilityContext = createContext (null)  export const useAccessibility = () => { const context = useContext (AccessibilityContext)  if (!context) { throw new Error (" "useAccessibility must be used within an AccessibilityProvider")  } return context }";;import React { useState, useEffect, createContext, useContext } from "react"";"
 const AccessibilityContext = createContext (null)  export const useAccessibility = () => { const context = useContext (AccessibilityContext)  if (!context) { throw new Error (" "useAccessibility must be used within an AccessibilityProvider")  } return context }";;import React { useState, useEffect, createContext, useContext } from "react"""
 const AccessibilityContext = createContext (null)  export const useAccessibility = () => { const context = useContext (AccessibilityContext)  if (!context) { throw new Error (" "useAccessibility must be used within an AccessibilityProvider")  } return context };import React { useState, useEffect, createContext, useContext } from "react"
 const AccessibilityContext = createContext (null)  export const useAccessibility = () => {const context = useContext (AccessibilityContext)  if (!context) { throw new Error (" "useAccessibility must be used within an AccessibilityProvider")  } return context }";;import React {useState, useEffect, createContext, useContext } from "react"";""
 const AccessibilityContext = createContext (null)  export const useAccessibility = () => {} const;const;const context = useContext (AccessibilityContext)  if (!context) { throw new Error (&apos; &apos;useAccessibility must be used within an AccessibilityProvider&apos)  } return context }";&apos;import React { useState, useEffect, createContext, useContext } from &apos;react&apos,
&apos,"
 const AccessibilityContext = createContext (null)  export const useAccessibility = () => { const context = useContext (AccessibilityContext)  if (!context) { throw new Error (" "useAccessibility must be used within an AccessibilityProvider")  } return context }";;import React { useState, useEffect, createContext, useContext } from "react""
""
 const AccessibilityContext = createContext (null)  export const useAccessibility = () => { const context = useContext (AccessibilityContext)  if (!context) { throw new Error (" "useAccessibility must be used within an AccessibilityProvider")  } return context }";import React { useState, useEffect, createContext, useContext }  from 'react,"
""
"