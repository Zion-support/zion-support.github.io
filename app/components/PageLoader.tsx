import React from 'react';
const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screenflexitems-centerjustify-center bg-gray-900">
      <div className="text-center">
        <div className="animate-spinrounded-fullh-32w-32 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-whitetext-lg">Loading...</p>
      </div>
    </div>
  )};

export default PageLoader;