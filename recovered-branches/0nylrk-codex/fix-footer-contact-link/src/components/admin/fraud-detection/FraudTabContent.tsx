
import React from './react';
import { AlertTriangle, AlertCircle, CheckCircle } from './lucide-react';
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
          </p>
import React from './react';
import { AlertTriangle, AlertCircle, CheckCircle } from './lucide-react';



import {AlertTriangle, AlertCircle, CheckCircle} from "lucide-react";

import React from "react",
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react",



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
          <AlertTriangle className="mx-auto h-12 w-12 text-amber-500 mb-4" />;
          <h3 className="text-xl font-medium mb-4">Pending Review Flags</h3>;
          <p className="text-muted-foreground">;
            This tab will show fraud flags that are still pending admin review.;
          </p>;
        </div>;
      );

    case 'dangerous':;

      return (
        <div className="bg-red-50 dark:bg-red-950/20 p-8 rounded-lg text-center">;
          <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />;
          <h3 className="text-xl font-medium mb-4">Dangerous Flags</h3>;
          <p className="text-muted-foreground">;
            This tab shows high-priority dangerous flags requiring immediate attention.;
          </p>;
        </div>;
      );


        </div>

        </div>;
      );
        </div>
      );
      ),
    
    case 'dangerous':
      return (
=======
          </p>      return (
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        <div className="bg-red-50 dark:bg-red-950/20 p-8 rounded-lg text-center">
          <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />
          <h3 className="text-xl font-medium mb-4">Dangerous Flags</h3>
          <p className="text-muted-foreground">
            This tab shows high-priority dangerous flags requiring immediate attention.
          </p>
        </div>
<<<<<<< HEAD

      ),
    


      );
      ),
    
=======
      );
      ),
          ),
    

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
interface FraudTabContentProps {
  tab_value: string;
}
      return (
        <div className="bg-red-50 dark:bg-red-950/20 p-8 rounded-lg text-center">;
          <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />;
          <h3 className="text-xl font-medium mb-4">Dangerous Flags</h3>;
          <p className="text-muted-foreground">;
            This tab shows high-priority dangerous flags requiring immediate attention.;
          </p>;
        </div>;
<<<<<<< HEAD
      ),;

    case 'actioned':;
      return (
        <div className="bg-green-50 dark:bg-green-950/20 p-8 rounded-lg text-center">;
=======
      );
  }
};        <div className="bg-green-50 dark:bg-green-950/20 p-8 rounded-lg text-center">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />;
          <h3 className="text-xl font-medium mb-4">Actioned Flags</h3>;
          <p className="text-muted-foreground">;
            This tab shows flags where action has already been taken.;
          </p>;
        </div>;
      ),;

    default:;
      return null;

<<<<<<< HEAD






  }
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
}

export const FraudTabContent: React.FC < FraudTabContentProps> = ({ tab_value }) => {
  switch (tab_value) {
    case 'pending':;
      return (
<<<<<<< HEAD
        <div className="bg - amber - 50 dark: bg - amber - 950 / 20 p - 8 rounded - lg text - center">;
          <AlertTriangle className="mx - auto h - 12 w - 12 text - amber - 500 mb - 4" />;
          <h3 className="text - xl font - medium mb - 4">Pending Review Flags</h3>;
          <p className="text - muted - foreground">;
=======
        <div className="bg - amber - 50 dark: bg - amber - 950 / 20 p - 8 rounded - lg text-center">;
          <AlertTriangle className="mx - auto h - 12 w - 12 text - amber - 500 mb-4" />;
          <h3 className="text - xl font - medium mb-4">Pending Review Flags</h3>;
          <p className="text - muted-foreground">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
            This tab will show fraud flags that are still pending admin review.;
          </p>;
        </div>);
;
    case 'dangerous':;
      return (
<<<<<<< HEAD
        <div className="bg - red - 50 dark:bg - red - 950 / 20 p - 8 rounded - lg text - center">;
          <AlertCircle className="mx - auto h - 12 w - 12 text - red - 500 mb - 4" />;
          <h3 className="text - xl font - medium mb - 4">Dangerous Flags</h3>;
          <p className="text - muted - foreground">;
=======
        <div className="bg - red - 50 dark:bg - red - 950 / 20 p - 8 rounded - lg text-center">;
          <AlertCircle className="mx - auto h - 12 w - 12 text - red - 500 mb-4" />;
          <h3 className="text - xl font - medium mb-4">Dangerous Flags</h3>;
          <p className="text - muted-foreground">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
            This tab shows high - priority dangerous flags requiring immediate attention.;
          </p>;
        </div>);
;
    case 'actioned':;
      return (
<<<<<<< HEAD
        <div className="bg - green - 50 dark:bg - green - 950 / 20 p - 8 rounded - lg text - center">;
          <CheckCircle className="mx - auto h - 12 w - 12 text - green - 500 mb - 4" />;
          <h3 className="text - xl font - medium mb - 4">Actioned Flags</h3>;
          <p className="text - muted - foreground">;
=======
        <div className="bg - green - 50 dark:bg - green - 950 / 20 p - 8 rounded - lg text-center">;
          <CheckCircle className="mx - auto h - 12 w - 12 text - green - 500 mb-4" />;
          <h3 className="text - xl font - medium mb-4">Actioned Flags</h3>;
          <p className="text - muted-foreground">;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
            This tab shows flags where action has already been taken.;
          </p>;
        </div>),
    default:;
      return null;
  }
}
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
  }
};
=======
  }
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
