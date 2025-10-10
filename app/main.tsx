import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const MainPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions</title>
        <meta name="description" content="Professional AI and IT solutions with cutting-edge technology." />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional AI and IT solutions with cutting-edge technology and expert implementation.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MainPage;