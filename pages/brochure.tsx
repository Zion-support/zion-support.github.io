import React from 'react';
import Link from 'next/link';
import Navigation from '../src/components/Navigation';
import Footer from '../src/components/Footer';
import SEOHead from '../src/components/SEO/SEOHead';
import ErrorBoundary from '../src/components/ErrorBoundary';
import { Download, FileText, Users, Zap, Shield, Globe, ArrowRight, CheckCircle, Star, Award } from 'lucide-react';

export default function Brochure() {
  const brochures = [
    {
      title: 'AI Services Overview',
      description: 'Comprehensive guide to our artificial intelligence solutions and capabilities',
      size: '2.4 MB',
      pages: '24 pages',
      downloadUrl: '/brochures/ai-services-brochure.pdf',
      image: '/images/brochures/ai-services.jpg',
      features: [
        'AI strategy consultation',
        'Machine learning implementation',
        'Natural language processing',
        'Computer vision solutions',
        'Predictive analytics'
      ]
    },
    {
      title: 'IT Services Portfolio',
      description: 'Complete overview of our information technology services and infrastructure solutions',
      size: '3.1 MB',
      pages: '32 pages',
      downloadUrl: '/brochures/it-services-brochure.pdf',
      image: '/images/brochures/it-services.jpg',
      features: [
        'Cloud infrastructure setup',
        'DevOps automation',
        'Cybersecurity solutions',
        'Network optimization',
        '24/7 technical support'
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      description: 'Discover our scalable software-as-a-service platforms and rapid deployment capabilities',
      size: '2.8 MB',
      pages: '28 pages',
      downloadUrl: '/brochures/micro-saas-brochure.pdf',
      image: '/images/brochures/micro-saas.jpg',
      features: [
        'Rapid application development',
        'Scalable architecture design',
        'User management systems',
        'Analytics and reporting',
        'Third-party integrations'
      ]
    },
    {
      title: 'Enterprise Solutions',
      description: 'Tailored solutions for large organizations with complex technology needs',
      size: '4.2 MB',
      pages: '40 pages',
      downloadUrl: '/brochures/enterprise-solutions-brochure.pdf',
      image: '/images/brochures/enterprise.jpg',
      features: [
        'Custom enterprise applications',
        'Legacy system modernization',
        'Digital transformation',
        'Compliance and security',
        'Dedicated support teams'
      ]
    }
  ];

  const caseStudies = [
    {
      title: 'Healthcare AI Implementation',
      description: 'How we helped a major hospital system implement AI-powered patient care solutions',
      results: '40% reduction in diagnosis time',
      industry: 'Healthcare'
    },
    {
      title: 'E-commerce Platform Migration',
      description: 'Seamless migration of a retail platform to cloud infrastructure with zero downtime',
      results: '300% increase in performance',
      industry: 'Retail'
    },
    {
      title: 'Financial Services Automation',
      description: 'Implementation of automated compliance and risk management systems',
      results: '60% reduction in manual processes',
      industry: 'Finance'
    }
  ];

  return (
    <ErrorBoundary>
      <SEOHead
        title="Download Brochures - Zion Tech Group | Comprehensive Technology Solutions"
        description="Download our detailed brochures to learn more about our AI services, IT solutions, and micro SaaS platforms. Get comprehensive information about our capabilities."
        keywords={["brochure", "download", "AI services brochure", "IT services guide", "micro SaaS overview", "technology solutions"]}
        canonicalUrl="https://ziontechgroup.com/brochure"
      />
      
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
                Get comprehensive information about our technology solutions. Download detailed brochures 
                to learn more about our services, capabilities, and success stories.
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
                Choose the brochure that best matches your interests
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {brochures.map((brochure, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <FileText className="w-16 h-16 text-white" />
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{brochure.title}</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span>{brochure.size}</span>
                        <span>•</span>
                        <span>{brochure.pages}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{brochure.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Key Features</h4>
                      <ul className="space-y-2">
                        {brochure.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
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

        {/* Case Studies Preview */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
              <p className="text-lg text-gray-600">
                See how we've helped businesses transform with our technology solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <Award className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-green-600 uppercase tracking-wide">
                        {study.industry}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-green-800 font-semibold text-sm">
                      Result: {study.results}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-lg text-gray-600">
                We deliver exceptional results through innovation, expertise, and dedication
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h3>
                <p className="text-gray-600">50+ certified professionals with years of industry experience</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Delivery</h3>
                <p className="text-gray-600">Quick turnaround times without compromising quality</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance standards</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Reach</h3>
                <p className="text-gray-600">Serving clients worldwide with local expertise</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Download our brochures to learn more, or contact us directly for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Consultation
              </Link>
              <Link href="/demo" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </ErrorBoundary>
  );
}