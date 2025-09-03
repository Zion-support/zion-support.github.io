<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { 
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
  ExternalLink
} from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: "AI & Automation",
      icon: Brain,
      color: "text-blue-400",
      services: [
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
        { name: 'AI Content Generator', href: '/services/ai-content-generator' },
        { name: 'Micro SaaS Solutions', href: '/services/micro-saas' },
        { name: 'Project Management Suite', href: '/services/project-management-suite' },
        { name: 'Social Media Scheduler', href: '/services/social-media-scheduler' },
        { name: 'Email Marketing Automation', href: '/services/email-marketing-automation' },
        { name: 'Website Speed Optimizer', href: '/services/website-speed-optimizer' },
=======
        { name: "AI Autonomous Cybersecurity Platform", href: "/services/ai-autonomous-cybersecurity-platform" },
        { name: "AI Customer Experience Platform", href: "/services/ai-customer-experience-platform" },
        { name: "AI Healthcare Diagnostics", href: "/services/ai-healthcare-diagnostics" },
        { name: "AI Enterprise Orchestrator", href: "/services/ai-enterprise-orchestrator" }
>>>>>>> main
>>>>>>> main
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      color: "text-green-400",
      services: [
<<<<<<< HEAD
        { name: 'Cloud Migration & Architecture', href: '/services/cloud-migration' },
        { name: 'Edge Computing Infrastructure', href: '/services/edge-computing-infrastructure' },
        { name: 'Zero Trust Security Architecture', href: '/services/zero-trust-security-architecture' },
        { name: 'Quantum-Safe Cryptography', href: '/services/quantum-safe-cryptography' },
        { name: 'AIOps Platform Implementation', href: '/services/aiops-platform' },
        { name: '5G Network Implementation', href: '/services/5g-network-implementation' },
        { name: 'Green IT & Sustainability', href: '/services/green-it-sustainability' },
=======
<<<<<<< HEAD
        { name: 'IT Services Overview', href: '/services/it-services' },
        { name: 'Cloud Migration', href: '/services/cloud-migration' },
        { name: 'Database Optimization', href: '/services/database-optimization' },
>>>>>>> main
        { name: 'Network Security Audit', href: '/services/network-security-audit' },
        { name: 'Disaster Recovery Planning', href: '/services/disaster-recovery-planning' },
        { name: 'Performance Monitoring', href: '/services/performance-monitoring' },
<<<<<<< HEAD
        { name: 'Identity & Access Management', href: '/services/iam' },
        { name: 'Backup & Recovery Solutions', href: '/services/backup-recovery' },
        { name: 'DevOps & CI/CD Pipeline', href: '/services/devops-cicd' },
        { name: 'Database Optimization', href: '/services/database-optimization' },
=======
=======
        { name: "Cloud Migration", href: "/services/cloud-migration" },
        { name: "Micro SaaS Solutions", href: "/micro-saas" },
        { name: "IT Services", href: "/it-services" },
        { name: "Infrastructure Management", href: "/services/infrastructure" }
>>>>>>> main
>>>>>>> main
      ]
    },
    {
      title: "Data & Analytics",
      icon: Database,
      color: "text-purple-400",
      services: [
<<<<<<< HEAD
        { name: 'Quantum Machine Learning', href: '/services/quantum-machine-learning' },
        { name: 'Autonomous AI Systems', href: '/services/autonomous-ai-systems' },
        { name: 'AI-Powered Cybersecurity', href: '/services/ai-cybersecurity-suite' },
        { name: 'AI Drug Discovery Platform', href: '/services/ai-drug-discovery' },
        { name: 'AI Climate Modeling', href: '/services/ai-climate-modeling' },
        { name: 'AI Space Exploration', href: '/services/ai-space-exploration' },
        { name: 'Custom AI Model Development', href: '/services/custom-ai-models' },
        { name: 'Computer Vision Solutions', href: '/services/computer-vision-solutions' },
        { name: 'Natural Language Processing', href: '/services/natural-language-processing' },
        { name: 'Predictive Analytics Platform', href: '/services/predictive-analytics-platform' },
        { name: 'AI Recommendation Engine', href: '/services/ai-powered-recommendation-engine' },
        { name: 'AI-Powered Search', href: '/services/ai-powered-search' },
        { name: 'AI Content Moderation', href: '/services/ai-content-moderation' },
        { name: 'AI Fraud Detection', href: '/services/ai-fraud-detection' },
        { name: 'AI Financial Trading', href: '/services/ai-financial-trading' },
=======
<<<<<<< HEAD
        { name: 'AI Services Overview', href: '/services/ai-services' },
        { name: 'Custom AI Models', href: '/services/custom-ai-models' },
        { name: 'Computer Vision Solutions', href: '/services/computer-vision-solutions' },
        { name: 'Natural Language Processing', href: '/services/natural-language-processing' },
        { name: 'Predictive Analytics', href: '/services/predictive-analytics' },
        { name: 'AI Fraud Detection', href: '/services/ai-fraud-detection' },
=======
        { name: "Data Analytics", href: "/services/data-analytics" },
        { name: "Business Intelligence", href: "/services/business-intelligence" },
        { name: "Predictive Analytics", href: "/services/predictive-analytics" },
        { name: "AI Healthcare Analytics", href: "/services/ai-healthcare-analytics-platform" }
>>>>>>> main
>>>>>>> main
      ]
    }
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "White Papers", href: "/white-papers" },
    { name: "Webinars", href: "/webinars" },
    { name: "Pricing", href: "/pricing" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Sitemap", href: "/sitemap" }
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitter },
    { name: "GitHub", href: "https://github.com/ziontechgroup", icon: Github },
    { name: "YouTube", href: "https://youtube.com/ziontechgroup", icon: Youtube },
    { name: "Instagram", href: "https://instagram.com/ziontechgroup", icon: Instagram }
  ];

  const contactInfo = {
    email: "contact@ziontechgroup.com",
    phone: "+1 (555) 123-4567",
    address: "123 Technology Drive, San Francisco, CA 94105"
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered solutions and technology services. 
              We help businesses transform and innovate with cutting-edge artificial intelligence.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-blue-400" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-blue-400" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                <span>{contactInfo.address}</span>
              </div>
<<<<<<< HEAD
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
=======
<<<<<<< HEAD
>>>>>>> main
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
=======
>>>>>>> main
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
=======
<<<<<<< HEAD
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
  ExternalLink
} from 'lucide-react;
import { Button } from '../ui/Button;
import { Badge } from '../ui/Badge;

const Footer: React.FC = () => {const currentYear = new Date().getFullYear();
=======
import React from "react"
const Footer: React.FC = () => {,
  const currentYear = new Date().getFullYear(),
  const serviceCategories = []
    },
    {"
      title: "Cloud & Infrastructure",
      icon: Cloud,"
      color: "text-green-400",
      services: [",
        { name: "Cloud Migration", href: "/services/cloud-migration" },"
        { name: "Cloud-Native Transformation", href: "/services/cloud-native-transformation" },"
        { name: "Cybersecurity Operations Center", href: "/services/cyber-security-operations-center" },"
        { name: "Data Lake & Analytics", href: "/services/data-lake-architecture" },"
        { name: "IoT Platform Development", href: "/services/iot-platform-development" },"
        { name: "API-First Architecture", href: "/services/api-first-architecture" },"
        { name: "Hybrid Cloud Strategy", href: "/services/hybrid-cloud-strategy" },"
        { name: "Digital Workplace Solutions", href: "/services/digital-workplace-solutions" },"
        { name: "Compliance Automation", href: "/services/compliance-automation" },"
        { name: "Performance Engineering", href: "/services/performance-engineering" },"
        { name: "Edge Computing Solutions", href: "/services/edge-computing-solutions" },"
        { name: "Blockchain Infrastructure", href: "/services/blockchain-infrastructure" },"
        { name: "Zero Trust Security", href: "/services/zero-trust-security" },"
        { name: "5G Network Implementation", href: "/services/5g-network-implementation" },"
        { name: "Hyperautomation Platform", href: "/services/hyperautomation-platform" },"
        { name: "Kubernetes Orchestration", href: "/services/kubernetes-orchestration" },"
        { name: "API Gateway Setup", href: "/services/api-gateway-setup" },"
        { name: "Database Optimization", href: "/services/database-optimization" },"
        { name: "Network Security Audit", href: "/services/network-security-audit" },"
        { name: "Disaster Recovery Planning", href: "/services/disaster-recovery-planning" },"
        { name: "Microservices Architecture", href: "/services/microservices-architecture" },"
        { name: "Performance Monitoring", href: "/services/performance-monitoring" },
      ]
    },
    {"
      title: "Data & Analytics",
      icon: Database,"
      color: "text-purple-400",
      services: [",
        { name: "AI Drug Discovery", href: "/services/ai-drug-discovery" },"
        { name: "AI Autonomous Systems", href: "/services/ai-autonomous-systems" },"
        { name: "AI Personalized Medicine", href: "/services/ai-personalized-medicine" },"
        { name: "AI Cyber Threat Intelligence", href: "/services/ai-cyber-threat-intelligence" },"
        { name: "AI Energy Optimization", href: "/services/ai-energy-optimization" },"
        { name: "AI Agricultural Intelligence", href: "/services/ai-agricultural-intelligence" },"
        { name: "AI Mental Health Support", href: "/services/ai-mental-health-support" },"
        { name: "AI Educational Personalization", href: "/services/ai-educational-personalization" },"
        { name: "AI Creative Content Generation", href: "/services/ai-creative-content-generation" },"
        { name: "AI Legal Document Analysis", href: "/services/ai-legal-document-analysis" },"
        { name: "AI Climate Modeling", href: "/services/ai-climate-modeling" },"
        { name: "AI Space Exploration", href: "/services/ai-space-exploration" },"
        { name: "AI Neuroscience Research", href: "/services/ai-neuroscience-research" },"
        { name: "AI Robotics & Automation", href: "/services/ai-robotics-automation" },"
        { name: "AI Financial Trading", href: "/services/ai-financial-trading" },"
        { name: "Custom AI Models", href: "/services/custom-ai-models" },"
        { name: "Computer Vision Solutions", href: "/services/computer-vision-solutions" },"
        { name: "Natural Language Processing", href: "/services/natural-language-processing" },"
        { name: "Predictive Analytics", href: "/services/predictive-analytics" },"
        { name: "Recommendation Engine", href: "/services/recommendation-engine" },"
        { name: "AI-Powered Search", href: "/services/ai-powered-search" },"
        { name: "AI Content Moderation", href: "/services/ai-content-moderation" },"
        { name: "AI Fraud Detection", href: "/services/ai-fraud-detection" },
      ]
>>>>>>> main

  ]
  const quickLinks = []
  const legalLinks = []
  const socialLinks = []
  const contactInfo = {}

<<<<<<< HEAD
  const quickLinks = [;
    { name: "About Us", href: "/about" },"    { name: "Our Team", href: "/team" },"    { name: "Careers", href: "/careers" },"    { name: "Case Studies", href: "/case-studies" },"    { name: "Blog", href: "/blog" },"    { name: "White Papers", href: "/white-papers" },"    { name: "Webinars", href: "/webinars" },"    { name: "Pricing", href: "/pricing" }"  ];"
  const legalLinks = [;
    { name: "Privacy Policy", href: "/privacy" },"    { name: "Terms of Service", href: "/terms" },"    { name: "Cookie Policy", href: "/cookies" },"    { name: "Sitemap", href: "/sitemap" }"  ];"
  const socialLinks = [;
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin }, { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitter },"    { name: "GitHub", href: "https://github.com/ziontechgroup", icon: Github }, { name: "YouTube", href: "https://youtube.com/ziontechgroup", icon: Youtube },"    { name: "Instagram", href: "https://instagram.com/ziontechgroup", icon: Instagram }"  ];"
  const contactInfo = {;
    email: "contact@ziontechgroup.com", phone: "+1 (555) 123-4567", address: "123 Technology Drive, San Francisco, CA 94105""  };"return (
    <footer className="bg-slate-900 border-t border-slate-700>      {/* Main Footer Content */}"      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16>        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">"          {/* Company Info */}"          <div className="lg:col-span-1>            <Link to="/" className="flex items-center space-x-2 mb-6>              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">"                <Brain className="w-6 h-6 text-white />              </div>"              <span className="text-2xl font-bold text-white>Zion Tech Group</span>            </Link>"            
            <p className="text-gray-300 mb-6 leading-relaxed>              Leading provider of AI-powered solutions and technology services. "              We help businesses transform and innovate with cutting-edge artificial intelligence.
=======
  return ("
    <footer className = "bg-slate-900 border-t border-slate-700">
      {/* comment */}"
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16">"
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">,
          {/* comment */}"
          <div className="lg: col-span-1">"
            <Link to="/" className="flex items-center space-x-2 mb-6">"
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">"
                <Brain className="w-6 h-6 text-white"  />
              </div>"
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
            </Link>
            "
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered solutions and technology services. 
              We help businesses transform and innovate with cutting-edge artificial intelligence.
>>>>>>> main
            </p>
"
            <div className="space-y-3 mb-6">"
              <div className="flex items-center text-gray-300">"
                <Mail className="w-4 h-4 mr-3 text-blue-400"  />",
                <a href="{"mailto:${contactInfo.email}"}" className="hover: text-white transition-colors">,
                  {contactInfo.email}

                </a>
              </div>"
              <div className="flex items-center text-gray-300">"
                <Phone className="w-4 h-4 mr-3 text-blue-400"  />"
                <a href="{"tel:${contactInfo.phone}"}" className="hover: text-white transition-colors">,
                  {contactInfo.phone}

                </a>
              </div>"
              <div className="flex items-center text-gray-300">"
                <MapPin className="w-4 h-4 mr-3 text-blue-400"  />
                <span>{contactInfo.address}</span>
              </div>
            {/* comment */}"
            <div className="flex space-x-4">
              {socialLinks.map((social) => ("
                <a key="{social.name}""
                  href="{social.href}""
                  target="_blank""
                  rel="noopener noreferrer""
                  className="p-2 rounded-lg bg-slate-800 hover: bg-slate-700 text-gray-400 hover:text-white transition-colors"">
                  aria-label="{social.name}"
                >"
                  <social.icon className="w-5 h-5" />
                </a>
              ))}

<<<<<<< HEAD
            <div className="space-y-3 mb-6>              <div className="flex items-center text-gray-300">"                <Mail className="w-4 h-4 mr-3 text-blue-400 />                <a href={`mailto:${contactInfo.email}} className="hover:text-white transition-colors">"                  {contactInfo.email}"                </a>              </div>
              <div className="flex items-center text-gray-300>                <Phone className="w-4 h-4 mr-3 text-blue-400" />"                <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors>                  {contactInfo.phone}"                </a>              </div>
              <div className="flex items-center text-gray-300>                <MapPin className="w-4 h-4 mr-3 text-blue-400" />"                <span>{contactInfo.address}</span>"              </div>
=======
>>>>>>> main
>>>>>>> main
            </div>
          {/* comment */}"
          <div className="lg: col-span-2">"
            <h3 className="text-xl font-bold text-white mb-6">Our Services</h3>"
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceCategories.map((category) => (",
                <div key="{category.title}">"
                  <div className="flex items-center mb-4">"
                    <category.icon className="{"w-5" h-5 mr-2 ${category.color}"} />"
                    <h4 className="text-white font-semibold">{category.title}</h4>
                  </div>"
                  <ul className="space-y-2">
                    {category.services.map((service) => ("
                      <li key="{service.name}">"
                        <Link to="{service.href}""
                          className="text-gray-300 hover: text-white transition-colors text-sm flex items-center group"
                        >"
                          <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"  />,
                          {service.name}

<<<<<<< HEAD
            {/* Social Links */}
            <div className="flex space-x-4>              {socialLinks.map((social) => ("                <a
                  key={social.name}
                  href={social.href}
                  target="_blank""                  rel="noopener noreferrer""                  className="p-2 rounded-lg bg-slate-800 hover: bg-slate-700 text-gray-400 hover:text-white transition-colors                  aria-label={social.name}"                >
                  <social.icon className="w-5 h-5 />                </a>"              ))}</div>
          </div>

          {/* Services */}
<<<<<<< HEAD
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-white mb-6">Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceCategories.map((category) => (
                <div key={category.title}>
                  <div className="flex items-center mb-4">
                    <category.icon className={`w-5 h-5 mr-2 ${category.color}`} />
                    <h4 className="text-white font-semibold">{category.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {category.services.map((service) => (
                      <li key={service.name}>
                        <Link
                          to={service.href}
                          className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                        >
                          <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
          {serviceCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">{category.title}</h3>
              <ul className="space-y-2">
                {category.services.map((service) => (
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
        </div>

        {/* Quick Links */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</Link></li>
<<<<<<< HEAD
                <li><Link href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-300 hover:text-blue-400 transition-colors">Terms of Service</Link></li>
=======
                <li><Link href="/careers" className="text-gray-300 hover:text-blue-400 transition-colors">Careers</Link></li>
                <li><Link href="/help" className="text-gray-300 hover:text-blue-400 transition-colors">Help Center</Link></li>
>>>>>>> main
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/blog" className="text-gray-300 hover:text-blue-400 transition-colors">Blog</Link></li>
<<<<<<< HEAD
                <li><Link href="/documentation" className="text-gray-300 hover:text-blue-400 transition-colors">Documentation</Link></li>
                <li><Link href="/help" className="text-gray-300 hover:text-blue-400 transition-colors">Help Center</Link></li>
                <li><Link href="/status" className="text-gray-300 hover:text-blue-400 transition-colors">System Status</Link></li>
=======
                <li><Link href="/help" className="text-gray-300 hover:text-blue-400 transition-colors">Documentation</Link></li>
                <li><Link href="/help" className="text-gray-300 hover:text-blue-400 transition-colors">API Reference</Link></li>
                <li><Link href="/help" className="text-gray-300 hover:text-blue-400 transition-colors">System Status</Link></li>
>>>>>>> main
              </ul>
            </div>
            
            <div>
<<<<<<< HEAD
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Support</h4>
              <ul className="space-y-2">
                <li><Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact Support</Link></li>
                <li><Link href="/help" className="text-gray-300 hover:text-blue-400 transition-colors">Help Center</Link></li>
                <li><Link href="/documentation" className="text-gray-300 hover:text-blue-400 transition-colors">Documentation</Link></li>
                <li><Link href="/status" className="text-gray-300 hover:text-blue-400 transition-colors">System Status</Link></li>
=======
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-300 hover:text-blue-400 transition-colors">Terms of Service</Link></li>
                <li><Link href="/cookies" className="text-gray-300 hover:text-blue-400 transition-colors">Cookie Policy</Link></li>
                <li><Link href="/help" className="text-gray-300 hover:text-blue-400 transition-colors">Support</Link></li>
>>>>>>> main
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Connect</h4>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://twitter.com/ziontechgroup" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="https://facebook.com/ziontechgroup" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://instagram.com/ziontechgroup" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
              
              {/* Newsletter Signup */}
              <div className="mt-6">
                <h5 className="text-sm font-semibold mb-2 text-blue-400">Newsletter</h5>
                <p className="text-gray-300 text-sm mb-3">Stay updated with our latest insights</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                  />
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors">
                    Subscribe
                  </button>
>>>>>>> main
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links & Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="bg-slate-800 rounded-lg p-6">
              <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
              <p className="text-gray-300 text-sm mb-4">
                Get the latest AI insights and technology trends delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <Button size="sm" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  Subscribe
                </Button>
              </div>
=======
<div className="lg: col-span-2>            <h3 className="text-xl font-bold text-white mb-6">Our Services</h3>"            <div className="grid grid-cols-1 md:grid-cols-3 gap-8>              {serviceCategories.map((category) => ("                <div key={category.title}>
                  <div className="flex items-center mb-4>                    <category.icon className={w-5 h-5 mr-2 ${category.color}`} />"                    <h4 className="text-white font-semibold>{category.title}</h4>                  </div>"                  <ul className="space-y-2>                    {category.services.map((service) => ("                      <li key={service.name}>`                        <Link
                          to={service.href}
                          className="text-gray-300 hover: text-white transition-colors text-sm flex items-center group                        >"                          <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity />                          {service.name}"                        </Link></li>
=======
                        </Link>
                      </li>
>>>>>>> main
                    ))}

                  </ul>
                </div>
              ))}

<<<<<<< HEAD
          {/* Quick Links & Newsletter */}
<div className="lg: col-span-1>            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>"            <div className="grid grid-cols-2 gap-4 mb-8>              {quickLinks.map((link) => ("                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-300 hover: text-white transition-colors text-sm                >"                  {link.name}</Link>
=======
            </div>
          {/* comment */}"
          <div className="lg: col-span-1">"
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>"
            <div className="grid grid-cols-2 gap-4 mb-8">
              {quickLinks.map((link) => (",
                <Link key="{link.name}""
                  to="{link.href}""
                  className="text-gray-300 hover: text-white transition-colors text-sm"
                >,
                  {link.name}

                </Link>
>>>>>>> main
              ))}

            </div>
<<<<<<< HEAD

            {/* Newsletter Signup */}
<div className="bg-slate-800 rounded-lg p-6>              <h4 className="text-white font-semibold mb-3">Stay Updated</h4>"              <p className="text-gray-300 text-sm mb-4>                Get the latest AI insights and technology trends delivered to your inbox."              </p>
              <div className="space-y-3>                <input"                  type="email""                  placeholder="Enter your email""                  className="w-full px-3 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-blue-500 text-sm                />"                <Button size="sm" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white>                  Subscribe"                </Button></div>
>>>>>>> main
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
>>>>>>> main
      <div className="border-t border-slate-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">200+</div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
            <div>
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400 text-sm">Expert Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-400 text-sm">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Support Available</div>
<<<<<<< HEAD
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                {legalLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>by Zion Tech Group</span>
=======
>>>>>>> main
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                {legalLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>by Zion Tech Group</span>
=======
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-300 hover:text-blue-400 transition-colors">
                Cookie Policy
              </Link>
              <Link href="/help" className="text-gray-300 hover:text-blue-400 transition-colors">
                Support
              </Link>
>>>>>>> main
            </div>
          </div>
=======
<div className="border-t border-slate-700 py-8>        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center>            <div>"              <div className="text-3xl font-bold text-white mb-2>200+</div>              <div className="text-gray-400 text-sm">Projects Completed</div>"            </div>"            <div>
              <div className="text-3xl font-bold text-white mb-2>50+</div>              <div className="text-gray-400 text-sm">Expert Team Members</div>"            </div>"            <div>
              <div className="text-3xl font-bold text-white mb-2>95%</div>              <div className="text-gray-400 text-sm">Client Satisfaction</div>"            </div>"            <div>
              <div className="text-3xl font-bold text-white mb-2>24/7</div>              <div className="text-gray-400 text-sm">Support Available</div>"            </div>"          </div></div>
      </div>

      {/* Bottom Footer */}
<div className="border-t border-slate-700 py-6>        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"          <div className="flex flex-col md:flex-row items-center justify-between>            <div className="flex items-center space-x-6 mb-4 md:mb-0">"              <p className="text-gray-400 text-sm>                © {currentYear} Zion Tech Group. All rights reserved."              </p>
              <div className="flex items-center space-x-4>                {legalLinks.map((link) => ("                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-gray-400 hover: text-white transition-colors text-sm                  >"                    {link.name}</Link>
                ))}
=======
            {/* comment */}"
            <div className="bg-slate-800 rounded-lg p-6">"
              <h4 className="text-white font-semibold mb-3">Stay Updated</h4>"
              <p className="text-gray-300 text-sm mb-4">
                Get the latest AI insights and technology trends delivered to your inbox.
              </p>"
              <div className="space-y-3">"
                <input type="email""
                  placeholder="Enter your email""
                  className="w-full px-3 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-blue-500 text-sm"  />"
                <Button size="sm" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  Subscribe,
                </Button>
>>>>>>> main
              </div>
,
      {/* comment */}"
      <div className="border-t border-slate-700 py-8">"
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">"
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>"
              <div className="text-3xl font-bold text-white mb-2">200+</div>"
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
<<<<<<< HEAD
            
<div className="flex items-center space-x-2 text-gray-400 text-sm>              <span>Made with</span>"              <Heart className="w-4 h-4 text-red-500 />              <span>by Zion Tech Group</span>"            </div></div>
>>>>>>> main
        </div>
      </div>
    </footer>
  );
};
=======
            <div>"
              <div className="text-3xl font-bold text-white mb-2">50+</div>"
              <div className="text-gray-400 text-sm">Expert Team Members</div>
            </div>
            <div>"
              <div className="text-3xl font-bold text-white mb-2">95%</div>"
              <div className="text-gray-400 text-sm">Client Satisfaction</div>
            </div>
            <div>"
              <div className="text-3xl font-bold text-white mb-2">24/7</div>"
              <div className="text-gray-400 text-sm">Support Available</div>
            </div>
,
      {/* comment */}"
      <div className="border-t border-slate-700 py-6">"
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">"
          <div className="flex flex-col md:flex-row items-center justify-between">"
            <div className="flex items-center space-x-6 mb-4 md:mb-0">"
              <p className="text-gray-400 text-sm">,
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>"
              <div className="flex items-center space-x-4">
                {legalLinks.map((link) => ("
                  <Link key="{link.name}""
                    to="{link.href}""
                    className="text-gray-400 hover: text-white transition-colors text-sm"
                  >,
                    {link.name}
>>>>>>> main

                  </Link>
                ))}

              </div>
            "
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>"
              <Heart className="w-4 h-4 text-red-500"  />
              <span>by Zion Tech Group</span>
            </div>
    </footer>
  )
}
""export default Footer