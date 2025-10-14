import React, { Suspense } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

const FiveGOptimizationPage: React.FC = () => {
  return (
    <div className=" min-h-screenbg-gray-50">
      <EnhancedSEO 
        title="5G Optimization Services | Zion Tech Group"
        description="Expert 5G network optimization services to maximize performance, efficiency, and cost-effectiveness."
        keywords="5G optimization, network optimization, performance tuning, 5G efficiency"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-rfrom-emerald-900to-teal-900text-whitepy-20">
        <div className=" containermx-autopx-4">
          <div className=" max-w-4xlmx-autotext-center">
            <h1 className=" text-4xlmd:text-6xlfont-boldmb-6">
              5G Optimization Services
            </h1>
            <p className=" text-xlmd:text-2xlmb-8text-emerald-100">
              Maximize your 5G network performance with our expert optimization services
            </p>
            <Link 
              to="/contact" 
              className=" inline-fle x items-center bg-emerald-600hover:bg-emerald-700text-whitefont-semiboldpy-4px-8rounded-lgtransition-colors"
            >
              Optimize Now
              <ArrowRight className=" ml-2w-5h-5" />
            </Link>
            </div>
        </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className=" py-20">
        <div className=" containermx-autopx-4">
          <div className=" text-centermb-16">
            <h2 className=" text-3xlfont-boldtext-gray-900mb-6">
              Our 5G Optimization Services
            </h2>
            <p className=" text-xltext-gray-600max-w-3xlmx-auto">
              Comprehensive optimization solutions to enhance your 5G network performance
            </p>
            </div>
        </div>

          <div className=" gridmd:grid-cols-3gap-8">
            <div className=" bg-whitep-8rounded-lgshadow-lg">
              <CheckCircle className=" w -12h-12 text-emerald-600mb-4" />
              <h3 className=" text-xlfont-semiboldtext-gray-900mb-4">
                Network Performance Tuning
              </h3>
              <p className=" text-gray-600">
                Advanced performance optimization to maximize throughput and minimize latency
              </p>
              </div>
        </div>

            <div className=" bg-whitep-8rounded-lgshadow-lg">
              <CheckCircle className=" w -12h-12 text-emerald-600mb-4" />
              <h3 className=" text-xlfont-semiboldtext-gray-900mb-4">
                Coverage Optimization
              </h3>
              <p className=" text-gray-600">
                Strategic antenna placement and power optimization for maximum coverage
              </p>
              </div>
        </div>

            <div className=" bg-whitep-8rounded-lgshadow-lg">
              <CheckCircle className=" w -12h-12 text-emerald-600mb-4" />
              <h3 className=" text-xlfont-semiboldtext-gray-900mb-4">
                Capacity Planning
              </h3>
              <p className=" text-gray-600">
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
      <section className=" bg-gray-900text-whitepy-20">
        <div className=" containermx-autopx-4text-center">
          <h2 className=" text-3xlfont-boldmb-6">
            Ready to Optimize Your 5G Network?
          </h2>
          <p className=" text-xlmb-8text-gray-300">
            Contact us today for a comprehensive 5G optimization assessment
          </p>
          <Link 
            to="/contact" 
            className=" inline-fle x items-center bg-emerald-600hover:bg-emerald-700text-whitefont-semiboldpy-4px-8rounded-lgtransition-colors"
          >
            Get Started
            <ArrowRight className=" ml-2w-5h-5" />
          </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiveGOptimizationPage;