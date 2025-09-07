<<<<<<< HEAD
import { useState  } from 'react';'
import { Button } from '@/components/ui/button';'
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { useState  } from 'react';
import { Button } from '@/components/ui/button';
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
import { FileText, ChevronDown, Loader2, Download  } from '@/components/icons';
import { Resume  } from '@/types/resume';
import { exportResumeToPDF, ExportOptions  } from '@/utils/pdfExport';
import { toast  } from '@/hooks/use-toast';
import { FontFamily } from '@/utils/pdf/fontConfig';
interface PdfExportButtonProps {
  resume: Resume}

export function PdfExportButton({ resume }: PdfExportButtonProps) {
  const [isExporting, setIsExporting] = useState($2);
  const [theme, setTheme] = useState<'light' | 'dark'>('light'),
  const [includePortfolio, setIncludePortfolio] = useState($2);
  const [fontFamily, setFontFamily] = useState<FontFamily>('default'),

  const handleExport = $2;
    setIsExporting($2);
    try {
      const options: ExportOptions = $2;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { useState  } from 'react';
import { Button } from '@/components/ui/button';
>>>>>>> origin/resolved-merge-conflicts
import { DropdownMenu;
  }
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger;
  DropdownMenuSeparator;
  DropdownMenuLabel;
  DropdownMenuRadioGroup;
  DropdownMenuRadioItem;
  DropdownMenuCheckboxItem } from '@/components/ui/dropdown-menu';'
import {useState} from 'react';'
import {Button} from '@/components/ui/button';'
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuCheckboxItem} from '@/components/ui/dropdown-menu';'
import {useState} from 'react';'
import {Button} from '@/components/ui/button';'
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuCheckboxItem} from '@/components/ui/dropdown-menu';'
// Use the centralized icon wrapper to avoid missing icon issues,
import { FileText, ChevronDown, Loader2, Download  } from '@/components/icons';'
import { Resume  } from '@/types/resume';'
import { exportResumeToPDF, ExportOptions  } from '@/utils/pdfExport';'
import { toast  } from '@/hooks/use-toast';'
import { FontFamily } from '@/utils/pdf/fontConfig';'
interface PdfExportButtonProps {
  }
<<<<<<< HEAD
  'resume': Resume
}
export function PdfExportButton() {;
  }
=======
  "resume": Resume
=======
  DropdownMenuRadioGroup;}
  DropdownMenuRadioItem;}
  DropdownMenuCheckboxItem } from '@/components/ui/dropdown-menu';
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuCheckboxItem} from '@/components/ui/dropdown-menu';

<<<<<<< HEAD
=======
=======

<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuCheckboxItem} from '@/components/ui/dropdown-menu';

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

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
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuCheckboxItem} from '@/components/ui/dropdown-menu';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
// Use the centralized icon wrapper to avoid missing icon issues

import { FileText, ChevronDown, Loader2, Download  } from '@/components/icons';
import { Resume  } from '@/types/resume';
import { exportResumeToPDF, ExportOptions  } from '@/utils/pdfExport';
import { toast  } from '@/hooks/use-toast';
import { FontFamily } from '@/utils/pdf/fontConfig';

>>>>>>> origin/chore/fix-lint-and-merge
}

<<<<<<< HEAD
export function PdfExportButton({ resume }: PdfExportButtonProps) {;
  const [isExporting, setIsExporting] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [includePortfolio, setIncludePortfolio] = useState(true);
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD


export function PdfExportButton({ resume }: PdfExportButtonProps) {
>>>>>>> origin/resolved-merge-conflicts
  const [isExporting, setIsExporting] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');'
  const [includePortfolio, setIncludePortfolio] = useState(true);
<<<<<<< HEAD
=======

=======
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuCheckboxItem} from '@/components/ui/dropdown-menu';
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export function PdfExportButton({ resume }: PdfExportButtonProps) {;
  const [isExporting, setIsExporting] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [includePortfolio, setIncludePortfolio] = useState(true);
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
  const [fontFamily, setFontFamily] = useState<FontFamily>('default');'
import { useState } from 'react';'
import { Button } from '@/components/ui/button';'
import {;
  }
  DropdownMenu,;
  DropdownMenuContent,;
  DropdownMenuItem,;
  DropdownMenuTrigger,;
  DropdownMenuSeparator,;
  DropdownMenuLabel,;
  DropdownMenuRadioGroup,;
  DropdownMenuRadioItem,;
  DropdownMenuCheckboxItem} from '@/components/ui/dropdown-menu',;'
// Use the centralized icon wrapper to avoid missing icon issues;
import {FileText, ChevronDown, Loader2, Download} from '@/components/icons';'
import {Resume} from '@/types/resume';'
import {exportResumeToPDF, ExportOptions} from '@/utils/pdfExport';'
import {toast} from '@/hooks/use-toast';'
import {FontFamily} from '@/utils/pdf/fontConfig';'
interface PdfExportButtonProps {;
  }
  'resume': Resume;
}
  const [isExporting, setIsExporting] = useState(false);
const [theme, setTheme] = useState<'light' | 'dark'>('light'),;'
const [includePortfolio, setIncludePortfolio] = useState(true),;
const [fontFamily, setFontFamily] = useState<FontFamily>('default'),;'
<<<<<<< HEAD
  const [fontFamily, setFontFamily] = useState<FontFamily>('default');'
=======
=======
  const [fontFamily, setFontFamily] = useState<FontFamily>('default');

<<<<<<< HEAD
  const [isExporting, setIsExporting] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light'),

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
export function PdfExportButton({ resume }: PdfExportButtonProps) {
  const [isExporting, setIsExporting] = useState(false),
  const [theme, setTheme] = useState<'light' | 'dark'>('light'),
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const [includePortfolio, setIncludePortfolio] = useState(true),
  const [fontFamily, setFontFamily] = useState<FontFamily>('default'),

  const [fontFamily, setFontFamily] = useState<FontFamily>('default');
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  const handleExport = async () => {
    }
    if (isExporting) return;
    setIsExporting(true);
    try {
<<<<<<< HEAD
=======
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
<<<<<<< HEAD
    if (isExporting) return,
    
    setIsExporting(true),
    
    try {
=======
=======
export function PdfExportButton(): any ({ resume }: PdfExportButtonProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const [isExporting, setIsExporting] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light'),

  const [includePortfolio, setIncludePortfolio] = useState(true),
  const [fontFamily, setFontFamily] = useState<FontFamily>('default'),

<<<<<<< HEAD
  const [fontFamily, setFontFamily] = useState<FontFamily>('default');
>>>>>>> origin/chore/fix-lint-and-merge
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
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    if (isExporting) return,
    
    setIsExporting(true),
    
    try {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
      }
      const 'options': ExportOptions = {
        }
        theme;
        includePortfolio;
    'maxProjects': 3,
fontFamily
      }
      const pdfBlob = await exportResumeToPDF(resume, options);
      // Create download link and trigger download,
const url = URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');'
      link.href = url;
      link.download = `${resume.basic_info.title |'Resume'}.pdf`;`      document.body.appendChild(link);
      link.click();
      // Clean up,
document.body.removeChild(link);
      URL.revokeObjectURL(url);
    if (isExporting) return,
    setIsExporting(true),
    try {
      }
      const 'options': ExportOptions = {
        }
        theme,
        includePortfolio,
        'maxProjects': 3,
        fontFamily
      },
<<<<<<< HEAD
const pdfBlob = await exportResumeToPDF(resume, options),;
      // Create download link and trigger download,
const url = URL.createObjectURL(pdfBlob),;
const link = document.createElement('a'),;'
=======
      
<<<<<<< HEAD
=======
<<<<<<< HEAD
      const pdfBlob = await exportResumeToPDF($2);
      // Create download link and trigger download
      const url = URL.createObjectURL($2);
      const link = document.createElement($2);
      link.href = $2;
      link.download = $2;
      document.body.appendChild($2);
      link.click($2);
      // Clean up
      document.body.removeChild($2);
      URL.revokeObjectURL($2);
      toast({
        title: "Success!",
        description: "Your resume has been downloaded as a PDF."})
    } catch (error) {
      console.error($2);
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      const pdfBlob = await exportResumeToPDF(resume, options),
      
      // Create download link and trigger download
      const url = URL.createObjectURL(pdfBlob),
      const link = document.createElement('a'),
>>>>>>> origin/resolved-merge-conflicts
      link.href = url,
      link.download = `${resume.basic_info.title || 'Resume'}.pdf`,`      document.body.appendChild(link),
      link.click(),
      // Clean up,
document.body.removeChild(link),
      URL.revokeObjectURL(url),
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
      
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/resolved-merge-conflicts
      toast({
        }
        'title': 'title','
    'description': 'Your resume has been downloaded as a PDF.'})'
    } catch (error) {
      }
      console.error('Error exporting 'PDF':', error),'
      toast({
        }
        'title': 'Export failed''
        'description': 'There was an error exporting your resume to PDF.''
'variant': 'destructive';'
      })
    } finally {
      }
      setIsExporting(false)
<<<<<<< HEAD
return (;
          className='gap-2''
=======
<<<<<<< HEAD
    }
=======
<<<<<<< HEAD
  const [includePortfolio, setIncludePortfolio] = useState(true);
  const handleExport = async () => {;
    if (isExporting) return;
    setIsExporting(true);
=======

  const handleExport = async () => {;
    if (isExporting) return;

    setIsExporting(true);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    try {;
      const options: ExportOptions = {;
        theme;
        includePortfolio,;
        maxProjects: 3,;
        fontFamily;
      };
<<<<<<< HEAD
      const pdfBlob = await exportResumeToPDF(resume, options);
=======

      const pdfBlob = await exportResumeToPDF(resume, options);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // Create download link and trigger download;
      const url = URL && URL.createObjectURL(pdfBlob);
      const link = document && document.createElement('a');
      link && link.href = url;
      link && link.download = `${resume && resume.basic_info.title || 'Resume'}.pdf`;
      document && document.body.appendChild(link);
      link && link.click();
<<<<<<< HEAD
      // Clean up;
      document && document.body.removeChild(link);
      URL && URL.revokeObjectURL(url);
=======

      // Clean up;
      document && document.body.removeChild(link);
      URL && URL.revokeObjectURL(url);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
    }
  }
=======

    }
  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }

  },

<<<<<<< HEAD

  return (

  return (
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  return (

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <DropdownMenu>;
      <DropdownMenuTrigger asChild>;
        <Button
          variant="outline" 
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          className="gap-2"
>>>>>>> origin/resolved-merge-conflicts
          disabled={isExporting}>;
          {isExporting ? (;
            <Loader2 className='h-4 w-4 animate-spin' />;'
          ) : (;
            <FileText className='h-4 w-4' />;'
          )}
<<<<<<< HEAD
;
export function PdfExportButton() {;
  }
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    }
  }
>>>>>>> merged-prs-20250907-203621
  },

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="gap-2"
<<<<<<< HEAD
          disabled={isExporting}
        >
          {isExporting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <FileText className="h-4 w-4" />
          )}
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
}
}
;
=======
          disabled={isExporting}
        >
          {isExporting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <FileText className="h-4 w-4" />
          )}
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



}
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
;
export function PdfExportButton({ resume }: PdfExportButtonProps) {;
>>>>>>> origin/resolved-merge-conflicts
  const [isExporting, setIsExporting] = useState(false),;
  const [theme, setTheme] = useState<'light' | 'dark'>('light'),;'
  const [includePortfolio, setIncludePortfolio] = useState(true),;
  const [fontFamily, setFontFamily] = useState<FontFamily>('default'),;'
  const handleExport = async () => {;
    }
    if (isExporting) return,;
    setIsExporting(true),;
    try {;
      }
      const 'options': ExportOptions = {;
        }
        theme,;
        includePortfolio,;
        'maxProjects': 3,;
        fontFamily;
      },;
      const pdfBlob = await exportResumeToPDF(resume, options),;
      // Create download link and trigger download;
      const url = URL.createObjectURL(pdfBlob),;
      const link = document.createElement('a'),;'
      link.href = url,;
      link.download = `${resume.basic_info.title || 'Resume'}.pdf`,;`
      document.body.appendChild(link),;
      link.click(),;
      // Clean up;
      document.body.removeChild(link),;
      URL.revokeObjectURL(url),;
      toast({;
        }
        'title': 'Success!',,'
  'description': 'Your resume has been downloaded as a PDF.'});'
    } catch (error) {;
      }
      console.error('Error exporting 'PDF':', error),;'
      toast({;
        }
        'title': 'Export failed',,'
  'description': 'There was an error exporting your resume to PDF.';'
        'variant': 'destructive';'
      });
    } finally {;
      }
      setIsExporting(false);
    }
  };
  return (;
    <DropdownMenu>;
      <DropdownMenuTrigger asChild>;
        <Button;
          variant='outline';'
          className='gap-2';'
          disabled={isExporting}
        >;
          {isExporting ? (;
            <Loader2 className='h-4 w-4 animate-spin' />;'
          ) : (;
            <FileText className='h-4 w-4' />;'
          )}
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
          Export PDF;
          <ChevronDown className='h-4 w-4' />;'
        </Button>;
      </DropdownMenuTrigger>;
      <DropdownMenuContent align='end' className='w-56'>;'
        <DropdownMenuLabel>PDF Export Options</DropdownMenuLabel>;
        <DropdownMenuSeparator />;
<<<<<<< HEAD
        <DropdownMenuLabel className='text-xs font-normal text-muted-foreground'>Theme</DropdownMenuLabel>;'
        <DropdownMenuRadioGroup value={theme} onValueChange={(value) => setTheme(value as 'light' | 'dark')}>;'
          <DropdownMenuRadioItem value='light'>Light</DropdownMenuRadioItem>;'
          <DropdownMenuRadioItem value='dark'>Dark</DropdownMenuRadioItem>;'
        </DropdownMenuRadioGroup>;
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">Theme</DropdownMenuLabel>;
        <DropdownMenuRadioGroup value={theme} onValueChange={(value) => setTheme(value as 'light' | 'dark')}>;
          <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>;
          <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>;

        </DropdownMenuRadioGroup>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
        <DropdownMenuSeparator />;
        <DropdownMenuLabel className='text-xs font-normal text-muted-foreground'>Font</DropdownMenuLabel>;'
        <DropdownMenuRadioGroup value={fontFamily} onValueChange={(value) => setFontFamily(value as FontFamily)}>;
          <DropdownMenuRadioItem value='default'>Default</DropdownMenuRadioItem>;'
          <DropdownMenuRadioItem value='montserrat'>Montserrat</DropdownMenuRadioItem>;'
          <DropdownMenuRadioItem value='open-sans'>Open Sans</DropdownMenuRadioItem>;'
          <DropdownMenuRadioItem value='roboto'>Roboto</DropdownMenuRadioItem>;'
        </DropdownMenuRadioGroup>;
<<<<<<< HEAD
        <DropdownMenuSeparator />;
        <DropdownMenuItem onClick={handleExport}>;
          <Download className='h-4 w-4 mr-2' />;'
=======
<<<<<<< HEAD

        <DropdownMenuSeparator />;
        <DropdownMenuItem onClick={handleExport} />;
          <Download className=\"h-4 w-4 mr-2\" />;
=======
<<<<<<< HEAD
        <DropdownMenuSeparator />;
        <DropdownMenuCheckboxItem;
          checked={includePortfolio}
          onCheckedChange={setIncludePortfolio}
        >;
          Include Portfolio Projects;
        </DropdownMenuCheckboxItem>;
=======

        <DropdownMenuSeparator />;
<<<<<<< HEAD
        <DropdownMenuItem onClick={handleExport} />;
          <Download className=\"h-4 w-4 mr-2\" />;
=======
        <DropdownMenuCheckboxItem
          checked={includePortfolio}
          onCheckedChange={setIncludePortfolio}>;
          Include Portfolio Projects;
        </DropdownMenuCheckboxItem>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <DropdownMenuSeparator />;
        <DropdownMenuItem onClick={handleExport}>;
          <Download className="h-4 w-4 mr-2" />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
          Download PDF;
        </DropdownMenuItem>;
      </DropdownMenuContent>;
    </DropdownMenu>;
  );
}
<<<<<<< HEAD
import {useState} from 'react';'
import {Button} from '@/components / ui / button';'
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuCheckboxItem} from '@/components / ui / dropdown - menu';'
=======
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
import {Button} from '@/components / ui / button';'
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuCheckboxItem} from '@/components / ui / dropdown - menu';'
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import {useState} from 'react';
import {Button} from '@/components / ui / button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuCheckboxItem} from '@/components / ui / dropdown - menu';
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/resolved-merge-conflicts
// Use the centralized icon wrapper to avoid missing icon issues;
import {FileText, ChevronDown, Loader2, Download} from '@/components / icons';'
import {Resume} from '@/types / resume';'
import {exportResumeToPDF, ExportOptions} from '@/utils / pdf_export';'
import {toast} from '@/hooks / use - toast';'
import {FontFamily} from '@/utils / pdf / font_config';'
interface PdfExportButtonProps {
  }
  'resume': Resume;
}
export /**
 * PdfExportButton - Function description
 */
function PdfExportButton() {
<<<<<<< HEAD
  }
  const [is_exporting, setIsExporting] = useState (false);
  const [theme, set_theme] = useState<'light' | 'dark'>('light');'
  const [include_portfolio, setIncludePortfolio] = useState (true);
  const [font_family, setFontFamily] = useState < FontFamily>('default');'
;
=======
  const [is_exporting, setIsExporting] = useState (false);
  const [theme, set_theme] = useState<'light' | 'dark'>('light');
<<<<<<< HEAD
  const [include_portfolio, setIncludePortfolio] = useState (true);
=======
<<<<<<< HEAD
  const [include_portfolio, setIncludePortfolio] = useState (true);
=======
  const [include_portfolio, setIncludePortfolio] = useState (true);
  const [font_family, setFontFamily] = useState < FontFamily>('default');
;
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
          onCheckedChange={setIncludePortfolio}
        >;
          Include Portfolio Projects;
        </DropdownMenuCheckboxItem>;
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
<<<<<<< HEAD
};
h-4 w-4"/>) 
}Export PDF <ChevronDown className=" h-4 w-4"/> </Button> </DropdownMenuTrigger> <DropdownMenuContent align=" end"className=" w-56" > <DropdownMenuLabel>PDF Export Options</DropdownMenuLabel> <DropdownMenuSeparator /> </DropdownMenuRadioGroup> <DropdownMenuSeparator /> <DropdownMenuCheckboxItem checked= {
  includePortfolio 
}onCheckedChange= {
  setIncludePortfolio 
}> Include Portfolio Projects </DropdownMenuCheckboxItem> <DropdownMenuSeparator /> Download PDF </DropdownMenuItem> </DropdownMenuContent> </DropdownMenu>) 
}
}
;
}
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
