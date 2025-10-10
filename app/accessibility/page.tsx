'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Eye, MousePointer, Volume2, Shield, Users, Globe, Zap, ArrowRight, Star } from 'lucide-react';

const AccessibilityPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'Comprehensive visual accessibility features including high contrast modes, text scaling, and screen reader compatibility.'
    },
    {
      icon: MousePointer,
      title: 'Motor Accessibility',
      description: 'Keyboard navigation, voice control, and alternative input methods for users with motor impairments.'
    },
    {
      icon: Volume2,
      title: 'Audio Accessibility',
      description: 'Audio descriptions, captions, and alternative audio formats for users with hearing impairments.'
    },
    {
      icon: Shield,
      title: 'Cognitive Accessibility',
      description: 'Clear navigation, simplified interfaces, and cognitive load reduction for users with cognitive disabilities.'
    }
  ];

  const standards = [
    'WCAG 2.1 AA Compliance',
    'Section 508 Compliance',
    'ADA Compliance',
    'EN 301 549 Compliance',
    'ISO/IEC 40500 Compliance'
  ];

  const benefits = [
    'Improved user experience for all users',
    'Legal compliance and risk mitigation',
    'Expanded market reach and audience',
    'Enhanced SEO and search visibility',
    'Better brand reputation and trust',
    'Reduced support and maintenance costs'
  ];

  const services = [
    {
      title: 'Accessibility Audit',
      description: 'Comprehensive evaluation of your digital products for accessibility compliance and usability.',
      duration: '2-4 weeks',
      price: 'Starting at $5,000'
    },
    {
      title: 'Accessibility Implementation',
      description: 'Full implementation of accessibility features and compliance standards across your platform.',
      duration: '4-8 weeks',
      price: 'Starting at $15,000'
    },
    {
      title: 'Accessibility Training',
      description: 'Training for your development team on accessibility best practices and implementation.',
      duration: '1-2 days',
      price: 'Starting at $2,500'
    },
    {
      title: 'Ongoing Support',
      description: 'Continuous monitoring and support to maintain accessibility compliance over time.',
      duration: 'Ongoing',
      price: 'Starting at $1,000/month'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'UX Director',
      company: 'TechCorp',
      content: 'Zion Tech Group helped us achieve full WCAG 2.1 AA compliance. Our user satisfaction increased by 40% and we expanded our market reach significantly.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'InnovateApp',
      content: 'The accessibility implementation was seamless and professional. Our app is now accessible to users with disabilities, and we\'ve seen a 25% increase in user engagement.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'CEO',
      company: 'AccessibleWeb',
      content: 'Working with Zion Tech Group was a game-changer. They not only made our platform accessible but also improved the overall user experience for everyone.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Accessibility Services - Zion Tech Group</title>
        <meta name="description" content="Make your digital products accessible to everyone. Our accessibility services ensure WCAG compliance and inclusive user experiences." />
        <meta name="keywords" content="accessibility services, WCAG compliance, inclusive design, digital accessibility, ADA compliance" />
      </Helmet>
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Accessibility</span> Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Make your digital products accessible to everyone. We ensure WCAG compliance, 
              inclusive design, and equal access for users with disabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                Get Started
              </button>
              <button className="bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Accessibility Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive accessibility solutions that ensure your digital products are usable by everyone.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Standards Compliance */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Standards Compliance</h2>
                <p className="text-lg text-gray-300 mb-8">
                  We ensure your digital products meet all major accessibility standards and regulations, 
                  protecting you from legal risks while providing inclusive experiences.
                </p>
                <ul className="space-y-4">
                  {standards.map((standard, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{standard}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Why Accessibility Matters</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Users className="w-6 h-6 text-cyan-400 mr-3" />
                    <span className="text-gray-300">15% of the world population has a disability</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-6 h-6 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Legal requirement in many countries</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-6 h-6 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Improves SEO and search rankings</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-6 h-6 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Reduces legal and compliance risks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Business Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Accessibility isn't just the right thing to do—it's also good for business.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive accessibility services to make your digital products inclusive and compliant.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="space-y-2 text-sm text-gray-400 mb-4">
                    <div>Duration: {service.duration}</div>
                    <div className="text-cyan-400 font-medium">{service.price}</div>
                  </div>
                  <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Client Testimonials</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about our accessibility services.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Make Your Products Accessible?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Contact our accessibility experts to discuss your needs and get started with inclusive design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                  Get a Quote
                </button>
                <button className="bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

AccessibilityPage.displayName = 'AccessibilityPage';

export default AccessibilityPage;