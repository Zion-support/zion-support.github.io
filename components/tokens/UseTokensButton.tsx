
<<<<<<< HEAD
<<<<<<< HEAD
export default function UseTokensButton({

=======


=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React, { useState } from "react";
import UseTokensModal, { RedemptionType } from "./UseTokensModal";
export default function UseTokensButton(): any ({;
  serviceId,;
  defaultType,;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}: {;
export default function UseTokensButton({
serviceId
=======
import React, { useState } from "react";
import UseTokensModal, { RedemptionType } from "./UseTokensModal";
import React, { useState } from "react";
import UseTokensModal, { RedemptionType } from "./UseTokensModal";

export default function UseTokensButton({
  serviceId
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  defaultType
}: {

  serviceId?: string;
  defaultType?: RedemptionType;
}) {;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
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
=======

=======
export default function UseTokensButton({ serviceId, defaultType }: { serviceId?: string, defaultType?: RedemptionType }) {

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
      />
    </>

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
export default function UseTokensButton({ serviceId, defaultType }: { serviceId?: string, defaultType?: RedemptionType }) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
);
  );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

}

}

=======
=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
    </>
  )

}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
