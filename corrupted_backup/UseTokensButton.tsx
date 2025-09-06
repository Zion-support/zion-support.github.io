<<<<<<< HEAD
import React, { useState } from 'react';
import UseTokensModal, { RedemptionType } from './UseTokensModal';

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
}
=======
 </>) 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
