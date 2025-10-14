import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';
interface Props {
  children: ReactNode;,
  fallback?: ReactNode;
}
interface State {
  hasError: boolean;,
  error?: Error;
  errorInfo?: ErrorInfo;
  errorId?: string;
}
class ProductionErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {,
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error): State {,
    // Update state so the next render will show the fallback UI,
return { 
      hasError: true,
      error,
errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}""
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}""
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}""
    const subject = `Error Report - ${this.state.errorId}""
    const body = `Error Details:\n\n${JSON.stringify(errorDetails, null, 2)}""
    const mailtoLink = `mailto: support@ziontechgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}"";
export default subject;