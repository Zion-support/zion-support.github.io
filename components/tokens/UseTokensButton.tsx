
<<<<<<< HEAD
export default function UseTokensButton({
origin/cursor/automate-test-improve-and-merge-code-2533
  serviceId
  defaultType
}: {
  serviceId?: string;
  defaultType?: RedemptionType;
}) {
origin/cursor/automate-test-improve-and-merge-code-2533
  const [open, setOpen] = useState(false);
  return (
    <>;
      <button
=======
export default function UseTokensButton() {const [open, setOpen] = useState(false)return (<>;
      <button;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
        onClick={() => setOpen(true)}
        className="enhanced-button enhanced-button-primary";
      >;
        Use Tokens;
      </button>;
      <UseTokensModal;
        isOpen={open}
        onClose={() => setOpen(false)}
        serviceId={serviceId}
        defaultType={defaultType}
  )const [open, setOpen] = useState(false)return (<>;
      <button;
        onClick={() => setOpen(true)}
        className="enhanced-button enhanced-button-primary";
      >;
        Use Tokens;
      </button>;
      <UseTokensModal;
        isOpen={open}
        onClose={() => setOpen(false)}
        serviceId={serviceId}
        defaultType={defaultType}
      />;
    </>;
)))const [open, setOpen] = useState(false)return (<UseTokensModal;
        isOpen={open}
        onClose={() => setOpen(false)}
        serviceId={serviceId}
        defaultType={defaultType}
<<<<<<< HEAD
      />
    </>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
=======
      />;
    </>;
  )const [open, setOpen] = useState(false)return (<>;
      <button;
        on_click={() => set_open (true)}
        className="enhanced - button enhanced - button - primary";
        className="enhanced - button enhanced-button-primary";
      >;
        Use Tokens;
      </button>;
      <UseTokensModal;
        is_open={open}
        on_close={() => set_open (false)}
        service_id={service_id}
        default_type={default_type}
      />;
    </>)const [open, set_open] = useState (false)return (<>;
      <button;
        on_click={() => set_open (true)}
        className="enhanced - button enhanced - button - primary";
        className="enhanced - button enhanced-button-primary";
      >;
        Use Tokens;
      </button>;
      <UseTokensModal;
        is_open={open}
        on_close={() => set_open (false)}
        service_id={service_id}
        default_type={default_type}
      />;
    </>)
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
