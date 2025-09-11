import React from 'react';
const Loading: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-900 flex items-center justify-center'>
      <div className='text-center'>
        {/* comment */}
        <div className='w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8 animate-pulse'>
          <span className='text-white font-bold text-2xl'>Z</span>
        </div>
        {/* comment */}
        <h2 className='text-2xl font-bold text-white mb-4'>Zion Tech Group</h2>
        <p className='text-gray-400 mb-8'>Loading amazing experiences...</p>
        {/* comment */}
        <div className='flex justify-center'>
          <div className='w-8 h-8 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin'></div>
        </div>
      </div>
    </div>
  );
};
