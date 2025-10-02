import React from 'react';

const AppMinimal: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="p-8 rounded-lg bg-white shadow">
        <h1 className="text-2xl font-bold mb-2">Zion Website</h1>
        <p className="text-gray-700">Temporary minimal app to enable build.</p>
      </div>
    </div>
  );
};

export default AppMinimal;