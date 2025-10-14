import { Link } from 'react-router-dom';
interface Props {
  children: ReactNode;,
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}
interface State {
  hasError: boolean;,
  error: Error | null;,
  errorInfo: ErrorInfo | null;,
  errorId: string;
}
class ComprehensiveErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {,
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ''
    };
  }
  static getDerivedStateFromError(error: Error): Partial<State> {,
    return {
      hasError: true,
      error,
errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}""