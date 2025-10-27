
interface EnhancedPerformanceMonitorProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedPerformanceMonitor = ({ 
  className = '', 
  children 
}: EnhancedPerformanceMonitorProps) => {
  return (
    <div className={'enhancedperformancemonitor ' + className}>
      {children || <p>EnhancedPerformanceMonitor component</p>}
    </div>
  );
};

export default EnhancedPerformanceMonitor;