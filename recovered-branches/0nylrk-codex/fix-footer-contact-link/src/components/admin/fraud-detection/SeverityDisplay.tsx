
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { SeverityIndicator } from "@/components/ui/severity-indicator",
=======
import React from &quot;react&quot;;
import { SeverityIndicator } from &quot;@/components/ui/severity-indicator&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface SeverityDisplayProps {
  severity: string
}
=======
import React from "react";

interface SeverityDisplayProps {_severity: string;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export const SeverityDisplay: React.FC<SeverityDisplayProps> = (_{_severity}) => {_return (
    <SeverityIndicator 
<<<<<<< HEAD
      severity={severity as &quot;safe&quot; | &quot;suspicious&quot; | &quot;dangerous&quot;} 
      showIcon={true}
      showText={true}
=======
      severity={severity as "safe" | "suspicious" | "dangerous"} 
      showIcon={_true}
      showText={_true}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    />
  )
},
