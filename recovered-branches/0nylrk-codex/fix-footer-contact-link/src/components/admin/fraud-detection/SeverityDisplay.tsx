<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

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
      severity={severity as "safe" | "suspicious" | "dangerous"} ;
      showIcon={true}
      showText={true}
    />;
  );
=======


import React from './react';
import { SeverityIndicator  } from '@/components / ui / severity - indicator';
interface SeverityDisplayProps {
  severity: string;
}
export const SeverityDisplay: React.FC < SeverityDisplayProps> = ({
  severity,

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
}) => {

  return (
<<<<<<< HEAD

    <SeverityIndicator;
      severity={severity as "safe" | "suspicious" | "dangerous"}
      show_icon={true}
      show_text={true}
    />);
}
;

=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface SeverityDisplayProps {
  severity: string
}


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
};
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
