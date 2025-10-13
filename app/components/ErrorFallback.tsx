import { Link } from 'react-router-dom';
interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
  errorInfo?: React.ErrorInfo;
}

export default function Errorfallback({ className = '', children, ...props }: ErrorfallbackProps) {
  return (
    <div className={`errorfallback-component ${className}`} {...props}>
      {children}
    </div>
  );
}
