import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AiCodeAssistantProPage: React.FC = () => {
  const services = [
    {
      title: 'Expert Ai Code Assistant Pro Solutions',
      description: 'Professional ai code assistant pro services tailored to your needs.'
    },
    {
      title: 'Custom Implementation',
      description: 'Tailored ai code assistant pro implementations for your specific requirements.'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support for all your ai code assistant pro needs.'
    }
  ];

  return (
    <>
      <div>
      <Helmet>
        <title>Ai Code Assistant Pro - Zion Tech Group</title>
        <meta name="description" content="Professional ai code assistant pro solutions and services" />
        <meta name="keywords" content="ai, code, assistant, pro" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Ai code assistant pro</h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional Ai code assistant pro solutions and services
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
    </div> 
          
        </div>
      </div>
</>
  );
};

  }
  )
export default Ai;; Code Assistant Pro Page
export default AiCodeAssistantProPage;
