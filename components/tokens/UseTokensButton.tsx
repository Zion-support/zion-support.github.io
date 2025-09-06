<<<<<<< HEAD
import React, { useState } from 'react';
import UseTokensModal, { RedemptionType } from './UseTokensModal';
export default function UseTokensButton({ serviceId, defaultType }: { serviceId?: string, defaultType?: RedemptionType }) {
=======
import React, { useState } from "react";
import UseTokensModal, { RedemptionType } from "./UseTokensModal";
export default function UseTokensButton({
  serviceId
  defaultType
}: {
  serviceId?: string;
  defaultType?: RedemptionType;
}) {
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="enhanced-button enhanced-button-primary"
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
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="enhanced-button enhanced-button-primary"
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