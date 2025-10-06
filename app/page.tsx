import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <main id="main-content" className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Leading provider of AI-powered enterprise solutions and digital transformation services.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">AI Solutions</h2>
              <p className="text-gray-600">
                Cutting-edge artificial intelligence services that transform your business operations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-green-600">Cloud Services</h2>
              <p className="text-gray-600">
                Comprehensive cloud migration and management solutions for modern enterprises.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-purple-600">DevOps & SRE</h2>
              <p className="text-gray-600">
                Expert DevOps and Site Reliability Engineering services for optimal performance.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Zion Tech Group?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4">Proven Expertise</h3>
                <p className="text-gray-600">
                  Our team brings decades of experience in enterprise technology solutions and AI implementation.
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4">Innovation First</h3>
                <p className="text-gray-600">
                  We stay at the forefront of technology, delivering solutions that give you a competitive edge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;