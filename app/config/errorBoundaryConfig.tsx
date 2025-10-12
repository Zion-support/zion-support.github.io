
export interface ErrorBoundaryConfig {
  logToConsole: boolean;
  showDetailedErrors: boolean;
  reportToExternalService: boolean;
  errorReportingEndpoint?: string;
}

export const DEFAULT_ERROR_MESSAGES = {
  network: 'Network error occurred. Please check your connection.',
  timeout: 'Request timed out. Please try again.',
  server: 'Server error occurred. Please try again later.',
  unknown: 'An unexpected error occurred.',
} as const;

export function getErrorType(error: Error): keyof typeof DEFAULT_ERROR_MESSAGES {
  if (error.message.includes('Network') || error.message.includes('fetch')) {
    return 'network';
  }
  if (error.message.includes('timeout')) {
    return 'timeout';
  }
  if (error.message.includes('500') || error.message.includes('server')) {
    return 'server';
  }
  return 'unknown';
}

export const getErrorBoundaryConfig = (): ErrorBoundaryConfig => ({
  logToConsole: true,
  showDetailedErrors: process.env.NODE_ENV === 'development',
  reportToExternalService: process.env.NODE_ENV === 'production',
  errorReportingEndpoint: process.env.REACT_APP_ERROR_REPORTING_ENDPOINT,
});

export default getErrorBoundaryConfig;