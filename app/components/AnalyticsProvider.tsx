import React from 'react';

interface AnalyticsProviderProps {
  className?: string;
  children?: React.ReactNode;
}

export default function AnalyticsProvider({ className = '', children }: AnalyticsProviderProps) {
  return (
    <div className={`${className}`}>
export default function AnalyticsProvider({ className = '', children, ...props }: AnalyticsProviderProps) {
    <div className={`analytics-provider-component ${className}`} {...props}>
interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string, properties?: Record<string, any>) => void;

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  return context;
};

  children: ReactNode;

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize analytics
    console.log('Analytics initialized');
  }, []);

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    console.log('Analytics Event:', eventName, properties);
    // Add your analytics tracking logic here

  const trackPageView = (pageName: string, properties?: Record<string, any>) => {
    console.log('Page View:', pageName, properties);
    // Add your page view tracking logic here

  const value = {
    trackEvent,
    trackPageView,
export default function Analyticsprovider({ className = '', children, ...props }: AnalyticsproviderProps) {

    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
        <div className="component" {...props}>
        </div>

export default AnalyticsProvider;


