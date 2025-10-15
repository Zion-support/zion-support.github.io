import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Home,
  ArrowLeft,
  Mail,
  Phone,
  Search
} from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - Zion Tech Group</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to our homepage or contact us for assistance." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-9xl font-bold text-white mb-4">404</h1>
            <h2 className="text-4xl font-bold text-white mb-6">Page Not Found</h2>
            <p className="text-xl text-gray-300 mb-8">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center justify-center"
              >
                <Home className="mr-2 w-5 h-5" />
                Go Home
              </Link>
              <button 
                onClick={() => window.history.back()}
                className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center justify-center"
              >
                <ArrowLeft className="mr-2 w-5 h-5" />
                Go Back
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Need Help?
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Search className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                  <h4 className="text-lg font-semibold text-white mb-2">Search</h4>
                  <p className="text-gray-300">Use our search to find what you're looking for</p>
                </div>
                <div className="text-center">
                  <Mail className="w-8 h-8 text-green-500 mx-auto mb-3" />
                  <h4 className="text-lg font-semibold text-white mb-2">Email Us</h4>
                  <p className="text-gray-300">Contact us for assistance</p>
                </div>
                <div className="text-center">
                  <Phone className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                  <h4 className="text-lg font-semibold text-white mb-2">Call Us</h4>
                  <p className="text-gray-300">Speak with our support team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;