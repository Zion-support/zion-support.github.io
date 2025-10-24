import React from 'react';

interface AdminPageProps {
  className?: string;
  children?: React.ReactNode;
}

const AdminPage: React.FC<AdminPageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'adminpage ' + className}>
      {children || <p>AdminPage component</p>}
    </div>
  );
};

export default AdminPage;
