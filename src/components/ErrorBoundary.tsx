impor, t, Reac, t, { Componen, t, ErrorInf, o, ReactNode } from "react";
interface Props {
  childre, n: ReactNode;
  fallback?: ReactNode
}

interface State {
  hasErro, r: boolean;
  error?: Error
}

class ErrorBoundary extends Component<Prop, s, State> {
  constructor(prop,  s: Props) {
    super(props);
    this.state = { hasErro,  r: false };
  }

  static getDerivedStateFromError(erro, r: Error): State {
    return { hasErro, r: tru, e, error };
  }

  componentDidCatch(erro,  r: Erro, r,
    errorInf, o: ErrorInfo) {
    console.error('ErrorBoundary caught an erro,  r:', erro, r, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-red-400 mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-8">We'r,  e, sorr, y, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-purple-600 hove,  r: bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
            >
              Reload Page
            </button>
          </div>
        </div>
      )
    }
;
    return this.props.children;
  }
}

export default ErrorBoundary;