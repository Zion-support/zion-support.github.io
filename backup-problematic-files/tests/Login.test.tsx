import React from 'react';

interface Login.testProps {
  className?: string;
}

const Login.test: React.FC<Login.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Login.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

<<<<<<< HEAD
export default Login.test;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
