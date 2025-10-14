{ createContext, useContext, useState, useEffect } from 'react';
'use client';
interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string) => void,
  setUser: (userId: string, properties?: Record<string, any>) => void;
  isEnabled: boolean}
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);
const  ({ children }) => {
  return null;
  const [
    isEnabled, setIsEnabled
  ] = useState(false)
  const [
    userId, setUserId
  ] = useState<string | null>(null)
  useEffect(() => {
  return null;
    // if analytics is enabled,
setIsEnabled(true)}, [])
    // if analytics is enabled;
    setIsEnabled(true)}, []);
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {;
    if (!isEnabled) return;
    // Track event logic here;
    console.log('Analytics Event: '',
    console.log('Page View: '',)
    console.log('User Set: '')