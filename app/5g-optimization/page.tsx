import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

const FiveGOptimizationPage: React.FC = () => {
  const services = [
    {
      title: '5G Network Optimization',
      description: 'Comprehensive optimization of 5G network performance and efficiency.'
    },
    {
      title: 'Security Optimization',
      description: 'Advanced security optimization for 5G network infrastructure.'
    },
    {
      title: 'Team Training',
      description: 'Expert training for 5G network optimization and maintenance.'
    }
  ];

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
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Optimization Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive 5G optimization solutions tailored to your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-8 w-8 text-emerald-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiveGOptimizationPage;
