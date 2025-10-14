<<<<<<< HEAD
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Wifi, Zap, Globe, Smartphone, Shield, Settings } from 'lucide-react'

export default function FiveGImplementationPage() {
  const features = [
    {
      icon: Zap,
      title: 'Ultra-Fast Speeds',
      description: 'Experience lightning-fast 5G connectivity with speeds up to 10 Gbps',
      benefits: ['10x faster than 4G', 'Low latency', 'High bandwidth', 'Reliable connection']
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Comprehensive 5G network coverage across multiple regions',
      benefits: ['Wide coverage', 'Seamless roaming', 'International support', 'Network redundancy']
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimization',
      description: 'Optimized 5G solutions for mobile devices and applications',
      benefits: ['Mobile-first design', 'App optimization', 'Battery efficiency', 'Device compatibility']
    },
    {
      icon: Wifi,
      title: 'IoT Connectivity',
      description: 'Connect thousands of IoT devices with 5G technology',
      benefits: ['Massive IoT support', 'Low power consumption', 'Real-time monitoring', 'Scalable solutions']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Advanced security protocols for enterprise 5G networks',
      benefits: ['End-to-end encryption', 'Network slicing', 'Zero-trust architecture', 'Compliance ready']
    },
    {
      icon: Settings,
      title: 'Custom Implementation',
      description: 'Tailored 5G solutions for your specific business requirements',
      benefits: ['Custom architecture', 'Integration support', 'Training & support', 'Ongoing maintenance']
    }
  ]

  const implementationSteps = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of your current infrastructure and 5G requirements',
      details: ['Network audit', 'Capacity planning', 'Coverage analysis', 'Timeline development']
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Custom 5G network design tailored to your business needs',
      details: ['Network topology', 'Equipment selection', 'Security design', 'Integration planning']
    },
    {
      step: '03',
      title: 'Installation & Setup',
      description: 'Professional installation and configuration of 5G infrastructure',
      details: ['Hardware installation', 'Software configuration', 'Network testing', 'Performance optimization']
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Comprehensive testing and performance optimization',
      details: ['Speed testing', 'Coverage verification', 'Security validation', 'Performance tuning']
    },
    {
      step: '05',
      title: 'Deployment & Support',
      description: 'Full deployment with ongoing support and maintenance',
      details: ['Go-live support', 'User training', 'Monitoring setup', '24/7 support']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="Professional 5G implementation services by Zion Tech Group" />
        <meta name="keywords" content="5G implementation, network setup, enterprise solutions, connectivity" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5G Implementation Services
            </h1>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Professional 5G network implementation tailored to your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our 5G Implementation?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert implementation with enterprise-grade reliability and support
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-blue-200">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Implementation Process Section */}
      <div className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach to successful 5G deployment
            </p>
          </div>
          <div className="space-y-12">
            {implementationSteps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 mb-4">{step.description}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-blue-200">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Implement 5G?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our experts to discuss your 5G implementation project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Schedule Consultation
            </button>
            <button className="border border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
=======
<<<<<<< HEAD
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
export default function Page() {

=======
<<<<<<< HEAD
>>>>>>> origin/main
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Page solutions from Zion Tech Group." />
        <meta name="keywords" content="page, technology solutions, AI, cloud, cybersecurity" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Page
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with our cutting-edge page solutions. 
              Built with the latest technology and designed for success.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Page?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the features that make our solutions stand out
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center hover:bg-white/20 transition-colors">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our page solutions can transform your business.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center">
              Get Started
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>
=======
const FiveGImplementationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="5G Implementation - Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">5G Implementation</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FiveGImplementationPage;
>>>>>>> origin/main
