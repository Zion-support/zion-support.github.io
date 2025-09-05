import React from 'react';

export type PdfExportButtonProps = {_targetRef: React.RefObject<HTMLDivElement>;
  fileName?: string;
  theme?: 'light' | 'dark';};

export default function PdfExportButton(_{_targetRef, _fileName = 'resume.pdf'}: PdfExportButtonProps) {_const _onClick = async () => {
    if (!targetRef.current) return;
    const _element = targetRef.current;

    const _html2pdf = (await import('html2pdf.js')).default;

    const _opt = {
      margin: [10, _10, _10, _10], _filename: fileName, _image: { type: 'jpeg', _quality: 0.98},
      html2canvas: {_scale: 2, _useCORS: true},
      jsPDF: {_unit: 'mm', _format: 'a4', _orientation: 'portrait'}
    } as any;

    html2pdf().set(opt).from(element).save();
  };

  return (
    <button
      onClick={_onClick}
      className="no-print fixed right-4 top-20 z-50 inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-4 py-2 shadow hover:bg-blue-700 focus:outline-none"
      aria-label="Download as PDF"
    >
      Download as PDF
    </button>
  );
}