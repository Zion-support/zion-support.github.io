import React, { useState } from 'react';
import UseTokensModal, { RedemptionType } from './UseTokensModal';

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default function UseTokensButton({
  serviceId,
  defaultType,
}: {
  serviceId?: string;
  defaultType?: RedemptionType;
}) {
<<<<<<< HEAD
=======
=======
export default function UseTokensButton({ serviceId, defaultType }: { serviceId?: string, defaultType?: RedemptionType }) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className='enhanced-button enhanced-button-primary'
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
<<<<<<< HEAD
  );
=======
  );
<<<<<<< HEAD
=======
export default function UseTokensButton({ serviceId, defaultType }: { serviceId?: string, defaultType?: RedemptionType }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)} className="enhanced-button enhanced-button-primary">Use Tokens</button>
      <UseTokensModal isOpen={open} onClose={() => setOpen(false)} serviceId={serviceId} defaultType={defaultType} />
    </>
  );
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
