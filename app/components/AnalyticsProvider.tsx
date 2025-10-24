
'use client';
import React, { createContext, useContext, useEffect, ReactNode } from &quot;react&quot;

declare global {
  interface Window {


    gtag: (...args: any[]) => void,

}
interface AnalyticsContextType {


  trackEvent: (eventName: string, parameters?: Record<string, unknown>) => void
  trackPageView: (pageName: string) => void,

}
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(
  undefined
export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error("useAnalytics must be used within an AnalyticsProvider")
  return context
interface AnalyticsProviderProps {


  children: ReactNode,

}
exportconstAnalyticsProvider:React.FC<AnalyticsProviderProp s>= ({children}) => {useEffect(() => {
    if (type of windo w !=="undefined") {
      // Google Analytics
      if (process.env.NODE_ENV === "production") {
        const script = document.createElement("script")
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_MEASUREMENT_ID}`
        script.async = true
        document.head.appendChild(script);
        window.gtag =
          window.gtag ||
          function (...args: any[]) {
            (window.gtag as any).q = (window.gtag as any).q || []
            (window.gtag as any).q.push(args)
        window.gtag("js", new Date()
        window.gtag("config", process.env.REACT_APP_GA_MEASUREMENT_ID || "")}
  }, [])
  consttrackEvent= (
    eventName: string,
    parameters?: Record<string, unknown></string>
  ) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, parameters)}
  consttrackPageView= (pageName: string) => {if (type of windo w !=="undefined" && windo w.gtag) {
      window.gtag("config","GA_MEASUREMENT_ID", {
        page_title: pageName,
    page_location: window.location.href})}
  constvalue: AnalyticsContextType = {,
trackEvent,
    trackPageView
};
  return (
    <AnalyticsContext.Provider value={value}></AnalyticsContext>
      {children}
    </AnalyticsContext.Provider>
<<<<<<< HEAD
<<<<<<< HEAD
  );
}
 AnalyticsProvider
  );
}
=======
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-da11
export default AnalyticsProvider

