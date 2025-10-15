import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Phone, Mail } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse">
            404
          </div>
          <div className="text-6xl font-bold text-white mb-4">Page Not Found</div>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>

        {/* Help Section */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-6">Need Help?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-cyan-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Search Our Site</h4>
              <p className="text-gray-400">Use our search to find what you're looking for.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-purple-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Call Us</h4>
              <p className="text-gray-400">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-green-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Email Us</h4>
              <p className="text-gray-400">kleber@ziontechgroup.com</p>
            </div>
          </div>
        </div>

        {/* Popular Links */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-white mb-6">Popular Pages</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/services" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Services
            </Link>
            <Link to="/about" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Contact
            </Link>
            <Link to="/pricing" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Pricing
            </Link>
            <Link to="/team" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
