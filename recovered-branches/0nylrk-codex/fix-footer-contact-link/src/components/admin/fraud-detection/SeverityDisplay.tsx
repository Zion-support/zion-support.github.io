<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
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



  return (

    <SeverityIndicator;
      severity={severity as "safe" | "suspicious" | "dangerous"}
      show_icon={true}
      show_text={true}
    />);
}
;



=======


import React from './react';
import { SeverityIndicator  } from '@/components / ui / severity - indicator';
interface SeverityDisplayProps {
  severity: string;
}
export const SeverityDisplay: React.FC < SeverityDisplayProps> = ({
  severity,

}) => {
=======

export const SeverityDisplay: React.FC<SeverityDisplayProps> = ({;
  severity,;
}) => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (

    <SeverityIndicator;
      severity={severity as "safe" | "suspicious" | "dangerous"}
      show_icon={true}
      show_text={true}
    />);
}
;

=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
interface SeverityDisplayProps {
  severity: string
}


<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
};
