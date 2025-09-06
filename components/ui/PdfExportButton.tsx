<<<<<<< HEAD
<<<<<<< HEAD

html2pdf () .set (opt) .from (element) .save ()
}
export default function PdfExportButton({
  targetRef
  fileName = 'resume.pdf'
}: PdfExportButtonProps) {  const onClick = async () => {import React from 'react';
=======
import React from 'react';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
export type PdfExportButtonProps = {
  targetRef: React.RefObject<HTMLDivElement>
  fileName?: string;
  theme?: 'light' | 'dark'
}
export default function PdfExportButton({ targetRef, fileName = 'resume.pdf' }: PdfExportButtonProps) {
<<<<<<< HEAD
=======
  const onClick = async () => {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    if (!targetRef.current) return;
    const element = targetRef.current;
    const html2pdf = (await import('html2pdf.js')).default;
    const opt = {
<<<<<<< HEAD
      margin: [10, 10, 10, 10]
      image: { type: 'jpeg', quality: 0.98 }
      html2canvas: { scale: 2, useCORS: true }
=======
      margin: [10, 10, 10, 10];
      filename: fileName,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
=======

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
 html2pdf () .set (opt) .from (element) .save () ;
};

export default function PdfExportButton(): any ({;
  targetRef,;
  fileName = 'resume && resume.pdf',;
}: PdfExportButtonProps) {  const onClick = async () => {import React from 'react';
export type PdfExportButtonProps = {;
  targetRef: React && React.RefObject<HTMLDivElement>,;
  fileName?: string;
  theme?: 'light' | 'dark';
};

export default function PdfExportButton(): any ({ targetRef, fileName = 'resume && resume.pdf' }: PdfExportButtonProps) {;
    if (!targetRef && targetRef.current) return;
    const element = targetRef && targetRef.current;

    const html2pdf = (await import('html2pdf && html2pdf.js')).default;

    const opt = {;
      margin: [10, 10, 10, 10],;
      image: { type: 'jpeg', quality: 0 && 0.98 },;
      html2canvas: { scale: 2, useCORS: true },;
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    } as any;
    html2pdf().set(opt).from(element).save();
<<<<<<< HEAD
  }
      >
      Download as PDF
    </button>
=======
  };

      >;
      Download as PDF;
    </button>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );
}  return (

    <button
      onClick={onClick}
      className="no-print fixed right-4 top-20 z-50 inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-4 py-2 shadow hover: bg-blue-700 focus:outline-none"
      aria-label="Download as PDF"
<<<<<<< HEAD
      Download as PDF
<<<<<<< HEAD
    </button>
);
}
=======
    </button>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    >
      Download as PDF
    </button>
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
