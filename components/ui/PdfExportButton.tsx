<<<<<<< HEAD

html2pdf () .set (opt) .from (element) .save ()
}
export default function PdfExportButton({
  targetRef
  fileName = 'resume.pdf'
}: PdfExportButtonProps) {  const onClick = async () => {import React from 'react';
export type PdfExportButtonProps = {
  targetRef: React.RefObject<HTMLDivElement>
  fileName?: string;
  theme?: 'light' | 'dark'
}
export default function PdfExportButton({ targetRef, fileName = 'resume.pdf' }: PdfExportButtonProps) {
    if (!targetRef.current) return;
    const element = targetRef.current;
    const html2pdf = (await import('html2pdf.js')).default;
    const opt = {
      margin: [10, 10, 10, 10]
      image: { type: 'jpeg', quality: 0.98 }
      html2canvas: { scale: 2, useCORS: true }
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    } as any;
    html2pdf().set(opt).from(element).save();
  }
=======
html2pdf () .set (opt) .from (element) .save () 
};

export default function PdfExportButton({
  targetRef,
  fileName = 'resume.pdf',
}: PdfExportButtonProps) {  const onClick = async () => {

  const onClick = async () => {

    if (!targetRef.current) return;
    const element = targetRef.current;

    const html2pdf = (await import('html2pdf.js')).default;

    const opt = {
      margin: [10, 10, 10, 10],

      filename: fileName,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    } as any;

    html2pdf().set(opt).from(element).save();
  };

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      >
      Download as PDF
    </button>
  );
}  return (

    <button
      onClick={onClick}
      className="no-print fixed right-4 top-20 z-50 inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-4 py-2 shadow hover: bg-blue-700 focus:outline-none"
      aria-label="Download as PDF"
      Download as PDF
    </button>
<<<<<<< HEAD
);
}
=======
  );
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
