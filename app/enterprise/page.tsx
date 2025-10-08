import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise Solutions - Zion Tech Group',
  description: 'Enterprise-grade AI and IT solutions for large organizations.',
};

const EnterprisePage: React.FC = () => {
  const features = [
    {
      title: 'Scalable Architecture',
      description: 'Built to handle enterprise-scale workloads with reliability and performance.',
    },
    {
      title: 'Advanced Security',
      description: 'Enterprise-grade security features and compliance standards.',
    },
    {
      title: 'Custom Integration',
      description: 'Seamless integration with your existing enterprise systems.',
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Enterprise Solutions
              </h1>
              <p className="text-xl mb-8">
                Transform your enterprise with cutting-edge AI and IT solutions designed for scale.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Contact us today to discuss your enterprise needs and get started with our solutions.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EnterprisePage;