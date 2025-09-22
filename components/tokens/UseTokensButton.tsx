<<<<<<< HEAD
"use client";
import React{ useState } from 'react';
import UseTokensModal{ RedemptionType } from './UseTokensModal';

export default function UseTokensButton({ serviceIdefaultType }: { serviceId?: string; defaultType?: RedemptionType }) {
  const [opensetOpen] = useState(false);
=======
import React, { useState } from 'react';
import UseTokensModal, { RedemptionType } from './UseTokensModal';

export default function UseTokensButton({ serviceId, defaultType }: { serviceId?: string; defaultType?: RedemptionType }) {
  const [open, setOpen] = useState(false);
>>>>>>> origin/auto/autonomy-17186719616
  return (
    <>
      <button onClick={() => setOpen(true)} className="enhanced-button enhanced-button-primary">Use Tokens</button>
      <UseTokensModal isOpen={open} onClose={() => setOpen(false)} serviceId={serviceId} defaultType={defaultType} />
    </>
  );
}