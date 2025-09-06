<<<<<<< HEAD
import React from './react';
import { AlertTriangle, AlertCircle, CheckCircle } from './lucide-react';
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
      ),;
    ;
    case 'dangerous':;
      return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <div className="bg-red-50 dark:bg-red-950/20 p-8 rounded-lg text-center">;
          <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />;
          <h3 className="text-xl font-medium mb-4">Dangerous Flags</h3>;
          <p className="text-muted-foreground">;
            This tab shows high-priority dangerous flags requiring immediate attention.;
          </p>;
        </div>;
<<<<<<< HEAD
      );
    case 'actioned':;
      return (
=======
      ),;
    ;
    case 'actioned':;
      return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        <div className="bg-green-50 dark:bg-green-950/20 p-8 rounded-lg text-center">;
          <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />;
          <h3 className="text-xl font-medium mb-4">Actioned Flags</h3>;
          <p className="text-muted-foreground">;
            This tab shows flags where action has already been taken.;
          </p>;
        </div>;
      ),;
<<<<<<< HEAD
    default:;
      return null;
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
