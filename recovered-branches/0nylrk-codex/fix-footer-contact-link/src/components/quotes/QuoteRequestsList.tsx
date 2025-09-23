
import { QuoteRequestCard } from "./QuoteRequestCard";
import { EmptyStateCard } from "./EmptyStateCard";
import type { QuoteRequest } from "@/types/quotes";

type QuoteRequestsListProps = {
  quotes: QuoteRequest[];
  isLoading: boolean;
  isArchived: boolean;
  onViewDetails: (quote: QuoteRequest) => void;
  onMarkAsResponded: (id: string) => void;
