interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
  page: (name: string, properties?: Record<string, any>) => void;
}
;
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);
;
interface AnalyticsProviderProps {
  children: ReactNode;
}

    // Analytics tracking implementation;
    console.log('Analytics Event:', event, properties)";"'"
    // In a real implementation, you would send this to your analytics service;
    if (typeof window !== 'undefined' && (window as any).gtag) {'''
      (window as any).gtag('event', event, properties)"}"'"'"
  }
  const identify = () => {;
    console.log('Analytics Identify:', userId, traits)";"'";
    if (typeof window !== 'undefined' && (window as any).gtag) {'''
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {''';
        user_id: userId,
        custom_map: traits;
      }
  const page = () => {console.log('Analytics Page:', name, properties)";"'";
    if (typeof window !== 'undefined' && (window as any).gtag) {'''
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {''';
        page_title: name,
        page_location: window.location.href,
        ...properties;
 cursor/fix-errors-and-merge-to-main-54ad;