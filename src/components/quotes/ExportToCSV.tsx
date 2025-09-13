import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';
import type { QuoteRequest } from "@/types/quotes";


import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react'
import type { QuoteRequest } from "@/types/quotes";

interface ExportToCSVProps {
  quotes: QuoteRequest[]
  filename?: string
}
export const ExportToCSV = ({ quotes, filename = "quote-requests" }: ExportToCSVProps) => {
  const handleExport = () => {
    // Define CSV Headers
    const headers = [
      'IDTalent NameRequester NameRequester EmailProject NameProject SummaryBudgetTimeline'
      'StatusCreated Date'
    ]
    // Format quote data for CSV
    const rows = quotes.map(quote => [
      quote.id
      quote.talent_name |'Unknown'
      quote.requester_name
      quote.requester_email
      quote.project_name
      quote.project_summary
      quote.budget_display |
        (quote.budget_min && quote.budget_max
          ? `$${quote.budget_min} - $${quote.budget_max}`
          : quote.budget_min
            ? `$${quote.budget_min}`
            : 'Not specified')
      quote.timeline
      quote.status
      new Date(quote.created_at).toLocaleDateString()
    ])
    // Create CSV content
    const csvContent = [
      headers.join()
