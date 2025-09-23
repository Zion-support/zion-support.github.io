
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import type { QuoteRequest } from "@/types/quotes";

interface ExportToCSVProps {
  quotes: QuoteRequest[];
  filename?: string;
}

