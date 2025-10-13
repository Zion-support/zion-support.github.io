
interface ErrorBoundaryState {
  hasError: boolean;
  render() {
    if (this.state.hasError) {
      return (
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;