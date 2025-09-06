=======
import React from "react",
import { Calendar, RefreshCw } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover",
import { Button } from "@/components/ui/button",
import { Calendar as CalendarComponent } from "@/components/ui/calendar",
import { format } from "date-fns",
import type { DateRange } from "react-day-picker",
import type { QuoteStatus } from "@/types/quotes",
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface QuotesFilterProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  statusFilter: QuoteStatus | 'all';
  setStatusFilter: (value: QuoteStatus | 'all') => void;
  archiveFilter: 'active' | 'archived' | 'all';
  setArchiveFilter: (value: 'active' | 'archived' | 'all') => void;
  dateRange: DateRange | undefined;
  setDateRange: (range: DateRange | undefined) => void;
  onReset: () => void
}

=======
}
=======
}

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
