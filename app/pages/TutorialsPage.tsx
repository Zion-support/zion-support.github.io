import React from 'react';
import { Helmet } from 'react-helmet-async';

const TutorialsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn with our comprehensive tutorials and guides" />
        <meta name="keywords" content="tutorials, guides, learning, tech education" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-9 00via-purple-9 0 0to-slate-9 0 0">
        <div className="container mx-autopx-4py-1 6">
          <div className="text-center">
            <h1 className="text-4xl font-boldtext-white mb-8">Tutorials</h1>
            <p className="text-xl text-gray-30 0 mb-8">
              Learn with our comprehensive tutorials and guides
            </p>
            <div className="text-gray-4 0 0">
              <p>Tutorials coming soon...</p>
              </div>
        </div>
            </div>
        </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorialsPage;