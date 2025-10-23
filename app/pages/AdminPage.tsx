<<<<<<< HEAD
import React from 'react';

const AdminPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1>Admin Dashboard
          </h1>
          <p>Welcome to the admin panel. This page is under construction.
          </p>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2>Coming Soon
            </h2>
            <p>Admin functionality will be available in a future update.
            </p>
          </div>
        </div>
      </div>
=======
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
>>>>>>> origin/main
    </div>
  );
};

<<<<<<< HEAD
export default AdminPage;
