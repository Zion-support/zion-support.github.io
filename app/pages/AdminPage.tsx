import React from 'react';

interface AdminPageProps {
  className?: string;
  children?: React.ReactNode;
}

const AdminPage = ({ className = '', children }) => {
  return <div className={`admin-page ${className}`}>{children}</div>;
};

export default AdminPage;
