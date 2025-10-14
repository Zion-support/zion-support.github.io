export const enhancedErrorHandler = {
  handleError: (_error: Error, context?: string) => {
    // Log to external service
    if (typeof window !== &apos;undefined&apos; && window.gtag) {
  handleError: (error: Error, context?: string) => {
    console.error(&apos;Error occurred: &apos;, error)
    
    if (typeof window !== &apos;undefined&apos;) {
      window.gtag(&apos;event&apos;, &apos;exception&apos;, {
        description: _error.message,
        fatal: false,
        custom_parameter: context
      })
    }
    
    return {message: &apos;Something went wrong. Please try again.&apos;,;
      code: &apos;GENERIC_ERROR&apos;}
  },
  
  handleApiError: (error: unknown) => {
    const status = (error as any).response?.status;
    const message = (error as any).response?.data?.message || (error as Error).message;
    const errorWithResponse = error as { response?: { status?: number; data?: { message?: string } }; message?: string };
    const status = errorWithResponse.response?.status;
    const message = errorWithResponse.response?.data?.message || errorWithResponse.message;
    
    switch (status) {case 400:
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
  getErrorMessage: (error: any) => {if (error.response?.status) {
      switch (error.response.status) {
        case 400:
          return { message: &apos;Invalid request&apos;, code: &apos;BAD_REQUEST&apos; }
        case 401:
          return {message: &apos;Unauthorized&apos;, code: &apos;UNAUTHORIZED&apos; }
        case 403:
          return {message: &apos;Forbidden&apos;, code: &apos;FORBIDDEN&apos; }
        case 404:
          return {message: &apos;Not found&apos;, code: &apos;NOT_FOUND&apos; }
        case 500:
          return {message: &apos;Server error&apos;, code: &apos;SERVER_ERROR&apos; }
        default:
          return {message: error.message || &apos;Unknown error&apos;, code: &apos;UNKNOWN_ERROR&apos; }
      }
    }
    
    return {message: error.message || &apos;Unknown error&apos;, code: &apos;UNKNOWN_ERROR&apos; }
  }
}
}}}}