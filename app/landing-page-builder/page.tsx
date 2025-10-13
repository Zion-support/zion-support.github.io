'use client';
import React
import { Helmet } from 'react-helmet-async';
import React, { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
const LandingPageBuilder: React.FC = () => {
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
    }
  ];

  const benefits = [
    'Drag-and-drop interface for easy page building',
    'Mobile-responsive templates',
    'SEO optimization tools',
    'A/B testing capabilities',
    'Analytics integration',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"
      <Helmet>
        <title>Landing Page Builder - Zion Tech Group</title>
        <meta name="description" content="Create high-converting landing pages with our AI-powered builder." />"
        <meta name="keywords" content="landing page builder, website builder, AI-powered, conversion optimization"
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4"
        <div className="max-w-7xl mx-auto text-center"
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            AI-Powered Landing Page Builder;
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            Create stunning, high-converting landing pages in minutes with our intelligent builder. 
            No coding required, maximum results guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              Start Building Free
              <ArrowRight className="ml-2 h-5 w-5"
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
              View Demo;
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4"
        <div className="max-w-7xl mx-auto"
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16"
            Powerful Features;
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg"
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />"
                <h3 className="text-xl font-semibold text-gray-900 mb-2"
                  {feature.title}
                </h3>
                <p className="text-gray-600"
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white"
        <div className="max-w-7xl mx-auto"
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16"
            Why Choose Our Builder?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3"
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />"
                <p className="text-gray-700"
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600"
        <div className="max-w-4xl mx-auto text-center"
          <h2 className="text-4xl font-bold text-white mb-6"
            Ready to Build Your Perfect Landing Page?
          </h2>
          <p className="text-xl text-blue-100 mb-8"
            Join thousands of businesses already using our platform to create amazing landing pages.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            Get Started Today;
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4"
        <div className="max-w-7xl mx-auto"
          <div className="text-center mb-16"
            <h2 className="text-4xl font-bold text-gray-900 mb-4"
              Get in Touch;
            </h2>
            <p className="text-xl text-gray-600"
              Have questions? We're here to help you succeed.'
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8"
            <div className="text-center"
              <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />"
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>"
              <p className="text-gray-600"
            </div>
            <div className="text-center"
              <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" />"
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>"
              <p className="text-gray-600"
            </div>
            <div className="text-center"
              <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-4" />"
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>"
              <p className="text-gray-600"
            </div>
          </div>
        </div>
      </section>
    </div>
};

export default LandingPageBuilder;