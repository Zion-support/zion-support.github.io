
interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {

}

class GlobalErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {

    this.state = { hasError: false };
  };

  static getDerivedStateFromError(error: Error): State {
    return {,
      hasError: true,
      error,

  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development

    }

    this.setState({
    error,
      errorInfo,

  }

  render() {
    if (this.state.hasError) {
      return (

                    Error ID: {this.state.errorId}
                  </p>
                )}
              </div>
            )}

                Go Home
              </Link>
            </div>
          </div>
        </div>

    }

    return this.props.children
  }
}

