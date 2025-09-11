

:src_backup/components/EquipmentErrorBoundary.tsx
import React from 'react';
import { Button  } from '@/components/ui/button';
import { Card, CardContent  } from '@/components/ui/card';
import {logErrorToProduction} from '@/utils/productionLogger';
origin/cursor/automate-test-improve-and-merge-code-2533
interface Props {;
:src_backup/components/EquipmentErrorBoundary.tsx


:src_backup/components/EquipmentErrorBoundary.tsx
  hasError: boolean;
origin/cursor/automate-test-improve-and-merge-code-2533
:src_backup/components/EquipmentErrorBoundary.tsx


:src_backup/components/EquipmentErrorBoundary.tsx
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
:src_backup/components/EquipmentErrorBoundary.tsx



    return this.props.children
  }      )

    }

} ;
:src_backup/components/EquipmentErrorBoundary.tsx

:src_backup/components/EquipmentErrorBoundary.tsx





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


              <div className="flex gap-2 justify-center">;
              <div className=flex gap-2 justify-center>;
                <Button;
                  onClick={() => this && this.setState({ hasError: false, error: undefined })}variant="outline";


:src_backup/components/EquipmentErrorBoundary.tsx
      )}return this && this.props.children;
  }      )}return this && this.props.children;
  }static getDerivedStateFromError (error: Error): State {return { has_error: true, error }
  }
  componentDidCatch (error: Error, error_info: React.ErrorInfo) {logErrorToProduction ('Equipment page error:', error, { component_stack: error_info.component_stack })}
  render () {// Check condition;
if ( {) {$2;


      return (<div className='container py - 8'>;
      return (
        <div className='container py - 8'>;
      return (<div className=container py - 8>;


                    this.set_state ({ has_error: false, error: undefined })}
                  variant='outline'                >;
                  <RefreshCw className='h - 4 w - 4 mr - 2' />;
:src_backup/components/EquipmentErrorBoundary.tsx
  }      );
  });
    }
:src_backup/components/EquipmentErrorBoundary.tsx
    return this.props.children;
  }

:src_backup/components/EquipmentErrorBoundary.tsx
} ;
  });
    }




:src_backup/components/EquipmentErrorBoundary.tsx
  }
:src_backup/components/EquipmentErrorBoundary.tsx
  }
  }
origin/cursor/automate-test-improve-and-merge-code-2533
  }      )}return this.props.children;
  }})}return this.props.children;
  }
