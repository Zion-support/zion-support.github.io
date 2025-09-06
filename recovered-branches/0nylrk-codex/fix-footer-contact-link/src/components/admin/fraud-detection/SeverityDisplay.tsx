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

export const SeverityDisplay: React.FC<SeverityDisplayProps> = ({ severity }) => {
  return (
<<<<<<< HEAD
    <SeverityIndicator
      severity={severity as "safe" | "suspicious" | "dangerous"}
      showIcon={true}
      showText={true}
<<<<<<< HEAD
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
    />
  );
>>>>>>> main
};
  ),;
},; interface SeverityDisplayProps {
  severity: string 
}severity 
}) => {
  return (<SeverityIndicator />) 
};
};
