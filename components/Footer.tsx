import React from 'react';
import Link from 'next/link';
import {
  Zap,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Github,
  ArrowRight,
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
} from 'lucide-react';

const services = {
  'AI Solutions': [
    { name: 'AI-Powered Email Responder', href: '/ai-services#ai-email-responder' },
    { name: 'Predictive Analytics Platform', href: '/ai-services#predictive-analytics' },
    { name: 'Intelligent Chatbot System', href: '/ai-services#intelligent-chatbot' },
    { name: 'Computer Vision Solutions', href: '/ai-services#computer-vision' },
    { name: 'AI Content Generation', href: '/ai-services#ai-content-generation' },
    { name: 'Voice AI Assistant', href: '/ai-services#voice-ai-assistant' }
  ],
  'IT Services': [
    { name: 'Cloud Infrastructure Management', href: '/it-services#cloud-infrastructure' },
    { name: 'Cybersecurity Solutions', href: '/it-services#cybersecurity' },
    { name: 'Network Infrastructure', href: '/it-services#network-infrastructure' },
    { name: 'Database Management', href: '/it-services#database-management' },
    { name: 'DevOps & CI/CD', href: '/it-services#devops-cicd' },
    { name: 'Data Center Migration', href: '/it-services#data-center-migration' }
  ],
  'Micro SaaS': [
    { name: 'Cloud Cost Guard', href: '/micro-saas#cloud-cost-guard' },
    { name: 'LLM Evaluation Suite', href: '/micro-saas#llm-evaluation' },
    { name: 'Customer Feedback App', href: '/micro-saas#customer-feedback' },
    { name: 'API Rate Limiting', href: '/micro-saas#api-rate-limiting' },
    { name: 'Content Moderation AI', href: '/micro-saas#content-moderation' },
    { name: 'Workflow Automation', href: '/micro-saas#workflow-automation' }
  ]
};

const solutions = [
  { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building },
  { name: 'Startup Solutions', href: '/solutions/startup', icon: TrendingUp },
  { name: 'Industry Solutions', href: '/solutions/industry', icon: BarChart3 },
  { name: 'Custom Development', href: '/solutions/custom', icon: Code },
  { name: 'Cloud Migration', href: '/solutions/cloud-migration', icon: Cloud },
  { name: 'Digital Transformation', href: '/solutions/digital-transformation', icon: Settings }
];

const industries = [
  { name: 'Healthcare', href: '/industries/healthcare', icon: Heart },
  { name: 'Finance', href: '/industries/finance', icon: Award },
  { name: 'Education', href: '/industries/education', icon: BookOpen },
  { name: 'Government', href: '/industries/government', icon: Shield },
  { name: 'Retail', href: '/industries/retail', icon: Target },
  { name: 'Manufacturing', href: '/industries/manufacturing', icon: Settings }
];

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/team' },
  { name: 'Careers', href: '/careers' },
  { name: 'Talent', href: '/talent' },
  { name: 'Partners', href: '/partners' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'News', href: '/news' }
];

const resources = [
  { name: 'Documentation', href: '/docs', icon: FileText },
  { name: 'API Reference', href: '/api-docs', icon: Code },
  { name: 'Tutorials', href: '/tutorials', icon: BookOpen },
  { name: 'Guides', href: '/guides', icon: HelpCircle },
  { name: 'FAQ', href: '/faq', icon: HelpCircle },
  { name: 'Support', href: '/support', icon: HelpCircle },
  { name: 'Webinars', href: '/webinars', icon: MessageSquare },
  { name: 'White Papers', href: '/whitepapers', icon: FileText }
];

const legal = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
  { name: 'Security', href: '/security' },
  { name: 'Compliance', href: '/compliance' },
  { name: 'Sitemap', href: '/sitemap' }
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook }
];

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown, DE 19709',
  hours: '24/7 Support Available'
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
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
            <div className="space-y-4">
              <h4 className="font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                      title={link.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white mb-3 flex items-center">
              <Settings className="w-4 h-4 mr-2" />
              Services
            </h4>
            {Object.entries(services).map(([category, serviceList]) => (
              <div key={category} className="mb-4">
                <h5 className="text-blue-400 font-medium mb-2 text-sm">{category}</h5>
                <ul className="space-y-1">
                  {serviceList.slice(0, 3).map((service, index) => (
                    <li key={index}>
                      <Link
                        href={service.href}
                        className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white mb-3 flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              Solutions
            </h4>
            <ul className="space-y-2">
              {solutions.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center"
                    >
                      <IconComponent className="w-3 h-3 mr-2" />
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white mb-3 flex items-center">
              <Building className="w-4 h-4 mr-2" />
              Industries
            </h4>
            <ul className="space-y-2">
              {industries.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center"
                    >
                      <IconComponent className="w-3 h-3 mr-2" />
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white mb-3 flex items-center">
              <FileText className="w-4 h-4 mr-2" />
              Resources
            </h4>
            <ul className="space-y-2">
              {resources.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center"
                    >
                      <IconComponent className="w-3 h-3 mr-2" />
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Company & Legal Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-gray-800">
          <div>
            <h4 className="font-semibold text-white mb-3">Company</h4>
            <ul className="space-y-2">
              {company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Legal</h4>
            <ul className="space-y-2">
              {legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved. | 
              <span className="ml-2">Delaware, United States</span>
            </div>
            
            <div className="flex flex-wrap items-center space-x-6">
              <span className="text-gray-400 text-sm">24/7 Support Available</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-green-400 text-sm">All Systems Operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}