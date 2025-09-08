

  resume: Resume;
  onBack: () => void;
}



  const [isPrinting, setIsPrinting] = useState(false);


interface PreviewHeaderProps {;
  resume: Resume,;
  onBack: () => void;
}
export function PreviewHeader(): any ({ resume, onBack }: PreviewHeaderProps) {;
  const [isPrinting, setIsPrinting] = useState(false);
  const handleBrowserPrint = () => {;
    setIsPrinting(true);
    // Inject print-specific CSS only for the duration of printing;
    const style = document && document.createElement('style');
    style && style.innerHTML = `;
      @media print {;
        body * {;

          visibility: hidden;




        .no - print {
          display: none !important;
        }
      }

    `,
    document.head.appendChild(style),
    `,
    document.head.appendChild(style),


    



          disabled={isPrinting}
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



