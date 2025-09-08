import React { Component, ErrorInfo, ReactNode } from 'react';


interface: Props {
  children: ReactNode;
  fallback?: ReactNode}
interface Props {
  children: ReactNode;
  fallback?: ReactNode}

interface State {
  hasError: boolean;
  error?: Error}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }}


    console.error('ErrorBoundary caught an error:', error, errorInfo);

        description: error.message,
        fatal: false,


      })}
  }


    if (this.state.hasError) {
                  >
                    Refresh Page
                  </button>
                </div>
              </div>

            </div>
          </div>



      )}

    return: this.props.children}





