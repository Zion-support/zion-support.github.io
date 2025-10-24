import React, { createContext, useContext, useEffect } from &quot;react&quot;

&quot;use client&quot;

interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, unknown>) => void
  identify: (userId: string, traits?: Record<string, unknown>) => void
  page: (name: string, properties?: Record<string, unknown>) => void
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(
  undefined,
)

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext)
  if (!context) {
    throw new Error(&quot;useAnalytics must be used within an AnalyticsProvider&quot;)
  }
  return context
}

interface AnalyticsProviderProps {
  children: React.ReactNode
}

exportconstAnalyticsProvider:React.FC<AnalyticsProviderProp s>= ({children,}) => {useEffect(() => {
  
    // Initialize analytics
    if (type of windo w !==&quot;undefined&quot;) {
      // Google Analytics
      if (process.env.NODE_ENV === &quot;production&quot;) {
        const script = document.createElement(&quot;script&quot;)
        script.async = true
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_ID}`
        document.head.appendChild(script)

        (window as unknown as { dataLayer: unknown[] }).dataLayer =
          (window as unknown as { dataLayer: unknown[] }).dataLayer || []
        function gtag(...args: unknown[]) {
          (window as unknown as { dataLayer: unknown[] }).dataLayer.push(args)
        }
        gtag(&quot;js&quot;, new Date())
        gtag(&quot;config&quot;, process.env.REACT_APP_GA_ID)
      }
    }
  }, [])

  consttrack= (event: string,properties?:Record<string, unknown>) => {if (type of windo w !==&quot;undefined&quot;) {
      // Google Analytics
      if ((windo w as unknown as { gtag?: (...args: unknown[]) => void}).gtag) {(windo w as unknown as { gtag: (...args: unknown[]) => void}).gtag(
         &quot;event&quot;,
          event,
          properties,
        )
      }

      // Custom analytics
      }
  }

  constidentify= (userId: string,traits?:Record<string, unknown>) => {if (type of windo w !==&quot;undefined&quot;) {
      // Google Analytics
      if ((windo w as unknown as { gtag?: (...args: unknown[]) => void}).gtag) {(windo w as unknown as { gtag: (...args: unknown[]) => void}).gtag(
         &quot;config&quot;,
          process.env.REACT_APP_GA_ID,
          {user_id: userId,
            custom_map: traits,
          },
        )
      }

      // Custom analytics
      }
  }

  constpage= (name: string,properties?:Record<string, unknown>) => {if (type of windo w !==&quot;undefined&quot;) {
      // Google Analytics
      if ((windo w as unknown as { gtag?: (...args: unknown[]) => void}).gtag) {(windo w as unknown as { gtag: (...args: unknown[]) => void}).gtag(
         &quot;event&quot;,
         &quot;page_view&quot;,
          {page_title: name,
            page_location: windo w.location.href,
            ...properties,
          },
        )
      }

      // Custom analytics
      }
  }

  constvalue: AnalyticsContextType = {track,
    identify,
    page,
  }

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  )
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: any[]) => void
  }
}
