import React from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import {
  Phone,
  Mail,
  MapPin,
  Brain,
  Cloud,
  Shield,
  Code,
  Database,
  Network,
  ArrowRight,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  Instagram,
  Youtube,
  Globe,
  Building2,
  Users,
  Award,
  Clock,
  CheckCircle
} from 'lucide-react';

interface FooterProps {
  className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'AI Services', href: '/ai-services', icon: Brain },
    { name: 'IT Services', href: '/it-services', icon: Code },
    { name: 'Micro SaaS', href: '/micro-saas', icon: Cloud },
    { name: 'Cybersecurity', href: '/security', icon: Shield },
    { name: 'Cloud Solutions', href: '/cloud-solutions', icon: Cloud },
    { name: 'Database Solutions', href: '/database-solutions', icon: Database }
  ];

  const solutions = [
    { name: 'Enterprise Solutions', href: '/enterprise-solutions' },
    { name: 'Startup Solutions', href: '/startup-solutions' },
    { name: 'Industry Solutions', href: '/industries' },
    { name: 'Custom Development', href: '/custom-development' },
    { name: 'Digital Transformation', href: '/digital-transformation' },
    { name: 'Consulting', href: '/consulting' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'News', href: '/news' },
    { name: 'Partners', href: '/partners' }
  ];

  const resources = [
    { name: 'Blog', href: '/blog' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Documentation', href: '/docs/api' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'White Papers', href: '/white-papers' },
    { name: 'Webinars', href: '/webinars' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'Accessibility', href: '/accessibility' }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube }
  ];

  return (
    <footer className={`bg-gray-900 text-white ${className}`}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg mr-3">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Zion Tech Group</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI solutions, cloud services, and technology consulting. 
              We help businesses transform and grow through innovative technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
=======
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
>>>>>>> fff1a961f4ef4a979058d66e8db4fd365994ab84

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

<<<<<<< HEAD
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="flex items-center text-gray-300 hover:text-white transition-colors group"
                  >
                    <service.icon className="w-4 h-4 mr-2" />
                    {service.name}
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
=======
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
>>>>>>> fff1a961f4ef4a979058d66e8db4fd365994ab84
                  </Link>
                </li>
              ))}
            </ul>
          </div>

<<<<<<< HEAD
          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Solutions</h4>
            <ul className="space-y-3">
              {solutions.map((solution) => (
                <li key={solution.name}>
                  <Link
                    href={solution.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3 mb-8">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    href={resource.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center">
              <Shield className="w-8 h-8 text-green-400 mr-3" />
              <div>
                <h5 className="font-semibold">Secure & Reliable</h5>
                <p className="text-sm text-gray-400">Enterprise-grade security</p>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="w-8 h-8 text-blue-400 mr-3" />
              <div>
                <h5 className="font-semibold">24/7 Support</h5>
                <p className="text-sm text-gray-400">Always here to help</p>
              </div>
            </div>
            <div className="flex items-center">
              <Award className="w-8 h-8 text-yellow-400 mr-3" />
              <div>
                <h5 className="font-semibold">Certified Experts</h5>
                <p className="text-sm text-gray-400">Industry-certified professionals</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-6">
                {legal.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
=======
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
>>>>>>> fff1a961f4ef4a979058d66e8db4fd365994ab84
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
<<<<<<< HEAD
            <div className="flex items-center mt-4 md:mt-0">
              <Globe className="w-4 h-4 mr-2 text-gray-400" />
              <span className="text-gray-400 text-sm">Serving clients worldwide</span>
=======
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">Powered by</span>
              <div className="flex items-center space-x-2">
                <Brain className="h-5 w-5 text-purple-400" />
                <span className="text-sm font-semibold text-white">AI Technology</span>
              </div>
>>>>>>> fff1a961f4ef4a979058d66e8db4fd365994ab84
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
<<<<<<< HEAD
}
=======
};

export default Footer;
>>>>>>> fff1a961f4ef4a979058d66e8db4fd365994ab84
