import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';

const DemoPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>DemoPage - Zion Tech Group</title>
        <meta name="description" content="DemoPage page for Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">DemoPage</h1>
          <p className="text-lg text-gray-300">
            This is the DemoPage page for Zion Tech Group.
          </p>
        </div>
      </div>
    </>
  );
};

export default DemoPage;
=======

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          DemoPage
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          This page is coming soon. Please check back later.
        </p>
      </div>
    </div>
  );
}
>>>>>>> cursor/analyze-improve-and-deploy-application-705a
