import React from 'react';

interface AdminProps {
  className?: string;
}

const Admin: React.FC<AdminProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Admin</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Admin;