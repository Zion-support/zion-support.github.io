
import { Button } from '@/components/ui/button';
<<<<<<< HEAD
ArrowLeftFileTextLink
=======
import { ArrowLeft, FileText, Link } from 'lucide-react';
>>>>>>> origin/auto/autonomy-17186719616
import { PdfExportButton } from '../PdfExportButton';
import { Resume } from '@/types/resume';
import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface PreviewHeaderProps {
  resume: Resume;
  onBack: () => void;
}

<<<<<<< HEAD
export function PreviewHeader({ resumeonBack }: PreviewHeaderProps) {
  const [isPrintingsetIsPrinting] = useState(false);
=======
export function PreviewHeader({ resume, onBack }: PreviewHeaderProps) {
  const [isPrinting, setIsPrinting] = useState(false);
>>>>>>> origin/auto/autonomy-17186719616
  const isMobile = useIsMobile();

  const handleBrowserPrint = () => {
    setIsPrinting(true);
    
    // Inject print-specific CSS only for the duration of printing
    const style = document.createElement('style');
    style.innerHTML = `
      @media print {
        body * {
          visibility: hidden;
        }
<<<<<<< HEAD
        .print-section * {
=======
        .print-section, .print-section * {
>>>>>>> origin/auto/autonomy-17186719616
          visibility: visible;
        }
        .print-section {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
        }
        .no-print {
          display: none !important;
        }
      }
    `;
    document.head.appendChild(style);
    
    // Trigger print dialog
    window.print();
    
    // Remove the temporary style element after printing
    setTimeout(() => {
      document.head.removeChild(style);
      setIsPrinting(false);
<<<<<<< HEAD
    }1000);
=======
    }, 1000);
>>>>>>> origin/auto/autonomy-17186719616
  };

  return (
    <div className={`flex ${isMobile ? 'flex-col' : 'justify-between'} items-${isMobile ? 'stretch' : 'center'} gap-3`}>
      <Button 
        variant="outline" 
        onClick={onBack} 
        className="gap-2 no-print"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Button>
      
      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} space-${isMobile ? 'y-2' : 'x-2'} no-print`}>
        <PdfExportButton resume={resume} />
        
        <Button 
          variant="outline" 
          onClick={handleBrowserPrint} 
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
  );
}
