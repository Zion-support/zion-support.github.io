import React from 'react';

export type PdfExportButtonProps = {
  targetRef: React.RefObject<HTMLDivElement>;
  fileName?: string;
  theme?: 'light' | 'dark';
};

  const onClick = async () => {
    if (!targetRef.current) return;
    const element = targetRef.current;

    const html2pdf = (await import('html2pdf.js')).default;

    const opt = {
    } as any;

    html2pdf().set(opt).from(element).save();
  };

  return (
    <button
      onClick={onClick}
      className="no-print fixed right-4 top-20 z-50 inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-4 py-2 shadow hover:bg-blue-700 focus:outline-none"
      aria-label="Download as PDF"
    >
      Download as PDF
    </button>
  );
}