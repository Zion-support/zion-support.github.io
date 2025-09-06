
import React from "react";
import { SeverityIndicator } from "@/components/ui/severity-indicator";
interface SeverityDisplayProps {
  severity: string;
}
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export const SeverityDisplay: React.FC<SeverityDisplayProps> = ({
  severity
}) => {
  return (
<<<<<<< HEAD
    <SeverityIndicator 
      severity;
=======
    <SeverityIndicator
      severity={severity as "safe" | "suspicious" | "dangerous"}
      showIcon={true}
      showText={true}
    />
  );
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
