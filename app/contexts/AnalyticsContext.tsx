import { createContext, useContext, useState, useEffect } from 'react'
'use client'
interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void
  trackPageView: (pageName: string) => void
  setUser: (userId: string, properties?: Record<string, any>) => void
  isEnabled: boolean}
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined)
const  ({ children }) => {
  const [isEnabled, setIsEnabled] = useState(false)
  const [userId, setUserId] = useState<string | null>(null)
  useEffect(() => {
    // if analytics is enabled
    setIsEnabled(true)}, [])
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
<<<<<<< HEAD
    if (!isEnabled) return;
    // Track event logic here;
    console.log('Analytics Event:', eventName, properties);
  }
  const trackPageView = (pageName: string) => {
    if (!isEnabled) return;
    // Track page view logic here;
    console.log('Page View:', pageName);
  }
  const setUser = (newUserId: string, properties?: Record<string, any>) => {
    setUserId(newUserId);
    console.log('User Set:', newUserId, properties);
  }
=======
    if (!isEnabled) return
    // Track event logic here
    console.log('Analytics Event:', eventName, properties)}
  const trackPageView = (pageName: string) => {
    if (!isEnabled) return
    // Track page view logic here
    console.log('Page View:', pageName)}
  const setUser = (newUserId: string, properties?: Record<string, any>) => {
    setUserId(newUserId)
    console.log('User Set:', newUserId, properties)}
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    setUser,
    isEnabled,
  }
  return (
<<<<<<< HEAD
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
}
=======
    <AnalyticsContext.Provider value={value}>{children}
    </AnalyticsContext.Provider>
  )}
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
export { AnalyticsContext }