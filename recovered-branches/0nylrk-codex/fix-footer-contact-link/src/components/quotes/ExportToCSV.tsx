
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


<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


import {Button} from "@/components/ui/button";
import {Download} from "lucide-react";
import type { QuoteRequest } from "@/types/quotes";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Button } from "@/components/ui/button",
import { Download } from "lucide-react";
import type { QuoteRequest } from "@/types/quotes";
import { Download } from "lucide-react",
<<<<<<< HEAD
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
=======
import type { QuoteRequest } from "@/types/quotes",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
interface ExportToCSVProps {

  quotes: QuoteRequest[]
  filename?: string
}
export const ExportToCSV = ({ quotes, filename = "quote-requests" }: ExportToCSVProps) => {
  const handleExport = () => {
    // Define CSV Headers
<<<<<<< HEAD
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
=======

interface ExportToCSVProps {;
  quotes: QuoteRequest[],;
  filename?: string;
}

export const ExportToCSV = ({ quotes, filename = "quote-requests" }: ExportToCSVProps) => {;
  const handleExport = () => {;
    // Define CSV Headers;
    const headers = [;

      'IDTalent NameRequester NameRequester EmailProject NameProject SummaryBudgetTimeline';
      'StatusCreated Date';
    ];

import { Button } from '@/components / ui / button';
import { Download } from './lucide-react';
import type { QuoteRequest } from "@/types / quotes";
interface ExportToCSVProps {
  quotes: QuoteRequest[],
  filename?: string;
}
export const ExportToCSV = ({ quotes, filename = "quote - requests" }: ExportToCSVProps) =>: any {
  const handle_export = () =>: any {
    // Define CSV Headers;
    const headers = [;
      'IDTalent NameRequester NameRequester EmailProject NameProject SummaryBudgetTimeline';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      'StatusCreated Date';
    ];
;
    // Format quote data for CSV;
    const rows = quotes.map (quote => [;

<<<<<<< HEAD
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
=======
      quote.id;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      quote.talent_name |'Unknown';
      quote.requester_name;
      quote.requester_email;
      quote.project_name;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      quote.project_summary;

    // Format quote data for CSV;
    const rows = quotes && quotes.map(quote => [;
      quote && quote.id;'
=======
      quote.project_summary;


    // Format quote data for CSV;
    const rows = quotes && quotes.map(quote => [;
      quote && quote.id;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      quote && quote.talent_name || 'Unknown';
      quote && quote.requester_name;
      quote && quote.requester_email;
      quote && quote.project_name;
      quote && quote.project_summary;
      quote && quote.budget_display || ;
        (quote && quote.budget_min && quote && quote.budget_max ;
          ? `$${quote && quote.budget_min} - $${quote && quote.budget_max}` ;
<<<<<<< HEAD
          : quote && quote.budget_min ;`
            ? `$${quote && quote.budget_min}` ;


'
=======
          : quote && quote.budget_min ;
            ? `$${quote && quote.budget_min}` ;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            : 'Not specified');
      quote && quote.timeline;
      quote && quote.status;
      new Date(quote && quote.created_at).toLocaleDateString();
    ]);

<<<<<<< HEAD
    ],
    
    // Format quote data for CSV;
    const rows = quotes.map(quote => []
      quote.id,'
=======

    const headers = [
      'IDTalent NameRequester NameRequester EmailProject NameProject SummaryBudgetTimeline',

      'StatusCreated Date'

    ],
    
    // Format quote data for CSV
    const rows = quotes.map(quote => [
      quote.id,
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      quote.talent_name || 'Unknown',
      quote.requester_name,
      quote.requester_email,
      quote.project_name,
      quote.project_summary,
      quote.budget_display || 
<<<<<<< HEAD
        (quote.budget_min && quote.budget_max;`
          ? `$${quote.budget_min} - $${quote.budget_max}` 
          : quote.budget_min;`
            ? `$${quote.budget_min}` '
=======
        (quote.budget_min && quote.budget_max 
          ? `$${quote.budget_min} - $${quote.budget_max}` 
          : quote.budget_min 
            ? `$${quote.budget_min}` 
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            : 'Not specified'),
      quote.timeline,
      quote.status,
      new Date(quote.created_at).toLocaleDateString()
    ]),
    
<<<<<<< HEAD
    // Create CSV content;
    const csvContent = []
=======
    // Create CSV content
    const csvContent = [
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      headers.join(),
      ...rows.map(row => 
        row.map(cell => 


<<<<<<< HEAD
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
=======
          // Escape commas and quotes in cell values
          typeof cell === 'string' && (cell.includes() |cell.includes('"'))
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    link.setAttribute('download', `${filename}-${new Date().toISOString().split('T')[0]}.csv`),
    document.body.appendChild(link),
    

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD


    // Download file and clean up
    link.click();
=======

    // Download file and clean up
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
      URL.revokeObjectURL(url)
    }, 100)


    // Download file and clean up
    link.click(),
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======
    }, 100)
import { Button } from "@/components/ui/button",;
import { Download } from "lucide-react",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import type { QuoteRequest } from "@/types/quotes",;
interface ExportToCSVProps {;
  quotes: QuoteRequest[],;
  filename?: string;
}
<<<<<<< HEAD
;"
export const ExportToCSV = ({ quotes, filename = "quote-requests" }: ExportToCSVProps) => {;
  const handleExport = () => {;
    // Define CSV Headers;
    const headers = [;'
      'IDTalent NameRequester NameRequester EmailProject NameProject SummaryBudgetTimeline',;'
=======
;
export const ExportToCSV = ({ quotes, filename = "quote-requests" }: ExportToCSVProps) => {;
  const handleExport = () => {;
    // Define CSV Headers;
    const headers = [;
      'IDTalent NameRequester NameRequester EmailProject NameProject SummaryBudgetTimeline',;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      'StatusCreated Date';
    ],;
    // Format quote data for CSV;
    const rows = quotes.map(quote => [;
<<<<<<< HEAD
      quote.id,;'
=======
      quote.id,;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      quote.talent_name || 'Unknown',;
      quote.requester_name,;
      quote.requester_email,;
      quote.project_name,;
      quote.project_summary,;
<<<<<<< HEAD
<<<<<<< HEAD
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======


      onClick={handleExport}"
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

  },
  
  return (
    <Button 
      variant="outline" 

      onClick={handleExport}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      className="flex items-center gap-2"
      disabled={quotes.length === 0}


    >;

      <Download size={16} />;
      Export CSV;
    </Button>;
  );




<<<<<<< HEAD
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
=======
};
      quote.budget_display ||;
        (quote.budget_min && quote.budget_max;
          ? `$${quote.budget_min} - $${quote.budget_max}`;
          : quote.budget_min;
            ? `$${quote.budget_min}`;
      on_click={handle_export}
      className="flex items - center gap - 2";
      disabled={quotes.length === 0}
    >;
      <Download size={16} />;
      Export CSV;
    </Button>);
}
;

import { Button } from "@/components/ui/button",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      onClick={handleExport}
=======

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      onClick={handleExport}
      className="flex items-center gap-2"
      disabled={quotes.length === 0}

    >;
      <Download size={16} />;
      Export CSV;
    </Button>;
  );
};
<<<<<<< HEAD
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
=======
      on_click={handle_export}
      className="flex items - center gap - 2";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      disabled={quotes.length === 0}
    >;
      <Download size={16} />;
      Export CSV;
<<<<<<< HEAD
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
=======
    </Button>);
}
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
