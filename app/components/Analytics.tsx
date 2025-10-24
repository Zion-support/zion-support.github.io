import React, { useEffect }  from "react";declare global {
  interface Window {
  
  gtag: (...args: any[]) => void;
}
}
const Analytics: React.FC = () => {
  return(<div>
        </div>
        </div>
        </div>)
      useEffect(() => {
    const initAnalytics = () => {
  
  if (typeof window !== "undefined" && window.gtag) {
        window.gtag("config", "GA_MEASUREMENT_ID", {
          page_title: document.title
          page_location: window.location.href
    </div>)
  )
})
      }
    }
    initAnalytics()
  }, [])
  return null; // Analytics component doesn't render anything;
}
export default Analytics;
};
export default AnalyticsPage;
