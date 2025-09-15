import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, MapPin } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          {/* 404 Number */}
          <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-8">
            404
          </div>
          
          {/* Error Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Page Not Found
          </h1>
          
          <p className="text-xl text-blue-200 mb-8">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track to transforming your business with technology.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/" className="btn-primary inline-flex items-center">
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            <Link to="/services" className="btn-secondary inline-flex items-center">
              <Search className="w-5 h-5 mr-2" />
              Explore Services
            </Link>
          </div>
          
          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Link to="/services" className="card text-center hover:bg-slate-800/70 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-2">Our Services</h3>
              <p className="text-blue-200 text-sm">
                AI, Cloud, Cybersecurity, and more
              </p>
            </Link>
            
            <Link to="/contact" className="card text-center hover:bg-slate-800/70 transition-all duration-300">
              <h3 className="text-lg font-semibold text-white mb-2">Contact Us</h3>
              <p className="text-blue-200 text-sm">
                Get in touch for a consultation
              </p>
            </Link>
            
            <div className="card text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Visit Office</h3>
              <p className="text-blue-200 text-sm">
                <MapPin className="w-4 h-4 inline mr-1" />
                364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
          </div>
          
          {/* Back Button */}
          <button 
            onClick={() => window.history.back()} 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;