 * Error Boundary Configuration
 * Centralized configuration for error handling across the application
   * Whether to log errors to console
  logErrors: """"""boolean;
   * Whether to show detailed error messages
  showDetails: boolean;
   * Whether to send errors to external service
  reportErrors: boolean;
   * Error reporting endpoint
  reportingEndpoint?: string;"
   * Whether to show error overlay in development""
  showErrorOverlay: boolean;"""
   * Maximum number of errors to store""""
  maxStoredErrors: number;"""""
   * Custom error messages by error type"""""""""
  customMessages: Record<string, string>;""""
   * Fallback UI components"""""
    default: React.ComponentType<{ error: Error; resetError: () ="> void }>;""""""
    network: React.ComponentType<{ error: Error; resetError: ()" ="> void }>;""""""
    notFound: React.ComponentType<{ error: Error; resetError: ()" ="> void }>;"""
 * Default error messages""""
 * Get error boundary configuration based on environment""""""
  const isDevelopment =" process.env['NODE_ENV'] ="==" 'development"'"'"'"'"'"'