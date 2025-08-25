'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ChevronUp, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Database, 
  Cpu, 
  Network, 
  Eye, 
  Leaf, 
  Heart, 
  Calendar, 
  ShoppingCart, 
  Building, 
  Factory, 
  Store, 
  Truck, 
  GraduationCap, 
  FileText, 
  BarChart3, 
  Users, 
  CreditCard, 
  MessageSquare, 
  Camera, 
  Video, 
  Music, 
  BookOpen, 
  Target, 
  TrendingUp, 
  PieChart, 
  Activity, 
  Globe, 
  Bot, 
  Settings, 
  ArrowRight, 
  Star, 
  Users2, 
  Rocket, 
  Award, 
  Shield as ShieldIcon, 
  Globe as GlobeIcon, 
  Zap as ZapIcon, 
  Code 
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      services: [
        { name: "AI Development", link: "/ai-development" },
        { name: "Machine Learning", link: "/machine-learning" },
        { name: "Natural Language Processing", link: "/nlp" },
        { name: "Computer Vision", link: "/computer-vision" },
        { name: "AI Consulting", link: "/ai-consulting" }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      services: [
        { name: "Cloud Migration", link: "/cloud-migration" },
        { name: "DevOps Automation", link: "/devops" },
        { name: "Serverless Computing", link: "/serverless" },
        { name: "Container Orchestration", link: "/kubernetes" },
        { name: "Infrastructure as Code", link: "/iac" }
      ]
    },
    {
      title: "Security & Compliance",
      services: [
        { name: "Cybersecurity Assessment", link: "/cybersecurity" },
        { name: "Penetration Testing", link: "/penetration-testing" },
        { name: "Compliance Management", link: "/compliance" },
        { name: "Identity & Access Management", link: "/iam" },
        { name: "Data Protection", link: "/data-protection" }
      ]
    },
    {
      title: "Data & Analytics",
      services: [
        { name: "Big Data Engineering", link: "/big-data" },
        { name: "Business Intelligence", link: "/business-intelligence" },
        { name: "Data Visualization", link: "/data-visualization" },
        { name: "Predictive Analytics", link: "/predictive-analytics" },
        { name: "Data Governance", link: "/data-governance" }
      ]
    }
  ];

  const industrySolutions = [
    { name: "Healthcare", link: "/healthcare", description: "Digital health solutions" },
    { name: "Fintech", link: "/fintech", description: "Financial technology" },
    { name: "Education", link: "/education", description: "EdTech platforms" },
    { name: "Manufacturing", link: "/manufacturing", description: "Industry 4.0" },
    { name: "Retail", link: "/retail", description: "E-commerce solutions" },
    { name: "Government", link: "/government", description: "Public sector tech" }
  ];

  const resources = [
    { name: "Case Studies", link: "/case-studies" },
    { name: "White Papers", link: "/white-papers" },
    { name: "Webinars", link: "/webinars" },
    { name: "Blog", link: "/blog" },
    { name: "Documentation", link: "/docs" },
    { name: "API Reference", link: "/api" }
  ];

  const company = [
    { name: "About Us", link: "/about" },
    { name: "Team", link: "/team" },
    { name: "Careers", link: "/careers" },
    { name: "News", link: "/news" },
    { name: "Events", link: "/events" },
    { name: "Partners", link: "/partners" }
  ];

  const legal = [
    { name: "Privacy Policy", link: "/privacy" },
    { name: "Terms of Service", link: "/terms" },
    { name: "Cookie Policy", link: "/cookies" },
    { name: "Accessibility", link: "/accessibility" },
    { name: "Security", link: "/security" }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    website: 'https://ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: 'twitter' },
    { name: 'GitHub', url: 'https://github.com/Zion-Holdings', icon: 'github' },
    { name: 'YouTube', url: 'https://youtube.com/@ziontechgroup', icon: 'youtube' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top Section - Logo and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              Pioneering the future of technology with cutting-edge solutions, quantum computing, 
              and AI-driven innovation for tomorrow's challenges.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label={social.name}
                >
                  <Globe className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <div className="space-y-3">
              {serviceCategories.slice(0, 2).map((category) => (
                <div key={category.title} className="mb-4">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">{category.title}</h4>
                  <div className="space-y-2">
                    {category.services.slice(0, 3).map((service) => (
                      <Link
                        key={service.name}
                        href={service.link}
                        className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Solutions</h3>
            <div className="space-y-3">
              {industrySolutions.slice(0, 4).map((solution) => (
                <Link
                  key={solution.name}
                  href={solution.link}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  {solution.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Section - Expanded Services and Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 pt-8 border-t border-gray-800">
          {/* AI & ML Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white flex items-center">
              <Brain className="w-5 h-5 mr-2 text-cyan-400" />
              AI & Machine Learning
            </h3>
            <div className="space-y-2">
              <Link href="/ai-autonomous-business-platform" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                AI Autonomous Business Platform
              </Link>
              <Link href="/ai-consciousness-evolution" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                AI Consciousness Evolution
              </Link>
              <Link href="/ai-autonomous-research-assistant" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                AI Research Assistant
              </Link>
              <Link href="/ai-content-generator" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                AI Content Generator
              </Link>
            </div>
          </div>

          {/* Quantum & Advanced Tech */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white flex items-center">
              <Cpu className="w-5 h-5 mr-2 text-purple-400" />
              Quantum & Advanced Tech
            </h3>
            <div className="space-y-2">
              <Link href="/quantum-computing" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Quantum Computing
              </Link>
              <Link href="/quantum-cloud-infrastructure" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Quantum Cloud Infrastructure
              </Link>
              <Link href="/quantum-financial-trading" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Quantum Financial Trading
              </Link>
              <Link href="/space-tech" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Space Technology
              </Link>
            </div>
          </div>

          {/* Enterprise Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white flex items-center">
              <Building className="w-5 h-5 mr-2 text-green-400" />
              Enterprise Solutions
            </h3>
            <div className="space-y-2">
              <Link href="/enterprise-it" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Enterprise IT
              </Link>
              <Link href="/advanced-ai-erp" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Advanced AI ERP
              </Link>
              <Link href="/ai-autonomous-devops" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                AI Autonomous DevOps
              </Link>
              <Link href="/ai-autonomous-security" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                AI Autonomous Security
              </Link>
            </div>
          </div>

          {/* Resources & Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white flex items-center">
              <FileText className="w-5 h-5 mr-2 text-orange-400" />
              Resources & Company
            </h3>
            <div className="space-y-2">
              <Link href="/case-studies" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Case Studies
              </Link>
              <Link href="/white-papers" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                White Papers
              </Link>
              <Link href="/webinars" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Webinars
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                About Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section - Contact and Legal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-gray-800">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-white transition-colors duration-200">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-white transition-colors duration-200">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                <span className="text-gray-300">{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/pricing" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Pricing
              </Link>
              <Link href="/demo" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Request Demo
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Contact Sales
              </Link>
              <Link href="/support" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Support
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <div className="space-y-2">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Made with ❤️ for the future</span>
              <button
                onClick={scrollToTop}
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                aria-label="Scroll to top"
              >
                <ChevronUp className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}