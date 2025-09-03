import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../src/components/Navigation';
import Footer from '../src/components/Footer';
import { Download, FileText, Users, Zap, Brain, Cloud, Shield, ArrowRight, CheckCircle, Star, Mail, Phone } from 'lucide-react';

const Brochure = () => {
  const brochures = [
    {
      title: 'AI Services Overview',
      description: 'Comprehensive guide to our artificial intelligence solutions and capabilities',
      pages: '24 pages',
      format: 'PDF',
      size: '2.4 MB',
      icon: Brain,
      downloadUrl: '/brochures/ai-services-brochure.pdf',
      preview: [
        'AI Strategy & Consulting',
        'Machine Learning Solutions',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Integration Services'
      ]
    }, {
      title: 'IT Services Portfolio',
      description: 'Complete overview of our information technology services and infrastructure solutions',
      pages: '32 pages',
      format: 'PDF',
      size: '3.1 MB',
      icon: Cloud,
      downloadUrl: '/brochures/it-services-brochure.pdf',
      preview: [
        'Cloud Migration & Management',
        'Network Security & Monitoring',
        'System Administration',
        'Backup & Disaster Recovery',
        'Performance Optimization',
        '24/7 Technical Support'
      ]
    }, {
      title: 'Micro SaaS Solutions',
      description: 'Detailed information about our software-as-a-service development and deployment services',
      pages: '28 pages',
      format: 'PDF',
      size: '2.8 MB',
      icon: Zap,
      downloadUrl: '/brochures/micro-saas-brochure.pdf',
      preview: [
        'Custom SaaS Development',
        'API Design & Integration',
        'User Management Systems',
        'Payment Processing',
        'Analytics & Reporting',
        'Scalability Solutions'
      ]
    }, {
      title: 'Complete Solutions Guide',
      description: 'Comprehensive overview of all our services, case studies, and success stories',
      pages: '48 pages',
      format: 'PDF',
      size: '4.2 MB',
      icon: FileText,
      downloadUrl: '/brochures/complete-solutions-guide.pdf',
      preview: [
        'All Service Offerings',
        'Industry Case Studies',
        'Client Success Stories',
        'Technology Stack',
        'Implementation Process',
        'Support & Maintenance'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Detailed Service Information',
      description: 'Comprehensive details about our offerings, capabilities, and methodologies',
      icon: FileText
    }, {
      title: 'Case Studies & Success Stories',
      description: 'Real-world examples of how we\'ve helped businesses achieve their goals',
      icon: Star
    }, {
      title: 'Technical Specifications',
      description: 'In-depth technical details about our solutions and implementation processes',
      icon: Shield
    }, {
      title: 'Pricing & Package Information',
      description: 'Transparent pricing information and service packages to help you plan your budget',
      icon: Zap
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      company: 'InnovateTech Solutions',
      role: 'CEO',
      content: 'The brochures provided excellent detail about the services. It helped us make an informed decision about partnering with Zion Tech Group.',
      rating: 5
    }, {
      name: 'David Thompson',
      company: 'Global Enterprises',
      role: 'CTO',
      content: 'Very comprehensive and well-organized. The case studies were particularly helpful in understanding the potential impact.',
      rating: 5
    }, {
      name: 'Lisa Wang',
      company: 'StartupHub',
      role: 'Founder',
      content: 'The technical specifications in the brochures gave us confidence in their expertise. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <>
      <Head>
        <title>Download Brochures - Zion Tech Group</title>
        <meta name="description" content="Download our comprehensive brochures to learn more about our AI services, IT solutions, and micro SaaS development capabilities." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/brochure" />
      </Head>
      
      <Navigation />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Download Our <span className="text-blue-600">Brochures</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Get detailed information about our services, case studies, and success stories. Download our comprehensive brochures to learn more about how we can help your business.
              </p>
            </div>
          </div>
        </section>

        {/* Brochures Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Brochures</h2>
              <p className="text-lg text-gray-600">
                Choose the brochure that best fits your information needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {brochures.map((brochure, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-8">
                    <div className="flex items-start mb-6">
                      <div className="p-4 bg-blue-100 rounded-lg mr-4">
                        <brochure.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{brochure.title}</h3>
                        <p className="text-gray-600 mb-4">{brochure.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{brochure.pages}</span>
                          <span>•</span>
                          <span>{brochure.format}</span>
                          <span>•</span>
                          <span>{brochure.size}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {brochure.preview.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={brochure.downloadUrl}
                      download
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download Brochure
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Download Our Brochures?</h2>
              <p className="text-lg text-gray-600">
                Get comprehensive information to make informed decisions about your technology needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-lg text-gray-600">
                Hear from businesses that have used our brochures to make informed decisions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need More Information?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our team is ready to answer your questions and provide additional details about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
              <a href="tel:+13024640950" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )};

export default Brochure;