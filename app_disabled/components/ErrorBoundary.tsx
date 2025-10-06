:app_disabled/components/ErrorBoundary.tsx
>>>>>>> main:app_disabled/components/ErrorBoundary.tsx
>>>>>>> main:app_disabled/components/ErrorBoundary.tsx
>>>>>>> main:app_disabled/components/ErrorBoundary.tsx
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-e42d
import { AlertTriangle } from 'lucide-react';
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}
interface State {
  hasError: boolean;
  error?: Error;
}
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }
  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }
  override render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50'>
            <div className='max-w-md w-full mx-4'>
              <div className='bg-white rounded-2xl shadow-xl p-8 text-center'>
                <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4'>
                  <div className='w-8 h-8 text-red-600 text-4xl'>⚠️</div>
                </div>
                <h1 className='text-2xl font-bold text-gray-900 mb-2'>
                  Oops! Something went wrong
                </h1>
                <p className='text-gray-600 mb-6'>
                  We're sorry for the inconvenience. Please try refreshing the
                  page.
                </p>
                <div className='space-y-3'>
                  <button
                    onClick={() => window.location.reload()}
                    className='w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors'
                  >
                    Refresh Page
                  </button>
                  <a
                    href='/'
                    className='block w-full border-2 border-red-600 text-red-600 hover:bg-red-50 font-semibold py-3 px-6 rounded-lg transition-colors'
                  >
                    Go to Homepage
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
