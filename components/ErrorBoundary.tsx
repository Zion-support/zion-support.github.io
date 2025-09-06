          </div>

        </div>

  }
  handle_reload = () => {
    window.location.reload ();
  }
;
  handleGoHome = () => {
    window.location.href = '/';  }
;
  render () {
    // Check condition
if ( {) {
  $2
}
      // Fallback UI;
      return (
        <div className="min - h-screen flex items - center justify - center bg - gray - 50">;
          <div className="max - w-md w - full bg - white shadow - lg rounded - lg p - 6">;
            <div className="flex items - center justify - center w - 12 h - 12 mx - auto bg - red - 100 rounded - full mb - 4">;
              <svg className="w - 6 h - 6 text - red - 600" fill="none" stroke="current_color" view_box="0 0 24 24">;
                <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M12 9v2m0 4h.01m - 6.938 4h13.856c1.54 0 2.502 - 1.667 1.732 - 2.5L13.732 4c-.77-.833 - 1.964-.833 - 2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />;
              </svg>;
            </div>;
            <h2 className="text - xl font - semibold text - gray - 900 text - center mb - 2">;
              Something went wrong;
            </h2>;
            <p className="text - gray - 600 text - center mb - 6">;
              We're sorry, but something unexpected happened. Please try refreshing the page.;
            </p>;
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="text - left bg - white / 5 rounded - xl p - 6 mb - 8 border border - white / 10">;
                <summary className="text - white / 80 font - medium cursor - pointer mb - 4">;
                  Error Details (Development);
                </summary>;
                <div className="space - y-3 text - sm">;
                  <div>;
                    <strong className="text - red - 400">Error:</strong>;
                    <pre className="mt - 2 p - 3 bg - red - 500 / 10 rounded - lg overflow - x-auto text - red - 300">;
                      {this.state.error.to_string ()}
                    </pre>;
                  </div>;
                  {this.state.error_info && (
                    <div>;
                      <strong className="text - red - 400">Stack Trace:</strong>;
                      <pre className="mt - 2 p - 3 bg - red - 500 / 10 rounded - lg overflow - x-auto text - red - 300 text - xs">;
                        {this.state.error_info.component_stack}
                      </pre>;
                    </div>)}                </div>;
              </details>)}
            <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
              <button;
                on_click={() => window.location.reload ()}
                className="flex - 1 bg - blue - 600 text - white px - 4 py - 2 rounded - md hover:bg - blue - 700 transition - colors";
              >;
                Refresh Page;
              </button>;
              <button;
                on_click={() => this.set_state ({ has_error: false, error: undefined, error_info: undefined })}
                className="flex - 1 bg - gray - 200 text - gray - 800 px - 4 py - 2 rounded - md hover:bg - gray - 300 transition - colors";
              >;
                Try Again;
              </button>;
            </div>;
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt - 4 p - 4 bg - gray - 100 rounded - md">;
                <summary className="cursor - pointer font - medium text - gray - 700">;
                  Error Details (Development);
                </summary>;
                <pre className="mt - 2 text - xs text - gray - 600 overflow - auto">;
                  {this.state.error.to_string ()}
                  {this.state.error_info?.component_stack}
                </pre>;
              </details>)}
          </div>;
    // Log the error to an error reporting service;
    console.error ('ErrorBoundary caught an error:', error, error_info);
    this.set_state ({ error, error_info });
  }
  render () {
    // Check condition
if ( {) {
  $2
}
      // You can render any custom fallback UI;
      return this.props.fallback || (
        <div style={{
          padding: '20px',
          text_align: 'center',
          border: '1px solid #ff6b6b',
          border_radius: '8px',
          background_color: '#ffe0e0',
          margin: '20px';
        }}>;
          <h2 > Something went wrong.</h2>;
          <p > We're sorry, but something unexpected happened.</p>;
          <button;
            on_click={() => window.location.reload ()}
            style={{
              padding: '10px 20px',
              background_color: '#ff6b6b',
              color: 'white',
              border: 'none',
              border_radius: '4px',
              cursor: 'pointer';

            }}
          >;
            Reload Page;
          </button>;
          {process.env.NODE_ENV === 'development' && this.state.error && (


  render() {;
    if (this && this.state.hasError) {;
      // You can render any custom fallback UI;
      return this && this.props.fallback || (;
        <divstyle={{ 
          padding: '20px', 
          textAlign: 'center',
          border: '1px solid #ff6b6b',
          borderRadius: '8px',
          backgroundColor: '#ffe0e0',
          margin: '20px'
        }}>;
          <h2>Something went wrong.</h2>;
          <p>We're sorry, but something unexpected happened.</p>;
          <button
            onClick={() => window && window.location.reload()}
            style={{;
              padding: '10px 20px',;
              backgroundColor: '#ff6b6b',;
              color: 'white',;
              border: 'none',;
              borderRadius: '4px',;
              cursor: 'pointer';
            }}
          >;
            Reload Page;
          </button>;
          {process && process.env.NODE_ENV === 'development' && this && this.state.error && (;
            <details style={{ marginTop: '20px', textAlign: 'left' }}>;
              <summary>Error Details (Development)</summary>;
              <prestyle={{ 
                backgroundColor: '#f5f5f5', 
                padding: '10px', 
                borderRadius: '4px',
                overflow: 'auto',

                fontSize: '12px'
              }}>;
                {this && this.state.error && error.toString()}
                {this && this.state.errorInfo?.componentStack}
              </pre>;
            </details>;
          )}
        </div>;
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        </div>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      );
    }


    return this && this.props.children;
  }
}

