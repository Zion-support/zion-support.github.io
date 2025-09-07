import React from 'react';
import SEO from '../components/SEO';

export const metadata = {
  title: 'Cloud Migration | Zion Tech Group',
  description: 'Professional cloud migration services for your business needs.',
  keywords: 'cloud migration, services, business, technology'
};

const CloudMigration: React.FC = () => {
  return (
    <>
      <SEO title="Cloud Migration" description="Cloud Migration page" url="/services/cloud-migration" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Cloud Migration</h1>
            <p className="text-xl text-gray-300">Coming soon...</p>
          </div>
        </main>
      </div>
    </>
  );
};

export default CloudMigration;