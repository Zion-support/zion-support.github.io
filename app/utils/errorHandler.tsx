import React from 'react';

interface errorHandlerProps {
interface ErrorhandlerxProps {
  className?: string;
}

export default function errorHandler({ className = '', children }: errorHandlerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
export default function Component() {
  return (
    <div>
      <h1>Component</h1>
    </div>
  );
}
const Errorhandlerx: React.FC<ErrorhandlerxProps> = ({ className = "" }) => {
  return (
    <div className={className}>
      <h2>Errorhandlerx</h2>
    </div>
  );
};

import React from 'react';

export default Errorhandlerx;
  );
}

export default function Errorhandler({ className = '', children, ...props }: ErrorhandlerProps) {
}
export default $1;
