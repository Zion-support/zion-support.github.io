<<<<<<< HEAD
import { PdfExportButton } from '../PdfExportButton';
import { Resume } from '@/types/resume';
import { useState } from 'react';
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
import { Button  } from '@/components/ui/button';
=======
<<<<<<< HEAD
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, Link } from 'lucide-react'; import { PdfExportButton } from '../PdfExportButton'
import { Resume } from '@/types/resume'
import { useState } from 'react'
import { useIsMobile } from '@/hooks/use-mobile'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
import { ArrowLeft, FileText, Link } from 'lucide-react'
import { PdfExportButton  } from '../PdfExportButton';
import { Resume  } from '@/types/resume';
import { useState  } from 'react';
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
import { useIsMobile } from '@/hooks/use-mobile';
interface PreviewHeaderProps {
  resume: Resume;
  onBack: () => void
export function PreviewHeader({ resume, onBack }: PreviewHeaderProps) {

<<<<<<< HEAD

          position: absolute;
          left: 0;
          top: 0;
          width: 100%;


        }
        .no-print {
          display: none !important }
      }
<<<<<<< HEAD
    `
    document.head.appendChild(style)
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
    `
    document.head.appendChild(style)
    window.print()
    // Remove the temporary style element after printing
    setTimeout(() => {
      document.head.removeChild(style)
      setIsPrinting(false)
    }, 1000)
  }
    >
      <Button variant='outline' onClick={onBack} className='gap-2 no-print'>
        <ArrowLeft className='h-4 w-4' />        Back
      </Button>
      <div
        className={`flex ${isMobile ? 'flex-col' : 'flex-row'} space-${isMobile ? 'y-2' : 'x-2'} no-print`}
      >
        <PdfExportButton resume={resume} />
        <Button
          variant='outline'
          onClick={handleBrowserPrint}
          disabled={isPrinting}
          className='gap-2'        >
          <FileText className='h-4 w-4' />
          Print
        </Button>
        <Button variant='outline' className='gap-2'>
          <Link className='h-4 w-4' />          Add to Profile        
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

      </Button>
      <div
        className={`flex ${isMobile ? 'flex-col' : 'flex-row'} space-${isMobile ? 'y-2' : 'x-2'} no-print`}
      >
        <PdfExportButton resume={resume} />
        <Button
          variant='outline'
          onClick={handleBrowserPrint}
          disabled={isPrinting}
          className='gap-2'        >
          <FileText className='h-4 w-4' />
          Print
        </Button>
        <Button variant='outline' className='gap-2'>
          <Link className='h-4 w-4' />          Add to Profile
import { Button } from '@/components/ui/button',;
import { ArrowLeft, FileText, Link } from 'lucide-react';
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
=======
  const [isPrinting, setIsPrinting] = useState(false)
  const isMobile = useIsMobile()
  const handleBrowserPrint = () => {
    setIsPrinting(true)
    // Inject print-specific CSS only for the duration of printing
    const style = document.createElement('style')
    style.innerHTML = `
      @media print {
        body * {
          visibility: hidden
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
          display: none !important }
      }
    `
    document.head.appendChild(style)
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
    `
    document.head.appendChild(style)
    window.print()
    // Remove the temporary style element after printing
    setTimeout(() => {
      document.head.removeChild(style)
      setIsPrinting(false)
    }, 1000)
  }
    >
      <Button variant='outline' onClick={onBack} className='gap-2 no-print'>
        <ArrowLeft className='h-4 w-4' />        Back

      </Button>
      <div
        className={`flex ${isMobile ? 'flex-col' : 'flex-row'} space-${isMobile ? 'y-2' : 'x-2'} no-print`}
      >
        <PdfExportButton resume={resume} />
        <Button
          variant='outline'
          onClick={handleBrowserPrint}
          disabled={isPrinting}
          className='gap-2'        >
          <FileText className='h-4 w-4' />
          Print
        </Button>
        <Button variant='outline' className='gap-2'>
          <Link className='h-4 w-4' />          Add to Profile
=======
import { Button } from '@/components/ui/button',;
import { ArrowLeft, FileText, Link } from 'lucide-react';
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
        }
        .print-section, .print-section * {;
          visibility: visible;
        }
        .print-section {;
          position: absolute,;
          left: 0,;
          top: 0,;
          width: 100%;
        }
        .no-print {;
          display: none !important;
        }
      }
    `,
    document.head.appendChild(style),
    
    // Trigger print dialog
    window.print(),
    
    // Remove the temporary style element after printing
    setTimeout(() => {
      document.head.removeChild(style),
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          className="gap-2"
        >
          <FileText className="h-4 w-4" />
          Print
        </Button>
        
=======
<<<<<<< HEAD


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        <Button variant="outline" className="gap-2">
          <Link className="h-4 w-4" />
          Add to Profile
        </Button>
      </div>
<<<<<<< HEAD
    </div>;
  );
}
  );
}
        .print - section {
          position: absolute,
          left: 0,
          top: 0,
          width: 100%;
        }
        .no - print {
          display: none !important;
        }
      }
    `;
    document.head.append_child (style);
    window.print ();
    // Remove the temporary style element after printing;
    set_timeout (() => {
      document.head.remove_child (style);
      setIsPrinting (false);
    }, 1000);
  }
    >;
      <Button variant='outline' on_click={on_back} className='gap - 2 no - print'>;
        <ArrowLeft className='h - 4 w - 4' />        Back;
      </Button>;
      <div;
        className={`flex ${is_mobile ? 'flex - col' : 'flex - row'} space-${is_mobile ? 'y - 2' : 'x - 2'} no - print`}
      >;
        <PdfExportButton resume={resume} />;
        <Button;
          variant='outline';
          on_click={handleBrowserPrint}
          disabled={is_printing}
          className='gap - 2'        >;
          <FileText className='h - 4 w - 4' />;
          Print;
        </Button>;
        <Button variant='outline' className='gap - 2'>;
          <Link className='h - 4 w - 4' />          Add to Profile;
        <Button variant="outline" className="gap - 2">;
          <Link className="h - 4 w - 4" />;
          Add to Profile;
        </Button>;
      </div>;
    </div>);
}

    </div>
  )
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
