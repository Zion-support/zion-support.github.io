import React, { Component, ErrorInfo, ReactNode } from 'react';
import { RefreshCw, Home, AlertTriangle, Bug } from 'lucide-react';
interface Props {
  children: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void; origin/cursor/analyze-improve-and-deploy-application-1061;
}
import React, { Component, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
interface Props {
  children: ReactNode;
}
interface State {
  hasError: boolean;
  error?: Error;
}
class GlobalErrorBoundary extends Component<Props, State> {
  private maxRetries = 3;
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  } origin/cursor/analyze-improve-and-deploy-application-1091;
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }
interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  retryCount: number;
}
class EnhancedErrorFeedback extends Component</Props><Props, State> {
 origin/cursor/analyze-improve-and-deploy-application-1091</Props>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
export default EnhancedErrorFeedback; origin/cursor/analyze-improve-and-deploy-application-1061;
 origin/cursor/analyze-improve-and-deploy-application-1091
;