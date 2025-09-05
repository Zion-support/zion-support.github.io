<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
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
              ))}
            </div>;
          </div>;

          {/* Quick Links & Newsletter */}
          <div className="lg:col-span-1">;
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>;
            <div className="grid grid-cols-2 gap-4 mb-8">;
              {quickLinks.map((link) => (;
                <Link;
                  key={link.name}
                  to={link.href}
                  className="text-gray-300 hover:text-white transition-colors text-sm">;
                  {link.name}
                </Link>;
              ))}
            </div>;

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

            {/* Newsletter Signup */}
<div className="bg-slate-800 rounded-lg p-6>              <h4 className="text-white font-semibold mb-3">Stay Updated</h4>"              <p className="text-gray-300 text-sm mb-4>                Get the latest AI insights and technology trends delivered to your inbox."              </p>;
              <div className="space-y-3>                <input"                  type="email""                  placeholder="Enter your email""                  className="w-full px-3 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-blue-500 text-sm                />"                <Button size="sm" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white>                  Subscribe"                </Button></div>;
            </div>;
          </div>;
        </div>;
      </div>;

      {/* Stats Section */}
      <div className="border-t border-slate-700 py-8">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">;
            <div>;
              <div className="text-3xl font-bold text-white mb-2">200+</div>;
              <div className="text-gray-400 text-sm">Projects Completed</div>;
            </div>;
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
              <Link href="/sitemap" className="text-gray-300 hover:text-blue-400 transition-colors">;
                Sitemap;
              </Link>;
            <div>;
              <div className="text-3xl font-bold text-white mb-2">50+</div>;
              <div className="text-gray-400 text-sm">Expert Team Members</div>;
            </div>;
            <div>;
              <div className="text-3xl font-bold text-white mb-2">95%</div>;
              <div className="text-gray-400 text-sm">Client Satisfaction</div>;
            </div>;
            <div>;
              <div className="text-3xl font-bold text-white mb-2">24/7</div>;
              <div className="text-gray-400 text-sm">Support Available</div>;
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
=======
import React from 'react'; import Link from 'next/link'; import { Mail,Phone,MapPin,Linkedin,Twitter,Github,Facebook } from 'lucide-react'; const Footer: React.FC = () => { const currentYear = new Date().getFullYear(); const services = [ { name: 'AI Development',href: '/services/ai-development' },{ name: 'Cloud Solutions',href: '/services/cloud-solutions' },{ name: 'Web Development',href: '/services/web-development' },{ name: 'Mobile Apps',href: '/services/mobile-development' },{ name: 'Blockchain Solutions',href: '/services/blockchain' },{ name: 'IoT Platforms',href: '/services/iot-platforms' },{ name: 'Data Analytics',href: '/services/data-analytics' },{ name: 'Cybersecurity',href: '/services/cybersecurity' } ]; const company = [ { name: 'About Us',href: '/about' },{ name: 'Our Team',href: '/about#team' },{ name: 'Careers',href: '/careers' },{ name: 'News & Updates',href: '/blog' },{ name: 'Privacy Policy',href: '/privacy' },{ name: 'Terms of Service',href: '/terms' } ]; const resources = [ { name: 'Blog',href: '/blog' },{ name: 'Case Studies',href: '/case-studies' },{ name: 'Documentation',href: '/docs' },{ name: 'Support',href: '/support' },{ name: 'FAQ',href: '/faq' } ]; const socialLinks = [ { name: 'LinkedIn',href: 'https: { name: 'Twitter',href: 'https: { name: 'GitHub',href: 'https: { name: 'Facebook',href: 'https: ]; return ( <footer className="bg-slate-900 border-t border-slate-800"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8"> <div> <div className="text-white font-bold text-xl mb-2">Zion Tech Group</div> <p className="text-gray-400 text-sm">AI,cloud,and modern software solutions.</p> </div> <div> <div className="text-white font-semibold mb-3">Company</div> <nav className="flex flex-col gap-2 text-gray-300 text-sm"> <Link href="/about" className="hover:text-white">About</Link> <Link href="/careers" className="hover:text-white">Careers</Link> <Link href="/pricing" className="hover:text-white">Pricing</Link> <Link href="/contact" className="hover:text-white">Contact</Link> </nav> </div> <div> <div className="text-white font-semibold mb-3">Resources</div> <nav className="flex flex-col gap-2 text-gray-300 text-sm"> <Link href="/blog" className="hover:text-white">Blog</Link> <Link href="/docs" className="hover:text-white">Docs</Link> <Link href="/privacy" className="hover:text-white">Privacy</Link> <Link href="/terms" className="hover:text-white">Terms</Link> <Link href="/sitemap" className="hover:text-white">Sitemap</Link> </nav> </div> </div> <div className="border-t border-slate-800 py-6"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-gray-400 text-sm"> <div>© {year} Zion Tech Group. All rights reserved.</div> <div className="flex gap-4"> <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white">kleber@ziontechgroup.com</a> <a href="tel:+13024640950" className="hover:text-white">+1 302 464 0950</a> ======= <footer className="bg-gray-900 text-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {} <div className="lg:col-span-1"> <div className="text-2xl font-bold text-blue-400 mb-4">Zion Tech Group</div> <p className="text-gray-300 mb-6"> Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI,cloud architecture,and innovative development services. </p> <div className="flex space-x-4"> {socialLinks.map((social) => ( <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label={social.name} > <social.icon className="h-5 w-5" /> </a> ))} </div> </div> {} <div> <h3 className="text-lg font-semibold mb-4">Services</h3> <ul className="space-y-2"> {services.map((service) => ( <li key={service.name}> <Link href={service.href} className="text-gray-300 hover:text-blue-400 transition-colors" > {service.name} </Link> </li> ))} </ul> </div> {} <div> <h3 className="text-lg font-semibold mb-4">Company</h3> <ul className="space-y-2"> {company.map((item) => ( <li key={item.name}> <Link href={item.href} className="text-gray-300 hover:text-blue-400 transition-colors" > {item.name} </Link> </li> ))} </ul> </div> {} <div> <h3 className="text-lg font-semibold mb-4">Resources</h3> <ul className="space-y-2 mb-6"> {resources.map((resource) => ( <li key={resource.name}> <Link href={resource.href} className="text-gray-300 hover:text-blue-400 transition-colors" > {resource.name} </Link> </li> ))} </ul> <h3 className="text-lg font-semibold mb-4">Contact</h3> <div className="space-y-2"> <div className="flex items-center text-gray-300"> <Mail className="h-4 w-4 mr-2" /> <a href="mailto:info@ziontechgroup.com" className="hover:text-blue-400"> info@ziontechgroup.com </a> </div> <div className="flex items-center text-gray-300"> <Phone className="h-4 w-4 mr-2" /> <a href="tel:+1-555-123-4567" className="hover:text-blue-400"> +1 (555) 123-4567 </a> </div> <div className="flex items-start text-gray-300"> <MapPin className="h-4 w-4 mr-2 mt-0.5" /> <span> 123 Tech Street<br /> San Francisco,CA 94105 </span> </div> </div> </div> </div> {} <div className="border-t border-gray-700 mt-8 pt-8"> <div className="flex flex-col md:flex-row justify-between items-center"> <p className="text-gray-300 text-sm"> &copy; {currentYear} Zion Tech Group. All rights reserved. </p> <div className="flex space-x-6 mt-4 md:mt-0"> <Link href="/privacy" className="text-gray-300 hover:text-blue-400 text-sm"> Privacy Policy </Link> <Link href="/terms" className="text-gray-300 hover:text-blue-400 text-sm"> Terms of Service </Link> <Link href="/sitemap" className="text-gray-300 hover:text-blue-400 text-sm"> Sitemap </Link> </div> </div> </div> </div> </footer> )} export default Footer;
>>>>>>> origin/automation-improvements
=======
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Resources', href: '/resources' },
        { name: 'Documentation', href: '/docs' },
        { name: 'Support', href: '/support' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
      ],
    },
  ];

  const socialLinks = [
    {
      name: 'Twitter',
      href: 'https://x.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Zion-Holdings/zion.app',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gray-900/95 backdrop-blur-xl border-t border-gray-600/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white font-bold text-2xl">Z</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10" />
              </div>
              <span className="text-2xl font-bold gradient-text-blue group-hover:from-blue-500 group-hover:to-emerald-500 transition-all duration-300">
                Zion Tech
              </span>
            </Link>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              The world&apos;s most advanced autonomous innovation hub delivering cutting-edge technology solutions, 
              intelligent automation systems, and the future of cloud-native AI infrastructure.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-11 h-11 bg-gray-700 hover:bg-blue-500 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-6 text-lg">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-blue-500 transition-all duration-200 hover:translate-x-1 inline-block group"
                    >
                      <span className="relative">
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-200 group-hover:w-full" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex items-center space-x-8 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-500 text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-500 text-sm transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
>>>>>>> origin/automation/changelog
