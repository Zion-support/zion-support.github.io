
<<<<<<< HEAD
<<<<<<< HEAD
import { Button } from "@/components/ui/button",
import { Download } from 'lucide-react'
import type { QuoteRequest } from "@/types/quotes",
=======
import { Button } from &quot;@/components/ui/button&quot;;
import { Download } from 'lucide-react'
import type { QuoteRequest } from &quot;@/types/quotes&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ExportToCSVProps {
  quotes: QuoteRequest[],
  filename?: string
}

export const ExportToCSV = ({ quotes, filename = &quot;quote-requests&quot; }: ExportToCSVProps) => {
  const handleExport = () => {
    // Define CSV Headers
    const headers = [
      'IDTalent NameRequester NameRequester EmailProject NameProject SummaryBudgetTimeline',
      'StatusCreated Date'
    ],
=======
import type {_QuoteRequest} from "@/types/quotes";

interface ExportToCSVProps {_quotes: QuoteRequest[];
  filename?: string;}

export const _ExportToCSV = (_{_quotes, _filename = "quote-requests"}: ExportToCSVProps) => {_const _handleExport = () => {
    // Define CSV Headers
    const _headers = [
      'ID', _'Talent Name', _'Requester Name', _'Requester Email', _'Project Name', _'Project Summary', _'Budget', _'Timeline', _'Status', _'Created Date'
    ];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    // Format quote data for CSV
    const _rows = quotes.map(quote => [
      quote.id, _quote.talent_name || 'Unknown', _quote.requester_name, _quote.requester_email, _quote.project_name, _quote.project_summary, _quote.budget_display || 
        (quote.budget_min && quote.budget_max 
          ? `$${quote.budget_min} - $${_quote.budget_max}` 
          : quote.budget_min 
            ? `$${_quote.budget_min}` 
            : 'Not specified'),
      quote.timeline,
      quote.status,
      new Date(quote.created_at).toLocaleDateString()
    ]),
    
    // Create CSV content
<<<<<<< HEAD
    const csvContent = [
      headers.join(),
      ...rows.map(row => 
        row.map(cell => 
          // Escape commas and quotes in cell values
<<<<<<< HEAD
          typeof cell === 'string' && (cell.includes() || cell.includes('"')) 
            ? `"${cell.replace(/"/g, '""')}"` 
=======
          typeof cell === 'string' && (cell.includes(',') || cell.includes('&quot;')) 
            ? `&quot;${cell.replace(/&quot;/g, '"&quot;')}&quot;` 
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
    const _csvContent = [
      headers.join(','),
      ...rows.map(row => 
        row.map(cell => 
          // Escape commas and quotes in cell values
          typeof cell === 'string' && (cell.includes(',') || cell.includes('"')) 
            ? `"${_cell.replace(/"/g, _'""')}"` 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            : cell
        ).join()
      )
    ].join('\n'),
    
    // Create download link
<<<<<<< HEAD
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
      URL.revokeObjectURL(url)
    }, 100)
  },
  
  return (
    <Button 
      variant=&quot;outline" 
      onClick={handleExport}
=======
    const _blob = new Blob([csvContent], {_type: 'text/csv;charset=utf-8;'});
    const _url = window.URL.createObjectURL(blob);
    const _link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `${_filename}-${_new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    
    // Download file and clean up
    link.click();
    setTimeout__(() => {_document.body.removeChild(link);
      window.URL.revokeObjectURL(url);}, 100);
  };
  
  return (
    <Button 
      variant="outline" 
      onClick={_handleExport}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      className="flex items-center gap-2"
      disabled={_quotes.length === 0}
    >
      <Download size={_16} />
      Export CSV
    </Button>
  )
},
