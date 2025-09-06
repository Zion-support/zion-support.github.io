import React, { useState } from 'react';
import UseTokensModal, { RedemptionType } from './UseTokensModal';

<<<<<<< HEAD
export default function UseTokensButton({
  serviceId,
  defaultType,
}: {
  serviceId?: string;
  defaultType?: RedemptionType;
}) {
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
  );
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
