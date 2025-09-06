html2pdf () .set (opt) .from (element) .save () 
};

export default function PdfExportButton({
  targetRef,
  fileName = 'resume.pdf',
}: PdfExportButtonProps) {
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
    >
      Download as PDF
    </button>
  );
}
