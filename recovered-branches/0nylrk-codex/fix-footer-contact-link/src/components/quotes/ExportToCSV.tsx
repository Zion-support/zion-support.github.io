<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {Button} from "@/components/ui/button";
import {Download} from "lucide-react";
import type { QuoteRequest } from "@/types/quotes";

import { Button } from "@/components/ui/button",
import { Download } from "lucide-react";
import type { QuoteRequest } from "@/types/quotes";
import { Download } from "lucide-react",

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
import {Button} from "@/components/ui/button";
import {Download} from "lucide-react";
import type { QuoteRequest } from "@/types/quotes";
import { Button } from "@/components/ui/button",
import { Download } from "lucide-react";
import type { QuoteRequest } from "@/types/quotes";
import { Download } from "lucide-react",
import type { QuoteRequest } from "@/types/quotes",
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface ExportToCSVProps {

  quotes: QuoteRequest[]
  filename?: string
}
export const ExportToCSV = ({ quotes, filename = "quote-requests" }: ExportToCSVProps) => {
  const handleExport = () => {
    // Define CSV Headers
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  filename?: string;
}"
export const ExportToCSV = ({ quotes, filename = "quote-requests" }: ExportToCSVProps) => {}
  const handleExport = () => {};
    // Define CSV Headers;
<<<<<<< HEAD
import { Button } from '@/components / ui / button';'
import { Download } from './lucide-react';"
=======
<<<<<<< HEAD
import { Button } from '@/components / ui / button';'
import { Download } from './lucide-react';"
=======
    const headers = [;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      'IDTalent NameRequester NameRequester EmailProject NameProject SummaryBudgetTimeline';
      'StatusCreated Date';
    ];
import { Button } from '@/components / ui / button';
import { Download } from './lucide-react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
    const headers = [;
      'IDTalent NameRequester NameRequester EmailProject NameProject SummaryBudgetTimeline';
    const headers = [
      'IDTalent NameRequester NameRequester EmailProject NameProject SummaryBudgetTimeline',
      'StatusCreated Date'
    ];
    // Format quote data for CSV
    const rows = quotes.map(quote => [
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      quote.id;

      quote.talent_name |'Unknown';
      quote.requester_name;
      quote.requester_email;
      quote.project_name;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
      quote.project_summary;
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    // Format quote data for CSV;
    const rows = quotes && quotes.map(quote => [;
      quote && quote.id;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      quote && quote.talent_name || 'Unknown';
      quote && quote.requester_name;
      quote && quote.requester_email;
      quote && quote.project_name;
      quote && quote.project_summary;
      quote && quote.budget_display || ;
        (quote && quote.budget_min && quote && quote.budget_max ;
          ? `$${quote && quote.budget_min} - $${quote && quote.budget_max}` ;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
          : quote && quote.budget_min ;
            ? `$${quote && quote.budget_min}` ;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            : 'Not specified');
      quote && quote.timeline;
      quote && quote.status;
      new Date(quote && quote.created_at).toLocaleDateString();
    ]);
<<<<<<< HEAD

=======
<<<<<<< HEAD
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
=======

<<<<<<< HEAD
=======

    const headers = [
      'IDTalent NameRequester NameRequester EmailProject NameProject SummaryBudgetTimeline',

      'StatusCreated Date'

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    ],
    
    // Format quote data for CSV
    const rows = quotes.map(quote => [
      quote.id,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      quote.talent_name || 'Unknown',
      quote.requester_name,
      quote.requester_email,
      quote.project_name,
      quote.project_summary,
      quote.budget_display || 

            : 'Not specified'),
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      quote.timeline,
      quote.status,
      new Date(quote.created_at).toLocaleDateString()
    ]),
<<<<<<< HEAD
=======
<<<<<<< HEAD
    
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
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      headers.join(),
      ...rows.map(row => 
        row.map(cell => 
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          // Escape commas and quotes in cell values
          typeof cell === 'string' && (cell.includes() |cell.includes('"'))

            ? `"${cell.replace(/"/g, '""')}"`
            : cell;
        ).join()
      )

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    ].join('\n');
    // Create download link
    const blob = new Blob([csvContent], { type: 'text/csv,charset=utf-8,' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    ].join('\n'),
    
    // Create download link'
    const blob = new Blob([csvContent], { type: 'text/csv,charset=utf-8,' }),
    const url = URL.createObjectURL(blob),'
    const link = document.createElement('a'),'
    link.setAttribute('href', url),'`

    link.setAttribute('download', `${filename}-${new Date().toISOString().split('T')[0]}.csv`),
    document.body.appendChild(link),
<<<<<<< HEAD

    setTimeout(() => {
      document.body.removeChild(link);
      URL.revokeObjectURL(url)
    }, 100)

    // Download file and clean up

    link.click(),
    setTimeout(() => {}
      document.body.removeChild(link),
      URL.revokeObjectURL(url)
=======
<<<<<<< HEAD
=======
    
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

    setTimeout(() => {
      document.body.removeChild(link);
      URL.revokeObjectURL(url)
    }, 100)

    // Download file and clean up

    link.click(),
    setTimeout(() => {}
      document.body.removeChild(link),
      URL.revokeObjectURL(url)
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
    }, 100)import { Button } from "@/components/ui/button";"
import type { QuoteRequest } from "@/types/quotes",;"
;
=======

<<<<<<< HEAD
import type { QuoteRequest } from "@/types/quotes",;
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
import type { QuoteRequest } from "@/types/quotes",;
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
  },
  
  return (
    <Button 
<<<<<<< HEAD
      variant = $2;
=======
      variant="outline" 
<<<<<<< HEAD
import { Button } from "@/components/ui/button",;
import { Download } from "lucide-react",;
import type { QuoteRequest } from "@/types/quotes",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
interface ExportToCSVProps {;
  quotes: QuoteRequest[],;
  filename?: string;
}
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
;
export const ExportToCSV = ({ quotes, filename = "quote-requests" }: ExportToCSVProps) => {;
  const handleExport = () => {;
    // Define CSV Headers;
    const headers = [;
      'IDTalent NameRequester NameRequester EmailProject NameProject SummaryBudgetTimeline',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      'StatusCreated Date';
    ],;
    // Format quote data for CSV;
    const rows = quotes.map(quote => [;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
      quote.id,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      quote.talent_name || 'Unknown',;
      quote.requester_name,;
      quote.requester_email,;
      quote.project_name,;
      quote.project_summary,;
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

      className="flex items-center gap-2"
      disabled={quotes.length === 0}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    >;

      <Download size={16} />;
      Export CSV;
    </Button>;
  );

<<<<<<< HEAD
=======
<<<<<<< HEAD
import { Download } from "lucide-react",;
import type { QuoteRequest } from "@/types/quotes",;
=======



};
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      quote.budget_display ||;
        (quote.budget_min && quote.budget_max;
          ? `$${quote.budget_min} - $${quote.budget_max}`;
          : quote.budget_min;
            ? `$${quote.budget_min}`;
<<<<<<< HEAD
      on_click={handle_export}
      className="flex items - center gap - 2";

import { Button } from "@/components/ui/button",;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Download } from "lucide-react",;
import type { QuoteRequest } from "@/types/quotes",;
;
interface ExportToCSVProps {;
  quotes:QuoteRequest[],;
  filename?:string;
<<<<<<< HEAD
=======
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
=======
            : 'Not specified');
      quote.timeline;
      quote.status;
      new Date (quote.created_at).toLocaleDateString ();
    ]);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
;
interface ExportToCSVProps {;
  quotes:QuoteRequest[],;
  filename?:string;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    </Button>;
  );
};

      className="flex items-center gap-2"

      disabled={quotes.length === 0}
    >;
      <Download size={16} />;
<<<<<<< HEAD
      Export CSV;
=======
      Export CSV;
=======
    </Button>);
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
