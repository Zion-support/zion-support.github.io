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
=======
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, Instagram, Zap, Brain, Server, Shield, Users, Building2, FileText, Rocket, Target, Atom, Network, Cloud, Lock, TrendingUp, Workflow, MessageCircle, DollarSign, Briefcase, ArrowUp, Sparkles, Home, Truck, Factory, Heart, BookOpen, BarChart3, Cpu, Leaf, Satellite, HelpCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51

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
        { name: "Quantum Security", href: "/services", icon: Lock },
      ]
    }
  ];

  const services = {
    'AI Solutions': [
      { name: 'AI-Powered Email Responder', href: '/ai-services#ai-email-responder' },
      { name: 'AI Content Generation', href: '/ai-services#ai-content-generation' },
      { name: 'Computer Vision Solutions', href: '/ai-services#computer-vision' },
      { name: 'Natural Language Processing', href: '/ai-services#nlp' },
      { name: 'Predictive Analytics', href: '/ai-services#predictive-analytics' }
    ],
    'IT Services': [
      { name: 'Cloud Migration', href: '/it-services#cloud-migration' },
      { name: 'DevOps Automation', href: '/it-services#devops' },
      { name: 'Cybersecurity', href: '/it-services#cybersecurity' },
      { name: 'System Integration', href: '/it-services#integration' },
      { name: 'Technical Support', href: '/it-services#support' }
    ],
    'Micro SaaS': [
      { name: 'Micro CRM', href: '/micro-saas#micro-crm' },
      { name: 'Project Management', href: '/micro-saas#project-management' },
      { name: 'Analytics Dashboard', href: '/micro-saas#analytics' },
      { name: 'API Management', href: '/micro-saas#api-management' },
      { name: 'White-label Solutions', href: '/micro-saas#white-label' }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram }
  ];

  return (
<<<<<<< HEAD
    <footer className={`bg-gray-900 text-white ${className}`}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg mr-3">
                <Building2 className="w-8 h-8 text-white" />
=======
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="h-6 w-6 text-white" />
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
              </div>
              <span className="ml-3 text-xl font-bold">Zion Tech Group</span>
            </div>
<<<<<<< HEAD
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI solutions, cloud services, and technology consulting. 
              We help businesses transform and grow through innovative technology.
=======
            <p className="text-gray-300 mb-6 max-w-sm">
              Leading provider of AI solutions, IT services, and micro SaaS platforms. 
              Transforming businesses through innovative technology.
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
<<<<<<< HEAD
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
                  </Link>
                </li>
              ))}
            </ul>
          </div>

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
=======
          {Object.entries(services).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
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
<<<<<<< HEAD
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
              </div>
            </div>
            <div className="flex items-center mt-4 md:mt-0">
              <Globe className="w-4 h-4 mr-2 text-gray-400" />
              <span className="text-gray-400 text-sm">Serving clients worldwide</span>
=======
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact Us
              </Link>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
<<<<<<< HEAD
}
=======
};

export default Footer;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
