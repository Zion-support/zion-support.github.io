import React, { useState } from 'react';
import UseTokensModal, { RedemptionType } from './UseTokensModal';
  const [open, setOpen] = useState(false),
  return (
    <>
      <button onClick={() => setOpen(true)} className="enhanced-button enhanced-button-primary">Use Tokens</button>
      <UseTokensModal isOpen={open} onClose={() => setOpen(false)} serviceId={serviceId} defaultType={defaultType} />
    </>
  ),

=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
