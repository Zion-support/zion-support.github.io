;,"});,"})
}
const PerformanceMonitor: React.FC = () => {return null, // comment
const PerformanceMonitor: React.FC = () => {,,
  return null, // comment
"
export default PerformanceMonitor;""
interface PerformanceMetrics {

  name: string,,
value: number,
  delta: number,
  id: string}

const PerformanceMonitor = () => {
  useEffect(() => {
    const sendToAnalytics = (metric: PerformanceMetrics) => {,
      // comment
if (typeof window !== "undefined" && window.gtag) {"
        window.gtag("event", metric.name, { event_category: "Web Vitals","
        window.gtag("event", metric.name, {"
          event_category: "Web Vitals", event_label: metric.id,"
          value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value), non_interaction: true,"
      if (typeof window !== "undefined" && "gtag" in window) {"
        (window as any).gtag("event", metric.name, {"
          event_category: "Web Vitals",
          event_label: metric.id,
          value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
          non_interaction: true})
}
      }

    }

    // comment
import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(reportWebVitals)
}
      getFID(reportWebVitals)
}
      getFCP(reportWebVitals)
}
      getLCP(reportWebVitals)
}
      getTTFB(reportWebVitals)
}
    })
}
    // comment
if ("PerformanceObserver" in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "navigation") {
            const navEntry = entry as PerformanceNavigationTiming,
                        // comment


        }

      })
}
"
      observer.observe({ entryTypes: ["navigation"]   })
}
    getCLS(sendToAnalytics)
}
    getFID(sendToAnalytics)
}
    getFCP(sendToAnalytics)
}
    getLCP(sendToAnalytics)
}
    getTTFB(sendToAnalytics)
}
  }, [])
}
  return null}

// comment
declare global {
  interface Window { gtag: (...args: any[]) => void}



export default PerformanceMonitor;"
"