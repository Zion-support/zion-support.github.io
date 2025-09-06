<<<<<<< HEAD
<<<<<<< HEAD
 html2pdf () .set (opt) .from (element) .save () 
};

export default function PdfExportButton({
  targetRef,
  fileName = 'resume.pdf',
}: PdfExportButtonProps) {
=======
import React from 'react';
export type PdfExportButtonProps = {
  targetRef: React.RefObject<HTMLDivElement>,
  fileName?: string;
  theme?: 'light' | 'dark'
};

export default function PdfExportButton({ targetRef, fileName = 'resume.pdf' }: PdfExportButtonProps) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
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
    if (!targetRef.current) return;
    const element = targetRef.current;

    const html2pdf = (await import('html2pdf.js')).default;

    const opt = {
<<<<<<< HEAD
<<<<<<< HEAD
      margin: [10, 10, 10, 10],
=======
      margin: [10, 10, 10, 10];
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      filename: fileName,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    } as any;

    html2pdf().set(opt).from(element).save()
  };

<<<<<<< HEAD
  
=======
      margin: [10, 10, 10, 10];
      filename: fileName,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    } as any;

    html2pdf().set(opt).from(element).save()
  };

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  return (
    <button
      onClick={onClick}
      className="no-print fixed right-4 top-20 z-50 inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-4 py-2 shadow hover: bg-blue-700 focus:outline-none"
      aria-label="Download as PDF"
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    >
      Download as PDF
    </button>
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
