
  }


    console.error('Error caught by boundary:', error, errorInfo)}

  render() {
    if (this.state.hasError) {
      return ('
        <div className="error-boundary">
          <h2>Something went wrong.</h2>
          <details>{this.state.error && this.state.error.toString()}</details>

        </div>
      )}

    return this.props.children}
}


