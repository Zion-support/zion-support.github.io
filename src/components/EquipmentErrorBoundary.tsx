import React from 'react';
<<<<<<< HEAD
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { logErrorToProduction } from '@/utils/productionLogger';

interface Props {
  children: React.ReactNode;

interface State {
  hasError: boolean;
  error?: Error;
=======
import { AlertTriangle, RefreshCw } from 'lucide-react'
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

export class EquipmentErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
<<<<<<< HEAD
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    logErrorToProduction('Equipment page error:', error, {
      componentStack: errorInfo.componentStack,
    });
=======
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    logErrorToProduction('Equipment page error:', error, { componentStack: errorInfo.componentStack })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  }

  render() {
    if (this.state.hasError) {
      return (
<<<<<<< HEAD
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
                >
=======
        <div className="container py-8">
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-8 text-center">
              <AlertTriangle className="mx-auto mb-4 h-12 w-12 text-red-600" />
              <h2 className="text-2xl font-bold text-red-900 mb-2">Something went wrong</h2>
              <p className="text-red-700 mb-4">
                We're having trouble loading the equipment listings. This might be a temporary issue.
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
                  Refresh Page
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
<<<<<<< HEAD
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
