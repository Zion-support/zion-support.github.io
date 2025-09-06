
import React from './react';
import { AlertTriangle, AlertCircle, CheckCircle } from './lucide-react';
<<<<<<< HEAD

=======


import {AlertTriangle, AlertCircle, CheckCircle} from "lucide-react";

=======
import React from "react",
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react",

=======
interface FraudTabContentProps {
  tabValue: string
}
import React from "react";
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";
import {AlertTriangle, AlertCircle, CheckCircle} from "lucide-react";
import React from "react",
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react",

interface FraudTabContentProps {
  tabValue: string
}
export const FraudTabContent: React.FC<FraudTabContentProps> = ({ tabValue }) => {
  switch(tabValue) {
    case 'pending':
      return (

        <div className="bg-amber-50 dark: bg-amber-950/20 p-8 rounded-lg text-center">
          <AlertTriangle className="mx-auto h-12 w-12 text-amber-500 mb-4" />
          <h3 className="text-xl font-medium mb-4">Pending Review Flags</h3>
          <p className="text-muted-foreground">
            This tab will show fraud flags that are still pending admin review.
          </p>
import React from './react';
import { AlertTriangle, AlertCircle, CheckCircle } from './lucide-react';



import {AlertTriangle, AlertCircle, CheckCircle} from "lucide-react";

import React from "react",
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react",

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


interface FraudTabContentProps {
  tab_value: string;
}

import {AlertTriangle, AlertCircle, CheckCircle} from "lucide-react";

interface FraudTabContentProps {;
  tabValue: string;
}

export const FraudTabContent: React.FC<FraudTabContentProps> = ({ tabValue }) => {;
  switch(tabValue) {;
    case 'pending':;
      return (
        <div className="bg-amber-50 dark: bg-amber-950/20 p-8 rounded-lg text-center">;
<<<<<<< HEAD
=======

import React from "react",;
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react",;
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <AlertTriangle className="mx-auto h-12 w-12 text-amber-500 mb-4" />;
          <h3 className="text-xl font-medium mb-4">Pending Review Flags</h3>;
          <p className="text-muted-foreground">;
            This tab will show fraud flags that are still pending admin review.;
          </p>;
        </div>;
<<<<<<< HEAD
      );

    case 'dangerous':;

      return (
=======
      return (
      ),;
    ;
    case 'dangerous':;
      return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <div className="bg-red-50 dark:bg-red-950/20 p-8 rounded-lg text-center">;
          <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />;
          <h3 className="text-xl font-medium mb-4">Dangerous Flags</h3>;
          <p className="text-muted-foreground">;
            This tab shows high-priority dangerous flags requiring immediate attention.;
          </p>;
        </div>;
<<<<<<< HEAD
      );


        </div>

=======
        </div>;
      );
        </div>
      );
      ),
    
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      ),
    


<<<<<<< HEAD
=======
      );
      ),
    
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    case 'actioned':
      return (
        <div className="bg-green-50 dark:bg-green-950/20 p-8 rounded-lg text-center">
          <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
          <h3 className="text-xl font-medium mb-4">Actioned Flags</h3>
          <p className="text-muted-foreground">
            This tab shows flags where action has already been taken.
          </p>
        </div>
      )
    default:
      return null


<<<<<<< HEAD
=======


=======
=======

  }
}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React from "react",;
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react",;
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
<<<<<<< HEAD

    case 'actioned':;
      return (
=======
      ),;
    ;
    case 'actioned':;
      return (;
    case 'actioned':;
      return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <div className="bg-green-50 dark:bg-green-950/20 p-8 rounded-lg text-center">;
          <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />;
          <h3 className="text-xl font-medium mb-4">Actioned Flags</h3>;
          <p className="text-muted-foreground">;
            This tab shows flags where action has already been taken.;
          </p>;
        </div>;
<<<<<<< HEAD
      ),;

    default:;
      return null;




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======



>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  }
}

=======
export const FraudTabContent: React.FC < FraudTabContentProps> = ({ tab_value }) => {
  switch (tab_value) {
    case 'pending':;
      return (
        <div className="bg - amber - 50 dark: bg - amber - 950 / 20 p - 8 rounded - lg text - center">;
          <AlertTriangle className="mx - auto h - 12 w - 12 text - amber - 500 mb - 4" />;
          <h3 className="text - xl font - medium mb - 4">Pending Review Flags</h3>;
          <p className="text - muted - foreground">;
            This tab will show fraud flags that are still pending admin review.;
          </p>;
        </div>);
;
    case 'dangerous':;
      return (
        <div className="bg - red - 50 dark:bg - red - 950 / 20 p - 8 rounded - lg text - center">;
          <AlertCircle className="mx - auto h - 12 w - 12 text - red - 500 mb - 4" />;
          <h3 className="text - xl font - medium mb - 4">Dangerous Flags</h3>;
          <p className="text - muted - foreground">;
            This tab shows high - priority dangerous flags requiring immediate attention.;
          </p>;
        </div>);
;
    case 'actioned':;
      return (
        <div className="bg - green - 50 dark:bg - green - 950 / 20 p - 8 rounded - lg text - center">;
          <CheckCircle className="mx - auto h - 12 w - 12 text - green - 500 mb - 4" />;
          <h3 className="text - xl font - medium mb - 4">Actioned Flags</h3>;
          <p className="text - muted - foreground">;
            This tab shows flags where action has already been taken.;
          </p>;
        </div>),
    default:;
      return null;
  }
}
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
    ;
    default:;
      return null;
  }
},; interface FraudTabContentProps {
  tabValue: string 
}tabValue 
}) => {
  switch (tabValue) {
  case 'pending': return (This tab will show fraud flags that are still pending admin review. </p> </div>);
case 'dangerous': return (<div className="bg-red-50 dark:bg-red-950/20 p-8 rounded-lg text-center" > <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" /> <h3 className="text-xl font-medium mb-4" >Dangerous Flags</h3> <p className="text-muted-foreground" > This tab shows high-priority dangerous flags requiring immediate attention. </p> </div>);
case 'actioned': return (<div className="bg-green-50 dark:bg-green-950/20 p-8 rounded-lg text-center" > <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" /> <h3 className="text-xl font-medium mb-4" >Actioned Flags</h3> <p className="text-muted-foreground" > This tab shows flags where action has already been taken. </p> </div>);
default: 
      );
    default:;
      return null;
  }
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
