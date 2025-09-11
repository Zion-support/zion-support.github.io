

import React from './react';
import { SeverityIndicator  } from '@/components / ui / severity - indicator';
interface SeverityDisplayProps {
  severity: string;
}
export const SeverityDisplay: React.FC < SeverityDisplayProps> = ({
  severity,

}) => {
=======

export const SeverityDisplay: React.FC<SeverityDisplayProps> = ({;
  severity,;
}) => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (

    <SeverityIndicator;
      severity={severity as "safe" | "suspicious" | "dangerous"}
      show_icon={true}
      show_text={true}
    />);
}
;

=======



interface SeverityDisplayProps {
  severity: string
}


};
