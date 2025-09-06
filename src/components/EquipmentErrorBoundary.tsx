<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/EquipmentErrorBoundary.tsx

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react';
import React from 'react'
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { AlertTriangle, RefreshCw } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { logErrorToProduction } from '@/utils/productionLogger'
<<<<<<< HEAD
========
import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '@/components / ui / button';
import { Card, CardContent } from '@/components / ui / card';
import { logErrorToProduction } from '@/utils / production_logger';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/EquipmentErrorBoundary.tsx
interface Props {
  children: React.ReactNode
interface State {
<<<<<<<< HEAD:src/components/EquipmentErrorBoundary.tsx
=======
interface Props {
  children: React.ReactNode
interface State {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

<<<<<<< HEAD
========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/EquipmentErrorBoundary.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface Props {
  children: React.ReactNode
}
interface State {
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/EquipmentErrorBoundary.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

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
========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/EquipmentErrorBoundary.tsx
    }) }
    logErrorToProduction('Equipment page error:', error, { componentStack: errorInfo.componentStack })
  }
<<<<<<<< HEAD:src/components/EquipmentErrorBoundary.tsx
  static getDerivedStateFromError(error: Error): State {
========
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {logErrorToProduction} from '@/utils/productionLogger';
interface Props {;
  children: React && React.ReactNode;
}
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/EquipmentErrorBoundary.tsx
=======
    }) }
    logErrorToProduction('Equipment page error:', error, { componentStack: errorInfo.componentStack })
  }
  static getDerivedStateFromError(error: Error): State {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return { hasError: true, error }
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    logErrorToProduction('Equipment page error:', error, { componentStack: errorInfo.componentStack })
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/EquipmentErrorBoundary.tsx

=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  render() {
    if (this.state.hasError) {
      return (
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/EquipmentErrorBoundary.tsx
  }
  render() {;
    if (this && this.state.hasError) {;
      return (
<<<<<<<< HEAD:src/components/EquipmentErrorBoundary.tsx
<<<<<<< HEAD

=======
=======
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

<<<<<<< HEAD
  render() {
    if (this.state.hasError) {
=======
  render() {;
    if (this && this.state.hasError) {;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      return (
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
========
        <div className="container py-8">
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-8 text-center">
              <AlertTriangle className="mx-auto mb-4 h-12 w-12 text-red-600" />
              <h2 className="text-2xl font-bold text-red-900 mb-2">Something went wrong</h2>
              <p className="text-red-700 mb-4">
                We're having trouble loading the equipment listings. This might be a temporary issue.
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/EquipmentErrorBoundary.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

  render() {
    if (this.state.hasError) {
      return (
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

                <Button onClick={() => window.location.reload()} variant="default">
=======
>>>>>>>                 <Button onClick={() => window.location.reload()} variant="default">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                <Button onClick={() => window.location.reload()} variant="default">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  Refresh Page
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/EquipmentErrorBoundary.tsx
    }
<<<<<<< HEAD

}

=======
=======
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    return this.props.children
  }      )
    }
    return this.props.children
  }
<<<<<<< HEAD
<<<<<<< HEAD
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
;
========
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                  onClick={() => window && window.location.reload()}
                  variant='default';
                >                  Refresh Page;
                <Button onClick={() => window && window.location.reload()} variant="default">;
              </p>;
              <div className="flex gap-2 justify-center">;
                <Button
                  onClick={() => this && this.setState({ hasError: false, error: undefined })} ;
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  variant="outline";
                >;
                  <RefreshCw className="h-4 w-4 mr-2" />;
                  Try Again;
                </Button>;
<<<<<<< HEAD
                <Button onClick={() => window && window.location.reload()} variant="default">;
=======
                <Button onClick={() => window.location.reload()} variant="default">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  Refresh Page;
                </Button>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;
<<<<<<< HEAD
      );
    }
    return this && this.props.children;
  }      );
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/EquipmentErrorBoundary.tsx
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    }
    return this && this.props.children;
  };
<<<<<<<< HEAD:src/components/EquipmentErrorBoundary.tsx


<<<<<<< HEAD
========
} 
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/EquipmentErrorBoundary.tsx
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
>>>>>>>     return this.props.children;
  }
<<<<<<<< HEAD:src/components/EquipmentErrorBoundary.tsx

<<<<<<< HEAD
} ;
<<<<<<< HEAD

=======
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
}
=======
      ),;
    }
;
    return this.props.children,;  }
} 
 We're having trouble loading the equipment listings. This might be a temporary issue. </p> <div className="flex gap-2 justify-center" > <Button > <RefreshCw className="h-4 w-4 mr-2" /> Try Again </Button> Refresh Page </Button> </div> </CardContent> </Card> </div>) ;
}return this.props.children ;
}
}'"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/EquipmentErrorBoundary.tsx
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
} ;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
