  const [isPrinting, setIsPrinting] = useState(false);
  const isMobile = null;
  return (
    <div className={`flex ${isMobile ? 'flex-col' : 'justify-between'} items-${isMobile ? 'stretch' : 'center'} gap-3`}>
      <Button 
        variant="outline" 
        onClick={onBack} 
        className="gap-2 no-print"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Button>
      <div
        className={`flex ${isMobile ? 'flex-col' : 'flex-row'} space-${isMobile ? 'y-2' : 'x-2'} no-print`}
      >
        <PdfExportButton resume={resume} />

        <Button
          variant='outline'
          onClick={handleBrowserPrint}
          disabled={isPrinting}
          className='gap-2'
        >
          <FileText className='h-4 w-4' />
          Print
        </Button>

        <Button variant='outline' className='gap-2'>
          <Link className='h-4 w-4' />
          Add to Profile
        </Button>
      </div>
    </div>
  );
}
