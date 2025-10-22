import React from 'react';
<<<<<<< HEAD
import SEOHead from './SEOHead';
import { CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

interface ServicePageTemplateProps {
  title: string;
  description: string;
  keywords: string;
  icon: React.ComponentType<any>;
  features: Array<{
    icon: React.ComponentType<any>;
    title: string;
    description: string;
  }>;
  pricing: {
    monthly: string;
    original?: string;
    features: string[];
  };
  benefits: string[];
  useCases: Array<{
    title: string;
    description: string;
  }>;
  technicalSpecs: Array<{
    category: string;
    specs: string[];
  }>;
  ctaText?: string;
  ctaLink?: string;
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  title,
  description,
  keywords,
  icon: Icon,
  features,
  pricing,
  benefits,
  useCases,
  technicalSpecs,
  ctaText = "Get Started Today",
  ctaLink = "/contact"
}) => {
  return (
    <>
      <SEOHead 
        title={`${title} - Zion Tech Group`}
        description={description}
        keywords={keywords}
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30">
          <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl mb-8">
                <Icon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {title}
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                {description}
              </p>
              <a
                href={ctaLink}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                {ctaText}
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Key <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful capabilities designed to transform your business operations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Simple <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transparent pricing with no hidden fees
              </p>
            </div>
            
            <div className="max-w-md mx-auto bg-slate-800/50 p-8 rounded-xl border border-slate-700">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl font-bold text-purple-400">{pricing.monthly}</span>
                  {pricing.original && (
                    <span className="text-lg text-gray-400 line-through ml-2">{pricing.original}</span>
                  )}
                </div>
                <p className="text-gray-300">per month</p>
              </div>
              
              <div className="space-y-4 mb-8">
                {pricing.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              <a
                href={ctaLink}
                className="block w-full text-center py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Why Choose Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Solution</span>?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-slate-800/30 rounded-lg">
                  <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Use <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Cases</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Technical <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Specifications</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technicalSpecs.map((spec, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <h3 className="text-lg font-semibold mb-4 text-purple-400">
                    {spec.category}
                  </h3>
                  <ul className="space-y-2">
                    {spec.specs.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-300 text-sm">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={ctaLink}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                {ctaText}
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

=======

interface ServicePageTemplateProps {
  className?: string;
  children?: React.ReactNode;
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={`servicepagetemplate-component ${className}`} {...props}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white mb-2">ServicePageTemplate</h3>
          <p className="text-gray-300">This component is ready for implementation.</p>
        </div>
      )}
    </div>
  );
};

>>>>>>> e8c0fc9337d69fc2277cc41f3d1f9a45a721f442
export default ServicePageTemplate;