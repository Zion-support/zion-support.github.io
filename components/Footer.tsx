<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
=======
<<<<<<< HEAD
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
import React from 'react'
import Link from 'next/link'
=======
import React from 'react';
<<<<<<< HEAD
import Link from 'next/link';
=======
<<<<<<< HEAD
<<<<<<< HEAD
import NextLink from 'next/link';
>>>>>>> main
>>>>>>> main
>>>>>>> main
import {
  Mail,
  Phone,
=======
import Link from 'next/link';
import {
  Phone,
  Mail,
<<<<<<< HEAD
  Clock,
  Linkedin,
  Twitter,
  Github,
  ArrowRight,
<<<<<<< HEAD
  ExternalLink
} from 'lucide-react';
=======
  ExternalLink,
  Youtube,
  Heart,
  Shield,
  Globe,
  Building,
  Code,
  BookOpen,
  Award,
  TrendingUp,
  Lock,
  Target,
  Brain,
  Cloud,
  Network,
  BarChart3,
  MessageSquare,
  HelpCircle,
  User,
  Settings
=======
<<<<<<< HEAD
=======
>>>>>>> main
  MapPin,
<<<<<<< HEAD
>>>>>>> main
  Facebook,
  Twitter,
  Linkedin,
<<<<<<< HEAD
  Instagram
} from 'lucide-react';

=======
  Instagram,
  Github,
  ArrowRight,
<<<<<<< HEAD
  ExternalLink
} from 'lucide-react';

=======
>>>>>>> main
  ExternalLink
} from 'lucide-react';
=======
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Github,
  ExternalLink
} from 'lucide-react';

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
>>>>>>> main
>>>>>>> main
>>>>>>> main
const services = {
  'AI Solutions': [
    { name: 'AI-Powered Email Responder', href: '/ai-services#ai-email-responder' },
    { name: 'Predictive Analytics Platform', href: '/ai-services#predictive-analytics' },
    { name: 'Intelligent Chatbot System', href: '/ai-services#intelligent-chatbot' },
    { name: 'Computer Vision Solutions', href: '/ai-services#computer-vision' },
    { name: 'AI Content Generation', href: '/ai-services#ai-content-generation' },
<<<<<<< HEAD
    { name: 'Natural Language Processing', href: '/ai-services#nlp-engine' },
    { name: 'Fraud Detection AI', href: '/ai-services#fraud-detection' },
    { name: 'Quantum Machine Learning', href: '/ai-services#quantum-ml' }
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    { name: 'Voice AI Assistant', href: '/ai-services#voice-ai-assistant' }
=======
<<<<<<< HEAD
    { name: 'Voice AI Assistant', href: '/ai-services#voice-ai-assistant' },
    { name: 'AI Drug Discovery', href: '/ai-services#ai-drug-discovery' },
    { name: 'AI Financial Trading', href: '/ai-services#ai-financial-trading' }
=======
    { name: 'Voice AI Assistant', href: '/ai-services#voice-ai-assistant' }
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
>>>>>>> main
>>>>>>> main
>>>>>>> main
  ],
  'IT Services': [
    { name: 'Cloud Infrastructure Management', href: '/it-services#cloud-infrastructure' },
    { name: 'Cybersecurity Solutions', href: '/it-services#cybersecurity' },
    { name: 'Network Infrastructure', href: '/it-services#network-infrastructure' },
    { name: 'Database Management', href: '/it-services#database-management' },
<<<<<<< HEAD
    { name: 'System Administration', href: '/it-services#system-administration' },
    { name: 'DevOps Implementation', href: '/it-services#devops' },
    { name: 'Managed IT Services', href: '/it-services#managed-it' },
    { name: 'Cloud Migration', href: '/it-services#cloud-migration' }
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
    { name: 'System Administration', href: '/it-services#system-administration' },
    { name: 'IT Consulting', href: '/it-services#it-consulting' }
=======
    { name: 'DevOps & CI/CD', href: '/it-services#devops-cicd' },
<<<<<<< HEAD
    { name: 'Data Center Migration', href: '/it-services#data-center-migration' },
    { name: 'AI-Powered IT Management', href: '/it-services#ai-powered-it-management' },
    { name: 'Zero Trust Security', href: '/it-services#zero-trust-security' }
=======
    { name: 'Data Center Migration', href: '/it-services#data-center-migration' }
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
>>>>>>> main
>>>>>>> main
>>>>>>> main
  ],
  'Micro SaaS': [
    { name: 'Cloud Cost Guard', href: '/micro-saas#cloud-cost-guard' },
    { name: 'LLM Evaluation Suite', href: '/micro-saas#llm-evaluation' },
    { name: 'Customer Feedback App', href: '/micro-saas#customer-feedback' },
    { name: 'API Rate Limiting', href: '/micro-saas#api-rate-limiting' },
    { name: 'Content Moderation AI', href: '/micro-saas#content-moderation' },
<<<<<<< HEAD
    { name: 'Smart Inventory Optimizer', href: '/micro-saas#inventory-optimizer' },
    { name: 'Meeting Assistant', href: '/micro-saas#meeting-assistant' },
    { name: 'Lead Scoring Platform', href: '/micro-saas#lead-scoring' }
  ],
  'Solutions': [
    { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
    { name: 'Healthcare Technology', href: '/solutions/healthcare' },
    { name: 'Financial Services', href: '/solutions/finance' },
    { name: 'Educational Technology', href: '/solutions/education' },
    { name: 'Government Solutions', href: '/solutions/government' },
    { name: 'Manufacturing Solutions', href: '/solutions/manufacturing' },
    { name: 'Retail Technology', href: '/solutions/retail' }
  ],
  'Resources': [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Help Center', href: '/help' },
    { name: 'Community', href: '/community' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'White Papers', href: '/whitepapers' },
    { name: 'Webinars', href: '/webinars' }
  ],
  'Company': [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Partners', href: '/partners' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
    { name: 'Pricing', href: '/pricing' }
  ]
};

const companyLinks = [
  ExternalLink,
  Youtube,
  Facebook,
  Settings,
  Target,
  Building2,
  Users,
  FileText,
  HelpCircle
} from 'lucide-react'

const services = [
  { name: 'All Services', href: '/services' },
  { name: 'AI Services', href: '/ai-services' },
  { name: 'IT Services', href: '/it-services' },
  { name: 'Micro SaaS', href: '/micro-saas' },
  { name: 'Cloud & DevOps', href: '/services/cloud-devops' },
  { name: 'Cybersecurity', href: '/services/cybersecurity' },
  { name: 'Data Analytics', href: '/services/data-analytics' }
=======
<<<<<<< HEAD
  ]
};
>>>>>>> main
]

const solutions = [
  { name: 'All Solutions', href: '/solutions' },
  { name: 'Enterprise', href: '/solutions/enterprise' },
  { name: 'Healthcare', href: '/solutions/healthcare' },
  { name: 'Finance', href: '/solutions/finance' },
  { name: 'Retail', href: '/solutions/retail' },
  { name: 'Education', href: '/solutions/education' },
]

const industries = [
  { name: 'All Industries', href: '/industries' },
  { name: 'Healthcare', href: '/industries/healthcare' },
  { name: 'Finance', href: '/industries/finance' },
  { name: 'Education', href: '/industries/education' },
  { name: 'Government', href: '/industries/government' },
  { name: 'Manufacturing', href: '/industries/manufacturing' },
  { name: 'Retail', href: '/industries/retail' }
]
=======
<<<<<<< HEAD
    { name: 'Workflow Automation', href: '/micro-saas#workflow-automation' }
  ]
};
>>>>>>> main

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/team' },
  { name: 'Careers', href: '/careers' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact' }
];

const resources = [
  { name: 'Blog', href: '/blog' },
  { name: 'Documentation', href: '/docs' },
  { name: 'White Papers', href: '/whitepapers' },
  { name: 'Webinars', href: '/webinars' },
  { name: 'Help Center', href: '/help' },
  { name: 'FAQ', href: '/faq' }
];

const legal = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
  { name: 'GDPR', href: '/gdpr' },
  { name: 'Compliance', href: '/compliance' }
];

=======
<<<<<<< HEAD
    { name: 'Email Sequencer', href: '/micro-saas#email-sequencer' },
    { name: 'AI Cybersecurity Threat Hunter', href: '/micro-saas#ai-cybersecurity-threat-hunter' },
    { name: 'AI Smart City Platform', href: '/micro-saas#ai-smart-city-platform' }
  ]
};
const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/team' },
  { name: 'Careers', href: '/careers' },
  { name: 'News', href: '/news' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'White Papers', href: '/white-papers' }
];
const supportLinks = [
  { name: 'Help Center', href: '/help' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Documentation', href: '/docs' },
  { name: 'API Reference', href: '/api-docs' },
  { name: 'Community', href: '/community' },
  { name: 'Contact Support', href: '/contact' },
  { name: 'Status Page', href: '/status' }
];
const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
  { name: 'GDPR Compliance', href: '/compliance' }
];
const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram }
];
const contactInfo = {
<<<<<<< HEAD
=======
<<<<<<< HEAD
    { name: 'Content Moderation AI', href: '/micro-saas#content-moderation' }
>>>>>>> db49e3d85ef86349882b1133a9775950c233879f
=======
=======
    { name: 'Workflow Automation', href: '/micro-saas#workflow-automation' }
>>>>>>> main
  ]
};
>>>>>>> main

const companyInfo = {
  name: 'Zion Tech Group',
  description: 'Leading provider of AI solutions, cloud services, and technology consulting. Transforming businesses through innovative technology.',
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
>>>>>>> main
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown, DE 19709',
  hours: '24/7 Support Available'
};
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
>>>>>>> main
export default function Footer() {
=======
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
>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f
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
<<<<<<< HEAD
    <footer className="bg-gray-900 text-white">
<<<<<<< HEAD
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Leading provider of AI solutions, IT services, and micro SaaS applications. 
              We help businesses transform through innovative technology.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-3" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-3" />
                <a href="tel:+13024640950" className="hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-3" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
=======
      <div className="container mx-auto px-4 py-12">
<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Leading technology solutions provider specializing in AI, cloud, and micro SaaS services.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5" />
              <Twitter className="h-5 w-5" />
              <Linkedin className="h-5 w-5" />
              <Instagram className="h-5 w-5" />
>>>>>>> main
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><NextLink href="/micro-saas" className="text-gray-300 hover:text-white">Micro SaaS</NextLink></li>
              <li><NextLink href="/it-services" className="text-gray-300 hover:text-white">IT Services</NextLink></li>
              <li><NextLink href="/ai-services" className="text-gray-300 hover:text-white">AI Services</NextLink></li>
              <li><NextLink href="/solutions" className="text-gray-300 hover:text-white">Solutions</NextLink></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><NextLink href="/about" className="text-gray-300 hover:text-white">About</NextLink></li>
              <li><NextLink href="/careers" className="text-gray-300 hover:text-white">Careers</NextLink></li>
              <li><NextLink href="/blog" className="text-gray-300 hover:text-white">Blog</NextLink></li>
              <li><NextLink href="/contact" className="text-gray-300 hover:text-white">Contact</NextLink></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-gray-300">+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-gray-300">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-gray-300">364 E Main St STE 1008, Middletown DE 19709</span>
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Services */}
          <div>
<<<<<<< HEAD
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {Object.entries(services).map(([category, items]) => (
                <li key={category}>
                  <span className="text-gray-400 text-sm font-medium">{category}</span>
                  <ul className="mt-1 space-y-1">
                    {items.slice(0, 3).map((item, index) => (
                      <li key={index}>
                        <Link 
                          href={item.href}
                          className="text-gray-400 hover:text-white transition-colors text-sm"
                        >
                          {item.name}
=======
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="space-y-4">
              {Object.entries(services).map(([category, links]) => (
                <div key={category}>
                  <h4 className="text-sm font-medium text-gray-300 mb-2">{category}</h4>
                  <ul className="space-y-1">
                    {links.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.href}
                          className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                        >
                          {link.name}
>>>>>>> main
                        </Link>
                      </li>
                    ))}
                  </ul>
<<<<<<< HEAD
                </li>
              ))}
            </ul>
          </div>

=======
                </div>
              ))}
            </div>
          </div>
>>>>>>> main
          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
<<<<<<< HEAD
              {company.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
=======
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
>>>>>>> main
=======
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

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="flex items-center text-gray-300 hover:text-white transition-colors group"
>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f
                  >
                    <service.icon className="w-4 h-4 mr-2" />
                    {service.name}
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
=======
          {/* Support */}
=======

          {/* Solutions */}
>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f
          <div>
            <h4 className="text-lg font-semibold mb-6">Solutions</h4>
            <ul className="space-y-3">
              {solutions.map((solution) => (
                <li key={solution.name}>
                  <Link
                    href={solution.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
<<<<<<< HEAD
                    {link.name}
>>>>>>> main
=======
                    {solution.name}
>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f
                  </Link>
                </li>
              ))}
            </ul>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
        </div>

        {/* Bottom Section */}
=======
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400 text-sm">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400 text-sm">{contactInfo.email}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-1" />
                <span className="text-gray-400 text-sm">{contactInfo.address}</span>
              </div>
              <div className="text-gray-400 text-sm">
                <Zap className="w-4 h-4 inline mr-2" />
                {contactInfo.hours}
>>>>>>> main
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
=======
        {/* Social Links */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
=======

          {/* Company & Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3 mb-8">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f
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
<<<<<<< HEAD
        {/* Legal Links */}
        <div className="border-t border-gray-800 mt-4 pt-4">
          <div className="flex flex-wrap items-center justify-center space-x-6">
            {legalLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
=======
>>>>>>> main

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
<<<<<<< HEAD
          {/* Company Info */}
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading technology solutions provider specializing in AI, cloud infrastructure, and digital transformation services. 
              We help businesses innovate and scale with cutting-edge technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-sm">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-sm">{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
            </div>

            {/* Social Links */}
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              {companyInfo.description}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
>>>>>>> main
                <Phone className="w-4 h-4 text-blue-400" />
                <span>{companyInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>{companyInfo.email}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 mt-1" />
                <span className="text-xs">{companyInfo.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-xs">{companyInfo.hours}</span>
              </div>
=======
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
              </div>
            </div>
            <div className="flex items-center mt-4 md:mt-0">
              <Globe className="w-4 h-4 mr-2 text-gray-400" />
              <span className="text-gray-400 text-sm">Serving clients worldwide</span>
>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f
            </div>
          </div>

          {/* Services */}
          {Object.entries(services).map(([category, serviceList]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
<<<<<<< HEAD
=======
                {serviceList.map((service) => (
>>>>>>> main
                  <li key={service.name}>
                    <Link 
                      href={service.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

<<<<<<< HEAD
=======
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
>>>>>>> main
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
<<<<<<< HEAD
=======
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Blog
>>>>>>> main
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
<<<<<<< HEAD
=======
                <Link href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
>>>>>>> main
          </div>
        </div>

        {/* Newsletter Signup */}
>>>>>>> main
        <div className="border-t border-gray-800 mt-12 pt-8">
<<<<<<< HEAD
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
            <p className="text-gray-300 text-sm mb-4">
              Get the latest news and updates from Zion Tech Group
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                <Link href="/news" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
ursor/website-audit-and-update-with-deployment-9cae
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    href={resource.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Get the latest news and updates from Zion Tech Group
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
              />
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

            </div>
      {/* Bottom Bar */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
=======
>>>>>>> main
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
<<<<<<< HEAD
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                )
              })}
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/whitepapers" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  White Papers
                </Link>
              </li>
              <li>
                <Link href="/webinars" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Webinars
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/status" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  System Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Compliance
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
            <p className="text-gray-300 text-sm mb-4">
              Get the latest news and updates from Zion Tech Group
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
=======
            <div className="flex space-x-6">
              <a 
                href="https://linkedin.com/company/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
<<<<<<< HEAD
=======
>>>>>>> main
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Made with ❤️ for innovation
              </p>
            </div>
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
>>>>>>> main
>>>>>>> main
          </div>
>>>>>>> main
        </div>
      </div>
    </footer>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> main
