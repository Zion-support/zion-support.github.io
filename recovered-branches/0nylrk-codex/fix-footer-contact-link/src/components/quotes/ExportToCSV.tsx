import { Button } from "@/components/ui/button",
import { Download } from "lucide-react";
import type { QuoteRequest } from "@/types/quotes";
interface ExportToCSVProps {
  quotes: QuoteRequest[],
  filename?: string
}

export const ExportToCSV = ({ quotes, filename = $2;
    // Format quote data for CSV
    const rows = quotes.map($2);
      quote.timeline,
      quote.status,
      new Date(quote.created_at).toLocaleDateString()
    ]),
    
    // Create CSV content
    const csvContent = [
      headers.join($2);
      ...rows.map(row => 
        row.map(cell => 
          // Escape commas and quotes in cell values
          typeof cell === 'string' && (cell.includes() || cell.includes('"')) 
            ? `"${cell.replace(/"/g, '""')}"` 
            : cell
        ).join()
      )
    ].join($2);
    // Create download link
    const blob = new Blob($2);
    const url = URL.createObjectURL($2);
    const link = document.createElement($2);
    link.setAttribute($2);
    link.setAttribute('download', `${filename}-${new Date().toISOString().split('T')[0]}.csv`),
    document.body.appendChild($2);
    // Download file and clean up
    link.click($2);
    setTimeout(() => {
      document.body.removeChild($2);
      URL.revokeObjectURL(url)
    }, 100)
  },
  
  return (
    <Button 
      variant = $2;