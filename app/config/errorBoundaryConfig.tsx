export interface ErrorBoundaryConfig {
  enableLogging: boolean;
  enableReporting: boolean;
  fallbackComponent?: React.ComponentType<{ error: Error; reset: () => void }>;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

export const defaultErrorBoundaryConfig: ErrorBoundaryConfig = {
  enableLogging: process.env.NODE_ENV === 'development',
  enableReporting: process.env.NODE_ENV === 'production',
  onError: (error: Error, errorInfo: React.ErrorInfo) => {
    console.error('Error caught by boundary:', error, errorInfo);
  }
};

export default defaultErrorBoundaryConfig;