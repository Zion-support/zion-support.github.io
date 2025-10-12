import React  from 'react';
const Loading: React.FC = () => {
  return (
    <div className="mi n-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-centerjustify-center">
      <div className="tex t-center">
        <div className="animat e-spin rounded-full h-12 w-12 border-b-2 border-white mx-automb-4"></div>
        <p className="tex t-whitetext-lg">Loading...</p>
      </div>
  );
};

export default Loading;
    </>