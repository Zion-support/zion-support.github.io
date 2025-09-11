


import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuCheckboxItem} from '@/components/ui/dropdown-menu';


// Use the centralized icon wrapper to avoid missing icon issues
import { FileText, ChevronDown, Loader2, Download  } from '@/components/icons';
import { Resume  } from '@/types/resume';
import { exportResumeToPDF, ExportOptions  } from '@/utils/pdfExport';
import { toast  } from '@/hooks/use-toast';
import { FontFamily } from '@/utils/pdf/fontConfig';
interface PdfExportButtonProps {
  resume: Resume
}

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


export function PdfExportButton({ resume }: PdfExportButtonProps) {;
  const [isExporting, setIsExporting] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [includePortfolio, setIncludePortfolio] = useState(true);
  const [fontFamily, setFontFamily] = useState<FontFamily>('default');

=======
import { useState } from 'react',;
import { Button } from '@/components/ui/button',;
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
import {FileText, ChevronDown, Loader2, Download} from '@/components/icons';
import {Resume} from '@/types/resume';
import {exportResumeToPDF, ExportOptions} from '@/utils/pdfExport';
import {toast} from '@/hooks/use-toast';
import {FontFamily} from '@/utils/pdf/fontConfig';
interface PdfExportButtonProps {;
  resume: Resume;
}

export function PdfExportButton(): any ({ resume }: PdfExportButtonProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const [isExporting, setIsExporting] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light'),

  const [includePortfolio, setIncludePortfolio] = useState(true),
  const [fontFamily, setFontFamily] = useState<FontFamily>('default'),
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662



  const [fontFamily, setFontFamily] = useState<FontFamily>('default');
  const handleExport = async () => {
    if (isExporting) return;
    setIsExporting(true);
    try {
      const options: ExportOptions = {
        theme;
        includePortfolio
        maxProjects: 3
        fontFamily
      }
      const pdfBlob = await exportResumeToPDF(resume, options);
      // Create download link and trigger download
      const url = URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${resume.basic_info.title |'Resume'}.pdf`;
      document.body.appendChild(link);
      link.click();
      // Clean up
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
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
        title: "Success!"
        description: "Your resume has been downloaded as a PDF."})
    } catch (error) {
      console.error('Error exporting PDF:', error);
      toast({
        title: "Export failed"
        description: "There was an error exporting your resume to PDF."
        variant: "destructive"
      })
    } finally {
      setIsExporting(false)

  const handleExport = async () => {;
    if (isExporting) return;

    setIsExporting(true);

    try {;
      const options: ExportOptions = {;
        theme;
        includePortfolio,;
        maxProjects: 3,;
        fontFamily;
      };

      const pdfBlob = await exportResumeToPDF(resume, options);

      // Create download link and trigger download;
      const url = URL && URL.createObjectURL(pdfBlob);
      const link = document && document.createElement('a');
      link && link.href = url;
      link && link.download = `${resume && resume.basic_info.title || 'Resume'}.pdf`;
      document && document.body.appendChild(link);
      link && link.click();

      // Clean up;
      document && document.body.removeChild(link);
      URL && URL.revokeObjectURL(url);

      toast({;
        title: "Success!",;
        description: "Your resume has been downloaded as a PDF."});
    } catch (error) {;
      console && console.error('Error exporting PDF:', error);
      toast({;
        title: "Export failed",;
        description: "There was an error exporting your resume to PDF.",;
        variant: "destructive";
      });
    } finally {;
      setIsExporting(false);

    }
  }
  },

  return (

    <DropdownMenu>;
      <DropdownMenuTrigger asChild>;
        <Button
          variant="outline" 

          className="gap-2"
          disabled={isExporting}>;
          {isExporting ? (;
            <Loader2 className="h-4 w-4 animate-spin" />;
          ) : (;
            <FileText className="h-4 w-4" />;
          )}

=======


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
      console.error('Error exporting PDF:', error),;
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
        <DropdownMenuCheckboxItem
          checked={includePortfolio}
          onCheckedChange={setIncludePortfolio}>;
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




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
import {useState} from 'react';
import {Button} from '@/components / ui / button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuCheckboxItem} from '@/components / ui / dropdown - menu';
// Use the centralized icon wrapper to avoid missing icon issues;
import {FileText, ChevronDown, Loader2, Download} from '@/components / icons';
import {Resume} from '@/types / resume';
import {exportResumeToPDF, ExportOptions} from '@/utils / pdf_export';
import {toast} from '@/hooks / use - toast';
import {FontFamily} from '@/utils / pdf / font_config';
interface PdfExportButtonProps {
  resume: Resume;
}
export /**
 * PdfExportButton - Function description
 */
function PdfExportButton() {
  const [is_exporting, setIsExporting] = useState (false);
  const [theme, set_theme] = useState<'light' | 'dark'>('light');
  const [include_portfolio, setIncludePortfolio] = useState (true);
  const [font_family, setFontFamily] = useState < FontFamily>('default');
;
