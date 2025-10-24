import React from 'react';
<<<<<<< HEAD
export const testRunner = () => {
  return null;
};
=======

interface testRunnerProps {
  className?: string;
  children?: React.ReactNode;
}

const testRunner: React.FC<testRunnerProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'testrunner ' + className}>
      {children || <p>testRunner component</p>}
    </div>
  );
};

export default testRunner;
>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
