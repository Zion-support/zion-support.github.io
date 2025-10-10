'use client';
    }
  }

  private sendToAnalytics = (metric: any) => {
    this.trackEvent(metric.name, {
      category: 'performance',
      value: Math.round(metric.value),
      label: metric.id
    });
  };
}

const analyticsService = new AnalyticsService();

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    analyticsService.init();
  }, []);

  return <>{children}</>;
};

export const useAnalytics = () => {
  return {
    trackEvent: analyticsService.trackEvent.bind(analyticsService)
  };
};

export default AnalyticsService;
>>>>>>> cursor/analyze-improve-and-deploy-application-5431
