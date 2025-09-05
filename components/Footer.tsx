import * as React from 'react';
import Link from 'next/link';
<<<<<<< HEAD
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
      icon: Zap,
      links: [
        { name: "Cloud Cost Guard", href: "/micro-saas", icon: DollarSign },
        { name: "Customer Feedback App", href: "/micro-saas", icon: MessageCircle },
        { name: "API Rate Limiting", href: "/micro-saas", icon: Lock },
        { name: "Content Moderation AI", href: "/micro-saas", icon: Shield },
        { name: "Analytics Dashboard", href: "/micro-saas", icon: BarChart3 },
      ]
    },
    {
      title: "Quantum & Advanced Tech",
      icon: Atom,
      links: [
        { name: "Quantum Computing", href: "/services", icon: Atom },
        { name: "Blockchain Solutions", href: "/services", icon: Network },
        { name: "IoT Integration", href: "/services", icon: Satellite },
        { name: "Edge Computing", href: "/services", icon: Cpu },
        { name: "5G Implementation", href: "/services", icon: Network },
      ]
    }
  ];

  const quickLinks = [
    { name: "About Us", href: "/about", icon: Users },
    { name: "Our Services", href: "/services", icon: Briefcase },
    { name: "Case Studies", href: "/case-studies", icon: FileText },
    { name: "Blog & Insights", href: "/blog", icon: BookOpen },
    { name: "Careers", href: "/careers", icon: Users },
    { name: "Contact Us", href: "/contact", icon: MessageCircle },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR Compliance", href: "/gdpr" },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Empowering businesses through innovative technology solutions, AI-driven automation, and cutting-edge digital transformation.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://facebook.com/ziontechgroup" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com/ziontechgroup" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center space-x-2">
                <section.icon className="h-5 w-5 text-purple-400" />
                <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              </div>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href} 
                      className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors group"
                    >
                      <link.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                      <span className="text-sm">{link.name}</span>
=======
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

const footerSections = {
  'Services': [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Micro SaaS', href: '/micro-saas' },
    { name: 'Cloud Solutions', href: '/cloud-solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'Quantum Computing', href: '/quantum-computing' },
    { name: 'Blockchain Solutions', href: '/blockchain' },
    { name: 'IoT Solutions', href: '/iot-solutions' },
    { name: 'Edge Computing', href: '/edge-computing' },
    { name: '5G Networks', href: '/5g-networks' }
  ],
  'Solutions': [
    { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
    { name: 'Startup Solutions', href: '/solutions/startup' },
    { name: 'Digital Transformation', href: '/solutions/digital-transformation' },
    { name: 'Custom Development', href: '/solutions/custom' },
    { name: 'Industry Solutions', href: '/solutions/industry' },
    { name: 'Cloud Migration', href: '/solutions/cloud-migration' }
  ],
  'Industries': [
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Finance', href: '/industries/finance' },
    { name: 'Education', href: '/industries/education' },
    { name: 'Government', href: '/industries/government' },
    { name: 'Manufacturing', href: '/industries/manufacturing' },
    { name: 'Retail', href: '/industries/retail' },
    { name: 'Agriculture', href: '/industries/agriculture' },
    { name: 'Energy', href: '/industries/energy' }
  ],
  'Resources': [
    { name: 'Blog', href: '/blog' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Documentation', href: '/docs/api' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'White Papers', href: '/white-papers' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'Training', href: '/training' },
    { name: 'FAQ', href: '/faq' }
  ],
  'Company': [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'News', href: '/news' },
    { name: 'Partners', href: '/partners' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' }
  ],
  'Support': [
    { name: 'Help Center', href: '/help' },
    { name: 'Contact Support', href: '/contact' },
    { name: 'Status Page', href: '/status' },
    { name: 'Free Consultation', href: '/consultation' },
    { name: 'Get Quote', href: '/quote' },
    { name: 'Terms of Service', href: '/terms' }
  ]
};

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown DE 19709'
};

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg mr-3">
                <ExternalLink className="w-8 h-8 text-white" />
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

          {/* Footer Sections */}
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-lg font-semibold mb-6">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
>>>>>>> main
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

<<<<<<< HEAD
        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link, index) => (
              <Link 
                key={index}
                href={link.href} 
                className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors group"
              >
                <link.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm">{link.name}</span>
              </Link>
            ))}
=======
        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
            <div className="flex items-center mt-4 md:mt-0">
              <Clock className="w-4 h-4 mr-2 text-gray-400" />
              <span className="text-gray-400 text-sm">24/7 Support Available</span>
            </div>
>>>>>>> main
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
}
