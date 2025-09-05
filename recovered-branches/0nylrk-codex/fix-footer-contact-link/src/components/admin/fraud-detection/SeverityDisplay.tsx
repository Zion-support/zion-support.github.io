
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
