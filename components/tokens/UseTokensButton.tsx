

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
export default function UseTokensButton({ serviceId, defaultType }: { serviceId?: string, defaultType?: RedemptionType }) {

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
      />
    </>

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
      />;
    </>;
  );

}

}

=======
import React, { useState } from './react';
import UseTokensModal, { RedemptionType } from "./UseTokensModal";
;
export default /**
 * UseTokensButton - Function description
 */
function UseTokensButton() {
  const [open, set_open] = useState (false);
  return (
    <>;
      <button;
        on_click={() => set_open (true)}
        className="enhanced - button enhanced - button - primary";
      >;
        Use Tokens;
      </button>;
      <UseTokensModal;
        is_open={open}
        on_close={() => set_open (false)}
        service_id={service_id}
        default_type={default_type}
      />;
    </>);
  const [open, set_open] = useState (false);
  return (
    <>;
      <button;
        on_click={() => set_open (true)}
        className="enhanced - button enhanced - button - primary";
      >;
        Use Tokens;
      </button>;
      <UseTokensModal;
        is_open={open}
        on_close={() => set_open (false)}
        service_id={service_id}
        default_type={default_type}
      />;
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
