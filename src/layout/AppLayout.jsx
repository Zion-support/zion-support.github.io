import React from 'react';

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  );
};

export { AppLayout };
export default AppLayout;