'use client';
import React from 'react';



import { Helmet } from 'react-helmet-async';



import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';




const PagePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    };
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
  );
  );
        <title>Analytics Tools | Zion Tech Group</title>
        <meta name="description"content="Professional Analytics Tools services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="analytics tools, AI solutions, IT services, Zion Tech Group, data analytics" />
      </Helmet>;
      {/* Hero Section */};
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Analytics Tools
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our advanced analytics solutions. 
            Powered by cutting-edge AI technology and industry expertise.
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our analytics solutions deliver unmatched performance, security, and scalability.
          </p>
        </div>
      </section>

      {/* Features Section */};
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Analytics Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
            Experience the power of our analytics solutions for your business.
          </p>
        </div>
      </section>

      {/* CTA Section */};
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Contact our experts to discuss your analytics needs and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5"/>
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                </Phone><Mail className="mr-2 h-5 w-5"/>
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PagePage;</Mail>