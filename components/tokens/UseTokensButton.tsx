<<<<<<< HEAD

export default function UseTokensButton() {const [open, setOpen] = useState(false)return (<>;
      <button;
=======


export default function UseTokensButton({
  serviceId
  defaultType
}: {
  serviceId?: string;
  defaultType?: RedemptionType;

}) {
  const [open, setOpen] = useState(false);
  return (
    <>;
      <button
>>>>>>> aab6cad50d24864653d33f46d023039adfa50215
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
=======
      />
    </>
  );

>>>>>>> aab6cad50d24864653d33f46d023039adfa50215
