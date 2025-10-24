import React, { createContext, useContext, useEffect, ReactNode } from &quot;react&quot
declare global {
interface Window {
gtag: (...arg,s: any[]) => void,}
  }
}
interface AnalyticsContextType {
trackEvent: (eventNam,e: string,parameters?: Record<string, unknown>) => void
trackPageView: (pageNam,e: string) => void,}
}
:all-pages-backup/components/AnalyticsProvider.tsx</string>
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(
  undefined
);
export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);</AnalyticsContextType>
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(
undefined
);
export const useAnalytics = () => {
return
const context = useContext(AnalyticsContext)
  if (!context) {
    throw new Error(&quot;useAnalytics must be used within an AnalyticsProvider&quot;)
  }
  return context
}
interface AnalyticsProviderProps {
children: ReactNode,}
}
;</AnalyticsContextType>;
exportconstAnalyticsProvider: React.FC<AnalyticsProviderProp s>= ({children,}) => {useEffect(() => {
if (type of windo w !==&quot;undefined&quot;) {
      // Google Analytics
if (process.env.NODE_ENV === &quot;production&quot;) {
const script = document.createElement(&quot;script&quot;)
        script.src = `https: //www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_MEASUREMENT_ID,}`
script.async = true
document.head.appendChild(script)
        window.gtag =
window.gtag ||
function (...args: any[]) {
            (window.gtag as any).q = (window.gtag as any).q || [],(window.gtag as any).q.push(args);
          }
        window.gtag(&quot;js&quot;, new Date())
window.gtag(&quot;config&quot;, process.env.REACT_APP_GA_MEASUREMENT_ID || &quot;&quot;)
      }
    }
  }, [])
:all-pages-backup/components/AnalyticsProvider.tsx
consttrackEvent= (
eventName: string</AnalyticsProviderProp>
parameters?: Record<string,unknown>
  ) => {
consttrackEvent = (
eventName: string</string>
parameters?: Record<string,unknown>
  ) => {
    if (typeof window !== &quot;undefined&quot; && window.gtag) {
window.gtag(&quot;event&quot;, eventName, parameters)
    }
  }
consttrackPageView= (pageName: string) => {if (type of windo w !==&quot;undefined&quot; && windo w.gtag) {,window.gtag(&quot;config&quot;,&quot;GA_MEASUREMENT_ID&quot;, {
:all-pages-backup/components/AnalyticsProvider.tsx
page_title: pageName,page_location: window.location.href
page_title: pageName
page_locatio,n: window.location.href)
      ,})
    }
  }
constvalue: AnalyticsContextType={trackEvent
trackPageView
  ,}
return (</string>AnalyticsContext.Provider value={value}>
      {children}</AnalyticsContext>/AnalyticsContext.Provider>
  )
}
;
export default AnalyticsProvider;
  )
:all-pages-backup/components/AnalyticsProvider.tsx
{}
export default AnalyticsProviderPage;
}
export default AnalyticsProviderPage;
}