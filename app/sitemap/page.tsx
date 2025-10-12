import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react'

const SitemapPage = () => {
  const siteSections = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', url: '/' },
        { name: 'About Us', url: '/about' },
        { name: 'Services', url: '/services' },
        { name: 'Contact', url: '/contact' },
        { name: 'Pricing', url: '/pricing' },
        { name: 'Blog', url: '/blog' },
        { name: 'Case Studies', url: '/case-studies' },
        { name: 'Careers', url: '/careers' }
      ]
    },
    {
      title: 'AI Services',
      links: [
        { name: 'AI Analytics & BI', url: '/ai-analytics' },
        { name: 'AI Automation', url: '/ai-automation' },
        { name: 'AI Chatbots', url: '/ai-chatbot-builder' },
        { name: 'AI Content Generation', url: '/ai-content-generator' },
        { name: 'AI Cybersecurity', url: '/ai-cybersecurity' },
        { name: 'AI Voice Assistant', url: '/ai-voice-assistant' },
        { name: 'AI CRM', url: '/ai-crm' },
        { name: 'AI Healthcare', url: '/ai-healthcare' }
      ]
    },
    {
      title: 'IT Services',
      links: [
        { name: 'Cloud Migration', url: '/cloud-migration' },
        { name: 'DevOps & CI/CD', url: '/devops' },
        { name: 'Cybersecurity', url: '/cybersecurity' },
        { name: 'Database Management', url: '/database' },
        { name: 'API Development', url: '/api' },
        { name: 'Mobile Development', url: '/mobile-development' },
        { name: 'Web Development', url: '/web-development' },
        { name: 'System Integration', url: '/system-integration' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Tutorials', url: '/tutorials' },
        { name: 'Consultation', url: '/consultation' },
        { name: 'Demo', url: '/demo' },
        { name: 'Support', url: '/support' },
        { name: 'Privacy Policy', url: '/privacy' },
        { name: 'Terms of Service', url: '/terms' },
        { name: 'Cookie Policy', url: '/cookies' },
        { name: 'Sitemap', url: '/sitemap' }
      ]
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Sitemap
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find all the pages and resources available on our website. 
            Navigate through our comprehensive collection of AI and IT solutions.
          </p>
        </div>

        {/* Sitemap Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteSections.map((section, index) => (
            <div key={index} className="bg-slate-800/50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-white mb-6">{section.title}</h2>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.url}
                      className="text-gray-300 hover:text-purple-400 transition-colors flex items-center"
                    >
                      <ArrowRight className="h-4 w-4 mr-2" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-lg text-center">
              <FileText className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">Documentation</h3>
              <p className="text-gray-300 mb-4">Comprehensive guides and documentation for all our services</p>
              <Link to="/docs" className="text-purple-400 hover:text-purple-300">
                View Documentation
              </Link>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg text-center">
              <MessageCircle className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">Community</h3>
              <p className="text-gray-300 mb-4">Join our community of developers and users</p>
              <Link to="/community" className="text-purple-400 hover:text-purple-300">
                Join Community
              </Link>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg text-center">
              <Settings className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">API Reference</h3>
              <p className="text-gray-300 mb-4">Complete API reference for developers</p>
              <Link to="/api-docs" className="text-purple-400 hover:text-purple-300">
                View API Docs
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Contact our support team for assistance or browse our comprehensive resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Contact Support
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/support"
              className="inline-flex items-center border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold"
            >
              Browse Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SitemapPage