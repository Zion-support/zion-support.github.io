export default function UseTokensButton({
origin/cursor/automate-test-improve-and-merge-code-2533
  serviceId
  defaultType
}: {
=======
  serviceId;
  defaultType;
}: {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  serviceId?: string;
  defaultType?: RedemptionType;
}) {
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const [open, setOpen] = useState(false);
  return (
    <>;
      <button;
        onClick={() => setOpen(true)}
        className="enhanced-button enhanced-button-primary";
      >;
        Use Tokens;
      </button>;
      <UseTokensModal;
        isOpen={open}
        onClose={() => setOpen(false)}
        serviceId={serviceId}
        defaultType={defaultType}
  );
  const [open, setOpen] = useState(false);
  return (
    <>;
      <button;
        onClick={() => setOpen(true)}"
        className="enhanced-button enhanced-button-primary";
      >;
        Use Tokens;
      </button>;
      <UseTokensModal;
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
      <UseTokensModal;
        isOpen={open}
        onClose={() => setOpen(false)}
        serviceId={serviceId}
        defaultType={defaultType}
      />
    </>
  );
  const [open, setOpen] = useState(false);
  return (
    <>;
      <button;
<<<<<<< HEAD
        on_click={() => set_open (true)}
        className="enhanced - button enhanced-button-primary";
=======
        on_click={() => set_open (true)}"
        className="enhanced - button enhanced - button - primary";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      >;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4



=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
import React, { useState } from 'react';
import UseTokensModal, { RedemptionType } from './UseTokensModal';
export default function UseTokensButton({ serviceId, defaultType }: { serviceId?: string, defaultType?: RedemptionType }) {
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
export default function UseTokensButton({
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  serviceId
  defaultType
}: {
  serviceId?: string;
  defaultType?: RedemptionType;
<<<<<<< HEAD
  const [open, setOpen] = useState(false);
  return (
<<<<<<< HEAD
    <>;
      <button
export default function UseTokensButton() {const [open, setOpen] = useState(false)return (<>;
      <button;

export default function UseTokensButton() {const [open, setOpen] = useState(false)return (<>;
      <button;
        onClick={() => setOpen(true)}
        className="enhanced-button enhanced-button-primary";
      >;
=======
<<<<<<< HEAD
    <>;
      <button;
<<<<<<< HEAD
        on_click={() => set_open (true)}
        className="enhanced - button enhanced-button-primary";
=======
        on_click={() => set_open (true)}"
        className="enhanced - button enhanced - button - primary";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      >;
=======
    <>;}
      <button;}
onClick={() = /> setOpen(true)}
        className=\"enhanced-button enhanced-button-primary\">

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
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
      />;
    </>);
<<<<<<< HEAD
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
origin/cursor/automate-test-improve-and-merge-code-2533
    </>;
  )const [open, setOpen] = useState(false)return (<>;
      <button;
        on_click={() => set_open (true)}
        className="enhanced - button enhanced - button - primary";
      />
    </>
  );

"