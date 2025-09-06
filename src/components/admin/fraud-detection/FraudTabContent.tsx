<<<<<<< HEAD
<<<<<<<< HEAD:src/components/admin/fraud-detection/FraudTabContent.tsx

<<<<<<< HEAD
=======
import React from "react";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react'
========
<<<<<<< HEAD
import React from 'react';
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react';
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/admin/fraud-detection/FraudTabContent.tsx
interface FraudTabContentProps {
  tab_value: string;
export const FraudTabContent: React.FC < FraudTabContentProps> = ({
  tab_value,
}) => {
<<<<<<<< HEAD:src/components/admin/fraud-detection/FraudTabContent.tsx
  switch (tabValue) {    case 'pending':
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
<<<<<<< HEAD

import React from "react";
=======
import React from 'react'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react'
interface FraudTabContentProps {
  tabValue: string
export const FraudTabContent: React.FC<FraudTabContentProps> = ({
  tabValue
}) => {
  switch (tabValue) {    case 'pending':
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      return (

        <div className='bg-amber-50 dark:bg-amber-950/20 p-8 rounded-lg text-center'>
          <AlertTriangle className='mx-auto h-12 w-12 text-amber-500 mb-4' />
          <h3 className='text-xl font-medium mb-4'>Pending Review Flags</h3>
          <p className='text-muted-foreground'>
            This tab will show fraud flags that are still pending admin review.
          </p>
        </div>
      )
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
interface FraudTabContentProps {
  tabValue: string;

import React from "react",
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react'

interface FraudTabContentProps {
  tabValue: string
}

export const FraudTabContent: React.FC<FraudTabContentProps> = ({ tabValue }) => {
  switch(tabValue) {
    case 'pending':
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>       return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      return (
>>>>>>>         <div className="bg-amber-50 dark: bg-amber-950/20 p-8 rounded-lg text-center">
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      return (
        <div className="bg-amber-50 dark: bg-amber-950/20 p-8 rounded-lg text-center">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <AlertTriangle className="mx-auto h-12 w-12 text-amber-500 mb-4" />
          <h3 className="text-xl font-medium mb-4">Pending Review Flags</h3>
          <p className="text-muted-foreground">
            This tab will show fraud flags that are still pending admin review.
          </p>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD

    case 'dangerous':
=======
      ),
    
      )
>>>>>>>     case 'dangerous':
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      ),
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
      )
=======
      ),
    
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    case 'dangerous':
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      return (
        <div className="bg-red-50 dark:bg-red-950/20 p-8 rounded-lg text-center">
          <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />
          <h3 className="text-xl font-medium mb-4">Dangerous Flags</h3>
          <p className="text-muted-foreground">
            This tab shows high-priority dangerous flags requiring immediate attention.
          </p>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD

    case 'actioned':
=======
      )
>>>>>>>     case 'actioned':
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
      )
=======
      ),
    
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    case 'actioned':
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      return (
        <div className="bg-green-50 dark:bg-green-950/20 p-8 rounded-lg text-center">
          <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
          <h3 className="text-xl font-medium mb-4">Actioned Flags</h3>
          <p className="text-muted-foreground">
            This tab shows flags where action has already been taken.
          </p>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD

      ),
=======
      return null
    case 'actioned':
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
========
  switch (tab_value) {    case 'pending':;
      return (
        <div className='bg - amber - 50 dark:bg - amber - 950 / 20 p - 8 rounded - lg text - center'>;
          <AlertTriangle className='mx - auto h - 12 w - 12 text - amber - 500 mb - 4' />;
          <h3 className='text - xl font - medium mb - 4'>Pending Review Flags</h3>;
          <p className='text - muted - foreground'>;
            This tab will show fraud flags that are still pending admin review.;
          </p>;
        </div>);
    case 'dangerous':;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/admin/fraud-detection/FraudTabContent.tsx
      return (
        <div className='bg - red - 50 dark:bg - red - 950 / 20 p - 8 rounded - lg text - center'>;
          <AlertCircle className='mx - auto h - 12 w - 12 text - red - 500 mb - 4' />;
          <h3 className='text - xl font - medium mb - 4'>Dangerous Flags</h3>;
          <p className='text - muted - foreground'>;
            This tab shows high - priority dangerous flags requiring immediate;
            attention.;
          </p>;
        </div>);
    case 'actioned':;
      return (
<<<<<<<< HEAD:src/components/admin/fraud-detection/FraudTabContent.tsx

=======
      )
    default:
<<<<<<< HEAD
      return null
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      return null;
  };
};
}
<<<<<<< HEAD

>>>>>>>       ),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      ),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    
    default:
      return null
import React from "react",;
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react';
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/admin/fraud-detection/FraudTabContent.tsx
interface FraudTabContentProps {;
  tabValue: string;
export const FraudTabContent: React.FC<FraudTabContentProps> = ({;
  tabValue,;
}) => {;
  switch (tabValue) {    case 'pending':;
      return (
        <div className='bg-amber-50 dark:bg-amber-950/20 p-8 rounded-lg text-center'>;
          <AlertTriangle className='mx-auto h-12 w-12 text-amber-500 mb-4' />;
          <h3 className='text-xl font-medium mb-4'>Pending Review Flags</h3>;
          <p className='text-muted-foreground'>;
            This tab will show fraud flags that are still pending admin review.;
          </p>;
        </div>;
      );
    case 'dangerous':;
      return (
        <div className='bg-red-50 dark:bg-red-950/20 p-8 rounded-lg text-center'>;
          <AlertCircle className='mx-auto h-12 w-12 text-red-500 mb-4' />;
          <h3 className='text-xl font-medium mb-4'>Dangerous Flags</h3>;
          <p className='text-muted-foreground'>;
            This tab shows high-priority dangerous flags requiring immediate;
            attention.;
          </p>;
        </div>;
      );
    case 'actioned':;
      return (
        <div className='bg-green-50 dark:bg-green-950/20 p-8 rounded-lg text-center'>;
          <CheckCircle className='mx-auto h-12 w-12 text-green-500 mb-4' />;
          <h3 className='text-xl font-medium mb-4'>Actioned Flags</h3>;
          <p className='text-muted-foreground'>;
            This tab shows flags where action has already been taken.;
          </p>;
        </div>;
      );
    default:;
      return null;
<<<<<<<< HEAD:src/components/admin/fraud-detection/FraudTabContent.tsx
<<<<<<< HEAD

=======
  }
}

>>>>>>> 
  }
};

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
  }
}
        <div className='bg - green - 50 dark:bg - green - 950 / 20 p - 8 rounded - lg text - center'>;
          <CheckCircle className='mx - auto h - 12 w - 12 text - green - 500 mb - 4' />;
          <h3 className='text - xl font - medium mb - 4'>Actioned Flags</h3>;
          <p className='text - muted - foreground'>;
            This tab shows flags where action has already been taken.;
          </p>;
        </div>);
    default:;
      return null;
  }
}
=======

import React from "react",;
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react';
;
interface FraudTabContentProps {;
  tabValue:string;
}
;
export const FraudTabContent:React.FC<FraudTabContentProps> = ({ tabValue }) => {;
  switch(tabValue) {;
    case 'pending':;
      return (;
        <div className="bg-amber-50 dark:bg-amber-950/20 p-8 rounded-lg text-center">;
=======
interface FraudTabContentProps {;
  tabValue: string;
}
;
export const FraudTabContent: React.FC<FraudTabContentProps> = ({ tabValue }) => {;
  switch(tabValue) {;
    case 'pending':;
      return (;
        <div className="bg-amber-50 dark: bg-amber-950/20 p-8 rounded-lg text-center">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <AlertTriangle className="mx-auto h-12 w-12 text-amber-500 mb-4" />;
          <h3 className="text-xl font-medium mb-4">Pending Review Flags</h3>;
          <p className="text-muted-foreground">;
            This tab will show fraud flags that are still pending admin review.;
          </p>;
        </div>;
      ),;
<<<<<<< HEAD
    ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    case 'dangerous':;
      return (;
        <div className="bg-red-50 dark:bg-red-950/20 p-8 rounded-lg text-center">;
          <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />;
          <h3 className="text-xl font-medium mb-4">Dangerous Flags</h3>;
          <p className="text-muted-foreground">;
            This tab shows high-priority dangerous flags requiring immediate attention.;
          </p>;
        </div>;
      ),;
<<<<<<< HEAD
    ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    case 'actioned':;
      return (;
        <div className="bg-green-50 dark:bg-green-950/20 p-8 rounded-lg text-center">;
          <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />;
          <h3 className="text-xl font-medium mb-4">Actioned Flags</h3>;
          <p className="text-muted-foreground">;
            This tab shows flags where action has already been taken.;
          </p>;
        </div>;
<<<<<<< HEAD
      ),;
    ;
    default:;
      return null;
  }
},; import {;
  {;
  {;
  AlertTriangle,  AlertCircle, CheckCircle ;
}from 'lucide-react' interface FraudTabContentProps {;
  tabValue: string ;
}tabValue ;
}) => {;
  switch (tabValue) {';
  case 'pending': return (This tab will show fraud flags that are still pending admin review. </p> </div>);';
case 'dangerous': return (<div className="bg-red-50 dark:bg-red-950/20 p-8 rounded-lg text-center" > <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" /> <h3 className="text-xl font-medium mb-4" >Dangerous Flags</h3> <p className="text-muted-foreground" > This tab shows high-priority dangerous flags requiring immediate attention. </p> </div>);'";
case 'actioned': return (<div className="bg-green-50 dark:bg-green-950/20 p-8 rounded-lg text-center" > <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" /> <h3 className="text-xl font-medium mb-4" >Actioned Flags</h3> <p className="text-muted-foreground" > This tab shows flags where action has already been taken. </p> </div>);
default: '"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/admin/fraud-detection/FraudTabContent.tsx
=======
      );
    default:;
      return null;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
}

=======
  }
};
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
