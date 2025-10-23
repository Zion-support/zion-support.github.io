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
export default AdminPage;
=======
export default AdminPage;
>>>>>>> 516d08636e963cc03ae2bfbc2645b9ab9784f8a2
