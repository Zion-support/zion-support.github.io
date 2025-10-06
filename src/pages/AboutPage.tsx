import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About - Zion Tech Group</title>
        <meta
          name='description'
          content='Learn about Zion Tech Group and our revolutionary AI solutions.'
        />
      </Helmet>

      <div>
        <h1>About Zion Tech Group</h1>
        <p>
          Revolutionary AI solutions delivering unprecedented business value.
        </p>
      </div>
    </>
  );
};

export default AboutPage;
