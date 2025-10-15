
interface Props {
  children: ReactNode
fallback?: ReactNode


interface State {


class GlobalErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    this.state = { hasError: false }
  static getDerivedStateFromError(error: Error): State {
    return {,
      hasError: true,
      error,


  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development


    // Log error to external service in production
if (process.env.NODE_ENV === 'production'
console.error('Production error:'
              We'
            {process.env.NODE_ENV === 'development'