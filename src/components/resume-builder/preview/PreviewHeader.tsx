import { PdfExportButton } from '../PdfExportButton';
import { Resume } from '@/types/resume';
import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';


          position: absolute;
          left: 0;
          top: 0;
          width: 100%;


        }
        .no - print {
          display: none !important }
      }


        }
        .print - section, .print - section * {
          visibility: visible;
        }

        .print-section {;
          position: absolute,;
          left: 0,;
          top: 0,;
          width: 100%;

        }


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


