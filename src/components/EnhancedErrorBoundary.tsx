  children: """"""ReactNode;"""""
  fallback?: ReactNode;"""""""""""
  onError?: (error: Error, errorInfo: """"""ErrorInfo) ="> void;
  enableErrorReporting?: boolean;
  maxRetries?: number;
  hasError: boolean;
  error?: Error;"
  errorInfo?: ErrorInfo;""
  errorId?: string;"""
  retryCount: number;""""
  private maxRetries: number;"""""
    super(props);"""""""""""
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`"`"`"`"`"`"
      sessionId =" `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`"`"`"`"`"`"