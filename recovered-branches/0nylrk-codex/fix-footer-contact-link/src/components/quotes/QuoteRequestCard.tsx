
import React from "react";
import { format } from "date-fns";
import { 
  Card;
  CardContent;
  CardHeader;
  CardTitle;
  CardDescription
} from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { QuoteStatusBadge } from "@/components/quotes/QuoteStatusBadge",
import { Eye, MessageSquare, ArchiveIcon, RefreshCw, CalendarIcon } from "lucide-react";
import type { QuoteRequest } from "@/types/quotes";
type QuoteRequestCardProps = any;
