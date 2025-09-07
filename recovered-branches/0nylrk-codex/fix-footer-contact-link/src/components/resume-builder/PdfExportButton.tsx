import { useState  } from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger;
  DropdownMenuSeparator;
  DropdownMenuLabel;
<<<<<<< HEAD
  DropdownMenuRadioGroup;
  DropdownMenuRadioItem;
  DropdownMenuCheckboxItem } from '@/components/ui/dropdown-menu';'
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
  "resume": Resume
=======
  DropdownMenuRadioGroup;}
  DropdownMenuRadioItem;}
  DropdownMenuCheckboxItem } from '@/components/ui/dropdown-menu';
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuCheckboxItem} from '@/components/ui/dropdown-menu';

import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuCheckboxItem} from '@/components/ui/dropdown-menu';

// Use the centralized icon wrapper to avoid missing icon issues

import { FileText, ChevronDown, Loader2, Download  } from '@/components/icons';
import { Resume  } from '@/types/resume';
import { exportResumeToPDF, ExportOptions  } from '@/utils/pdfExport';
import { toast  } from '@/hooks/use-toast';
import { FontFamily } from '@/utils/pdf/fontConfig';

>>>>>>> origin/chore/fix-lint-and-merge
}

export function PdfExportButton({ resume }: PdfExportButtonProps) {;
  const [isExporting, setIsExporting] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [includePortfolio, setIncludePortfolio] = useState(true);
<<<<<<< HEAD
  const [fontFamily, setFontFamily] = useState<FontFamily>('default');'
import { useState } from 'react';'
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
  "resume": Resume;
}
const [theme, setTheme] = useState<'light' | 'dark'>('light'),;'
const [includePortfolio, setIncludePortfolio] = useState(true),;
const [fontFamily, setFontFamily] = useState<FontFamily>('default'),;'
=======
  const [fontFamily, setFontFamily] = useState<FontFamily>('default');

  const [isExporting, setIsExporting] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light'),

  const [includePortfolio, setIncludePortfolio] = useState(true),
  const [fontFamily, setFontFamily] = useState<FontFamily>('default'),

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
    if (isExporting) return,
    
    setIsExporting(true),
    
    try {
<<<<<<< HEAD
      }
        }
=======
      const options: ExportOptions = {
>>>>>>> origin/chore/fix-lint-and-merge
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

          className="gap-2"
          disabled={isExporting}>;
          {isExporting ? (;
            <Loader2 className="h-4 w-4 animate-spin" />;
          ) : (;
            <FileText className="h-4 w-4" />;
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

;
export function PdfExportButton({ resume }: PdfExportButtonProps) {;
  const [isExporting, setIsExporting] = useState(false),;
<<<<<<< HEAD
=======
  const [theme, setTheme] = useState<'light' | 'dark'>('light'),;
  const [includePortfolio, setIncludePortfolio] = useState(true),;
  const [fontFamily, setFontFamily] = useState<FontFamily>('default'),;
>>>>>>> origin/chore/fix-lint-and-merge
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
      // Create download link and trigger download;
<<<<<<< HEAD
=======
      const url = URL.createObjectURL(pdfBlob),;
      const link = document.createElement('a'),;
>>>>>>> origin/chore/fix-lint-and-merge
      link.href = url,;
      link.download = `${resume.basic_info.title || 'Resume'}.pdf`,;
      document.body.appendChild(link),;
      link.click(),;
      // Clean up;
      document.body.removeChild(link),;
      URL.revokeObjectURL(url),;
      toast({;

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
         />;
          {isExporting ? (;
            <Loader2 className=\"h-4 w-4 animate-spin\" />;
          ) : (;}
            <FileText className=\"h-4 w-4\" />;}
          )}

          Export PDF;
          <ChevronDown className=\"h-4 w-4\" />;
        </Button>;
      </DropdownMenuTrigger>;
      <DropdownMenuContent align=\"end\" className=\"w-56\" />;
        <DropdownMenuLabel />PDF Export Options</DropdownMenuLabel>;
        <DropdownMenuSeparator />;

        <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">Theme</DropdownMenuLabel>;
        <DropdownMenuRadioGroup value={theme} onValueChange={(value) => setTheme(value as 'light' | 'dark')}>;
          <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>;
          <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>;

        </DropdownMenuRadioGroup>;

        <DropdownMenuSeparator />;
        <DropdownMenuLabel className=\"text-xs font-normal text-muted-foreground\" />Font</DropdownMenuLabel>;
        <DropdownMenuRadioGroup value={fontFamily} onValueChange={(value) = /> setFontFamily(value as FontFamily)}>;
          <DropdownMenuRadioItem value=\"default\" />Default</DropdownMenuRadioItem>;
          <DropdownMenuRadioItem value=\"montserrat\" />Montserrat</DropdownMenuRadioItem>;
          <DropdownMenuRadioItem value=\"open-sans\" />Open Sans</DropdownMenuRadioItem>;
          <DropdownMenuRadioItem value=\"roboto\" />Roboto</DropdownMenuRadioItem>;
        </DropdownMenuRadioGroup>;

        <DropdownMenuSeparator />;
        <DropdownMenuItem onClick={handleExport} />;
          <Download className=\"h-4 w-4 mr-2\" />;
          Download PDF;
        </DropdownMenuItem>;
      </DropdownMenuContent>;
    </DropdownMenu>;
  );
}
<<<<<<< HEAD
import {Button} from '@/components / ui / button';'
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuCheckboxItem} from '@/components / ui / dropdown - menu';'
=======
import {useState} from 'react';
import {Button} from '@/components / ui / button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuCheckboxItem} from '@/components / ui / dropdown - menu';
>>>>>>> origin/chore/fix-lint-and-merge
// Use the centralized icon wrapper to avoid missing icon issues;
import {FileText, ChevronDown, Loader2, Download} from '@/components / icons';
import {Resume} from '@/types / resume';
import {exportResumeToPDF, ExportOptions} from '@/utils / pdf_export';
import {toast} from '@/hooks / use - toast';
import {FontFamily} from '@/utils / pdf / font_config';
interface PdfExportButtonProps {}
  resume: Resume;}
}
export /**
 * PdfExportButton - Function description;
 */
function PdfExportButton() {
  const [is_exporting, setIsExporting] = useState (false);
  const [theme, set_theme] = useState<'light' | 'dark'>('light');
  const [include_portfolio, setIncludePortfolio] = useState (true);