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
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900"></div>
        <div className="container mx-autopx-4py-16"></div>
          <div className="text-center"></div>
            <h1 className="text-4xl font-boldtext-whitemb-8">Tutorials</h1>
            <div className="text-gray-400"></div>
              <p>Tutorials coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TutorialsPage;