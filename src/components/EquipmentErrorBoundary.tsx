<<<<<<< HEAD
import React from 'react';
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

=======
<<<<<<< HEAD
import React from 'react';
import React from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { logErrorToProduction } from '@/utils/productionLogger'
import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '@/components / ui / button';
import { Card, CardContent } from '@/components / ui / card';
import { logErrorToProduction } from '@/utils / production_logger';
interface Props {
  children: React.ReactNode
interface State {
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

  has_error: boolean;
  error?: Error;
export class EquipmentErrorBoundary extends React.Component < Props, State> {
  constructor (props: Props) {
    super (props);
    this.state = { has_error: false }
  has_error: boolean,
  error?: Error;
}
import {logErrorToProduction} from '@/utils / production_logger';
interface Props {
  children: React.ReactNode
}
interface State {

  hasError: boolean

  error?: Error
}
>>>>>>> merged-prs-20250907-203621
export class EquipmentErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false }
<<<<<<< HEAD
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    logErrorToProduction('Equipment page error:', error, { componentStack: errorInfo.componentStack })
  }
=======
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    logErrorToProduction('Equipment page error:', error, {
      componentStack: errorInfo.componentStack
  has_error: boolean,
  error?: Error;
}
export class EquipmentErrorBoundary extends React.Component < Props, State> {
  constructor (props: Props) {
    super (props);
    this.state = { has_error: false }
  static getDerivedStateFromError (error: Error): State {
    return { has_error: true, error }
  }
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {logErrorToProduction} from '@/utils/productionLogger';
interface Props {;
  children: React && React.ReactNode;
}
<<<<<<< HEAD
interface State {;
  hasError: boolean,;
  error?: Error;
}
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface State {;
  hasError: boolean,;
  error?: Error;
}
<<<<<<< HEAD
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
=======

export class EquipmentErrorBoundary extends React && React.Component<Props, State> {;
  constructor(props: Props) {;
    super(props);


  }

  static getDerivedStateFromError(error: Error): State {;
    return { hasError: true, error }
  }



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }

  render() {;
    if (this && this.state.hasError) {;
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
                  variant='outline'                >
                  <RefreshCw className='h-4 w-4 mr-2' />
                  Try Again
                </Button>
                <Button
                  onClick={() => window.location.reload()}
                  variant='default'
                >                  Refresh Page
                <Button onClick={() => window.location.reload()} variant="default">
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
>>>>>>> merged-prs-20250907-203621

  render() {
    if (this.state.hasError) {
      return (
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
<<<<<<< HEAD
=======
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
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
  }
} 
=======
<<<<<<< HEAD
    }
    return this.props.children
  }      )
    }
    return this.props.children
  }
=======



    return this.props.children
  }      )
    }

    return this.props.children;
  };
} ;


}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
} ;
} ;
=======

} ;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
