
import { useState } from 'react',
import { Button } from '@/components/ui/button',
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuCheckboxItem} from '@/components/ui/dropdown-menu',
// Use the centralized icon wrapper to avoid missing icon issues
import { FileText, ChevronDown, Loader2, Download } from '@/components/icons',
import { Resume } from '@/types/resume',
import { exportResumeToPDF, ExportOptions } from '@/utils/pdfExport',
import { toast } from '@/hooks/use-toast',
import { FontFamily } from '@/utils/pdf/fontConfig',
interface PdfExportButtonProps {
  resume: Resume
}

export function PdfExportButton({ resume }: PdfExportButtonProps) {
  const [isExporting, setIsExporting] = useState(false),
  const [theme, setTheme] = useState<'light' | 'dark'>('light'),
  const [includePortfolio, setIncludePortfolio] = useState(true),
  const [fontFamily, setFontFamily] = useState<FontFamily>('default'),

  const handleExport = async () => {
    if (isExporting) return,
    
    setIsExporting(true),
    
    try {
      const options: ExportOptions = {
        theme,
        includePortfolio,
        maxProjects: 3,
        fontFamily
      },
      
      const pdfBlob = await exportResumeToPDF(resume, options),
      
      // Create download link and trigger download
      const url = URL.createObjectURL(pdfBlob),
      const link = document.createElement('a'),
      link.href = url,
      link.download = `${resume.basic_info.title || 'Resume'}.pdf`,
      document.body.appendChild(link),
      link.click(),
      
      // Clean up
      document.body.removeChild(link),
      URL.revokeObjectURL(url),
      
      toast({
<<<<<<< HEAD
        title: "Success!",
        description: "Your resume has been downloaded as a PDF."})
=======
        title: &quot;Success!&quot;,
        description: &quot;Your resume has been downloaded as a PDF.&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } catch (error) {
      console.error('Error exporting PDF:', error),
      toast({
<<<<<<< HEAD
        title: "Export failed",
        description: "There was an error exporting your resume to PDF.",
        variant: "destructive"
      })
=======
        title: &quot;Export failed&quot;,
        description: &quot;There was an error exporting your resume to PDF.&quot;,
        variant: &quot;destructive&quot;
      });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsExporting(false)
    }
  },

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant=&quot;outline&quot; 
          className=&quot;gap-2&quot;
          disabled={isExporting}
        >
          {isExporting ? (
            <Loader2 className=&quot;h-4 w-4 animate-spin&quot; />
          ) : (
            <FileText className=&quot;h-4 w-4&quot; />
          )}
          Export PDF
          <ChevronDown className=&quot;h-4 w-4&quot; />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align=&quot;end&quot; className=&quot;w-56&quot;>
        <DropdownMenuLabel>PDF Export Options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <DropdownMenuLabel className=&quot;text-xs font-normal text-muted-foreground&quot;>Theme</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={theme} onValueChange={(value) => setTheme(value as 'light' | 'dark')}>
          <DropdownMenuRadioItem value=&quot;light&quot;>Light</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value=&quot;dark&quot;>Dark</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        
        <DropdownMenuSeparator />
        <DropdownMenuLabel className=&quot;text-xs font-normal text-muted-foreground&quot;>Font</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={fontFamily} onValueChange={(value) => setFontFamily(value as FontFamily)}>
          <DropdownMenuRadioItem value=&quot;default&quot;>Default</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value=&quot;montserrat&quot;>Montserrat</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value=&quot;open-sans&quot;>Open Sans</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value=&quot;roboto&quot;>Roboto</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem 
          checked={includePortfolio}
          onCheckedChange={setIncludePortfolio}
        >
          Include Portfolio Projects
        </DropdownMenuCheckboxItem>
        
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleExport}>
          <Download className=&quot;h-4 w-4 mr-2&quot; />
          Download PDF
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
