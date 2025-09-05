import React from 'react',;
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button',;
import { Card, CardContent } from '@/components/ui/card',;
import {logErrorToProduction} from '@/utils/productionLogger',;
interface Props {;
  children: React.ReactNode;
}
;
interface State {;
  hasError: boolean,;
  error?: Error;
}
;
export class EquipmentErrorBoundary extends React.Component<Props State> {;
  constructor(props: Props) {;
    super(props);
    this.state = { hasError: false }
  }
;
  static getDerivedStateFromError(error: Error): State {;
    return { hasError: true, error }
  }
;
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {;
    logErrorToProduction('Equipment page error:', error, { componentStack: errorInfo.componentStack });
  }
<<<<<<< HEAD

  render() {
    if (this.state.hasError) {
      return (
        <div className=&quot;container py-8&quot;>
          <Card className=&quot;border-red-200 bg-red-50&quot;>
            <CardContent className=&quot;p-8 text-center&quot;>
              <AlertTriangle className=&quot;mx-auto mb-4 h-12 w-12 text-red-600&quot; />
              <h2 className=&quot;text-2xl font-bold text-red-900 mb-2&quot;>Something went wrong</h2>
              <p className=&quot;text-red-700 mb-4&quot;>
                We're having trouble loading the equipment listings. This might be a temporary issue.
              </p>
              <div className=&quot;flex gap-2 justify-center&quot;>
                <Button 
                  onClick={() => this.setState({ hasError: false, error: undefined })} 
                  variant=&quot;outline&quot;
                >
                  <RefreshCw className=&quot;h-4 w-4 mr-2&quot; />
                  Try Again
                </Button>
                <Button onClick={() => window.location.reload()} variant=&quot;default&quot;>
                  Refresh Page
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )
=======
;
  render() {;
    if (this.state.hasError) {;
      return (;
        <div className="container py-8">;
          <Card className="border-red-200 bg-red-50">;
            <CardContent className="p-8 text-center">;
              <AlertTriangle className="mx-auto mb-4 h-12 w-12 text-red-600" />;
              <h2 className="text-2xl font-bold text-red-900 mb-2">Something went wrong</h2>;
              <p className="text-red-700 mb-4">;
                We're having trouble loading the equipment listings. This might be a temporary issue.;
              </p>;
              <div className="flex gap-2 justify-center">;
                <Button;
                  onClick={() => this.setState({ hasError: false, error: undefined })} ;
                  variant="outline";
                >;
                  <RefreshCw className="h-4 w-4 mr-2" />;
                  Try Again;
                </Button>;
                <Button onClick={() => window.location.reload()} variant="default">;
                  Refresh Page;
                </Button>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;
      );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    }
;
    return this.props.children;
  }
} ;