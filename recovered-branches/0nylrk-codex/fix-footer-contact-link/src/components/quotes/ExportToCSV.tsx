<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {Button} from "@/components/ui/button";
import {Download} from "lucide-react";
import type { QuoteRequest } from "@/types/quotes";

import { Button } from "@/components/ui/button",
import { Download } from "lucide-react";
import type { QuoteRequest } from "@/types/quotes";
import { Download } from "lucide-react",


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface ExportToCSVProps {

  quotes: QuoteRequest[]
  filename?: string
}
export const ExportToCSV = ({ quotes, filename = "quote-requests" }: ExportToCSVProps) => {
  const handleExport = () => {
    // Define CSV Headers
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

  filename?: string;
}"
export const ExportToCSV = ({ quotes, filename = "quote-requests" }: ExportToCSVProps) => {}
  const handleExport = () => {};
    // Define CSV Headers;

<<<<<<< HEAD
=======
import { Button } from '@/components / ui / button';'
import { Download } from './lucide-react';"
>>>>>>> origin/cursor/delete-old-data-records-6bba
import type { QuoteRequest } from "@/types / quotes";
interface ExportToCSVProps {}
  quotes: QuoteRequest[],
  filename?: string;
}"
export const ExportToCSV = ({ quotes, filename = "quote - requests" }: ExportToCSVProps) =>: any {}
  const handle_export = () =>: any {};
    // Define CSV Headers;
    const headers = [;'
      'IDTalent NameRequester NameRequester EmailProject NameProject SummaryBudgetTimeline';'

      'StatusCreated Date';
    ];
;
    // Format quote data for CSV;
    const rows = quotes.map (quote => [;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      quote.id;

      quote.talent_name |'Unknown';
      quote.requester_name;
      quote.requester_email;
      quote.project_name;
<<<<<<< HEAD

      quote.project_summary;

=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
      quote && quote.talent_name || 'Unknown';
      quote && quote.requester_name;
      quote && quote.requester_email;
      quote && quote.project_name;
      quote && quote.project_summary;
      quote && quote.budget_display || ;
        (quote && quote.budget_min && quote && quote.budget_max ;
          ? `$${quote && quote.budget_min} - $${quote && quote.budget_max}` ;
<<<<<<< HEAD

          : quote && quote.budget_min ;
            ? `$${quote && quote.budget_min}` ;

=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
            : 'Not specified');
      quote && quote.timeline;
      quote && quote.status;
      new Date(quote && quote.created_at).toLocaleDateString();
    ]);

<<<<<<< HEAD


=======
    ],
    
    // Format quote data for CSV
    const rows = quotes.map(quote => [
      quote.id,
>>>>>>> origin/cursor/delete-old-data-records-6bba
      quote.talent_name || 'Unknown',
      quote.requester_name,
      quote.requester_email,
      quote.project_name,
      quote.project_summary,
      quote.budget_display || 

            : 'Not specified'),
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      quote.timeline,
      quote.status,
      new Date(quote.created_at).toLocaleDateString()
    ]),
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      headers.join(),
      ...rows.map(row => 
        row.map(cell => 

          // Escape commas and quotes in cell values
          typeof cell === 'string' && (cell.includes() |cell.includes('"'))

            ? `"${cell.replace(/"/g, '""')}"`
            : cell;
        ).join()
      )


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    ].join('\n'),
    
    // Create download link'
    const blob = new Blob([csvContent], { type: 'text/csv,charset=utf-8,' }),
    const url = URL.createObjectURL(blob),'
    const link = document.createElement('a'),'
    link.setAttribute('href', url),'`

    link.setAttribute('download', `${filename}-${new Date().toISOString().split('T')[0]}.csv`),
    document.body.appendChild(link),

<<<<<<< HEAD
    


=======

    setTimeout(() => {
      document.body.removeChild(link);
      URL.revokeObjectURL(url)
    }, 100)

    // Download file and clean up

    link.click(),
    setTimeout(() => {}
      document.body.removeChild(link),
      URL.revokeObjectURL(url)
    }, 100)import { Button } from "@/components/ui/button";"
import type { QuoteRequest } from "@/types/quotes",;"
;
import type { QuoteRequest } from "@/types/quotes",;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  },
  
  return (
    <Button 
<<<<<<< HEAD

      variant="outline" 
=======
      variant = $2;
import type { QuoteRequest } from "@/types/quotes",;
interface ExportToCSVProps {;
  quotes: QuoteRequest[],;
  filename?: string;
}


      'StatusCreated Date';
    ],;
    // Format quote data for CSV;
    const rows = quotes.map(quote => [;


      quote.talent_name || 'Unknown',;
      quote.requester_name,;
      quote.requester_email,;
      quote.project_name,;
      quote.project_summary,;
>>>>>>> origin/cursor/delete-old-data-records-6bba


      className="flex items-center gap-2"
      disabled={quotes.length === 0}


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    >;

      <Download size={16} />;
      Export CSV;
    </Button>;
  );

<<<<<<< HEAD




};

=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
      quote.budget_display ||;
        (quote.budget_min && quote.budget_max;
          ? `$${quote.budget_min} - $${quote.budget_max}`;
          : quote.budget_min;
            ? `$${quote.budget_min}`;
<<<<<<< HEAD

            : 'Not specified');
      quote.timeline;
      quote.status;
      new Date (quote.created_at).toLocaleDateString ();
    ]);

=======
      on_click={handle_export}
      className="flex items - center gap - 2";

import { Button } from "@/components/ui/button",;
import { Download } from "lucide-react",;
import type { QuoteRequest } from "@/types/quotes",;
;
interface ExportToCSVProps {;
  quotes:QuoteRequest[],;
  filename?:string;
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
      'IDTalent Name',;
      'Requester NameRequester Email',;
      'Project NameProject Summary',;
      'BudgetTimeline',;
      'StatusCreated Date';
    ],;
    ;
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
          :quote.budget_min ;
            ? `$${quote.budget_min}` ;
            :'Not specified'),;
            : 'Not specified'),;
      quote.timeline,;
      quote.status,;
      new Date(quote.created_at).toLocaleDateString();
    ]),;
    // Create CSV content;
    const csvContent = [;
      headers.join(),;
      ...rows.map(row =>;
        row.map(cell =>;
          // Escape commas and quotes in cell values;
          typeof cell === 'string' && (cell.includes() || cell.includes('"'));
            ? `"${cell.replace(/"/g, '""')}"`;
            : cell;
        ).join();
      );
    ].join('\n'),;
    // Create download link;
    const blob = new Blob([csvContent], { type: 'text/csv,charset=utf-8,' }),;
    const url = URL.createObjectURL(blob),;
    const link = document.createElement('a'),;
    link.setAttribute('href', url),;
    link.setAttribute('download', `${filename}-${new Date().toISOString().split('T')[0]}.csv`),;
    document.body.appendChild(link),;
    // Download file and clean up;
    link.click(),;
    setTimeout(() => {;
      document.body.removeChild(link),;
    </Button>;
  ),;
},; interface ExportToCSVProps {
  quotes: QuoteRequest[];
filename?: string 
}export const ExportToCSV = ({
  quotes, filename = "quote-requests" 
}: ExportToCSVProps) => {
  const handleExport = () => {
  //Define CSV Headers const headers = [ 'IDTalent NameRequester NameRequester EmailProject NameProject SummaryBudgetTimeline';
'StatusCreated Date' ];
quote.budget min 
}- $$ {
  quote.budget max 
}`: quote.budget min ? `$$ {
  quote.budget min 
}` : 'Not specified');
quote.timeline;
quote.status;
new Date (quote.created at) .toLocaleDateString () ]);
//Create CSV content //Create download link className="flex items-center gap-2" disabled= {
  quotes.length === 0 
}> <Download size= {
  16 
}/> Export CSV </Button>) 
};
      URL.revokeObjectURL(url);
    }, 100);
  };
  return (;
    <Button;
      variant="outline";

      onClick={handleExport}

      onClick={handleExport}
      className="flex items-center gap-2"
      disabled={quotes.length === 0}

    >;
      <Download size={16} />;
      Export CSV;
<<<<<<< HEAD

    </Button>);
}
;




=======

    </Button>;
  );
};

      className="flex items-center gap-2"

      disabled={quotes.length === 0}
    >;
      <Download size={16} />;

      Export CSV;
>>>>>>> origin/cursor/delete-old-data-records-6bba
