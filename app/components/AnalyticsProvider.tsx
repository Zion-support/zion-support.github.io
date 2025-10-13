'use client';
 origin/cursor/analyze-improve-and-deploy-application-0fac;
 origin/cursor/analyze-improve-and-deploy-application-1091;
interface AnalyticsProviderProps {
'use client;
const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize Google Analytics if available;
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, []);
 origin/cursor/analyze-improve-and-deploy-application-1091;
 origin/cursor/analyze-improve-and-deploy-application-1247</AnalyticsProviderProps>
