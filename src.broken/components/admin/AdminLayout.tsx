import React from 'react';

interface AdminLayoutProps {
  className?: string;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AdminLayout</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AdminLayout;