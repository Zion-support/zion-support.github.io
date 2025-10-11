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
    {icon: Ear,
      title: 'Audio Accessibility',
      description: 'Enhanced audio experiences for users with hearing impairments.',
      benefits: ['Closed captions', 'Sign language support', 'Audio descriptions', 'Visual alerts']},
    {icon: Hand,
      title: 'Motor Accessibility',
      description: 'Support for users with motor disabilities and mobility challenges.',
      benefits: ['Keyboard navigation', 'Voice control', 'Switch access', 'Gesture recognition']},
    {icon: Brain,
      title: 'Cognitive Accessibility',
      description: 'Features designed to support users with cognitive and learning disabilities.',
      benefits: ['Simplified interfaces', 'Clear instructions', 'Consistent navigation', 'Error prevention']},
    {icon: Shield,
      title: 'Compliance & Standards',
      description: 'Full compliance with WCAG 2.1 AA standards and accessibility regulations.',
      benefits: ['WCAG 2.1 AA compliance', 'Section 508 compliance', 'ADA compliance', 'International standards']},
    {icon: Zap,
      title: 'Performance Optimization',
      description: 'Fast, efficient accessibility features that don\'t compromise performance.',
      benefits: ['Optimized loading', 'Efficient rendering', 'Minimal overhead', 'Fast interactions']}
  ]
  const services = [
    {title: 'Accessibility Audits',
      description: 'Comprehensive evaluation of your digital products for accessibility compliance.',
      icon: Target,
      benefits: ['Automated testing', 'Manual evaluation', 'User testing', 'Compliance reporting']},
    {title: 'Implementation Services',
      description: 'Professional implementation of accessibility features and improvements.',
      icon: BarChart,
      benefits: ['Code implementation', 'Design updates', 'Testing & validation', 'Training & support']},
    {title: 'Ongoing Support',
      description: 'Continuous monitoring and maintenance of accessibility features.',
      icon: CheckCircle,
      benefits: ['Regular audits', 'Feature updates', 'Performance monitoring', 'Compliance tracking']},
    {title: 'Training & Education',
      description: 'Comprehensive training for your team on accessibility best practices.',
      icon: Brain,
      benefits: ['Team training', 'Best practices', 'Tool training', 'Compliance education']}
  ]
  const standards = [
    'WCAG 2.1 AA Compliance',
    'Section 508 Compliance',
    'ADA Compliance',
    'EN 301 549 Compliance'
  ]
  const benefits = [
    {title: 'Legal Compliance',
      description: 'Meet accessibility requirements and avoid legal issues.',
      icon: Shield},
    {title: 'Broader Reach',
      description: 'Access your content and services to a wider audience.',
      icon: Target},
    {title: 'Better UX',
      description: 'Improved user experience for all users, not just those with disabilities.',
      icon: CheckCircle},
    {title: 'SEO Benefits',
      description: 'Accessibility improvements often lead to better search engine rankings.',
      icon: BarChart}
  ]
  return (
    <>
<Helmet>
        <title>Accessibility Services - Zion Tech Group</title>
        <meta name="description" content="Make your digital products accessible to everyone. Comprehensive accessibility services including audits, implementation, and ongoing support." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Accessibility</span> Services
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Make your digital products accessible to everyone. We provide comprehensive accessibility solutions that ensure your content and services are inclusive for all users.
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Comprehensive Accessibility Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our accessibility solutions cover all aspects of digital inclusion, ensuring your products work for everyone.
              </p>
            </div>

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
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From initial assessment to ongoing support, we provide end-to-end accessibility solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <service.icon className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Accessibility?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Accessibility isn't just the right thing to do—it's also good for business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <benefit.icon className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Standards Section */}
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Compliance Standards
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We ensure compliance with international accessibility standards
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Key Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our accessibility solutions provide comprehensive benefits for your business and users.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Standards Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Compliance Standards</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We ensure your products meet international accessibility standards and guidelines.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {standards.map((standard, index) => {
                const Icon = standard.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{standard.title}</h3>
                    <p className="text-gray-300">{standard.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Make Your Products Accessible?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's work together to create inclusive digital experiences that everyone can use and enjoy.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center mx-auto">
              Start Your Accessibility Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
export default AccessibilityPage