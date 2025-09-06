<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import UseTokensModal, { RedemptionType } from './UseTokensModal';
<<<<<<< HEAD
export default function UseTokensButton({ serviceId, defaultType }: { serviceId?: string, defaultType?: RedemptionType }) {
=======
import React, { useState } from "react";
import UseTokensModal, { RedemptionType } from "./UseTokensModal";
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

import React, { useState } from "react";
import UseTokensModal, { RedemptionType } from "./UseTokensModal";
=======
import React, { useState } from "react";
import UseTokensModal, { RedemptionType } from "./UseTokensModal";

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
export default function UseTokensButton({
<<<<<<< HEAD
  serviceId
  defaultType
}: {
  serviceId?: string;
  defaultType?: RedemptionType;
}) {

=======
  serviceId,
  defaultType,
}: {;
  serviceId?: string;
  defaultType?: RedemptionType;
}) {
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
<<<<<<< HEAD
);
=======
  );
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
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
<<<<<<< HEAD
}
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
}
=======
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
