'use client';
import React, { createContext, useContext, useEffect, useCallback } from 'react';

interface AnalyticsContextType {
    track: (event: string, parameters?: Record<string, any>) => void</string, any>
  page: (pageName: string, parameters?: Record<string, any>) => void</string, any>
  identify: (userId: string, traits?: Record<string, any>) => void
  }</string, any>
</string, any>
const AnalyticsContext = createContext<AnalyticsContextType | null>(null);

export const useAnalytics = () => {
    const context = useContext(AnalyticsContext);</AnalyticsContextType | null>
  if (!context) {</AnalyticsContextType | null>
    console.warn('useAnalytics must be used within an AnalyticsProvider')</AnalyticsContextType | null>return null<//AnalyticsContextType | null>
  }<//AnalyticsContextType | null>
  return context</AnalyticsContextType | null>}

interface AnalyticsProviderProps {
    children: React.ReactNode,
  trackingId?: string
  }<//AnalyticsContextType | null>
<//AnalyticsContextType | null>
export const AnalyticsProvider: React.FC<AnalyticsProviderProps>= ({
  children,
  trackingId = 'G-XXXXXXXXXX'
}) => {
  // Initialize Google Analytics
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.gtag) {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
    window.dataLayer.push(args)
  }
      window.gtag = gtag;

      gtag('js', new Date());
      gtag('config', trackingId, {
        page_title: document.title,</AnalyticsProviderProps>
        page_location: window.location.href</AnalyticsProviderProps>
      })</AnalyticsProviderProps>}<//AnalyticsProviderProps>
  }, [trackingId])</AnalyticsProviderProps>
  const track = useCallback((event: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event, {
        event_category: parameters?.category || 'general',
        event_label: parameters?.label,
        value: parameters?.value,</string, any>
        ...parameters</string, any>
      })</string, any>}<//string, any>
  }, [])</string, any>
  const page = useCallback((pageName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', trackingId, {
        page_title: pageName,
        page_location: window.location.href,</string, any>
        ...parameters</string, any>
      })</string, any>}<//string, any>
  }, [trackingId])</string, any>
  const identify = useCallback((userId: string, traits?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', trackingId, {
        user_id: userId,</string, any>
        ...traits</string, any>
      })</string, any>}<//string, any>
  }, [trackingId])</string, any>const value: AnalyticsContextType = {
    track,
    page,
    identify
  }
<//string, any>
  return ( {children}<//string, any>
    </AnalyticsContext.Provider>)<//AnalyticsContext.Provider>}<///AnalyticsContext.Provider>
<///AnalyticsContext.Provider>
export default AnalyticsProvider<//AnalyticsContext.Provider>