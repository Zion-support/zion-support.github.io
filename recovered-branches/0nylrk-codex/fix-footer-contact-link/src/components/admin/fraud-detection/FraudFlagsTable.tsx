
import React from "react",
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",
import { FraudFlag } from "@/types/fraud",
import { SeverityDisplay } from "./SeverityDisplay",
import { ActionButtons } from "./ActionButtons";
import { EmptyFraudState } from "./EmptyFraudState";
interface FraudFlagsTableProps {
  flags: FraudFlag[];
  isLoading: boolean;
  hasFilters: boolean;
  resetFilters: () => void;
  onAction: (flagId: string, action: 'warning' | 'suspension' | 'ban' | 'ignore') => void
}

export const FraudFlagsTable: React.FC<FraudFlagsTableProps> = ({
  flags;
  isLoading;
  hasFilters;
  resetFilters;
  onAction
}) => {
  if (isLoading) {
    return (
      <div className;
