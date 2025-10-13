<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

<<<<<<< HEAD
interface servicesProps {
=======
interface ServicesProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
  className?: string;
}

<<<<<<< HEAD
<<<<<<< HEAD
export default function services({ className = '', children }: servicesProps) {
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
const Services: React.FC<ServicesProps> = ({ className = "" }) => {
  return (
    <div className={className}>
      <h2>Services</h2>
    </div>
  );
};
=======

import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c

<<<<<<< HEAD
export default Services;
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
=======
export default function Services({ className = '', children, ...props }: ServicesProps) {
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
=======
export default $1;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-f847
