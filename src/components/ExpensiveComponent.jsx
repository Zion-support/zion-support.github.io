import React from 'react';

const ExpensiveComponent = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">Expensive Component</h3>
      <p className="text-gray-600">This is an expensive component that should be lazy loaded.</p>
    </div>
  );
};

export default ExpensiveComponent;