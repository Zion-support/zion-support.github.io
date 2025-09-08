
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);


  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;

};