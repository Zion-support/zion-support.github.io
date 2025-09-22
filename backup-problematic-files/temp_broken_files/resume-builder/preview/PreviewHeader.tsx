
<<<<<<< HEAD
=======
import { Button } from '@/components/ui/button',;
import { ArrowLeft, FileText, Link } from 'lucide-react';
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
import { PdfExportButton } from '../PdfExportButton',;
import { Resume } from '@/types/resume',;
import { useState } from 'react',;
import { useIsMobile } from '@/hooks/use-mobile',;
<<<<<<< HEAD
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, Link } from 'lucide-react';
import { PdfExportButton } from '../PdfExportButton';
import { Resume } from '@/types/resume';
import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
=======
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
;
interface PreviewHeaderProps {;
  resume:Resume,;
  onBack:() => void;}
;
export function PreviewHeader({ resume, onBack } PreviewHeaderProps) {;
  const [isPrinting, setIsPrinting] = useState(false),;
  const isMobile = useIsMobile(),;
;
  const handleBrowserPrint = () => {;
    setIsPrinting(true),;
    ;
    // Inject print-specific CSS only for the duration of printing;
    const style = document.createElement('style'),;
    style.innerHTML = `;
      @media print {;
        body * {;
          visibility:hidden;
        }
        .print-section, .print-section * {;
          visibility:visible;
        }
        .print-section {;
          position:absolute,;
          left:0,;
          top:0,;
          width:100%;
        }
        .no-print {;
          display:none !important;
        }
      }
    `,;
    document.head.appendChild(style),;
    ;
    // Trigger print dialog;
    window.print(),;
    ;
    // Remove the temporary style element after printing;
    setTimeout(() => {;
      document.head.removeChild(style),;
      setIsPrinting(false),;
    }, 1000),;
  },;
;
  return (;
    <div className={`flex ${isMobile ? 'flex-col' :'justify-between'} items-${isMobile ? 'stretch' :'center'} gap-3`}>;
      <Button ;
        variant="outline" ;
        onClick={onBack} ;
        className="gap-2 no-print";
      >;
        <ArrowLeft className="h-4 w-4" />;
        Back;
      </Button>;
      ;
      <div className={`flex ${isMobile ? 'flex-col' :'flex-row'} space-${isMobile ? 'y-2' :'x-2'} no-print`}>;
        <PdfExportButton resume={resume} />;
        ;
        <Button ;
          variant="outline" ;
          onClick={handleBrowserPrint} ;
          disabled={isPrinting}
          className="gap-2";
        >;
          <FileText className="h-4 w-4" />;
          Print;
        </Button>;
        ;
        <Button variant="outline" className="gap-2">;
          <Link className="h-4 w-4" />;
          Add to Profile;
        </Button>;
      </div>;
    </div>;
<<<<<<< HEAD
=======
  ),;}
 ;
}`;
document.head.appendChild (style);
//Trigger print dialog window.print ();
//Remove the temporary style element after printing return (<div className= {;
  `flex $ {;
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
  isMobile ? 'flex-col' : 'justify-between' ;
}items-$ {';
  isMobile ? 'stretch' : 'center' ;
}gap-3` ;
}> <Button > <ArrowLeft className="h-4 w-4" /> Back </Button> <div className= {;
  `flex $ {';
  isMobile ? 'flex-col' : 'flex-row' ;
}space-$ {';
  isMobile ? 'y-2' : 'x-2' ;
}no-print` ;


}> <PdfExportButton resume= {;
  resume ";
}/> <Button > <FileText className="h-4 w-4" /> Print </Button> <Button variant="outline" className="gap-2" > <Link className="h-4 w-4" /> Add to Profile </Button> </div> </div>) ;
}'"
<<<<<<< HEAD
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/resume-builder/preview/PreviewHeader.tsx
=======


>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
