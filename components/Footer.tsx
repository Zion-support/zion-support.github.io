<<<<<<< HEAD
=======
<<<<<<< HEAD
const React from "react";"const Link from "next/link";const { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram, Github, ExternalLink"} from "lucide-react";const services = {" "AI Solutions": [" { name: "AI-Powered Email Responder", href: "/ai-services#ai-email-responder" }," { name: "Predictive Analytics Platform", href: "/ai-services#predictive-analytics" }," { name: "Intelligent Chatbot System", href: "/ai-services#intelligent-chatbot" }," { name: "Computer Vision Solutions", href: "/ai-services#computer-vision" }," { name: "AI Content Generation", href: "/ai-services#ai-content-generation" } ]," "IT Services": [" { name: "Cloud Infrastructure Management", href: "/it-services#cloud-infrastructure" }," { name: "Cybersecurity Solutions", href: "/it-services#cybersecurity" }," { name: "Network Infrastructure", href: "/it-services#network-infrastructure" }," { name: "Database Management", href: "/it-services#database-management" }," { name: "System Administration", href: "/it-services#system-administration" } ]," "Micro SaaS": [" { name: "Cloud Cost Guard", href: "/micro-saas#cloud-cost-guard" }," { name: "LLM Evaluation Suite", href: "/micro-saas#llm-evaluation" }," { name: "Customer Feedback App", href: "/micro-saas#customer-feedback" }," { name: "API Rate Limiting", href: "/micro-saas#api-rate-limiting" }," { name: "Content Moderation AI", href: "/micro-saas#content-moderation" } ]};const companyInfo = {" name: "Zion Tech Group"," description: "Leading provider of AI solutions, cloud services, and technology consulting. Transforming businesses through innovative technology."," phone: "+1 302 464 0950"," email: "kleber@ziontechgroup.com"," address: "364 E Main St STE 1008, Middletown, DE 19709"," hours: "24/7 Support Available"};module.exports = default function Footer() { const currentYear = new Date().getFullYear(); return ( <footer className="bg-gray-900 text-white"> {}" <div className="container mx-auto px-4 py-16">" <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"> {}" <div className="lg:col-span-1">" <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>" <p className="text-gray-300 mb-4 text-sm leading-relaxed"> {companyInfo.description} </p>" <div className="space-y-2 text-sm">" <div className="flex items-center gap-2">" <Phone className="w-4 h-4 text-blue-400" /> <span>{companyInfo.phone}</span> </div>" <div className="flex items-center gap-2">" <Mail className="w-4 h-4 text-blue-400" /> <span>{companyInfo.email}</span> </div>" <div className="flex items-start gap-2">" <MapPin className="w-4 h-4 text-blue-400 mt-1" />" <span className="text-xs">{companyInfo.address}</span> </div>" <div className="flex items-center gap-2">" <Clock className="w-4 h-4 text-blue-400" />" <span className="text-xs">{companyInfo.hours}</span> </div> </div> </div> {} {Object.entries(services).map(([category, serviceList]) => ( <div key={category}>" <h4 className="text-lg font-semibold mb-4">{category}</h4>" <ul className="space-y-2"> {serviceList.map((service) => ( <li key={service.name}> <Link href={service.href}" className="text-gray-300 hover:text-blue-400 transition-colors text-sm" > {service.name} </Link> </li> ))} </ul> </div> ))} {} <div>" <h4 className="text-lg font-semibold mb-4">Quick Links</h4>" <ul className="space-y-2"> <li>" <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors text-sm"> About Us </Link> </li> <li>" <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors text-sm"> Contact </Link> </li> <li>" <Link href="/blog" className="text-gray-300 hover:text-blue-400 transition-colors text-sm"> Blog </Link> </li> <li>" <Link href="/careers" className="text-gray-300 hover:text-blue-400 transition-colors text-sm"> Careers </Link> </li> <li>" <Link href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors text-sm"> Privacy Policy </Link> </li> <li>" <Link href="/terms" className="text-gray-300 hover:text-blue-400 transition-colors text-sm"> Terms of Service </Link> </li> </ul> </div> </div> {}" <div className="border-t border-gray-800 mt-12 pt-8">" <div className="max-w-md mx-auto text-center">" <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>" <p className="text-gray-300 text-sm mb-4"> Get the latest news and updates from Zion Tech Group </p>" <div className="flex gap-2"> <input" type="email"" placeholder="Enter your email"" className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />" <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"> Subscribe </button> </div> </div> </div> {}" <div className="border-t border-gray-800 mt-8 pt-8">" <div className="flex flex-col md:flex-row justify-between items-center gap-4">" <div className="flex gap-4">" <a href="https:/facebook.com/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">" <Facebook className="w-5 h-5" /> </a>" <a href="https:/twitter.com/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">" <Twitter className="w-5 h-5" /> </a>" <a href="https:/linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">" <Linkedin className="w-5 h-5" /> </a>" <a href="https:/instagram.com/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">" <Instagram className="w-5 h-5" /> </a>" <a href="https:/github.com/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">" <Github className="w-5 h-5" /> </a> </div>" <div className="text-center md:text-right">" <p className="text-gray-400 text-sm"> {currentYear} Zion Tech Group. All rights reserved </p>" <p className="text-gray-500 text-xs mt-1"> Made with for innovation </p> </div> </div> </div> </div> </footer> );}'"'"
=======
import React from 'react';
import Link from 'next/link';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
=======
import React from 'react'
import Link from 'next/link'
>>>>>>> main
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Linkedin,
  Twitter,
>>>>>>> main
  Github,
<<<<<<< HEAD
  Youtube,
=======
<<<<<<< HEAD
>>>>>>> main
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
=======
  ExternalLink
} from 'lucide-react';
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
>>>>>>> main
} from 'lucide-react';

<<<<<<< HEAD
=======
ursor/website-audit-and-update-with-deployment-9cae
>>>>>>> main
const services = {
  'AI Solutions': [
    { name: 'AI-Powered Email Responder', href: '/ai-services#ai-email-responder' },
    { name: 'Predictive Analytics Platform', href: '/ai-services#predictive-analytics' },
    { name: 'Intelligent Chatbot System', href: '/ai-services#intelligent-chatbot' },
    { name: 'Computer Vision Solutions', href: '/ai-services#computer-vision' },
    { name: 'AI Content Generation', href: '/ai-services#ai-content-generation' },
<<<<<<< HEAD
    { name: 'Voice AI Assistant', href: '/ai-services#voice-ai-assistant' }
=======
<<<<<<< HEAD
    { name: 'AI Legal Research Assistant', href: '/ai-services#legal-research' },
    { name: 'AI Medical Imaging Analysis', href: '/ai-services#medical-imaging' },
    { name: 'AI Cybersecurity Analyst', href: '/ai-services#cybersecurity-ai' },
    { name: 'AI Climate Change Predictor', href: '/ai-services#climate-predictor' },
    { name: 'AI Autonomous Vehicle System', href: '/ai-services#autonomous-vehicles' },
    { name: 'AI-Powered Carbon Footprint Analysis', href: '/ai-services#carbon-footprint' },
    { name: 'AI-Powered Voice Synthesis', href: '/ai-services#voice-synthesis' }
=======
    { name: 'Voice AI Assistant', href: '/ai-services#voice-ai-assistant' }
    { name: 'AI Content Generation', href: '/ai-services#ai-content-generation' }
ursor/website-audit-and-update-with-deployment-9cae
>>>>>>> main
>>>>>>> main
  ],
  'IT Services': [
    { name: 'Cloud Infrastructure Management', href: '/it-services#cloud-infrastructure' },
    { name: 'Cybersecurity Solutions', href: '/it-services#cybersecurity' },
    { name: 'Network Infrastructure', href: '/it-services#network-infrastructure' },
    { name: 'Database Management', href: '/it-services#database-management' },
<<<<<<< HEAD
    { name: 'DevOps & CI/CD', href: '/it-services#devops-cicd' },
    { name: 'Data Center Migration', href: '/it-services#data-center-migration' }
=======
<<<<<<< HEAD
    { name: 'System Administration', href: '/it-services#system-administration' },
    { name: 'Quantum Computing Infrastructure', href: '/it-services#quantum-computing' },
    { name: 'Edge Computing Solutions', href: '/it-services#edge-computing' },
    { name: '5G Network Implementation', href: '/it-services#5g-networks' },
    { name: 'Blockchain Infrastructure', href: '/it-services#blockchain-infrastructure' },
    { name: 'AI Infrastructure Setup', href: '/it-services#ai-infrastructure' },
    { name: 'Zero Trust Security Architecture', href: '/it-services#zero-trust' },
    { name: 'Hybrid Cloud Management', href: '/it-services#hybrid-cloud' }
=======
    { name: 'DevOps & CI/CD', href: '/it-services#devops-cicd' },
    { name: 'Data Center Migration', href: '/it-services#data-center-migration' }
    { name: 'System Administration', href: '/it-services#system-administration' }
ursor/website-audit-and-update-with-deployment-9cae
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
    { name: 'Workflow Automation', href: '/micro-saas#workflow-automation' }
=======
    { name: 'Smart Energy Management', href: '/micro-saas#energy-management' },
    { name: 'Blockchain Analytics', href: '/micro-saas#blockchain-analytics' },
    { name: 'AI Legal Document Analyzer', href: '/micro-saas#legal-analyzer' },
    { name: 'Smart Supply Chain Optimizer', href: '/micro-saas#supply-chain' },
    { name: 'AI Medical Diagnosis Assistant', href: '/micro-saas#medical-diagnosis' },
    { name: 'AI-Powered Carbon Footprint Tracker', href: '/micro-saas#carbon-tracker' },
    { name: 'Smart Contract Audit Platform', href: '/micro-saas#smart-contract-audit' }
  ],
  'Industries': [
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Finance', href: '/industries/finance' },
    { name: 'Manufacturing', href: '/industries/manufacturing' },
    { name: 'Retail', href: '/industries/retail' },
    { name: 'Education', href: '/industries/education' },
    { name: 'Government', href: '/industries/government' },
    { name: 'Energy', href: '/industries/energy' },
    { name: 'Transportation', href: '/industries/transportation' }
>>>>>>> main
  ]
};
<<<<<<< HEAD
=======
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
]

const solutions = [
  { name: 'All Solutions', href: '/solutions' },
  { name: 'Enterprise', href: '/solutions/enterprise' },
  { name: 'Healthcare', href: '/solutions/healthcare' },
  { name: 'Finance', href: '/solutions/finance' },
  { name: 'Retail', href: '/solutions/retail' },
  { name: 'Education', href: '/solutions/education' },
  { name: 'Government', href: '/solutions/government' }
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

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/team' },
  { name: 'Careers', href: '/careers' },
  { name: 'Blog', href: '/blog' },
  { name: 'Press', href: '/press' },
  { name: 'Partners', href: '/partners' },
  { name: 'Contact', href: '/contact' }
]

const resources = [
  { name: 'Documentation', href: '/docs' },
  { name: 'Help Center', href: '/help' },
  { name: 'Community', href: '/community' },
  { name: 'Tutorials', href: '/tutorials' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'White Papers', href: '/white-papers' }
]

const legal = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
  { name: 'GDPR Compliance', href: '/gdpr' },
  { name: 'Security', href: '/security' }
]

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
    { name: 'Content Moderation AI', href: '/micro-saas#content-moderation' }
  ]
};
>>>>>>> main

const companyInfo = {
  name: 'Zion Tech Group',
  description: 'Leading provider of AI solutions, cloud services, and technology consulting. Transforming businesses through innovative technology.',
<<<<<<< HEAD
=======
ursor/website-audit-and-update-with-deployment-9cae
>>>>>>> main
>>>>>>> main
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown, DE 19709',
  hours: '24/7 Support Available'
};
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook }
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI, IT, and Micro SaaS solutions. We help businesses transform through cutting-edge technology and innovative solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+13024640950" className="hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-2" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
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
                    className="text-gray-300 hover:text-white transition-colors text-sm"
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
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              {industries.map((industry) => (
                <li key={industry.name}>
                  <Link
                    href={industry.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
>>>>>>> main
>>>>>>> main

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
<<<<<<< HEAD
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
<<<<<<< HEAD
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
>>>>>>> main
>>>>>>> main
          {/* Company Info */}
<<<<<<< HEAD
          <div className="lg:col-span-2">
<<<<<<< HEAD
            <Link href="/" className="flex items-center space-x-2 mb-6">
=======
            <div className="flex items-center space-x-2 mb-6">
>>>>>>> main
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
<<<<<<< HEAD
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group"
=======
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
=======
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
            </div>
          </div>

          {/* Services */}
          {Object.entries(services).map(([category, serviceList]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
<<<<<<< HEAD
                {serviceList.slice(0, 8).map((service) => (
=======
                {serviceList.map((service) => (
>>>>>>> main
                  <li key={service.name}>
                    <Link 
                      href={service.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
>>>>>>> main
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
                {serviceList.length > 8 && (
                  <li>
                    <Link 
                      href={`/${category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                    >
                      View All {category} →
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}

<<<<<<< HEAD
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
=======
<<<<<<< HEAD
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
=======
          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
>>>>>>> main
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
<<<<<<< HEAD
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Blog
=======
                <Link href="/team" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Our Team
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
                <Link href="/pricing" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Support
                </Link>
              </li>
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
            </ul>
>>>>>>> main
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
=======
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
>>>>>>> main
                Subscribe
              </button>
            </div>
          </div>
        </div>

<<<<<<< HEAD
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
=======
<<<<<<< HEAD
        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              <a href="https://facebook.com/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
>>>>>>> main
            </div>
=======
      {/* Bottom Bar */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap items-center space-x-6 mb-4 md:mb-0">
              <p className="text-gray-300 text-sm">
                © 2024 Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-4">
                {legal.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
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

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              <a href="https://facebook.com/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
>>>>>>> main
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Made with ❤️ for innovation
              </p>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
ursor/website-audit-and-update-with-deployment-9cae
>>>>>>> main
>>>>>>> main
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
>>>>>>> main
