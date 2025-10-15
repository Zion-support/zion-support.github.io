import React from 'react';
import { Helmet } from 'react-helmet-async';

const Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Advanced AI and IT solutions by Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      </div>
    </>
  );
};

export default Page;