<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react';
=======
import React from "react";
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react'
import React from 'react';
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react';
=======
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react'
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react'
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface FraudTabContentProps {
  tabValue: string
export const FraudTabContent: React.FC<FraudTabContentProps> = ({
  tabValue
}) => {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

        <div className='bg - amber - 50 dark:bg - amber - 950 / 20 p - 8 rounded - lg text - center'>;
          <AlertTriangle className='mx - auto h - 12 w - 12 text - amber - 500 mb - 4' />;
          <h3 className='text - xl font - medium mb - 4'>Pending Review Flags</h3>;
          <p className='text - muted - foreground'>;
            This tab will show fraud flags that are still pending admin review.;
          </p>;
        </div>);
    case 'dangerous':;

<<<<<<< HEAD
=======
  switch (tabValue) {    case 'pending':
<<<<<<< HEAD

import React from "react";
import React from 'react'
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react'
interface FraudTabContentProps {
  tabValue: string
export const FraudTabContent: React.FC<FraudTabContentProps> = ({
  tabValue
}) => {
  switch (tabValue) {    case 'pending':
      return (

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <div className='bg-amber-50 dark:bg-amber-950/20 p-8 rounded-lg text-center'>
          <AlertTriangle className='mx-auto h-12 w-12 text-amber-500 mb-4' />
          <h3 className='text-xl font-medium mb-4'>Pending Review Flags</h3>
          <p className='text-muted-foreground'>
            This tab will show fraud flags that are still pending admin review.
          </p>
        </div>
      )
<<<<<<< HEAD

      ),
    

    case 'actioned':
      ),
=======
=======
      return (


  switch (tabValue) {    case 'pending':
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
      return (

      return (
        <div className="bg-amber-50 dark: bg-amber-950/20 p-8 rounded-lg text-center">
          <AlertTriangle className="mx-auto h-12 w-12 text-amber-500 mb-4" />
          <h3 className="text-xl font-medium mb-4">Pending Review Flags</h3>
          <p className="text-muted-foreground">
            This tab will show fraud flags that are still pending admin review.
          </p>
        </div>
      ),
    
      )
      ),
    
      )
      ),
    
=======


      return (

        <div className='bg-amber-50 dark:bg-amber-950/20 p-8 rounded-lg text-center'>
          <AlertTriangle className='mx-auto h-12 w-12 text-amber-500 mb-4' />
          <h3 className='text-xl font-medium mb-4'>Pending Review Flags</h3>
          <p className='text-muted-foreground'>
            This tab will show fraud flags that are still pending admin review.
          </p>
        </div>
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
      )
      )
      ),
    
      return null
    case 'actioned':
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

    case 'actioned':
      return (
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
      )
    default:
      return null

=======


    case 'actioned':
      return (
        <div className="bg-green-50 dark:bg-green-950/20 p-8 rounded-lg text-center">
          <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
          <h3 className="text-xl font-medium mb-4">Actioned Flags</h3>
          <p className="text-muted-foreground">
            This tab shows flags where action has already been taken.
          </p>
        </div>
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      return null;
  };
};
}
<<<<<<< HEAD
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      ),
    
    default:
      return null
import React from "react",;
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react';
<<<<<<< HEAD
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            This tab shows flags where action has already been taken.;
          </p>;
        </div>;
      );
<<<<<<< HEAD
    default:;
      return null;
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  }
}

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

}


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        <div className='bg - green - 50 dark:bg - green - 950 / 20 p - 8 rounded - lg text - center'>;
          <CheckCircle className='mx - auto h - 12 w - 12 text - green - 500 mb - 4' />;
          <h3 className='text - xl font - medium mb - 4'>Actioned Flags</h3>;
          <p className='text - muted - foreground'>;
            This tab shows flags where action has already been taken.;
          </p>;
        </div>);
    default:;
      return null;
<<<<<<< HEAD
};

=======
  }
}

<<<<<<< HEAD
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
            This tab shows flags where action has already been taken.;
          </p>;
        </div>;
      );
    default:;
      return null;
  }
}

  }
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
