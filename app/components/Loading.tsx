<<<<<<< HEAD
import React  from 'react';
const Loading: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-centerjustify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-automb-4"></div>
=======
'use client';
import React from 'react';


const Loading: React.FC = () => {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-centerjustify-center">
        </div>
      <div className="text-center" />
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-automb-4">
        </div></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
        <p className="text-whitetext-lg">Loading...</p>
      </div>
  );
};

export default Loading;
    </>