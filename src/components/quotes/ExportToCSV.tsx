<<<<<<< HEAD
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import type { QuoteRequest } from '@/types/quotes';
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import type { QuoteRequest } from '@/types/quotes';
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

interface ExportToCSVProps {
  quotes: QuoteRequest[];
  filename?: string;

export const ExportToCSV = ({
  quotes,
  filename = 'quote-requests',
}: ExportToCSVProps) => {
  const handleExport = () => {
    // Define CSV Headers
    const headers = [
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
<<<<<<< HEAD
=======
    
    // Format quote data for CSV
    const rows = quotes.map(quote => [
      quote.id;
      quote.talent_name || 'Unknown';
      quote.requester_name;
      quote.requester_email;
      quote.project_name;
      quote.project_summary;
      quote.budget_display || 
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
          // Escape commas and quotes in cell values
          typeof cell === 'string' && (cell.includes() || cell.includes('"')) 
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
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

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
      new Date(quote.created_at).toLocaleDateString(),
    ]);

    // Create CSV content
    const csvContent = [
      headers.join(','),
      ...rows.map(row =>
        row
          .map(cell =>
            // Escape commas and quotes in cell values
            typeof cell === 'string' &&
            (cell.includes(',') || cell.includes('"'))
              ? `"${cell.replace(/"/g, '""')}"`
              : cell
          )
          .join(',')
      ),
    ].join('\n');

    // Create download link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute(
      'download',
      `${filename}-${new Date().toISOString().split('T')[0]}.csv`
    );
    document.body.appendChild(link);
<<<<<<< HEAD
=======
    
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    // Download file and clean up
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
<<<<<<< HEAD
      URL.revokeObjectURL(url);
    }, 100);
  };

      >
      <Download size={16} />
      Export CSV
    </Button>
  );
};
'"
=======
<<<<<<< HEAD
<<<<<<< HEAD
      URL.revokeObjectURL(url);
    }, 100);
=======
      URL.revokeObjectURL(url)
    }, 100)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };
  
<<<<<<< HEAD
=======
      URL.revokeObjectURL(url)
    }, 100)
  };
  
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  return (
    <Button 
      variant="outline" 
      onClick={handleExport}
      className="flex items-center gap-2"
      disabled={quotes.length === 0}
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    >
      <Download size={16} />
      Export CSV
    </Button>
<<<<<<< HEAD
<<<<<<< HEAD
  );
};
'"
=======
  )

};

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
};
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
