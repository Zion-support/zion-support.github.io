import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function MicroSaasPage() {
  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive micro SAAS solutions designed to streamline your business operations." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Micro SAAS Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive micro SAAS solutions designed to streamline your business operations and boost productivity.
            </p>
            <Link 
              to="/micro-saas-services" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}