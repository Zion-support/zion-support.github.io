export const errorHandler = {handle: (_error: Error, context?: string) => {
    // Log to external service
    if (typeof window !== &apos;undefined&apos; && window.gtag) {
      window.gtag(&apos;event&apos;, &apos;exception&apos;, {
        description: _error.message,
        fatal: false,
        context: context});
    }
    
    return {message: &apos;Something went wrong. Please try again.&apos;,
      code: &apos;GENERIC_ERROR&apos;};
  },
  
  handleApiError: (error: unknown) => {const status = (error as any).response?.status;
    const message = (error as any).response?.data?.message || (error as Error).message;
    
    switch (status) {
      case 400:
        return { message: &apos;Invalid request&apos;, code: &apos;BAD_REQUEST&apos; };
      case 401:
        return {message: &apos;Unauthorized&apos;, code: &apos;UNAUTHORIZED&apos; };
      case 403:
        return {message: &apos;Forbidden&apos;, code: &apos;FORBIDDEN&apos; };
      case 404:
        return {message: &apos;Not found&apos;, code: &apos;NOT_FOUND&apos; };
      case 500:
        return {message: &apos;Server error&apos;, code: &apos;SERVER_ERROR&apos; };
      default:
        return {message: message || &apos;Unknown error&apos;, code: &apos;UNKNOWN_ERROR&apos; };
    }
  log: () => {
    // Error logging logic
  },
  report: () => {
  log: (_error: Error, _context?: Record<string, unknown>) => {
    // Error logging logic
  },
  report: (_error: Error, _context?: Record<string, unknown>) => {
    // Error reporting logic
  }
};
}}