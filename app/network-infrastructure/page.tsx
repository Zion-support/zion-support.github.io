import React from 'react';
<<<<<<< HEAD
import { Helmet   } from 'react-helmet-async';
'use client';
export default function NetworkInfrastructure() {;
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>;<Helmet><title>Network Infrastructure | Zion Tech Group</title><meta name='description' content='Professional' Network Infrastructure services by Zion Tech Group. Advanced AI and IT solutions for your business. />;</Helmet><div className="container" mx-auto px-4 py-16">;<div className="text-center mb-16>;<h1 className="text-5xl" font-bold text-white mb-6>;
Network Infrastructure <span className="text-transparent" bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400>Solutions</span></h1><p className="text-xl" text-gray-300 mb-8 max-w-3xl mx-auto">Build robust, scalable network infrastructure with our expert solutions designed for modern businesses.</></div><div className="grid md: "grid-cols-2 lg:grid-cols-3 gap-8 mb-16>;<div className="bg-white/10" backdrop-blur-sm rounded-xl p-6 border border-white/20>;<h3 className="text-xl" font-semibold text-white mb-4>Network Design</h3><p className="text-gray-300" mb-4">Custom network architecture designed for your specific business requirements.</><ul className="text-sm text-gray-400 space-y-2>;<li>• Scalable architecture</li><li>• High availability</li><li>• -first design</li></ul></div><div className="bg-white/10" backdrop-blur-sm rounded-xl p-6 border border-white/20>;<h3 className="text-xl" font-semibold text-white mb-4>Network</h3><p className="text-gray-300" mb-4">Comprehensive security solutions to protect your network infrastructure.</><ul className="text-sm text-gray-400 space-y-2>;<li>• Firewall configuration</li><li>• Intrusion detection</li><li>• VPN solutions</li></ul></div><div className="bg-white/10" backdrop-blur-sm rounded-xl p-6 border border-white/20>;<h3 className="text-xl" font-semibold text-white mb-4>Network Monitoring</h3><p className="text-gray-300" mb-4">24/7 monitoring and management of your network infrastructure.</><ul className="text-sm text-gray-400 space-y-2>;<li>• Real-time monitoring</li><li>• Performance optimization</li><li>• Proactive maintenance</li></ul></div></div><div className="text-center">;<div className="bg-white/10" backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto>;<h2 className="text-2xl" font-bold text-white mb-4">Ready to Build Your Network?</h2><p className="text-gray-300 mb-6>",;
Our network infrastructure experts are ready to help you build a robust, secure, and scalable network.</><button className="bg-gradient-to-r" from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover: "from-blue-600 hover:to-purple-600 transition-all duration-300">;
              Get Started Today",;
</button></div></div></div></div>
  ),;
}
;
=======
import { Helmet } from 'react-helmet-async';

const Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Network infrastructure - Zion Tech Group</title>
        <meta name="description" content="Professional Network infrastructure solutions and services" />
        <meta name="keywords" content="network, infrastructure" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Network infrastructure</h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional Network infrastructure solutions and services
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
