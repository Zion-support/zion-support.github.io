<<<<<<< HEAD
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Brain, Factory, Stethoscope, Building, CheckCircle, BarChart } from 'lucide-react'
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, Factory, Stethoscope, Building, CheckCircle, ArrowRight, Zap, Shield, Target } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-c724

const AiAutonomousSystemsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
<<<<<<< HEAD
      title: 'Intelligent Decision Making',
      description: 'Advanced AI algorithms that enable autonomous decision-making in complex environments.',
      benefits: ['Real-time processing', 'Adaptive learning', 'Predictive analytics', 'Risk assessment']
    },
    {
      icon: Factory,
      title: 'Smart Manufacturing',
      description: 'Autonomous robots and systems for industrial automation and production.',
      benefits: ['Quality control', 'Predictive maintenance', 'Optimized workflows', 'Safety monitoring']
    },
    {
      icon: Stethoscope,
      title: 'Healthcare Systems',
      description: 'Autonomous medical devices and systems for patient care and treatment.',
      benefits: ['Patient monitoring', 'Diagnostic assistance', 'Treatment optimization', 'Emergency response']
    },
    {
      icon: Building,
      title: 'Smart Cities',
      description: 'Autonomous infrastructure systems for urban management and optimization.',
      benefits: ['Traffic management', 'Energy optimization', 'Waste management', 'Public safety']
=======
      title: 'Smart Manufacturing',
      description: 'Autonomous robots and systems for industrial automation and production.',
      benefits: ['Automated production lines', 'Quality control systems', 'Predictive maintenance', 'Real-time monitoring']
    },
    {
      icon: Factory,
      title: 'Healthcare Systems',
      description: 'Autonomous medical devices and systems for patient care and treatment.',
      benefits: ['Surgical robots', 'Diagnostic systems', 'Patient monitoring', 'Treatment automation']
    },
    {
      icon: Stethoscope,
      title: 'Smart Cities',
      description: 'Autonomous infrastructure systems for urban management and optimization.',
      benefits: ['Traffic management', 'Energy optimization', 'Waste management', 'Public safety']
    },
    {
      icon: Building,
      title: 'Transportation',
      description: 'Autonomous vehicles and transportation systems for safer, efficient mobility.',
      benefits: ['Self-driving vehicles', 'Fleet management', 'Route optimization', 'Safety systems']
>>>>>>> cursor/fix-errors-and-merge-to-main-c724
    }
  ]

  const benefits = [
    'Increased efficiency by up to 60%',
    'Reduced operational costs',
    '24/7 autonomous operation',
    'Enhanced safety and reliability',
    'Scalable and adaptable systems',
    'Real-time monitoring and control'
  ]

  const benefits = [
    'Increase operational efficiency by up to 90%',
    'Reduce human error and improve safety',
    '24/7 autonomous operation capabilities',
    'Real-time decision making and adaptation',
    'Seamless integration with existing systems',
    'Scalable solutions for any industry'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Autonomous Systems - Zion Tech Group</title>
        <meta name="description" content="Build intelligent autonomous systems with our AI solutions. Self-driving vehicles, smart manufacturing, and autonomous infrastructure for the future." />
        <meta name="keywords" content="AI autonomous systems, artificial intelligence, autonomous technology, AI solutions, intelligent automation" />
      </Helmet>

<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Autonomous <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Systems</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build intelligent autonomous systems that operate independently and adapt to changing conditions. 
              From smart manufacturing to autonomous vehicles, we create the future of automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
=======
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              AI Autonomous Systems
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build intelligent autonomous systems that operate independently and adapt to changing conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
>>>>>>> cursor/fix-errors-and-merge-to-main-c724
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
<<<<<<< HEAD
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives autonomous decision-making and operation
              </p>
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300">Advanced AI technology that drives autonomous operations</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-c724
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
<<<<<<< HEAD
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
=======
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
>>>>>>> cursor/fix-errors-and-merge-to-main-c724
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
<<<<<<< HEAD
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency through autonomous operation
              </p>
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Autonomous Systems?</h2>
              <p className="text-xl text-gray-300">Transform your operations with intelligent automation</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-c724
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Zap className="h-6 w-6 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your autonomous systems requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default AiAutonomousSystemsPage
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Autonomous Systems?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of autonomous technology with our AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AiAutonomousSystemsPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-c724
