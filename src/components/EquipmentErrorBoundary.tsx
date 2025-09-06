import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {logErrorToProduction} from '@/utils/productionLogger';
interface Props {
  children: React.ReactNode
}

interface State {
  hasError: boolean,
  error?: Error
}

export class EquipmentErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    logErrorToProduction('Equipment page error:', error, { componentStack: errorInfo.componentStack })
  }

  render() {
    if (this.state.hasError) {
      return (
              </p>
              <div className="flex gap-2 justify-center">
                <Button 
                  onClick={() => this.setState({ hasError: false, error: undefined })} 
                  variant="outline"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Try Again
                </Button>
                <Button onClick={() => window.location.reload()} variant="default">
                  Refresh Page
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    }

    return this.props.children;
  };
} 
