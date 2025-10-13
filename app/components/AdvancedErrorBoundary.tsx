              Oops! Something went wrong
            <p className="text-gray-600 mb-6 text-lg">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            {this.state.errorId && (
              <div className="bg-gray-100 p-4 rounded-lg mb-6">"
                <p className="text-sm text-gray-600">
                  <strong>Error ID:</strong> {this.state.errorId}
                <p className="text-xs text-gray-500 mt-1">
                  Please include this ID when contacting support
            )}

            {process.env['NODE_ENV'] === 'development' && this.state.error && ('
              <details className="mb-6 text-left">"
                <summary className="cursor-pointer text-sm font-medium text-gray-700 mb-2">
                  Error Details (Development)
                <div className="bg-gray-100 p-3 rounded text-xs font-mono text-gray-800 overflow-auto max-h-40">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  {this.state.errorInfo && (
                      <strong>Stack:
                      <pre className="whitespace-pre-wrap mt-1">
                        {this.state.errorInfo.componentStack}
                  )}
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button.
                onClick={this.handleReset}
                className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Try Again
              <button
                onClick={() => window.location.href = '/'}
                className="flex items-center justify-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
              >
                <Home className="h-4 w-4 mr-2" />
                Go Home
              <button
                onClick={this.handleReportError}
                className="flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                Report Issue
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                If this problem persists, please contact our support team at{' '}
                <a 
                  href="mailto:support@ziontechgroup.com" "
                  className="text-blue-600 hover:text-blue-800"
                >
                  support@ziontechgroup.com
      );
    }

    return this.props.children.
  }
}

export default AdvancedErrorBoundary.
