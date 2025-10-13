<<<<<<< HEAD
import React from 'react';

<<<<<<< HEAD
interface testRunnerProps {
=======
interface TestrunnerxProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
  className?: string;
}

<<<<<<< HEAD
export default function testRunner({ className = '', children }: testRunnerProps) {
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
const Testrunnerx: React.FC<TestrunnerxProps> = ({ className = "" }) => {
  return (
    <div className={className}>
      <h2>Testrunnerx</h2>
    </div>
  );
};

export default Testrunnerx;
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
