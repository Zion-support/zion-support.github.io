import React from "react";

interface AdminPageProps {
  className?: string;
}

const AdminPage: React.FC<AdminPageProps> = ({ className = "" }) => {
  return (
    <div className={`bg-white p-4 rounded-lg ${className}`}>
          <h$1>AdminPage</h2>
          
          </div><p>This is a clean, functional component.</p>
    </div>
  );
};

export default AdminPage;
