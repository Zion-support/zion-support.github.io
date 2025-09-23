import React from 'react';
import { SEO } from '../components/SEO';

const Documentation: React.FC = () => {
  return (
    <>
      <SEO
        title="Documentation | Zion Tech Group"
        description="Technical documentation and guides"
        keywords="documentation, guides, API, technical"
        canonical="/documentation"
      />
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Documentation</h1>
          <p className="text-xl text-slate-300">This page is being updated with new content.</p>
        </div>
      </div>
    </>
  );
};

export default Documentation;
