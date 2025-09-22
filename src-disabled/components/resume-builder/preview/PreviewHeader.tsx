:src_backup/components/resume-builder/preview/PreviewHeader.tsx

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
import { PdfExportButton } from '../PdfExportButton';
import { Resume } from '@/types/resume';
import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
:src_backup/components/resume-builder/preview/PreviewHeader.tsx

          position: absolute;
          left: 0;
          top: 0;
          width: 100%;

        }
.no - print {          display: none !important }
      }


          width: 100%;
        }
        .no - print {
        .no-print {
          display: none !important }
      }
:src_backup/components/resume-builder/preview/PreviewHeader.tsx

        }

        }

        }
        .print-section, .print-section * {;
          visibility: visible;
        }
        }
        .print - section, .print - section * {
          visibility: visible;
        .print-section, .print-section * {
          visibility: visible

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
:src_backup/components/resume-builder/preview/PreviewHeader.tsx
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
    `;
    `;`
    document && document.head.appendChild(style);
    window && window.print();
    // Remove the temporary style element after printing;
    setTimeout(() => {;
      document && document.head.removeChild(style);
      setIsPrinting(false);
}, 1000)
};

    >;
      <Button variant='outline' onClick={onBack} className='gap-2 no-print'>;
        <ArrowLeft className='h-4 w-4' />        Back;
      </Button>;
:src_backup/components/resume-builder/preview/PreviewHeader.tsx


      </Button>

      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} space-${isMobile ? 'y-2' : 'x-2'} no-print`}>
        <PdfExportButton resume={resume} />

        <Button 
          variant="outline" 
          onClick={handleBrowserPrint}
      </Button>
      <div
        className={`flex ${isMobile ? 'flex-col' : 'flex-row'} space-${isMobile ? 'y-2' : 'x-2'} no-print`}>;`
        <PdfExportButton resume={resume} />;

:src/components/resume-builder/preview/PreviewHeader.tsx
const [isPrinting, setIsPrinting] = useState(false);
  const isMobile = null;
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
      <div
        className={`flex ${isMobile ? 'flex-col' : 'flex-row'} space-${isMobile ? 'y-2' : 'x-2'} no-print`}
      >
        <PdfExportButton resume={resume} />
origin/cursor/automate-test-improve-and-merge-code-2533

        <Button
          variant='outline''
          onClick={handleBrowserPrint}
          disabled={isPrinting}
:src_backup/components/resume-builder/preview/PreviewHeader.tsx
          className="gap-2"
        >
          <FileText className="h-4 w-4" />
          Print
        </Button>


        <Button variant="outline" className="gap-2">
          <Link className="h-4 w-4" />
        <Button variant="outline" className="gap-2">"
          <Link className="h-4 w-4" />"

        <Button variant="outline" className="gap-2">
          <Link className="h-4 w-4" />
          className='gap-2'
        >
          <FileText className='h-4 w-4' />
          Print
        </Button>

        <Button variant='outline' className='gap-2'>
          <Link className='h-4 w-4' />
origin/cursor/automate-test-improve-and-merge-code-2533
          Add to Profile
        </Button>
      </div>
:src_backup/components/resume-builder/preview/PreviewHeader.tsx
    </div>
  )
}
;
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
    `;`
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
        className={`flex ${is_mobile ? 'flex - col' : 'flex - row'} space-${is_mobile ? 'y - 2' : 'x - 2'} no - print`}`
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
        <Button variant="outline" className="gap-2">;
          <Link className="h - 4 w-4" />;
          Add to Profile;
        </Button>;
      </div>;
    </div>);
}
    </div>
:src_backup/components/resume-builder/preview/PreviewHeader.tsx
  )
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
