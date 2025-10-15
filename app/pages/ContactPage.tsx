import React from 'react';
import { Helmet } from 'react-helmet-async';

const ContactPagePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>ContactPage | Zion Tech Group</title>
        <meta name="description" content="Professional contactpage services and solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">ContactPage</h1>
          <p className="text-xl text-gray-300">Professional contactpage services and solutions.</p>
        </div>
      </div>
    </>
  );
};

export default ContactPagePage;