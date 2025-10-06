import React from 'react';
import { Helmet } from 'react-helmet-async';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, quantum computing, blockchain infrastructure, and innovative development services." />
        <meta name="keywords" content="AI solutions, IT services, quantum computing, blockchain, digital transformation" />
      </Helmet>
      
      <main id="main-content" className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Leading technology solutions provider helping businesses transform their digital presence 
              with cutting-edge AI, quantum computing, blockchain infrastructure, and innovative development services.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">AI Solutions</h2>
                <p className="text-gray-600">
                  Advanced artificial intelligence solutions to automate and optimize your business processes.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Quantum Computing</h2>
                <p className="text-gray-600">
                  Cutting-edge quantum computing services for complex problem solving and optimization.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Blockchain Infrastructure</h2>
                <p className="text-gray-600">
                  Secure and scalable blockchain solutions for modern business applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;