'use client'
import React from 'react'
import Link from 'next/link'
import { Brain, Mail, Phone, MapPin, ArrowRight, Cloud, Shield, Code, BarChart, Zap, Users, Globe, Settings, Lightbulb, Target, TrendingUp, FileText, Image, Video, Music, ShoppingCart, CreditCard, Smartphone, Monitor, Database, Lock, Calendar, MessageCircle, Award, Heart, Box, Package, Mic, Workflow, Gauge, Eye, Wifi, MessageSquare, Rocket, Clock, DollarSign, Star, CheckCircle, Briefcase, BookOpen, Play, Cookie, ExternalLink } from 'lucide-react'

const Footer: React.FC = () => {
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  }

  const aiServices = [
    { name: 'AI Content Generation', href: '/ai-content-generation' },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics' },
    { name: 'AI Computer Vision', href: '/ai-computer-vision' },
    { name: 'AI Automation', href: '/ai-automation' },
    { name: 'AI Predictive Modeling', href: '/ai-predictive-modeling' }
  ]

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions' },
    { name: 'Web Development', href: '/web-development' },
    { name: 'Mobile Development', href: '/mobile-development' },
    { name: 'Network Management', href: '/network-management' },
    { name: 'Data Management', href: '/data-management' }
  ]

  const microSaasServices = [
    { name: 'AI Content Writer Pro', href: '/micro-saas/ai-content-writer' },
    { name: 'Analytics Dashboard', href: '/micro-saas/analytics-dashboard' },
    { name: 'Appointment Scheduler', href: '/micro-saas/appointment-scheduler' },
    { name: 'Email Marketing Suite', href: '/micro-saas/email-marketing' },
    { name: 'Expense Tracker', href: '/micro-saas/expense-tracker' },
    { name: 'Inventory Management', href: '/micro-saas/inventory-management' }
  ]

  const companyPages = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Tutorials', href: '/tutorials' }
  ]

  const supportPages = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Support Center', href: '/support' },
    { name: 'Consultation', href: '/consultation' },
    { name: 'Demo Request', href: '/demo' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'FAQ', href: '/faq' }
  ]

  const legalPages = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Sitemap', href: '/sitemap' }
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of AI and IT solutions, empowering businesses with cutting-edge technology and innovative digital transformation services.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">GitHub</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">AI Services</h3>
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link href={service.href} className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/ai-services" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium">
                  View All AI Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">IT Services</h3>
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link href={service.href} className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/it-services" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium">
                  View All IT Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Micro SaaS */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Micro SaaS</h3>
            <ul className="space-y-2">
              {microSaasServices.map((service, index) => (
                <li key={index}>
                  <Link href={service.href} className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/micro-saas" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium">
                  View All Micro SaaS →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Company</h3>
            <ul className="space-y-2">
              {companyPages.map((page, index) => (
                <li key={index}>
                  <Link href={page.href} className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold text-cyan-400 mt-6">Support</h3>
            <ul className="space-y-2">
              {supportPages.map((page, index) => (
                <li key={index}>
                  <Link href={page.href} className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href={`tel:${contactInfo.phone}`} className="text-gray-300 text-sm hover:text-cyan-400 transition-colors duration-200">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href={`mailto:${contactInfo.email}`} className="text-gray-300 text-sm hover:text-cyan-400 transition-colors duration-200">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span className="text-gray-300 text-sm">{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-4 h-4 text-cyan-400" />
                <a href={contactInfo.website} className="text-gray-300 text-sm hover:text-cyan-400 transition-colors duration-200 flex items-center" target="_blank" rel="noopener noreferrer">
                  {contactInfo.website}
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
            <Link 
              href="/consultation" 
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legalPages.map((page, index) => (
                <Link key={index} href={page.href} className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  {page.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer