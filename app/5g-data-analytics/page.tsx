import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Page5gDataAnalyticsPage: React.FC = () => {
  const services = [
    {
      title: 'Expert 5g Data Analytics Solutions',
      description: 'Professional 5g data analytics services tailored to your needs.'
    },
    {
      title: 'Custom Implementation',
      description: 'Tailored 5g data analytics implementations for your specific requirements.'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support for all your 5g data analytics needs.'
    }
  ];
  return (
    <>
      <Helmet>
        <title>5g Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5g data analytics solutions and services" />
        <meta name="keywords" content="5g, data, analytics" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">5g Data Analytics</h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional 5g data analytics solutions and services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-5 00 to-purple-6 00 text-white font-semibold rounded-lg hover:from-cyan-6 00 hover:to-purple-7 0 0 transition-all duration-3 0 0 group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-4 00 text-cyan-4 00 font-semibold rounded-lg hover:bg-cyan-4 0 0/1 0 transition-all duration-3 0 0"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-2 0 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our 5G Data Analytics Services?
              </h2>
              <p className="text-xl text-gray-3 0 0 max-w-2xl mx-auto">
                We deliver exceptional results with cutting-edge technology and expert knowledge.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-1 6 h-1 6 bg-gradient-to-r from-cyan-5 0 0 to-purple-6 0 0 rounded-full flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
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
  )
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

export default Page5gDataAnalyticsPage;
