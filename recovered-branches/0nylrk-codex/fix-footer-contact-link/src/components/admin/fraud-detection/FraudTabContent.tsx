<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

import {AlertTriangle, AlertCircle, CheckCircle} from "lucide-react";
<<<<<<< HEAD
=======

import React from "react",
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react",
>>>>>>> origin/cursor/delete-old-data-records-6bba

import {AlertTriangle, AlertCircle, CheckCircle} from "lucide-react";

import React from "react",
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react",



interface FraudTabContentProps {
  tabValue: string
}


<<<<<<< HEAD
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <AlertTriangle className="mx-auto h-12 w-12 text-amber-500 mb-4" />;
          <h3 className="text-xl font-medium mb-4">Pending Review Flags</h3>;

          <p className="text-muted-foreground">;
            This tab will show fraud flags that are still pending admin review.;
          </p>;

<<<<<<< HEAD
        </div>;
      return (
      ),;
    ;
    case 'dangerous':;
      return (;
        <div className="bg-red-50 dark:bg-red-950/20 p-8 rounded-lg text-center">;
          <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />;
          <h3 className="text-xl font-medium mb-4">Dangerous Flags</h3>;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

          <p className="text-muted-foreground">;
            This tab shows high-priority dangerous flags requiring immediate attention.;
          </p>;
        </div>;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba

        </div>;
      );
        </div>
<<<<<<< HEAD

=======
      );
      ),


>>>>>>> origin/cursor/delete-old-data-records-6bba
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
      );
      );
>>>>>>> origin/cursor/delete-old-data-records-6bba
      ),
          ),

      ),

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

    default:


  }
}



=======
    "default":
return null;
import React from "react";"
interface FraudTabContentProps {;
  }
}


>>>>>>> origin/cursor/delete-old-data-records-6bba
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
      ),;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

          <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />;
          <h3 className="text-xl font-medium mb-4">Actioned Flags</h3>;

          <p className="text-muted-foreground">;
            This tab shows flags where action has already been taken.;
          </p>;
        </div>;


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

;
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
