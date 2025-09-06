
<<<<<<< HEAD
import React from "react";
import { SeverityIndicator } from "@/components/ui/severity-indicator";
=======
import React from "react",
import { SeverityIndicator } from "@/components/ui/severity-indicator",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
interface SeverityDisplayProps {
  severity: string
}
<<<<<<< HEAD
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

=======

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
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
