<<<<<<< HEAD
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
=======
import React from "react"; Zap, Brain, Shield, Cloud, Rocket, Heart, ShoppingCart, Phone, Mail, MapPin, Globe, MessageCircle, ArrowRight, Facebook, Twitter, Linkedin, Instagram, Youtube, Github} from "lucide-react"; ; export function EnhancedFooter() { const footerSections = []";" },";" {;";"";" title: "Cybersecurity & Compliance"""," links: [",""," { name: "AI Cybersecurity Platform", href: "/services/ai-cybersecurity-platform" },";"";" { name: "AI Cybersecurity Threat Intelligence", href: "/services/ai-cybersecurity-threat-intelligence-platform" },";"";" { name: "Zero Trust Network Access", href: "/services/zero-trust-network-access" },";"";" { name: "SOC2 Compliance Automation", href: "/services/soc2-compliance-automation" },";"";" { name: "Security Headers & CSP", href: "/services/security-headers-csp" },";"";" { name: "Smart Contract Risk Scanner", href: "/services/smart-contract-risk-scanner" }," ]";" },";" {;";"";" title: "Cloud & Infrastructure"""," links: [",""," { name: "Cloud DevOps", href: "/services/cloud-devops" },";"";" { name: "IT Infrastructure", href: "/services/it-infrastructure" },";"";" { name: "FinOps Advisor", href: "/services/finops-advisor" },";"";" { name: "Cloud Cost Optimizer", href: "/services/cloud-cost-optimizer" },";"";" { name: "Infrastructure Monitoring", href: "/services/infrastructure" },";"";" { name: "Uptime SLA Monitor", href: "/services/uptime-sla-monitor" }," ]";" },";" {;";"";" title: "Digital Transformation"""," links: [",""," { name: "Digital Twin", href: "/services/digital-twin" },";"";" { name: "Digital Transformation", href: "/services/digital-transformation" },";"";" { name: "IT Consulting", href: "/it-consulting" },";"";" { name: "Change Management", href: "/services/change-management" },";"";" { name: "Strategy Development", href: "/services/strategy-development" },";"";" { name: "Implementation Planning", href: "/services/implementation-planning" }," ]";" },";" {;";"";" title: "Emerging Technologies"""," links: [",""," { name: "Quantum Computing", href: "/services/quantum-computing" },";"";" { name: "IoT Edge Computing", href: "/services/iot-edge-computing" },";"";" { name: "AI Quantum Hybrid Platform", href: "/services/ai-quantum-hybrid-platform" },";"";" { name: "Space Technology", href: "/space-tech" },";"";" { name: "Blockchain Solutions", href: "/services/blockchain-enterprise-solutions" },";"";" { name: "Edge Computing Platform", href: "/services/edge-computing-platform" }," ]";" },";" {;";"";" title: "Micro SaaS Solutions"""," links: [",""," { name: "Micro CRM", href: "/services/micro-crm" },";"";" { name: "Helpdesk Platform", href: "/services/helpdesk" },";"";" { name: "Website Analytics", href: "/services/website-analytics" },";"";" { name: "IT Helpdesk", href: "/services/it-helpdesk" },";"";" { name: "Affiliate Tracking", href: "/services/affiliate-tracking" },";"";" { name: "Mobile Survey", href: "/services/mobile-survey" }, ]" };";" ];";" ;"";" const companyLinks = [];";" ;"";" const supportLinks = [];";" ;"";" const legalLinks = [];";" ;"";" const socialLinks = []";" },";" {;";"";" title: "Cybersecurity & Compliance"""," links: [",""," { name: "AI Cybersecurity Platform", href: "/services/ai-cybersecurity-platform" },";"";" { name: "AI Cybersecurity Threat Intelligence", href: "/services/ai-cybersecurity-threat-intelligence-platform" },";"";" { name: "Zero Trust Network Access", href: "/services/zero-trust-network-access" },";"";" { name: "SOC2 Compliance Automation", href: "/services/soc2-compliance-automation" },";"";" { name: "Security Headers & CSP", href: "/services/security-headers-csp" },";"";" { name: "Smart Contract Risk Scanner", href: "/services/smart-contract-risk-scanner" }," ]";" },";" {;";"";" title: "Cloud & Infrastructure"""," links: [",""," { name: "Cloud DevOps", href: "/services/cloud-devops" },";"";" { name: "IT Infrastructure", href: "/services/it-infrastructure" },";"";" { name: "FinOps Advisor", href: "/services/finops-advisor" },";"";" { name: "Cloud Cost Optimizer", href: "/services/cloud-cost-optimizer" },";"";" { name: "Infrastructure Monitoring", href: "/services/infrastructure" },";"";" { name: "Uptime SLA Monitor", href: "/services/uptime-sla-monitor" }," ]";" },";" {;";"";" title: "Digital Transformation"""," links: [",""," { name: "Digital Twin", href: "/services/digital-twin" },";"";" { name: "Digital Transformation", href: "/services/digital-transformation" },";"";" { name: "IT Consulting", href: "/it-consulting" },";"";" { name: "Change Management", href: "/services/change-management" },";"";" { name: "Strategy Development", href: "/services/strategy-development" },";"";" { name: "Implementation Planning", href: "/services/implementation-planning" }," ]";" },";" {;";"";" title: "Emerging Technologies"""," links: [",""," { name: "Quantum Computing", href: "/services/quantum-computing" },";"";" { name: "IoT Edge Computing", href: "/services/iot-edge-computing" },";"";" { name: "AI Quantum Hybrid Platform", href: "/services/ai-quantum-hybrid-platform" },";"";" { name: "Space Technology", href: "/space-tech" },";"";" { name: "Blockchain Solutions", href: "/services/blockchain-enterprise-solutions" },";"";" { name: "Edge Computing Platform", href: "/services/edge-computing-platform" }," ]";" },";" {;";"";" title: "Micro SaaS Solutions"""," links: [",""," { name: "Micro CRM", href: "/services/micro-crm" },";"";" { name: "Helpdesk Platform", href: "/services/helpdesk" },";"";" { name: "Website Analytics", href: "/services/website-analytics" },";"";" { name: "IT Helpdesk", href: "/services/it-helpdesk" },";"";" { name: "Affiliate Tracking", href: "/services/affiliate-tracking" },";"";" { name: "Mobile Survey", href: "/services/mobile-survey" }, ]" };";" ];";" ;"";" const companyLinks = [];";" ;"";" const supportLinks = [];";" ;"";" const legalLinks = [];";" ;"";" const socialLinks = []";" },";" {;";"";" title: "Cybersecurity & Compliance"""," links: [",""," { name: "AI Cybersecurity Platform", href: "/services/ai-cybersecurity-platform" },";"";" { name: "AI Cybersecurity Threat Intelligence", href: "/services/ai-cybersecurity-threat-intelligence-platform" },";"";" { name: "Zero Trust Network Access", href: "/services/zero-trust-network-access" },";"";" { name: "SOC2 Compliance Automation", href: "/services/soc2-compliance-automation" },";"";" { name: "Security Headers & CSP", href: "/services/security-headers-csp" },";"";" { name: "Smart Contract Risk Scanner", href: "/services/smart-contract-risk-scanner" }," ]";" },";" {;";"";" title: "Cloud & Infrastructure"""," links: [",""," { name: "Cloud DevOps", href: "/services/cloud-devops" },";"";" { name: "IT Infrastructure", href: "/services/it-infrastructure" },";"";" { name: "FinOps Advisor", href: "/services/finops-advisor" },";"";" { name: "Cloud Cost Optimizer", href: "/services/cloud-cost-optimizer" },";"";" { name: "Infrastructure Monitoring", href: "/services/infrastructure" },";"";" { name: "Uptime SLA Monitor", href: "/services/uptime-sla-monitor" }," ]";" },";" {;";"";" title: "Digital Transformation"""," links: [",""," { name: "Digital Twin", href: "/services/digital-twin" },";"";" { name: "Digital Transformation", href: "/services/digital-transformation" },";"";" { name: "IT Consulting", href: "/it-consulting" },";"";" { name: "Change Management", href: "/services/change-management" },";"";" { name: "Strategy Development", href: "/services/strategy-development" },";"";" { name: "Implementation Planning", href: "/services/implementation-planning" }," ]";" },";" {;";"";" title: "Emerging Technologies"""," links: [",""," { name: "Quantum Computing", href: "/services/quantum-computing" },";"";" { name: "IoT Edge Computing", href: "/services/iot-edge-computing" },";"";" { name: "AI Quantum Hybrid Platform", href: "/services/ai-quantum-hybrid-platform" },";"";" { name: "Space Technology", href: "/space-tech" },";"";" { name: "Blockchain Solutions", href: "/services/blockchain-enterprise-solutions" },";"";" { name: "Edge Computing Platform", href: "/services/edge-computing-platform" }," ]";" },";" {;";"";" title: "Micro SaaS Solutions"""," links: [",""," { name: "Micro CRM", href: "/services/micro-crm" },";"";" { name: "Helpdesk Platform", href: "/services/helpdesk" },";"";" { name: "Website Analytics", href: "/services/website-analytics" },";"";" { name: "IT Helpdesk", href: "/services/it-helpdesk" },";"";" { name: "Affiliate Tracking", href: "/services/affiliate-tracking" },";"";" { name: "Mobile Survey", href: "/services/mobile-survey" }, ]" };";" ];";" ;"";" const companyLinks = [];";" ;"";" const supportLinks = [];";" ;"";" const legalLinks = [];";" ;"";" const socialLinks = []";" },";" {;";"";" title: "Cybersecurity & Compliance"""," links: [",""," { name: "AI Cybersecurity Platform", href: "/services/ai-cybersecurity-platform" },";"";" { name: "AI Cybersecurity Threat Intelligence", href: "/services/ai-cybersecurity-threat-intelligence-platform" },";"";" { name: "Zero Trust Network Access", href: "/services/zero-trust-network-access" },";"";" { name: "SOC2 Compliance Automation", href: "/services/soc2-compliance-automation" },";"";" { name: "Security Headers & CSP", href: "/services/security-headers-csp" },";"";" { name: "Smart Contract Risk Scanner", href: "/services/smart-contract-risk-scanner" }," ]";" },";" {;";"";" title: "Cloud & Infrastructure"""," links: [",""," { name: "Cloud DevOps", href: "/services/cloud-devops" },";"";" { name: "IT Infrastructure", href: "/services/it-infrastructure" },";"";" { name: "FinOps Advisor", href: "/services/finops-advisor" },";"";" { name: "Cloud Cost Optimizer", href: "/services/cloud-cost-optimizer" },";"";" { name: "Infrastructure Monitoring", href: "/services/infrastructure" },";"";" { name: "Uptime SLA Monitor", href: "/services/uptime-sla-monitor" }," ]";" },";" {;";"";" title: "Digital Transformation"""," links: [",""," { name: "Digital Twin", href: "/services/digital-twin" },";"";" { name: "Digital Transformation", href: "/services/digital-transformation" },";"";" { name: "IT Consulting", href: "/it-consulting" },";"";" { name: "Change Management", href: "/services/change-management" },";"";" { name: "Strategy Development", href: "/services/strategy-development" },";"";" { name: "Implementation Planning", href: "/services/implementation-planning" }," ]";" },";" {;";"";" title: "Emerging Technologies"""," links: [",""," { name: "Quantum Computing", href: "/services/quantum-computing" },";"";" { name: "IoT Edge Computing", href: "/services/iot-edge-computing" },";"";" { name: "AI Quantum Hybrid Platform", href: "/services/ai-quantum-hybrid-platform" },";"";" { name: "Space Technology", href: "/space-tech" },";"";" { name: "Blockchain Solutions", href: "/services/blockchain-enterprise-solutions" },";"";" { name: "Edge Computing Platform", href: "/services/edge-computing-platform" }," ]";" },";" {;";"";" title: "Micro SaaS Solutions"""," links: [",""," { name: "Micro CRM", href: "/services/micro-crm" },";"";" { name: "Helpdesk Platform", href: "/services/helpdesk" },";"";" { name: "Website Analytics", href: "/services/website-analytics" },";"";" { name: "IT Helpdesk", href: "/services/it-helpdesk" },";"";" { name: "Affiliate Tracking", href: "/services/affiliate-tracking" },";"";" { name: "Mobile Survey", href: "/services/mobile-survey" }, ]" };";" ];";" ;"";" const companyLinks = [];";" ;"";" const supportLinks = [];";" ;"";" const legalLinks = [];";" ;"";" const socialLinks = []"},"; {";;"" title: "Cybersecurity & Compliance",";" links: [""," { name: "AI Cybersecurity Platform", href: "/services/ai - cybersecurity-platform" },"", { name: "AI Cybersecurity Threat Intelligence", href: "/services/ai - cybersecurity-threat-intelligence-platform" },"", { name: "Zero Trust Network Access", href: "/services/zero - trust-network-access" },"", { name: "SOC2 Compliance Automation", href: "/services/soc2 - compliance-automation" },"", { name: "Security Headers & CSP", href: "/services/security - headers-csp" },"", { name: "Smart Contract Risk Scanner", href: "/services/smart-contract-risk-scanner" }," ]"},"; {";;"" title: "Cloud & Infrastructure",";" links: [""," { name: "Cloud DevOps", href: "/services / cloud - devops" },"", { name: "IT Infrastructure", href: "/services/it - infrastructure" },"", { name: "FinOps Advisor", href: "/services/finops - advisor" },"", { name: "Cloud Cost Optimizer", href: "/services/cloud - cost-optimizer" },"", { name: "Infrastructure Monitoring", href: "/services/infrastructure" },"", { name: "Uptime SLA Monitor", href: "/services/uptime-sla-monitor" }," ]"},"; {";;"" title: "Digital Transformation",";" links: [""," { name: "Digital Twin", href: "/services/digital - twin" },"", { name: "Digital Transformation", href: "/services/digital - transformation" },"", { name: "IT Consulting", href: "/it - consulting" },"", { name: "Change Management", href: "/services/change - management" },"", { name: "Strategy Development", href: "/services/strategy - development" },"", { name: "Implementation Planning", href: "/services/implementation-planning" }," ]"},"; {";;"" title: "Emerging Technologies",";" links: [""," { name: "Quantum Computing", href: "/services/quantum - computing" },"", { name: "IoT Edge Computing", href: "/services/iot - edge-computing" },"", { name: "AI Quantum Hybrid Platform", href: "/services/ai - quantum-hybrid-platform" },"", { name: "Space Technology", href: "/space - tech" },"", { name: "Blockchain Solutions", href: "/services/blockchain - enterprise-solutions" },"", { name: "Edge Computing Platform", href: "/services/edge-computing-platform" }," ]"},"; {";;"" title: "Micro SaaS Solutions",";" links: [""," { name: "Micro CRM", href: "/services / micro - crm" },"", { name: "Helpdesk Platform", href: "/services/helpdesk" },"", { name: "Website Analytics", href: "/services/website - analytics" },"", { name: "IT Helpdesk", href: "/services/it - helpdesk" },"", { name: "Affiliate Tracking", href: "/services/affiliate - tracking" },"", { name: "Mobile Survey", href: "/services/mobile-survey" }]" }"]"; ";" const companyLinks = []"; ";" const supportLinks = []"; ";" const legalLinks = []"; ";" const socialLinks = []}, "{", title: "Cybersecurity & Compliance", "; links: ["", { nam,"
    e: "AI Cybersecurity Platform", href: "/services/ai-cybersecurity-platform" },"; { name: "AI Cybersecurity Threat Intelligence", href: "/services/ai-cybersecurity-threat-intelligence-platform" },"; { name: "Zero Trust Network Access", href: "/services/zero-trust-network-access" },"; { name: "SOC2 Compliance Automation", href: "/services/soc2-compliance-automation" },"; { name: "Security Headers & CSP", href: "/services/security-headers-csp" },"; { name: "Smart Contract Risk Scanner", href: "/services/smart - contract-risk-scanner" }]}, "{", title: "Cloud & Infrastructure", "; links: ["", { nam,"
    e: "Cloud DevOps", href: "/services/cloud-devops" },"; { name: "IT Infrastructure", href: "/services/it-infrastructure" },"; { name: "FinOps Advisor", href: "/services/finops-advisor" },"; { name: "Cloud Cost Optimizer", href: "/services/cloud-cost-optimizer" },"; { name: "Infrastructure Monitoring", href: "/services/infrastructure" },"; { name: "Uptime SLA Monitor", href: "/services/uptime - sla-monitor" }]}, "{", title: "Digital Transformation", "; links: ["", { nam,"
    e: "Digital Twin", href: "/services/digital-twin" },"; { name: "Digital Transformation", href: "/services/digital-transformation" },"; { name: "IT Consulting", href: "/it-consulting" },"; { name: "Change Management", href: "/services/change-management" },"; { name: "Strategy Development", href: "/services/strategy-development" },"; { name: "Implementation Planning", href: "/services/implementation - planning" }]}, "{", title: "Emerging Technologies", "; links: ["", { nam,"
    e: "Quantum Computing", href: "/services/quantum-computing" },"; { name: "IoT Edge Computing", href: "/services/iot-edge-computing" },"; { name: "AI Quantum Hybrid Platform", href: "/services/ai-quantum-hybrid-platform" },"; { name: "Space Technology", href: "/space-tech" },"; { name: "Blockchain Solutions", href: "/services/blockchain-enterprise-solutions" },"; { name: "Edge Computing Platform", href: "/services/edge - computing-platform" }]}, "{", title: "Micro SaaS Solutions", "; links: ["", { nam,"
    e: "Micro CRM", href: "/services/micro-crm" },"; { name: "Helpdesk Platform", href: "/services/helpdesk" },"; { name: "Website Analytics", href: "/services/website-analytics" },"; { name: "IT Helpdesk", href: "/services/it-helpdesk" },"; { name: "Affiliate Tracking", href: "/services/affiliate-tracking" },"; { name: "Mobile Survey", href: "/services/mobile-survey" }] }]; "; const companyLinks = []; "; const supportLinks = []; "; const legalLinks = []; "; const socialLinks = []"},"{", title: "Cybersecurity & Compliance",", links: ["," { name: "AI Cybersecurity Platform", href: "/services / ai - cybersecurity-platform" },", { name: "AI Cybersecurity Threat Intelligence", href: "/services/ai - cybersecurity-threat-intelligence-platform" },", { name: "Zero Trust Network Access", href: "/services/zero - trust-network-access" },", { name: "SOC2 Compliance Automation", href: "/services/soc2 - compliance-automation" },", { name: "Security Headers & CSP", href: "/services/security - headers-csp" },", { name: "Smart Contract Risk Scanner", href: "/services/smart - contract-risk-scanner" }," ]"},"{", title: "Cloud & Infrastructure",", links: ["," { name: "Cloud DevOps", href: "/services / cloud - devops" },", { name: "IT Infrastructure", href: "/services/it - infrastructure" },", { name: "FinOps Advisor", href: "/services/finops - advisor" },", { name: "Cloud Cost Optimizer", href: "/services/cloud - cost-optimizer" },", { name: "Infrastructure Monitoring", href: "/services/infrastructure" },", { name: "Uptime SLA Monitor", href: "/services / uptime - sla-monitor" }," ]"},"{", title: "Digital Transformation",", links: ["," { name: "Digital Twin", href: "/services / digital - twin" },", { name: "Digital Transformation", href: "/services/digital - transformation" },", { name: "IT Consulting", href: "/it - consulting" },", { name: "Change Management", href: "/services/change - management" },", { name: "Strategy Development", href: "/services/strategy - development" },", { name: "Implementation Planning", href: "/services/implementation - planning" }," ]"},"{", title: "Emerging Technologies",", links: ["," { name: "Quantum Computing", href: "/services / quantum - computing" },", { name: "IoT Edge Computing", href: "/services/iot - edge-computing" },", { name: "AI Quantum Hybrid Platform", href: "/services/ai - quantum-hybrid-platform" },", { name: "Space Technology", href: "/space - tech" },", { name: "Blockchain Solutions", href: "/services/blockchain - enterprise-solutions" },", { name: "Edge Computing Platform", href: "/services/edge - computing-platform" }," ]"},"{", title: "Micro SaaS Solutions",", links: ["," { name: "Micro CRM", href: "/services / micro - crm" },", { name: "Helpdesk Platform", href: "/services/helpdesk" },", { name: "Website Analytics", href: "/services/website - analytics" },", { name: "IT Helpdesk", href: "/services/it - helpdesk" },", { name: "Affiliate Tracking", href: "/services/affiliate - tracking" },", { name: "Mobile Survey", href: "/services/mobile-survey" }]" }"]"; ";" const companyLinks = []"; ";" const supportLinks = []"; ";" const legalLinks = []"; ";" const socialLinks = []&apos},&apos;{";&apos;&apos; title: &apos,Cybersecurity & Compliance&apos,,";&apos; links: [&apos,&apos, { nam,e: &apos,AI Cybersecurity Platform&apos,, href: &apos,/services/ai-cybersecurity-platform&apos, },&apos;&apos; { name: &apos,AI Cybersecurity Threat Intelligence&apos,, href: &apos,/services/ai-cybersecurity-threat-intelligence-platform&apos, },&apos;&apos; { name: &apos,Zero Trust Network Access&apos,, href: &apos,/services/zero-trust-network-access&apos, },&apos;&apos; { name: &apos,SOC2 Compliance Automation&apos,, href: &apos,/services/soc2-compliance-automation&apos, },&apos;&apos; { name: &apos,Security Headers & CSP&apos,, href: &apos,/services/security-headers-csp&apos, },&apos;&apos; { name: &apos,Smart Contract Risk Scanner&apos,, href: &apos,/services/smart-contract-risk-scanner&apos, },&apos]&apos},&apos;{";&apos;&apos; title: &apos,Cloud & Infrastructure&apos,,";&apos; links: [&apos,&apos, { nam,e: &apos,Cloud DevOps&apos,, href: &apos,/services/cloud-devops&apos, },&apos;&apos; { name: &apos,IT Infrastructure&apos,, href: &apos,/services/it-infrastructure&apos, },&apos;&apos; { name: &apos,FinOps Advisor&apos,, href: &apos,/services/finops-advisor&apos, },&apos;&apos; { name: &apos,Cloud Cost Optimizer&apos,, href: &apos,/services/cloud-cost-optimizer&apos, },&apos;&apos; { name: &apos,Infrastructure Monitoring&apos,, href: &apos,/services/infrastructure&apos, },&apos;&apos; { name: &apos,Uptime SLA Monitor&apos,, href: &apos,/services/uptime-sla-monitor&apos, },&apos]&apos},&apos;{";&apos;&apos; title: &apos,Digital Transformation&apos,,";&apos; links: [&apos,&apos, { nam,e: &apos,Digital Twin&apos,, href: &apos,/services/digital-twin&apos, },&apos;&apos; { name: &apos,Digital Transformation&apos,, href: &apos,/services/digital-transformation&apos, },&apos;&apos; { name: &apos,IT Consulting&apos,, href: &apos,/it-consulting&apos, },&apos;&apos; { name: &apos,Change Management&apos,, href: &apos,/services/change-management&apos, },&apos;&apos; { name: &apos,Strategy Development&apos,, href: &apos,/services/strategy-development&apos, },&apos;&apos; { name: &apos,Implementation Planning&apos,, href: &apos,/services/implementation-planning&apos, },&apos]&apos},&apos;{";&apos;&apos; title: &apos,Emerging Technologies&apos,,";&apos; links: [&apos,&apos, { nam,e: &apos,Quantum Computing&apos,, href: &apos,/services/quantum-computing&apos, },&apos;&apos; { name: &apos,IoT Edge Computing&apos,, href: &apos,/services/iot-edge-computing&apos, },&apos;&apos; { name: &apos,AI Quantum Hybrid Platform&apos,, href: &apos,/services/ai-quantum-hybrid-platform&apos, },&apos;&apos; { name: &apos,Space Technology&apos,, href: &apos,/space-tech&apos, },&apos;&apos; { name: &apos,Blockchain Solutions&apos,, href: &apos,/services/blockchain-enterprise-solutions&apos, },&apos;&apos; { name: &apos,Edge Computing Platform&apos,, href: &apos,/services/edge-computing-platform&apos, },&apos]&apos},&apos;{";&apos;&apos; title: &apos,Micro SaaS Solutions&apos,,";&apos; links: [&apos,&apos, { nam,e: &apos,Micro CRM&apos,, href: &apos,/services/micro-crm&apos, },&apos;&apos; { name: &apos,Helpdesk Platform&apos,, href: &apos,/services/helpdesk&apos, },&apos;&apos; { name: &apos,Website Analytics&apos,, href: &apos,/services/website-analytics&apos, },&apos;&apos; { name: &apos,IT Helpdesk&apos,, href: &apos,/services/it-helpdesk&apos, },&apos;&apos; { name: &apos,Affiliate Tracking&apos,, href: &apos,/services/affiliate-tracking&apos, },&apos;&apos; { name: &apos,Mobile Survey&apos,, href: &apos,/services/mobile-survey&apos, }]&apos}"]"; ";&apos;&apos, const companyLinks = []"; ";&apos;&apos, const supportLinks = []"; ";&apos;&apos, const legalLinks = []"; ";&apos;&apos, const socialLinks = []"}, "{"," title: "Cybersecurity & Compliance", ", links: [""," { name: "AI Cybersecurity Platform", href: "/services / ai - cybersecurity-platform" },"", { name: "AI Cybersecurity Threat Intelligence", href: "/services/ai - cybersecurity-threat-intelligence-platform" },"", { name: "Zero Trust Network Access", href: "/services/zero - trust-network-access" },"", { name: "SOC2 Compliance Automation", href: "/services/soc2 - compliance-automation" },"", { name: "Security Headers & CSP", href: "/services/security - headers-csp" },"", { name: "Smart Contract Risk Scanner", href: "/services/smart - contract-risk-scanner" }," ]"}, "{"," title: "Cloud & Infrastructure", ", links: [""," { name: "Cloud DevOps", href: "/services / cloud - devops" },"", { name: "IT Infrastructure", href: "/services/it - infrastructure" },"", { name: "FinOps Advisor", href: "/services/finops - advisor" },"", { name: "Cloud Cost Optimizer", href: "/services/cloud - cost-optimizer" },"", { name: "Infrastructure Monitoring", href: "/services/infrastructure" },"", { name: "Uptime SLA Monitor", href: "/services / uptime - sla-monitor" }," ]"}, "{"," title: "Digital Transformation", ", links: [""," { name: "Digital Twin", href: "/services / digital - twin" },"", { name: "Digital Transformation", href: "/services/digital - transformation" },"", { name: "IT Consulting", href: "/it - consulting" },"", { name: "Change Management", href: "/services/change - management" },"", { name: "Strategy Development", href: "/services/strategy - development" },"", { name: "Implementation Planning", href: "/services/implementation - planning" }," ]"}, "{"," title: "Emerging Technologies", ", links: [""," { name: "Quantum Computing", href: "/services / quantum - computing" },"", { name: "IoT Edge Computing", href: "/services/iot - edge-computing" },"", { name: "AI Quantum Hybrid Platform", href: "/services/ai - quantum-hybrid-platform" },"", { name: "Space Technology", href: "/space - tech" },"", { name: "Blockchain Solutions", href: "/services/blockchain - enterprise-solutions" },"", { name: "Edge Computing Platform", href: "/services/edge - computing-platform" }," ]"}, "{"," title: "Micro SaaS Solutions", ", links: [""," { name: "Micro CRM", href: "/services / micro - crm" },"", { name: "Helpdesk Platform", href: "/services/helpdesk" },"", { name: "Website Analytics", href: "/services/website - analytics" },"", { name: "IT Helpdesk", href: "/services/it - helpdesk" },"", { name: "Affiliate Tracking", href: "/services/affiliate - tracking" },"", { name: "Mobile Survey", href: "/services/mobile-survey" }]" }"]"; ";" const companyLinks = []"; ";" const supportLinks = []"; ";" const legalLinks = []"; ";" const socialLinks = []"}, "; {";;"" title: "Cybersecurity & Compliance", ";" links: [""," { name: "AI Cybersecurity Platform", href: "/services/ai - cybersecurity-platform" },"", { name: "AI Cybersecurity Threat Intelligence", href: "/services/ai - cybersecurity-threat-intelligence-platform" },"", { name: "Zero Trust Network Access", href: "/services/zero - trust-network-access" },"", { name: "SOC2 Compliance Automation", href: "/services/soc2 - compliance-automation" },"", { name: "Security Headers & CSP", href: "/services/security - headers-csp" },"", { name: "Smart Contract Risk Scanner", href: "/services/smart-contract-risk-scanner" }," ]"}, "; {";;"" title: "Cloud & Infrastructure", ";" links: [""," { name: "Cloud DevOps", href: "/services / cloud - devops" },"", { name: "IT Infrastructure", href: "/services/it - infrastructure" },"", { name: "FinOps Advisor", href: "/services/finops - advisor" },"", { name: "Cloud Cost Optimizer", href: "/services/cloud - cost-optimizer" },"", { name: "Infrastructure Monitoring", href: "/services/infrastructure" },"", { name: "Uptime SLA Monitor", href: "/services/uptime-sla-monitor" }," ]"}, "; {";;"" title: "Digital Transformation", ";" links: [""," { name: "Digital Twin", href: "/services/digital - twin" },"", { name: "Digital Transformation", href: "/services/digital - transformation" },"", { name: "IT Consulting", href: "/it - consulting" },"", { name: "Change Management", href: "/services/change - management" },"", { name: "Strategy Development", href: "/services/strategy - development" },"", { name: "Implementation Planning", href: "/services/implementation-planning" }," ]"}, "; {";;"" title: "Emerging Technologies", ";" links: [""," { name: "Quantum Computing", href: "/services/quantum - computing" },"", { name: "IoT Edge Computing", href: "/services/iot - edge-computing" },"", { name: "AI Quantum Hybrid Platform", href: "/services/ai - quantum-hybrid-platform" },"", { name: "Space Technology", href: "/space - tech" },"", { name: "Blockchain Solutions", href: "/services/blockchain - enterprise-solutions" },"", { name: "Edge Computing Platform", href: "/services/edge-computing-platform" }," ]"}, "; {";;"" title: "Micro SaaS Solutions", ";" links: [""," { name: "Micro CRM", href: "/services / micro - crm" },"", { name: "Helpdesk Platform", href: "/services/helpdesk" },"", { name: "Website Analytics", href: "/services/website - analytics" },"", { name: "IT Helpdesk", href: "/services/it - helpdesk" },"", { name: "Affiliate Tracking", href: "/services/affiliate - tracking" },"", { name: "Mobile Survey", href: "/services/mobile-survey" }]" }"]"; ";" const companyLinks = []"; ";" const supportLinks = []"; ";" const legalLinks = []"; ";" const socialLinks = []"}, "{" title: "Cybersecurity & Compliance",  links: [" { name: "AI Cybersecurity Platform", href: "/services/ai-cybersecurity-platform" }," { name: "AI Cybersecurity Threat Intelligence", href: "/services/ai-cybersecurity-threat-intelligence-platform" }," { name: "Zero Trust Network Access", href: "/services/zero-trust-network-access" }," { name: "SOC2 Compliance Automation", href: "/services/soc2-compliance-automation" }," { name: "Security Headers & CSP", href: "/services/security-headers-csp" }," { name: "Smart Contract Risk Scanner", href: "/services/smart-contract-risk-scanner" }," ]"}, "{" title: "Cloud & Infrastructure",  links: [" { name: "Cloud DevOps", href: "/services/cloud-devops" }," { name: "IT Infrastructure", href: "/services/it-infrastructure" }," { name: "FinOps Advisor", href: "/services/finops-advisor" }," { name: "Cloud Cost Optimizer", href: "/services/cloud-cost-optimizer" }," { name: "Infrastructure Monitoring", href: "/services/infrastructure" }," { name: "Uptime SLA Monitor", href: "/services/uptime-sla-monitor" }," ]"}, "{" title: "Digital Transformation",  links: [" { name: "Digital Twin", href: "/services/digital-twin" }," { name: "Digital Transformation", href: "/services/digital-transformation" }," { name: "IT Consulting", href: "/it-consulting" }," { name: "Change Management", href: "/services/change-management" }," { name: "Strategy Development", href: "/services/strategy-development" }," { name: "Implementation Planning", href: "/services/implementation-planning" }," ]"}, "{" title: "Emerging Technologies",  links: [" { name: "Quantum Computing", href: "/services/quantum-computing" }," { name: "IoT Edge Computing", href: "/services/iot-edge-computing" }," { name: "AI Quantum Hybrid Platform", href: "/services/ai-quantum-hybrid-platform" }," { name: "Space Technology", href: "/space-tech" }," { name: "Blockchain Solutions", href: "/services/blockchain-enterprise-solutions" }," { name: "Edge Computing Platform", href: "/services/edge-computing-platform" }," ]"}, "{" title: "Micro SaaS Solutions",  links: [" { name: "Micro CRM", href: "/services/micro-crm" }," { name: "Helpdesk Platform", href: "/services/helpdesk" }," { name: "Website Analytics", href: "/services/website-analytics" }," { name: "IT Helpdesk", href: "/services/it-helpdesk" }," { name: "Affiliate Tracking", href: "/services/affiliate-tracking" }," { name: "Mobile Survey", href: "/services/mobile-survey" }]" }"];" const companyLinks = [], const supportLinks = [], const legalLinks = [], const socialLinks = []"},"; {";;"" title: "Cybersecurity & Compliance", links: [" { name: "AI Cybersecurity Platform", href: "/services/ai-cybersecurity-platform" }," { name: "AI Cybersecurity Threat Intelligence", href: "/services/ai-cybersecurity-threat-intelligence-platform" }," { name: "Zero Trust Network Access", href: "/services/zero-trust-network-access" }," { name: "SOC2 Compliance Automation", href: "/services/soc2-compliance-automation" }," { name: "Security Headers & CSP", href: "/services/security-headers-csp" }," { name: "Smart Contract Risk Scanner", href: "/services/smart-contract-risk-scanner" }," ]"},"; {";;"" title: "Cloud & Infrastructure", links: [" { name: "Cloud DevOps", href: "/services/cloud-devops" }," { name: "IT Infrastructure", href: "/services/it-infrastructure" }," { name: "FinOps Advisor", href: "/services/finops-advisor" }," { name: "Cloud Cost Optimizer", href: "/services/cloud-cost-optimizer" }," { name: "Infrastructure Monitoring", href: "/services/infrastructure" }," { name: "Uptime SLA Monitor", href: "/services/uptime-sla-monitor" }," ]"},"; {";;"" title: "Digital Transformation", links: [" { name: "Digital Twin", href: "/services/digital-twin" }," { name: "Digital Transformation", href: "/services/digital-transformation" }," { name: "IT Consulting", href: "/it-consulting" }," { name: "Change Management", href: "/services/change-management" }," { name: "Strategy Development", href: "/services/strategy-development" }," { name: "Implementation Planning", href: "/services/implementation-planning" }," ]"},"; {";;"" title: "Emerging Technologies", links: [" { name: "Quantum Computing", href: "/services/quantum-computing" }," { name: "IoT Edge Computing", href: "/services/iot-edge-computing" }," { name: "AI Quantum Hybrid Platform", href: "/services/ai-quantum-hybrid-platform" }," { name: "Space Technology", href: "/space-tech" }," { name: "Blockchain Solutions", href: "/services/blockchain-enterprise-solutions" }," { name: "Edge Computing Platform", href: "/services/edge-computing-platform" }," ]"},"; {";;"" title: "Micro SaaS Solutions", links: [" { name: "Micro CRM", href: "/services/micro - crm" }," { name: "Helpdesk Platform", href: "/services/helpdesk" }," { name: "Website Analytics", href: "/services/website-analytics" }," { name: "IT Helpdesk", href: "/services/it-helpdesk" }," { name: "Affiliate Tracking", href: "/services/affiliate-tracking" }," { name: "Mobile Survey", href: "/services/mobile-survey" }]" }"], const companyLinks = []; const supportLinks = []; const legalLinks = []; const socialLinks = [" { name: "Facebook", href: "https:""'
",
}}}}""
>>>>>>> main
