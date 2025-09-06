import React from 'react';

interface AdminHeaderProps {
  className?: string;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AdminHeader</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AdminHeader;