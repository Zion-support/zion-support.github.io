'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Wifi, BarChart, CheckCircle, Brain, Target, TrendingUp, FileText, Zap, Shield, ArrowRight } from 'lucide-react';
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-cd37
import { Wifi, BarChart, CheckCircle, Brain, Target, TrendingUp, FileText, Zap, Shield, ArrowRight, PieChart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const FiveGImplementationPage: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: 'Ultra-Low Latency',
<<<<<<< HEAD
      description: 'Achieve sub-millisecond latency for real-time applications and critical communications.',
      benefits: ['< 1ms latency', 'Real-time processing', 'Critical communications', 'IoT applications']
=======
      description: 'Achieve sub-millisecond latency for real-time applications and critical operations.',
      benefits: ['< 1ms latency', 'Real-time processing', 'Critical operations support', 'Edge computing ready']
>>>>>>> cursor/fix-errors-and-merge-to-main-cd37
    },
    {
      icon: BarChart,
      title: 'High-Speed Connectivity',
      description: 'Experience blazing-fast speeds up to 10 Gbps for seamless data transfer.',
<<<<<<< HEAD
    },
    {
=======
      benefits: ['Up to 10 Gbps speeds', 'Massive data transfer', '4K/8K streaming', 'Cloud integration']
    },
    {
      icon: Brain,
      title: 'AI-Powered Optimization',
      description: 'Intelligent network management with AI-driven performance optimization.',
      benefits: ['Smart routing', 'Predictive maintenance', 'Load balancing', 'Performance analytics']
    },
    {
      icon: Target,
      title: 'Massive IoT Support',
      description: 'Connect millions of devices with enhanced capacity and efficiency.',
      benefits: ['1M+ devices per km²', 'Low power consumption', 'Extended battery life', 'Smart city ready']
>>>>>>> cursor/fix-errors-and-merge-to-main-cd37
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
<<<<<<< HEAD
      description: 'Advanced security protocols and encryption for secure 5G communications.',
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'AI-powered insights to optimize your 5G network performance.',
      benefits: ['Predictive analytics', 'Trend analysis', 'Performance metrics', 'Growth forecasting']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Leverage artificial intelligence for smart network management.',
      benefits: ['Smart routing', 'Predictive maintenance', 'Automated optimization', 'Intelligent analytics']
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Advanced security protocols for 5G network protection.',
      benefits: ['End-to-end encryption', 'Threat detection', 'Secure authentication', 'Privacy protection']
    }
  ];

  const benefits = [
    'Increase network efficiency by up to 80%',
    'Reduce operational costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Real-time processing and analysis',
    'Enhanced security and compliance'
=======
      description: 'Advanced security protocols and encryption for secure communications.',
      benefits: ['End-to-end encryption', 'Network slicing', 'Zero-trust architecture', 'Compliance ready']
    },
    {
      icon: Zap,
      title: 'Edge Computing',
      description: 'Process data closer to the source for faster response times.',
      benefits: ['Reduced latency', 'Bandwidth optimization', 'Real-time analytics', 'Local processing']
    }
  ];

  const useCases = [
    {
      title: 'Smart Manufacturing',
      description: 'Real-time monitoring and control of industrial processes.',
      icon: Target,
      benefits: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Worker safety']
    },
    {
      title: 'Autonomous Vehicles',
      description: 'Ultra-reliable communication for self-driving cars.',
      icon: CheckCircle,
      benefits: ['Vehicle-to-vehicle communication', 'Traffic optimization', 'Safety systems', 'Route planning']
    },
    {
      title: 'Healthcare',
      description: 'Remote surgery and telemedicine applications.',
      icon: Brain,
      benefits: ['Remote surgery', 'Telemedicine', 'Patient monitoring', 'Medical imaging']
    },
    {
      title: 'Smart Cities',
      description: 'Connected infrastructure for urban management.',
      icon: PieChart,
      benefits: ['Traffic management', 'Energy optimization', 'Public safety', 'Environmental monitoring']
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-cd37
  ];

  const values = [
    {
<<<<<<< HEAD
      icon: Brain,
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with AI and technology.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Your data and systems are protected with enterprise-grade security.'
=======
      step: '01',
      title: 'Network Assessment',
      description: 'Comprehensive analysis of current infrastructure and requirements.',
      details: ['Site surveys', 'Coverage analysis', 'Capacity planning', 'Security audit']
    },
    {
      step: '02',
      title: 'Infrastructure Design',
      description: 'Custom 5G network architecture tailored to your needs.',
      details: ['Core network design', 'RAN planning', 'Backhaul solutions', 'Edge computing setup']
    },
    {
      step: '03',
      title: 'Deployment',
      description: 'Professional installation and configuration of 5G equipment.',
      details: ['Equipment installation', 'Network configuration', 'Testing and validation', 'Performance tuning']
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuous monitoring and optimization for peak performance.',
      details: ['Performance monitoring', 'Network optimization', 'Capacity management', 'Security updates']
>>>>>>> cursor/fix-errors-and-merge-to-main-cd37
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Implementation Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with cutting-edge 5G implementation services. Ultra-low latency, high-speed connectivity, and AI-powered optimization." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">5G Implementation</span> Services
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your business with cutting-edge 5G technology. Ultra-low latency, high-speed connectivity, and AI-powered optimization for the next generation of applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">5G Capabilities</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Unlock the full potential of 5G technology with our comprehensive implementation services.
              </p>
            </div>
<<<<<<< HEAD
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
                    <div className="text-blue-400 mb-4">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
=======

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-cd37
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits Section */}
                Why Choose Our 5G Implementation?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the power of next-generation connectivity
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
=======
        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">5G Use Cases</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how 5G can transform your industry and unlock new possibilities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <useCase.icon className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
>>>>>>> cursor/fix-errors-and-merge-to-main-cd37
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                );
              })}
=======
        {/* Implementation Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Implementation Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our proven methodology ensures successful 5G deployment and optimization.
              </p>
            </div>

            <div className="space-y-8">
              {implementationSteps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300 mb-4">{step.description}</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-cd37
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our 5G implementation services today and experience the future of connectivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
              </button>
            </div>
=======
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Implement 5G?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how 5G can transform your business operations and unlock new opportunities.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center mx-auto">
              Start Your 5G Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-cd37
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

<<<<<<< HEAD
export default FiveGImplementationPage;
export default FiveGImplementationPage;
=======
export default FiveGImplementationPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-cd37
