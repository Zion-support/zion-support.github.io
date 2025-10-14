import React from 'react';
import {Helmet} from 'react-helmet-async';;
const AboutPage: React.FC  = () => {return (
    <React.Fragment>
      <Helmet>
        <title>About - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, our mission, values, and the team behind our innovative AI and IT solutions." />
"      </Helmet>
      
      <div className="container mx-auto px-4 py-16">"        <div className="text-center">
"          <h1 className="text-4xl font-bold text-gray-900 mb-6">"            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
"            We are a leading technology company specializing in AI and IT solutions 
            that help businesses transform and grow in the digital age.
          </p>
        </div>
      </div>
    </React.Fragment>;
  );};
;
export default AboutPage;