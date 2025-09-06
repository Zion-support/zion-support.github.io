import React from 'react';

interface LoginProps {
  className?: string;

const Login: React.FC<LoginProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Login</h1>
      <p>This component is under development.</p>
    </div>
  );

export default Login;