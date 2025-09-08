
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { Button  } from '@/components/ui/button';
import { ArrowLeft, FileText, Link  } from 'lucide-react';
import { PdfExportButton  } from '../PdfExportButton';
import { Resume  } from '@/types/resume';
import { useState  } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';


import {Button} from '@/components/ui/button';
import {ArrowLeft, FileText, Link} from 'lucide-react';
import {PdfExportButton} from '../PdfExportButton';
import {Resume} from '@/types/resume';
import {useState} from 'react';


<<<<<<< HEAD

  resume: Resume;
  onBack: () => void;
}
=======
  resume: Resume;
  onBack: () => void;
}
export function PreviewHeader({ resume, onBack }: PreviewHeaderProps) {
export function PreviewHeader({ resume, onBack }: PreviewHeaderProps) {
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
  const isMobile = useIsMobile();
  const handleBrowserPrint = () => {
    setIsPrinting(true);

    // Inject print-specific CSS only for the duration of printing
    const style = document.createElement("style");
    style.innerHTML = `
      @media print {
        body * {
          visibility: hidden
import { Button } from '@/components/ui/button',;
import { ArrowLeft, FileText, Link } from 'lucide-react',;
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

  resume: Resume;
  onBack: () => void;
}

  const handleBrowserPrint = () => {

    setIsPrinting(true);
    // Inject print-specific CSS only for the duration of printing"
    const style = document.createElement("style");
    style.innerHTML = `
      @media print {}
        body * {}
          visibility: hidden;
import { Button } from '@/components/ui/button',;'
import { ArrowLeft, FileText, Link } from 'lucide-react',;'
import { PdfExportButton } from '../PdfExportButton',;'
import { Resume } from '@/types/resume',;'
import { useState } from 'react',;'
import { useIsMobile } from '@/hooks/use-mobile',;
interface PreviewHeaderProps {;
  resume: Resume,;
  onBack: () => void;
}
;

export function PreviewHeader({ resume, onBack }: PreviewHeaderProps) {;
<<<<<<< HEAD



  const [isPrinting, setIsPrinting] = useState(false);


interface PreviewHeaderProps {;
  resume: Resume,;
  onBack: () => void;
}
export function PreviewHeader(): any ({ resume, onBack }: PreviewHeaderProps) {;
  const [isPrinting, setIsPrinting] = useState(false);
  const handleBrowserPrint = () => {;
    setIsPrinting(true);
    // Inject print-specific CSS only for the duration of printing;
    const style = document && document.createElement('style');
    style && style.innerHTML = `;
      @media print {;
        body * {;

          visibility: hidden;



=======

  const handleBrowserPrint = () => {;
    setIsPrinting(true);

          visibility: hidden;
  const handleBrowserPrint = () => {;
    setIsPrinting(true),;
    // Inject print-specific CSS only for the duration of printing;
    const style = document.createElement('style'),;
    style.innerHTML = `;
      @media print {;
        body * {;
          visibility: hidden;
        }
        .print-section, .print-section * {
          visibility: visible
        }
        }
        .print-section, .print-section * {
          visibility: visible
        }


>>>>>>> origin/cursor/delete-old-data-records-6bba
        .print-section {
          position: absolute
          left: 0
          top: 0
          width: 100%


        .print-section {;
          position: absolute,;
          left: 0,;
          top: 0,;
          width: 100%;


        }
        .no-print {;
import { Button  } from '@/components / ui / button';
import { ArrowLeft, FileText, Link  } from './lucide-react';
import { PdfExportButton  } from '../PdfExportButton';
import { Resume  } from '@/types / resume';
import { useState  } from './react';
import { useIsMobile  } from '@/hooks / use - mobile';
interface PreviewHeaderProps {
  resume: Resume;
  on_back: () => void;
}
export /**
 * PreviewHeader - Function description
 */
function PreviewHeader() {
  const [is_printing, setIsPrinting] = useState (false);
  const is_mobile = useIsMobile ();
;
  const handleBrowserPrint = () =>: any {
    setIsPrinting (true);
;
    // Inject print - specific CSS only for the duration of printing;
    const style = document.create_element ("style");
    style.innerHTML = `;

      @media print {

        body * {

          visibility: hidden;
        }
        .print - section, .print - section * {}
          visibility: visible;
        }
        .print - section {}
          position: absolute,
          left: 0,
          top: 0,
          width: 100%;
        }
<<<<<<< HEAD

        .no - print {
          display: none !important;
        }
      }

    `,
    document.head.appendChild(style),
    `,
    document.head.appendChild(style),


    

=======

        .no - print {}
          display: none !important;

    `,
    document.head.appendChild(style),


>>>>>>> origin/cursor/delete-old-data-records-6bba
    // Trigger print dialog
    window.print(),
    
    // Remove the temporary style element after printing
    setTimeout(() => {
      document.head.removeChild(style),
      setIsPrinting(false)
    }, 1000)
  },
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD


=======
    // Remove the temporary style element after printing
    setTimeout(() => {
      document.head.removeChild(style);
      setIsPrinting(false);
    }, 1000);
  };
>>>>>>> origin/cursor/delete-old-data-records-6bba


  return (
    <div
      className={`flex ${isMobile ? "flex-col" : "justify-between"} items-${isMobile ? "stretch" : "center"} gap-3`}
    >
      <Button variant="outline" onClick={onBack} className="gap-2 no-print">
        <ArrowLeft className="h-4 w-4" />
        Back
      </Button>


      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} space-${isMobile ? 'y-2' : 'x-2'} no-print`}>
        <PdfExportButton resume={resume} />
        <Button 
          variant="outline" 

      <div
        className={`flex ${isMobile ? "flex-col" : "flex-row"} space-${isMobile ? "y-2" : "x-2"} no-print`}
      >

<<<<<<< HEAD
=======

        <PdfExportButton resume={resume} />
        <Button 
          variant="outline" 
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
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



=======

}
>>>>>>> origin/cursor/delete-old-data-records-6bba
