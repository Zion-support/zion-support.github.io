
<<<<<<< HEAD
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
=======
import {_DropdownMenu, _DropdownMenuContent, _DropdownMenuItem, _DropdownMenuTrigger, _DropdownMenuSeparator, _DropdownMenuLabel, _DropdownMenuRadioGroup, _DropdownMenuRadioItem, _DropdownMenuCheckboxItem} from '@/components/ui/dropdown-menu';
// Use the centralized icon wrapper to avoid missing icon issues

interface PdfExportButtonProps {_resume: Resume;}

export function PdfExportButton(_{_resume}: PdfExportButtonProps) {_const [isExporting, _setIsExporting] = useState(false);
  const [theme, _setTheme] = useState<'light' | 'dark'>('light');
  const [includePortfolio, _setIncludePortfolio] = useState(true);
  const [fontFamily, _setFontFamily] = useState<FontFamily>('default');

  const _handleExport = async () => {
    if (isExporting) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    setIsExporting(true),
    
    try {
      const options: ExportOptions = {
<<<<<<< HEAD
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
=======
        theme, _includePortfolio, _maxProjects: 3, _fontFamily};
      
      const _pdfBlob = await exportResumeToPDF(resume, options);
      
      // Create download link and trigger download
      const _url = window.URL.createObjectURL(pdfBlob);
      const _link = document.createElement('a');
      link.href = url;
      link.download = `${_resume.basic_info.title || 'Resume'}.pdf`;
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      toast({_title: "Success!", _description: "Your resume has been downloaded as a PDF."});
    } catch (error) {_toast({
        title: "Export failed", _description: "There was an error exporting your resume to PDF.", _variant: "destructive"});
    } finally {_setIsExporting(false);}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
<<<<<<< HEAD
          variant=&quot;outline&quot; 
          className=&quot;gap-2&quot;
          disabled={isExporting}
        >
          {isExporting ? (
            <Loader2 className=&quot;h-4 w-4 animate-spin&quot; />
=======
          variant="outline" 
          className="gap-2"
          disabled={_isExporting}
        >
          {_isExporting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
        
<<<<<<< HEAD
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
=======
        <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">Theme</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={_theme} onValueChange={_(_value) => setTheme(value as 'light' | 'dark')}>
          <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">Font</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={_fontFamily} onValueChange={_(_value) => setFontFamily(value as FontFamily)}>
          <DropdownMenuRadioItem value="default">Default</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="montserrat">Montserrat</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="open-sans">Open Sans</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="roboto">Roboto</DropdownMenuRadioItem>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </DropdownMenuRadioGroup>
        
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem 
          checked={_includePortfolio}
          onCheckedChange={_setIncludePortfolio}
        >
          Include Portfolio Projects
        </DropdownMenuCheckboxItem>
        
        <DropdownMenuSeparator />
<<<<<<< HEAD
        <DropdownMenuItem onClick={handleExport}>
          <Download className=&quot;h-4 w-4 mr-2&quot; />
=======
        <DropdownMenuItem onClick={_handleExport}>
          <Download className="h-4 w-4 mr-2" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          Download PDF
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
