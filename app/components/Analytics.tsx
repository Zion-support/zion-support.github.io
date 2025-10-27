
interface AnalyticsProps {
  className?: string;
  children?: React.ReactNode;
}

const Analytics: React.FC<AnalyticsProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`analytics ${className}`}>
      {children || <p>Analytics component</p>}
    </div>
  );
};

export default Analytics;