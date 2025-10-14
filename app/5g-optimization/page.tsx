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
      <section className="bg-gradient-to-rfrom-emerald-9 0 0to-teal-9 0 0text-whitepy-2 0">
        <div className="containermx-autopx-4">
          <div className="max-w-4xlmx-autotext-center">
            <h1 className="text-4xlmd:text-6xlfont-boldmb-6">
              5G Optimization Services
            </h1>
            <p className="text-xlmd:text-2xlmb-8text-emerald-1 0 0">
              Maximize your 5G network performance with our expert optimization services
            </p>
            <Link 
              to="/contact" 
              className="inline-fle x items-center bg-emerald-6 0 0hover:bg-emerald-7 0 0text-whitefont-semiboldpy-4px-8rounded-lgtransition-colors"
            >
              Optimize Now
              <ArrowRight className="ml-2w-5h-5" />
            </Link>
            </div>
        </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-2 0">
        <div className="containermx-autopx-4">
          <div className="text-center mb-16">
            <h2 className="text-3xlfont-boldtext-gray-9 0 0mb-6">
              Our 5G Optimization Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive optimization solutions to enhance your 5G network performance
            </p>
            </div>
        </div>

          <div className="gridmd:grid-cols-3gap-8">
            <div className="bg-whitep-8rounded-lgshadow-lg">
              <CheckCircle className="w -1 2h-1 2 text-emerald-6 0 0mb-4" />
              <h3 className="text-xlfont-semiboldtext-gray-9 0 0mb-4">
                Network Performance Tuning
              </h3>
              <p className="text-gray-6 0 0">
                Advanced performance optimization to maximize throughput and minimize latency
              </p>
              </div>
        </div>

            <div className="bg-whitep-8rounded-lgshadow-lg">
              <CheckCircle className="w -1 2h-1 2 text-emerald-6 0 0mb-4" />
              <h3 className="text-xlfont-semiboldtext-gray-9 0 0mb-4">
                Coverage Optimization
              </h3>
              <p className="text-gray-6 0 0">
                Strategic antenna placement and power optimization for maximum coverage
              </p>
              </div>
        </div>

            <div className="bg-whitep-8rounded-lgshadow-lg">
              <CheckCircle className="w -1 2h-1 2 text-emerald-6 0 0mb-4" />
              <h3 className="text-xlfont-semiboldtext-gray-9 0 0mb-4">
                Capacity Planning
              </h3>
              <p className="text-gray-6 0 0">
                Intelligent capacity management to handle peak loads efficiently
              </p>
              </div>
        </div>
            </div>
        </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-9 0 0text-whitepy-2 0">
        <div className="containermx-autopx-4text-center">
          <h2 className="text-3xlfont-boldmb-6">
            Ready to Optimize Your 5G Network?
          </h2>
          <p className="text-xlmb-8text-gray-3 0 0">
            Contact us today for a comprehensive 5G optimization assessment
          </p>
          <Link 
            to="/contact" 
            className="inline-fle x items-center bg-emerald-6 0 0hover:bg-emerald-7 0 0text-whitefont-semiboldpy-4px-8rounded-lgtransition-colors"
          >
            Get Started
            <ArrowRight className="ml-2w-5h-5" />
          </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiveGOptimizationPage;