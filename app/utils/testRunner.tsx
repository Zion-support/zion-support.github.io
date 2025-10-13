import React from 'react';

<<<<<<< HEAD
interface testRunnerProps {
  className?: string;
  children?: React.ReactNode;
}

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
