import React from 'react';
import { Link } from 'react-router-dom';
import {;
  Mail;
  Phone;
  MapPin;
  Globe;
  Linkedin;
  Twitter;
  Github;
  Facebook;
  Instagram;
  Zap;
  Brain;
  Server;
  Shield;
  Users;
  Building2;
  FileText;
  Rocket;
  Target;
  Atom;
  Network;
  Cloud;
  Lock;
  TrendingUp;
  Workflow;
  MessageCircle;
  Calendar;
  PenTool;
  Activity;
  Cpu;
  Wifi;
  Satellite;
  Handshake;
  BookOpen;
  Video;
  GraduationCap;
  Lightbulb;
  Star;
  HelpCircle;
  BarChart3;
  ShoppingCart;
  Heart;
  Factory;
  DollarSign;
  Briefcase;
  Award;
  ExternalLink;
  ArrowUp;
  Sparkles;
  CheckCircle;
  Monitor;
  Headphones;
  Truck;
  Search;
  Layers;
  Database;
  Home;
  Leaf;
} from 'lucide-react';
;
export function Footer("props": "any) {;
  const currentYear = new Date().getFullYear();
;
  const footerSections = [;
    {;
      "title": "Pricing & Plans";
      "icon": DollarSig n;
      "links": [;
        { "name": "Comprehensive Pricing 2025"", "href": "/comprehensive-pricing-guide-2025", "icon": "DollarSig n "}
        { "name": "Pricing Overview", "href": "/pricing", "icon": "BarChart 3 "}
        { "name": "Get Custom Quote", "href": "/contact", "icon": "MessageCircl e "}
      ];
    }
    {;
      "title": "AI & Automation Services";
      "icon": "Brai n;
      "links": [;
        { "name": "AI Business Intelligence"", "href": "/services/ai-business-intelligence-dashboard", "icon": "BarChart 3 "}
        { "name": "AI Customer Support", "href": "/services/ai-customer-support-automation", "icon": "MessageCircl e "}
        { "name": "AI Project Management", "href": "/services/ai-project-management-platform", "icon": "Workflo w "}
        { "name": "Enhanced Services 2025", "href": "/enhanced-services-showcase-2025", "icon": "Sta r "}
        { "name": "AI Marketing Automation", "href": "/services/ai-marketing-automation-platform", "icon": "TrendingU p "}
        { "name": "AI Enterprise Automation", "href": "/services/ai-enterprise-automation-platform", "icon": "Building 2 "}
        { "name": "AI Workflow Orchestrator", "href": "/services/ai-workflow-orchestrator", "icon": "Workflo w "}
        { "name": "AI Financial Trading", "href": "/services/ai-financial-trading-platform", "icon": "TrendingU p "}
        { "name": "AI Healthcare Analytics", "href": "/services/ai-healthcare-analytics-platform", "icon": "Hear t "}
        { "name": "AI Educational Content Creation", "href": "/services/ai-educational-content-creation-platform", "icon": "BookOpe n "}
        { "name": "AI Legal Automation", "href": "/services/ai-legal-document-automation-platform", "icon": "FileTex t "}
        { "name": "AI Legal Research Platform", "href": "/services/ai-autonomous-legal-research-platform", "icon": "FileTex t "}
        { "name": "AI HR Platform", "href": "/services/ai-hr-platform", "icon": "User s "}
        { "name": "AI Real Estate Investment Analytics", "href": "/services/ai-real-estate-investment-analytics-platform", "icon": "Hom e "}
        { "name": "AI Autonomous Logistics", "href": "/services/ai-autonomous-logistics-platform", "icon": "Truc k "}
        { "name": "AI Enterprise Resource Planning", "href": "/services/ai-enterprise-resource-planning", "icon": "Databas e "}
        { "name": "AI Autonomous Manufacturing", "href": "/services/ai-autonomous-manufacturing-platform", "icon": "Factor y "}
        { "name": "AI Quantum Neural Network", "href": "/services/ai-quantum-neural-network-platform", "icon": "Ato m "}
        { "name": "AI Space Technology", "href": "/services/ai-space-technology-platform", "icon": "Satellit e "}
        { "name": "AI Cybersecurity", "href": "/services/ai-cybersecurity-threat-intelligence", "icon": "Shiel d "}
      ];
    }
    {;
      "title": "Quantum Computing";
      "icon": "Ato m;
      "links": [;
        { "name": "Quantum AI Platform"", "href": "/services/quantum-ai-platform", "icon": "Brai n "}
        { "name": "Quantum Trading Platform", "href": "/services/quantum-ai-trading-platform", "icon": "TrendingU p "}
        { "name": "Quantum Computing as a Service", "href": "/services/quantum-computing-as-a-service", "icon": "Clou d "}
        { "name": "Quantum Machine Learning", "href": "/services/quantum-machine-learning", "icon": "Cp u "}
        { "name": "Quantum Edge Computing", "href": "/services/quantum-edge-computing-solutions", "icon": "Networ k "}
      ];
    }
    {;
      "title": "IT Infrastructure";
      "icon": "Serve r;
      "links": [;
        { "name": "Cloud DevOps"", "href": "/services/cloud-devops", "icon": "Clou d "}
        { "name": "IT Infrastructure Management", "href": "/services/it-infrastructure-management", "icon": "Serve r "}
        { "name": "Cybersecurity Solutions", "href": "/services/cybersecurity", "icon": "Shiel d "}
        { "name": "Digital Transformation", "href": "/services/digital-transformation", "icon": "Rocke t "}
        { "name": "Green IT Solutions", "href": "/services/green-it", "icon": "Lea f "}
        { "name": "Space Technology", "href": "/services/space-tech", "icon": "Satellit e "}
      ];
    }
    {;
      "title": "Micro SAAS Solutions";
      "icon": "Building 2;
      "links": [;
        { "name": "Micro CRM"", "href": "/services/micro-crm", "icon": "User s "}
        { "name": "Micro SAAS Platform", "href": "/services/micro-saas-solutions", "icon": "Building 2 "}
        { "name": "Micro SAAS Solutions Comprehensive", "href": "/services/micro-saas-solutions-comprehensive", "icon": "Layer s "}
        { "name": "Micro SAAS Innovation Hub", "href": "/micro-saas-innovation-hub-2029", "icon": "Sparkle s "}
      ];
    }
  ];
;
  const quickLinks = [;
    { "name": "About Us", "href": "/about", "icon": "Building 2 "}
    { "name": "Services", "href": "/services", "icon": "Serve r "}
    { "name": "Pricing", "href": "/pricing", "icon": "DollarSig n "}
    { "name": "Contact", "href": "/contact", "icon": "MessageCircl e "}
    { "name": "Careers", "href": "/careers", "icon": "Briefcas e "}
    { "name": "Blog", "href": "/blog", "icon": "FileTex t "}
    { "name": "Support", "href": "/help-center", "icon": "HelpCircl e "}
    { "name": "Documentation", "href": "/documentation", "icon": "BookOpe n "}
  ];
;
  const contactInfo = [;
    {;
      "icon": "Phon e;
      "text": "+1 302 464 0950";
      "href": ""tel":+13024640950";
    "}
    {;
      "icon": "Mai l;
      "text": "kleber@ziontechgroup.com";
      "href": ""mailto": klebe r@ziontechgroup.com";
    "}
    {;
      "icon": "MapPi n;
      "text": "364 E Main St STE 1008 Middletown DE 19709";
      "href": ""https"://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709";
    "}
  ];
;
  const socialLinks = [;
    { "name": "LinkedIn", "href": ""https": "//linkedin.com/company/ziontechgroup"", "icon": "Linkedi n "}
    { "name": "Twitter", "href": ""https": "//twitter.com/ziontechgroup"", "icon": "Twitte r "}
    { "name": "GitHub", "href": ""https": "//github.com/ziontechgroup"", "icon": "Githu b "}
    { "name": "Facebook", "href": ""https": "//facebook.com/ziontechgroup"", "icon": "Faceboo k "}
    { "name": "Instagram", "href": ""https": "//instagram.com/ziontechgroup"", "icon": "Instagra m "}
  ];
;
  return (;
    <footer className="bg-zion-slate-darker border-t border-zion-purple/20">;
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 "sm": "p x-6 "lg": p x-8 py-12">;
        <div className="grid grid-cols-1 "md": gri d-cols-2 "lg": gri d-cols-4 gap-8">;
          {/* Company Info */"}
          <div className="space-y-4">;
            <div className="flex items-center space-x-2">;
              <Zap className="h-8 w-8 text-zion-purple"  />;
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>;
            </div>;
            <p className="text-gray-300 text-sm leading-relaxed">;
              Leading the future of technology with cutting-edge AI solutions, quantum computing, and innovative micro SAAS services.;
            </p>;
            <div className="flex space-x-4">;
              {socialLinks.map((social) => (;
                <a;
                  key={social.name}
                  href={social.href}
                  target="_blank";
                  rel="noopener noreferrer";
                  className="text-gray-400 "hover": "tex t-zion-purple transition-colors";
                >;
                  <social.icon className="h-5 w-5" />;
                </a>;
              ))"}
            </div>;
          </div>;
          {/* Quick Links */}
          <div className="space-y-4">;
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">;
              <Target className="h-5 w-5 text-zion-purple"  />;
              <span>Quick Links</span>;
            </h3>;
            <ul className="space-y-2">;
              {quickLinks.map((link) => (;
                <li key={link.name}>;
                  <Link;    </div>
    );
}
            </ul>;
          </div>;
          {/* Contact Information */}
          <div className="space-y-4">;
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">;
              <MessageCircle className="h-5 w-5 text-zion-purple"  />;
              <span>Contact Us</span>;
            </h3>;
            <div className="space-y-3">;
              {contactInfo.map((contact, index) => (;
                <a;          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
              <Mail className="h-5 w-5 text-zion-purple"  />