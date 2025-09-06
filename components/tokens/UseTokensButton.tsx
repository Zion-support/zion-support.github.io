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

<<<<<<< HEAD
import React, { useState } from "react";
import UseTokensModal, { RedemptionType } from "./UseTokensModal";
import React, { useState } from "react";
import UseTokensModal, { RedemptionType } from "./UseTokensModal";

<<<<<<< HEAD
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
export default function UseTokensButton({
serviceId
  defaultType
}: {

  serviceId?: string;
  defaultType?: RedemptionType;
}) {;
=======

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

=======
export default function UseTokensButton({ serviceId, defaultType }: { serviceId?: string, defaultType?: RedemptionType }) {

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
      />
    </>

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD
    <>
      <button
        onClick={() => setOpen(true)}
        className="enhanced-button enhanced-button-primary"
      >
        Use Tokens
      </button>
=======
    <>;
      <button
        onClick={() => setOpen(true)}
        className="enhanced-button enhanced-button-primary";
      >;
        Use Tokens;
      </button>;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      <UseTokensModal
        isOpen={open}
        onClose={() => setOpen(false)}
        serviceId={serviceId}
        defaultType={defaultType}
<<<<<<< HEAD
      />
    </>
  );
  const [open, setOpen] = useState(false);
=======
      />;
    </>;
  );
import React, { useState } from './react';
import UseTokensModal, { RedemptionType } from "./UseTokensModal";
;
export default /**
 * UseTokensButton - Function description
 */
function UseTokensButton() {
  const [open, set_open] = useState (false);
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD
    </>
  )

}
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
