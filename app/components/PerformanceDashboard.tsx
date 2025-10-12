
interface PerformanceDashboardProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({
  children,
  className = '',
  title,
  description
}) => {
  return (
    <div className={`enhanced-component ${className}`}>
      {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      {children}
    </div>
  );
};

export default PerformanceDashboard;
