
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


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
};
