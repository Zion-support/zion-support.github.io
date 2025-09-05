
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

export const SeverityDisplay: React.FC<SeverityDisplayProps> = ({ severity }) => {
  return (
    <SeverityIndicator 
      severity={severity as &quot;safe&quot; | &quot;suspicious&quot; | &quot;dangerous&quot;} 
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      showIcon={true}
      showText={true}
    />;
  );
};