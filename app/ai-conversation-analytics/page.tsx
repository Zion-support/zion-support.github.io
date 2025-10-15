import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEOHead from '../components/SEOHead';

const Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Ai Conversation Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional ai conversation analytics services by Zion Tech Group." />
      </Helmet>
      <SEOHead
        title="Ai Conversation Analytics - Zion Tech Group"
        description="Professional ai conversation analytics services by Zion Tech Group."
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Ai Conversation Analytics</h1>
          <p className="text-gray-300">Professional ai conversation analytics services coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default Page;
