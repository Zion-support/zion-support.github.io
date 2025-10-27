
interface PerformanceDashboardProps {
  className?: string;
  children?: React.ReactNode;
}

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'performancedashboard ' + className}>
      {children || <p>PerformanceDashboard component</p>}
    </div>
  );
};

export default PerformanceDashboard;
