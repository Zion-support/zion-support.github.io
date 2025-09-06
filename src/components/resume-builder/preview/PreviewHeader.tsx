<<<<<<< HEAD
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, Link } from 'lucide-react';import { PdfExportButton } from '../PdfExportButton';
import { Resume } from '@/types/resume';
import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

=======
<<<<<<< HEAD
<<<<<<< HEAD
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, Link } from 'lucide-react';
=======

import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, Link } from 'lucide-react'
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======

import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, Link } from 'lucide-react'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import { PdfExportButton } from '../PdfExportButton';
import { Resume } from '@/types/resume';
import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
interface PreviewHeaderProps {
  resume: Resume;
  onBack: () => void;

export function PreviewHeader({ resume, onBack }: PreviewHeaderProps) {
  const [isPrinting, setIsPrinting] = useState(false);
  const isMobile = useIsMobile();

  const handleBrowserPrint = () => {
    setIsPrinting(true);
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
interface PreviewHeaderProps {
  resume: Resume,
  onBack: () => void
}

export function PreviewHeader({ resume, onBack }: PreviewHeaderProps) {

  const [ isPrinting, setIsPrinting ] = useState(false),
  const isMobile = useIsMobile(),


  const handleBrowserPrint = () => {
    setIsPrinting(true);
    
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    // Inject print-specific CSS only for the duration of printing
    const style = document.createElement('style');
    style.innerHTML = `
      @media print {
        body * {
<<<<<<< HEAD
          visibility: hidden;
=======
<<<<<<< HEAD
<<<<<<< HEAD
          visibility: hidden;
=======
          visibility: hidden
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        }
        .print-section, .print-section * {
          visibility: visible;
        }
        .print-section {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
        }
        .no-print {
<<<<<<< HEAD
          display: none !important;        }
      }
    `;
    document.head.appendChild(style);

=======
<<<<<<< HEAD
          display: none !important;
=======
          visibility: hidden
        }
        .print-section, .print-section * {
          visibility: visible
        }
        .print-section {
          position: absolute,
          left: 0,
          top: 0,
          width: 100%
        }
        .no-print {
          display: none !important
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          display: none !important
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        }
      }
    `;
    document.head.appendChild(style);
<<<<<<< HEAD
<<<<<<< HEAD

=======
    
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    // Trigger print dialog
    window.print();

    // Remove the temporary style element after printing
    setTimeout(() => {
      document.head.removeChild(style);
      setIsPrinting(false);
    }, 1000);
  };

  
    >
      <Button variant='outline' onClick={onBack} className='gap-2 no-print'>
        <ArrowLeft className='h-4 w-4' />
        Back
      </Button>

      <div
        className={`flex ${isMobile ? 'flex-col' : 'flex-row'} space-${isMobile ? 'y-2' : 'x-2'} no-print`}
      >
        <PdfExportButton resume={resume} />

        <Button
          variant='outline'
          onClick={handleBrowserPrint}
          disabled={isPrinting}
          className='gap-2'
        >
          <FileText className='h-4 w-4' />
          Print
        </Button>
<<<<<<< HEAD

        <Button variant='outline' className='gap-2'>
          <Link className='h-4 w-4' />          Add to Profile
=======
<<<<<<< HEAD

        <Button variant='outline' className='gap-2'>
          <Link className='h-4 w-4' />
=======
    
    // Trigger print dialog
    window.print();
    
    // Remove the temporary style element after printing
    setTimeout(() => {
      document.head.removeChild(style);
      setIsPrinting(false)
    }, 1000)
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        
        <Button variant="outline" className="gap-2">
          <Link className="h-4 w-4" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          Add to Profile
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        </Button>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
