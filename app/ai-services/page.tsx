import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PagePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Professional page services from Zion Tech Group." />
        <meta name="keywords" content="page, AI solutions, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Page <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional page solutions tailored to your business needs.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PagePage;
