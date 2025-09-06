import React from 'react';

interface AuthContextProps {
  className?: string;

const AuthContext: React.FC<AuthContextProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AuthContext</h1>
      <p>This component is under development.</p>
    </div>
  );

export default AuthContext;