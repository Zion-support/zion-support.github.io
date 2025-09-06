
<<<<<<< HEAD

<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {Button} from "@/components/ui/button";
import {Download} from "lucide-react";
import type { QuoteRequest } from "@/types/quotes";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { Button } from "@/components/ui/button",
import { Download } from "lucide-react";
import type { QuoteRequest } from "@/types/quotes";
import { Download } from "lucide-react",
<<<<<<< HEAD
<<<<<<< HEAD
import type { QuoteRequest } from "@/types/quotes",
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface ExportToCSVProps {

  quotes: QuoteRequest[]
  filename?: string
}
export const ExportToCSV = ({ quotes, filename = "quote-requests" }: ExportToCSVProps) => {
  const handleExport = () => {
    // Define CSV Headers
<<<<<<< HEAD

      'StatusCreated Date'

=======
<<<<<<< HEAD
<<<<<<< HEAD

interface ExportToCSVProps {;
  quotes: QuoteRequest[],;
=======
import { Button } from "@/components/ui/button",";
import { Download } from "lucide-react";"
import type { QuoteRequest } from "@/types/quotes";"
import { Download } from "lucide-react","
import type { QuoteRequest } from "@/types/quotes",

interface ExportToCSVProps {}
  quotes: QuoteRequest[];
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  filename?: string;
}"
export const ExportToCSV = ({ quotes, filename = "quote-requests" }: ExportToCSVProps) => {}
  const handleExport = () => {};
    // Define CSV Headers;
import { Button } from '@/components / ui / button';'
import { Download } from './lucide-react';"
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
    const headers = [;
      'IDTalent NameRequester NameRequester EmailProject NameProject SummaryBudgetTimeline';
    const headers = [
      'IDTalent NameRequester NameRequester EmailProject NameProject SummaryBudgetTimeline',
      'StatusCreated Date'
    ];
    // Format quote data for CSV
    const rows = quotes.map(quote => [
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      quote.id;
=======
import type { QuoteRequest } from "@/types/quotes",      quote.id;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import type { QuoteRequest } from "@/types/quotes",      quote.id;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


      quote.id;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      quote.talent_name |'Unknown';
      quote.requester_name;
      quote.requester_email;
      quote.project_name;
<<<<<<< HEAD
<<<<<<< HEAD
      quote.project_summary;

    // Format quote data for CSV;
    const rows = quotes && quotes.map(quote => [;
      quote && quote.id;'
      quote && quote.talent_name || 'Unknown';
      quote && quote.requester_name;
      quote && quote.requester_email;
      quote && quote.project_name;
      quote && quote.project_summary;
      quote && quote.budget_display || ;
        (quote && quote.budget_min && quote && quote.budget_max ;
          ? `$${quote && quote.budget_min} - $${quote && quote.budget_max}` ;
          : quote && quote.budget_min ;`
            ? `$${quote && quote.budget_min}` ;


'
            : 'Not specified');
      quote && quote.timeline;
      quote && quote.status;
      new Date(quote && quote.created_at).toLocaleDateString();
    ]);

    ],
    
    // Format quote data for CSV;
    const rows = quotes.map(quote => []
      quote.id,'
      quote.talent_name || 'Unknown',
      quote.requester_name,
      quote.requester_email,
      quote.project_name,
      quote.project_summary,
      quote.budget_display || 
        (quote.budget_min && quote.budget_max;`
          ? `$${quote.budget_min} - $${quote.budget_max}` 
          : quote.budget_min;`
            ? `$${quote.budget_min}` '
            : 'Not specified'),
      quote.timeline,
      quote.status,
      new Date(quote.created_at).toLocaleDateString()
    ]),
    
    // Create CSV content;
    const csvContent = []
      headers.join(),
      ...rows.map(row => 
        row.map(cell => 


<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          // Escape commas and quotes in cell values
          typeof cell === 'string' && (cell.includes() |cell.includes('"'))
=======

          // Escape commas and quotes in cell values'"
          typeof cell === 'string' && (cell.includes() |cell.includes('"'))'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            ? `"${cell.replace(/"/g, '""')}"`
            : cell;
        ).join()
      )
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
    ].join('\n');
    // Create download link
    const blob = new Blob([csvContent], { type: 'text/csv,charset=utf-8,' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    ].join('\n'),
    
    // Create download link'
    const blob = new Blob([csvContent], { type: 'text/csv,charset=utf-8,' }),
    const url = URL.createObjectURL(blob),'
    const link = document.createElement('a'),'
    link.setAttribute('href', url),'`
    link.setAttribute('download', `${filename}-${new Date().toISOString().split('T')[0]}.csv`),
    document.body.appendChild(link),
    

<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD


    // Download file and clean up
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
      URL.revokeObjectURL(url)
    }, 100)


=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    // Download file and clean up
=======
      quote.project_summary;    // Download file and clean up
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      quote.project_summary;    // Download file and clean up
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    // Download file and clean up;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    link.click(),
    setTimeout(() => {}
      document.body.removeChild(link),
      URL.revokeObjectURL(url)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    }, 100)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { Button } from "@/components/ui/button",;
import { Download } from "lucide-react",;
=======
    }, 100)"
import { Button } from "@/components/ui/button",;"
import { Download } from "lucide-react",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import type { QuoteRequest } from "@/types/quotes",;
interface ExportToCSVProps {;
  quotes: QuoteRequest[],;
  filename?: string;
}
;"
export const ExportToCSV = ({ quotes, filename = "quote-requests" }: ExportToCSVProps) => {;
  const handleExport = () => {;
    // Define CSV Headers;
    const headers = [;'
      'IDTalent NameRequester NameRequester EmailProject NameProject SummaryBudgetTimeline',;'
      'StatusCreated Date';
    ],;
    // Format quote data for CSV;
    const rows = quotes.map(quote => [;
      quote.id,;'
      quote.talent_name || 'Unknown',;
      quote.requester_name,;
      quote.requester_email,;
      quote.project_name,;
      quote.project_summary,;
<<<<<<< HEAD
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======


      onClick={handleExport}"
      className="flex items-center gap-2"
      disabled={quotes.length === 0}


    >;

      <Download size={16} />;
      Export CSV;
    </Button>;
  );




>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
};
      quote.budget_display ||;
        (quote.budget_min && quote.budget_max;`
          ? `$${quote.budget_min} - $${quote.budget_max}`;
          : quote.budget_min;`
            ? `$${quote.budget_min}`;

<<<<<<< HEAD
import { Button } from "@/components/ui/button",;
=======
    }, 100)import { Button } from "@/components/ui/button",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    }, 100)import { Button } from "@/components/ui/button",;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { Download } from "lucide-react",;
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
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      onClick={handleExport}
=======

      onClick={handleExport}
      className="flex items-center gap-2"
      disabled={quotes.length === 0}

    >;

      <Download size={16} />;
      Export CSV;
    </Button>;
  )
};
      quote.budget_display ||;
        (quote.budget_min && quote.budget_max;
          ? `$${quote.budget_min} - $${quote.budget_max}`;
          : quote.budget_min;
            ? `$${quote.budget_min}`;      onClick={handleExport}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      className="flex items-center gap-2"
      disabled={quotes.length === 0}

    >;

      <Download size={16} />;
      Export CSV;
    </Button>;
  )
};
      quote.budget_display ||;
        (quote.budget_min && quote.budget_max;
          ? `$${quote.budget_min} - $${quote.budget_max}`;
          : quote.budget_min;
            ? `$${quote.budget_min}`;      onClick={handleExport}
=======
      onClick={handleExport}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      className="flex items-center gap-2"
      disabled={quotes.length === 0}

    >;
      <Download size={16} />;
      Export CSV;
    </Button>;
  )
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      on_click={handle_export}
      className="flex items - center gap - 2";
      disabled={quotes.length === 0}
    >;
      <Download size={16} />;
      Export CSV;
    </Button>);
}
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
