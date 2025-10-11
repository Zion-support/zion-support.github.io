import React from 'react';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      <SEO 
        title="404 - Page Not Found | Zion Tech Group"
        description="The page you're looking for doesn't exist. Return to our homepage to explore our AI and IT solutions."
        keywords="404, page not found, error"
      />
      
      <div className="max-w-md mx-auto text-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <div className="text-6xl font-bold text-white mb-4">404</div>
          <h1 className="text-2xl font-bold text-white mb-4">Page Not Found</h1>
          <p className="text-gray-300 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/20">
            <p className="text-gray-400 text-sm mb-4">Looking for something specific?</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link to="/services" className="text-blue-400 hover:text-blue-300 text-sm">
                Services
              </Link>
              <span className="text-gray-500">•</span>
              <Link to="/about" className="text-blue-400 hover:text-blue-300 text-sm">
                About
              </Link>
              <span className="text-gray-500">•</span>
              <Link to="/contact" className="text-blue-400 hover:text-blue-300 text-sm">
                Contact
              </Link>
              <span className="text-gray-500">•</span>
              <Link to="/ai-services" className="text-blue-400 hover:text-blue-300 text-sm">
                AI Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;