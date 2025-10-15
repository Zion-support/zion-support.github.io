import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AiCustomerServicePage: React.FC = () => {
  const services = [
    {
      title: 'Expert Ai Customer Service Solutions',
      description: 'Professional ai customer service services tailored to your needs.'
    },
    {
      title: 'Custom Implementation',
      description: 'Tailored ai customer service implementations for your specific requirements.'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support for all your ai customer service needs.'
    }
  ];

  return (
    <>
      <div>
      <Helmet>
        <title>Ai Customer Service - Zion Tech Group</title>
        <meta name="description" content="Professional ai customer service solutions and services" />
        <meta name="keywords" content="ai, customer, service" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Ai customer service</h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional Ai customer service solutions and services
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
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Custom Implementation
                </h3>
                <p className="text-green-700">
                  Tailored implementations for your specific requirements.
              </p><div className="bg-purple-50 border border-purple-200rounded-lgp-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">24/7 Support
                </h3>
                <p className="text-purple-700">Round-the-clock support for all your needs.
              </p>
              </div>
        </div>
            </div>
            <div className="text-center mt-12">
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <h1 className="text-4xl font-bold text-white mb-8">Ai customer service</h1>
<p className="text-xl text-gray-300 mb-8">Professional solutions and services</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2  ">Expert Solutions
                </h3>
                <p className="text-blue-700   ">Our team of experts delivers cutting-edge solutions.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2  ">Custom Implementation
                </h3>
                <p className="text-green-700   ">Tailored implementations for your specific requirements.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2  ">24/7 Support
                </h3>
                <p className="text-purple-700   ">Round-the-clock support for all your needs.
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

export default AiCustomerServicePage;
