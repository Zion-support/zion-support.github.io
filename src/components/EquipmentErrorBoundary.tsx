<<<<<<< HEAD
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
=======
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {logErrorToProduction} from '@/utils/productionLogger';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    logErrorToProduction('Equipment page error:', error, {
      componentStack: errorInfo.componentStack
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }) }
    logErrorToProduction('Equipment page error:', error, { componentStack: errorInfo.componentStack })
  }
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    logErrorToProduction('Equipment page error:', error, { componentStack: errorInfo.componentStack })
<<<<<<< HEAD
  }
  render() {
    if (this.state.hasError) {
      return (
  }
  render() {;
    if (this && this.state.hasError) {;
      return (
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button',;
import { Card, CardContent } from '@/components/ui/card',;
import {logErrorToProduction} from '@/utils/productionLogger',;
<<<<<<< HEAD
interface Props {;
  children: React.ReactNode;
}
;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
interface Props {;
  children: React && React.ReactNode;
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface State {;
  hasError: boolean,;
  error?: Error;
}
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export class EquipmentErrorBoundary extends React && React.Component<Props, State> {;
  constructor(props: Props) {;
    super(props);


  }

  static getDerivedStateFromError(error: Error): State {;
    return { hasError: true, error }
  }
<<<<<<< HEAD



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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {;
    logErrorToProduction('Equipment page error:', error, { componentStack: errorInfo.componentStack });
  }

<<<<<<< HEAD
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
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  render() {;
    if (this && this.state.hasError) {;
      return (


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <Button onClick={() => window.location.reload()} variant="default">
                  Refresh Page
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )
<<<<<<< HEAD
<<<<<<< HEAD
    }
    return this.props.children
  }      )
    }
    return this.props.children
  }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



    return this.props.children
  }      )
    }

    return this.props.children;
  };
} ;


}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  onClick={() => window && window.location.reload()}
                  variant='default';
                >                  Refresh Page;
                <Button onClick={() => window && window.location.reload()} variant="default">;
              </p>;
              <div className="flex gap-2 justify-center">;
                <Button
                  onClick={() => this && this.setState({ hasError: false, error: undefined })} ;
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  variant="outline";
                >;
                  <RefreshCw className="h-4 w-4 mr-2" />;
                  Try Again;
                </Button>;
<<<<<<< HEAD
                <Button onClick={() => window.location.reload()} variant="default">;
=======
                <Button onClick={() => window && window.location.reload()} variant="default">;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  Refresh Page;
                </Button>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;
<<<<<<< HEAD


    }
    return this && this.props.children;
  };
} 
=======
      );
    }

    return this && this.props.children;
  }      );


    }

    return this && this.props.children;
  };


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
} ;
} ;
=======

} ;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    return this.props.children;
  }

} ;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
