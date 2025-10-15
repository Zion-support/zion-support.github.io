import React, { Suspense } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

const FiveGOptimizationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <EnhancedSEO 
        title="5G Optimization Services | Zion Tech Group"
        description="Expert 5G network optimization services to maximize performance, efficiency, and cost-effectiveness."
        keywords="5G optimization, network optimization, performance tuning, 5G efficiency"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-rfrom-emerald-900to-teal-900text-whitepy-20">
        <div className="containermx-autopx-4">
          <div className="max-w-4xlmx-autotext-center">
            <h1 className="text-4xlmd:text-6xlfont-boldmb-6">
              5G Optimization Services
            </h1>
            <p className="text-xlmd:text-2xlmb-8text-emerald-100">
              Maximize your 5G network performance with our expert optimization services
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-emerald-600hover:bg-emerald-700text-whitefont-semiboldpy-4px-8rounded-lgtransition-colors"
            >
              Optimize Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            </div>
          </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="containermx-autopx-4">
          <div className="text-center mb-16">
            <h2 className="text-3xlfont-boldtext-gray-900mb-6">
              Our 5G Optimization Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3 xl mx-auto">
              Comprehensive optimization solutions to enhance your 5G network performance
            </p>
            </div>

          <div className="gridmd:grid-cols-3 gap-8">
            <div className="bg-whitep-8rounded-lgshadow-lg">
              <CheckCircle className="w-12 h-12 text-emerald-600mb-4" />
              <h3 className="text-xl font-semibold text-gray-900mb-4">
                Network Performance Tuning
              </h3>
              <p className="text-gray-600">
                Advanced performance optimization to maximize throughput and minimize latency
              </p>
              </div>

            <div className="bg-whitep-8rounded-lgshadow-lg">
              <CheckCircle className="w-12 h-12 text-emerald-600mb-4" />
              <h3 className="text-xl font-semibold text-gray-900mb-4">
                Coverage Optimization
              </h3>
              <p className="text-gray-600">
                Strategic antenna placement and power optimization for maximum coverage
              </p>
              </div>

            <div className="bg-whitep-8rounded-lgshadow-lg">
              <CheckCircle className="w-12 h-12 text-emerald-600mb-4" />
              <h3 className="text-xl font-semibold text-gray-900mb-4">
                Capacity Planning
              </h3>
              <p className="text-gray-600">
                Intelligent capacity management to handle peak loads efficiently
              </p>
              </div>
            </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900text-whitepy-20">
        <div className="containermx-autopx-4text-center">
          <h2 className="text-3xlfont-boldmb-6">
            Ready to Optimize Your 5G Network?
          </h2>
          <p className="text-xlmb-8text-gray-300">
            Contact us today for a comprehensive 5G optimization assessment
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-emerald-600hover:bg-emerald-700text-whitefont-semiboldpy-4px-8rounded-lgtransition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          </div>
      </section>
    </div>
  )
  }
  )
export default FiveG;; Optimization Page
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Page5gOptimizationPage: React.FC = () => {
  const services = [
    {
      title: 'Expert 5g Optimization Solutions',
      description: 'Professional 5g optimization services tailored to your needs.'
    },
    {
      title: 'Custom Implementation',
      description: 'Tailored 5g optimization implementations for your specific requirements.'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support for all your 5g optimization needs.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>5g Optimization - Zion Tech Group</title>
        <meta name="description" content="Professional 5g optimization solutions and services" />
        <meta name="keywords" content="5g, optimization" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">5g Optimization</h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional 5g optimization solutions and services
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-8 w-8 text-blue-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

<<<<<<< HEAD
export default Page5gOptimizationPage;
=======
export default FiveGoptimizationPage;


>>>>>>> e147079fabc5ed4c39aa0de061f6683aa394ec59
