"use client";
import React{ useState } from 'react';
import UseTokensModal{ RedemptionType } from './UseTokensModal';

export default function UseTokensButton({ serviceIdefaultType }: { serviceId?: string; defaultType?: RedemptionType }) {
  const [opensetOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)} className="enhanced-button enhanced-button-primary">Use Tokens</button>
      <UseTokensModal isOpen={open} onClose={() => setOpen(false)} serviceId={serviceId} defaultType={defaultType} />
    </>
  );
}