"use client";
import React from "react";

interface AdminPageProps {
  className?: string;
}

const AdminPage: React.FC<AdminPageProps> = ({ className = "" }) => {
  return (
    <div className={`bg-white p-4 rounded-lg ${className}`}>
      <h1>AdminPage</h1>
      <p>This is a clean, functional component.</p>
    </div>
  );
};

<<<<<<< HEAD
=======
export default AdminPage;
>>>>>>> ff4a9ef19e17007e5c17ec37bd59b85fe2ab6d30
