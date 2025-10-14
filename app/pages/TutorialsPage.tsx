import React from 'react';
import { Helmet } from 'react-helmet-async';

const TutorialsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Tutorials and learning resources from Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Tutorials</h1>
          <p className="text-lg text-gray-300">
            This is the Tutorials page for Zion Tech Group.
          </p>
        </div>
      </div>
    </>
  );
};

export default TutorialsPage;