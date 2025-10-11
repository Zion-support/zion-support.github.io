'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, ArrowRight, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const GDPRPage: React.FC = () => {
  const principles = [
    {
      icon: Shield,
      title: 'Lawfulness, Fairness & Transparency',
      description: 'We process personal data lawfully, fairly, and in a transparent manner.'
    },
    {
      icon: Lock,
      title: 'Purpose Limitation',
      description: 'We collect personal data for specified, explicit, and legitimate purposes.'
    },
    {
      icon: Eye,
      title: 'Data Minimization',
      description: 'We only collect data that is adequate, relevant, and limited to what is necessary.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>GDPR Compliance - Zion Tech Group</title>
        <meta name="description" content="Learn about our GDPR compliance practices and how we protect your personal data in accordance with European data protection regulations." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">GDPR</span> Compliance
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We are committed to protecting your personal data in accordance with the General Data Protection Regulation (GDPR).
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our GDPR Principles</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow strict data protection principles to ensure your privacy and data security.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {principles.map((principle, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
                  <principle.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-4">{principle.title}</h3>
                  <p className="text-gray-300">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Your Data Rights</h2>
            <p className="text-xl text-gray-300 mb-8">
              Under GDPR, you have specific rights regarding your personal data. Contact us to exercise these rights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default GDPRPage;