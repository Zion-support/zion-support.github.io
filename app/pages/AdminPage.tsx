'use client';
import React from 'react';

interface AdminPageProps {
  className?: string;
}

const AdminPage: React.FC<AdminPageProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>AdminPage</h2>
      <p>AdminPage component for enhanced functionality.</p>
    </div>
  );
};

export default AdminPage;