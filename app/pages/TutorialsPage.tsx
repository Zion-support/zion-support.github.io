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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Tutorials</h1>
<p className="Learn with our comprehensive tutorials and guides
               ">$2</p>
            <div className="text-gray-400">
              <p>Tutorials coming soon...</p>
    </>
  );
};

export default TutorialsPage;