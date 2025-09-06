
import { ArrowLeft, FileText, Link } from 'lucide-react'
import { PdfExportButton  } from '../PdfExportButton';
import { Resume  } from '@/types/resume';
import { useState  } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';


          position: absolute;
          left: 0;
          top: 0;
          width: 100%;


        }
        .no-print {
          display: none !important }
      }


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

        <Button variant="outline" className="gap-2">
          <Link className="h-4 w-4" />
          Add to Profile
        </Button>
      </div>
<<<<<<< HEAD
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


>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
