import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Users } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

const Page = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8h-8" />,
      title: 'Advanced Analytics',
      description: 'Cutting-edge 5G data analytics for maximum efficiency'
    },
    {
      icon: <Shield className="w-8h-8" />,
      title: &apos;Secure & Reliable&apos;,
      description: 'Enterprise-grade security and 99.9% uptime'
    },
    {
      icon: <Users className="w-8h-8" />,
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
        <section className="relative py-20 px-4 sm:px-6lg:px-8">
          <div className="max-w-7xl mx-autotext-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5G Data Analytics
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-texttext-transparent">
                Solutions
              </span>
            </h1>
<p className="Professional 5G data analytics services designed to help your business succeed and grow.
               ">$2</p>
            <div className="flex flex-col sm:flex-row gap-4justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1transition-transform" />
              </Link>
              <Link to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-allduration-300  ">View Demo</Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6lg:px-8">
          <div className="max-w-7xlmx-au to">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our 5G Data Analytics Services?
              </h2>
<p className="We deliver exceptional results with cutting-edge technology and expert knowledge.
                 ">$2</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4  ">{feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3  ">{feature.title}</h3>
                  <p className="text-gray-300   ">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8bg-slate-800/30">
          <div className="max-w-4xl mx-autotext-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
<p className="Let&apos;s discuss how our 5G data analytics services can help your business succeed.
               ">$2</p>
            <div className="flex flex-col sm:flex-row gap-4justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300group"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1transition-transform" />
              </Link>
              <Link to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-allduration-300  ">View All Services</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;
