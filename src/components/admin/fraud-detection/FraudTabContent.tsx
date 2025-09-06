<<<<<<< HEAD
import React from 'react';
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

import React from "react";
=======
import React from 'react'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react'
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react'
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
interface FraudTabContentProps {
  tabValue: string
export const FraudTabContent: React.FC<FraudTabContentProps> = ({
  tabValue
}) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

        <div className='bg - amber - 50 dark:bg - amber - 950 / 20 p - 8 rounded - lg text - center'>;
          <AlertTriangle className='mx - auto h - 12 w - 12 text - amber - 500 mb - 4' />;
          <h3 className='text - xl font - medium mb - 4'>Pending Review Flags</h3>;
          <p className='text - muted - foreground'>;
            This tab will show fraud flags that are still pending admin review.;
          </p>;
        </div>);
    case 'dangerous':;

  switch (tabValue) {    case 'pending':
      return (


=======
  switch (tabValue) {    case 'pending':
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
    
      )
      ),
    
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
      ),
    
<<<<<<< HEAD
<<<<<<< HEAD

    case 'actioned':
      return (
<<<<<<< HEAD
=======

    case 'actioned':
      return (
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
=======
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    case 'actioned':
      return (
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        <div className="bg-green-50 dark:bg-green-950/20 p-8 rounded-lg text-center">
          <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
          <h3 className="text-xl font-medium mb-4">Actioned Flags</h3>
          <p className="text-muted-foreground">
            This tab shows flags where action has already been taken.
          </p>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
      )
    default:
<<<<<<< HEAD
      return null
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      return null;
  };
};
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      ),
    
    default:
      return null
import React from "react",;
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react';
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
<<<<<<< HEAD

    default:;
      return null;
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}


        <div className='bg - green - 50 dark:bg - green - 950 / 20 p - 8 rounded - lg text - center'>;
          <CheckCircle className='mx - auto h - 12 w - 12 text - green - 500 mb - 4' />;
          <h3 className='text - xl font - medium mb - 4'>Actioned Flags</h3>;
          <p className='text - muted - foreground'>;
            This tab shows flags where action has already been taken.;
          </p>;
        </div>);
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    default:;
      return null;
  }
}

=======
  }
};
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
