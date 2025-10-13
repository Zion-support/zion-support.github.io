
interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
  errorInfo?: React.ErrorInfo;
}

export default function Errorfallback({ className = '', children, ...props }: ErrorfallbackProps) {
}