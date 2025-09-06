<<<<<<< HEAD


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
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
interface SeverityDisplayProps {
  severity: string
}


=======
<<<<<<< HEAD
import React from "react";
import { SeverityIndicator } from "@/components/ui/severity-indicator";
=======
<<<<<<< HEAD
import React from "react",
import { SeverityIndicator } from "@/components/ui/severity-indicator",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

import React from "react",
import { SeverityIndicator } from "@/components/ui/severity-indicator",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface SeverityDisplayProps {
  severity: string
}
<<<<<<< HEAD
export const SeverityDisplay: React.FC<SeverityDisplayProps> = ({
  severity
}) => {
  return (
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    <SeverityIndicator
      severity={severity as "safe" | "suspicious" | "dangerous"}
      showIcon={true}
      showText={true}
<<<<<<< HEAD
    />
  );
}

=======

export const SeverityDisplay: React.FC<SeverityDisplayProps> = ({ severity }) => {
  return (
=======
    />;
);
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    <SeverityIndicator 
      severity={severity as "safe" | "suspicious" | "dangerous"} 
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
      showIcon={true}
      showText={true}
    />;
  );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
