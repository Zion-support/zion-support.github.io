<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/EquipmentErrorBoundary.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from 'react';
import { Button  } from '@/components/ui/button';
import { Card, CardContent  } from '@/components/ui/card';
import {logErrorToProduction} from '@/utils/productionLogger';
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
interface Props {;
=======
import React from 'react;
import { Button  } from @/components/ui/button';
import { Card, CardContent  } from '@/components/ui/card;
import {logErrorToProduction} from @/utils/productionLogger';
origin/cursor/automate-test-improve-and-merge-code-2533
interface Props {
=======
>>>>>>> merged-prs-20250907-203621
interface Props {;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
  children: React.ReactNode;
}

  }
;
  static getDerivedStateFromError(error: Error): State {;

<<<<<<< HEAD
:src_backup/components/EquipmentErrorBoundary.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React from 'react';
import { Button  } from '@/components/ui/button';
import { Card, CardContent  } from '@/components/ui/card';

import {logErrorToProduction} from '@/utils/productionLogger';
origin/cursor/automate-test-improve-and-merge-code-2533
interface Props {
  children: React.ReactNode
}
interface State {
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/EquipmentErrorBoundary.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  hasError: boolean;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba

  hasError: boolean

<<<<<<< HEAD
:src_backup/components/EquipmentErrorBoundary.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  hasError: boolean;
origin/cursor/automate-test-improve-and-merge-code-2533
  error?: Error
}
export class EquipmentErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

  static getDerivedStateFromError(error: Error): State {

    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      return (

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

                >
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/EquipmentErrorBoundary.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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


  }

  static getDerivedStateFromError(error: Error): State {;
    return { hasError: true, error }
  }



  }

  render() {;
    if (this && this.state.hasError) {;
      return (



                <Button onClick={() => window.location.reload()} variant="default">
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {logErrorToProduction} from '@/utils/productionLogger';
interface Props {;
  children: React && React.ReactNode;
}
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
export class EquipmentErrorBoundary extends React && React.Component<Props, State> {;
  constructor(props:,  Props) {;,
    super(props);
  }
  static getDerivedStateFromError(error:,  Error): State {;,
    return { hasError: true, error }
  }
  render() {;
    if (this && this.state.hasError) {;
      return (
                <Button onClick={() => window.location.reload()} variant="default">"
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
origin/cursor/automate-test-improve-and-merge-code-2533

                  Refresh Page
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
:src_backup/components/EquipmentErrorBoundary.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba



    return this.props.children
  }      )

    }

} ;
<<<<<<< HEAD
:src_backup/components/EquipmentErrorBoundary.tsx

:src_backup/components/EquipmentErrorBoundary.tsx
=======

<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc



;
interface Props  {children: React && React.ReactNode;



}
import { AlertTriangle, RefreshCw  } from 'lucide-react';
import { Button  } from '@/components/ui/button';
import { Card, CardContent  } from '@/components/ui/card';
import { logErrorToProduction  } from '@/utils/productionLogger';
interface Props  {children: React.ReactNode;
interface State  {hasError: boolean;
  error?: Error;
export class EquipmentErrorBoundary extends React.Component<Props, State> {constructor(props: Props) {super(props)this.state = { hasError: false }
  hasError: boolean;
  error?: Error;
}
import { logErrorToProduction } from '@/utils/productionLogger';
import React from 'react';
import { Button   } from '@/components/ui/button';
import { Card, CardContent   } from '@/components/ui/card';
interface Props  {children: React.ReactNode;
}
interface State  {hasError: boolean;
  hasError: boolean;error?: Error;
}
export class EquipmentErrorBoundary extends React.Component<Props, State> {constructor(props: Props) {super(props)this.state = { hasError: false }
  static getDerivedStateFromError(error: Error): State {return { hasError: true, error }
  }
  }render() {if (this.state.hasError) {return (<div className='container py-8'>;
          <Card className='border-red-200 bg-red-50'>;
            <CardContent className='p-8 text-center'>;
              <AlertTriangle className='mx-auto mb-4 h-12 w-12 text-red-600' />;
              <h2 className='text-2xl font-bold text-red-900 mb-2'>;
                Something went wrong;
              </h2>;
              <p className='text-red-700 mb-4'>;
                We're having trouble loading the equipment listings. This might;
                be a temporary issue.;
              </p>;
              <div className='flex gap-2 justify-center'>;
                <Button;
                  onClick={() =>;
                    this.setState({ hasError: false, error: undefined })}
                  variant='outline'                >;
                  <RefreshCw className='h-4 w-4 mr-2' />;
                  Try Again;
                </Button>;
                <Button;
                  onClick={() => window.location.reload()}
                  variant='default';
                >;
                  <RefreshCw className="h-4 w-4 mr-2" />;
                  Try Again;
                </Button>;
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
                  onClick={() => this.setState({ hasError: false, error: undefined })}variant="outline";
                >;
                  <RefreshCw className="h-4 w-4 mr-2" />;
                  Try Again;
                </Button>;
interface Props  {children: React && React.ReactNode;
}interface State  {hasError: boolean,error?: Error;
}export class EquipmentErrorBoundary extends React && React.Component<Props, State> {constructor(props: Props) {super(props)}static getDerivedStateFromError(error: Error): State {return { hasError: true, error }
  }}render() {if (this && this.state.hasError) {return (<Button onClick={() => window.location.reload()} variant="default">;
                  Refresh Page;
                </Button>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;
      )return this.props.children;
  }      )}return this.props.children;
  }}}
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
}

                  onClick={() => window && window.location.reload()}
                  variant='default';
                >                  Refresh Page;
                <Button onClick={() => window && window.location.reload()} variant="default">;
              </p>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
              <div className="flex gap-2 justify-center">;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
              <div className=flex gap-2 justify-center>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                <Button;
                  onClick={() => this && this.setState({ hasError: false, error: undefined })}variant="outline";
=======
>>>>>>> merged-prs-20250907-203621
              <div className="flex gap-2 justify-center">;
                <Button
                  onClick={() => this && this.setState({ hasError: false, error: undefined })} ;
                  variant="outline";
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
                >;
                  <RefreshCw className="h-4 w-4 mr-2" />;
                  Try Again;
                </Button>;
                <Button onClick={() => window && window.location.reload()} variant="default">;
                  Refresh Page;
                </Button>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/EquipmentErrorBoundary.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      )}return this && this.props.children;
  }      )}return this && this.props.children;
  }static getDerivedStateFromError (error: Error): State {return { has_error: true, error }
  }
  componentDidCatch (error: Error, error_info: React.ErrorInfo) {logErrorToProduction ('Equipment page error:', error, { component_stack: error_info.component_stack })}
  render () {// Check condition;
if ( {) {$2;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
      );
    }
    return this && this.props.children;
  });

  static getDerivedStateFromError (error: Error): State {

    return { has_error: true, error }
  }
  componentDidCatch (error: Error, error_info: React.ErrorInfo) {,
    logErrorToProduction ('Equipment page error:', error, { component_stack: error_info.component_stack });
  }
  render () {
    // Check condition
if ( {) {
  $2
}
<<<<<<< HEAD


=======
<<<<<<< HEAD
      return (<div className='container py - 8'>;
=======
<<<<<<< HEAD
      return (
        <div className='container py - 8'>;
=======
<<<<<<< HEAD
      return (<div className=container py - 8>;
=======
      return (
        <div className='container py - 8'>;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
                    this.set_state ({ has_error: false, error: undefined })}
<<<<<<< HEAD
                  variant='outline'                >;
                  <RefreshCw className='h - 4 w - 4 mr - 2' />;
=======
                  variant='outline                >;
                  <RefreshCw className=h - 4 w - 4 mr - 2' />;
=======
>>>>>>> merged-prs-20250907-203621
                    this.set_state ({ has_error: false, error: undefined });
                  }
                  variant='outline'                >;
                  <RefreshCw className='h - 4 w - 4 mr - 2' />;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  Try Again;
                </Button>;
                <Button;
                  on_click={() => window.location.reload ()}
                  variant='default';
                >                  Refresh Page;
                <Button on_click={() => window.location.reload ()} variant="default">;
              </p>;
              <div className="flex gap - 2 justify-center">;
                <Button;
                  on_click={() => this.set_state ({ has_error: false, error: undefined })}
                  variant="outline";
                >;
                  <RefreshCw className="h - 4 w - 4 mr-2" />;
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
:src_backup/components/EquipmentErrorBoundary.tsx
  }      );
  });
    }
:src_backup/components/EquipmentErrorBoundary.tsx
    return this.props.children;
  }

:src_backup/components/EquipmentErrorBoundary.tsx
} ;
=======
<<<<<<< HEAD
  });
    }
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
} ;
}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

=======
  });
    }
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/delete-old-data-records-6bba

    return this.props.children;
  }

} ;

);
    }

    return this.props.children;
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/EquipmentErrorBoundary.tsx
  }
:src_backup/components/EquipmentErrorBoundary.tsx
=======
<<<<<<< HEAD
  }
=======
<<<<<<< HEAD
  }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
origin/cursor/automate-test-improve-and-merge-code-2533
  }      )}return this.props.children;
  }})}return this.props.children;
  }
<<<<<<< HEAD
=======
  }
=======
  }
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
