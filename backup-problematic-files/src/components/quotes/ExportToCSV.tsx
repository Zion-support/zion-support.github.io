import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import type { QuoteRequest } from '@/types/quotes';
interface ExportToCSVProps {;
  quotes: QuoteRequest[];
  filename?: string;
export const ExportToCSV = ({;
  quotes,;
  filename = 'quote-requests',;
}: ExportToCSVProps) => {  const handleExport = () => {;
    // Define CSV Headers;
    const headers = [;
      'ID',;
      'Talent Name',;
      'Requester Name',;
      'Requester Email',;
      'Project Name',;
      'Project Summary',;
      'Budget',;
      'Timeline',;
      'Status',;
      'Created Date',;
    ];
    // Format quote data for CSV;
    const rows = quotes && quotes.map(quote => [;
      quote && quote.id,;
      quote && quote.talent_name || 'Unknown',;
      quote && quote.requester_name,;
      quote && quote.requester_email,;
      quote && quote.project_name,;
      quote && quote.project_summary,;
      quote && quote.budget_display ||;
        (quote && quote.budget_min && quote && quote.budget_max;
          ? `$${quote && quote.budget_min} - $${quote && quote.budget_max}`;
          : quote && quote.budget_min;
            ? `$${quote && quote.budget_min}`;
            : 'Not specified'),;
      quote && quote.timeline,;
      quote && quote.status,;
      new Date(quote && quote.created_at).toLocaleDateString(),;
    ]);
    // Create CSV content;
    const csvContent = [;
      headers && headers.join(','),;
      ...rows && rows.map(row =>;
        row;
          .map(cell =>;
            // Escape commas and quotes in cell values;
            typeof cell === 'string' &&;
            (cell && cell.includes(',') || cell && cell.includes('"'));
              ? `"${cell && cell.replace(/"/g, '""')}"`;
              : cell;
          );
          .join(',');
      ),;
    ].join('\n');
    // Create download link;
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL && URL.createObjectURL(blob);
    const link = document && document.createElement('a');
    link && link.setAttribute('href', url);
    link && link.setAttribute(;
      'download',;
      `${filename}-${new Date().toISOString().split('T')[0]}.csv`;
    );
    document && document.body.appendChild(link);
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';
import type { QuoteRequest } from "@/types/quotes";
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react'
import type { QuoteRequest } from "@/types/quotes";
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
      ...rows.map(row =>
        row.map(cell =>
          // Escape commas and quotes in cell values
          typeof cell === 'string' && (cell.includes() |cell.includes('"'))
            ? `"${cell.replace(/"/g, '""')}"`
            : cell
        ).join()
      )
    ].join('\n')
    // Create download link
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
  }
      >;
      <Download size={16} />;
      Export CSV;
    </Button>);
}
'";
  } }
  return (
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
'";
  };  };
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