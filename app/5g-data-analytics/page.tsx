import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Users } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../../components/EnhancedSEO';

const Page = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Advanced Analytics',
      description: 'Cutting-edge 5G data analytics for maximum efficiency'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Support',
      description: '24/7 support from our team of specialists'
    }
  ];

  return (
    <>
      <EnhancedSEO 
        title="5G Data Analytics - Zion Tech Group"
        description="Professional 5G data analytics services by Zion Tech Group. Expert solutions for your business needs."
        keywords="5G, data analytics, business solutions, technology services, professional services"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5G Data Analytics
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional 5G data analytics services designed to help your business succeed and grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our 5G Data Analytics Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We deliver exceptional results with cutting-edge technology and expert knowledge.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our 5G data analytics services can help your business succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;
=======
import { Helmet } from 'react-helmet-async';

const FiveGDataAnalyticsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>5g data analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5g data analytics solutions and services" />
        <meta name="keywords" content="5g, data, analytics" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">5g data analytics</h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional 5g data analytics solutions and services
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Expert Solutions
                </h3>
                <p className="text-blue-700">
                  Our team of experts delivers cutting-edge solutions.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Custom Implementation
                </h3>
                <p className="text-green-700">
                  Tailored implementations for your specific requirements.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  24/7 Support
                </h3>
                <p className="text-purple-700">
                  Round-the-clock support for all your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FiveGDataAnalyticsPage;

>>>>>>> main
