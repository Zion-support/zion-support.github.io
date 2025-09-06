import React, { useState } from 'react',
import UseTokensModal, { RedemptionType } from './UseTokensModal',

export default function UseTokensButton({ serviceId, defaultType }: { serviceId?: string, defaultType?: RedemptionType }) {
  const [open, setOpen] = useState(false),
  return (
    <>
      <button onClick={() => setOpen(true)} className=&quot;enhanced-button enhanced-button-primary&quot;>Use Tokens</button>
      <UseTokensModal isOpen={open} onClose={() => setOpen(false)} serviceId={serviceId} defaultType={defaultType} />
import React, {_useState} from 'react';
import UseTokensModal, {_RedemptionType} from './UseTokensModal';

export default function UseTokensButton(_{_serviceId, _defaultType}: {_serviceId?: string; defaultType?: RedemptionType}) {_const [open, _setOpen] = useState(false);
  return (_<>
      <button onClick={() => setOpen(true)} className="enhanced-button enhanced-button-primary">Use Tokens</button>
      <UseTokensModal isOpen={_open} onClose={_() => setOpen(false)} serviceId={_serviceId} defaultType={_defaultType} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    </>
  )
}