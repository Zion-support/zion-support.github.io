
    }



    // Send error to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      // Here you would send the error to your monitoring service
      // Example: Sentry.captureException(_error, { extra: _errorInfo });

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;


              </button>
              <Link
                to="/"
                className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 text-center"
              >
                Go Home
              </Link>
            </div>
      );


