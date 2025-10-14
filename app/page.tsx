import React from 'react';

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>App - Zion Tech Group</title>
        <meta name="description" content="Professional app services by Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">App</h1>
          <p className="text-gray-300 text-lg">This page is under construction. Please check back later.</p>
        </div>
      </div>
    </React.Fragment>
  );
}
