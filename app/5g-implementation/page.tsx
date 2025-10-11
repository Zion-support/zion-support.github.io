'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, BarChart, CheckCircle, Brain, Target, TrendingUp, FileText, Zap, Shield, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const FiveGImplementationPage: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: 'Ultra-Low Latency',
      description: 'Achieve sub-millisecond latency for real-time applications and critical communications.',
      benefits: ['< 1ms latency', 'Real-time processing', 'Critical communications', 'IoT applications']
    },
    {
      icon: BarChart,
      title: 'High-Speed Connectivity',
      description: 'Experience blazing-fast speeds up to 10 Gbps for seamless data transfer.',
      benefits: ['Up to 10 Gbps speeds', 'Massive data transfer', '4K/8K streaming', 'Cloud integration']
    },
    {
      icon: Brain,
      title: 'AI-Powered Optimization',
      description: 'Intelligent network management with AI-driven performance optimization.',
      benefits: ['Smart routing', 'Predictive maintenance', 'Load balancing', 'Performance analytics']
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Advanced security protocols designed for 5G networks and IoT devices.',
      benefits: ['End-to-end encryption', 'Network slicing', 'Zero-trust architecture', 'Threat detection']
    }
  ];

  const useCases = [
    {
      icon: Target,
      title: 'Smart Cities',
      description: 'Transform urban infrastructure with connected sensors, traffic management, and public services.',
      benefits: ['Traffic optimization', 'Environmental monitoring', 'Public safety', 'Resource management']
    },
    {
      icon: TrendingUp,
      title: 'Industrial IoT',
      description: 'Revolutionize manufacturing with real-time monitoring and predictive maintenance.',
      benefits: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Worker safety']
    },
    {
      icon: FileText,
      title: 'Healthcare',
      description: 'Enable telemedicine, remote surgery, and real-time patient monitoring.',
      benefits: ['Remote surgery', 'Patient monitoring', 'Medical imaging', 'Emergency response']
    }
  ];

  const implementationSteps = [
    {
      step: '01',
      title: 'Network Assessment',
      description: 'Comprehensive analysis of your current infrastructure and 5G readiness.',
      details: ['Infrastructure audit', 'Coverage mapping', 'Performance testing', 'Security evaluation']
    },
    {
      step: '02',
      title: 'Strategic Planning',
      description: 'Custom 5G implementation roadmap tailored to your business needs.',
      details: ['Use case identification', 'Technology selection', 'Timeline planning', 'Budget optimization']
    },
    {
      step: '03',
      title: 'Infrastructure Deployment',
      description: 'Installation and configuration of 5G equipment and network components.',
      details: ['Equipment installation', 'Network configuration', 'Security implementation', 'Performance tuning']
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Comprehensive testing and fine-tuning for optimal performance.',
      details: ['Performance testing', 'Security validation', 'User acceptance testing', 'Continuous monitoring']
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Implementation Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive 5G implementation services. Ultra-low latency, high-speed connectivity, and AI-powered optimization." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">5G Implementation</span> Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with next-generation 5G technology. Ultra-low latency, blazing-fast speeds, and AI-powered optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">5G Capabilities</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Unlock the full potential of 5G with our comprehensive implementation services.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
                  <feature.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">5G Use Cases</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how 5G can transform your industry and unlock new possibilities.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                  <useCase.icon className="w-12 h-12 text-purple-400 mb-6" />
                  <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 mb-6">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Implementation Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our proven methodology ensures successful 5G deployment and optimization.
              </p>
            </div>
            <div className="space-y-12">
              {implementationSteps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-300 mb-4">{step.description}</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Implement 5G?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how 5G can transform your business operations and unlock new opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                Start Your 5G Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View All Services
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default FiveGImplementationPage;