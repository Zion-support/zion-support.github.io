
interface AnalyticsContextType {
  trackEvent: (event: string, properties?: Record<string, any>) => void;
  trackPageView: (page: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const AnalyticsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const trackEvent = (event: string, properties?: Record<string, any>) => {
    // Analytics tracking implementation
    console.log('Analytics event:', event, properties);
  };

  const trackPageView = (page: string) => {
    // Page view tracking implementation
    console.log('Page view:', page);
  };

  return (
    <AnalyticsContext.Provider value={{ trackEvent, trackPageView }}>
      {children}
    </AnalyticsContext.Provider>
  );
};
