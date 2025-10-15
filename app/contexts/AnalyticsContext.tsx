<<<<<<< HEAD

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
=======
import React, { createContext, useContext } from 'react';

interface AnalyticsContextContextType {
  /// Comment
}

const AnalyticsContextContext = createContext<AnalyticsContextContextType | undefined>(undefined);

export function AnalyticsContextProvider({ children }: { children: React.ReactNode }) {
  return (
    <AnalyticsContextContext.Provider value={{}}>
      {children}
    <// Comment
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-ccae

export function useAnalyticsContext() {
  const context = useContext(AnalyticsContextContext);
  if (!context) {
    throw new Error('useAnalyticsContext must be used within AnalyticsContextProvider');
  }
  return context;
}