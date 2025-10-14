'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Wifi, Zap, Shield, Globe, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Users, BarChart } from 'lucide-react'

const FiveGImplementationPage: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: '5G Network Design',
      description: 'Complete 5G network design and implementation with optimal coverage and performance.',
      benefits: ['Network planning', 'Coverage optimization', 'Performance tuning'],
    },
    {
      icon: Zap,
      title: 'Ultra-Low Latency',
      description: 'Ultra-low latency 5G networks for real-time applications and mission-critical operations.',
      benefits: ['< 1 ms latency', 'Real-time apps', 'Mission critical'],
    },
    {
      icon: Clock,
      title: '24/7 Network Monitoring',
      description: 'Continuous monitoring of 5G network performance with real-time analytics and alerts.',
      benefits: ['Network monitoring', 'Performance analytics', 'Proactive maintenance'],
    },
    {
      icon: Users,
      title: 'Scalable Infrastructure',
      description: 'Scalable 5G infrastructure that grows with your business needs and user demands.',
      benefits: ['Auto-scaling', 'Capacity planning', 'Future-proof design'],
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Advanced encryption and security protocols for enterprise-grade protection',
      benefits: ['End-to-end encryption', 'Security protocols', 'Threat detection'],
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Advanced analytics and reporting for 5G network performance and optimization.',
      benefits: ['Performance insights', 'Usage analytics', 'Optimization recommendations'],
    },
  ]

  const benefits = [
    'Ultra-fast 5G connectivity with speeds up to 10 Gbps',
    'Ultra-low latency for real-time applications',
    'Massive IoT device connectivity support',
    'Enhanced mobile broadband capabilities',
    'Network slicing for customized services',
    'Edge computing integration',
    'Advanced security and encryption',
    'Scalable and future-proof architecture',
  ]

  const implementationSteps = [
    {
      step: '01',
      title: 'Network Assessment',
      description: 'Comprehensive analysis of current infrastructure and 5G readiness assessment.',
      details: ['Site survey', 'Coverage analysis', 'Capacity planning', 'Interference analysis'],
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Custom 5G network design tailored to your specific requirements and use cases.',
      details: ['Network architecture', 'Radio planning', 'Backhaul design', 'Security framework'],
    },
    {
      step: '03',
      title: 'Infrastructure Setup',
      description: 'Installation and configuration of 5G equipment and supporting infrastructure.',
      details: ['Base station deployment', 'Antenna installation', 'Power systems', 'Fiber connectivity'],
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Comprehensive testing and optimization to ensure optimal performance.',
      details: ['Performance testing', 'Coverage verification', 'Speed optimization', 'Quality assurance'],
    },
    {
      step: '05',
      title: 'Deployment & Launch',
      description: 'Full deployment and launch of your 5G network with ongoing support.',
      details: ['Network activation', 'User onboarding', 'Monitoring setup', 'Support handover'],
    },
  ]

  const useCases = [
    {
      title: 'Smart Manufacturing',
      description: 'Real-time monitoring and control of manufacturing processes with ultra-low latency.',
      icon: '🏭',
    },
    {
      title: 'Autonomous Vehicles',
      description: 'Support for connected and autonomous vehicles with reliable, low-latency communication.',
      icon: '🚗',
    },
    {
      title: 'Smart Cities',
      description: 'IoT sensors and devices for traffic management, environmental monitoring, and public safety.',
      icon: '🏙️',
    },
    {
      title: 'Healthcare',
      description: 'Remote surgery, telemedicine, and real-time patient monitoring capabilities.',
      icon: '🏥',
    },
    {
      title: 'AR/VR Applications',
      description: 'Immersive augmented and virtual reality experiences with minimal latency.',
      icon: '🥽',
    },
    {
      title: 'Edge Computing',
      description: 'Distributed computing at the network edge for faster processing and reduced latency.',
      icon: '⚡',
    },
  ]

  return (
    <>
      <Helmet>
        <title>5G Implementation Services | Zion Tech Group</title>
        <meta
          name="description"
          content="Professional 5G network implementation services. Ultra-fast connectivity, ultra-low latency, and scalable infrastructure for modern businesses."
        />
        <meta
          name="keywords"
          content="5G implementation, 5G network, ultra-low latency, network design, 5G infrastructure, mobile broadband, IoT connectivity"
        />
        <link rel="canonical" href="https://ziontechgroup.com/5g-implementation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  5G Implementation
                </span>
                <br />
                <span className="text-white">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge 5G technology. Ultra-fast connectivity, 
                ultra-low latency, and massive IoT support for the next generation of applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
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
                Why Choose Our 5G Implementation?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver comprehensive 5G solutions with cutting-edge technology and expert implementation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
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
                5G Technology Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of 5G technology with unprecedented speed, reliability, and capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg p-6 border border-blue-400/30"
                >
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-white font-medium">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Implementation Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A systematic approach to delivering your 5G network with precision and excellence.
              </p>
            </div>

            <div className="space-y-8">
              {implementationSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col lg:flex-row items-center gap-8 bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-300 mb-4">{step.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className="flex items-center text-sm text-gray-300"
                        >
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                5G Use Cases & Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how 5G technology can transform your industry and enable new possibilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Implement 5G?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our experts to discuss your 5G implementation needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Us
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default FiveGImplementationPage