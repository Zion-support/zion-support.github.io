<<<<<<< HEAD



export default function UseTokensButton() {
  }
  const [open, setOpen] = useState(false);
return (;
    <>;
      <button,
onClick={() => setOpen(true)}
        className="enhanced-button enhanced-button-primary">"

        Use Tokens;
      </button>;
      <UseTokensModal
        isOpen={open}
        onClose={() => setOpen(false)}
        serviceId={serviceId}
        defaultType={defaultType}
  ;
  const [open, setOpen] = useState(false)return (<>;
      <button;
        onClick={() => setOpen(true)}
        className="enhanced-button enhanced-button-primary">"

        Use Tokens;
      </button>;
      <UseTokensModal;
        isOpen={open}
        onClose={() => setOpen(false)}
        serviceId={serviceId}
        defaultType={defaultType}
      />;
    </>);
<<<<<<< HEAD
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
origin/cursor/automate-test-improve-and-merge-code-2533
    </>;
  )const [open, setOpen] = useState(false)return (<>;
      <button;
        on_click={() => set_open (true)}
        className="enhanced - button enhanced - button - primary";
      />
    </>
  );

"
=======
import React, { useState } from 'react';
import UseTokensModal, { RedemptionType } from './UseTokensModal';
export default function UseTokensButton({ serviceId, defaultType }: { serviceId?: string, defaultType?: RedemptionType }) {
  const [open, setOpen] = useState($2);
  return (
    <>
      <button onClick={() => setOpen(true)} className="enhanced-button enhanced-button-primary">Use Tokens</button>
      <UseTokensModal isOpen={open} onClose={() => setOpen(false)} serviceId={serviceId} defaultType={defaultType} />
    </>
  )
}
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
