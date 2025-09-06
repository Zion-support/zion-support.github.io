
import React from "react";
import { QuoteRequestCard } from "./QuoteRequestCard";
import { EmptyStateCard } from "./EmptyStateCard";
import type { QuoteRequest } from "@/types/quotes";
type QuoteRequestsListProps = $2;
  isLoading: boolean,
  isArchived: boolean,
  onViewDetails: (quote: QuoteRequest) => void,
  onMarkAsResponded: (id: string) => void,
  onToggleArchive: (id: string, isArchived: boolean) => void
},

export const QuoteRequestsList: React.FC<QuoteRequestsListProps> = ({
  quotes,
  isLoading,
  isArchived,
  onViewDetails,
  onMarkAsResponded,
  onToggleArchive
}) => {
  if (isLoading) {
    return (
      <div className = $2;