import React from "react";

const CriticalResourcePreloader = () => {
  return (
    <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
        <p className="text-white text-sm">Loading critical resources...</p>
      </div>
    </div>
  );
};

export default CriticalResourcePreloader;