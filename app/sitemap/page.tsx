'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const SitemapPage: React.FC = () => {
  const sitemapSections = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', url: '/', description: 'Main landing page' },
        { name: 'About Us', url: '/about', description: 'Learn about our company' },
        { name: 'Services', url: '/services', description: 'Our service offerings' },
        { name: 'Contact', url: '/contact', description: 'Get in touch with us' }
      ]
    },
    {
      title: 'AI Services',
      links: [
        { name: 'AI Analytics', url: '/ai-analytics', description: 'AI-powered data analytics' },
        { name: 'AI Automation', url: '/ai-automation', description: 'Process automation solutions' },
        { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'Build intelligent chatbots' },
        { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI-powered security solutions' },
        { name: 'AI Customer Support', url: '/ai-customer-support', description: 'Automated customer support' },
        { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data analysis' },
        { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Streamline business processes' }
      ]
    },
    {
      title: 'IT Services',
      links: [
        { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'Scalable cloud solutions' },
        { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions', description: 'Comprehensive security' },
        { name: 'Web Development', url: '/web-development', description: 'Modern web applications' },
        { name: 'Mobile Development', url: '/mobile-development', description: 'iOS and Android apps' },
        { name: 'API Development', url: '/api-development', description: 'RESTful API services' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'Our Team', url: '/team', description: 'Meet our experts' },
        { name: 'Case Studies', url: '/case-studies', description: 'Success stories' },
        { name: 'Blog', url: '/blog', description: 'Technology insights' },
        { name: 'Careers', url: '/careers', description: 'Join our team' },
        { name: 'Support', url: '/support', description: 'Get help and support' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Tutorials', url: '/tutorials', description: 'Learn new skills' },
        { name: 'Consultation', url: '/consultation', description: 'Expert advice' },
        { name: 'Demo', url: '/demo', description: 'See our solutions' },
        { name: 'Pricing', url: '/pricing', description: 'Transparent pricing' },
        { name: 'Micro SaaS', url: '/micro-saas', description: 'Ready-to-deploy solutions' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', url: '/privacy', description: 'Data protection policy' },
        { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', url: '/cookies', description: 'Cookie usage policy' },
        { name: 'Accessibility', url: '/accessibility', description: 'Accessibility statement' }
      ]
    }
  ]

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group | All Pages and Services</title>
        <meta name="description" content="Explore all pages and services available on our website. Find exactly what you're looking for with our comprehensive sitemap." />
        <meta name="keywords" content="sitemap, website navigation, all pages, services, AI solutions, IT services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Website <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Sitemap</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Explore all pages and services available on our website. 
              Find exactly what you're looking for with our comprehensive sitemap.
            </p>
          </div>
        </section>

        {/* Sitemap Sections */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sitemapSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <ArrowRight className="w-6 h-6 text-cyan-400 mr-3" />
                    {section.title}
                  </h2>
                  
                  <ul className="space-y-4">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          to={link.url}
                          className="block p-4 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                {link.name}
                              </h3>
                              <p className="text-sm text-gray-400 mt-1">{link.description}</p>
                            </div>
                            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Use our search functionality or contact us directly for assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
                  Search Website
                </button>
                <Link
                  to="/contact"
                  className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default SitemapPage