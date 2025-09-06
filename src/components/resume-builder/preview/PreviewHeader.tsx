
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import { ArrowLeft, FileText, Link } from 'lucide-react'
import { PdfExportButton  } from '../PdfExportButton';
import { Resume  } from '@/types/resume';
import { useState  } from 'react';
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
import { useIsMobile } from '@/hooks/use-mobile';


          position: absolute;
          left: 0;
          top: 0;
          width: 100%;


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

      </Button>
      <div

        className={`flex ${isMobile ? 'flex-col' : 'flex-row'} space-${isMobile ? 'y-2' : 'x-2'} no-print`}>;
        <PdfExportButton resume={resume} />;


        <Button
          variant='outline'
          onClick={handleBrowserPrint}
          disabled={isPrinting}
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
        <Button variant="outline" className="gap-2">
          <Link className="h-4 w-4" />
          Add to Profile
        </Button>
      </div>
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
