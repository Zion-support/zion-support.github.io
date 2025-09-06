<<<<<<< HEAD

import React, { useState } from "react";
import UseTokensModal, { RedemptionType } from "./UseTokensModal";
=======
import React, { useState } from "react";
import UseTokensModal, { RedemptionType } from "./UseTokensModal";

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export default function UseTokensButton({
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
<<<<<<< HEAD
);
=======
  );
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
  );
>>>>>>> main
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
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
