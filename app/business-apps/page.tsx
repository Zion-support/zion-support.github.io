'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Smartphone, Laptop, Globe, Zap, CheckCircle, ArrowRight, Target, Users, Shield, Database } from 'lucide-react';

const BusinessAppsPage: React.FC = () => {
  const appTypes = [
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Native iOS and Android apps for seamless mobile experiences'
    },
    {
      icon: Laptop,
      title: 'Web Applications',
      description: 'Responsive web apps that work across all devices and browsers'
    },
    {
      icon: Globe,
      title: 'Progressive Web Apps',
      description: 'Modern web apps with native app-like features and performance'
    },
    {
      icon: Zap,
      title: 'Cross-Platform Apps',
      description: 'Single codebase applications that run on multiple platforms'
    }
  ];

  const features = [
    'Custom UI/UX design',
    'Real-time data synchronization',
    'Offline functionality',
    'Push notifications',
    'User authentication',
    'Payment integration',
    'Analytics and reporting',
    'Cloud deployment'
  ];

  return (
    <>
      <Helmet>
        <title>Business Applications | Zion Tech Group</title>
        <meta name="description" content="Custom business application development by Zion Tech Group. Mobile, web, and cross-platform apps for your business needs." />
        <meta name="keywords" content="business apps, mobile apps, web apps, custom software, app development, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Business Applications
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with custom mobile, web, and cross-platform applications.
              Built with modern technologies and designed for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Smartphone className="mr-2 h-5 w-5" />
                Start Your App
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Target className="mr-2 h-5 w-5" />
                View Portfolio
              </button>
            </div>
          </div>
        </section>

        {/* App Types Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Application Types
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {appTypes.map((type, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <type.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                  <p className="text-gray-300">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-purple-800/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              App Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {features.slice(4).map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Development Process Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Development Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">1. Planning</h3>
                <p className="text-gray-300">Requirements gathering and project planning</p>
              </div>
              <div className="text-center">
                <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">2. Development</h3>
                <p className="text-gray-300">Agile development with regular updates</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">3. Deployment</h3>
                <p className="text-gray-300">Testing, deployment, and ongoing support</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-purple-800/20">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Build Your App?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let us help you create the perfect application for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <ArrowRight className="mr-2 h-5 w-5" />
                Start Project
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Globe className="mr-2 h-5 w-5" />
                View Examples
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BusinessAppsPage;