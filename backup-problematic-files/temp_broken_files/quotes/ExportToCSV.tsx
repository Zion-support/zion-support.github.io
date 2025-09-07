<<<<<<< HEAD
import { Button } from "@/components/ui/button",;
import { Download } from 'lucide-react';
import type { QuoteRequest } from "@/types/quotes",;
;
interface ExportToCSVProps {;
  quotes:QuoteRequest[],;
  filename?:string;
}
;
export const ExportToCSV = ({ quotes, filename = "quote-requests" } ExportToCSVProps) => {;
  const handleExport = () => {;
    // Define CSV Headers;
    const headers = [;
=======
import type { QuoteRequest } from "@/types/quotes",;

;
interface ExportToCSVProps {;
  quotes: QuoteRequest[];,;
  filename?:string;
}
;"
export const ExportToCSV = ({ quotes, filename = "quote-requests" } ExportToCSVProps) => {;"
  const handleExport = () => {;
    // Define CSV Headers;
    const headers = [;"
>>>>>>> merged-prs-20250907-203621
      'IDTalent Name',;
      'Requester NameRequester Email',;
      'Project NameProject Summary',;
      'BudgetTimeline',;
<<<<<<< HEAD
      'StatusCreated Date';
    ],;
    ;
=======
      'StatusCreated Date';']
    ],;
>>>>>>> merged-prs-20250907-203621
    // Format quote data for CSV;
    const rows = quotes.map(quote => [;
      quote.id,;
      quote.talent_name || 'Unknown',;
      quote.requester_name,;
      quote.requester_email,;
      quote.project_name,;
      quote.project_summary,;
      quote.budget_display || ;
        (quote.budget_min && quote.budget_max ;
          ? `$${quote.budget_min} - $${quote.budget_max}` ;
<<<<<<< HEAD
          :quote.budget_min ;
            ? `$${quote.budget_min}` ;
            :'Not specified'),;
      quote.timeline,;
      quote.status,;
      new Date(quote.created_at).toLocaleDateString();
    ]),;
    ;
=======
          :quote.budget_min ;`;
            ? `$${quote.budget_min}` ;)
            :'Not specified'),;
      quote.timeline,;
      quote.status,;
      new Date(quote.created_at).toLocaleDateString();]
    ]),;
>>>>>>> merged-prs-20250907-203621
    // Create CSV content;
    const csvContent = [;
      headers.join(),;
      ...rows.map(row => ;
        row.map(cell => ;
<<<<<<< HEAD
          // Escape commas and quotes in cell values;
          typeof cell === 'string' && (cell.includes() || cell.includes('"')) ;
            ? `"${cell.replace(/"/g, '""')}"` ;
            :cell;
        ).join();
      );
    ].join('\n'),;
    ;
    // Create download link;
    const blob = new Blob([csvContent], { type:'text/csv,charset=utf-8,' }),;
    const url = URL.createObjectURL(blob),;
    const link = document.createElement('a'),;
    link.setAttribute('href', url),;
    link.setAttribute('download', `${filename}-${new Date().toISOString().split('T')[0]}.csv`),;
    document.body.appendChild(link),;
    ;
=======
          // Escape commas and quotes in cell values;)
          typeof cell === 'string' && (cell.includes() || cell.includes('"')) ;`;
            ? `"${cell.replace(/"/g, '""')}"` ;"
            :cell;
        ).join();
      );]"
    ].join('\n'),;
    // Create download link;
    const blob = new Blob([csvContent], { type: 'text/csv;,charset=utf-8,' }),;
    const url = URL.createObjectURL(blob),;
    const link = document.createElement('a'),;
    link.setAttribute('href', url),;`;
    link.setAttribute('download', `${filename}-${new Date().toISOString().split('T')[0]}.csv`),;
    document.body.appendChild(link),;
>>>>>>> merged-prs-20250907-203621
    // Download file and clean up;
    link.click(),;
    setTimeout(() => {;
      document.body.removeChild(link),;
      URL.revokeObjectURL(url),;
    }, 100),;
  },;
<<<<<<< HEAD
  ;
  return (;
    <Button ;
      variant="outline" ;
      onClick={handleExport}
      className="flex items-center gap-2";
=======
  return (;
    <Button ;

>>>>>>> merged-prs-20250907-203621
      disabled={quotes.length === 0}
    >;
<<<<<<< HEAD

      <Download size={16} />;
=======
      <Download size={16} />;
      Export CSV;
    </Button>;
  ),;
},; interface ExportToCSVProps {;
  quotes: QuoteRequest[];
filename?: string ;
}export const ExportToCSV = ({;
  quotes, filename = "quote-requests" ;
}: ExportToCSVProps) => {;
  const handleExport = () => {;
  //Define CSV Headers const headers = [ 'IDTalent NameRequester NameRequester EmailProject NameProject SummaryBudgetTimeline';';
'StatusCreated Date' ];
quote.budget min ;
}- $$ {;
  quote.budget max ;
}`: quote.budget min ? `$$ {;
  quote.budget min ';
}` : 'Not specified');
quote.timeline;
quote.status;"new Date (quote.created at) .toLocaleDateString () ]);";"//Create CSV content //Create download link className="flex items-center gap-2" disabled= {;
  quotes.length === 0 ;
}> <Download size= {;
  16 ;
}/> Export CSV </Button>) ;
<<<<<<< HEAD
};"'"
=======
<<<<<<< HEAD
:temp_broken_files/quotes/ExportToCSV.tsx
};"'"
};
'"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/quotes/ExportToCSV.tsx
=======

};
'"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
