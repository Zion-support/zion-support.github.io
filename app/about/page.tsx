import React from 'react';
import {Helmet} from 'react-helmet-async';

const About Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About - ZionTech Group</title>
        <meta name ="description" content="Learnabout Zion Tech Group'smission, values, andcommitment todelivering cutting-edge AI and IT solutions." />
      </Helmet>

      <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className ="text-center">
            <h1className ="text-4xlmd:text-6xlfont-boldtext-whitemb-6">
              AboutZion TechGroup
            </h1>
            <pclassName ="text-xltext-gray-300 mb-8 max-w-3xlmx-auto">
              Weare aleading technologycompany dedicatedto transformingbusinesses throughinnovative AIand ITsolutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About Page;