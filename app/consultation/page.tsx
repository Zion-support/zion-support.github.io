import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ConsultationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group</title>
        <meta name="description" content="Get expert consultation for your technology needs." />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Consultation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get expert consultation for your technology needs.
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600">Consultation services coming soon...</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ConsultationPage;
