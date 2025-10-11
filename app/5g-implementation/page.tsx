'use client'
import React from 'react'
import { Helmet  } from 'react-helmet-async'
import { Wifi, Zap, Shield, Globe, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Users, BarChart  } from 'lucide-react'

const FiveGImplementationPage: React.FC = () => {
  return (

  const features = [{
      icon: Wifi, title: '5G Network Design', description: 'Complete 5G network design and implementation with optimal coverage and performance.', benefits: ['Network planning', 'Coverage optimization', 'Performance tuning'],
    
  );
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

  const benefits = ['Ultra-fast 5G connectivity with speeds up to 10 Gbps', 'Ultra-low latency for real-time applications', 'Massive IoT device connectivity support', 'Enhanced mobile broadband experience', 'Network slicing for customized services', 'Edge computing integration', 'Advanced security protocols', 'Scalable and future-proof architecture']

  const implementationSteps = [{
      step: '01', title: 'Network Assessment', description: 'Comprehensive analysis of current infrastructure and requirements', }, {
      step: '02', title: '5G Planning', description: 'Strategic planning and design of 5G network architecture', }, {
      step: '03', title: 'Infrastructure Setup', description: 'Installation and configuration of 5G equipment and systems', }, {
      step: '04', title: 'Testing & Optimization', description: 'Rigorous testing and performance optimization of the network', }, {
      step: '05', title: 'Deployment', description: 'Full deployment and go-live of the 5G network', }, {
      step: '06', title: 'Monitoring & Support', description: 'Ongoing monitoring, maintenance, and technical support', }]

  return (
    <>
      <Helmet ></Helmet>
        <title>5G Implementation Services | Zion Tech Group</title>
        <meta name="description" content="Professional 5G network implementation services with ultra-low latency, enhanced security, and scalable infrastructure. Transform your business with cutting-edge 5G technology." />
        <meta name="keywords" content="5G implementation, 5G network design, ultra-low latency, network monitoring, 5G security, mobile broadband" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm: px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                5G Implementation
                <span className="block text-blue-600">Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge 5G technology. Our expert team delivers 
                ultra-fast, secure, and scalable 5G networks tailored to your specific needs.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" /></ArrowRight>
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our 5G Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive 5G implementation solutions with cutting-edge technology 
                and expert support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-xl hover: shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" /></CheckCircle>
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
        <section className="py-20 px-4 sm: px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Implementation Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A systematic approach to delivering world-class 5G networks
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {implementationSteps.map((step, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover: shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                5G Technology Benefits
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the power of next-generation wireless technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" /></CheckCircle>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Implement 5G?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact our experts today to discuss your 5G implementation needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" /></Phone>
                Call Us Now
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" /></Mail>
                Get Quote
              </button>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 px-4 sm: px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" /></Phone>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div className="text-center">
                <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" /></Mail>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">5g@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-4" /></MapPin>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">Global Service Coverage</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default FiveGImplementationPage