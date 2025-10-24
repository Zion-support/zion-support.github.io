import React from 'react';
<<<<<<< HEAD
const AdminPage = () => {
  return (
    <div>h1>Admin Page</h1>p>Admin functionality coming soon.</p>/div>
  );
};
export default AdminPage;
=======

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
>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
