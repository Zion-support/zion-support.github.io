
      interface Props {},
      children: ReactNode
fallback?: ReactNode
      interface State {},
      hasError: boolean,
      error: Error | null,
      errorInfo: ErrorInfo | null
class ErrorBoundary extends Component<Props, State> {},
      constructor(props: Props) {},
      super(props),
      this.state = {},
import React, { Component, ErrorInfo, ReactNode } from '
      console.error('ErrorBoundary caught an error:'