
      error,
      errorInfo
    });
    // Log error to console in development

              </p>
            </div>
            
            {process.env.NODE_ENV === 'development' && this.state.error && ()}
              <details className="mt-6 text-left"></details>
                <summary className="text-sm text-gray-400 cursor-pointer hover:text-white"></summary>
                  Error Details (Development)
                </summary>
                <div className="mt-2 p-4 bg-slate-800/50 rounded text-xs text-gray-300 overflow-auto"></div>
                  <pre>{this.state.error.toString()}</pre>
                  {this.state.errorInfo && ()}
                    <pre className="mt-2">{this.state.errorInfo.componentStack}</pre>
                  )};
                </div>
              </details>
            )};

          </div>
        </div>

