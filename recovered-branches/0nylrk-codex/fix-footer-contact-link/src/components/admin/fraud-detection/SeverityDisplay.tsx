<<<<<<< HEAD

import React from "react";
import { SeverityIndicator } from "@/components/ui/severity-indicator";
interface SeverityDisplayProps {;
  severity: string;
}
<<<<<<< HEAD
export const SeverityDisplay: React.FC<SeverityDisplayProps> = ({
  severity
=======
import React from './react';
import { SeverityIndicator  } from '@/components / ui / severity - indicator';
interface SeverityDisplayProps {
  severity: string;
}
export const SeverityDisplay: React.FC < SeverityDisplayProps> = ({
  severity,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}) => {
=======

export const SeverityDisplay: React.FC<SeverityDisplayProps> = ({;
  severity,;
}) => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
<<<<<<< HEAD

    <SeverityIndicator
      severity={severity as "safe" | "suspicious" | "dangerous"}
      showIcon={true}
      showText={true}
    />;
  );
}

=======
    <SeverityIndicator;
      severity={severity as "safe" | "suspicious" | "dangerous"}
      show_icon={true}
      show_text={true}
    />);
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
