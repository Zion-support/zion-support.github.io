
import { Button } from "@/components/ui/button",
import { Download } from "lucide-react";
import type { QuoteRequest } from "@/types/quotes";
<<<<<<< HEAD
interface ExportToCSVProps {

  quotes: QuoteRequest[]
  filename?: string
}
export const ExportToCSV = ({ quotes, filename = "quote-requests" }: ExportToCSVProps) => {
  const handleExport = () => {
    // Define CSV Headers
    const headers = [
=======
interface ExportToCSVProps {;
  quotes: QuoteRequest[],;
  filename?: string;
}

export const ExportToCSV = ({ quotes, filename = "quote-requests" }: ExportToCSVProps) => {;
  const handleExport = () => {;
    // Define CSV Headers;
    const headers = [;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      'IDTalent NameRequester NameRequester EmailProject NameProject SummaryBudgetTimeline';
      'StatusCreated Date';
    ];
<<<<<<< HEAD
    // Format quote data for CSV
    const rows = quotes.map(quote => [
      quote.id;
      quote.talent_name |'Unknown';
      quote.requester_name;
      quote.requester_email;
      quote.project_name;
      quote.project_summary;
      quote.budget_display |
        (quote.budget_min && quote.budget_max
          ? `$${quote.budget_min} - $${quote.budget_max}`
          : quote.budget_min
            ? `$${quote.budget_min}`
=======

    // Format quote data for CSV;
    const rows = quotes && quotes.map(quote => [;
      quote && quote.id;
      quote && quote.talent_name || 'Unknown';
      quote && quote.requester_name;
      quote && quote.requester_email;
      quote && quote.project_name;
      quote && quote.project_summary;
      quote && quote.budget_display || ;
        (quote && quote.budget_min && quote && quote.budget_max ;
          ? `$${quote && quote.budget_min} - $${quote && quote.budget_max}` ;
          : quote && quote.budget_min ;
            ? `$${quote && quote.budget_min}` ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            : 'Not specified');
      quote && quote.timeline;
      quote && quote.status;
      new Date(quote && quote.created_at).toLocaleDateString();
    ]);
<<<<<<< HEAD
    // Create CSV content
    const csvContent = [
      headers.join();
      ...rows.map(row =>
        row.map(cell =>
          // Escape commas and quotes in cell values
          typeof cell === 'string' && (cell.includes() |cell.includes('"'))
            ? `"${cell.replace(/"/g, '""')}"`
            : cell
        ).join()
      )
    ].join('\n');
    // Create download link
    const blob = new Blob([csvContent], { type: 'text/csv,charset=utf-8,' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    // Download file and clean up
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
      URL.revokeObjectURL(url)
    }, 100)
  }
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
  )
}

=======

    // Create CSV content;
    const csvContent = [;
      headers && headers.join();
      ...rows && rows.map(row => ;
        row && row.map(cell => ;
          // Escape commas and quotes in cell values;
          typeof cell === 'string' && (cell && cell.includes() || cell && cell.includes('"')) ;
            ? `"${cell && cell.replace(/"/g, '""')}"` ;
            : cell;
        ).join();
      );
    ].join('\n');

    // Create download link;
    const blob = new Blob([csvContent], { type: 'text/csv,charset=utf-8,' });
    const url = URL && URL.createObjectURL(blob);
    const link = document && document.createElement('a');
    link && link.setAttribute('href', url);
    link && link.setAttribute('download', `${filename}-${new Date().toISOString().split('T')[0]}.csv`);
    document && document.body.appendChild(link);

    // Download file and clean up;
    link && link.click();
    setTimeout(() => {;
      document && document.body.removeChild(link);
      URL && URL.revokeObjectURL(url);
    }, 100);
  };

  return (
    <Button
      variant="outline" 
      onClick={handleExport}
      className="flex items-center gap-2"
      disabled={quotes && quotes.length === 0}>;
      <Download size={16} />;
      Export CSV;
    </Button>;
  );
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
