
<<<<<<< HEAD
import { Button } from '@/components/ui/button',
import { ArrowLeft, FileText, Link } from 'lucide-react'
import { PdfExportButton } from '../PdfExportButton',
import { Resume } from '@/types/resume',
import { useState } from 'react',
import { useIsMobile } from '@/hooks/use-mobile',
interface PreviewHeaderProps {
  resume: Resume,
  onBack: () => void
}

export function PreviewHeader({ resume, onBack }: PreviewHeaderProps) {
  const [isPrinting, setIsPrinting] = useState(false),
  const isMobile = useIsMobile(),

  const handleBrowserPrint = () => {
    setIsPrinting(true),
    
    // Inject print-specific CSS only for the duration of printing
    const style = document.createElement('style'),
    style.innerHTML = `
      @media print {
        body * {
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
        }
=======

interface PreviewHeaderProps {_resume: Resume;
  onBack: () => void;}

export function PreviewHeader(_{_resume, _onBack}: PreviewHeaderProps) {_const [isPrinting, _setIsPrinting] = useState(false);
  const _isMobile = useIsMobile();

  const _handleBrowserPrint = () => {
    setIsPrinting(true);
    
    // Inject print-specific CSS only for the duration of printing
    const _style = document.createElement('style');
    style.innerHTML = `
      @media print {
        body * {
          visibility: hidden;}
        .print-section, .print-section * {_visibility: visible;}
        .print-section {_position: absolute;
          left: 0;
          top: 0;
          width: 100%;}
        .no-print {_display: none !important;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      }
    `,
    document.head.appendChild(style),
    
    // Trigger print dialog
    window.print(),
    
    // Remove the temporary style element after printing
<<<<<<< HEAD
    setTimeout(() => {
      document.head.removeChild(style),
      setIsPrinting(false)
    }, 1000)
  },
=======
    setTimeout__(() => {_document.head.removeChild(style);
      setIsPrinting(false);}, 1000);
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <div className={_`flex ${isMobile ? 'flex-col' : 'justify-between'} items-${_isMobile ? 'stretch' : 'center'} gap-3`}>
      <Button 
<<<<<<< HEAD
        variant=&quot;outline&quot; 
        onClick={onBack} 
        className=&quot;gap-2 no-print&quot;
=======
        variant="outline" 
        onClick={_onBack} 
        className="gap-2 no-print"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      >
        <ArrowLeft className=&quot;h-4 w-4&quot; />
        Back
      </Button>
      
      <div className={_`flex ${isMobile ? 'flex-col' : 'flex-row'} space-${_isMobile ? 'y-2' : 'x-2'} no-print`}>
        <PdfExportButton resume={_resume} />
        
        <Button 
<<<<<<< HEAD
          variant=&quot;outline&quot; 
          onClick={handleBrowserPrint} 
          disabled={isPrinting}
          className=&quot;gap-2&quot;
=======
          variant="outline" 
          onClick={_handleBrowserPrint} 
          disabled={_isPrinting}
          className="gap-2"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          <FileText className=&quot;h-4 w-4&quot; />
          Print
        </Button>
        
        <Button variant=&quot;outline&quot; className=&quot;gap-2&quot;>
          <Link className=&quot;h-4 w-4&quot; />
          Add to Profile
        </Button>
      </div>
    </div>
  )
}
