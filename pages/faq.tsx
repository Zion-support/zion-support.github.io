import React from 'react';
import MainLayout from '../components/layout/MainLayout';

const FAQPage: React.FC = () => {
  return (
    <MainLayout title="FAQ - Zion Tech Group" description="Frequently asked questions about Zion Tech Group services and solutions.">
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
        <div className="space-y-6 max-w-3xl">
          <div>
            <h2 className="text-xl font-semibold">What services do you offer?</h2>
            <p className="text-gray-700 mt-2">We offer AI services, IT services, Micro SaaS development, cloud and DevOps, cybersecurity, and more.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">How can I request a quote?</h2>
            <p className="text-gray-700 mt-2">Visit our contact page at <a className="text-blue-600" href="/request-quote">/request-quote</a> or use the Contact link to reach us directly.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Do you provide onsite IT services?</h2>
            <p className="text-gray-700 mt-2">Yes. See our IT Onsite Services section for details.</p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default FAQPage;

