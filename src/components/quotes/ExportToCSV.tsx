<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';
import type { QuoteRequest } from "@/types/quotes";


import { Button } from "@/components/ui/button";
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
import { Button } from '@/components/ui/button'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
import { Download } from 'lucide-react'
import type { QuoteRequest } from "@/types/quotes";

<<<<<<< HEAD
=======
  quotes: QuoteRequest[]
  filename?: string
export const ExportToCSV = ({
  quotes
  filename = 'quote-requests'
}: ExportToCSVProps) => {  const handleExport = () => {
    // Define CSV Headers
    const headers = [
      'ID'
      'Talent Name'
      'Requester Name'
      'Requester Email'
      'Project Name'
      'Project Summary'
      'Budget'
      'Timeline'
      'Status'
      'Created Date'
    ]
<<<<<<< HEAD
    // Format quote data for CSV
    const rows = quotes.map(quote => [
      quote.id
      quote.talent_name |'Unknown'
      quote.requester_name
      quote.requester_email
      quote.project_name
      quote.project_summary
      quote.budget_display |
        (quote.budget_min && quote.budget_max
          ? `$${quote.budget_min} - $${quote.budget_max}`
          : quote.budget_min
            ? `$${quote.budget_min}`
            : 'Not specified')
      quote.timeline
      quote.status
      new Date(quote.created_at).toLocaleDateString()
=======
=======

import { Button } from "@/components/ui/button",
import { Download } from 'lucide-react'
import type { QuoteRequest } from "@/types/quotes",
interface ExportToCSVProps {
  quotes: QuoteRequest[],
  filename?: string
}

export const ExportToCSV = ({ quotes, filename = "quote-requests" }: ExportToCSVProps) => {
  const handleExport = () => {
    // Define CSV Headers
    const headers = [
      'IDTalent NameRequester NameRequester EmailProject NameProject SummaryBudgetTimeline',
      'StatusCreated Date'
    ],
    
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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
<<<<<<< HEAD
      new Date(quote.created_at).toLocaleDateString(),
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    ])
    // Create CSV content
    const csvContent = [
      headers.join(',')
      ...rows.map(row =>
        row
          .map(cell =>
            // Escape commas and quotes in cell values
            typeof cell === 'string' &&
            (cell.includes(',') |cell.includes('"'))
              ? `"${cell.replace(/"/g, '""')}"`
              : cell
          )
<<<<<<< HEAD
          .join(',')
      )
    ].join('\n')
    // Create download link
=======
          .join(',');
      ),;
    ].join('\n');
    // Create download link;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.setAttribute('href', url)
    link.setAttribute(
      'download'
      `${filename}-${new Date().toISOString().split('T')[0]}.csv`
    )
    document.body.appendChild(link)
import { Button } from "@/components/ui/button"
import type { QuoteRequest } from "@/types/quotes"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
interface ExportToCSVProps {
  quotes: QuoteRequest[]
  filename?: string
}
export const ExportToCSV = ({ quotes, filename = "quote-requests" }: ExportToCSVProps) => {
  const handleExport = () => {
    // Define CSV Headers
    const headers = [
      'IDTalent NameRequester NameRequester EmailProject NameProject SummaryBudgetTimeline'
      'StatusCreated Date'
    ]
    // Format quote data for CSV
    const rows = quotes.map(quote => [
      quote.id
      quote.talent_name |'Unknown'
      quote.requester_name
      quote.requester_email
      quote.project_name
      quote.project_summary
      quote.budget_display |
        (quote.budget_min && quote.budget_max
          ? `$${quote.budget_min} - $${quote.budget_max}`
          : quote.budget_min
            ? `$${quote.budget_min}`
            : 'Not specified')
      quote.timeline
      quote.status
      new Date(quote.created_at).toLocaleDateString()
    ])
    // Create CSV content
    const csvContent = [
      headers.join()
<<<<<<< HEAD
      ...rows.map(row =>
        row.map(cell =>
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
      ...rows.map(row =>
        row.map(cell =>
=======
=======
      new Date(quote.created_at).toLocaleDateString()
    ]),
    
    // Create CSV content
    const csvContent = [
      headers.join(),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
      ...rows.map(row => 
        row.map(cell => 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
          // Escape commas and quotes in cell values
          typeof cell === 'string' && (cell.includes() |cell.includes('"'))
            ? `"${cell.replace(/"/g, '""')}"`
            : cell
        ).join()
      )

    const blob = new Blob([csvContent], { type: 'text/csv,charset=utf-8,' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    

    // Download file and clean up
    link.click()
    setTimeout(() => {

      document.body.removeChild(link);

      URL.revokeObjectURL(url)
    }, 100)
=======
import { Button } from '@/components / ui / button';
import { Download } from 'lucide-react';
import type { QuoteRequest } from '@/types / quotes';
interface ExportToCSVProps {
  quotes: QuoteRequest[];
  filename?: string;
export const ExportToCSV = ({
  quotes,
  filename = 'quote - requests',
}: ExportToCSVProps) =>: any {  const handle_export = () =>: any {
    // Define CSV Headers;
    const headers = [;
      'ID',
      'Talent Name',
      'Requester Name',
      'Requester Email',
      'Project Name',
      'Project Summary',
      'Budget',
      'Timeline',
      'Status',
      'Created Date',
    ];
    // Format quote data for CSV;
    const rows = quotes.map (quote => [;
      quote.id,
      quote.talent_name || 'Unknown',
      quote.requester_name,
      quote.requester_email,
      quote.project_name,
      quote.project_summary,
      quote.budget_display ||;
        (quote.budget_min && quote.budget_max;
          ? `$${quote.budget_min} - $${quote.budget_max}`;
          : quote.budget_min;
            ? `$${quote.budget_min}`;
            : 'Not specified'),
      quote.timeline,
      quote.status,
      new Date (quote.created_at).toLocaleDateString (),
    ]);
    // Create CSV content;
    const csv_content = [;
      headers.join (', '),
      ...rows.map (row =>;
        row;
          .map (cell =>;
            // Escape commas and quotes in cell values;
            typeof cell === 'string' &&;
            (cell.includes (', ') || cell.includes ('"'));
              ? `"${cell.replace (/"/g, '""')}"`;
              : cell);
          .join (', ')),
    ].join ('\n');
    // Create download link;
    const blob = new Blob ([csv_content], { type: 'text / csv;charset = utf - 8;' });
    const url = URL.createObjectURL (blob);
    const link = document.create_element ('a');
    link.set_attribute ('href', url);
    link.set_attribute (
      'download',
      `${filename}-${new Date ().toISOString ().split ('T')[0]}.csv`);
    document.body.append_child (link);
import { Button  } from '@/components / ui / button';
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
    // Format quote data for CSV;
    const rows = quotes.map (quote => [;
      quote.id;
      quote.talent_name || 'Unknown';
      quote.requester_name;
      quote.requester_email;
      quote.project_name;
      quote.project_summary;
      quote.budget_display ||;
        (quote.budget_min && quote.budget_max;
          ? `$${quote.budget_min} - $${quote.budget_max}`;
          : quote.budget_min;
            ? `$${quote.budget_min}`;
            : 'Not specified');
      quote.timeline;
      quote.status;
      new Date (quote.created_at).toLocaleDateString ();
    ]);
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
    // Create download link;
    const blob = new Blob ([csv_content], { type: 'text / csv, charset = utf - 8, ' });
    const url = URL.createObjectURL (blob);
    const link = document.create_element ('a');
    link.set_attribute ('href', url);
    link.set_attribute ('download', `${filename}-${new Date ().toISOString ().split ('T')[0]}.csv`);
    document.body.append_child (link);
    // Download file and clean up;
    link.click ();
    set_timeout (() => {
      document.body.remove_child (link);
      URL.revokeObjectURL (url);
    }, 100);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
      >;
      <Download size={16} />;
      Export CSV;
    </Button>);
}
'";
  } }
  return (
<<<<<<< HEAD
=======
    <Button
      variant="outline"
      onClick = {handleExport,}
      className="flex items-center gap-2"
      disabled={quotes.length === 0}
    >
      <Download size={16} />
      Export CSV
    </Button>
  )
}
<<<<<<< HEAD
'"}
  )
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

=======

import { Button } from "@/components/ui/button",
import { Download } from 'lucide-react'
import type { QuoteRequest } from "@/types/quotes",
interface ExportToCSVProps {
  quotes: QuoteRequest[],
  filename?: string
}

export const ExportToCSV = ({ quotes, filename = "quote-requests" }: ExportToCSVProps) => {
  const handleExport = () => {
    // Define CSV Headers
    const headers = [
      'IDTalent NameRequester NameRequester EmailProject NameProject SummaryBudgetTimeline',
      'StatusCreated Date'
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
          // Escape commas and quotes in cell values
          typeof cell === 'string' && (cell.includes() || cell.includes('"')) 
            ? `"${cell.replace(/"/g, '""')}"` 
            : cell
        ).join()
      )
=======
'"},;
;
  );
};
=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
      URL.revokeObjectURL(url)
    }, 100)
  },
  
  return (
    <Button 
      variant="outline" 
import { Button } from "@/components/ui/button",;
import { Download } from 'lucide-react';
import type { QuoteRequest } from "@/types/quotes",;

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
            : 'Not specified');
      quote && quote.timeline;
      quote && quote.status;
      new Date(quote && quote.created_at).toLocaleDateString();
    ]);

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

      >;
      <Download size={16} />;
      Export CSV;
    </Button>;
  );
};
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

  return (
    <Button
      variant="outline" 
      onClick = {handleExport,}
      className="flex items-center gap-2"
      disabled={quotes && quotes.length === 0}>;
      <Download size={16} />;
      Export CSV;
    </Button>;
  );
};
'"},;



=======
    <Button;
      variant="outline";
      on_click = {handle_export, }
      className="flex items - center gap - 2";
      disabled={quotes.length === 0}
    >;
      <Download size={16} />;
      Export CSV;
    </Button>);
}
'"},
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
