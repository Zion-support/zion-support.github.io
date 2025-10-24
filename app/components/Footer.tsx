<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { memo } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight } from 'lucide-react';
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-04df

const Footer: React.FC = memo(function Footer() {
  const aiServices = [
<<<<<<< HEAD
    { name: 'AI Services', url: '/ai-services' },
    { name: 'AI Marketing', url: '/ai-marketing' },
    { name: 'AI Automation', url: '/ai-automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare' },
    { name: 'AI Fintech', url: '/ai-fintech' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation' },
=======
    { name: 'AI Solutions', url: '/ai-services', description: 'Comprehensive AI solutions' ,},
    { name: 'AI Marketing Automation', url: '/ai-marketing', description: 'AI-powered marketing automation' ,},
    { name: 'AI Customer Support', url: '/ai-customer-support', description: 'AI-powered customer service' ,},
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights' ,},
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI content creation' ,},
    { name: 'AI Healthcare Solutions', url: '/ai-healthcare', description: 'Medical AI solutions' ,},
    { name: 'AI Financial Services', url: '/ai-fintech', description: 'Financial AI applications' ,},
    { name: 'AI E-commerce Solutions', url: '/ai-ecommerce-solutions', description: 'E-commerce AI solutions' ,},
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions' ,},
    { name: 'AI Mobile Apps', url: '/ai-mobile-app-development', description: 'Mobile AI applications' ,},
    { name: 'AI Sales Automation', url: '/ai-sales-automation', description: 'Intelligent sales processes' ,},
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Workflow optimization' ,},
    { name: 'AI Data Visualization', url: '/ai-data-visualization', description: 'Advanced data visualization' ,},
    { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'AI-powered lead generation' ,},
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'AI document processing' ,},
    { name: 'AI Process Automation', url: '/ai-automation', description: 'Intelligent process automation' ,}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
  ];

  const itServices = [
<<<<<<< HEAD
    { name: 'IT Services', url: '/it-services' },
    { name: 'Micro SAAS', url: '/micro-saas' },
    { name: 'Cybersecurity', url: '/cybersecurity' },
    { name: 'Cloud Infrastructure', url: '/ai-cloud-infrastructure' },
    { name: 'E-commerce Solutions', url: '/ai-ecommerce-solutions' },
    { name: 'Mobile App Development', url: '/ai-mobile-app-development' },
=======
import React, { useMemo } from "react";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Clock } from 'lucide-react';
import { Users } from 'lucide-react';
import { Award } from 'lucide-react';
import { Star } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Database } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Code } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Mic } from 'lucide-react';
import { Cloud } from 'lucide-react';
import React from 'react';
import { 

const services = [
    {
      title: "Cloud Migration",
      description: "Seamless migration to cloud infrastructure",
      icon: "Cloud"
    },
    {
      title: "Security Solutions",
      description: "Advanced security and compliance",
      icon: "Shield"
    },
    {
      title: "Performance Optimization",
      description: "Optimize your cloud performance",
      icon: "Zap"
    }
  ];
const socialLinks = [
    { name: "Twitter", href: "#", icon: "Twitter" },
    { name: "LinkedIn", href: "#", icon: "Linkedin" },
    { name: "GitHub", href: "#", icon: "Github" }
  ];
const microSaasServices = [
    { name: "AI Analytics", href: "/ai-services" },
    { name: "Cloud Solutions", href: "/cloud-services" },
    { name: "DevOps", href: "/devops" }
  ];
  Brain, 
  Mail, 
  Phone, 
  MapPin,
  Clock, 
  ArrowRight,
  Shield,
  Zap,
  Globe,
  Twitter,
  Linkedin,
  Github,
  Award,
  Users
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Twitter",
      href: "https://twitter.com/ziontechgroup",
      icon: <Twitter className="w-5 h-5" />
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/ziontechgroup",
      icon: <Linkedin className="w-5 h-5" />
    },
    {
      name: "GitHub",
      href: "https://github.com/ziontechgroup",
      icon: <Github className="w-5 h-5" />
  ];

  const serviceCategories = [
    {
      title: "AI Solutions",
      services: [
        { name: "AI Analytics", href: "/ai-analytics" },
        { name: "AI Content Generation", href: "/ai-content-generation" },
        { name: "AI Customer Support", href: "/ai-customer-support" },
        { name: "AI Cybersecurity", href: "/ai-cybersecurity" },
        { name: "AI Data Analytics", href: "/ai-data-analytics" }
      ]
    },
    {
      title: "5G Solutions",
      services: [
        { name: "5G Network Design", href: "/5g-network-design" },
        { name: "5G Implementation", href: "/5g-implementation" },
        { name: "5G Private Networks", href: "/5g-private-networks" }
      ]
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0314
  ];

  const technologies = [
    { name: 'Quantum Computing', url: '/quantum-computing' },
    { name: 'Autonomous Systems', url: '/autonomous-systems' },
    { name: 'Business Intelligence', url: '/business-intelligence' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing' },
  ];

  const company = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Enterprise Solutions', url: '/enterprise' },
    { name: 'Contact Us', url: '/contact' },
=======
    { name: 'Cloud Services', url: '/cloud-services', description: 'Cloud solutions' ,},
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Seamless migration' ,},
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Development operations' ,},
    { name: 'Database Services', url: '/database', description: 'Database management' ,},
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' ,},
    { name: 'Security Monitoring', url: '/security-monitoring', description: '24/7 security' ,},
    { name: 'Penetration Testing', url: '/penetration-testing', description: 'Security testing' ,},
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Enterprise infrastructure' ,},
    { name: 'Managed IT Services', url: '/managed-it', description: '24/7 IT management' ,},
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT planning' ,},
    { name: 'Data Analytics', url: '/data-analytics', description: 'Business intelligence' ,},
    { name: 'Mobile Development', url: '/mobile-development', description: 'Mobile applications' ,},
    { name: 'Web Development', url: '/web-development', description: 'Web applications' ,},
    { name: 'Process Automation', url: '/process-automation', description: 'Workflow automation' ,}
  ];
  const microSaasServices = [
    { name: 'Micro SAAS Solutions', url: '/micro-saas', description: '50+ AI-powered tools' ,},
    { name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard', description: 'Business intelligence' ,},
    { name: 'AI-Powered CRM', url: '/ai-crm', description: 'Customer management' ,},
    { name: 'Security Monitoring Suite', url: '/security-monitoring-suite', description: 'Cybersecurity' ,},
    { name: 'Cloud Infrastructure Manager', url: '/cloud-infrastructure-manager', description: 'Cloud management' ,},
    { name: 'Email Marketing Automation', url: '/email-marketing-automation', description: 'Email marketing' ,},
    { name: 'Project Management Pro', url: '/project-management-pro', description: 'Project management' ,},
    { name: 'E-commerce Analytics Pro', url: '/ecommerce-analytics-pro', description: 'E-commerce analytics' ,},
    { name: 'AI Recruitment Assistant', url: '/ai-recruitment-assistant', description: 'HR & recruitment' ,},
    { name: 'Medical Records Manager', url: '/medical-records-manager', description: 'Healthcare' ,},
    { name: 'AI Accounting Assistant', url: '/ai-accounting-assistant', description: 'Finance & accounting' ,},
    { name: 'Property Management AI', url: '/property-management-ai', description: 'Real estate' ,},
    { name: 'Legal Document Manager', url: '/legal-document-manager', description: 'Legal & compliance' ,},
    { name: 'Online Learning Platform', url: '/online-learning-platform', description: 'Education' ,},
    { name: 'Supply Chain Optimizer', url: '/supply-chain-optimizer', description: 'Manufacturing' ,},
    { name: 'AI Writing Assistant', url: '/ai-writing-assistant', description: 'Content creation' ,}
  ];
  const emergingTech = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Quantum solutions' ,},
    { name: 'Robotics & Automation', url: '/robotics', description: 'Intelligent robotics' ,},
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Connected devices' ,},
    { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Decentralized solutions' ,},
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data insights' ,},
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems' ,},
    { name: '5G Implementation', url: '/5g-implementation', description: '5G solutions' ,},
    { name: 'AI 3D Generation', url: '/ai-3d-generation', description: '3D AI solutions' ,},
    { name: 'Holographic Workspace', url: '/ai-holographic-workspace', description: 'Holographic AI' ,}
  ];
  const companyLinks = [
    { name: 'About Us', url: '/about' ,},
    { name: 'Our Team', url: '/team' ,},
    { name: 'Case Studies', url: '/case-studies' ,},
    { name: 'Careers', url: '/careers' ,},
    { name: 'News', url: '/news' ,},
    { name: 'Partners', url: '/partners' ,},
    { name: 'Contact', url: '/contact' ,}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
  ];

  const resources = [
    { name: 'Blog & Insights', url: '/blog' },
    { name: 'Technical Guides', url: '/guides' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Sitemap', url: '/sitemap' },
  ];

<<<<<<< HEAD
=======
  return null;
};

export default function Footer({ className = '', children, ...props }: FooterProps) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0314
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-2">⚡</span>
              <h3 className="text-2xl font-bold text-cyan-400">Zion Tech Group</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. 
              Transform your business with cutting-edge technology.
            </p>
          </div>

          {/* AI Services */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">AI Services</h4>
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
=======
'use client'
import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users } from 'lucide-react'

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear()

  const aiServices = [
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', description: 'Conversational AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Business intelligence' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Image analysis' },
    { name: 'AI Marketing Automation', url: '/ai-marketing', description: 'Marketing AI' },
    { name: 'AI Process Automation', url: '/ai-automation', description: 'Workflow automation' }
  ]

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'Scalable cloud solutions' },
    { name: 'API Development', url: '/api-development', description: 'RESTful & GraphQL APIs' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Deployment automation' },
    { name: 'Database Management', url: '/database', description: 'Data optimization' },
    { name: 'System Integration', url: '/integration', description: 'Seamless connectivity' }
  ]

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Contact', url: '/contact' }
  ]

  const supportLinks = [
<<<<<<< HEAD
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Help Center', url: '/help' },
    { name: 'Status Page', url: '/status' },
    { name: 'Community', url: '/community' },
    { name: 'Support', url: '/support' }
  ]

=======
    { name: 'Documentation', url: '/docs' ,},
    { name: 'API Reference', url: '/api-docs' ,},
    { name: 'Support Center', url: '/support' ,},
    { name: 'System Status', url: '/status' ,},
    { name: 'Privacy Policy', url: '/privacy' ,},
    { name: 'Terms of Service', url: '/terms' ,}
  ];
  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    hours: 'Mon-Fri: 9AM-6PM EST',
    emergency: '24/7 Emergency Support Available',
  };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading provider of AI and IT solutions, empowering businesses to innovate and scale with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Mail className="w-4 h-4" />
              <span>info@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <MapPin className="w-4 h-4" />
              <span>San Francisco, CA</span>
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI-powered enterprise solutions, quantum computing, 
              and digital transformation services. Transform your business with our 
              advanced AI capabilities.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-2" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </div>
          </div>

          {/* Quick Links */}
          <div>
<<<<<<< HEAD
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-cyan-400" />
              AI Services
            </h3>
            <ul className="space-y-3">
              {aiServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm block"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
                  >
                    {service.name}
                  </Link>
                  <p className="text-gray-500 text-xs mt-1">{service.description}</p>
                </li>
              ))}
=======
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Blog
                </Link>
              </li>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </ul>
<<<<<<< HEAD
          </div>

<<<<<<< HEAD
=======
          </div></div></div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
          {/* IT Services */}
<<<<<<< HEAD
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">IT Services</h4>
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
=======
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Code className="w-5 h-5 mr-2 text-purple-400" />
              IT Services
            </h3>
            <ul className="space-y-3">
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.url}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm block"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
                  >
                    {service.name}
                  </Link>
                  <p className="text-gray-500 text-xs mt-1">{service.description}</p>
                </li>
              ))}
            </ul>
          </div>

<<<<<<< HEAD
          {/* Technologies */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Technologies</h4>
            <ul className="space-y-2">
              {technologies.map((tech, index) => (
                <li key={index}>
                  <Link
                    href={tech.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {tech.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Resources */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Company</h4>
            <ul className="space-y-2 mb-6">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link
                    href={resource.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
=======
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  AI Services
                </Link>
              </li>
              <li>
                <Link to="/quantum-computing" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Quantum Computing
                </Link>
              </li>
              <li>
                <Link to="/cloud-services" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Cloud Services
                </Link>
              </li>
              <li>
                <Link to="/consultation" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Consultation
                </Link>
              </li>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </ul>
<<<<<<< HEAD
          </div>
        </div>

<<<<<<< HEAD
        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">info@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">San Francisco, CA</span>
=======
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                <a href={`tel: ${contactInfo.phone}`} className="hover:text-cyan-400 transition-colors font-medium">
                  {contactInfo.phone}
                </a>
              </div></div></div>
              <div className="flex items-center text-sm text-gray-300">
                <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                  <a href={`mailto: ${contactInfo.email}`} className="hover:text-cyan-400 transition-colors font-medium">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start text-sm text-gray-300">
                <MapPin className="w-4 h-4 mr-2 text-cyan-400 mt-0.5" />
                <span className="leading-relaxed">{contactInfo.address}</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                <span>{contactInfo.hours}</span>
              </div>
              <div className="text-xs text-cyan-400 font-medium">
                {contactInfo.emergency}
              </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300 text-sm">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300 text-sm">High Performance</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300 text-sm">Award Winning</span>
              </div>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
=======
          {/* Company & Support */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2 text-green-400" />
                Company
              </h3>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.url}
                      className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Cloud className="w-5 h-5 mr-2 text-yellow-400" />
                Support
              </h3>
              <ul className="space-y-2">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.url}
                      className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Clock className="w-4 h-4" />
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
=======
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Advanced AI and IT solutions for modern businesses. We help you transform your digital infrastructure with cutting-edge technology.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/ai-solutions" className="text-gray-300 hover:text-white">AI Solutions</Link></li>
              <li><Link href="/cloud-services" className="text-gray-300 hover:text-white">Cloud Services</Link></li>
              <li><Link href="/cybersecurity" className="text-gray-300 hover:text-white">Cybersecurity</Link></li>
              <li><Link href="/devops" className="text-gray-300 hover:text-white">DevOps</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/team" className="text-gray-300 hover:text-white">Our Team</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-white">Careers</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
<<<<<<< HEAD
            <p className="text-gray-300 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-300 hover:text-white text-sm">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-300 hover:text-white text-sm">Terms of Service</Link>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
=======
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div></div></div>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Cookie Policy
              </a>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
=======
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Terms of Service
              </Link>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </div>
          </div>
        </div>
      </div>
    </footer>
<<<<<<< HEAD
  );
<<<<<<< HEAD
<<<<<<< HEAD
});

export default Footer;
=======
  )
})

Footer.displayName = 'Footer'

export default Footer
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
=======
};

export default Footer;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
=======
};

export default Footer;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
=======
import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

import {Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Users, ArrowRight, Shield, Database, Workflow, Link as LinkIcon, Linkedin, Twitter, Github} from 'lucide-react';

  const currentYear = new Date().getFullYear();

  const aiServices = [{name: 'AI Analytics & BI', url: '/ai-analytics', description: 'Business intelligence'},
    {name: 'AI Automation', url: '/ai-automation', description: 'Process automation'},
    {name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', description: 'Conversational AI'},
    {name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content'},
    {name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security'},
    {name: 'AI CRM', url: '/ai-crm', description: 'Smart CRM'},
    {name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Data insights'},
    {name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI'},
    {name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Image analysis'},
    {name: 'AI Voice Solutions', url: '/ai-voice-solutions', description: 'Speech recognition'},
    {name: 'AI Financial Services', url: '/ai-financial-services', description: 'Fintech AI'},
    {name: 'AI E-commerce Solutions', url: '/ai-ecommerce-solutions', description: 'E-commerce AI'}];

  const itServices = [{name: 'Cloud Migration', url: '/cloud-migration', description: 'Cloud solutions'},
    {name: 'DevOps & CI/CD', url: '/devops', description: 'Development operations'},
    {name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions'},
    {name: 'Database Management', url: '/database', description: 'Database services'},
    {name: 'API Development', url: '/api', description: 'API solutions'},
    {name: 'Mobile App Development', url: '/mobile-development', description: 'Mobile apps'},
    {name: 'Web Development', url: '/web-development', description: 'Web solutions'},
    {name: 'IT Consulting', url: '/it-consulting', description: 'IT advisory'},
    {name: 'System Integration', url: '/system-integration', description: 'System solutions'},
    {name: 'Data Management', url: '/data-management', description: 'Data solutions'},
    {name: 'Network Security', url: '/network-security', description: 'Network protection'},
    {name: 'IT Support', url: '/it-support', description: 'Technical support'}];

  const company = [{name: 'About Us', url: '/about'},
    {name: 'Our Team', url: '/team'},
    {name: 'Careers', url: '/careers'},
    {name: 'News & Blog', url: '/news'},
    {name: 'Case Studies', url: '/case-studies'},
    {name: 'Partners', url: '/partners'},
    {name: 'Investors', url: '/investors'},
    {name: 'Contact', url: '/contact'}];

  const resources = [{name: 'Documentation', url: '/docs'},
    {name: 'API Reference', url: '/api-docs'},
    {name: 'Tutorials', url: '/tutorials'},
    {name: 'White Papers', url: '/white-papers'},
    {name: 'Webinars', url: '/webinars'},
    {name: 'Support Center', url: '/support'},
    {name: 'Community', url: '/community'},
    {name: 'Status Page', url: '/status'}];

  const socialLinks = [{name: 'Twitter', url: 'https:// twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5"   />,</Twitter></Twitter>
    {name: 'LinkedIn', url: 'https:// linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5"   />,</Linkedin></Linkedin>
    {name: 'GitHub', url: 'https:// github.com/ziontechgroup', icon: <Github className="w-5 h-5"   /></Github></Github>];

  return (
    <h3 className="text-2-xl font-bold mb-4">Zion Tech Group</h3>
  const currentYear = new Date().getFullYear();

  return (
    <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            Advanced AI & IT Solutions;
            © {currentYear} Zion Tech Group. All rights reserved.

  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
