

  path?: string;
  component?: string;
  elementId?: string;
  timestamp: number
  userId?: string | null;
  metadata?: Record<string, any>
}

  trackEvent: (type: AnalyticsEventType, metadata?: Record<string, any>) => void;
  trackConversion: (conversionType: string, value?: number, metadata?: Record<string, any>) => void;
  pageViews: number
  lastEvent: AnalyticsEvent | null
  events: AnalyticsEvent[]
  clearEvents: () => void
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(
  undefined
),

  // Track page views when location changes
  useEffect(() => {
    trackEvent('page_view', { path: location.pathname }),
    setPageViews((prev) => prev + 1),
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]),

  // Function to track general analytics events
  const trackEvent = async (type: AnalyticsEventType, metadata: Record<string any> = {}) => {
    const event: AnalyticsEvent = {
      type
      path: location.pathname
      timestamp: Date.now()
      userId: user?.id
      metadata

    try {
      // Store event in Supabase for persistent analytics
      await supabase.from('analytics_events').insert([{
        event_type: type
        path: location.pathname
        user_id: user?.id
        metadata: metadata

    }
  }
  // Function to track conversion events
  const trackConversion = (conversionType: string, value?: number, metadata: Record<string, any> = {}) => {
    trackEvent('conversion', {
      conversionType
      value
      ...metadata
    })
  }
  // Clear events (for development or testing)
  const clearEvents = () => {
    setEvents([]);
    setLastEvent(null)
  }
  return (
    <AnalyticsContext.Provider
      value={{
        trackEvent;
        trackConversion;
        pageViews;
        lastEvent;
        events;
        clearEvents

      }}
    >
      {children}
    </AnalyticsContext.Provider>
  )
}

  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider')
  }
  // Cast is used here because the context default is undefined until provided
  // by `AnalyticsProvider`. The runtime check above ensures it's defined.
  return context as AnalyticsContextType

};
