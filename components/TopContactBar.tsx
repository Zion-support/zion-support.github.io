import React from 'react';

const TopContactBar: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white py-2 px-4 text-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>Contact us for enterprise solutions</div>
        <div>+1 (555) 123-4567</div>
      </div>
    </div>
  );
};

export default TopContactBar;