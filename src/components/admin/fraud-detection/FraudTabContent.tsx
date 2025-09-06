<<<<<<< HEAD
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
      return (

        <div className='bg-amber-50 dark:bg-amber-950/20 p-8 rounded-lg text-center'>
          <AlertTriangle className='mx-auto h-12 w-12 text-amber-500 mb-4' />
          <h3 className='text-xl font-medium mb-4'>Pending Review Flags</h3>
          <p className='text-muted-foreground'>
            This tab will show fraud flags that are still pending admin review.
          </p>
        </div>
      )
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
import React from 'react';
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react';
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


>>>>>>> main
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


>>>>>>> main
      return (
        <div className="bg-amber-50 dark: bg-amber-950/20 p-8 rounded-lg text-center">
          <AlertTriangle className="mx-auto h-12 w-12 text-amber-500 mb-4" />
          <h3 className="text-xl font-medium mb-4">Pending Review Flags</h3>
          <p className="text-muted-foreground">
            This tab will show fraud flags that are still pending admin review.
          </p>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
      ),
    
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
      )
=======
      ),
    
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


>>>>>>> main
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
<<<<<<< HEAD
      )
=======
      ),
    
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    case 'actioned':
      return (
        <div className="bg-green-50 dark:bg-green-950/20 p-8 rounded-lg text-center">
          <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
          <h3 className="text-xl font-medium mb-4">Actioned Flags</h3>
          <p className="text-muted-foreground">
            This tab shows flags where action has already been taken.
          </p>
        </div>
<<<<<<< HEAD
      )
    default:
<<<<<<< HEAD
      return null
=======
=======

      ),
    

    case 'actioned':
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


>>>>>>> main
      return null;
  };
};
}
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======

>>>>>>> main
      ),
    
    default:
      return null
import React from "react",;
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react';
<<<<<<< HEAD
interface FraudTabContentProps {;
  tabValue: string;
}
;
export const FraudTabContent: React.FC<FraudTabContentProps> = ({ tabValue }) => {;
  switch(tabValue) {;
    case 'pending':;
      return (;
        <div className="bg-amber-50 dark: bg-amber-950/20 p-8 rounded-lg text-center">;
          <AlertTriangle className="mx-auto h-12 w-12 text-amber-500 mb-4" />;
          <h3 className="text-xl font-medium mb-4">Pending Review Flags</h3>;
          <p className="text-muted-foreground">;
            This tab will show fraud flags that are still pending admin review.;
          </p>;
        </div>;
      ),;
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
    case 'actioned':;
      return (;
        <div className="bg-green-50 dark:bg-green-950/20 p-8 rounded-lg text-center">;
          <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />;
          <h3 className="text-xl font-medium mb-4">Actioned Flags</h3>;
          <p className="text-muted-foreground">;
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
>>>>>>> main
            This tab shows flags where action has already been taken.;
          </p>;
        </div>;
      );
<<<<<<< HEAD
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
=======

    default:;
      return null;

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
};
>>>>>>> main
