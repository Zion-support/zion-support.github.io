
<<<<<<< HEAD
import { Button } from "@/components/ui/button",
import { Download } from 'lucide-react'
import type { QuoteRequest } from "@/types/quotes",

interface ExportToCSVProps {
  quotes: QuoteRequest[],
  filename?: string
=======
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react'
import type { QuoteRequest } from "@/types/quotes";

interface ExportToCSVProps {
  quotes: QuoteRequest[];
  filename?: string;
>>>>>>> origin/auto/autonomy-17186719616
}

export const ExportToCSV = ({ quotes, filename = "quote-requests" }: ExportToCSVProps) => {
  const handleExport = () => {
    // Define CSV Headers
    const headers = [
<<<<<<< HEAD
      'IDTalent Name',
      'Requester NameRequester Email',
      'Project NameProject Summary',
      'BudgetTimeline',
      'StatusCreated Date'
    ],
=======
      'ID',
      'Talent Name',
      'Requester Name',
      'Requester Email',
      'Project Name',
      'Project Summary',
      'Budget',
      'Timeline',
      'Status',
      'Created Date'
    ];
>>>>>>> origin/auto/autonomy-17186719616
    
    // Format quote data for CSV
    const rows = quotes.map(quote => [
      quote.id,
      quote.talent_name || 'Unknown',
      quote.requester_name,
      quote.requester_email,
      quote.project_name,
      quote.project_summary,
      quote.budget_display || 
        (quote.budget_min && quote.budget_max 
          ? `$${quote.budget_min} - $${quote.budget_max}` 
          : quote.budget_min 
            ? `$${quote.budget_min}` 
            : 'Not specified'),
      quote.timeline,
      quote.status,
      new Date(quote.created_at).toLocaleDateString()
<<<<<<< HEAD
    ]),
    
    // Create CSV content
    const csvContent = [
      headers.join(),
      ...rows.map(row => 
        row.map(cell => 
          // Escape commas and quotes in cell values
          typeof cell === 'string' && (cell.includes() || cell.includes('"')) 
            ? `"${cell.replace(/"/g, '""')}"` 
            : cell
        ).join()
      )
    ].join('\n'),
    
    // Create download link
    const blob = new Blob([csvContent], { type: 'text/csv,charset=utf-8,' }),
    const url = URL.createObjectURL(blob),
    const link = document.createElement('a'),
    link.setAttribute('href', url),
    link.setAttribute('download', `${filename}-${new Date().toISOString().split('T')[0]}.csv`),
    document.body.appendChild(link),
    
    // Download file and clean up
    link.click(),
    setTimeout(() => {
      document.body.removeChild(link),
      URL.revokeObjectURL(url),
    }, 100),
  },
=======
    ]);
    
    // Create CSV content
    const csvContent = [
      headers.join(','),
      ...rows.map(row => 
        row.map(cell => 
          // Escape commas and quotes in cell values
          typeof cell === 'string' && (cell.includes(',') || cell.includes('"')) 
            ? `"${cell.replace(/"/g, '""')}"` 
            : cell
        ).join(',')
      )
    ].join('\n');
    
    // Create download link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    
    // Download file and clean up
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, 100);
  };
>>>>>>> origin/auto/autonomy-17186719616
  
  return (
    <Button 
      variant="outline" 
      onClick={handleExport}
      className="flex items-center gap-2"
      disabled={quotes.length === 0}
    >
      <Download size={16} />
      Export CSV
    </Button>
<<<<<<< HEAD
  ),
},
=======
  );
};
>>>>>>> origin/auto/autonomy-17186719616
