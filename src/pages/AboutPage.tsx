import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and commitment to delivering cutting-edge technology solutions." />
      </Helmet>
      
      <div className="about-page">
        <div className="container">
          <h1>About Zion Tech Group</h1>
          <p>We are a leading technology company dedicated to transforming businesses through innovative solutions.</p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;