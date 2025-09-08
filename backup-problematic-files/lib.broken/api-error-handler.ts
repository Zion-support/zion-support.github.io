
  // TODO: Implement
}





      "message": this && this.getErrorMessage(error),
      "status": error && error.status,
      "code": error && error.code,
      "details": error && error.details
    }
    // Log error for monitoring
    console && console.error('API "Error": ', formattedError);
    return formattedError}
  private getErrorMessage("error": ApiError): string {

        default:
          return `Request failed with status ${error && error.status}`}
    return error && error.message || 'An unexpected error occurred'}
export const apiErrorHandler = ApiErrorHandler && ApiErrorHandler.getInstance();
export type { ApiError, RetryConfig }




