import React, { memo } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Cloud, Code, BarChart, Users, Globe } from 'lucide-react'; origin/cursor/analyze-improve-and-deploy-application-10c6

import React, { memo } from 'react;

import { Link } from 'react-router-dom;

import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users } from lucide-react;

const Footer: React.FC = memo(() => {;

const currentYear = new Date().getFullYear();;;

const aiServices = [;;;

    { name: 'AI Solutions', url: '/ai-services', description: 'Comprehensive AI solutions },
    { name: 'AI Marketing Automation', url: '/ai-marketing', description: 'AI-powered marketing automation },
    { name: 'AI Customer Support', url: '/ai-customer-support', description: 'AI-powered customer service },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI content creation },
    { name: 'AI Healthcare Solutions', url: '/ai-healthcare', description: 'Medical AI solutions },
    { name: 'AI Financial Services', url: '/ai-fintech', description: 'Financial AI applications },
    { name: 'AI E-commerce Solutions', url: '/ai-ecommerce-solutions', description: 'E-commerce AI solutions },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions },
    { name: 'AI Mobile Apps', url: '/ai-mobile-app-development', description: 'Mobile AI applications },
    { name: 'AI Sales Automation', url: '/ai-sales-automation', description: 'Intelligent sales processes },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Workflow optimization },
    { name: 'AI Data Visualization', url: '/ai-data-visualization', description: 'Advanced data visualization },
    { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'AI-powered lead generation },
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'AI document processing },
    { name: 'AI Process Automation', url: '/ai-automation', description: 'Intelligent process automation }

import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users } from 'lucide-react';
 origin/cursor/analyze-improve-and-deploy-application-0f74

const Footer: React.FC = () => {
 origin/cursor/analyze-improve-and-deploy-application-0ff3
 origin/cursor/analyze-improve-and-deploy-application-1247
import { Link } from 'react-router-dom';

{ name: 'AI Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'AI Voice Solutions', url: '/ai-voice-assistant', description: 'Voice AI' } origin/cursor/analyze-improve-and-deploy-application-0e37
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-services', description: 'AWS, Azure, GCP' },
    { name: 'Cybersecurity', url: '/cybersecurity-solutions', description: 'Security solutions' },
    { name: 'Web Development', url: '/web-development', description: 'Modern web apps' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'iOS & Android' },
{ name: 'Cloud-Native Security', url: '/cloud-native-security', description: 'Container security' },
    { name: 'IT Services', url: '/it-services', description: 'Comprehensive IT support' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Enterprise infrastructure' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'Cloud Infrastructure', url: '/ai-cloud-infrastructure', description: 'Cloud migration & setup' },
    { name: 'E-commerce Solutions', url: '/ai-ecommerce-solutions', description: 'E-commerce platforms' },
    { name: 'Mobile App Development', url: '/ai-mobile-app-development', description: 'Mobile applications' },
    { name: 'Database Services', url: '/ai-data-analytics', description: 'Database management' }
 origin/cursor/analyze-improve-and-deploy-application-1448
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
{ name: 'DevOps & CI/CD', url: '/devops-cicd', description: 'Deployment automation' },
    { name: 'Data Analytics', url: '/data-analytics', description: 'Business intelligence' }
  ];
 origin/cursor/analyze-improve-and-deploy-application-0e37
  ];

export default function Footer() {
  return (
 origin/cursor/analyze-improve-and-deploy-application-0fdb
 origin/cursor/analyze-improve-and-deploy-application-0fe6
    { name: "Blog", path: "/blog" },
    { name: "Tutorials", path: "/tutorials" },
    { name: "Support", path: "/support" },
{ name: "Consultation", path: "/consultation" }, origin/cursor/analyze-improve-and-deploy-application-0fe6
  ];
<footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"> origin/cursor/analyze-improve-and-deploy-application-0f49
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">Z</span>
 origin/cursor/analyze-improve-and-deploy-application-0e37
                  </Link>
                </li>
              ))}
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Twitter, 
  Linkedin,
  Github,
  ArrowRight
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'AI Services', path: '/ai-services' },
      { name: 'IT Services', path: '/services' },
      { name: 'Micro SAAS', path: '/micro-saas' },
      { name: '5G Solutions', path: '/5g-solutions' }
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Contact', path: '/contact' },
      { name: 'Blog', path: '/blog' },
      { name: 'Support', path: '/support' }
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookies' }
    ],
    resources: [
      { name: 'Documentation', path: '/docs' },
      { name: 'Tutorials', path: '/tutorials' },
      { name: 'API Reference', path: '/api' },
      { name: 'Status', path: '/status' }
    ]
  };

  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI-powered solutions, IT services, and digital transformation 
              for modern businesses. Transform your operations with cutting-edge technology. origin/cursor/analyze-improve-and-deploy-application-1091
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
{/* Company & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-pink-400">Company</h3>
            <ul className="space-y-3 mb-8">
              {company.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.url}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
                  >
                    {item.name} origin/cursor/analyze-improve-and-deploy-application-0e37
                  </Link>
                </li>
              ))}
            </ul>
<div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span> origin/cursor/analyze-improve-and-deploy-application-1091
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700>
          <div className="flex flex-col md:flex-row justify-between items-center>
            <div className="text-sm text-gray-400 mb-4 md:mb-0>
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6>
              <a href="/privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors>
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors>
                Terms of Service
              </a>
              <a href="/cookies" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Resources</h3>
 origin/cursor/analyze-improve-and-deploy-application-0f49
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-300 hover:text-cyan-400 text-sm transition-colors"
                    href={service.url}
                    className="text-gray-300 hover:text-white transition-colors group flex items-start"
                  >
                    <ArrowRight className="w-3 h-3 text-purple-400 mr-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div>
                      <div className="font-medium">{service.name}</div>
                      <div className="text-xs text-gray-400 group-hover:text-gray-300">
                        {service.description}
                      </div>
                    </div>
                  <Link
                    href={service.url}
                    className="text-gray-300 hover:text-white transition-colors group flex items-start"
                  >
                    <ArrowRight className="w-3 h-3 text-blue-400 mr-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div>
                      <div className="font-medium">{service.name}</div>
                      <div className="text-xs text-gray-400 group-hover:text-gray-300">
                        {service.description}
                      </div>
                    </div>
          </div>

          {/* Specialized Services & Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Zap className="w-5 h-5 text-orange-400 mr-2" />
              Specialized
            </h4>
            <ul className="space-y-3 mb-8">
              {specializedServices.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.url}
                    className="text-gray-300 hover:text-white transition-colors group flex items-start"
                  >
                    <ArrowRight className="w-3 h-3 text-orange-400 mr-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div>
                      <div className="font-medium">{service.name}</div>
                      <div className="text-xs text-gray-400 group-hover:text-gray-300">
                        {service.description}
                      </div>
                    </div>
 origin/cursor/analyze-improve-and-deploy-application-0e37
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Users className="w-5 h-5 text-green-400 mr-2" />
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
          </div>
</div>

        {/* Bottom Section */} origin/cursor/analyze-improve-and-deploy-application-0e37
        <div className="border-t border-gray-700 mt-12 pt-8">
 origin/cursor/analyze-improve-and-deploy-application-0f49
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-white font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
<div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white font-medium">+1 (302) 464-0950</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-red-600/20 p-2 rounded-lg">
                <MapPin className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white font-medium">364 E Main St STE 1008, Middletown, DE 19709</p>
              </div>
            </div> origin/cursor/analyze-improve-and-deploy-application-0f49
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-white/10">
          <div className="max-w-2xl">
            <h3 className="text-xl font-semibold text-white mb-2">
              Stay Updated with Our Latest Innovations
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest insights on AI, cloud technology, and cybersecurity delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Subscribe</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-white/10">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
{/* Legal Links */}
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"> origin/cursor/analyze-improve-and-deploy-application-0f1c
                Cookie Policy
              </a>
              <div>
                <h4 className="text-sm font-medium text-purple-300 mb-3">Emerging Tech</h4>
                <ul className="space-y-2">
                  {emergingTech.slice(0, 4).map((service, index) => (
                    <li key={index}>
                      <Link 
                        href={service.url}
                        className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                      >
                        {service.name}
        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Links */}
            <div>
              <h4 className="text-sm font-semibold text-cyan-400 mb-4">Company</h4>
              <ul className="space-y-2">
                {companyLinks.slice(0, 4).map((link, index) => (
                  <li key={index}>
                    <Link href={link.url} className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                      {link.name}
 origin/cursor/analyze-improve-and-deploy-application-1232
                    </Link>
                  </li>
                ))}
              </ul>
{/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 rounded-lg flex items-center justify-center transition-all duration-200 group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
              ))} origin/cursor/analyze-improve-and-deploy-application-0e37
            </div>

{/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div> origin/cursor/analyze-improve-and-deploy-application-0f1c
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {companyLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://linkedin.com/company/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
  )})
Footer.displayName = 'Footer
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
return (
    <footer className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-t border-purple-500/20">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-blue-600/5 to-purple-600/5 animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur opacity-30"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading technology solutions provider specializing in AI, cybersecurity, 
              cloud infrastructure, and digital transformation services.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-sm">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-purple-400" />
                <span className="text-sm">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-sm">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/ziontechgroup" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/ziontechgroup" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/ziontechgroup" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Brain className="w-5 h-5 mr-2 text-purple-400" />
              AI Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/ai-analytics" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  AI Analytics Dashboard
                </Link>
              </li>
              <li>
                <Link to="/ai-content-generation" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  AI Content Generation
                </Link>
              </li>
              <li>
                <Link to="/ai-customer-support" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  AI Customer Support
                </Link>
              </li>
              <li>
                <Link to="/ai-cybersecurity" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  AI Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/ai-data-analytics" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  AI Data Analytics
                </Link>
              </li>
              <li>
                <Link to="/ai-workflow-automation" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  AI Workflow Automation
                </Link>
              </li> origin/cursor/analyze-improve-and-deploy-application-0ff3
            </ul>
          </div>
        </div>

{aiServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center" origin/cursor/analyze-improve-and-deploy-application-1448
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
 origin/cursor/analyze-improve-and-deploy-application-1009
                    {service.name}
 origin/cursor/analyze-improve-and-deploy-application-1091
                  </Link>
                </li>
              ))}
            </ul>
          </div>

 origin/cursor/analyze-improve-and-deploy-application-1009
              </div>
            </div>
          </div>
        </div>

{/* IT Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <Settings className="w-5 h-5 mr-2 text-blue-400" />
              IT Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/cloud-infrastructure" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/cybersecurity" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Cybersecurity Solutions
                </Link>
              </li>
              <li>
                <Link to="/data-management" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Data Management
                </Link>
              </li>
              <li>
                <Link to="/network-solutions" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Network Solutions
                </Link>
              </li>
              <li>
                <Link to="/it-consulting" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link to="/system-integration" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  System Integration
 origin/cursor/analyze-improve-and-deploy-application-1247
        </div>

);
};

export default Footer;
 origin/cursor/analyze-improve-and-deploy-application-0f1c
 origin/cursor/analyze-improve-and-deploy-application-0ff3
 origin/cursor/analyze-improve-and-deploy-application-1232
            </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer'; origin/cursor/analyze-improve-and-deploy-application-1232
 origin/cursor/analyze-improve-and-deploy-application-1247

export default Footer;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1009
