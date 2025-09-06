 html2pdf () .set (opt) .from (element) .save () 
};

export default function PdfExportButton({
  targetRef,
  fileName = 'resume.pdf',
}: PdfExportButtonProps) {  const onClick = async () => {
=======
import React from 'react';
export type PdfExportButtonProps = {
  targetRef: React.RefObject<HTMLDivElement>,
  fileName?: string;
  theme?: 'light' | 'dark'
};

export default function PdfExportButton({ targetRef, fileName = 'resume.pdf' }: PdfExportButtonProps) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const onClick = async () => {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    if (!targetRef.current) return;
    const element = targetRef.current;

    const html2pdf = (await import('html2pdf.js')).default;

    const opt = {
      margin: [10, 10, 10, 10],
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      filename: fileName,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    } as any;

    html2pdf().set(opt).from(element).save();
  };

      >
      Download as PDF
    </button>
  );
}
  return (
    <button
      onClick={onClick}
      className="no-print fixed right-4 top-20 z-50 inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-4 py-2 shadow hover: bg-blue-700 focus:outline-none"
      aria-label="Download as PDF"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    >
      Download as PDF
    </button>
  );
<<<<<<< HEAD
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
