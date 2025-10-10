
    }
  }

  private sendToAnalytics = (metric: any) => {
    this.trackEvent(metric.name, {
      category: 'performance',
      value: Math.round(metric.value),
      label: metric.id


}



export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {






export const useAnalytics = () => {
  return {
    trackEvent: analyticsService.trackEvent.bind(analyticsService)




