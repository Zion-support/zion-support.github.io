<<<<<<< HEAD
<<<<<<< HEAD


=======
import React, { useState } from 'react';
import UseTokensModal, { RedemptionType } from './UseTokensModal';
export default function UseTokensButton({ serviceId, defaultType }: { serviceId?: string, defaultType?: RedemptionType }) {
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
export default function UseTokensButton({
  serviceId
  defaultType
}: {
  serviceId?: string;
  defaultType?: RedemptionType;
}) {
origin/cursor/automate-test-improve-and-merge-code-2533

  );
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}"
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
<<<<<<< HEAD

"
=======
</>) 
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
  const [open, setOpen] = useState(false);
  return (
      <UseTokensModal
        isOpen={open}
        onClose={() => setOpen(false)}
        serviceId={serviceId}
        defaultType={defaultType}
      />
    </>
  );
}
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
