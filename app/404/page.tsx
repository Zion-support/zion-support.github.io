import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>404 - Page Not Found | Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Zion Tech Group's homepage or explore our AI and IT services." />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-9xl font-bold text-gray-300 mb-4">404</h1>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Popular Pages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/ai-services" className="text-purple-600 hover:text-purple-700 transition-colors">
                  AI Services
                </Link>
                <Link to="/it-services" className="text-purple-600 hover:text-purple-700 transition-colors">
                  IT Services
                </Link>
                <Link to="/cloud-services" className="text-purple-600 hover:text-purple-700 transition-colors">
                  Cloud Services
                </Link>
                <Link to="/digital-transformation" className="text-purple-600 hover:text-purple-700 transition-colors">
                  Digital Transformation
                </Link>
                <Link to="/micro-saas-services" className="text-purple-600 hover:text-purple-700 transition-colors">
                  Micro SAAS
                </Link>
                <Link to="/5g-implementation" className="text-purple-600 hover:text-purple-700 transition-colors">
                  5G Implementation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFoundPage;