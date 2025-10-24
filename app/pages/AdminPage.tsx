'use client';
import React from 'react';
<<<<<<< HEAD
const AdminPage = () => {
  return (
    <div>h1>Admin Page</h1>p>Admin functionality coming soon.</p>/div>
=======

interface AdminPageProps {
  className?: string;
}

const AdminPage: React.FC<AdminPageProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>AdminPage</h2>
      <p>AdminPage component for enhanced functionality.</p>
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
  );
};
export default AdminPage;