  quotes: QuoteRequest[];
  filename?: string
}

export const ExportToCSV = null;
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
    // Download file and clean up
    link.click()
    setTimeout(() => {
      document.body.removeChild(link);
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
