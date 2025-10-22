import React from "react";
interface AdminPageProps {
  className?: string;
}

const AdminPage: React.FC<AdminPageProps> = ({ className = '' }) => {
  return (
    <div className={`bg-white p-4 rounded-lg ${className}`}>
      <h2>AdminPage</h2>
      <p>This is a clean, functional component.
              </p>
            </div>
  );
};

export default AdminPage;