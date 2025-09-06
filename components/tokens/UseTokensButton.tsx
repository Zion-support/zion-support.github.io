<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import React, { useState } from "react";
import UseTokensModal, { RedemptionType } from "./UseTokensModal";
import React, { useState } from "react";
import UseTokensModal, { RedemptionType } from "./UseTokensModal";

export default function UseTokensButton({
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======

export default function UseTokensButton({
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

export default function UseTokensButton({
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  serviceId
  defaultType
}: {
  serviceId?: string;
  defaultType?: RedemptionType;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}) {

  serviceId,
  defaultType,
}: {;
export default function UseTokensButton({
serviceId
  defaultType
}: {

  serviceId?: string;
  defaultType?: RedemptionType;
}) {;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
}) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}) {
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
  );
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
      <UseTokensModal
        isOpen={open}
        onClose={() => setOpen(false)}
        serviceId={serviceId}
        defaultType={defaultType}
      />
    </>
  );
<<<<<<< HEAD
<<<<<<< HEAD
  const [open, setOpen] = useState(false);
  return (
    <>;
      <button;
        on_click={() => set_open (true)}
        className="enhanced - button enhanced-button-primary";
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
        className="enhanced - button enhanced-button-primary";
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
