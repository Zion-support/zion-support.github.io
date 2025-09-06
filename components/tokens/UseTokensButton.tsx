import React, { useState } from 'react';
import UseTokensModal, { RedemptionType } from './UseTokensModal';

export default function UseTokensButton({
  serviceId,
  defaultType,
}: {
  serviceId?: string;
  defaultType?: RedemptionType;
}) {
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
  );
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
