<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

<<<<<<< HEAD
interface errorHandlerProps {
=======
interface ErrorhandlerxProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
  className?: string;
}

<<<<<<< HEAD
<<<<<<< HEAD
export default function errorHandler({ className = '', children }: errorHandlerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
=======
export default function Component() {
  return (
    <div>
      <h1>Component</h1>
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
const Errorhandlerx: React.FC<ErrorhandlerxProps> = ({ className = "" }) => {
  return (
    <div className={className}>
      <h2>Errorhandlerx</h2>
    </div>
  );
};
=======

import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c

export default Errorhandlerx;
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
=======
export default function Errorhandler({ className = '', children, ...props }: ErrorhandlerProps) {
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
