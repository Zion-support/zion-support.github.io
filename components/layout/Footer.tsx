<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import Link from 'next/link';

import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Code,
  Smartphone,
  Cloud,
  Database,
  Shield,
  Zap
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Mobile Apps', href: '/services/mobile-apps' },
    { name: 'AI Solutions', href: '/services/ai-solutions' },
    { name: 'Cloud Services', href: '/services/cloud-services' },
  ];

  const solutions = [
    { name: 'E-commerce', href: '/solutions/ecommerce' },
    { name: 'CRM Systems', href: '/solutions/crm' },
    { name: 'Data Analytics', href: '/solutions/analytics' },
    { name: 'Automation', href: '/solutions/automation' },

  ];

  const company = [
    { name: 'About Us', href: '/about' },

    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Instagram', href: '#', icon: Instagram },

  ];

  return (
    <footer className="bg-gray-900 text-white">

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Transforming businesses through innovative technology solutions. 
              We deliver cutting-edge software, AI, and cloud services.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:+13024640950" className="text-gray-400 hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-400 hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
=======
import { Link } from 'react-router-dom';
import { ;
  Brain,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Youtube,
  Instagram,
  ArrowRight,
  Heart,
  Globe,
  Shield,
  Users,
  Award,
  Star,
  Zap,
  Cloud,
  Database,
  Network,
  Target,
  CheckCircle,
  ExternalLink;
} from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
const Footer: React.FC = () => {;
  const currentYear = new Date().getFullYear();
  const serviceCategories = [;
    {;
      title: "AI & Automation",
      icon: Brain,
      color: "text-blue-400",
      services: [;
        { name: 'AI Content Generator Pro', href: '/services/ai-content-generator' },
        { name: 'Social Media Scheduler Pro', href: '/services/social-media-scheduler' },
        { name: 'Email Marketing Automation', href: '/services/email-marketing-automation' },
        { name: 'Smart Invoice Management', href: '/services/invoice-management' },
        { name: 'Time Tracking & Productivity', href: '/services/time-tracking' },
        { name: 'CRM & Sales Pipeline', href: '/services/crm-sales-pipeline' },
        { name: 'Smart Appointment Booking', href: '/services/appointment-booking' },
        { name: 'Inventory & POS System', href: '/services/inventory-pos' },
        { name: 'Document Management', href: '/services/document-management' },
        { name: 'Survey & Feedback Platform', href: '/services/survey-feedback' },
        { name: 'Quantum Computing Simulator', href: '/services/quantum-computing-simulator' },
        { name: 'Blockchain NFT Marketplace', href: '/services/blockchain-nft-platform' },
        { name: 'IoT Device Management', href: '/services/iot-device-management' },
        { name: 'AR/VR Experience Builder', href: '/services/ar-vr-experience-builder' },
        { name: 'AI Code Assistant Pro', href: '/services/ai-code-assistant' },
        { name: 'Metaverse Platform Builder', href: '/services/metaverse-platform-builder' },
        { name: 'AI Voice Cloning Platform', href: '/services/ai-voice-cloning-platform' },
        { name: 'Smart Contract Auditor', href: '/services/smart-contract-auditor' },
        { name: 'AI Content Moderation', href: '/services/ai-content-moderation' },
        { name: 'Digital Twin Platform', href: '/services/digital-twin-platform' },
        { name: "AI Autonomous Cybersecurity Platform", href: "/services/ai-autonomous-cybersecurity-platform" },
        { name: "AI Customer Experience Platform", href: "/services/ai-customer-experience-platform" },
        { name: "AI Healthcare Diagnostics", href: "/services/ai-healthcare-diagnostics" },
        { name: "AI Enterprise Orchestrator", href: "/services/ai-enterprise-orchestrator" }
      ];
},
    {;
      title: "Cloud & Infrastructure",
      icon: Cloud,
      color: "text-green-400",
      services: [;
        { name: 'Network Security Audit', href: '/services/network-security-audit' },
        { name: 'Disaster Recovery Planning', href: '/services/disaster-recovery-planning' },
        { name: 'Performance Monitoring', href: '/services/performance-monitoring' },
        { name: 'Identity & Access Management', href: '/services/iam' },
        { name: 'Backup & Recovery Solutions', href: '/services/backup-recovery' },
        { name: 'DevOps & CI/CD Pipeline', href: '/services/devops-cicd' },
        { name: 'Database Optimization', href: '/services/database-optimization' },
        { name: "Cloud Migration", href: "/services/cloud-migration" },
        { name: "Micro SaaS Solutions", href: "/micro-saas" },
        { name: "IT Services", href: "/it-services" },
        { name: "Infrastructure Management", href: "/services/infrastructure" }
      ];
},
    {;
      title: "Data & Analytics",
      icon: Database,
      color: "text-purple-400",
      services: [;
        { name: "Data Analytics", href: "/services/data-analytics" },
        { name: "Business Intelligence", href: "/services/business-intelligence" },
        { name: "Predictive Analytics", href: "/services/predictive-analytics" },
        { name: "AI Healthcare Analytics", href: "/services/ai-healthcare-analytics-platform" }
      ];
}
  ];
  const quickLinks = [;
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "White Papers", href: "/white-papers" },
    { name: "Webinars", href: "/webinars" },
    { name: "Pricing", href: "/pricing" }
  ];
  const legalLinks = [;
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Sitemap", href: "/sitemap" }
  ];
  const socialLinks = [;
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitter },
    { name: "GitHub", href: "https://github.com/ziontechgroup", icon: Github },
    { name: "YouTube", href: "https://youtube.com/ziontechgroup", icon: Youtube },
    { name: "Instagram", href: "https://instagram.com/ziontechgroup", icon: Instagram }
  ];
  const contactInfo = {;
    email: "contact@ziontechgroup.com",
    phone: "+1 (555) 123-4567",
    address: "123 Technology Drive, San Francisco, CA 94105";
};
  return (;
    <footer className="bg-slate-900 border-t border-slate-700">;
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">;
          {/* Company Info */}
          <div className="lg:col-span-1">;
            <Link to="/" className="flex items-center space-x-2 mb-6">;
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">;
                <Brain className="w-6 h-6 text-white" />;
              </div>;
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>;
            </Link>;
            <p className="text-gray-300 mb-6 leading-relaxed">;
              Leading provider of AI-powered solutions and technology services. ;
              We help businesses transform and innovate with cutting-edge artificial intelligence.;
            </p>;

            <div className="space-y-3 mb-6">;
              <div className="flex items-center text-gray-300">;
                <Mail className="w-4 h-4 mr-3 text-blue-400" />;
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">;
                  {contactInfo.email}
                </a>;
              </div>;
              <div className="flex items-center text-gray-300">;
                <Phone className="w-4 h-4 mr-3 text-blue-400" />;
                <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">;
                  {contactInfo.phone}
                </a>;
              </div>;
              <div className="flex items-center text-gray-300">;
                <MapPin className="w-4 h-4 mr-3 text-blue-400" />;
                <span>{contactInfo.address}</span>;
              </div>;
            </div>;

            {/* Social Links */}
            <div className="flex space-x-4">;
              {socialLinks.map((social) => (;
                <a;
                  key={social.name}
                  href={social.href}
                  target="_blank";
                  rel="noopener noreferrer";
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-400 hover:text-white transition-colors";
                  aria-label={social.name}
                >;
                  <social.icon className="w-5 h-5" />;
                </a>;
              ))}
            </div>;

            {/* Social Links */}
            <div className="flex space-x-4">;
              {socialLinks.map((social) => (;
                <a;
                  key={social.name}
                  href={social.href}
                  target="_blank";
                  rel="noopener noreferrer";
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-400 hover:text-white transition-colors";
                  aria-label={social.name}
                >;
                  <social.icon className="w-5 h-5" />;
                </a>;
              ))}
            </div>;

            {/* Social Links */}
            <div className="flex space-x-4">;
              {socialLinks.map((social) => (;
                <a;
                  key={social.name}
                  href={social.href}
                  target="_blank";
                  rel="noopener noreferrer";
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-400 hover:text-white transition-colors";
                  aria-label={social.name}
                >;
                  <social.icon className="w-5 h-5" />;
                </a>;
              ))}
            </div>;

            {/* Social Links */}
            <div className="flex space-x-4">;
              {socialLinks.map((social) => (;
                <a;
                  key={social.name}
                  href={social.href}
                  target="_blank";
                  rel="noopener noreferrer";
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-400 hover:text-white transition-colors";
                  aria-label={social.name}
                >;
                  <social.icon className="w-5 h-5" />;
                </a>;
              ))}
            </div>;

            {/* Social Links */}
            <div className="flex space-x-4">;
              {socialLinks.map((social) => (;
                <a;
                  key={social.name}
                  href={social.href}
                  target="_blank";
                  rel="noopener noreferrer";
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-400 hover:text-white transition-colors";
                  aria-label={social.name}
                >;
                  <social.icon className="w-5 h-5" />;
                </a>;
              ))}
import React from 'react;
import { Link } from 'react-router-dom;
import { ;'  Brain, Mail,
  Phone, MapPin,
  Linkedin, Twitter,
  Github, Youtube,
  Instagram, ArrowRight,
  Heart, Globe,
  Shield, Users,
  Award, Star,
  Zap, Cloud,
  Database, Network,
  Target, CheckCircle,
  ExternalLink;
} from 'lucide-react;
import { Button } from '../ui/Button;
import { Badge } from '../ui/Badge;
const Footer: React.FC = () => {const currentYear = new Date().getFullYear();
  ];
  const quickLinks = [];
  const legalLinks = [];
  const socialLinks = [];
  const contactInfo = {}

  const quickLinks = [;
    { name: "About Us", href: "/about" },"    { name: "Our Team", href: "/team" },"    { name: "Careers", href: "/careers" },"    { name: "Case Studies", href: "/case-studies" },"    { name: "Blog", href: "/blog" },"    { name: "White Papers", href: "/white-papers" },"    { name: "Webinars", href: "/webinars" },"    { name: "Pricing", href: "/pricing" }"  ];";
  const legalLinks = [;
    { name: "Privacy Policy", href: "/privacy" },"    { name: "Terms of Service", href: "/terms" },"    { name: "Cookie Policy", href: "/cookies" },"    { name: "Sitemap", href: "/sitemap" }"  ];";
  const socialLinks = [;
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin }, { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitter },"    { name: "GitHub", href: "https://github.com/ziontechgroup", icon: Github }, { name: "YouTube", href: "https://youtube.com/ziontechgroup", icon: Youtube },"    { name: "Instagram", href: "https://instagram.com/ziontechgroup", icon: Instagram }"  ];";
  const contactInfo = {;
    email: "contact@ziontechgroup.com", phone: "+1 (555) 123-4567", address: "123 Technology Drive, San Francisco, CA 94105""  };"return (;
    <footer className="bg-slate-900 border-t border-slate-700>      {/* Main Footer Content */}"      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16>        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">"          {/* Company Info */}"          <div className="lg:col-span-1>            <Link to="/" className="flex items-center space-x-2 mb-6>              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">"                <Brain className="w-6 h-6 text-white />              </div>"              <span className="text-2xl font-bold text-white>Zion Tech Group</span>            </Link>"            ;
            <p className="text-gray-300 mb-6 leading-relaxed>              Leading provider of AI-powered solutions and technology services. "              We help businesses transform and innovate with cutting-edge artificial intelligence.;
            </p>;
";
            <div className="space-y-3 mb-6">";
              <div className="flex items-center text-gray-300">";
                <Mail className="w-4 h-4 mr-3 text-blue-400"  />",
                <a href="{"mailto:${contactInfo.email}"}" className="hover: text-white transition-colors">,
                  {contactInfo.email}

                </a>;
              </div>";
              <div className="flex items-center text-gray-300">";
                <Phone className="w-4 h-4 mr-3 text-blue-400"  />";
                <a href="{"tel:${contactInfo.phone}"}" className="hover: text-white transition-colors">,
                  {contactInfo.phone}

                </a>;
              </div>";
              <div className="flex items-center text-gray-300">";
                <MapPin className="w-4 h-4 mr-3 text-blue-400"  />;
                <span>{contactInfo.address}</span>;
              </div>;
            {/* comment */}";
            <div className="flex space-x-4">;
              {socialLinks.map((social) => (";
                <a key="{social.name}
                  href="{social.href}
                  target="_blank;
                  rel="noopener noreferrer;
                  className="p-2 rounded-lg bg-slate-800 hover: bg-slate-700 text-gray-400 hover:text-white transition-colors"">;
                  aria-label="{social.name}">";
                  <social.icon className="w-5 h-5" />;
                </a>;
              ))}

            <div className="space-y-3 mb-6>              <div className="flex items-center text-gray-300">"                <Mail className="w-4 h-4 mr-3 text-blue-400 />                <a href={`mailto:${contactInfo.email}} className="hover:text-white transition-colors">"                  {contactInfo.email}"                </a>              </div>;
              <div className="flex items-center text-gray-300>                <Phone className="w-4 h-4 mr-3 text-blue-400" />"                <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors>                  {contactInfo.phone}"                </a>              </div>;
              <div className="flex items-center text-gray-300>                <MapPin className="w-4 h-4 mr-3 text-blue-400" />"                <span>{contactInfo.address}</span>"              </div>;
            </div>;
          {/* comment */}";
          <div className="lg: col-span-2">";
            <h3 className="text-xl font-bold text-white mb-6">Our Services</h3>";
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
              {serviceCategories.map((category) => (",
                <div key="{category.title}">";
                  <div className="flex items-center mb-4">";
                    <category.icon className="{"w-5" h-5 mr-2 ${category.color}"} />";
                    <h4 className="text-white font-semibold">{category.title}</h4>;
                  </div>";
                  <ul className="space-y-2">;
                    {category.services.map((service) => (";
                      <li key="{service.name}">";
                        <Link to="{service.href}
                          className="text-gray-300 hover: text-white transition-colors text-sm flex items-center group">";
                          <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"  />,
                          {service.name}

            {/* Social Links */}
            <div className="flex space-x-4>              {socialLinks.map((social) => ("                <a;
                  key={social.name}
                  href={social.href}
                  target="_blank""                  rel="noopener noreferrer""                  className="p-2 rounded-lg bg-slate-800 hover: bg-slate-700 text-gray-400 hover:text-white transition-colors                  aria-label={social.name}">;
                  <social.icon className="w-5 h-5 />                </a>"              ))}</div>;
          </div>;

          {/* Services */}
          {serviceCategories.map((category) => (;
            <div key={category.title}>;
              <h3 className="text-lg font-semibold mb-4 text-blue-400">{category.title}</h3>;
              <ul className="space-y-2">;
                {category.services.map((service) => (;
                  <li key={service.name}>;
                    <Link;
                      href={service.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm">;
                      {service.name}
                    </Link>;
                  </li>;
                ))}
              </ul>;
            </div>;
          ))}
        </div>;

        {/* Quick Links */}
        <div className="border-t border-gray-700 mt-8 pt-8">;
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">;
            <div>;
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Company</h4>;
              <ul className="space-y-2">;
                <li><Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</Link></li>;
                <li><Link href="/careers" className="text-gray-300 hover:text-blue-400 transition-colors">Careers</Link></li>;
                <li><Link href="/partners" className="text-gray-300 hover:text-blue-400 transition-colors">Partners</Link></li>;
                <li><Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</Link></li>;
              </ul>;
            </div>;
            <div>;
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Resources</h4>;
              <ul className="space-y-2">;
                <li><Link href="/blog" className="text-gray-300 hover:text-blue-400 transition-colors">Blog</Link></li>;
                <li><Link href="/case-studies" className="text-gray-300 hover:text-blue-400 transition-colors">Case Studies</Link></li>;
                <li><Link href="/whitepapers" className="text-gray-300 hover:text-blue-400 transition-colors">Whitepapers</Link></li>;
                <li><Link href="/webinars" className="text-gray-300 hover:text-blue-400 transition-colors">Webinars</Link></li>;
              </ul>;
            </div>;
            <div>;
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Support</h4>;
              <ul className="space-y-2">;
                <li><Link href="/help" className="text-gray-300 hover:text-blue-400 transition-colors">Help Center</Link></li>;
                <li><Link href="/faq" className="text-gray-300 hover:text-blue-400 transition-colors">FAQ</Link></li>;
                <li><Link href="/documentation" className="text-gray-300 hover:text-blue-400 transition-colors">Documentation</Link></li>;
                <li><Link href="/api" className="text-gray-300 hover:text-blue-400 transition-colors">API Reference</Link></li>;
                <li><Link href="/status" className="text-gray-300 hover:text-blue-400 transition-colors">System Status</Link></li>;
              </ul>;
            </div>;
            <div>;
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Legal</h4>;
              <ul className="space-y-2 mb-6">;
                <li><Link href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors">Privacy Policy</Link></li>;
                <li><Link href="/terms" className="text-gray-300 hover:text-blue-400 transition-colors">Terms of Service</Link></li>;
                <li><Link href="/cookies" className="text-gray-300 hover:text-blue-400 transition-colors">Cookie Policy</Link></li>;
                <li><Link href="/data-protection" className="text-gray-300 hover:text-blue-400 transition-colors">Data Protection</Link></li>;
                <li><Link href="/accessibility" className="text-gray-300 hover:text-blue-400 transition-colors">Accessibility</Link></li>;
              </ul>;
              </ul>;
            </div>;
            <div>;
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Connect</h4>;
              <div className="flex space-x-4">;
                <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-300 hover:text-blue-400 transition-colors">;
                  <Linkedin className="w-6 h-6" />;
                </a>;
                <a href="https://twitter.com/ziontechgroup" className="text-gray-300 hover:text-blue-400 transition-colors">;
                  <Twitter className="w-6 h-6" />;
                </a>;
                <a href="https://facebook.com/ziontechgroup" className="text-gray-300 hover:text-blue-400 transition-colors">;
                  <Facebook className="w-6 h-6" />;
                </a>;
                <a href="https://instagram.com/ziontechgroup" className="text-gray-300 hover:text-blue-400 transition-colors">;
                  <Instagram className="w-6 h-6" />;
                </a>;
              </div>;
              {/* Newsletter Signup */}
              <div className="mt-6">;
                <h5 className="text-sm font-semibold mb-2 text-blue-400">Newsletter</h5>;
                <p className="text-gray-300 text-sm mb-3">Stay updated with our latest insights</p>;
                <div className="flex">;
                  <input;
                    type="email";
                    placeholder="Enter your email";
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400";
                  />;
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors">;
                    Subscribe;
                  </button>;
                </div>;
>>>>>>> origin/automation-fixes
              ))}
            </ul>
          </div>

              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

<<<<<<< HEAD


          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}

                    className="text-gray-400 hover:text-white transition-colors"

                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {solutions.map((solution) => (
                <li key={solution.name}>
                  <Link
                    href={solution.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
=======
            {/* Newsletter Signup */}
            <div className="bg-slate-800 rounded-lg p-6">;
              <h4 className="text-white font-semibold mb-3">Stay Updated</h4>;
              <p className="text-gray-300 text-sm mb-4">;
                Get the latest AI insights and technology trends delivered to your inbox.;
              </p>;
              <div className="space-y-3">;
                <input;
                  type="email";
                  placeholder="Enter your email";
                  className="w-full px-3 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm";
                />;
                <Button size="sm" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">;
                  Subscribe;
                </Button>;
              </div>;
<div className="lg: col-span-2>            <h3 className="text-xl font-bold text-white mb-6">Our Services</h3>"            <div className="grid grid-cols-1 md:grid-cols-3 gap-8>              {serviceCategories.map((category) => ("                <div key={category.title}>;
                  <div className="flex items-center mb-4>                    <category.icon className={w-5 h-5 mr-2 ${category.color}`} />"                    <h4 className="text-white font-semibold>{category.title}</h4>                  </div>"                  <ul className="space-y-2>                    {category.services.map((service) => ("                      <li key={service.name}>`                        <Link;
                          to={service.href}
                          className="text-gray-300 hover: text-white transition-colors text-sm flex items-center group                        >"                          <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity />                          {service.name}"                        </Link></li>;
                        </Link>;
                      </li>;
                    ))}

                  </ul>;
                </div>;
              ))}

          {/* Quick Links & Newsletter */}
<div className="lg: col-span-1>            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>"            <div className="grid grid-cols-2 gap-4 mb-8>              {quickLinks.map((link) => ("                <Link;
                  key={link.name}
                  to={link.href}
                  className="text-gray-300 hover: text-white transition-colors text-sm                >"                  {link.name}</Link>;
              ))}

            </div>;
>>>>>>> origin/automation-fixes

          {/* Company & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 mb-6">

              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}

<<<<<<< HEAD
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"

                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy

              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );

};

export default Footer;
=======
      {/* Bottom Footer */}
      <div className="border-t border-slate-700 py-6">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="flex flex-col md:flex-row items-center justify-between">;
            <div className="flex items-center space-x-6 mb-4 md:mb-0">;
              <p className="text-gray-400 text-sm">;
                © {currentYear} Zion Tech Group. All rights reserved.;
              </p>;
              <div className="flex items-center space-x-4">;
                {legalLinks.map((link) => (;
                  <Link;
                    key={link.name}
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm">;
                    {link.name}
                  </Link>;
                ))}
              </div>;
            </div>;
            <div className="flex items-center space-x-2 text-gray-400 text-sm">;
              <span>Made with</span>;
              <Heart className="w-4 h-4 text-red-500" />;
              <span>by Zion Tech Group</span>;
            </div>;
          </div>;
        </div>;
      </div>;

      {/* Bottom Footer */}
      <div className="border-t border-slate-700 py-6">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="flex flex-col md:flex-row items-center justify-between">;
            <div className="flex items-center space-x-6 mb-4 md:mb-0">;
              <p className="text-gray-400 text-sm">;
                © {currentYear} Zion Tech Group. All rights reserved.;
              </p>;
              <div className="flex items-center space-x-4">;
                {legalLinks.map((link) => (;
                  <Link;
                    key={link.name}
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm">;
                    {link.name}
                  </Link>;
                ))}
              </div>;
            </div>;
            <div className="flex items-center space-x-2 text-gray-400 text-sm">;
              <span>Made with</span>;
              <Heart className="w-4 h-4 text-red-500" />;
              <span>by Zion Tech Group</span>;
            </div>;
          </div>;
        </div>;
      </div>;

      {/* Bottom Footer */}
      <div className="border-t border-slate-700 py-6">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="flex flex-col md:flex-row items-center justify-between">;
            <div className="flex items-center space-x-6 mb-4 md:mb-0">;
              <p className="text-gray-400 text-sm">;
                © {currentYear} Zion Tech Group. All rights reserved.;
              </p>;
              <div className="flex items-center space-x-4">;
                {legalLinks.map((link) => (;
                  <Link;
                    key={link.name}
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm">;
                    {link.name}
                  </Link>;
                ))}
              </div>;
            </div>;
            <div className="flex items-center space-x-2 text-gray-400 text-sm">;
              <span>Made with</span>;
              <Heart className="w-4 h-4 text-red-500" />;
              <span>by Zion Tech Group</span>;
            <div className="flex space-x-6 text-sm">;
              <Link href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors">;
                Privacy Policy;
              </Link>;
              <Link href="/terms" className="text-gray-300 hover:text-blue-400 transition-colors">;
                Terms of Service;
              </Link>;
              <Link href="/cookies" className="text-gray-300 hover:text-blue-400 transition-colors">;
                Cookie Policy;
              </Link>;
              <Link href="/help" className="text-gray-300 hover:text-blue-400 transition-colors">;
                Support;
              </Link>;
            </div>;
          </div>;
<div className="border-t border-slate-700 py-8>        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center>            <div>"              <div className="text-3xl font-bold text-white mb-2>200+</div>              <div className="text-gray-400 text-sm">Projects Completed</div>"            </div>"            <div>;
              <div className="text-3xl font-bold text-white mb-2>50+</div>              <div className="text-gray-400 text-sm">Expert Team Members</div>"            </div>"            <div>;
              <div className="text-3xl font-bold text-white mb-2>95%</div>              <div className="text-gray-400 text-sm">Client Satisfaction</div>"            </div>"            <div>;
              <div className="text-3xl font-bold text-white mb-2>24/7</div>              <div className="text-gray-400 text-sm">Support Available</div>"            </div>"          </div></div>;
      </div>;

      {/* Bottom Footer */}
<div className="border-t border-slate-700 py-6>        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"          <div className="flex flex-col md:flex-row items-center justify-between>            <div className="flex items-center space-x-6 mb-4 md:mb-0">"              <p className="text-gray-400 text-sm>                © {currentYear} Zion Tech Group. All rights reserved."              </p>;
              <div className="flex items-center space-x-4>                {legalLinks.map((link) => ("                  <Link;
                    key={link.name}
                    to={link.href}
                    className="text-gray-400 hover: text-white transition-colors text-sm                  >"                    {link.name}</Link>;
                ))}
            {/* comment */}";
            <div className="bg-slate-800 rounded-lg p-6">";
              <h4 className="text-white font-semibold mb-3">Stay Updated</h4>";
              <p className="text-gray-300 text-sm mb-4">;
                Get the latest AI insights and technology trends delivered to your inbox.;
              </p>";
              <div className="space-y-3">";
                <input type="email;
                  placeholder="Enter your email;
                  className="w-full px-3 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-blue-500 text-sm"  />";
                <Button size="sm" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">;
                  Subscribe,
                </Button>;
              </div>;
      {/* comment */}";
      <div className="border-t border-slate-700 py-8">";
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">";
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">;
            <div>";
              <div className="text-3xl font-bold text-white mb-2">200+</div>";
              <div className="text-gray-400 text-sm">Projects Completed</div>;
            </div>;
<div className="flex items-center space-x-2 text-gray-400 text-sm>              <span>Made with</span>"              <Heart className="w-4 h-4 text-red-500 />              <span>by Zion Tech Group</span>"            </div></div>;
        </div>;
      </div>;
    </footer>;
  );
};
                  </Link>;
                ))}

              </div>;
            ";
            <div className="flex items-center space-x-2 text-gray-400 text-sm">;
              <span>Made with</span>";
              <Heart className="w-4 h-4 text-red-500"  />;
              <span>by Zion Tech Group</span>;
            </div>;
    </footer>;
  );
}
""export default Footer
>>>>>>> origin/automation-fixes
=======
import React from 'react'; import Link from 'next/link'; import { Mail,Phone,MapPin,Linkedin,Twitter,Github,Facebook } from 'lucide-react'; const Footer: React.FC = () => { const currentYear = new Date().getFullYear(); const services = [ { name: 'AI Development',href: '/services/ai-development' },{ name: 'Cloud Solutions',href: '/services/cloud-solutions' },{ name: 'Web Development',href: '/services/web-development' },{ name: 'Mobile Apps',href: '/services/mobile-development' },{ name: 'Blockchain Solutions',href: '/services/blockchain' },{ name: 'IoT Platforms',href: '/services/iot-platforms' },{ name: 'Data Analytics',href: '/services/data-analytics' },{ name: 'Cybersecurity',href: '/services/cybersecurity' } ]; const company = [ { name: 'About Us',href: '/about' },{ name: 'Our Team',href: '/about#team' },{ name: 'Careers',href: '/careers' },{ name: 'News & Updates',href: '/blog' },{ name: 'Privacy Policy',href: '/privacy' },{ name: 'Terms of Service',href: '/terms' } ]; const resources = [ { name: 'Blog',href: '/blog' },{ name: 'Case Studies',href: '/case-studies' },{ name: 'Documentation',href: '/docs' },{ name: 'Support',href: '/support' },{ name: 'FAQ',href: '/faq' } ]; const socialLinks = [ { name: 'LinkedIn',href: 'https: { name: 'Twitter',href: 'https: { name: 'GitHub',href: 'https: { name: 'Facebook',href: 'https: ]; return ( <footer className="bg-slate-900 border-t border-slate-800"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8"> <div> <div className="text-white font-bold text-xl mb-2">Zion Tech Group</div> <p className="text-gray-400 text-sm">AI,cloud,and modern software solutions.</p> </div> <div> <div className="text-white font-semibold mb-3">Company</div> <nav className="flex flex-col gap-2 text-gray-300 text-sm"> <Link href="/about" className="hover:text-white">About</Link> <Link href="/careers" className="hover:text-white">Careers</Link> <Link href="/pricing" className="hover:text-white">Pricing</Link> <Link href="/contact" className="hover:text-white">Contact</Link> </nav> </div> <div> <div className="text-white font-semibold mb-3">Resources</div> <nav className="flex flex-col gap-2 text-gray-300 text-sm"> <Link href="/blog" className="hover:text-white">Blog</Link> <Link href="/docs" className="hover:text-white">Docs</Link> <Link href="/privacy" className="hover:text-white">Privacy</Link> <Link href="/terms" className="hover:text-white">Terms</Link> <Link href="/sitemap" className="hover:text-white">Sitemap</Link> </nav> </div> </div> <div className="border-t border-slate-800 py-6"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-gray-400 text-sm"> <div>© {year} Zion Tech Group. All rights reserved.</div> <div className="flex gap-4"> <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white">kleber@ziontechgroup.com</a> <a href="tel:+13024640950" className="hover:text-white">+1 302 464 0950</a> ======= <footer className="bg-gray-900 text-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {} <div className="lg:col-span-1"> <div className="text-2xl font-bold text-blue-400 mb-4">Zion Tech Group</div> <p className="text-gray-300 mb-6"> Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI,cloud architecture,and innovative development services. </p> <div className="flex space-x-4"> {socialLinks.map((social) => ( <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label={social.name} > <social.icon className="h-5 w-5" /> </a> ))} </div> </div> {} <div> <h3 className="text-lg font-semibold mb-4">Services</h3> <ul className="space-y-2"> {services.map((service) => ( <li key={service.name}> <Link href={service.href} className="text-gray-300 hover:text-blue-400 transition-colors" > {service.name} </Link> </li> ))} </ul> </div> {} <div> <h3 className="text-lg font-semibold mb-4">Company</h3> <ul className="space-y-2"> {company.map((item) => ( <li key={item.name}> <Link href={item.href} className="text-gray-300 hover:text-blue-400 transition-colors" > {item.name} </Link> </li> ))} </ul> </div> {} <div> <h3 className="text-lg font-semibold mb-4">Resources</h3> <ul className="space-y-2 mb-6"> {resources.map((resource) => ( <li key={resource.name}> <Link href={resource.href} className="text-gray-300 hover:text-blue-400 transition-colors" > {resource.name} </Link> </li> ))} </ul> <h3 className="text-lg font-semibold mb-4">Contact</h3> <div className="space-y-2"> <div className="flex items-center text-gray-300"> <Mail className="h-4 w-4 mr-2" /> <a href="mailto:info@ziontechgroup.com" className="hover:text-blue-400"> info@ziontechgroup.com </a> </div> <div className="flex items-center text-gray-300"> <Phone className="h-4 w-4 mr-2" /> <a href="tel:+1-555-123-4567" className="hover:text-blue-400"> +1 (555) 123-4567 </a> </div> <div className="flex items-start text-gray-300"> <MapPin className="h-4 w-4 mr-2 mt-0.5" /> <span> 123 Tech Street<br /> San Francisco,CA 94105 </span> </div> </div> </div> </div> {} <div className="border-t border-gray-700 mt-8 pt-8"> <div className="flex flex-col md:flex-row justify-between items-center"> <p className="text-gray-300 text-sm"> &copy; {currentYear} Zion Tech Group. All rights reserved. </p> <div className="flex space-x-6 mt-4 md:mt-0"> <Link href="/privacy" className="text-gray-300 hover:text-blue-400 text-sm"> Privacy Policy </Link> <Link href="/terms" className="text-gray-300 hover:text-blue-400 text-sm"> Terms of Service </Link> <Link href="/sitemap" className="text-gray-300 hover:text-blue-400 text-sm"> Sitemap </Link> </div> </div> </div> </div> </footer> )} export default Footer;
>>>>>>> origin/automation-improvements
