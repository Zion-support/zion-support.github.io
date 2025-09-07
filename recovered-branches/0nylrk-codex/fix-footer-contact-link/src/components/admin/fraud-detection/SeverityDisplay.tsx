

import React from './react';
import { SeverityIndicator  } from '@/components / ui / severity - indicator';
interface SeverityDisplayProps {
  // TODO: Implement
}
  severity: string;
export const SeverityDisplay: React.FC < SeverityDisplayProps> = ({
  severity,
)
}) => {
  return (
export const SeverityDisplay: React.FC<SeverityDisplayProps> = ({;

    <SeverityIndicator;
      severity={severity as "safe" | "suspicious" | "dangerous"}"
      show_icon={true}
      show_text={true})
    />);

export const SeverityDisplay: React.FC<SeverityDisplayProps> = ({ severity }) => {

    <SeverityIndicator;"
      showIcon={true}
      showText={true}
      severity={severity as "safe" | "suspicious" | "dangerous"}""
import React from "react",;""
import { SeverityIndicator } from "@/components/ui/severity-indicator",;"
interface SeverityDisplayProps {;
;
export const SeverityDisplay: React.FC<SeverityDisplayProps> = ({ severity }) => {;

      severity={severity as "safe" | "suspicious" | "dangerous"} ;"
    />;

      show_text={true}
"