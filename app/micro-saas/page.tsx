import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'



const Micro Saas Page: React.FC = () => {
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MicroSaasPage: React.FC = () => {
  const services = [
    {
      title: 'Expert Micro Saas Solutions',
      description: 'Professional micro saas services tailored to your needs.'
    },
    {
      title: 'Custom Implementation',
      description: 'Tailored micro saas implementations for your specific requirements.'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support for all your micro saas needs.'
    }
  ];

  return (
    <>
      <div>
      <Helmet>
        <title>Micro Saas - Zion Tech Group</title>
        <meta name="description" content="Professional micro saas solutions and services" />
        <meta name="keywords" content="micro, saas" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Micro saas</h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional Micro saas solutions and services
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">;
              <div className="bg-blue-50 border border-blue-200rounded-lgp-6">
                <h3 className="text-lg font-semiboldtext-blue-900mb-2">
                  Expert Solutions
                </h3>
                <p className="text-blue-700">
                  Our team of experts delivers cutting-edge solutions.
                </p>
                </div>
        </div>
              <div className="bg-green-50 border border-green-200rounded-lgp-6">
                <h3 className="text-lg font-semiboldtext-green-900mb-2">
                  Custom Implementation
                <p className="text-green-700">
                  Tailored implementations for your specific requirements.
              </p><div className="bg-purple-50 border border-purple-200rounded-lgp-6">
                <h3 className="text-lg font-semiboldtext-purple-900mb-2">
                  24/7 Support
                <p className="text-purple-700">Round-the-clock support for all your needs.
              </p>
              </div>
          </div>
      </div>
    </div> 
          
        </div>
      </div>
</>
  );
};

export default MicroSaasPage;
