import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Globe, ArrowRight, Calendar, FileText, Users, Briefcase, Phone, Mail, MapPin } from 'lucide-react';

export default function Sitemap() {
  const currentYear = new Date().getFullYear();

  const mainPages = [
  { name: 'Home', href: '/', description: 'Main homepage' },
    { name: 'About', href: '/about', description: 'About Zion Tech Group' },
    { name: 'Contact', href: '/contact', description: 'Contact information' },
    { name: 'Blog', href: '/blog', description: 'Latest news and insights' },
    { name: 'Careers', href: '/careers', description: 'Job opportunities' },
    { name: 'Partners', href: '/partners', description: 'Partnership information' }
  ];

  const services = [
  { name: 'AI Services', href: '/ai-services', description: 'Artificial Intelligence solutions' },
    { name: 'IT Services', href: '/it-services', description: 'Information Technology services' },
    { name: 'Micro SaaS', href: '/micro-saas', description: 'Micro Software as a Service' },
    { name: 'Web Development', href: '/services/web-development', description: 'Custom web applications' },
    { name: 'Cloud Services', href: '/services/cloud-services', description: 'Cloud infrastructure solutions' },
    { name: 'AI Development', href: '/services/ai-development', description: 'AI development services' }
  ];

  const solutions = [
  { name: 'AI Content Creation', href: '/solutions/ai-content-creation', description: 'AI-powered content generation' },
    { name: 'Customer Support', href: '/solutions/customer-support', description: 'Automated customer support' },
    { name: 'Email Automation', href: '/solutions/email-automation', description: 'Email marketing automation' },
    { name: 'Event Management', href: '/solutions/event-management', description: 'Event planning and management' },
    { name: 'Project Management', href: '/solutions/project-management', description: 'Project management solutions' },
    { name: 'Workflow Automation', href: '/solutions/workflow-automation', description: 'Business process automation' }
  ];

  const resources = [
  { name: 'Documentation', href: '/docs', description: 'Technical documentation' },
    { name: 'API Reference', href: '/api', description: 'API documentation' },
    { name: 'Help & Support', href: '/help', description: 'Support center' },
    { name: 'Training', href: '/training', description: 'Training programs' },
    { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
    { name: 'Pricing Guide', href: '/pricing-guide', description: 'Pricing information' }
  ];

  const legal = [
  { name: 'Privacy Policy', href: '/privacy', description: 'Privacy policy and data protection' },
    { name: 'Terms of Service', href: '/terms', description: 'Terms and conditions' },
    { name: 'Cookie Policy', href: '/cookies', description: 'Cookie usage policy' }
  ];

  const contactInfo = [
  { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: MapPin, text: '364 E Main St STE 1008, Middletown DE 19709', href: '#' }
  ];

  return (
    <>
      <Head>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all pages, services, and resources." />
        <meta name="keywords" content="sitemap, navigation, pages, services, solutions, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/sitemap" />
      </Head>

      <Navigation />
      
      <main className="pt-20 min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Site Map
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Navigate through all pages and resources available on the Zion Tech Group website
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Phone className="w-6 h-6 mr-3 text-cyan-400" />
              Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <contact.icon className="w-5 h-5 text-cyan-400" />
                  <a 
                    href={contact.href} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    {contact.text}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Main Pages */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-cyan-400" />
                Main Pages
              </h2>
              <div className="space-y-4">
                {mainPages.map((page, index) => (
                  <div key={index} className="group">
                    <Link 
                      href={page.href}
                      className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                    >
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {page.name}
                        </h3>
                        <p className="text-gray-400 text-sm">{page.description}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Briefcase className="w-6 h-6 mr-3 text-cyan-400" />
                Services
              </h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="group">
                    <Link 
                      href={service.href}
                      className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                    >
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-400 text-sm">{service.description}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Users className="w-6 h-6 mr-3 text-cyan-400" />
                Solutions
              </h2>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="group">
                    <Link 
                      href={solution.href}
                      className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                    >
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {solution.name}
                        </h3>
                        <p className="text-gray-400 text-sm">{solution.description}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-cyan-400" />
                Resources
              </h2>
              <div className="space-y-4">
                {resources.map((resource, index) => (
                  <div key={index} className="group">
                    <Link 
                      href={resource.href}
                      className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                    >
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {resource.name}
                        </h3>
                        <p className="text-gray-400 text-sm">{resource.description}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-cyan-400" />
              Legal & Policies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {legal.map((legalPage, index) => (
                <div key={index} className="group">
                  <Link 
                    href={legalPage.href}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {legalPage.name}
                      </h3>
                      <p className="text-gray-400 text-sm">{legalPage.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Last Updated */}
          <div className="text-center mt-12">
            <p className="text-gray-400 text-sm">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}