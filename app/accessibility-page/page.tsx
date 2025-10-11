'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import {Eye, Ear, Hand, Brain, Shield, CheckCircle, ArrowRight, Target, BarChart, Zap} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AccessibilityPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'Comprehensive solutions for users with visual impairments and color vision deficiencies.',
      benefits: ['Screen reader compatibility', 'High contrast modes', 'Color blind support', 'Text scaling']
    },
    {
      icon: Ear,
      title: 'Audio Accessibility',
      description: 'Enhanced audio experiences for users with hearing impairments.',
      benefits: ['Closed captions', 'Sign language support', 'Audio descriptions', 'Visual alerts']
    },
    {
      icon: Hand,
      title: 'Motor Accessibility',
      description: 'Support for users with motor disabilities and mobility challenges.',
      benefits: ['Keyboard navigation', 'Voice control', 'Switch access', 'Gesture recognition']
    },
    {
      icon: Brain,
      title: 'Cognitive Accessibility',
      description: 'Features designed to support users with cognitive and learning disabilities.',
      benefits: ['Simplified interfaces', 'Clear instructions', 'Consistent navigation', 'Error prevention']
    },
    {
      icon: Shield,
      title: 'Compliance & Standards',
      description: 'Full compliance with WCAG 2.1 AA standards and accessibility regulations.',
      benefits: ['WCAG 2.1 AA compliance', 'Section 508 compliance', 'ADA compliance', 'International standards']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Fast, efficient accessibility features that don\'t compromise performance.',
      benefits: ['Optimized loading', 'Efficient rendering', 'Minimal overhead', 'Fast interactions']
    }
  ]

  const services = [
    {
      title: 'Accessibility Audits',
      description: 'Comprehensive evaluation of your digital products for accessibility compliance.',
      icon: Target,
      benefits: ['Automated testing', 'Manual evaluation', 'User testing', 'Compliance reporting']
    },
    {
      title: 'Implementation Services',
      description: 'Professional implementation of accessibility features and improvements.',
      icon: BarChart,
      benefits: ['Code implementation', 'Design updates', 'Testing & validation', 'Training & support']
    },
    {
      title: 'Ongoing Support',
      description: 'Continuous monitoring and maintenance of accessibility features.',
      icon: CheckCircle,
      benefits: ['Regular audits', 'Feature updates', 'Performance monitoring', 'Compliance tracking']
    },
    {
      title: 'Training & Education',
      description: 'Comprehensive training for your team on accessibility best practices.',
      icon: Brain,
      benefits: ['Team training', 'Best practices', 'Tool training', 'Compliance education']
    }
  ]

  const standards = [
    {
      name: 'WCAG 2.1 AA',
      description: 'Web Content Accessibility Guidelines 2.1 Level AA compliance',
      features: ['Perceivable', 'Operable', 'Understandable', 'Robust']
    },
    {
      name: 'Section 508',
      description: 'Federal accessibility standards for government websites',
      features: ['Federal compliance', 'Government standards', 'Legal requirements', 'Accessibility testing']
    },
    {
      name: 'ADA Compliance',
      description: 'Americans with Disabilities Act compliance for digital accessibility',
      features: ['Legal compliance', 'Equal access', 'Reasonable accommodation', 'Non-discrimination']
    }
  ]

  return (
    <>
      <Helmet>
        <title>Accessibility Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive accessibility solutions ensuring your digital products are inclusive and compliant with WCAG 2.1 AA standards." />
        <meta name="keywords" content="accessibility, WCAG compliance, digital inclusion, ADA compliance, screen reader, assistive technology" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Accessibility</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Make your digital products inclusive and accessible to everyone with our comprehensive accessibility solutions and WCAG 2.1 AA compliance services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Audit
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Comprehensive Accessibility Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our accessibility solutions cover all aspects of digital inclusion
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Accessibility Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional accessibility services to make your digital products inclusive
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                    <div className="text-purple-400 mb-4">
                      <Icon className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="h-5 w-5 text-purple-400 mr-3 flex-shrink-0" />
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

        {/* Standards Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Compliance Standards
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We ensure compliance with all major accessibility standards
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {standards.map((standard, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                    {standard.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{standard.name}</h3>
                  <p className="text-gray-300 mb-6">{standard.description}</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {standard.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Make Your Digital Products Accessible?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's work together to create inclusive digital experiences that everyone can use.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Start Accessibility Audit
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Contact Our Experts
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default AccessibilityPage