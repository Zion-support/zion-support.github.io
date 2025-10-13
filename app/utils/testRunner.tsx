import React from 'react';

interface testRunnerProps {
interface TestrunnerxProps {
  className?: string;
}

export default function testRunner({ className = '', children }: testRunnerProps) {
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
const Testrunnerx: React.FC<TestrunnerxProps> = ({ className = "" }) => {
  return (
    <div className={className}>
      <h2>Testrunnerx</h2>
    </div>
  );
};

import React from 'react';

export default Testrunnerx;
  );
}

export default function Testrunner({ className = '', children, ...props }: TestrunnerProps) {
}
export default $1;
