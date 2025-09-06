import React from 'react';

interface AdminRoutesProps {
  className?: string;
}

const AdminRoutes: React.FC<AdminRoutesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AdminRoutes</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AdminRoutes;