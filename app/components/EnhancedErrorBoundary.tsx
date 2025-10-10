'use client';
  error?: Error;
  errorInfo?: ErrorInfo;}class EnhancedErrorBoundary extends Component<Props, State> {constructor(props: Props) {,
    super(props);

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {,
    this.setState({)
      error,
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;