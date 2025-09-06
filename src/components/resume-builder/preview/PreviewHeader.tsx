import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, Link } from 'lucide-react';import { PdfExportButton } from '../PdfExportButton';
import { Resume } from '@/types/resume';
import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

import { PdfExportButton } from '../PdfExportButton';
import { Resume } from '@/types/resume';
import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface PreviewHeaderProps {
  resume: Resume;
  onBack: () => void;

export function PreviewHeader({ resume, onBack }: PreviewHeaderProps) {
  const [isPrinting, setIsPrinting] = useState(false);
  const isMobile = useIsMobile();

  const handleBrowserPrint = () => {
    setIsPrinting(true);

    // Inject print-specific CSS only for the duration of printing
    const style = document.createElement('style');
    style.innerHTML = `
      @media print {
        body * {
          visibility: hidden;

        }
        .print-section, .print-section * {
          visibility: visible;
        }
        .print-section {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
        }
        .no-print {
          display: none !important;        }
      }
    `;
    document.head.appendChild(style);

        }
      }
    `;
    document.head.appendChild(style);

        Back
      </Button>

      <div
        className={`flex ${isMobile ? 'flex-col' : 'flex-row'} space-${isMobile ? 'y-2' : 'x-2'} no-print`}
      >
        <PdfExportButton resume={resume} />

        >
          <FileText className='h-4 w-4' />
          Print
        </Button>

        <Button variant='outline' className='gap-2'>
          <Link className='h-4 w-4' />          Add to Profile

          Add to Profile

        </Button>
      </div>
    </div>
  );
}