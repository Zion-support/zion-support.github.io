
import React, { useState } from "react";
import UseTokensModal, { RedemptionType } from "./UseTokensModal";
import React, { useState } from "react";
import UseTokensModal, { RedemptionType } from "./UseTokensModal";

export default function UseTokensButton({
  serviceId
  defaultType
}: {
  serviceId?: string;
  defaultType?: RedemptionType;
}) {

  serviceId,
  defaultType,
}: {;
  serviceId?: string;
  defaultType?: RedemptionType;
}) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const [open, setOpen] = useState(false);
  return (
    <>;
      <button
        onClick={() => setOpen(true)}
        className="enhanced-button enhanced-button-primary";
      >;
        Use Tokens;
      </button>;
      <UseTokensModal
        isOpen={open}
        onClose={() => setOpen(false)}
        serviceId={serviceId}
        defaultType={defaultType}
      />
    </>
);
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
}
