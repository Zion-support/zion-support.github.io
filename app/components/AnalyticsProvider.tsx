

interface AnalyticsProviderProps {
  className?: string;
  children?: React.ReactNode;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ className, children }) => {
  return (
    <div className={className} role="region" aria-label="Analytics Provider">
      {children || <p>Analytics Provider</p>}
    </div>
  );
};

export default AnalyticsProvider;