<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/PdfExportButton.tsx


<<<<<<< HEAD
=======

import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuCheckboxItem} from '@/components/ui/dropdown-menu';


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

<<<<<<< HEAD
<<<<<<< HEAD
import { useState  } from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger;
  DropdownMenuSeparator;
  DropdownMenuLabel;
  DropdownMenuRadioGroup;
  DropdownMenuRadioItem;
  DropdownMenuCheckboxItem } from '@/components/ui/dropdown-menu';
=======
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuCheckboxItem} from '@/components/ui/dropdown-menu';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
// Use the centralized icon wrapper to avoid missing icon issues
import { FileText, ChevronDown, Loader2, Download  } from '@/components/icons';
import { Resume  } from '@/types/resume';
import { exportResumeToPDF, ExportOptions  } from '@/utils/pdfExport';
import { toast  } from '@/hooks/use-toast';
import { FontFamily } from '@/utils/pdf/fontConfig';
interface PdfExportButtonProps {
  resume: Resume
}
<<<<<<< HEAD
<<<<<<< HEAD

=======

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/PdfExportButton.tsx
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuCheckboxItem} from '@/components/ui/dropdown-menu';
=======


=======
export function PdfExportButton({ resume }: PdfExportButtonProps) {
  const [isExporting, setIsExporting] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light'),
  const [includePortfolio, setIncludePortfolio] = useState(true);
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function PdfExportButton({ resume }: PdfExportButtonProps) {;
  const [isExporting, setIsExporting] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [includePortfolio, setIncludePortfolio] = useState(true);
  const [fontFamily, setFontFamily] = useState<FontFamily>('default');
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

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
  const [isExporting, setIsExporting] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light'),
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/PdfExportButton.tsx

  const [includePortfolio, setIncludePortfolio] = useState(true),
  const [fontFamily, setFontFamily] = useState<FontFamily>('default'),

<<<<<<< HEAD
  const [fontFamily, setFontFamily] = useState<FontFamily>('default');
  const handleExport = async () => {
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662



=======
// Use the centralized icon wrapper to avoid missing icon issues;
import { FileText, ChevronDown, Loader2, Download } from '@/components/icons',;
import { Resume } from '@/types/resume',;
import { exportResumeToPDF, ExportOptions } from '@/utils/pdfExport',;
import { toast } from '@/hooks/use-toast',;
import { FontFamily } from '@/utils/pdf/fontConfig',;
interface PdfExportButtonProps {;
  resume: Resume;
}

export function PdfExportButton({ resume }: PdfExportButtonProps) {
  const [isExporting, setIsExporting] = useState(false),
  const [theme, setTheme] = useState<'light' | 'dark'>('light'),
  const [includePortfolio, setIncludePortfolio] = useState(true),
  const [fontFamily, setFontFamily] = useState<FontFamily>('default'),
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

  const [fontFamily, setFontFamily] = useState<FontFamily>('default');
  const handleExport = async () => {
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
      
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      toast({
        title: "Success!"
        description: "Your resume has been downloaded as a PDF."})
    } catch (error) {
<<<<<<< HEAD
      console.error('Error exporting PDF:', error);
=======
      console.error('Error exporting PDF:', error),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      toast({
        title: "Export failed"
        description: "There was an error exporting your resume to PDF."
        variant: "destructive"
      })
    } finally {
      setIsExporting(false)
<<<<<<< HEAD

========
  const [includePortfolio, setIncludePortfolio] = useState(true);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/PdfExportButton.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/PdfExportButton.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/PdfExportButton.tsx
    }
<<<<<<< HEAD
=======
  }
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/PdfExportButton.tsx
=======
    }

  },

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  return (

========
  return (
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/PdfExportButton.tsx
    <DropdownMenu>;
      <DropdownMenuTrigger asChild>;
        <Button
          variant="outline" 
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/PdfExportButton.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/PdfExportButton.tsx
          className="gap-2"
          disabled={isExporting}>;
          {isExporting ? (;
            <Loader2 className="h-4 w-4 animate-spin" />;
          ) : (;
            <FileText className="h-4 w-4" />;
          )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/PdfExportButton.tsx
<<<<<<< HEAD
=======
    }
<<<<<<< HEAD
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="gap-2"
          disabled={isExporting}
        >
          {isExporting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <FileText className="h-4 w-4" />
          )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          Export PDF
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>PDF Export Options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">Theme</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={theme} onValueChange={(value) => setTheme(value as 'light' | 'dark')}>
          <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">Font</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={fontFamily} onValueChange={(value) => setFontFamily(value as FontFamily)}>
          <DropdownMenuRadioItem value="default">Default</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="montserrat">Montserrat</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="open-sans">Open Sans</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="roboto">Roboto</DropdownMenuRadioItem>
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
          <Download className="h-4 w-4 mr-2" />
          Download PDF
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
<<<<<<< HEAD

=======

=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/PdfExportButton.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
        <DropdownMenuCheckboxItem
          checked={includePortfolio}
          onCheckedChange={setIncludePortfolio}>;
=======
        <DropdownMenuCheckboxItem;
          checked={includePortfolio}
          onCheckedChange={setIncludePortfolio}
        >;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}
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
<<<<<<< HEAD

=======
  const handle_export = async () => {
    // Check condition
if (return) {
  $2
}
    setIsExporting (true);
;
    try {
      const options: ExportOptions = {
        theme;
        include_portfolio,
        max_projects: 3,
        font_family;
      }
;
      const pdf_blob = await exportResumeToPDF (resume, options);
;
      // Create download link and trigger download;
      const url = URL.createObjectURL (pdf_blob);
      const link = document.create_element ('a');
      link.href = url;
      link.download = `${resume.basic_info.title || 'Resume'}.pdf`;
      document.body.append_child (link);
      link.click ();
;
      // Clean up;
      document.body.remove_child (link);
      URL.revokeObjectURL (url);
;
      toast ({
        title: "Success!",
        description: "Your resume has been downloaded as a PDF."});
    } catch (error) {
      console.error ('Error exporting PDF:', error);
      toast ({
        title: "Export failed",
        description: "There was an error exporting your resume to PDF.",
        variant: "destructive";
      });
    } finally {
      setIsExporting (false);
    }
  }
;
  return (
    <DropdownMenu>;
      <DropdownMenuTrigger as_child>;
        <Button;
          variant="outline";
          className="gap - 2";
          disabled={is_exporting}
        >;
          {is_exporting ? (
            <Loader2 className="h - 4 w - 4 animate - spin" />) : (
            <FileText className="h - 4 w - 4" />)}
          Export PDF;
          <ChevronDown className="h - 4 w - 4" />;
        </Button>;
      </DropdownMenuTrigger>;
      <DropdownMenuContent align="end" className="w - 56">;
        <DropdownMenuLabel > PDF Export Options</DropdownMenuLabel>;
        <DropdownMenuSeparator />;
        <DropdownMenuLabel className="text - xs font - normal text - muted - foreground">Theme</DropdownMenuLabel>;
        <DropdownMenuRadioGroup value={theme} onValueChange={(value) => set_theme (value as 'light' | 'dark')}>;
          <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>;
          <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>;
        </DropdownMenuRadioGroup>;
        <DropdownMenuSeparator />;
        <DropdownMenuLabel className="text - xs font - normal text - muted - foreground">Font</DropdownMenuLabel>;
        <DropdownMenuRadioGroup value={font_family} onValueChange={(value) => setFontFamily (value as FontFamily)}>;
          <DropdownMenuRadioItem value="default">Default</DropdownMenuRadioItem>;
          <DropdownMenuRadioItem value="montserrat">Montserrat</DropdownMenuRadioItem>;
          <DropdownMenuRadioItem value="open - sans">Open Sans</DropdownMenuRadioItem>;
          <DropdownMenuRadioItem value="roboto">Roboto</DropdownMenuRadioItem>;
        </DropdownMenuRadioGroup>;
        <DropdownMenuSeparator />;
        <DropdownMenuCheckboxItem;
          checked={include_portfolio}
=======

import { useState } from 'react',;
import { Button } from '@/components/ui/button',;
import { ;
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
import { FileText, ChevronDown, Loader2, Download } from '@/components/icons',;
import { Resume } from '@/types/resume',;
import { exportResumeToPDF, ExportOptions } from '@/utils/pdfExport',;
import { toast } from '@/hooks/use-toast',;
import { FontFamily } from '@/utils/pdf/fontConfig',;
;
interface PdfExportButtonProps {;
  resume:Resume;
}
;
export function PdfExportButton({ resume } PdfExportButtonProps) {;
  const [isExporting, setIsExporting] = useState(false),;
  const [theme, setTheme] = useState<'light' | 'dark'>('light'),;
  const [includePortfolio, setIncludePortfolio] = useState(true),;
  const [fontFamily, setFontFamily] = useState<FontFamily>('default'),;
;
  const handleExport = async () => {;
    if (isExporting) return,;
    ;
    setIsExporting(true),;
    ;
    try {;
      const options:ExportOptions = {;
        theme,;
        includePortfolio,;
        maxProjects:3,;
        fontFamily;
      },;
      ;
      const pdfBlob = await exportResumeToPDF(resume, options),;
      ;
      // Create download link and trigger download;
      const url = URL.createObjectURL(pdfBlob),;
      const link = document.createElement('a'),;
      link.href = url,;
      link.download = `${resume.basic_info.title || 'Resume'}.pdf`,;
      document.body.appendChild(link),;
      link.click(),;
      ;
      // Clean up;
      document.body.removeChild(link),;
      URL.revokeObjectURL(url),;
      ;
      toast({;
        title:"Success!",;
        description:"Your resume has been downloaded as a PDF."}),;
    } catch (error) {;
      console.error('Error exporting PDF:', error),;
      toast({;
        title:"Export failed",;
        description:"There was an error exporting your resume to PDF.",;
        variant:"destructive";
      }),;
    } finally {;
      setIsExporting(false),;
    }
  },;
;
  return (;
    <DropdownMenu>;
      <DropdownMenuTrigger asChild>;
        <Button ;
          variant="outline" ;
          className="gap-2";
          disabled={isExporting}
        >;
          {isExporting ? (;
            <Loader2 className="h-4 w-4 animate-spin" />;
          ) :(;
            <FileText className="h-4 w-4" />;
          )}
          Export PDF;
          <ChevronDown className="h-4 w-4" />;
        </Button>;
      </DropdownMenuTrigger>;
      <DropdownMenuContent align="end" className="w-56">;
        <DropdownMenuLabel>PDF Export Options</DropdownMenuLabel>;
        <DropdownMenuSeparator />;
        ;
        <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">Theme</DropdownMenuLabel>;
        <DropdownMenuRadioGroup value={theme} onValueChange={(value) => setTheme(value as 'light' | 'dark')}>;
          <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>;
          <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>;
        </DropdownMenuRadioGroup>;
        ;
        <DropdownMenuSeparator />;
        <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">Font</DropdownMenuLabel>;
        <DropdownMenuRadioGroup value={fontFamily} onValueChange={(value) => setFontFamily(value as FontFamily)}>;
          <DropdownMenuRadioItem value="default">Default</DropdownMenuRadioItem>;
          <DropdownMenuRadioItem value="montserrat">Montserrat</DropdownMenuRadioItem>;
          <DropdownMenuRadioItem value="open-sans">Open Sans</DropdownMenuRadioItem>;
          <DropdownMenuRadioItem value="roboto">Roboto</DropdownMenuRadioItem>;
        </DropdownMenuRadioGroup>;
        ;
        <DropdownMenuSeparator />;
        <DropdownMenuCheckboxItem ;
          checked={includePortfolio}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          onCheckedChange={setIncludePortfolio}
        >;
          Include Portfolio Projects;
        </DropdownMenuCheckboxItem>;
<<<<<<< HEAD
        <DropdownMenuSeparator />;
        <DropdownMenuItem on_click={handle_export}>;
          <Download className="h - 4 w - 4 mr - 2" />;
          Download PDF;
        </DropdownMenuItem>;
      </DropdownMenuContent>;
    </DropdownMenu>);
=======
        ;
        <DropdownMenuSeparator />;
        <DropdownMenuItem onClick={handleExport}>;
          <Download className="h-4 w-4 mr-2" />;
          Download PDF;
        </DropdownMenuItem>;
      </DropdownMenuContent>;
    </DropdownMenu>;
  ),; setIsExporting (true);
try {
  const options: ExportOptions = {
  
}catch (error) {
  console.error ('Error exporting PDF:', error);
toast ({
  
}finally {
  setIsExporting (false) 
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/PdfExportButton.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
};
h-4 w-4"/>) 
}Export PDF <ChevronDown className=" h-4 w-4"/> </Button> </DropdownMenuTrigger> <DropdownMenuContent align=" end"className=" w-56" > <DropdownMenuLabel>PDF Export Options</DropdownMenuLabel> <DropdownMenuSeparator /> </DropdownMenuRadioGroup> <DropdownMenuSeparator /> <DropdownMenuCheckboxItem checked= {
  includePortfolio 
}onCheckedChange= {
  setIncludePortfolio 
}> Include Portfolio Projects </DropdownMenuCheckboxItem> <DropdownMenuSeparator /> Download PDF </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/PdfExportButton.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
