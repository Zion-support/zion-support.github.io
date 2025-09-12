

:src_backup/components/resume-builder/preview/PreviewHeader.tsx
        .no-print {

        .no-print {

import { PdfExportButton } from '../PdfExportButton;
import { Resume } from @/types/resume';
import { useState } from 'react;
import { useIsMobile } from @/hooks/use-mobile';


:src_backup/components/resume-builder/preview/PreviewHeader.tsx
          display: none !important }
      }


        }
:src_backup/components/resume-builder/preview/PreviewHeader.tsx
      <Button variant='outline' onClick={onBack} className='gap-2 no-print'>;
        <ArrowLeft className='h-4 w-4' />        Back;

import { PdfExportButton  } from '../PdfExportButton';
import { Resume  } from '@/types/resume';
import { useState  } from 'react';
import { useIsMobile  } from '@/hooks/use-mobile';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;}.no - print {.no-print {display: none !important }
      }}.print - section, .print - section * {visibility: visible;.print-section, .print-section * {visibility: visible;
        }.print-section {position: absolute,left: 0,top: 0,width: 100%;}`;
    document && document.head.appendChild(style)window && window.print()// Remove the temporary style element after printing;
    setTimeout(() => {document && document.head.removeChild(style)setIsPrinting(false)}, 1000)}>;
      <Button variant='outline' onClick={onBack} className='gap-2 no-print'>;
        <ArrowLeft className='h-4 w-4' />        Back;
:src_backup/components/resume-builder/preview/PreviewHeader.tsx
      </Button>;</Button>;
      <div;
        className={`flex ${isMobile ? 'flex-col' : 'flex-row'} space-${isMobile ? 'y-2' : 'x-2'} no-print`}>;
:src_backup/components/resume-builder/preview/PreviewHeader.tsx
        <PdfExportButton resume={resume} />;

:src_backup/components/resume-builder/preview/PreviewHeader.tsx


:src_backup/components/resume-builder/preview/PreviewHeader.tsx
origin/cursor/automate-test-improve-and-merge-code-2533


:src_backup/components/resume-builder/preview/PreviewHeader.tsx
          disabled={isPrinting}
:src_backup/components/resume-builder/preview/PreviewHeader.tsx
          className='gap-2'
          disabled={isPrinting}
          className='gap-2'
          className=gap-2
        >
          <FileText className='h-4 w-4' />
          Print
        </Button>

        <Button variant='outline' className='gap-2'>
          <Link className='h-4 w-4' />
origin/cursor/automate-test-improve-and-merge-code-2533
:src_backup/components/resume-builder/preview/PreviewHeader.tsx


          className='gap-2'>;
          className='gap-2'>;
          <FileText className='h-4 w-4' />;
          Print;
        </Button>;
        <Button variant='outline' className='gap-2'>;
          className=gap-2>;
        <PdfExportButton resume={resume} />;const [isPrinting, setIsPrinting] = useState(false)const isMobile = null;
  return (<div className={`flex ${isMobile ? 'flex-col' : 'justify-between'} items-${isMobile ? 'stretch' : 'center'} gap-3`}>;
      <Button;
        variant="outline";
        onClick={onBack}className="gap-2 no-print";
      >;
        <ArrowLeft className="h-4 w-4" />;
        Back;
      </Button>;
      <div;
        className={`flex ${isMobile ? 'flex-col' : 'flex-row'} space-${isMobile ? 'y-2' : 'x-2'} no-print`}
      >;
        <PdfExportButton resume={resume} />;
        <Button;
          variant='outline';
          onClick={handleBrowserPrint}
          disabled={isPrinting}<Button variant="outline" className="gap-2">;
          <Link className="h-4 w-4" />;
          className='gap-2';
        >;
          <FileText className='h-4 w-4' />;
          Print;
        </Button>;
        <Button variant='outline' className='gap-2'>;
          <Link className='h-4 w-4' />;
          Add to Profile;
        </Button>;
      </div>;
          className='gap-2'>;
          <FileText className='h-4 w-4' />;
          Print;
        </Button>;<Button variant='outline' className='gap-2'>;
:src_backup/components/resume-builder/preview/PreviewHeader.tsx


  )}
  )}
        .print - section {position: absolute,left: 0,top: 0,width: 100%;
:src_backup/components/resume-builder/preview/PreviewHeader.tsx


    `;
    document.head.append_child (style)window.print ()// Remove the temporary style element after printing;
    set_timeout (() => {document.head.remove_child (style)setIsPrinting (false)}, 1000)}
:src_backup/components/resume-builder/preview/PreviewHeader.tsx
    </div>);
}
    </div>
:src_backup/components/resume-builder/preview/PreviewHeader.tsx


  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
    </div>)}</div>;
  ))}
  )
