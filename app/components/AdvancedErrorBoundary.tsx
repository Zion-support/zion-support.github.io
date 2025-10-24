'use client';
interface State {"
hasError: "boolean
  error?: Error"
  errorInfo?: ErrorInfo"
    })
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo    )
}
    // Report error
    this.reportError(error, errorInfo    )
}
  private generateErrorId = (): string => {