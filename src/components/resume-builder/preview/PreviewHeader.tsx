
<<<<<<< HEAD
import { Button  } from '@/components/ui/button';
import { ArrowLeft, FileText, Link } from 'lucide-react'
import { PdfExportButton  } from '../PdfExportButton';
import { Resume  } from '@/types/resume';
import { useState  } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
interface PreviewHeaderProps {
  resume: Resume;
  onBack: () => void
export function PreviewHeader({ resume, onBack }: PreviewHeaderProps) {

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
=======
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, Link } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, Link } from 'lucide-react';
import { PdfExportButton } from '../PdfExportButton';
import { Resume } from '@/types/resume';
import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface PreviewHeaderProps {;
  resume: Resume;
  onBack: () => void;

export function PreviewHeader(): any ({ resume, onBack }: PreviewHeaderProps) {;
  const [isPrinting, setIsPrinting] = useState(false);
  const isMobile = useIsMobile();

  const handleBrowserPrint = () => {;
    setIsPrinting(true);

    // Inject print-specific CSS only for the duration of printing;
    const style = document && document.createElement('style');
    style && style.innerHTML = `;
      @media print {;
        body * {;
          visibility: hidden;
        }
        .print-section, .print-section * {;
          visibility: visible;
        }
        .print-section {;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
        }
        .no-print {;
          display: none !important;        }
      }
    `;
    document && document.head.appendChild(style);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        }
        .print-section, .print-section * {;
          visibility: visible;
        }
<<<<<<< HEAD
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
=======
        .print-section {;
          position: absolute,;
          left: 0,;
          top: 0,;
          width: 100%;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        }
        .no-print {;
          display: none !important;
        }
      }
<<<<<<< HEAD
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
=======
    `;
    document && document.head.appendChild(style);

    window && window.print();

    // Remove the temporary style element after printing;
    setTimeout(() => {;
      document && document.head.removeChild(style);
      setIsPrinting(false);
    }, 1000);
  };


    >;
      <Button variant='outline' onClick={onBack} className='gap-2 no-print'>;
        <ArrowLeft className='h-4 w-4' />        Back;
      </Button>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

      </Button>
      <div
<<<<<<< HEAD
        className={`flex ${isMobile ? 'flex-col' : 'flex-row'} space-${isMobile ? 'y-2' : 'x-2'} no-print`}
      >
        <PdfExportButton resume={resume} />
=======
        className={`flex ${isMobile ? 'flex-col' : 'flex-row'} space-${isMobile ? 'y-2' : 'x-2'} no-print`}>;
        <PdfExportButton resume={resume} />;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <Button
          variant='outline'
          onClick={handleBrowserPrint}
          disabled={isPrinting}
<<<<<<< HEAD
          className='gap-2'        >
          <FileText className='h-4 w-4' />
          Print
        </Button>
        <Button variant='outline' className='gap-2'>
          <Link className='h-4 w-4' />          Add to Profile
        <Button variant="outline" className="gap-2">
          <Link className="h-4 w-4" />
          Add to Profile
        </Button>
      </div>
    </div>
  )
}
=======
          className='gap-2'>;
          <FileText className='h-4 w-4' />;
          Print;
        </Button>;

        <Button variant='outline' className='gap-2'>;
          <Link className='h-4 w-4' />          Add to Profile        ;
        <Button variant="outline" className="gap-2">;
          <Link className="h-4 w-4" />;
          Add to Profile;
        </Button>;
      </div>;
    </div>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
