import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Mail, 
  Phone, 
  MapPin, 
<<<<<<< HEAD
  Clock, 
  ArrowRight,
  Brain,
  Shield,
  Zap,
  Globe
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
    }
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
      title: "IT Services",
      services: [
        { name: "Cloud Migration", href: "/cloud-migration" },
        { name: "DevOps Services", href: "/devops" },
        { name: "IT Consulting", href: "/it-consulting" },
        { name: "Network Security", href: "/network-security" },
        { name: "Custom Software", href: "/custom-software" }
      ]
    },
    {
      title: "Micro SAAS",
      services: [
        { name: "Zion Analytics Pro", href: "/zion-analytics-pro" },
        { name: "Zion Security Shield", href: "/zion-security-shield" },
        { name: "Zion Cloud Vault", href: "/zion-cloud-vault" },
        { name: "Zion AI CRM Pro", href: "/zion-ai-crm-pro" },
        { name: "Zion AI Marketing", href: "/zion-ai-marketing-automation-pro" }
      ]
    },
    {
      title: "5G Solutions",
      services: [
        { name: "5G Network Infrastructure", href: "/5g-network-infrastructure" },
        { name: "5G Edge Computing", href: "/5g-edge-computing" },
        { name: "5G IoT Solutions", href: "/5g-iot-solutions" },
        { name: "5G Smart Cities", href: "/5g-smart-city-solutions" },
        { name: "5G Private Networks", href: "/5g-private-networks" }
      ]
    }
  ];

<<<<<<< HEAD
  const quickLinks = [
    { name: "Home", path: "/" },
=======
  ArrowRight, 
  Twitter, 
  Linkedin, 
  Github,
  Users,
  Award,
  Zap,
  Shield
} from 'lucide-react';

export default function Footer() {
  const mainLinks = [
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-c22b
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "AI Services", path: "/ai-services" },
    { name: "Micro SAAS", path: "/micro-saas" },
    { name: "5G Solutions", path: "/5g-solutions" },
    { name: "Contact", path: "/contact" },
<<<<<<< HEAD
<<<<<<< HEAD
    { name: "Demo", path: "/demo" },
    { name: "Consultation", path: "/consultation" },    { name: "Blog", path: "/blog" },
=======
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-c22b
    { name: "Blog", path: "/blog" },
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-4257
    { name: "Tutorials", path: "/tutorials" },
    { name: "Demo", path: "/demo" },
    { name: "Consultation", path: "/consultation" },
    { name: "Support", path: "/support" },
  ];

  const aiServices = [
<<<<<<< HEAD
    { name: "AI Analytics", path: "/ai-analytics" },
<<<<<<< HEAD
    { name: "AI Cybersecurity", path: "/ai-cybersecurity" },
    { name: "AI Content Generation", path: "/ai-content-generation" },
    { name: "AI Customer Support", path: "/ai-customer-support" },
<<<<<<< HEAD    { name: "AI Content Generation", path: "/ai-content-generation" },
=======
    { name: "AI Content Generation", path: "/ai-content-generation" },
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-4257
    { name: "AI Customer Support", path: "/ai-customer-support" },
    { name: "AI Cybersecurity", path: "/ai-cybersecurity" },
    { name: "AI Data Analytics", path: "/ai-data-analytics" },
    { name: "AI Document Processing", path: "/ai-document-processing" },
    { name: "AI Marketing Automation", path: "/ai-marketing-automation" },
    { name: "AI Predictive Analytics", path: "/ai-predictive-analytics" },
    { name: "AI Voice Assistant", path: "/ai-voice-assistant" },
    { name: "AI Workflow Automation", path: "/ai-workflow-automation" },
  ];

  const microSaasServices = [
    { name: "AI Video Generator", path: "/zion-ai-video-generator" },
    { name: "AI Invoice Generator", path: "/zion-ai-invoice-generator" },
    { name: "AI Customer Insights", path: "/zion-ai-customer-insights" },
    { name: "AI Email Analyzer", path: "/zion-ai-email-analyzer" },
    { name: "Smart Inventory Optimizer", path: "/zion-smart-inventory-optimizer" },
    { name: "AI Customer Sentiment Tracker", path: "/zion-ai-customer-sentiment-tracker" },
    { name: "Smart Expense Categorizer", path: "/zion-smart-expense-categorizer" },
    { name: "AI Voice Assistant Pro", path: "/zion-ai-voice-assistant-pro" },
    { name: "AI Code Reviewer", path: "/zion-ai-code-reviewer" },
    { name: "AI Social Media Manager", path: "/zion-ai-social-media-manager" },
    { name: "AI Document Analyzer", path: "/zion-ai-document-analyzer" },
    { name: "AI Project Manager Pro", path: "/zion-ai-project-manager-pro" },
    { name: "AI Cybersecurity Suite Pro", path: "/zion-ai-cybersecurity-suite-pro" },
  ];

  const itServices = [
<<<<<<< HEAD
=======
    { name: "AI Data Analytics", path: "/ai-data-analytics" },
    { name: "AI Workflow Automation", path: "/ai-workflow-automation" },
    { name: "AI Predictive Analytics", path: "/ai-predictive-analytics" },
    { name: "AI Voice Assistant", path: "/ai-voice-assistant" },
  ];

  const itServices = [
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-9e47
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-4257
=======
    { name: "AI Code Assistant Pro", path: "/ai-code-assistant-pro" },
    { name: "AI Content Studio Pro", path: "/ai-content-studio" },
    { name: "AI Analytics Pro", path: "/ai-analytics-pro" },
    { name: "AI CRM Pro", path: "/ai-crm-assistant" },
    { name: "AI Cybersecurity Monitor Pro", path: "/ai-cybersecurity-monitor-pro" },
    { name: "AI Customer Insights Pro", path: "/ai-customer-insights" },
    { name: "AI Business Intelligence Pro", path: "/ai-business-intelligence-pro" },
    { name: "AI Marketing Automation Pro", path: "/ai-automation-platform" }
  ];

  const microSaasServices = [
    { name: "Zion Analytics Pro", path: "/ai-analytics-dashboard-pro" },
    { name: "Zion Security Shield", path: "/advanced-security-suite" },
    { name: "Zion Cloud Vault", path: "/ai-cloud-infrastructure" },
    { name: "Zion AI Project Manager Pro", path: "/ai-automation" },
    { name: "Zion AI Data Analytics Pro", path: "/ai-data-analytics-pro" },
    { name: "Zion AI Content Generator Pro", path: "/ai-content-generation-pro" }
  ];

  const itServices = [
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-c22b
    { name: "Cloud Migration", path: "/cloud-migration" },
    { name: "Web Development", path: "/web-development" },
    { name: "DevOps", path: "/devops" },
    { name: "IT Consulting", path: "/it-consulting" },
<<<<<<< HEAD
    { name: "Network Security", path: "/network-security" },
    { name: "Custom Software", path: "/custom-software" },
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-c22b
    { name: "System Integration", path: "/system-integration" },
    { name: "Network Security", path: "/network-security" }
  ];

  const fiveGServices = [
    { name: "5G Network Infrastructure", path: "/5g-network-infrastructure" },
    { name: "5G Edge Computing", path: "/5g-edge-computing" },
    { name: "5G IoT Solutions", path: "/5g-iot-solutions" },
    { name: "5G Smart City Solutions", path: "/5g-smart-city-solutions" },
    { name: "5G Private Networks", path: "/5g-private-networks" },
<<<<<<< HEAD
    { name: "5G Mobile Applications", path: "/5g-mobile-applications" },
    { name: "5G Data Analytics", path: "/5g-data-analytics" },
    { name: "5G Implementation", path: "/5g-implementation" },    { name: "System Integration", path: "/system-integration" },
    { name: "Network Security", path: "/network-security" },
    { name: "Custom Software", path: "/custom-software" },
    { name: "Software Development", path: "/software-development" },
  ];

<<<<<<< HEAD
  const microSaasServices = [
    { name: "Zion Analytics Pro", path: "/zion-ai-analytics-pro" },
    { name: "Zion AI CRM Pro", path: "/zion-ai-crm-pro" },
    { name: "Zion AI Video Generator", path: "/zion-ai-video-generator" },
    { name: "Zion Security Shield", path: "/zion-security-shield" },
    { name: "Zion AI Marketing", path: "/zion-ai-marketing-automation" },
    { name: "Zion E-commerce Suite", path: "/zion-ecommerce-suite" },
    { name: "Zion AI Content Generator", path: "/zion-ai-content-generator" },
    { name: "Zion AI Voice Assistant", path: "/zion-ai-voice-assistant" },
  ];

  const fiveGServices = [
    { name: "5G Network Infrastructure", path: "/5g-network-infrastructure" },
    { name: "5G Edge Computing", path: "/5g-edge-computing" },
    { name: "5G IoT Solutions", path: "/5g-iot-solutions" },
    { name: "5G Smart City", path: "/5g-smart-city-solutions" },
    { name: "5G Private Networks", path: "/5g-private-networks" },
    { name: "5G Mobile Apps", path: "/5g-mobile-applications" },
=======
    { name: "5G Data Analytics", path: "/5g-data-analytics" }
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-c22b
  ];

=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-4257
  const stats = [
<<<<<<< HEAD
    { number: "500+", label: "Projects Completed", icon: <Award className="w-5 h-5" /> },
    { number: "10,000+", label: "Happy Clients", icon: <Users className="w-5 h-5" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-5 h-5" /> },
    { number: "24/7", label: "Support", icon: <Clock className="w-5 h-5" /> }
=======
  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Blog", href: "/blog" }
  ];

  const supportLinks = [
    { name: "Contact Support", href: "/support" },
    { name: "Documentation", href: "/docs" },
    { name: "API Reference", href: "/api-docs" },
    { name: "Status Page", href: "/status" },
    { name: "System Status", href: "/system-status" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR Compliance", href: "/gdpr" },
    { name: "Security", href: "/security" }
>>>>>>> cursor/analyze-improve-and-deploy-application-568e
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
=======
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "60+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                {stat.icon}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-c22b
              </div>
<<<<<<< HEAD
              <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

<<<<<<< HEAD
<<<<<<< HEAD
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-4257
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-c22b
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-cyan-400" />
                <span>+1 (302) 464-0950</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-cyan-400 mt-1" />
                <span>364 E Main St STE 1008<br />Middletown, DE 19709</span>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">AI Services</h3>
            <ul className="space-y-2">
              {aiServices.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center text-sm"
                  >
                    <ArrowRight className="w-3 h-3 mr-2" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Micro SAAS</h3>
            <ul className="space-y-2">
              {microSaasServices.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center text-sm"
                  >
                    <ArrowRight className="w-3 h-3 mr-2" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

<<<<<<< HEAD
          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">IT Services</h3>
            <ul className="space-y-2">
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center text-sm"
                  >
                    <ArrowRight className="w-3 h-3 mr-2" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

<<<<<<< HEAD
<<<<<<< HEAD          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">IT Services</h3>
            <ul className="space-y-2">
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Micro SAAS</h3>
            <ul className="space-y-2">
              {microSaasServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
=======
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-4257
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-c22b
          {/* 5G Solutions */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">5G Solutions</h3>
            <ul className="space-y-2">
              {fiveGServices.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center text-sm"
                  >
                    <ArrowRight className="w-3 h-3 mr-2" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">IT Services</h3>
            <ul className="space-y-2">
              {itServices.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center text-sm"
                  >
                    <ArrowRight className="w-3 h-3 mr-2" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
<<<<<<< HEAD
            
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>              <li>
=======
              <li>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-4257
                <Link
                  to="/5g-solutions"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                >
                  View All 5G Solutions →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="mt-12 pt-8 border-t border-cyan-500/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
=======
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading provider of AI-powered solutions, IT services, and digital transformation. 
                We help businesses leverage cutting-edge technology to achieve their goals.
              </p>
              
              {/* Contact Info */}
>>>>>>> cursor/analyze-improve-and-deploy-application-568e
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 (302) 464-0950
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-3 text-cyan-400" />
                  <span>364 E Main St STE 1008, Middletown, DE 19709</span>
                </div>
<<<<<<< HEAD
=======
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
>>>>>>> cursor/analyze-improve-and-deploy-application-568e
              </div>
            </div>

            {/* Services */}
            {serviceCategories.map((category, index) => (
              <div key={index} className="lg:col-span-1">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  {category.title === "AI Solutions" && <Brain className="w-5 h-5 mr-2 text-cyan-400" />}
                  {category.title === "IT Services" && <Shield className="w-5 h-5 mr-2 text-green-400" />}
                  {category.title === "Micro SAAS" && <Zap className="w-5 h-5 mr-2 text-purple-400" />}
                  {category.title === "5G Solutions" && <Globe className="w-5 h-5 mr-2 text-orange-400" />}
                  {category.title}
                </h4>
                <ul className="space-y-2">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex}>
                      <Link
                        to={service.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>Built with ❤️ for innovation</span>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>24/7 Support Available</span>
                </div>
              </div>
=======
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-c22b
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
<<<<<<< HEAD
};

export default Footer;
=======
}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-c22b
