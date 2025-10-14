import React from 'react';
import { Helmet } from 'react-helmet-async';

constTutorialspagePage: React.FC = () => {
  return (
    <>Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learnwith our comprehensive tutorials and guides" />
        <meta name="keywords" content="tutorials,guides, learning, tech education" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-autopx-4 py-16">
          <div className="text-center">
            <h1 className="text-4 xlfont-bold text-white mb-8">Tutorials</h1>
            <div className="text-gray-400">
              <p>Tutorials coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TutorialsPage;