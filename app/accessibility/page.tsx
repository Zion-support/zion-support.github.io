'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import {Eye, Ear, Hand, Brain, Shield, CheckCircle, ArrowRight} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AccessibilityPage: React.FC = () => {
  const features = [
    {
      icon: <Eye className="w-8 h-8 text-blue-600" />,
      title: "Visual Accessibility",
      description: "Screen reader compatibility, high contrast modes, and scalable text options"
    },
    {
      icon: <Ear className="w-8 h-8 text-green-600" />,
      title: "Audio Accessibility", 
      description: "Audio descriptions, captions, and alternative audio formats"
    },
    {
      icon: <Hand className="w-8 h-8 text-purple-600" />,
      title: "Motor Accessibility",
      description: "Keyboard navigation, voice control, and assistive technology support"
    },
    {
      icon: <Brain className="w-8 h-8 text-orange-600" />,
      title: "Cognitive Accessibility",
      description: "Clear navigation, consistent layouts, and simplified content structure"
    }
  ];

  const services = [
    {
      title: "Accessibility Audit",
      description: "Comprehensive evaluation of your digital assets for compliance",
      features: ["WCAG 2.1 AA assessment", "User testing with assistive technologies", "Detailed remediation roadmap"]
    },
    {
      title: "Implementation Support",
      description: "Hands-on assistance with accessibility improvements",
      features: ["Code remediation", "Design system updates", "Testing and validation"]
    },
    {
      title: "Training & Consulting",
      description: "Empower your team with accessibility knowledge",
      features: ["Developer training", "Design guidelines", "Ongoing support"]
    }
  ];

  const standards = [
    'WCAG 2.1 AA Compliance',
    'Section 508 Compliance', 
    'ADA Compliance',
    'EN 301 549 Compliance'
  ];

  const benefits = [
    {
      title: "Legal Compliance",
      description: "Meet accessibility requirements and avoid legal issues"
    },
    {
      title: "Broader Reach",
      description: "Access your content with assistive technologies"
    },
    {
      title: "Better UX",
      description: "Improved experience for all users, not just those with disabilities"
    },
    {
      title: "SEO Benefits",
      description: "Accessible content often ranks better in search engines"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Accessibility - Zion Tech Group</title>
        <meta name="description" content="Learn about our commitment to web accessibility and inclusive design practices." />
        <meta name="keywords" content="accessibility, inclusive design, WCAG compliance, ADA compliance, web accessibility" />
      </Helmet>
      
      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Accessibility</span> First
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We believe technology should be accessible to everyone. Our commitment to inclusive design ensures that our solutions work for all users.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Comprehensive Accessibility Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our accessibility solutions cover all aspects of digital inclusion, ensuring your products work for everyone.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center">
                    {feature.description}
                  </p>
                </div>
              ))}
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
                From audits to implementation, we provide comprehensive accessibility support.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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
                We ensure compliance with all major accessibility standards and guidelines.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {standards.map((standard, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <Shield className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white">
                    {standard}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Accessibility Matters
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Beyond compliance, accessibility brings real business value and social impact.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Make Your Digital Products Accessible?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's work together to create inclusive digital experiences that work for everyone.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center mx-auto">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AccessibilityPage;