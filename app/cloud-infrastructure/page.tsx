import React from 'react';
<<<<<<< HEAD
import { Helmet   } from 'react-helmet-async';
use client;
export default function Infrastructure() {;
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>;<Helmet><title>Infrastructure | Zion Tech Group</title><meta name='description' content='Professional' Infrastructure services by Zion Tech Group. Advanced AI and IT solutions for your business. />;<meta name=keywords" content="cloud infrastructure, cloud services, IT services, Zion Tech Group, cloud computing />;</Helmet><div className="container" mx-auto px-4 py-16>;<div className="text-center" mb-16>;<h1 className="text-5xl" font-bold text-white mb-6">;
Infrastructure <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400>Solutions</span></h1><p className="text-xl" text-gray-300 mb-8 max-w-3xl mx-auto>Transform your business with our advanced cloud infrastructure solutions designed for scalability, security, and performance.</></div><div className="grid" md: "grid-cols-2 lg:grid-cols-3 gap-8 mb-16>;<div className="bg-white/10" backdrop-blur-sm rounded-xl p-6 border border-white/20">;<h3 className="text-xl font-semibold text-white mb-4>Migration</h3><p className="text-gray-300" mb-4>Seamlessly migrate your applications and data to the cloud with minimal downtime.</><ul className="text-sm" text-gray-400 space-y-2>",;<li>• AWS, Azure, GCP expertise</li><li>• Zero-downtime migration</li><li>• Cost optimization</li></ul></div><div className="bg-white/10" backdrop-blur-sm rounded-xl p-6 border border-white/20">;<h3 className="text-xl font-semibold text-white mb-4></h3><p className="text-gray-300" mb-4>Comprehensive security solutions to protect your cloud infrastructure.</><ul className="text-sm" text-gray-400 space-y-2>;<li>• Identity and access management</li><li>• Data encryption</li><li>• Compliance monitoring</li></ul></div><div className="bg-white/10" backdrop-blur-sm rounded-xl p-6 border border-white/20">;<h3 className="text-xl font-semibold text-white mb-4>Auto Scaling</h3><p className="text-gray-300" mb-4>Automatically scale your infrastructure based on demand and usage patterns.</><ul className="text-sm" text-gray-400 space-y-2>;<li>• Load balancing</li><li>• Resource optimization</li><li>• Cost efficiency</li></ul></div></div><div className="text-center"">;<div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto>;<h2 className="text-2xl" font-bold text-white mb-4>Ready to Transform Your Infrastructure?</h2><p className="text-gray-300" mb-6>Our cloud infrastructure experts are ready to help you build a scalable, secure, and efficient cloud environment.</><button className="bg-gradient-to-r" from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover: "from-blue-600 hover:to-purple-600 transition-all duration-300">;
              Get Started Today",;
</button></div></div></div></div>
  ),;
}
;
';
=======
import { Helmet } from 'react-helmet-async';

const Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cloud infrastructure - Zion Tech Group</title>
        <meta name="description" content="Professional Cloud infrastructure solutions and services" />
        <meta name="keywords" content="cloud, infrastructure" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Cloud infrastructure</h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional Cloud infrastructure solutions and services
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Expert Solutions
                </h3>
                <p className="text-blue-700">
                  Our team of experts delivers cutting-edge solutions.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Custom Implementation
                </h3>
                <p className="text-green-700">
                  Tailored implementations for your specific requirements.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  24/7 Support
                </h3>
                <p className="text-purple-700">
                  Round-the-clock support for all your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const LazyPage: React.LazyExoticComponent<React.ComponentType<any>> = React.lazy(() => import('./page'));
export default LazyPage;

>>>>>>> 12ad1f6b6cfd812b560a1dd10f09dfa9de4eb0ce
