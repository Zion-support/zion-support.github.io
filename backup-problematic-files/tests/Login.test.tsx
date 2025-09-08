import React from 'react';
interface Login.testProps {
  // TODO: Implement
}
  className?: string;

const Login.test: React.FC<Login.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Login.test</h1>
      <p>This component is under development.</p>
    </div>
  )
};
pr-12325

export default Login.test;
