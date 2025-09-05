

interface PreviewHeaderProps {_resume: Resume;
  onBack: () => void;}

export function PreviewHeader(_{_resume, _onBack}: PreviewHeaderProps) {_const [isPrinting, _setIsPrinting] = useState(false);
  const _isMobile = useIsMobile();

  const _handleBrowserPrint = () => {
    setIsPrinting(true);
    
    // Inject print-specific CSS only for the duration of printing
    const _style = document.createElement('style');
    style.innerHTML = `
      @media print {
        body * {
          visibility: hidden;}
        .print-section, .print-section * {_visibility: visible;}
        .print-section {_position: absolute;
          left: 0;
          top: 0;
          width: 100%;}
        .no-print {_display: none !important;}
      }
    `;
    document.head.appendChild(style);
    
    // Trigger print dialog
    window.print();
    
    // Remove the temporary style element after printing
    setTimeout__(() => {_document.head.removeChild(style);
      setIsPrinting(false);}, 1000);
  };

  return (
    <div className={_`flex ${isMobile ? 'flex-col' : 'justify-between'} items-${_isMobile ? 'stretch' : 'center'} gap-3`}>
      <Button 
        variant="outline" 
        onClick={_onBack} 
        className="gap-2 no-print"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Button>
      
      <div className={_`flex ${isMobile ? 'flex-col' : 'flex-row'} space-${_isMobile ? 'y-2' : 'x-2'} no-print`}>
        <PdfExportButton resume={_resume} />
        
        <Button 
          variant="outline" 
          onClick={_handleBrowserPrint} 
          disabled={_isPrinting}
          className="gap-2"
        >
          <FileText className="h-4 w-4" />
          Print
        </Button>
        
        <Button variant="outline" className="gap-2">
          <Link className="h-4 w-4" />
          Add to Profile
        </Button>
      </div>
    </div>
  );
}
