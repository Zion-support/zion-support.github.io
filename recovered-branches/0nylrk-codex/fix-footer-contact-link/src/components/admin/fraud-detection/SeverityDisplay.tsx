
<<<<<<< HEAD
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
},;
=======
import React from "react",
import { SeverityIndicator } from "@/components/ui/severity-indicator",interface SeverityDisplayProps {
  severity: string
}
import React from "react";

interface SeverityDisplayProps {_severity: string;}

export const SeverityDisplay: React.FC<SeverityDisplayProps> = (_{_severity}) => {_return (
    <SeverityIndicator 
      severity={severity as &quot;safe&quot; | &quot;suspicious&quot; | &quot;dangerous&quot;} 
      showIcon={true}
      showText={true}    />
  )
},
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
