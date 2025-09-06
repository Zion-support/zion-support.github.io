<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react';

import React from "react";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react'
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react'
=======
import React from 'react';
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react';
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
interface FraudTabContentProps {
  tab_value: string;
export const FraudTabContent: React.FC < FraudTabContentProps> = ({
  tab_value,
}) => {

        <div className='bg - amber - 50 dark:bg - amber - 950 / 20 p - 8 rounded - lg text - center'>;
          <AlertTriangle className='mx - auto h - 12 w - 12 text - amber - 500 mb - 4' />;
          <h3 className='text - xl font - medium mb - 4'>Pending Review Flags</h3>;
          <p className='text - muted - foreground'>;
            This tab will show fraud flags that are still pending admin review.;
          </p>;
        </div>);
    case 'dangerous':;

  switch (tabValue) {    case 'pending':


<<<<<<< HEAD
  switch (tabValue) {    case 'pending':
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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


      return (
<<<<<<< HEAD
        <div className="bg-amber-50 dark: bg-amber-950/20 p-8 rounded-lg text-center">
          <AlertTriangle className="mx-auto h-12 w-12 text-amber-500 mb-4" />
          <h3 className="text-xl font-medium mb-4">Pending Review Flags</h3>
          <p className="text-muted-foreground">
            This tab will show fraud flags that are still pending admin review.
          </p>
        </div>
<<<<<<< HEAD
=======


>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    case 'dangerous':
      return (
        <div className="bg-red-50 dark:bg-red-950/20 p-8 rounded-lg text-center">
          <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />
          <h3 className="text-xl font-medium mb-4">Dangerous Flags</h3>
          <p className="text-muted-foreground">
            This tab shows high-priority dangerous flags requiring immediate attention.
          </p>
        </div>
<<<<<<< HEAD
=======

      ),
    

    case 'actioned':
      return (
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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


<<<<<<< HEAD
    case 'actioned':
      return (
        <div className="bg-green-50 dark:bg-green-950/20 p-8 rounded-lg text-center">
          <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
          <h3 className="text-xl font-medium mb-4">Actioned Flags</h3>
          <p className="text-muted-foreground">
            This tab shows flags where action has already been taken.
          </p>
        </div>
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      return null;
  };
};
}

      ),
    
    default:
      return null
import React from "react",;
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react';
<<<<<<< HEAD
=======

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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
            This tab shows flags where action has already been taken.;
          </p>;
        </div>;
      );
<<<<<<< HEAD
=======

    default:;
      return null;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

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

  }
<<<<<<< HEAD
=======
};
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
      );

    default:
      return null;
  }
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
