import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { logErrorToProduction } from '@/utils/productionLogger';

interface Props {
  children: React.ReactNode;

interface State {
  hasError: boolean;
  error?: Error;
export class EquipmentErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
=======
  hasError: boolean,
  error?: Error
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export class EquipmentErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
<<<<<<< HEAD
    this.state = { hasError: false };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    logErrorToProduction('Equipment page error:', error, {
      componentStack: errorInfo.componentStack,
    });  }
=======
    logErrorToProduction('Equipment page error:', error, { componentStack: errorInfo.componentStack })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  render() {
    if (this.state.hasError) {
      return (
        <div className='container py-8'>
          <Card className='border-red-200 bg-red-50'>
            <CardContent className='p-8 text-center'>
              <AlertTriangle className='mx-auto mb-4 h-12 w-12 text-red-600' />
              <h2 className='text-2xl font-bold text-red-900 mb-2'>
                Something went wrong
              </h2>
              <p className='text-red-700 mb-4'>
                We're having trouble loading the equipment listings. This might
                be a temporary issue.
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </p>
              <div className='flex gap-2 justify-center'>
                <Button
                  onClick={() =>
                    this.setState({ hasError: false, error: undefined })
                  }
                  variant='outline'
                >
                  <RefreshCw className='h-4 w-4 mr-2' />
                  Try Again
                </Button>
                <Button
                  onClick={() => window.location.reload()}
                  variant='default'
                >                  Refresh Page
=======
                <Button onClick={() => window.location.reload()} variant="default">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  Refresh Page
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
=======
      )
    }

    return this.props.children;
  };
} 
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
