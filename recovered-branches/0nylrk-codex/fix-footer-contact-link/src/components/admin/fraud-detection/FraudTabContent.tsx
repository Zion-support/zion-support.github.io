import React from './react';
import { AlertTriangle, AlertCircle, CheckCircle } from './lucide-react';

import React from "react";

import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";
import {AlertTriangle, AlertCircle, CheckCircle} from "lucide-react";
import React from "react",
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react",

interface FraudTabContentProps {

        <div className="bg-amber-50 dark: bg-amber-950/20 p-8 rounded-lg text-center">
          <AlertTriangle className="mx-auto h-12 w-12 text-amber-500 mb-4" />
          <h3 className="text-xl font-medium mb-4">Pending Review Flags</h3>

          <p className="text-muted-foreground">
            This tab will show fraud flags that are still pending admin review.

import React from './react';
import { AlertTriangle, AlertCircle, CheckCircle } from './lucide-react';
interface FraudTabContentProps {
  tabValue: string
}
import React from "react";
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";
import {AlertTriangle, AlertCircle, CheckCircle} from "lucide-react";
<<<<<<< HEAD
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

<<<<<<< HEAD
import {AlertTriangle, AlertCircle, CheckCircle} from "lucide-react";

import React from "react",
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react",

=======


import {AlertTriangle, AlertCircle, CheckCircle} from "lucide-react";

import React from "react",
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react",

=======

=======
import React from "react",
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react",

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
interface FraudTabContentProps {
  tabValue: string
}

<<<<<<< HEAD
=======
import {AlertTriangle, AlertCircle, CheckCircle} from "lucide-react";
interface FraudTabContentProps {;
  tabValue: string;
}
export const FraudTabContent: React.FC<FraudTabContentProps> = ({ tabValue }) => {;
  switch(tabValue) {;
    case 'pending':;
      return (
        <div className="bg-amber-50 dark: bg-amber-950/20 p-8 rounded-lg text-center">;

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <AlertTriangle className="mx-auto h-12 w-12 text-amber-500 mb-4" />;
          <h3 className="text-xl font-medium mb-4">Pending Review Flags</h3>;

          <p className="text-muted-foreground">;
            This tab will show fraud flags that are still pending admin review.;
          </p>;
<<<<<<< HEAD

=======
        </div>;
      return (
      ),;
    ;
    case 'dangerous':;
      return (;
        <div className="bg-red-50 dark:bg-red-950/20 p-8 rounded-lg text-center">;
          <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />;
          <h3 className="text-xl font-medium mb-4">Dangerous Flags</h3>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <p className="text-muted-foreground">;
            This tab shows high-priority dangerous flags requiring immediate attention.;
          </p>;
        </div>;
<<<<<<< HEAD

        </div>;
      );
        </div>
      );
      ),
=======
        </div>;
      );
        </div>
<<<<<<< HEAD
      );
      ),
    
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

<<<<<<< HEAD
      );
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      ),
          ),

      ),

<<<<<<< HEAD
      );
      ),
    
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    case 'actioned':
      return ("
        <div className="bg-green-50 dark:bg-green-950/20 p-8 rounded-lg text-center">"
          <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />"
          <h3 className="text-xl font-medium mb-4">Actioned Flags</h3>"
          <p className="text-muted-foreground">
            This tab shows flags where action has already been taken.
          </p>
        </div>
      )
<<<<<<< HEAD
    "default":
return null;
import React from "react";"
interface FraudTabContentProps {;
=======
    default:

>>>>>>> origin/chore/fix-lint-and-merge
  }
}

<<<<<<< HEAD
=======
<<<<<<< HEAD

  }
}

=======
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from "react",;

import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react",;
interface FraudTabContentProps {;
  tabValue: string;
}
;
export const FraudTabContent: React.FC<FraudTabContentProps> = ({ tabValue }) => {;
  switch(tabValue) {;'
    case 'pending':;
      return (;"
        <div className="bg-amber-50 dark: bg-amber-950/20 p-8 rounded-lg text-center">;"
          <AlertTriangle className="mx-auto h-12 w-12 text-amber-500 mb-4" />;"
          <h3 className="text-xl font-medium mb-4">Pending Review Flags</h3>;"
          <p className="text-muted-foreground">;
            This tab will show fraud flags that are still pending admin review.;
          </p>;
        </div>;
      ),;'
    case 'dangerous':;
      return (;
interface FraudTabContentProps {}
  tab_value: string;
}
      return ("
        <div className="bg-red-50 dark:bg-red-950/20 p-8 rounded-lg text-center">;"
          <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />;"
          <h3 className="text-xl font-medium mb-4">Dangerous Flags</h3>;"
          <p className="text-muted-foreground">;
            This tab shows high-priority dangerous flags requiring immediate attention.;
          </p>;
        </div>;
<<<<<<< HEAD

=======
      ),;
<<<<<<< HEAD
      ),;
    ;
    case 'actioned':;
      return (;
    case 'actioned':;
      return (;
=======

    case 'actioned':;
      return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div className="bg-green-50 dark:bg-green-950/20 p-8 rounded-lg text-center">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />;
          <h3 className="text-xl font-medium mb-4">Actioned Flags</h3>;

          <p className="text-muted-foreground">;
            This tab shows flags where action has already been taken.;
          </p>;
        </div>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
      ),;

    default:;
      return null;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



  }
}
export const FraudTabContent: React.FC < FraudTabContentProps> = ({ tab_value }) => {
  switch (tab_value) {
    case 'pending':;
      return (
        <div className="bg - amber - 50 dark: bg - amber - 950 / 20 p - 8 rounded - lg text - center">;
          <AlertTriangle className="mx - auto h - 12 w - 12 text - amber - 500 mb - 4" />;
          <h3 className="text - xl font - medium mb - 4">Pending Review Flags</h3>;
          <p className="text - muted - foreground">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            This tab will show fraud flags that are still pending admin review.;
          </p>;
        </div>);
;'
    case 'dangerous':;

            This tab shows high - priority dangerous flags requiring immediate attention.;
          </p>;
        </div>);
;'
    case 'actioned':;

            This tab shows flags where action has already been taken.;
          </p>;
        </div>),
    default:;
      return null;
  }
}
<<<<<<< HEAD
;
=======
;
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
