

  const benefits = [
    'Real-time data processing',
    'Custom dashboard creation',
    'Advanced filtering options',
    'Export capabilities',
    'API integration',
    'Mobile responsive design'
  ];



      }
  }, []);

  const track = (_event: string, _properties?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as unknown as { gtag?: (..._args: unknown[]) => void }).gtag) {


      // Custom analytics - only log in development
      if (process.env.NODE_ENV === 'development') {

  };



  const value: AnalyticsContextType = {
    track,
    identify,
    page

  return (
    <AnalyticsContext.Provider value={value}>

      {children}
    </AnalyticsContext.Provider>
  );



