<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/ExportToCSV.tsx


<<<<<<< HEAD
import { Button } from "@/components/ui/button",

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

import {Button} from "@/components/ui/button";
import {Download} from "lucide-react";
import type { QuoteRequest } from "@/types/quotes";
import { Button } from "@/components/ui/button",
import { Download } from "lucide-react";
import type { QuoteRequest } from "@/types/quotes";
import { Download } from "lucide-react",
import type { QuoteRequest } from "@/types/quotes",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface ExportToCSVProps {

  quotes: QuoteRequest[]
  filename?: string
}
export const ExportToCSV = ({ quotes, filename = "quote-requests" }: ExportToCSVProps) => {
  const handleExport = () => {
    // Define CSV Headers
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
      'StatusCreated Date'

=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/ExportToCSV.tsx
interface ExportToCSVProps {;
  quotes: QuoteRequest[],;
  filename?: string;
}
export const ExportToCSV = ({ quotes, filename = "quote-requests" }: ExportToCSVProps) => {;
  const handleExport = () => {;
    // Define CSV Headers;
    const headers = [;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/ExportToCSV.tsx

      'IDTalent NameRequester NameRequester EmailProject NameProject SummaryBudgetTimeline';
      'StatusCreated Date';
    ];

========
      'IDTalent NameRequester NameRequester EmailProject NameProject SummaryBudgetTimeline';
      'StatusCreated Date';
    ];
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/ExportToCSV.tsx
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
      'StatusCreated Date';
    ];
;
    // Format quote data for CSV;
    const rows = quotes.map (quote => [;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/ExportToCSV.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/ExportToCSV.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    const headers = [;
      'IDTalent NameRequester NameRequester EmailProject NameProject SummaryBudgetTimeline';
    const headers = [
      'IDTalent NameRequester NameRequester EmailProject NameProject SummaryBudgetTimeline',
      'StatusCreated Date'
    ];
    // Format quote data for CSV
    const rows = quotes.map(quote => [
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      quote.id;
      quote.talent_name |'Unknown';
      quote.requester_name;
      quote.requester_email;
      quote.project_name;
      quote.project_summary;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/ExportToCSV.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/ExportToCSV.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/ExportToCSV.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/ExportToCSV.tsx
            : 'Not specified');
      quote && quote.timeline;
      quote && quote.status;
      new Date(quote && quote.created_at).toLocaleDateString();
    ]);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/ExportToCSV.tsx


    const headers = [
      'IDTalent NameRequester NameRequester EmailProject NameProject SummaryBudgetTimeline',

      'StatusCreated Date'

=======
      quote.budget_display |
        (quote.budget_min && quote.budget_max
          ? `$${quote.budget_min} - $${quote.budget_max}`
          : quote.budget_min
            ? `$${quote.budget_min}`
            : 'Not specified');
      quote.timeline;
      quote.status;
      new Date(quote.created_at).toLocaleDateString()
    ]);
    // Create CSV content
    const csvContent = [
      headers.join();
      ...rows.map(row =>
        row.map(cell =>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    ],
    
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
    ]),
    
    // Create CSV content
    const csvContent = [
      headers.join(),
      ...rows.map(row => 
        row.map(cell => 
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          // Escape commas and quotes in cell values
          typeof cell === 'string' && (cell.includes() |cell.includes('"'))
            ? `"${cell.replace(/"/g, '""')}"`
            : cell
        ).join()
      )
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    ].join('\n');
    // Create download link
    const blob = new Blob([csvContent], { type: 'text/csv,charset=utf-8,' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    ].join('\n'),
    
    // Create download link
    const blob = new Blob([csvContent], { type: 'text/csv,charset=utf-8,' }),
    const url = URL.createObjectURL(blob),
    const link = document.createElement('a'),
    link.setAttribute('href', url),
    link.setAttribute('download', `${filename}-${new Date().toISOString().split('T')[0]}.csv`),
    document.body.appendChild(link),
    
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    // Download file and clean up
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
      URL.revokeObjectURL(url)
    }, 100)

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    // Download file and clean up
    link.click(),
    setTimeout(() => {
      document.body.removeChild(link),
      URL.revokeObjectURL(url)
    }, 100)
  }
  return (
    <Button
      variant="outline"
  },
  
  return (
    <Button 
      variant="outline" 
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Button } from "@/components/ui/button",;
import { Download } from "lucide-react",;
import type { QuoteRequest } from "@/types/quotes",;
interface ExportToCSVProps {;
  quotes: QuoteRequest[],;
  filename?: string;
}
;
export const ExportToCSV = ({ quotes, filename = "quote-requests" }: ExportToCSVProps) => {;
  const handleExport = () => {;
    // Define CSV Headers;
    const headers = [;
      'IDTalent NameRequester NameRequester EmailProject NameProject SummaryBudgetTimeline',;
      'StatusCreated Date';
    ],;
    // Format quote data for CSV;
    const rows = quotes.map(quote => [;
      quote.id,;
      quote.talent_name || 'Unknown',;
      quote.requester_name,;
      quote.requester_email,;
      quote.project_name,;
      quote.project_summary,;
<<<<<<< HEAD
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/ExportToCSV.tsx
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
=======

  },
  
  return (
    <Button 
      variant="outline" 

      onClick={handleExport}
      className="flex items-center gap-2"
      disabled={quotes.length === 0}


=======
    >;

      <Download size={16} />;
      Export CSV;
    </Button>;
  );




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/ExportToCSV.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/ExportToCSV.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
;
    // Create CSV content;
    const csv_content = [;
      headers.join ();
      ...rows.map (row =>;
        row.map (cell =>;
          // Escape commas and quotes in cell values;
          typeof cell === 'string' && (cell.includes () || cell.includes ('"'));
            ? `"${cell.replace (/"/g, '""')}"`;
            : cell).join ());
    ].join ('\n');
;
    // Create download link;
    const blob = new Blob ([csv_content], { type: 'text / csv, charset = utf - 8, ' });
    const url = URL.createObjectURL (blob);
    const link = document.create_element ('a');
    link.set_attribute ('href', url);
    link.set_attribute ('download', `${filename}-${new Date ().toISOString ().split ('T')[0]}.csv`);
    document.body.append_child (link);
;
    // Download file and clean up;
    link.click ();
    set_timeout (() => {
      document.body.remove_child (link);
      URL.revokeObjectURL (url);
    }, 100);
  }
;
  return (
    <Button;
      variant="outline";
<<<<<<< HEAD

      onClick={handleExport}
      className="flex items-center gap-2"
      disabled={quotes.length === 0}

    >;
      <Download size={16} />;
      Export CSV;
    </Button>;
  );

};

=======
      on_click={handle_export}
      className="flex items - center gap - 2";
=======

import { Button } from "@/components/ui/button",;
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
      quote.budget_display || ;
        (quote.budget_min && quote.budget_max ;
          ? `$${quote.budget_min} - $${quote.budget_max}` ;
          :quote.budget_min ;
            ? `$${quote.budget_min}` ;
            :'Not specified'),;
=======
            : 'Not specified'),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      quote.timeline,;
      quote.status,;
      new Date(quote.created_at).toLocaleDateString();
    ]),;
<<<<<<< HEAD
    ;
    // Create CSV content;
    const csvContent = [;
      headers.join(),;
      ...rows.map(row => ;
        row.map(cell => ;
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
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    const url = URL.createObjectURL(blob),;
    const link = document.createElement('a'),;
    link.setAttribute('href', url),;
    link.setAttribute('download', `${filename}-${new Date().toISOString().split('T')[0]}.csv`),;
    document.body.appendChild(link),;
<<<<<<< HEAD
    ;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    // Download file and clean up;
    link.click(),;
    setTimeout(() => {;
      document.body.removeChild(link),;
<<<<<<< HEAD
      URL.revokeObjectURL(url),;
    }, 100),;
  },;
  ;
  return (;
    <Button ;
      variant="outline" ;
      onClick={handleExport}
      className="flex items-center gap-2";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      disabled={quotes.length === 0}
    >;
      <Download size={16} />;
      Export CSV;
<<<<<<< HEAD
    </Button>);
}
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/ExportToCSV.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/quotes/ExportToCSV.tsx
=======
      URL.revokeObjectURL(url);
    }, 100);
  };
  return (;
    <Button;
      variant="outline";
      onClick={handleExport}
      className="flex items-center gap-2"
      disabled={quotes.length === 0}
    >
      <Download size={16} />
      Export CSV
    </Button>
  )
}

    >;
      <Download size={16} />;
      Export CSV;
    </Button>;
  );
};
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
