import React from 'react';
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
        <div className="container mx-autopx-4">
          <div className="max-w-4xl mx-autotext-center">
            <h1 className="text-4xl md: text-6xl font-bold mb-6">;
              5G Optimization Services
            </h1>
<p className="text-xl md: text-2xl mb-8text-emerald-100   ">;</p>
              Maximize your 5G network performance with our expert optimization services
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-emerald-600 hover: bg-emerald-700 text-white font-semibold py-4 px-8 rounded-lgtransition-colors";
            >
              Optimize Now
              <ArrowRight className="ml-2 w-5h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className=" py-20">
        <div className="container mx-autopx-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-6">;
              Our Optimization Services
            </h2>
<p className="Comprehensive 5G network optimization to ensure peak performance and efficiency
               ">$2</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3gap-8">;
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6text-emerald-600" />
              </div>
<h3 className="text-xl font-semibold text-gray-900 mb-4  ">Performance Tuning
              </h3>
<p className="Fine-tune your 5G network parameters for optimal speed and reliability.
                 ">$2</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6text-emerald-600" />
              </div>
<h3 className="text-xl font-semibold text-gray-900 mb-4  ">Capacity Planning
              </h3>
<p className="Strategic planning to ensure your network can handle current and future demands.
                 ">$2</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6text-emerald-600" />
              </div>
<h3 className="text-xl font-semibold text-gray-900 mb-4  ">Cost Optimization
              </h3>
<p className="Reduce operational costs while maintaining high performance standards.
                 ">$2</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4text-center">
          <h2 className="text-3xl md: text-4xl font-bold mb-6">;
            Ready to Optimize Your 5G Network?
          </h2>
<p className="Contact our experts today for a comprehensive network assessment
             ">$2</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-emerald-600 hover: bg-emerald-700 text-white font-semibold py-4 px-8 rounded-lgtransition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 w-5h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FiveGOptimizationPage;