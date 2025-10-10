'use client';
import React from 'react';
<<<<<<< HEAD
import { CheckCircle, ArrowRight, Zap, Shield, Star, Users } from 'lucide-react';
=======
import { ArrowRight, Star, CheckCircle, Zap } from 'lucide-react';
>>>>>>> cursor/website-audit-and-update-with-deployment-1f73

const ContentPromotionBanner: React.FC = () => {
  const stats = [
    {
<<<<<<< HEAD
      title: 'AI-Powered Solutions',
      description: 'Leverage cutting-edge AI to automate and optimize your business processes.',
      icon: Zap
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance to protect your data and operations.',
      icon: Shield
    },
    {
      title: 'Proven Results',
      description: 'Join 500+ companies that have transformed their operations with our solutions.',
      icon: Star
    },
    {
      title: 'Expert Support',
      description: '24/7 support from our team of AI and IT specialists.',
      icon: Users
    }
  ];

  const benefits = [
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
<<<<<<< HEAD
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transform Your Business with AI
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Discover how our AI-powered solutions can revolutionize your operations and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-purple-100 text-sm">{feature.description}</p>
=======
      number: '500+',
      label: 'Projects Completed',
      description: 'Successfully delivered projects across various industries'
    },
    {
      number: '99.9%',
      label: 'Uptime Guarantee',
      description: 'Reliable service with industry-leading uptime'
    },
    {
      number: '24/7',
      label: 'Support Available',
      description: 'Round-the-clock technical support and assistance'
    },
    {
      number: '50+',
      label: 'Expert Team Members',
      description: 'Experienced professionals ready to help'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance for maximum speed and efficiency'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: Star,
      title: 'Award Winning',
      description: 'Recognized for excellence in AI and technology solutions'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Banner */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">AI & IT Solutions</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using our cutting-edge technology to achieve 300% ROI, 
            70% cost reduction, and 90% efficiency gains.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-900 transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
              <div className="text-gray-400 text-sm mt-1">{stat.description}</div>
>>>>>>> cursor/website-audit-and-update-with-deployment-1f73
            </div>
          ))}
        </div>

<<<<<<< HEAD
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-purple-100">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-purple-100 mb-4">Happy Clients</div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-purple-100 mb-6">Uptime</div>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold flex items-center mx-auto">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
=======
    <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-8 mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Transform Your Business Today</h2>
        <p className="text-xl text-gray-300 mb-6">
          Join thousands of businesses already using our AI and IT solutions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <feature.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-300 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center">
          Get Started Now
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
>>>>>>> cursor/analyze-improve-and-deploy-application-3150
=======
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Schedule a free consultation with our AI experts and discover how we can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2">
              Schedule Free Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-all duration-300">
              Download Case Study
            </button>
          </div>
        </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-1f73
      </div>
    </div>
  );
};

export default ContentPromotionBanner;