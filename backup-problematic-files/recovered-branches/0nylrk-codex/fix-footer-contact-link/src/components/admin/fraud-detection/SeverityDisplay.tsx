<<<<<<< HEAD
import React from './react';
import { SeverityIndicator  } from '@/components / ui / severity - indicator';
interface SeverityDisplayProps {
  severity: string;
}
export const SeverityDisplay: React.FC < SeverityDisplayProps> = ({
  severity,
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
=======

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
  ),;
},; interface SeverityDisplayProps {
  severity: string 
}severity 
}) => {
  return (<SeverityIndicator />) 
};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
