interface AccessibilityContextType {

  highContrast: boolean
  largeText: boolean
  reducedMotion: boolean
import React, { create_context, useContext, useState, ReactNode } from './react'
import React, { createContext, useContext, ReactNode } from "react"
interface AccessibilityContextType {
  announceToScreenReader: (message: string) => void
  setFocus: (elementId: string) => void
const AccessibilityContext = createContext<
  AccessibilityContextType | undefined
>(undefined)
export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({
  children,
}) => {

  const announceToScreenReader = (message: string) => {
    const liveRegion = document.getElementById('live-region')
  if($2) {
      liveRegion.textContent = message
  }
  const setFocus = (elementId: string) => {
    const element = document.getElementById(elementId)
  if($2) {
      element.focus()
  }
  return (
    <AccessibilityContext.Provider
      value={{
        announceToScreenReader,
        setFocus,
        highContrast,
        largeText,
        reducedMotion,
        toggleHighContrast,
        toggleLargeText,
        toggleReducedMotion,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  )
}
    )
  return context
}
export const useAccessibility = () => {
  const context = useContext(AccessibilityContext)
  if($2) {
    throw new Error(
      "useAccessibility must be used within an AccessibilityProvider",
    )
  return context
}
