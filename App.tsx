import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Main App component
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Helmet>
          <title>Zion Tech Group - Advanced AI & IT Solutions</title>
          <meta name="description" content="Professional AI and IT solutions by Zion Tech Group. Advanced technology services for modern businesses." />
        </Helmet>
        
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Advanced AI & IT Solutions
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Welcome to Zion Tech Group
              </h2>
              <p className="text-gray-200 mb-6">
                We provide cutting-edge AI and IT solutions to help businesses thrive in the digital age.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-200 mb-2">
                    AI Solutions
                  </h3>
                  <p className="text-blue-100 text-sm">
                    Advanced artificial intelligence solutions for automation and optimization.
                  </p>
                </div>
                <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-200 mb-2">
                    IT Services
                  </h3>
                  <p className="text-green-100 text-sm">
                    Comprehensive IT infrastructure and support services.
                  </p>
                </div>
                <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-purple-200 mb-2">
                    Cloud Solutions
                  </h3>
                  <p className="text-purple-100 text-sm">
                    Scalable cloud infrastructure and migration services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;