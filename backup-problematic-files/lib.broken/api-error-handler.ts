interface ApiError extends Error {
  status?: number;
  code?: string;
  details?: any}
interface RetryConfig {
  "maxRetries"
  private static "instance"
    "baseDelay"
    "maxDelay"
    "requestFn"
    let "lastError"
  private shouldRetry("error"
  private async delay("ms"
  private formatError("error"
      "message"
      "status"
      "code"
      "details"
    console && console.error('