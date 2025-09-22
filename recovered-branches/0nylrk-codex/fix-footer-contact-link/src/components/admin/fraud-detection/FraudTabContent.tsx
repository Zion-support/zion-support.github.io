<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import React from './react';
import { AlertTriangle, AlertCircle, CheckCircle } from './lucide-react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

import React from './react';
import { AlertTriangle, AlertCircle, CheckCircle } from './lucide-react';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";
import {AlertTriangle, AlertCircle, CheckCircle} from "lucide-react";
import React from "react",
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react",

interface FraudTabContentProps {
<<<<<<< HEAD
  tabValue: string
}
export const FraudTabContent: React.FC<FraudTabContentProps> = ({ tabValue }) => {
  switch(tabValue) {
    case 'pending':
      return (

interface FraudTabContentProps {
  tabValue: string
}
export const FraudTabContent: React.FC<FraudTabContentProps> = ({ tabValue }) => {
  switch(tabValue) {
    case 'pending':
      return (
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

        <div className="bg-amber-50 dark: bg-amber-950/20 p-8 rounded-lg text-center">
          <AlertTriangle className="mx-auto h-12 w-12 text-amber-500 mb-4" />
          <h3 className="text-xl font-medium mb-4">Pending Review Flags</h3>
=======
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";"
import {AlertTriangle, AlertCircle, CheckCircle} from "lucide-react";"
import React from "react","
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react",

interface FraudTabContentProps {}
"
        <div className="bg-amber-50 dark: bg-amber-950/20 p-8 rounded-lg text-center">"
          <AlertTriangle className="mx-auto h-12 w-12 text-amber-500 mb-4" />"
          <h3 className="text-xl font-medium mb-4">Pending Review Flags</h3>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <p className="text-muted-foreground">
            This tab will show fraud flags that are still pending admin review.
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          </p>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
=======
          </p>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React from './react';
import { AlertTriangle, AlertCircle, CheckCircle } from './lucide-react';



=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import {AlertTriangle, AlertCircle, CheckCircle} from "lucide-react";

import React from "react",
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react",

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <AlertTriangle className="mx-auto h-12 w-12 text-amber-500 mb-4" />;
          <h3 className="text-xl font-medium mb-4">Pending Review Flags</h3>;
=======
";
          <AlertTriangle className="mx-auto h-12 w-12 text-amber-500 mb-4" />;"
          <h3 className="text-xl font-medium mb-4">Pending Review Flags</h3>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <p className="text-muted-foreground">;
            This tab will show fraud flags that are still pending admin review.;
          </p>;
<<<<<<< HEAD

=======
      );
      ),
    
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
        </div>;
"
        <div className="bg-red-50 dark:bg-red-950/20 p-8 rounded-lg text-center">;"
          <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />;"
          <h3 className="text-xl font-medium mb-4">Dangerous Flags</h3>;"
=======
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <p className="text-muted-foreground">;
            This tab shows high-priority dangerous flags requiring immediate attention.;
          </p>;
        </div>;
<<<<<<< HEAD
=======
      );


        </div>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

        </div>;
      );
        </div>
      );
      ),
    
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    case 'dangerous':
      return (
=======
          </p>      return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          </p>      return (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    case 'dangerous':
      return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        <div className="bg-red-50 dark:bg-red-950/20 p-8 rounded-lg text-center">
          <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />
          <h3 className="text-xl font-medium mb-4">Dangerous Flags</h3>
=======

    case 'dangerous':
      return ("
        <div className="bg-red-50 dark:bg-red-950/20 p-8 rounded-lg text-center">"
          <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />"
          <h3 className="text-xl font-medium mb-4">Dangerous Flags</h3>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <p className="text-muted-foreground">
            This tab shows high-priority dangerous flags requiring immediate attention.
          </p>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
      );
      ),
    
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

      ),
    


<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      );
      ),
          ),
    
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      );
      ),
    
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      );
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      ),
    

<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

      );
      ),
    
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
    default:
<<<<<<< HEAD
      return null
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

<<<<<<< HEAD
=======


=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React from "react",;
=======
      return null;
"
import React from "react",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
      );
  }
};        <div className="bg-green-50 dark:bg-green-950/20 p-8 rounded-lg text-center">;
=======
      ),;

    case 'actioned':;
      return (
        <div className="bg-green-50 dark:bg-green-950/20 p-8 rounded-lg text-center">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />;
          <h3 className="text-xl font-medium mb-4">Actioned Flags</h3>;
=======
"
        <div className="bg-green-50 dark:bg-green-950/20 p-8 rounded-lg text-center">;"
          <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />;"
          <h3 className="text-xl font-medium mb-4">Actioned Flags</h3>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <p className="text-muted-foreground">;
            This tab shows flags where action has already been taken.;
          </p>;
        </div>;
<<<<<<< HEAD
      ),;

    default:;
      return null;







  }
}

export const FraudTabContent: React.FC < FraudTabContentProps> = ({ tab_value }) => {
  switch (tab_value) {
    case 'pending':;
      return (
<<<<<<< HEAD
        <div className="bg - amber - 50 dark: bg - amber - 950 / 20 p - 8 rounded - lg text-center">;
          <AlertTriangle className="mx - auto h - 12 w - 12 text - amber - 500 mb-4" />;
          <h3 className="text - xl font - medium mb-4">Pending Review Flags</h3>;
          <p className="text - muted-foreground">;
=======

  }
}


export const FraudTabContent: React.FC < FraudTabContentProps> = ({ tab_value }) => {}
  switch (tab_value) {';
    case 'pending':;
      return ("
        <div className="bg - amber - 50 dark: bg - amber - 950 / 20 p - 8 rounded - lg text - center">;"
          <AlertTriangle className="mx - auto h - 12 w - 12 text - amber - 500 mb - 4" />;"
          <h3 className="text - xl font - medium mb - 4">Pending Review Flags</h3>;"
          <p className="text - muted - foreground">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        <div className="bg - amber - 50 dark: bg - amber - 950 / 20 p - 8 rounded - lg text - center">;
          <AlertTriangle className="mx - auto h - 12 w - 12 text - amber - 500 mb - 4" />;
          <h3 className="text - xl font - medium mb - 4">Pending Review Flags</h3>;
          <p className="text - muted - foreground">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            This tab will show fraud flags that are still pending admin review.;
          </p>;
        </div>);
;'
    case 'dangerous':;
<<<<<<< HEAD
      return (
<<<<<<< HEAD
        <div className="bg - red - 50 dark:bg - red - 950 / 20 p - 8 rounded - lg text-center">;
          <AlertCircle className="mx - auto h - 12 w - 12 text - red - 500 mb-4" />;
          <h3 className="text - xl font - medium mb-4">Dangerous Flags</h3>;
          <p className="text - muted-foreground">;
=======
      return ("
        <div className="bg - red - 50 dark:bg - red - 950 / 20 p - 8 rounded - lg text - center">;"
          <AlertCircle className="mx - auto h - 12 w - 12 text - red - 500 mb - 4" />;"
          <h3 className="text - xl font - medium mb - 4">Dangerous Flags</h3>;"
          <p className="text - muted - foreground">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        <div className="bg - red - 50 dark:bg - red - 950 / 20 p - 8 rounded - lg text - center">;
          <AlertCircle className="mx - auto h - 12 w - 12 text - red - 500 mb - 4" />;
          <h3 className="text - xl font - medium mb - 4">Dangerous Flags</h3>;
          <p className="text - muted - foreground">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            This tab shows high - priority dangerous flags requiring immediate attention.;
          </p>;
        </div>);
;'
    case 'actioned':;
<<<<<<< HEAD
      return (
<<<<<<< HEAD
        <div className="bg - green - 50 dark:bg - green - 950 / 20 p - 8 rounded - lg text-center">;
          <CheckCircle className="mx - auto h - 12 w - 12 text - green - 500 mb-4" />;
          <h3 className="text - xl font - medium mb-4">Actioned Flags</h3>;
          <p className="text - muted-foreground">;
=======
      return ("
        <div className="bg - green - 50 dark:bg - green - 950 / 20 p - 8 rounded - lg text - center">;"
          <CheckCircle className="mx - auto h - 12 w - 12 text - green - 500 mb - 4" />;"
          <h3 className="text - xl font - medium mb - 4">Actioned Flags</h3>;"
          <p className="text - muted - foreground">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        <div className="bg - green - 50 dark:bg - green - 950 / 20 p - 8 rounded - lg text - center">;
          <CheckCircle className="mx - auto h - 12 w - 12 text - green - 500 mb - 4" />;
          <h3 className="text - xl font - medium mb - 4">Actioned Flags</h3>;
          <p className="text - muted - foreground">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            This tab shows flags where action has already been taken.;
          </p>;
        </div>),
    default:;
      return null;
  }
}
;
<<<<<<< HEAD
<<<<<<< HEAD
  }
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

      );
  }
};

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
  }
};
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
import React from "react";


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
