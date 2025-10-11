'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import {Wifi, BarChart, CheckCircle, Brain, Target, Zap, Shield, PieChart} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const FiveGImplementationPage: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: 'Ultra-Low Latency',
      description: 'Achieve sub-millisecond latency for real-time applications and critical operations.',
      benefits: ['< 1ms latency', 'Real-time processing', 'Critical operations support', 'Edge computing ready']
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
      icon: Target,
      title: 'Massive IoT Support',
      description: 'Connect millions of devices with enhanced capacity and efficiency.',
      benefits: ['1M+ devices per km²', 'Low power consumption', 'Extended battery life', 'Smart city ready']
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
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
  ];

  const values = [
    {
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
      details: ['Performance monitoring', 'Network optimization', 'Capacity management', 'Ongoing support']
    }
  ];
<<<<<<< HEAD

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>5G Implementation Services - Zion Tech Group</title>
        <meta name="description" content="Professional 5G network implementation services with ultra-low latency, high-speed connectivity, and AI-powered optimization." />
        <meta name="keywords" content="5G implementation, network deployment, ultra-low latency, edge computing, IoT connectivity" />
      </Helmet>
=======
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="Complete 5G network implementation services with ultra-low latency, high-speed connectivity, and advanced features for modern applications and IoT ecosystems." />
        <meta name="keywords" content="5G implementation, network infrastructure, ultra-low latency, high-speed connectivity, IoT, smart cities, edge computing" />
>>>>>>> cursor/fix-errors-and-merge-to-main-0f52
      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="pt-20 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              5G <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Implementation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with next-generation 5G technology. Ultra-low latency, massive connectivity, and AI-powered optimization.
            </p>
          </div>
        </section>
=======
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5G Network <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Implementation</span>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Complete 5G network implementation services with ultra-low latency, high-speed connectivity, and advanced features for modern applications and IoT ecosystems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Demo
              </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-0f52

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
<<<<<<< HEAD
              <h2 className="text-4xl font-bold text-white mb-4">5G Capabilities</h2>
=======
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced 5G Features
              </h2>
>>>>>>> cursor/fix-errors-and-merge-to-main-0f52
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Unlock the full potential of 5G with our comprehensive implementation services
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<<<<<<< HEAD
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
=======
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                    ))}
              ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-0f52

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Industry Applications</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how 5G can revolutionize your industry
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<<<<<<< HEAD
              {useCases.map((useCase, index) => {
                const IconComponent = useCase.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{useCase.description}</p>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
=======
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <useCase.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {useCase.description}
                  </p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
{benefit}
                    ))}
              ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-0f52

        {/* Implementation Process Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Implementation Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our proven methodology ensures successful 5G deployment
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{value.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300 mb-4">{value.description}</p>
                  <ul className="space-y-1">
                    {value.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-sm text-gray-400">
                        {detail}
                    ))}
              ))}

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Implement 5G?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Transform your business with next-generation 5G technology. Get started with our expert implementation services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Network?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Get started with our 5G implementation services and unlock the full potential of next-generation connectivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Contact Our Experts
              </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-0f52

      <Footer />
  );
};

export default FiveGImplementationPage;
<<<<<<< HEAD
=======
</Footer>
</ArrowRight>
</button>
</div>
</div>
</section>
</CheckCircle>
</li>
</ul>
</div>
</div>
</div>
</section>
</CheckCircle>
</li>
</ul>
</useCase>
</div>
</div>
</div>
</section>
</CheckCircle>
</li>
</ul>
</feature>
</div>
</div>
</div>
</section>
</ArrowRight>
</button>
</div>
</span>
</h1>
</div>
</div>
</section>
</main>
</Navigation>
</title>
</Helmet>
</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-0f52
