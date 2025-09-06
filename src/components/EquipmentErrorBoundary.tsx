<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
import React from 'react'
=======
interface Props {;
  children: React && React.ReactNode;
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { AlertTriangle, RefreshCw } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { logErrorToProduction } from '@/utils/productionLogger'
interface Props {
  children: React.ReactNode
interface State {
  hasError: boolean
  error?: Error
export class EquipmentErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  hasError: boolean
  error?: Error
}
import {logErrorToProduction} from '@/utils/productionLogger'

interface Props {
  children: React.ReactNode
}
interface State {

  hasError: boolean

  error?: Error
}
export class EquipmentErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false }
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }
  }
<<<<<<< HEAD
  componentDidCatch (error: Error, error_info: React.ErrorInfo) {
    logErrorToProduction ('Equipment page error:', error, {
      component_stack: error_info.component_stack,
    }) }
    logErrorToProduction('Equipment page error:', error, { componentStack: errorInfo.componentStack })
  }
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { logErrorToProduction } from '@/utils/productionLogger';
interface Props {;
  children: React && React.ReactNode;
interface State {;
  hasError: boolean;
  error?: Error;
export class EquipmentErrorBoundary extends React && React.Component<Props, State> {;
  constructor(props: Props) {;
    super(props);
    this && this.state = { hasError: false };
  hasError: boolean,;
  error?: Error;
}
import { AlertTriangle, RefreshCw } from 'lucide-react'
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {logErrorToProduction} from '@/utils/productionLogger';
interface Props {;
  children: React && React.ReactNode;
}
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
interface State {;
  hasError: boolean,;
  error?: Error;
}
<<<<<<< HEAD

export class EquipmentErrorBoundary extends React && React.Component<Props, State> {;
  constructor(props: Props) {;
    super(props);


=======
export class EquipmentErrorBoundary extends React && React.Component<Props, State> {;
  constructor(props: Props) {;
    super(props);
    this.state = { hasError: false }
  }
  static getDerivedStateFromError(error: Error): State {;
    }) }
    logErrorToProduction('Equipment page error:', error, { componentStack: errorInfo.componentStack })
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
  }
  render() {;
    if (this && this.state.hasError) {;
      return (
import React from 'react';
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

  render() {;
    if (this && this.state.hasError) {;
      return (
=======

  render() {
    if (this.state.hasError) {
      return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
                  variant='outline'                >
                  <RefreshCw className='h-4 w-4 mr-2' />
                  Try Again
                </Button>
                <Button
                  onClick={() => window.location.reload()}
                  variant='default'
                >                  Refresh Page
                <Button onClick={() => window.location.reload()} variant="default">
              </p>
              <div className="flex gap-2 justify-center">
                <Button
                  onClick={() => this.setState({ hasError: false, error: undefined })}
                  variant="outline"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Try Again
                </Button>
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
                  Refresh Page
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )
<<<<<<< HEAD
    }
    return this.props.children
  }      )
    }
    return this.props.children
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

    return this.props.children
  }      )
    }
}
;
    return this.props.children;
  }
} ;
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  onClick={() => window && window.location.reload()}
                  variant='default';
                >                  Refresh Page;
                <Button onClick={() => window && window.location.reload()} variant="default">;
              </p>;
              <div className="flex gap-2 justify-center">;
                <Button
                  onClick={() => this && this.setState({ hasError: false, error: undefined })} ;
import React from 'react',;
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button',;
import { Card, CardContent } from '@/components/ui/card',;
import {logErrorToProduction} from '@/utils/productionLogger',;
interface Props {;
  children:React.ReactNode;}
;
interface State {;
  hasError:boolean,;
  error?:Error;
}
;
export class EquipmentErrorBoundary extends React.Component<Props State> {;
  constructor(props:Props) {;
    super(props),;
    this.state = { hasError:false },;
  }
;
  static getDerivedStateFromError(error:Error):State {;
    return { hasError:true, error },;
  }
;
  componentDidCatch(error:Error, errorInfo:React.ErrorInfo) {;
    logErrorToProduction('Equipment page error:', error, { componentStack:errorInfo.componentStack }),;
  }
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
                <Button ;
                  onClick={() => this.setState({ hasError:false, error:undefined })} ;
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


    }
<<<<<<< HEAD

    return this && this.props.children;
  }      );


=======
    return this && this.props.children;
  };
} 
  static getDerivedStateFromError (error: Error): State {
    return { has_error: true, error }
  }
  componentDidCatch (error: Error, error_info: React.ErrorInfo) {
    logErrorToProduction ('Equipment page error:', error, { component_stack: error_info.component_stack });
  }
  render () {
    // Check condition
if ( {) {
  $2
}
      return (
        <div className='container py - 8'>;
          <Card className='border - red - 200 bg - red - 50'>;
            <CardContent className='p - 8 text - center'>;
              <AlertTriangle className='mx - auto mb - 4 h - 12 w - 12 text - red - 600' />;
              <h2 className='text - 2xl font - bold text - red - 900 mb - 2'>;
                Something went wrong;
              </h2>;
              <p className='text - red - 700 mb - 4'>;
                We're having trouble loading the equipment listings. This might;
                be a temporary issue.;
              </p>;
              <div className='flex gap - 2 justify - center'>;
                <Button;
                  on_click={() =>;
                    this.set_state ({ has_error: false, error: undefined });
                  }
                  variant='outline'                >;
                  <RefreshCw className='h - 4 w - 4 mr - 2' />;
                  Try Again;
                </Button>;
                <Button;
                  on_click={() => window.location.reload ()}
                  variant='default';
                >                  Refresh Page;
                <Button on_click={() => window.location.reload ()} variant="default">;
              </p>;
              <div className="flex gap - 2 justify - center">;
                <Button;
                  on_click={() => this.set_state ({ has_error: false, error: undefined })}
                  variant="outline";
                >;
                  <RefreshCw className="h - 4 w - 4 mr - 2" />;
                  Try Again;
                </Button>;
                <Button on_click={() => window.location.reload ()} variant="default">;
                  Refresh Page;
                </Button>;
              </div>;
            </CardContent>;
          </Card>;
        </div>);
    }
    return this.props.children;
  }      );
    }
<<<<<<< HEAD
  }
ursor/fix-website-loading-errors-and-merge-6662
}
      ),;
    }
;
    return this.props.children,;  }
} 
 We're having trouble loading the equipment listings. This might be a temporary issue. </p> <div className="flex gap-2 justify-center" > <Button > <RefreshCw className="h-4 w-4 mr-2" /> Try Again </Button> Refresh Page </Button> </div> </CardContent> </Card> </div>) ;
}return this.props.children ;
}
}'"

    return this.props.children
  }      )
    }

    return this.props.children;
  };
} ;
}
;
    return this.props.children;
  }
} ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
} ;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
