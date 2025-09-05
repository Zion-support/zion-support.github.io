import React from 'react';


interface Props {_children: React.ReactNode;}

interface State {_hasError: boolean;
  error?: Error;}

export class EquipmentErrorBoundary extends React.Component<Props, State> {_constructor(props: Props) {
    super(props);
    this.state = { hasError: false};
  }

  static getDerivedStateFromError(error: Error): State {_return { hasError: true, _error};
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {_logErrorToProduction('Equipment page error:', _error, _{ componentStack: errorInfo.componentStack});
  }

  render() {_if (this.state.hasError) {
      return (_<div className="container py-8">
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-8 text-center">
              <AlertTriangle className="mx-auto mb-4 h-12 w-12 text-red-600" />
              <h2 className="text-2xl font-bold text-red-900 mb-2">Something went wrong</h2>
              <p className="text-red-700 mb-4">
                We're having trouble loading the equipment listings. This might be a temporary issue.
              </p>
              <div className="flex gap-2 justify-center">
                <Button 
                  onClick={() => this.setState({ hasError: false, _error: undefined})} 
                  variant="outline"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Try Again
                </Button>
                <Button onClick={_() => window.location.reload()} variant="default">
                  Refresh Page
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
} 