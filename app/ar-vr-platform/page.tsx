'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Eye, Headphones, Zap, Shield, Globe, ArrowRight, CheckCircle, Target, Users, Sparkles } from 'lucide-react';

const ARVRPlatformPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Immersive Experiences',
      description: 'Create stunning AR and VR experiences that captivate your audience'
    },
    {
      icon: Headphones,
      title: 'Spatial Audio',
      description: 'Advanced 3D audio technology for realistic immersive experiences'
    },
    {
      icon: Zap,
      title: 'Real-time Rendering',
      description: 'High-performance rendering for smooth, responsive interactions'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    }
  ];

  const useCases = [
    'Virtual training and education',
    'Remote collaboration and meetings',
    'Virtual showrooms and retail',
    'Architectural visualization',
    'Healthcare simulations',
    'Entertainment and gaming',
    'Real estate virtual tours',
    'Industrial maintenance training'
  ];

  return (
    <>
      <Helmet>
        <title>AR/VR Platform | Zion Tech Group</title>
        <meta name="description" content="Advanced AR/VR platform solutions by Zion Tech Group. Create immersive experiences for business and entertainment." />
        <meta name="keywords" content="AR platform, VR platform, augmented reality, virtual reality, immersive experiences, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AR/VR Platform
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build immersive augmented and virtual reality experiences with our cutting-edge platform.
              Transform how users interact with your content and services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Eye className="mr-2 h-5 w-5" />
                Start Building
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Target className="mr-2 h-5 w-5" />
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Platform Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 bg-purple-800/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Use Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {useCases.slice(0, 4).map((useCase, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{useCase}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {useCases.slice(4).map((useCase, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Supported Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">WebXR</h3>
                <p className="text-gray-300">Cross-platform AR/VR experiences in web browsers</p>
              </div>
              <div className="text-center">
                <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Unity Integration</h3>
                <p className="text-gray-300">Seamless integration with Unity game engine</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Custom SDKs</h3>
                <p className="text-gray-300">Native SDKs for iOS, Android, and desktop platforms</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-purple-800/20">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Start creating immersive AR/VR experiences today with our powerful platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Zap className="mr-2 h-5 w-5" />
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <ArrowRight className="mr-2 h-5 w-5" />
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ARVRPlatformPage;