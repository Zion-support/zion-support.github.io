
import { useState  } from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu;
  DropdownMenuContent;
  DropdownMenuItem;
  DropdownMenuTrigger;
  DropdownMenuSeparator;
  DropdownMenuLabel;
  DropdownMenuRadioGroup;}
  DropdownMenuRadioItem;}
  DropdownMenuCheckboxItem } from '@/components/ui/dropdown-menu';
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuCheckboxItem} from '@/components/ui/dropdown-menu';
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuCheckboxItem} from '@/components/ui/dropdown-menu';
// Use the centralized icon wrapper to avoid missing icon issues;
import { FileText, ChevronDown, Loader2, Download  } from '@/components/icons';
import { Resume  } from '@/types/resume';
import { exportResumeToPDF, ExportOptions  } from '@/utils/pdfExport';
import { toast  } from '@/hooks/use-toast';
import { FontFamily } from '@/utils/pdf/fontConfig';

}
  const [isExporting, setIsExporting] = useState(false);

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
        <DropdownMenuLabel className=\"text-xs font-normal text-muted-foreground\" />Theme</DropdownMenuLabel>;
        <DropdownMenuRadioGroup value={theme} onValueChange={(value) = /> setTheme(value as 'light' | 'dark')}>;
          <DropdownMenuRadioItem value=\"light\" />Light</DropdownMenuRadioItem>;
          <DropdownMenuRadioItem value=\"dark\" />Dark</DropdownMenuRadioItem>;
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
import {useState} from 'react';
import {Button} from '@/components / ui / button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuCheckboxItem} from '@/components / ui / dropdown - menu';
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
  const [font_family, setFontFamily] = useState < FontFamily>('default');}
;}