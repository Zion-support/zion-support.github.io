
<<<<<<< HEAD
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
