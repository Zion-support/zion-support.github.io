import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star, CurrencyDollarIcon, Clock, CheckCircle, ArrowRight, IconComponent } from 'lucide-react';

const Services: React.FC = () => {
  const microSaasServices = [
    // ... features
  ];

  const enterpriseServices = [
  ];
  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Discover our comprehensive range of AI and IT services including real micro SAAS solutions, enterprise AI, cybersecurity, and cloud infrastructure." />
        <meta name="keywords" content="AI services, IT solutions, micro SAAS, cybersecurity, cloud infrastructure, digital transformation" />
      </Helmet>
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        
        <div className="absolute inset-0">
          
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10"></div>
          
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
          
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Real solutions for real businesses. From micro SAAS tools to enterprise-grade AI and IT infrastructure.
          </p>
        </div>
      </section>
      <section className="py-20 bg-slate-800">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Micro SAAS</span> Solutions
            </h2>
            
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real, functional micro software-as-a-service tools that solve specific business problems
            </p>
          </div>
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className={`group bg-slate-700/50 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-600/50 transition-all duration-300 transform hover:scale-105 relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                
        <div className="mb-6">
                  
        <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">
                    </span>
                    
        <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-semibold">4.9</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                  
          <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
        <div className="flex items-center justify-between mb-6">
                    
        <div className="flex items-center">
                      <CurrencyDollarIcon className="w-6 h-6 text-green-400 mr-2" />
                      <span className="text-3xl font-bold text-white">{service.price}</span>
                    </div>
                    
        <div className="flex items-center text-gray-400">
                      <Clock className="w-4 h-4 mr-1" />
                      <span className="text-sm">Setup in 5 min</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
        <div className="space-y-3">
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button className="w-full border border-gray-600 text-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-700 hover:text-white transition-all duration-300">
                    View Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
          
        <div className="text-center mt-12">
            <Link
              to="/micro-saas"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold text-lg group"
            >
              View All Micro SAAS Solutions
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Enterprise</span> Services
            </h2>
            
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions for large-scale business transformation
            </p>
          </div>
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enterpriseServices.map((service, index) => {
              const IconComponent = service.icon;
  
  );
};
export default Services;
}}
    </>
  );
}