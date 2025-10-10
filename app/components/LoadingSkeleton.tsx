'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const LoadingSkeletonPage: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>LoadingSkeleton | Zion Tech Group</title>
        <meta name="description" content="Professional LoadingSkeleton services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="LoadingSkeleton, AI solutions, IT services, Zion Tech Group, loadingskeleton" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                LoadingSkeleton
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced loadingskeleton solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our LoadingSkeleton?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our loadingskeleton solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our loadingskeleton solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your loadingskeleton needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoadingSkeletonPage;
export const ServiceCardSkeleton: React.FC = React.memo(() => (
  <div className="cyber-card p-6 animate-pulse">
    <div className="w-16 h-16 bg-gray-700 rounded-xl mx-auto mb-6"><div className="h-6 bg-gray-700 rounded mb-3"><div className="h-4 bg-gray-700 rounded mb-4"><div className="space-y-2 mb-4">
      <div className="h-3 bg-gray-700 rounded"><div className="h-3 bg-gray-700 rounded"><div className="h-3 bg-gray-700 rounded w-3/4"><div className="h-8 bg-gray-700 rounded">);</div>
export const HeroSkeleton: React.FC = React.memo(() => (</div><div className="text-center mb-16 animate-pulse">
    <div className="h-16 bg-gray-700 rounded mb-6 mx-auto max-w-2xl"><div className="h-8 bg-gray-700 rounded mb-8 mx-auto max-w-4xl"><div className="h-6 bg-gray-700 rounded mb-8 mx-auto max-w-3xl"><div className="flex justify-center gap-4">
      <div className="h-12 bg-gray-700 rounded w-48"><div className="h-12 bg-gray-700 rounded w-48">);
</div>
export const ContentSkeleton: React.FC = React.memo(() => (</div><div className="animate-pulse">
    <div className="h-8 bg-gray-700 rounded mb-4"><div className="h-4 bg-gray-700 rounded mb-2"><div className="h-4 bg-gray-700 rounded mb-2"><div className="h-4 bg-gray-700 rounded w-3/4">);</div>
export const CardSkeleton: React.FC = React.memo(() => (</div><div className="cyber-card p-6 animate-pulse">
    <div className="h-6 bg-gray-700 rounded mb-4"><div className="h-4 bg-gray-700 rounded mb-2"><div className="h-4 bg-gray-700 rounded mb-2"><div className="h-4 bg-gray-700 rounded w-2/3">);</div>
export default ServiceCardSkeleton;</div>
export const HeroSkeleton: React.FC = React.memo(() => (
  <div className="text-center mb-16 animate-pulse">
    <div className="h-16 bg-gray-700 rounded mb-6 mx-auto max-w-2xl">
    <div className="h-8 bg-gray-700 rounded mb-8 mx-auto max-w-4xl">
    <div className="h-6 bg-gray-700 rounded mb-8 mx-auto max-w-3xl">
    <div className="flex justify-center gap-4">
      <div className="h-12 bg-gray-700 rounded w-48">
      <div className="h-12 bg-gray-700 rounded w-48">
    </div>
);

export const ContentSkeleton: React.FC = React.memo(() => (
  <div className="animate-pulse">
    <div className="h-8 bg-gray-700 rounded mb-4">
    <div className="h-4 bg-gray-700 rounded mb-2">
    <div className="h-4 bg-gray-700 rounded mb-2">
    <div className="h-4 bg-gray-700 rounded w-3/4">
  </div>
);

export const CardSkeleton: React.FC = React.memo(() => (
  <div className="cyber-card p-6 animate-pulse">
    <div className="h-6 bg-gray-700 rounded mb-4">
    <div className="h-4 bg-gray-700 rounded mb-2">
    <div className="h-4 bg-gray-700 rounded mb-2">
    <div className="h-4 bg-gray-700 rounded w-2/3">
  </div>
);
,
export default ServiceCardSkeleton;
