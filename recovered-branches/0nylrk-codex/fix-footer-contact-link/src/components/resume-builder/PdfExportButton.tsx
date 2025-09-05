
import {_DropdownMenu, _DropdownMenuContent, _DropdownMenuItem, _DropdownMenuTrigger, _DropdownMenuSeparator, _DropdownMenuLabel, _DropdownMenuRadioGroup, _DropdownMenuRadioItem, _DropdownMenuCheckboxItem} from '@/components/ui/dropdown-menu';
// Use the centralized icon wrapper to avoid missing icon issues

interface PdfExportButtonProps {_resume: Resume;}

export function PdfExportButton(_{_resume}: PdfExportButtonProps) {_const [isExporting, _setIsExporting] = useState(false);
  const [theme, _setTheme] = useState<'light' | 'dark'>('light');
  const [includePortfolio, _setIncludePortfolio] = useState(true);
  const [fontFamily, _setFontFamily] = useState<FontFamily>('default');

  const _handleExport = async () => {
    if (isExporting) return;
    
    setIsExporting(true);
    
    try {
      const options: ExportOptions = {
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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className="gap-2"
          disabled={_isExporting}
        >
          {_isExporting ? (
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
        </DropdownMenuRadioGroup>
        
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem 
          checked={_includePortfolio}
          onCheckedChange={_setIncludePortfolio}
        >
          Include Portfolio Projects
        </DropdownMenuCheckboxItem>
        
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={_handleExport}>
          <Download className="h-4 w-4 mr-2" />
          Download PDF
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
