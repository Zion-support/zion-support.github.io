'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Globe, FileText, Users, Settings, BarChart, Shield } from 'lucide-react'

const SitemapPage: React.FC = () => {
  const siteSections = [
    {
      title: 'Main Pages',
      icon: Globe,
      pages: [
        { name: 'Home', url: '/', description: 'Main landing page' },
        { name: 'About', url: '/about', description: 'About Zion Tech Group' },
        { name: 'Services', url: '/services', description: 'Our AI and IT services' },
        { name: 'Contact', url: '/contact', description: 'Get in touch with us' }
      ]
    },
    {
      title: 'AI Services',
      icon: BarChart,
      pages: [
        { name: 'AI Analytics', url: '/ai-analytics', description: 'AI-powered data analytics' },
        { name: 'AI Automation', url: '/ai-automation', description: 'Intelligent process automation' },
        { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Advanced workflow automation' },
        { name: 'AI 3D Generation', url: '/ai-3d-generation', description: 'AI-powered 3D content creation' }
      ]
    },
    {
      title: 'IT Services',
      icon: Settings,
      pages: [
        { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'Scalable cloud solutions' },
        { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions and services' },
        { name: 'Web Development', url: '/web-development', description: 'Custom web applications' },
        { name: 'Mobile Development', url: '/mobile-development', description: 'iOS and Android apps' }
      ]
    },
    {
      title: 'Company',
      icon: Users,
      pages: [
        { name: 'Careers', url: '/careers', description: 'Join our team' },
        { name: 'Case Studies', url: '/case-studies', description: 'Success stories and projects' },
        { name: 'Tutorials', url: '/tutorials', description: 'Learn technology skills' },
        { name: 'Support', url: '/support', description: 'Technical support and help' }
      ]
    },
    {
      title: 'Resources',
      icon: FileText,
      pages: [
        { name: 'Privacy Policy', url: '/privacy', description: 'Data protection and privacy' },
        { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', url: '/cookies', description: 'Cookie usage and preferences' },
        { name: 'Sitemap', url: '/sitemap', description: 'This page - site navigation' }
      ]
    },
    {
      title: 'Specialized Services',
      icon: Shield,
      pages: [
        { name: 'Micro SaaS', url: '/micro-saas', description: 'Ready-to-use software solutions' },
        { name: 'Consultation', url: '/consultation', description: 'Expert technology consulting' },
        { name: 'Demo', url: '/demo', description: 'Interactive product demonstrations' },
        { name: 'Accessibility', url: '/accessibility', description: 'Inclusive design solutions' }
      ]
    }
  ]

  const totalPages = siteSections.reduce((total, section) => total + section.pages.length, 0)

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group | Site Navigation</title>
        <meta name="description" content="Navigate our website easily with our comprehensive sitemap. Find all pages, services, and resources in one place." />
        <meta name="keywords" content="sitemap, navigation, website structure, pages, services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Site <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Map</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Navigate our website easily with our comprehensive sitemap. 
              Find all pages, services, and resources in one organized location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                Search Site
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{totalPages}</div>
                  <div className="text-gray-300">Total Pages</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{siteSections.length}</div>
                  <div className="text-gray-300">Main Sections</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
                  <div className="text-gray-300">Mobile Responsive</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sitemap Sections */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete Site Structure
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore all sections of our website organized by category for easy navigation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {siteSections.map((section, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.pages.map((page, pageIndex) => (
                      <li key={pageIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <a 
                            href={page.url} 
                            className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                          >
                            {page.name}
                          </a>
                          <p className="text-gray-400 text-sm">{page.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Popular Pages
              </h2>
              <p className="text-xl text-gray-300">
                Quick access to our most visited pages and services.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'AI Services', url: '/ai-services' },
                { name: 'IT Services', url: '/it-services' },
                { name: 'Pricing', url: '/pricing' },
                { name: 'Case Studies', url: '/case-studies' },
                { name: 'Contact', url: '/contact' },
                { name: 'Support', url: '/support' },
                { name: 'Tutorials', url: '/tutorials' },
                { name: 'Careers', url: '/careers' }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 text-center group"
                >
                  <div className="text-cyan-400 group-hover:text-cyan-300 font-medium transition-colors">
                    {link.name}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Use our search function or contact us directly. We're here to help you find the information you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center">
                Search Site
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
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