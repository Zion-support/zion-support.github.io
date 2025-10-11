'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { FileText, ExternalLink, ArrowRight } from 'lucide-react'

const SitemapPage: React.FC = () => {
  const sitemapSections = [
    {
      title: 'Main Pages',
      pages: [
        { name: 'Home', url: '/', description: 'Main landing page' },
        { name: 'About Us', url: '/about', description: 'Learn about our company' },
        { name: 'Contact', url: '/contact', description: 'Get in touch with us' },
        { name: 'Blog', url: '/blog', description: 'Latest news and insights' }
      ]
    },
    {
      title: 'AI Services',
      pages: [
        { name: 'AI Services', url: '/ai-services', description: 'Our AI solutions' },
        { name: 'AI Consulting', url: '/ai-consulting', description: 'AI strategy consulting' },
        { name: 'AI Automation', url: '/ai-automation', description: 'Process automation' },
        { name: 'AI Analytics', url: '/ai-analytics', description: 'Data analytics solutions' },
        { name: 'AI Customer Support', url: '/ai-customer-support', description: 'AI-powered support' },
        { name: 'AI Sales Automation', url: '/ai-sales-automation', description: 'Sales automation tools' },
        { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Workflow optimization' }
      ]
    },
    {
      title: 'IT Services',
      pages: [
        { name: 'IT Services', url: '/it-services', description: 'Complete IT solutions' },
        { name: 'Cloud Migration', url: '/cloud-migration', description: 'Cloud migration services' },
        { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
        { name: 'DevOps', url: '/devops', description: 'DevOps and CI/CD' },
        { name: 'Database Management', url: '/database-management', description: 'Database services' },
        { name: 'Network Solutions', url: '/network-solutions', description: 'Networking services' }
      ]
    },
    {
      title: 'Micro SAAS',
      pages: [
        { name: 'Micro SAAS', url: '/micro-saas', description: 'Affordable business tools' },
        { name: 'AI CRM', url: '/ai-crm', description: 'AI-powered CRM system' },
        { name: 'Analytics Dashboard', url: '/analytics-dashboard', description: 'Business intelligence' },
        { name: 'Content Studio', url: '/ai-content-studio', description: 'Content creation tools' },
        { name: 'Chatbot Builder', url: '/ai-chatbot-builder', description: 'Build intelligent chatbots' }
      ]
    },
    {
      title: 'Resources',
      pages: [
        { name: 'Tutorials', url: '/tutorials', description: 'Learning resources' },
        { name: 'Case Studies', url: '/case-studies', description: 'Success stories' },
        { name: 'Pricing', url: '/pricing', description: 'Service pricing' },
        { name: 'Demo', url: '/demo', description: 'Interactive demos' },
        { name: 'Consultation', url: '/consultation', description: 'Expert consultation' }
      ]
    },
    {
      title: 'Company',
      pages: [
        { name: 'Careers', url: '/careers', description: 'Join our team' },
        { name: 'Support', url: '/support', description: 'Technical support' },
        { name: 'Privacy Policy', url: '/privacy', description: 'Privacy information' },
        { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', url: '/cookies', description: 'Cookie usage' }
      ]
    }
  ]

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group | Website Navigation</title>
        <meta name="description" content="Navigate our website easily with our comprehensive sitemap. Find all our AI and IT services, resources, and company information." />
        <meta name="keywords" content="sitemap, website navigation, AI services, IT services, company pages" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Website <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Sitemap</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Navigate our website easily with our comprehensive sitemap. Find all our AI and IT services, resources, and company information.
              </p>
            </div>
          </div>
        </section>

        {/* Sitemap Sections */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {sitemapSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                    <FileText className="w-6 h-6 text-cyan-400" />
                    <span>{section.title}</span>
                  </h2>
                  <div className="space-y-4">
                    {section.pages.map((page, pageIndex) => (
                      <div key={pageIndex} className="group">
                        <a
                          href={page.url}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                        >
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <div className="flex-1">
                            <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                              {page.name}
                            </h3>
                            <p className="text-gray-400 text-sm">{page.description}</p>
                          </div>
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-6 rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3"
              >
                <ArrowRight className="w-6 h-6" />
                <span className="font-semibold">Contact Us</span>
              </a>
              
              <a
                href="/demo"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-6 rounded-2xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3"
              >
                <ArrowRight className="w-6 h-6" />
                <span className="font-semibold">View Demo</span>
              </a>
              
              <a
                href="/pricing"
                className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 rounded-2xl hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3"
              >
                <ArrowRight className="w-6 h-6" />
                <span className="font-semibold">See Pricing</span>
              </a>
              
              <a
                href="/consultation"
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-6 rounded-2xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3"
              >
                <ArrowRight className="w-6 h-6" />
                <span className="font-semibold">Get Consultation</span>
              </a>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Use our search function or contact our support team for assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Search Website
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Support
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default SitemapPage