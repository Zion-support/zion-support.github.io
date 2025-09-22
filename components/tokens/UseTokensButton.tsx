
export default function UseTokensButton({
origin/cursor/automate-test-improve-and-merge-code-2533
  serviceId
  defaultType
}: {
  serviceId?: string;
  defaultType?: RedemptionType;
}) {
origin/cursor/automate-test-improve-and-merge-code-2533
        Use Tokens;
      </button>;
      <UseTokensModal;
        isOpen = {open}
        onClose={() = /> setOpen(false)}
        serviceId={serviceId}
        defaultType={defaultType}
  ;
  const [open, setOpen] = useState(false)return (<>;
      <button;
        onClick={() = /> setOpen(true)}"
        className=\"enhanced-button enhanced-button-primary\">

        Use Tokens;
      </button>;
      <UseTokensModal;
        isOpen={open}
        onClose={() = /> setOpen(false)}
        serviceId={serviceId}
        defaultType={defaultType}
      />;
    </>);
origin/cursor/automate-test-improve-and-merge-code-2533
