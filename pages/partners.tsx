import React from 'react';
import MainLayout from '../components/layout/MainLayout';

const PartnersPage: React.FC = () => {
  return (
    <MainLayout title="Partners - Zion Tech Group" description="Our strategic partners and technology alliances.">
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Our Partners</h1>
        <p className="text-gray-700 max-w-3xl">We collaborate with industry-leading partners to deliver world-class solutions across AI, cloud, cybersecurity, and digital transformation.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {["AWS", "Microsoft", "Google Cloud", "OpenAI", "Cloudflare", "Stripe"].map((name) => (
            <div key={name} className="border rounded-lg p-6 bg-white shadow-sm">
              <div className="text-xl font-semibold">{name}</div>
              <p className="text-gray-600 mt-2">Strategic technology partner.</p>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default PartnersPage;

