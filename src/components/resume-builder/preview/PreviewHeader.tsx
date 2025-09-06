
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, Link } from 'lucide-react'
import { PdfExportButton } from '../PdfExportButton';
import { Resume } from '@/types/resume';
import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
interface PreviewHeaderProps {
  resume: Resume,
  onBack: () => void
}

export function PreviewHeader({ resume, onBack }: PreviewHeaderProps) {
  const [isPrinting, setIsPrinting] = useState($2);
  const isMobile = useIsMobile($2);
  const handleBrowserPrint = () => {
    setIsPrinting($2);
    // Inject print-specific CSS only for the duration of printing
    const style = document.createElement($2);
    style.innerHTML = `
      @media print {
        body * {
          visibility: hidden}
        .print-section, .print-section * {
          visibility: visible}
        .print-section {
          position: absolute,
          left: 0,
          top: 0,
          width: 100%
        }
        .no-print {
          display: none !important
        }
      }
    `,
    document.head.appendChild($2);
    // Trigger print dialog
    window.print($2);
    // Remove the temporary style element after printing
    setTimeout(() => {
      document.head.removeChild($2);
      setIsPrinting(false)
    }, 1000)
  },

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
  )
}
