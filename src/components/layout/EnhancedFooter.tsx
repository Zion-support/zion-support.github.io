import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Heart, 
  ShoppingCart, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  MessageCircle, 
  ArrowRight, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube, 
  Github 
} from 'lucide-react';

export function EnhancedFooter() {
  const footerSections = [
    {
      title: "AI & Machine Learning",
      links: [
        { name: "AI Customer Sentiment Analyzer", href: "/services/ai-customer-sentiment-analyzer" },
        { name: "AI SEO Content Optimizer", href: "/services/ai-seo-content-optimizer" },
        { name: "AI Customer Support Automation", href: "/services/ai-customer-support-automation" },
        { name: "AI Project Management Assistant", href: "/services/ai-project-management-assistant" },
        { name: "AI Content Generator Pro", href: "/services/ai-content-generator" },
        { name: "AI Meeting Notes Assistant", href: "/services/ai-meeting-notes-assistant" }
      ]
    },
    {
      title: "Micro SaaS Solutions",
      links: [
        { name: "AI Automated Email Follow-up", href: "/services/ai-automated-email-followup" },
        { name: "AI Affiliate Marketing Tracker", href: "/services/ai-affiliate-marketing-tracker" },
        { name: "WhatsApp CRM Inbox", href: "/services/whatsapp-crm-inbox" },
        { name: "Micro CRM", href: "/services/micro-crm" },
        { name: "Helpdesk Platform", href: "/services/helpdesk" },
        { name: "Website Analytics", href: "/services/website-analytics" }
      ]
    },
    {
      title: "IT Services & Infrastructure",
      links: [
        { name: "Cloud Cost Optimization Suite", href: "/services/cloud-cost-optimization-suite" },
        { name: "Zero Trust Security Platform", href: "/services/zero-trust-security-platform" },
        { name: "AI DevOps Automation Platform", href: "/services/ai-devops-automation-platform" },
        { name: "Cloud DevOps", href: "/services/cloud-devops" },
        { name: "IT Infrastructure", href: "/services/it-infrastructure" },
        { name: "Infrastructure Monitoring", href: "/services/infrastructure" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "News & Updates", href: "/news" },
        { name: "Testimonials", href: "/testimonials" }
      ]
    }
  ];

  const supportLinks = [
    { name: "Help Center", href: "/help" },
    { name: "Documentation", href: "/documentation" },
    { name: "API Reference", href: "/api" },
    { name: "Status Page", href: "/status" },
    { name: "Contact Support", href: "/contact" },
    { name: "Training", href: "/training" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR Compliance", href: "/gdpr" },
    { name: "Security", href: "/security" },
    { name: "Compliance", href: "/compliance" }
  ];

  const socialLinks = [
    { name: "Facebook", href: "https://facebook.com/ziontechgroup", icon: Facebook },
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitter },
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin },
    { name: "Instagram", href: "https://instagram.com/ziontechgroup", icon: Instagram },
    { name: "YouTube", href: "https://youtube.com/ziontechgroup", icon: Youtube },
    { name: "GitHub", href: "https://github.com/ziontechgroup", icon: Github }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Zion Tech Group</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of revolutionary technology solutions, AI services, and cutting-edge innovations. 
              Transforming businesses through intelligent automation and digital transformation.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                <span className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Service Categories */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-6 text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Support and Legal Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-gray-800">
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Proudly serving businesses worldwide</span>
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-red-500" />
                <span>Made with passion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}