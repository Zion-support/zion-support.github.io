}) => {
export const SeverityDisplay: React.FC<SeverityDisplayProps> = ({;
  severity,;
}) => {;
  return (
    <SeverityIndicator;
      severity={severity as "safe" | "suspicious" | "dangerous"}
      show_icon={true}
      show_text={true}
    />);
}
;



interface SeverityDisplayProps {
  severity: string
}


import React from "react";
import { SeverityIndicator } from "@/components/ui/severity-indicator";
import React from "react",
import { SeverityIndicator } from "@/components/ui/severity-indicator",

import React from "react",
import { SeverityIndicator } from "@/components/ui/severity-indicator",
interface SeverityDisplayProps {
  severity: string
}
export const SeverityDisplay: React.FC<SeverityDisplayProps> = ({
  severity
}) => {
  return (

    <SeverityIndicator
      severity={severity as "safe" | "suspicious" | "dangerous"}
      showIcon={true}
      showText={true}

<<<<<<< HEAD
import React from "react";
import { SeverityIndicator } from "@/components/ui/severity-indicator";

import React from "react",
import { SeverityIndicator } from "@/components/ui/severity-indicator",

interface SeverityDisplayProps {
  severity: string
}
export const SeverityDisplay: React.FC<SeverityDisplayProps> = ({
  severity
}) => {
  return (
<SeverityIndicator
      severity={severity as "safe" | "suspicious" | "dangerous"}
      showIcon={true}
      showText={true}
/>
  );

}
    />
  );
}


export const SeverityDisplay: React.FC<SeverityDisplayProps> = ({ severity }) => {
  return (
    />;
);
    <SeverityIndicator 
      severity={severity as "safe" | "suspicious" | "dangerous"} 
import React from "react",;
import { SeverityIndicator } from "@/components/ui/severity-indicator",;
interface SeverityDisplayProps {;
  severity: string;
}
;
export const SeverityDisplay: React.FC<SeverityDisplayProps> = ({ severity }) => {;
  return (;
    <SeverityIndicator;

import React from "react",;
import { SeverityIndicator } from "@/components/ui/severity-indicator",;
;
interface SeverityDisplayProps {;
  severity:string;
}
;
export const SeverityDisplay:React.FC<SeverityDisplayProps> = ({ severity }) => {;
  return (;
    <SeverityIndicator ;
      severity={severity as "safe" | "suspicious" | "dangerous"} ;
      showIcon={true}
      showText={true}
    />;
  );

};
  ),;
},; interface SeverityDisplayProps {
  severity: string 
}severity 
=======

import React from './react';
import { SeverityIndicator  } from '@/components / ui / severity - indicator';
interface SeverityDisplayProps {
  severity: string;
}
export const SeverityDisplay: React.FC < SeverityDisplayProps> = ({
  severity,

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}) => {
  return (<SeverityIndicator />) 
};
};
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
