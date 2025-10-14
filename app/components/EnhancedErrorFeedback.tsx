
}

class GlobalErrorBoundary extends React.Component<GlobalErrorBoundaryProps, { hasError: boolean }></GlobalErrorBoundaryProps> {
  constructor(props: GlobalErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

    }

    return this.props.children;
  }
}

