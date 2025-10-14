import React from 'react';
}
;
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;

}

  return (
    <AnalyticsContext.Provider value={value}>
      { children }
    </AnalyticsContext.Provider>
)
  );
}
export const useAnalytics = (): AnalyticsContextType => {;
const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;

};
export default AnalyticsProvider;
