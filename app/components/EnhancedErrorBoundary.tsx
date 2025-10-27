
interface EnhancedErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedErrorBoundary: React.FC<EnhancedErrorBoundaryProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'enhancederrorboundary ' + className}>
      {children || <p>EnhancedErrorBoundary component</p>}
    </div>
  );
};

export default EnhancedErrorBoundary;
