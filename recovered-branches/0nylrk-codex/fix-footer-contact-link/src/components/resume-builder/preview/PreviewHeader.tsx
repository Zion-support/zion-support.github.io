
<<<<<<< HEAD
<<<<<<< HEAD
import { Button  } from '@/components/ui/button';
import { ArrowLeft, FileText, Link  } from 'lucide-react';
import { PdfExportButton  } from '../PdfExportButton';
import { Resume  } from '@/types/resume';
import { useState  } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
=======
import {Button} from '@/components/ui/button';
import {ArrowLeft, FileText, Link} from 'lucide-react';
import {PdfExportButton} from '../PdfExportButton';
import {Resume} from '@/types/resume';
import {useState} from 'react';
import {useIsMobile} from '@/hooks/use-mobile';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface PreviewHeaderProps {
  resume: Resume;
<<<<<<< HEAD
  onBack: () => void
}
<<<<<<< HEAD
=======
  onBack: () => void;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function PreviewHeader({ resume, onBack }: PreviewHeaderProps) {
  const [isPrinting, setIsPrinting] = useState(false);
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
<<<<<<< HEAD
export function PreviewHeader({ resume, onBack }: PreviewHeaderProps) {
=======

export function PreviewHeader({ resume, onBack }: PreviewHeaderProps) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const [isPrinting, setIsPrinting] = useState(false);

  const isMobile = useIsMobile();
  const handleBrowserPrint = () => {
    setIsPrinting(true);
    // Inject print-specific CSS only for the duration of printing
    const style = document.createElement("style");
    style.innerHTML = `
      @media print {
        body * {
          visibility: hidden
=======
import { Button } from '@/components/ui/button',;
import { ArrowLeft, FileText, Link } from 'lucide-react',;
import { PdfExportButton } from '../PdfExportButton',;
import { Resume } from '@/types/resume',;
import { useState } from 'react',;
import { useIsMobile } from '@/hooks/use-mobile',;
interface PreviewHeaderProps {;
  resume: Resume,;
  onBack: () => void;
}
;
export function PreviewHeader({ resume, onBack }: PreviewHeaderProps) {;
  const [isPrinting, setIsPrinting] = useState(false),;
  const isMobile = useIsMobile(),;
  const handleBrowserPrint = () => {;
    setIsPrinting(true),;
    // Inject print-specific CSS only for the duration of printing;
    const style = document.createElement('style'),;
    style.innerHTML = `;
      @media print {;
        body * {;
          visibility: hidden;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        }
        .print-section, .print-section * {
          visibility: visible
        }
        .print-section {
          position: absolute
          left: 0
          top: 0
          width: 100%
        }
        .no-print {
          display: none !important
        }
      }
<<<<<<< HEAD
    `;
    document.head.appendChild(style);
<<<<<<< HEAD
    // Trigger print dialog
    window.print();
    // Remove the temporary style element after printing
    setTimeout(() => {
      document.head.removeChild(style);
      setIsPrinting(false);
    }, 1000);
  }
=======
    `,
    document.head.appendChild(style),
=======
=======
    `,
    document.head.appendChild(style),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    
    // Trigger print dialog
    window.print(),
    
    // Remove the temporary style element after printing
    setTimeout(() => {
      document.head.removeChild(style),
      setIsPrinting(false)
    }, 1000)
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

  return (
    <div
      className={`flex ${isMobile ? "flex-col" : "justify-between"} items-${isMobile ? "stretch" : "center"} gap-3`}
    >
      <Button variant="outline" onClick={onBack} className="gap-2 no-print">
        <ArrowLeft className="h-4 w-4" />
        Back
      </Button>
<<<<<<< HEAD
      <div
        className={`flex ${isMobile ? "flex-col" : "flex-row"} space-${isMobile ? "y-2" : "x-2"} no-print`}
      >
        <PdfExportButton resume={resume} />
        <Button
          variant="outline"
          onClick={handleBrowserPrint}
=======
      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} space-${isMobile ? 'y-2' : 'x-2'} no-print`}>
        <PdfExportButton resume={resume} />
        <Button 
          variant="outline" 
          onClick={handleBrowserPrint} 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          disabled={isPrinting}
          className="gap-2"
        >
          <FileText className="h-4 w-4" />
          Print
        </Button>
        <Button variant="outline" className="gap-2">
          <Link className="h-4 w-4" />
          Add to Profile
        </Button>
      </div>
    </div>
<<<<<<< HEAD
  );
}
=======
  )
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
