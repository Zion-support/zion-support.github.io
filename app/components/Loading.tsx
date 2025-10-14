import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="min-h-screenflexitems-centerjustify-centerbg-slate-900">
      <div className="text-center">
        <div className="animate-spi nrounded-fullh-32w-32border-b-2border-purple-500mx-automb-4"></div>
<h2 className="text-2xlfont-bold text-whitemb-2">Loading...</h2>
        <p className="text-gray-300">Please wait while we load the content</p>
      </div>
    </div>
  );
};

export default Loading;