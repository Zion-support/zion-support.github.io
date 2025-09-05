
import React from "react";

interface SeverityDisplayProps {_severity: string;}

export const SeverityDisplay: React.FC<SeverityDisplayProps> = (_{_severity}) => {_return (
    <SeverityIndicator 
      severity={severity as "safe" | "suspicious" | "dangerous"} 
      showIcon={_true}
      showText={_true}
    />
  );
};
