<<<<<<< HEAD
import React from "react";
import { SeverityIndicator } from "@/components/ui/severity-indicator";
=======

import React from "react",
import { SeverityIndicator } from "@/components/ui/severity-indicator",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
interface SeverityDisplayProps {
  severity: string
}

export const SeverityDisplay: React.FC<SeverityDisplayProps> = ({ severity }) => {
  return (
<<<<<<< HEAD
    <SeverityIndicator
      severity={severity as "safe" | "suspicious" | "dangerous"}
      showIcon={true}
      showText={true}
    />;
);
=======
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
};
