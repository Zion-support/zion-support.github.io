interface Props {
  children: ReactNode;
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
    this.setState({
      error,
      errorInfo
    });
    // Log error to console in development,
  if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
  }
  render() {
    if (this.state.hasError) {
          </div>
        </div>
      );
    }
