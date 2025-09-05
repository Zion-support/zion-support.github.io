
import React from &quot;react&quot;;
import { SeverityIndicator } from &quot;@/components/ui/severity-indicator&quot;;

interface SeverityDisplayProps {
  severity: string;
}

export const SeverityDisplay: React.FC<SeverityDisplayProps> = ({ severity }) => {
  return (
    <SeverityIndicator 
      severity={severity as &quot;safe&quot; | &quot;suspicious&quot; | &quot;dangerous&quot;} 
      showIcon={true}
      showText={true}
    />
  );
};
