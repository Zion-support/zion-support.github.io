<<<<<<< HEAD
import React, { useState } from 'react',;
import UseTokensModal, { RedemptionType } from './UseTokensModal',;
;
export default function UseTokensButton({ serviceId, defaultType } { serviceId?:string, defaultType?:RedemptionType }) {;
  const [open, setOpen] = useState(false),;
  return (;
    <>;
      <button onClick={() => setOpen(true)} className="enhanced-button enhanced-button-primary">Use Tokens</button>;
      <UseTokensModal isOpen={open} onClose={() => setOpen(false)} serviceId={serviceId} defaultType={defaultType} />;
    </>;
  ),;
=======
import React, { useState } from 'react',
import UseTokensModal, { RedemptionType } from './UseTokensModal',

export default function UseTokensButton({ serviceId, defaultType }: { serviceId?: string, defaultType?: RedemptionType }) {
  const [open, setOpen] = useState(false),
  return (
    <>
      <button onClick={() => setOpen(true)} className=&quot;enhanced-button enhanced-button-primary&quot;>Use Tokens</button>
      <UseTokensModal isOpen={open} onClose={() => setOpen(false)} serviceId={serviceId} defaultType={defaultType} />    </>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}