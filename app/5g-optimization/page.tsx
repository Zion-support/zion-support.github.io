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
      <section className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              5G Optimization Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100">
              Maximize your 5G network performance with our expert optimization services
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
            >
              Optimize Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            </div>
        </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our 5G Optimization Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive optimization solutions to enhance your 5G network performance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <CheckCircle className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Network Performance Tuning
              </h3>
              <p className="text-gray-600">
                Advanced performance optimization to maximize throughput and minimize latency
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <CheckCircle className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Coverage Optimization
              </h3>
              <p className="text-gray-600">
                Strategic antenna placement and power optimization for maximum coverage
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <CheckCircle className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
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
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Optimize Your 5G Network?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Contact us today for a comprehensive 5G optimization assessment
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FiveGOptimizationPage;