import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Cloud, Code, Database } from 'lucide-react';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services and infrastructure management solutions." />
      </Helmet>

      <div className="min-h-screen pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                IT Services
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions and infrastructure management for modern businesses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 text-center">
                <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Cybersecurity</h3>
                <p className="text-gray-300">Protect your business with advanced security solutions</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 text-center">
                <Cloud className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Cloud Services</h3>
                <p className="text-gray-300">Scalable cloud infrastructure and migration services</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 text-center">
                <Code className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Development</h3>
                <p className="text-gray-300">Custom software and web development solutions</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 text-center">
                <Database className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Data Management</h3>
                <p className="text-gray-300">Database design and data analytics services</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
