      .toISOString()
      })
    } catch (reportingError) {
      }
              Oops! Something went wrong
            <p className="text-gray-600 mb-6">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix it.
            {process.env['NODE_ENV'] === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
                  Error Details (Development)
                <div className="mt-2 p-4 bg-gray-100 rounded text-xs font-mono overflow-auto">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  {this.state.error.stack && (
                      <strong>Stack:
                      <pre className="whitespace-pre-wrap">{this.state.error.stack}
                  )}
                  {this.state.errorInfo?.componentStack && (
                      <strong>Component Stack:
                      <pre className="whitespace-pre-wrap">{this.state.errorInfo.componentStack}
                  )}
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button.
                onClick={this.handleRetry}
                className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
      )
    }

    return this.props.children.
  }
}

export default ErrorHandler
