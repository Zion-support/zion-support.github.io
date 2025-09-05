import { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import {logErrorToProduction} from '@/utils/productionLogger',;
import {;
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger,;
  DropdownMenuSeparator,;
  DropdownMenuLabel,;
  DropdownMenuRadioGroup,;
  DropdownMenuRadioItem,;
  DropdownMenuCheckboxItem} from '@/components/ui/dropdown-menu',;
// Use the centralized icon wrapper to avoid missing icon issues;
import { FileText, ChevronDown, Loader2, Download } from 'lucide-react';
import { Resume } from '@/types/resume',;
import { exportResumeToPDF, ExportOptions } from '@/utils/pdfExport',;
import { toast } from '@/hooks/use-toast',;
import { FontFamily } from '@/utils/pdf/fontConfig',;
interface PdfExportButtonProps {;
  resume: Resume;
}
<<<<<<< HEAD

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
      logErrorToProduction('Error exporting PDF:', { data: error }),
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
=======
;
export function PdfExportButton({ resume }: PdfExportButtonProps) {;
  const [isExporting, setIsExporting] = useState(false),;
  const [theme, setTheme] = useState<'light' | 'dark'>('light'),;
  const [includePortfolio, setIncludePortfolio] = useState(true),;
  const [fontFamily, setFontFamily] = useState<FontFamily>('default'),;
  const handleExport = async () => {;
    if (isExporting) return,;
    setIsExporting(true),;
    try {;
      const options: ExportOptions = {;
        theme,;
        includePortfolio,;
        maxProjects: 3,;
        fontFamily;
      },;
      const pdfBlob = await exportResumeToPDF(resume, options),;
      // Create download link and trigger download;
      const url = URL.createObjectURL(pdfBlob),;
      const link = document.createElement('a'),;
      link.href = url,;
      link.download = `${resume.basic_info.title || 'Resume'}.pdf`,;
      document.body.appendChild(link),;
      link.click(),;
      // Clean up;
      document.body.removeChild(link),;
      URL.revokeObjectURL(url),;
      toast({;
        title: "Success!",;
        description: "Your resume has been downloaded as a PDF."});
    } catch (error) {;
      logErrorToProduction('Error exporting PDF:', { data: error }),;
      toast({;
        title: "Export failed",;
        description: "There was an error exporting your resume to PDF.";
        variant: "destructive";
      });
    } finally {;
      setIsExporting(false);
    }
  };
  return (;
    <DropdownMenu>;
      <DropdownMenuTrigger asChild>;
        <Button;
          variant="outline";
          className="gap-2";
          disabled={isExporting}
        >;
          {isExporting ? (;
            <Loader2 className="h-4 w-4 animate-spin" />;
          ) : (;
            <FileText className="h-4 w-4" />;
          )}
          Export PDF;
          <ChevronDown className="h-4 w-4" />;
        </Button>;
      </DropdownMenuTrigger>;
      <DropdownMenuContent align="end" className="w-56">;
        <DropdownMenuLabel>PDF Export Options</DropdownMenuLabel>;
        <DropdownMenuSeparator />;
        <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">Theme</DropdownMenuLabel>;
        <DropdownMenuRadioGroup value={theme} onValueChange={(value) => setTheme(value as 'light' | 'dark')}>;
          <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>;
          <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>;
        </DropdownMenuRadioGroup>;
        <DropdownMenuSeparator />;
        <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">Font</DropdownMenuLabel>;
        <DropdownMenuRadioGroup value={fontFamily} onValueChange={(value) => setFontFamily(value as FontFamily)}>;
          <DropdownMenuRadioItem value="default">Default</DropdownMenuRadioItem>;
          <DropdownMenuRadioItem value="montserrat">Montserrat</DropdownMenuRadioItem>;
          <DropdownMenuRadioItem value="open-sans">Open Sans</DropdownMenuRadioItem>;
          <DropdownMenuRadioItem value="roboto">Roboto</DropdownMenuRadioItem>;
        </DropdownMenuRadioGroup>;
        <DropdownMenuSeparator />;
        <DropdownMenuCheckboxItem;
          checked={includePortfolio}
          onCheckedChange={setIncludePortfolio}
        >;
          Include Portfolio Projects;
        </DropdownMenuCheckboxItem>;
        <DropdownMenuSeparator />;
        <DropdownMenuItem onClick={handleExport}>;
          <Download className="h-4 w-4 mr-2" />;
          Download PDF;
        </DropdownMenuItem>;
      </DropdownMenuContent>;
    </DropdownMenu>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;