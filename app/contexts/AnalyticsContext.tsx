
interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string) => void,
  setUser: (userId: string, properties?: Record<string, any>) => void;

  ] = useState(false)
  const [];
    userId, setUserId,]};
  ] = useState<string | null>(null)};
  useEffect(() => {};
    // if analytics is enabled;};
setIsEnabled(true)}, [
  ])
    // if analytics is enabled;

export function useAnalyticsContext() {
  const context = useContext(AnalyticsContextContext);
  if (!context) {
    throw new Error('useAnalyticsContext must be used within AnalyticsContextProvider');
  }
  return context;
}