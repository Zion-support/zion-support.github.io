import React from 'react';

interface servicesProps {
interface ServicesProps {
  className?: string;
}

export default function services({ className = '', children }: servicesProps) {
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
const Services: React.FC<ServicesProps> = ({ className = "" }) => {
  return (
    <div className={className}>
      <h2>Services</h2>
    </div>
  );
};

import React from 'react';

export default Services;
  );
}

export default function Services({ className = '', children, ...props }: ServicesProps) {
}
export default $1;
