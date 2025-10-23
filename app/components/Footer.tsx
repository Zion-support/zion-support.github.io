<<<<<<< HEAD
'use client'
import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users } from 'lucide-react'

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear()
  
  const aiServices = [
    { name: 'AI Strategy & Consulting', url: '/ai-services', description: 'Strategic AI consulting' },
    { name: 'Machine Learning Solutions', url: '/ai-services', description: 'Custom ML models' },
    { name: 'Natural Language Processing', url: '/ai-services', description: 'NLP and chatbots' },
    { name: 'Computer Vision', url: '/ai-services', description: 'Image and video analysis' },
    { name: 'AI Automation', url: '/ai-services', description: 'Process automation' },
    { name: 'AI Data Analytics', url: '/ai-services', description: 'Intelligent analytics' }
  ]

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/it-services', description: 'AWS, Azure, GCP' },
    { name: 'DevOps & CI/CD', url: '/it-services', description: 'Automation pipelines' },
    { name: 'Cybersecurity', url: '/it-services', description: 'Security solutions' },
    { name: 'Managed IT Services', url: '/it-services', description: '24/7 IT support' },
    { name: 'Database Management', url: '/it-services', description: 'Database optimization' },
    { name: 'Network Solutions', url: '/it-services', description: 'Network infrastructure' }
  ]

  const microSaasServices = [
    { name: 'Business Intelligence', url: '/micro-saas', description: 'Analytics dashboard' },
    { name: 'AI Customer Support', url: '/micro-saas', description: 'Chatbot solutions' },
    { name: 'Email Marketing', url: '/micro-saas', description: 'Marketing automation' },
    { name: 'Project Management', url: '/micro-saas', description: 'Team collaboration' },
    { name: 'Lead Generation', url: '/micro-saas', description: 'Sales automation' },
    { name: 'Financial Analytics', url: '/micro-saas', description: 'Financial management' }
  ]

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Careers', url: '/careers' },
    { name: 'Partners', url: '/partners' },
    { name: 'Support', url: '/support' }
  ]

  const resourcesLinks = [
    { name: 'Pricing', url: '/pricing' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api' },
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'Community', url: '/community' }
  ]
=======
"use client";
import React from "react";

import Link from "next/link";
import { ArrowRight, Brain, Mail, MapPin, Phone } from "lucide-react";

const Footer: React.FC = () => {
  const aiServices = [
    { name: "AI Chatbot Builder", href: "/ai-chatbot-builder" },
    { name: "AI Content Generator", href: "/ai-content-generator" },
    { name: "AI Data Visualizer", href: "/ai-data-visualizer" },
    { name: "AI Document Intelligence", href: "/ai-document-intelligence" },
    { name: "AI Financial Forecasting", href: "/ai-financial-forecasting" },
    { name: "AI Fraud Detection", href: "/ai-fraud-detection" },
  ];

  const itServices = [
    { name: "Web Development", href: "/web-development" },
    { name: "Mobile Development", href: "/mobile-development" },
    { name: "API Development", href: "/api-development" },
    { name: "Cloud Solutions", href: "/cloud-solutions" },
    { name: "Cybersecurity", href: "/cybersecurity" },
    { name: "Data Analytics", href: "/data-analytics" },
  ];

  const microSaas = [
    { name: "Analytics Dashboard", href: "/analytics-dashboard" },
    { name: "Expense Tracker Pro", href: "/expense-tracker-pro" },
    { name: "Inventory Manager", href: "/inventory-manager" },
    { name: "Task Manager Pro", href: "/task-manager-pro" },
    { name: "Social Media Scheduler", href: "/social-media-scheduler" },
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Partnerships", href: "/partnerships" },
  ];

  const supportLinks = [
    { name: "Help Center", href: "/help" },
    { name: "Documentation", href: "/docs" },
    { name: "Tutorials", href: "/tutorials" },
    { name: "API Documentation", href: "/api-docs" },
    { name: "Status Page", href: "/status" },
  ];

  const quickLinks = [
    { name: "Free Consultation", href: "/consultation" },
    { name: "Request Demo", href: "/demo" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact Us", href: "/contact" },
    { name: "Support", href: "/support" },
  ];
>>>>>>> dbc62b9d098f838bcbe86265c63a54c93a7c7698

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
<<<<<<< HEAD
            <p className="text-gray-300 text-sm">
              Empowering businesses with cutting-edge AI, IT solutions, and micro-SaaS platforms. 
              We transform ideas into intelligent, scalable technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="tel:+1-555-0123" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 012-3456</span>
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="mailto:info@ziontechgroup.com" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@ziontechgroup.com</span>
=======
            <p className="text-gray-400 mb-4">
              Advanced AI and IT solutions for modern businesses. We help you
              leverage cutting-edge technology to drive growth and innovation.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
>>>>>>> dbc62b9d098f838bcbe86265c63a54c93a7c7698
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div>
<<<<<<< HEAD
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-blue-400" />
              AI Services
            </h3>
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
=======
            <h3 className="text-lg font-semibold mb-4">AI Services</h3>
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
>>>>>>> dbc62b9d098f838bcbe86265c63a54c93a7c7698
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
<<<<<<< HEAD
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Code className="w-5 h-5 mr-2 text-green-400" />
              IT Services
            </h3>
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
=======
            <h3 className="text-lg font-semibold mb-4">IT Services</h3>
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
>>>>>>> dbc62b9d098f838bcbe86265c63a54c93a7c7698
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

<<<<<<< HEAD
          {/* Micro-SaaS */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Cloud className="w-5 h-5 mr-2 text-purple-400" />
              Micro-SaaS
            </h3>
            <ul className="space-y-2">
              {microSaasServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.url} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
=======
          {/* Micro SaaS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Micro SaaS</h3>
            <ul className="space-y-2">
              {microSaas.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 mb-6">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
>>>>>>> dbc62b9d098f838bcbe86265c63a54c93a7c7698
                  </Link>
                </li>
              ))}
            </ul>
          </div>
<<<<<<< HEAD
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
              {companyLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.url} 
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-6">
              {resourcesLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.url} 
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
=======
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-blue-400" />
              <span className="text-gray-400">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-blue-400" />
              <span className="text-gray-400">contact@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-blue-400" />
              <span className="text-gray-400">San Francisco, CA</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 Zion Tech Group. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Cookie Policy
            </Link>
>>>>>>> dbc62b9d098f838bcbe86265c63a54c93a7c7698
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700 text-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved. | 
              <Link to="/privacy" className="ml-1 hover:text-white transition-colors">Privacy Policy</Link> | 
              <Link to="/terms" className="ml-1 hover:text-white transition-colors">Terms of Service</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
<<<<<<< HEAD
  )
})

Footer.displayName = 'Footer'

export default Footer
=======
  );
};

export default Footer;
>>>>>>> dbc62b9d098f838bcbe86265c63a54c93a7c7698
