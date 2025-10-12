import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Phone, Mail, CheckCircle, Star } from 'lucide-react';

interface GenericServicePageProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  serviceName?: string;
}

const GenericServicePage: React.FC<GenericServicePageProps> = ({
  children,
  className = '',
  title = 'Our Services',
  description = 'Comprehensive technology solutions for your business',
  serviceName = 'Service'
}) => {
  return (
    <div className={`enhanced-component ${className}`}>
      <Helmet>
        <title>{serviceName} | Zion Tech Group</title>
        <meta name="description" content={`Professional ${serviceName.toLowerCase()} services by Zion Tech Group. ${description}`} />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {title}
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>
        
        {children}
      </div>
    </div>
  );
};

export default GenericServicePage;