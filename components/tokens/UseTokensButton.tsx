<<<<<<< HEAD



=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
import React, { useState } from 'react';
import UseTokensModal, { RedemptionType } from './UseTokensModal';
export default function UseTokensButton({ serviceId, defaultType }: { serviceId?: string, defaultType?: RedemptionType }) {
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
export default function UseTokensButton({
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  serviceId
  defaultType
}: {
  serviceId?: string;
  defaultType?: RedemptionType;
<<<<<<< HEAD
  const [open, setOpen] = useState(false);
  return (
    <>;
      <button
export default function UseTokensButton() {const [open, setOpen] = useState(false)return (<>;
      <button;

export default function UseTokensButton() {const [open, setOpen] = useState(false)return (<>;
      <button;
        onClick={() => setOpen(true)}
        className="enhanced-button enhanced-button-primary";
      >;
        Use Tokens;
      </button>;
      <UseTokensModal
        isOpen={open}
        onClose={() => setOpen(false)}
        serviceId={serviceId}
        defaultType={defaultType}
  );
  const [open, setOpen] = useState(false);
  return (
    <>;
      <button
        onClick={() => setOpen(true)}
        className="enhanced-button enhanced-button-primary";
      >;
        Use Tokens;
      </button>;
      <UseTokensModal
        isOpen={open}
        onClose={() => setOpen(false)}
        serviceId={serviceId}
        defaultType={defaultType}
      />
    </>
);
  );
  const [open, setOpen] = useState(false);
  return (
      <UseTokensModal
        isOpen={open}
        onClose={() => setOpen(false)}
        serviceId={serviceId}
        defaultType={defaultType}
      />;
    </>;
  )const [open, setOpen] = useState(false)return (<>;
      <button;
        on_click={() => set_open (true)}
        className="enhanced - button enhanced - button - primary";
      />
    </>
  );

  const [open, setOpen] = useState(false);
  return (
    <>;
      />;
    </>;
  )const [open, setOpen] = useState(false)return (<>;
      <button;
        on_click={() => set_open (true)}
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
    </>);
  const [open, set_open] = useState (false);
  return (
    <>;
      <button;
        on_click={() => set_open (true)}
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
    </>);
=======
}) {
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75

    </>)
import React, { useState } from 'react';
import UseTokensModal, { RedemptionType } from './UseTokensModal';
export default function UseTokensButton({ serviceId, defaultType }: { serviceId?: string, defaultType?: RedemptionType }) {
  const [open, setOpen] = useState($2);
  return (
    <>
<<<<<<< HEAD
      <button onClick={() => setOpen(true)} className="enhanced-button enhanced-button-primary">Use Tokens</button>
      <UseTokensModal isOpen={open} onClose={() => setOpen(false)} serviceId={serviceId} defaultType={defaultType} />
    </>
  )
}
=======
      <button
        onClick={() => setOpen(true)}"
        className="enhanced-button enhanced-button-primary"
      >
        Use Tokens
      </button>
      <UseTokensModal
        isOpen={open}
        onClose={() => setOpen(false)}
        serviceId={serviceId}
        defaultType={defaultType}
      />
    </>
  );
<<<<<<< HEAD

"
=======
</>) 
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
  const [open, setOpen] = useState(false);
  return (
      <UseTokensModal
        isOpen={open}
        onClose={() => setOpen(false)}
        serviceId={serviceId}
        defaultType={defaultType}
      />
    </>
  );
}
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
