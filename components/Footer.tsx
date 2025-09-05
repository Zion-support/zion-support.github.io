import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, Instagram, Zap, Brain, Server, Shield, Users, Building2, FileText, Rocket, Target, Atom, Network, Cloud, Lock, TrendingUp, Workflow, MessageCircle, DollarSign, Briefcase, ArrowUp, Sparkles, Home, Truck, Factory, Heart, BookOpen, BarChart3, Cpu, Leaf, Satellite, HelpCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "AI & Automation Services",
      icon: Brain,
      links: [
        { name: "AI Business Intelligence", href: "/ai-services", icon: BarChart3 },
        { name: "AI Customer Support", href: "/ai-services", icon: MessageCircle },
        { name: "AI Project Management", href: "/ai-services", icon: Workflow },
        { name: "AI Marketing Automation", href: "/ai-services", icon: TrendingUp },
        { name: "AI Enterprise Automation", href: "/ai-services", icon: Building2 },
      ]
    },
    {
      title: "IT Infrastructure & Security",
      icon: Server,
      links: [
        { name: "Cloud DevOps", href: "/it-services", icon: Cloud },
        { name: "IT Infrastructure Management", href: "/it-services", icon: Server },
        { name: "Cybersecurity Solutions", href: "/it-services", icon: Shield },
        { name: "Digital Transformation", href: "/it-services", icon: Rocket },
        { name: "Green IT Solutions", href: "/it-services", icon: Leaf },
      ]
    },
    {
      title: "Micro SaaS Solutions",
      icon: Building2,
      links: [
        { name: "Micro CRM", href: "/micro-saas", icon: Users },
        { name: "Micro SaaS Platform", href: "/micro-saas", icon: Building2 },
        { name: "Micro SaaS Innovation Hub", href: "/micro-saas", icon: Sparkles },
        { name: "AI Content Marketing Suite", href: "/micro-saas", icon: FileText },
        { name: "AI Financial Analytics", href: "/micro-saas", icon: DollarSign },
      ]
    },
    {
      title: "Quantum & Emerging Tech",
      icon: Atom,
      links: [
        { name: "Quantum AI Platform", href: "/services", icon: Brain },
        { name: "Quantum Trading Platform", href: "/services", icon: TrendingUp },
        { name: "Quantum Computing as a Service", href: "/services", icon: Cloud },
        { name: "Quantum Machine Learning", href: "/services", icon: Cpu },
        { name: "Quantum Edge Computing", href: "/services", icon: Network },
      ]
    }
  ];

  const quickLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About Us", href: "/about", icon: Building2 },
    { name: "Services", href: "/services", icon: Server },
    { name: "Solutions", href: "/solutions", icon: Target },
    { name: "Pricing", href: "/pricing", icon: DollarSign },
    { name: "Contact", href: "/contact", icon: MessageCircle },
    { name: "Careers", href: "/careers", icon: Briefcase },
    { name: "Blog", href: "/blog", icon: FileText },
    { name: "Support", href: "/support", icon: HelpCircle },
    { name: "Documentation", href: "/docs", icon: BookOpen },
  ];

  const contactInfo = [
    { icon: Phone, text: "+1 302 464 0950", href: "tel:+13024640950" },
    { icon: Mail, text: "kleber@ziontechgroup.com", href: "mailto:kleber@ziontechgroup.com" },
    { icon: MapPin, text: "364 E Main St STE 1008 Middletown DE 19709", href: "https://maps.app.goo.gl/example" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitter },
    { name: "GitHub", href: "https://github.com/Zion-Holdings/zion.app", icon: Github },
    { name: "Facebook", href: "https://facebook.com/ziontechgroup", icon: Facebook },
    { name: "Instagram", href: "https://instagram.com/ziontechgroup", icon: Instagram },
  ];

  return (
    <footer className="bg-slate-900 border-t border-purple-900/20 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading the future of technology with cutting-edge AI solutions, quantum computing, and innovative micro SaaS services.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
              <Target className="h-5 w-5 text-purple-400" />
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-purple-400 transition-colors text-sm flex items-center space-x-2 group">
                    <link.icon className="h-4 w-4 group-hover:text-purple-400" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
              <MessageCircle className="h-5 w-5 text-purple-400" />
              <span>Contact Us</span>
            </h3>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <a key={index} href={contact.href} target={contact.href.startsWith('http') ? '_blank' : '_self'} rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ""} className="text-gray-300 hover:text-purple-400 transition-colors text-sm flex items-start space-x-2 group">
                  <contact.icon className="h-4 w-4 mt-0.5 group-hover:text-purple-400 flex-shrink-0" />
                  <span className="leading-relaxed">{contact.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Stay Updated */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
              <Mail className="h-5 w-5 text-purple-400" />
              <span>Stay Updated</span>
            </h3>
            <p className="text-gray-300 text-sm">
              Get the latest updates on our innovative services and technology solutions.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Service Portfolio */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <h3 className="text-xl font-semibold text-white text-center mb-8">Our Comprehensive Service Portfolio</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                  <section.icon className="h-5 w-5 text-purple-400" />
                  <span>{section.title}</span>
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-gray-300 hover:text-purple-400 transition-colors text-sm flex items-center space-x-2 group">
                        <link.icon className="h-4 w-4 group-hover:text-purple-400" />
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <span>•</span>
              <Link href="/privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-purple-400 transition-colors">Terms of Service</Link>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">Powered by</span>
              <div className="flex items-center space-x-2">
                <Brain className="h-5 w-5 text-purple-400" />
                <span className="text-sm font-semibold text-white">AI Technology</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;