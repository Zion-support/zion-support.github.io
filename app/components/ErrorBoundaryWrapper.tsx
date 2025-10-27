
interface ErrorBoundaryWrapperProps {
  className?: string;
  children?: React.ReactNode;
}

const ErrorBoundaryWrapper = ({ 
  className = '', 
  children 
}: ErrorBoundaryWrapperProps) => {
  return (
    <div className={'errorboundarywrapper ' + className}>
      {children || <p>ErrorBoundaryWrapper component</p>}
    </div>
  );
};

export default ErrorBoundaryWrapper;