import React from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  );
};

export default AppLayout;