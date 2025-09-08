
export function PdfExportButton({ resume }: PdfExportButtonProps) {
  const [isExporting, setIsExporting] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light'),
  const [includePortfolio, setIncludePortfolio] = useState(true);
  const [fontFamily, setFontFamily] = useState<FontFamily>('default'),

  const handleExport = null;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className="gap-2"
          disabled={isExporting}>{isExporting ? (
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
;
