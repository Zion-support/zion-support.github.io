import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: '🧠',
      title: 'Innovation',
      description:
        "We constantly push the boundaries of what's possible with AI technology.",
    },
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do.',
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description:
        'We believe in the power of working together to achieve great things.',
    },
    {
      icon: '🚀',
      title: 'Growth',
      description:
        'We help our clients grow and scale their businesses with AI solutions.',
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
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
    </div>
  );
};

export default AboutPage;
