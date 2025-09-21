
import import { Button } from '@/components/ui/button',
import { ArrowLeft, FileText, Link } from 'lucide-react'
import import { PdfExportButton } from '../PdfExportButton',
import import { Resume } from '@/types/resume',
import import { useState } from 'react',
import import { useIsMobile } from '@/hooks/use-mobile',
interface PreviewHeaderProps {
  resume: Resume;,
onBack: () => void,
export function PreviewHeader({ resume onBack }: PreviewHeaderProps) {
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
    </div>
  )
}