import React from 'react',
import Link from 'next/link',
import {,
  Mail,;
  Clock,;
  Facebook,;
  Twitter,;
  Linkedin,;
  Instagram,;
  Github,;
  ExternalLink,
} from 'lucide-react',
,
const services = {,
  'AI Solutions': [,
    { name: 'AI-Powered Email Responder', href: '/ai-services#ai-email-responder' ,},;
    { name: 'Predictive Analytics Platform', href: '/ai-services#predictive-analytics' ,},;
    { name: 'Intelligent Chatbot System', href: '/ai-services#intelligent-chatbot' ,},;
    { name: 'Computer Vision Solutions', href: '/ai-services#computer-vision' ,},;
    { name: 'AI Content Generation', href: '/ai-services#ai-content-generation' ,},;
    { name: 'Voice AI Assistant', href: '/ai-services#voice-ai-assistant' ,},;
    { name: 'AI Fraud Detection', href: '/ai-services#ai-fraud-detection' ,},;
    { name: 'AI Drug Discovery', href: '/ai-services#ai-drug-discovery' ,},;
    { name: 'AI Climate Change Mitigation', href: '/ai-services#ai-climate-mitigation' ,},;
    { name: 'AI Space Colonization', href: '/ai-services#ai-space-colonization' ,},;
    { name: 'AI Universal Problem Solver', href: '/ai-services#ai-universal-problem-solver' ,},;
    { name: 'AI Consciousness Transfer', href: '/ai-services#ai-consciousness-transfer' ,};
  ],;
  'IT Services': [,
    { name: 'Cloud Infrastructure Management', href: '/it-services#cloud-infrastructure' ,},;
    { name: 'Cybersecurity Solutions', href: '/it-services#cybersecurity' ,},;
    { name: 'Network Infrastructure', href: '/it-services#network-infrastructure' ,},;
    { name: 'Database Management', href: '/it-services#database-management' ,},;
    { name: 'DevOps & CI/CD', href: '/it-services#devops-cicd' ,},;
    { name: 'Edge Computing Infrastructure', href: '/it-services#edge-computing' ,},;
    { name: '5G Network Implementation', href: '/it-services#5g-networks' ,},;
    { name: 'Blockchain Infrastructure', href: '/it-services#blockchain' ,},;
    { name: 'IoT Platform Development', href: '/it-services#iot' ,},;
    { name: 'Microservices Architecture', href: '/it-services#microservices' ,},;
    { name: 'Digital Transformation', href: '/it-services#digital-transformation' ,},;
    { name: 'Legacy System Modernization', href: '/it-services#legacy-modernization' ,};
  ],;
  'Micro SaaS': [,
    { name: 'Cloud Cost Guard', href: '/micro-saas#cloud-cost-guard' ,},;
    { name: 'LLM Evaluation Suite', href: '/micro-saas#llm-evaluation' ,},;
    { name: 'Customer Feedback App', href: '/micro-saas#customer-feedback' ,},;
    { name: 'API Rate Limiting', href: '/micro-saas#api-rate-limiting' ,},;
    { name: 'Content Moderation AI', href: '/micro-saas#content-moderation' ,},;
    { name: 'Workflow Automation', href: '/micro-saas#workflow-automation' ,},;
    { name: 'AI Lead Scoring', href: '/micro-saas#ai-lead-scoring' ,},;
    { name: 'Social Media Scheduler', href: '/micro-saas#social-media-scheduler' ,},;
    { name: 'AI Mental Health Assistant', href: '/micro-saas#ai-mental-health' ,},;
    { name: 'Smart Waste Management', href: '/micro-saas#smart-waste-management' ,},;
    { name: 'Blockchain Voting Platform', href: '/micro-saas#blockchain-voting' ,},;
    { name: 'AI Sleep Optimization', href: '/micro-saas#ai-sleep-optimization' ,};
  ],
};
,
const contactInfo = {,
  phone: '+1 302 464 0950',;
  email: 'kleber@ziontechgroup.com',;
  address: '364 E Main St STE 1008, Middletown DE 19709',
};
,
const socialLinks = [,
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin ,},;
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter ,},;
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github ,},;
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook ,},;
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram ,};
],
,
export default function Footer() {,
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, Instagram, Zap, Brain, Server, Shield, Users, Building2, FileText, Rocket, Target, Atom, Network, Cloud, Lock, TrendingUp, Workflow, MessageCircle, DollarSign, Briefcase, ArrowUp, Sparkles, Home, Truck, Factory, Heart, BookOpen, BarChart3, Cpu, Leaf, Satellite, HelpCircle } from 'lucide-react',
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, Instagram, Youtube } from 'lucide-react',
,
const Footer: React.FC = () => {,
  const currentYear = new Date().getFullYear(),
,
  const footerSections = {,
    company: {,
      title: 'Company',;
      links: [,
        { name: 'About Us', href: '/about' ,},;
        { name: 'Our Team', href: '/team' ,},;
        { name: 'Careers', href: '/careers' ,},;
        { name: 'Contact', href: '/contact' ,},;
        { name: 'Blog', href: '/blog' ,};
      ],
    },;
    services: {,
      title: 'Services',;
      links: [,
        { name: 'AI Services', href: '/ai-services' ,},;
        { name: 'IT Services', href: '/it-services' ,},;
        { name: 'Micro SaaS', href: '/micro-saas' ,},;
        { name: 'Blockchain', href: '/blockchain' ,},;
        { name: 'Cybersecurity', href: '/cybersecurity' ,};
      ],
    },;
  Phone,;
  MapPin,;
  Linkedin,;
  Twitter,;
  Github,;
  Facebook,;
  Instagram,;
  ArrowRight,;
  Brain,;
  Network,;
  Cloud,;
  Shield,;
  Users,;
  Building2,;
  FileText,;
  Rocket,;
  Target,;
  Atom,;
  TrendingUp,;
  Workflow,;
  MessageCircle,;
  DollarSign,;
  Briefcase,;
  ArrowUp,;
  Sparkles,;
  Home,;
  Truck,;
  Factory,;
  Heart,;
  BookOpen,;
  BarChart3,;
  Cpu,;
  Leaf,;
  Satellite,;
  HelpCircle,
} from 'lucide-react',
,
const Footer: React.FC = () => {,
  const services = {,
    'AI Solutions': [,
      { name: 'AI-Powered Email Responder', href: '/ai-services#ai-email-responder' ,},;
      { name: 'AI Content Generation', href: '/ai-services#ai-content-generation' ,},;
      { name: 'Computer Vision Solutions', href: '/ai-services#computer-vision' ,},;
      { name: 'Natural Language Processing', href: '/ai-services#nlp' ,},;
      { name: 'Machine Learning Models', href: '/ai-services#machine-learning' ,},;
      { name: 'AI Analytics Platform', href: '/ai-services#ai-analytics' ,};
    ],;
    'IT Services': [,
      { name: 'Cloud Migration', href: '/it-services#cloud-migration' ,},;
      { name: 'Cybersecurity Solutions', href: '/it-services#cybersecurity' ,},;
      { name: 'DevOps Automation', href: '/it-services#devops' ,},;
      { name: 'Infrastructure Management', href: '/it-services#infrastructure' ,},;
      { name: 'Data Analytics', href: '/it-services#data-analytics' ,},;
      { name: 'Network Security', href: '/it-services#network-security' ,};
    ],;
    'Micro SAAS': [,
      { name: 'CRM Solutions', href: '/micro-saas#crm' ,},;
      { name: 'Project Management', href: '/micro-saas#project-management' ,},;
      { name: 'Email Marketing', href: '/micro-saas#email-marketing' ,},;
      { name: 'AI Content Tools', href: '/micro-saas#ai-content-tools' ,},;
      { name: 'Analytics Dashboard', href: '/micro-saas#analytics-dashboard' ,},;
      { name: 'Automation Tools', href: '/micro-saas#automation-tools' ,};
    ],
  };
,
  const company = [,
    { name: 'About Us', href: '/about' ,},;
    { name: 'Our Team', href: '/team' ,},;
    { name: 'Careers', href: '/careers' ,},;
    { name: 'Case Studies', href: '/case-studies' ,},;
    { name: 'Blog', href: '/blog' ,},;
    { name: 'Press', href: '/press' ,};
  ],
,
  const resources = [,
    { name: 'Documentation', href: '/docs' ,},;
    { name: 'API Reference', href: '/api-docs' ,},;
    { name: 'Tutorials', href: '/tutorials' ,},;
    { name: 'Support', href: '/support' ,},;
    { name: 'FAQ', href: '/faq' ,},;
    { name: 'Contact', href: '/contact' ,};
  ],
,
    solutions: {,
      title: 'Solutions',;
      links: [,
        { name: 'Enterprise', href: '/enterprise' ,},;
        { name: 'Startup', href: '/solutions/startup' ,},;
        { name: 'E-commerce', href: '/ecommerce' ,},;
        { name: 'Healthcare', href: '/industries/healthcare' ,},;
        { name: 'Finance', href: '/industries/finance' ,};
      ],
    },;
    resources: {,
      title: 'Resources',;
      links: [,
        { name: 'Documentation', href: '/docs' ,},;
        { name: 'API Reference', href: '/api-docs' ,},;
        { name: 'Case Studies', href: '/case-studies' ,},;
        { name: 'White Papers', href: '/white-papers' ,},;
        { name: 'Support', href: '/support' ,};
      ],
    };
  };
,
  const socialLinks = [,
    { name: 'LinkedIn', href: '#', icon: Linkedin ,},;
    { name: 'Twitter', href: '#', icon: Twitter ,},;
    { name: 'GitHub', href: '#', icon: Github ,},;
    { name: 'Facebook', href: '#', icon: Facebook ,},;
    { name: 'Instagram', href: '#', icon: Instagram ,};
  ],
,
  return (,
    <footer className="bg-gray-900 text-white">,
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">,
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">,
          {/* Company Info */,};
          <div className="lg: col-span-2">,
            <div className="flex items-center mb-4">,
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-2">,
                <Brain className="h-5 w-5 text-white" />,
              </div>,
              <span className="text-xl font-bold">Zion Tech Group</span>,
            </div>,
            <p className="text-gray-300 mb-6 max-w-md">,
              Leading technology solutions provider delivering innovative AI, IT, and Micro SAAS services,
              to businesses worldwide. Empowering digital transformation and driving innovation.,
            </p>,
            <div className="space-y-2 text-sm text-gray-300">,
              <div className="flex items-center">,
                <Phone className="h-4 w-4 mr-2" />,
                <span>+1 302 464 0950</span>,
              </div>,
              <div className="flex items-center">,
                <Mail className="h-4 w-4 mr-2" />,
                <span>kleber@ziontechgroup.com</span>,
              </div>,
              <div className="flex items-center">,
                <MapPin className="h-4 w-4 mr-2" />,
                <span>364 E Main St STE 1008, Middletown DE 19709</span>,
      <div className="container mx-auto px-4 py-12">,
        <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-5 gap-8">,
          {/* Company Info */,};
          <div className="lg: col-span-2">,
            <div className="flex items-center mb-4">,
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">,
                <span className="text-white font-bold text-xl">Z</span>,
              </div>,
              <div>,
                <div className="text-xl font-bold">Zion Tech Group</div>,
                <div className="text-sm text-gray-400">Technology Solutions</div>,
              </div>,
            </div>,
            <p className="text-gray-300 mb-6 max-w-md">,
              Leading provider of AI solutions, cloud services, and technology consulting.,
              Transforming businesses through innovation and cutting-edge technology.,
            </p>,
            <div className="space-y-2">,
              <div className="flex items-center">,
                <Phone className="w-4 h-4 mr-2 text-blue-400" />,
                <a href="tel: +13024640950" className="hover:text-blue-400 transition-colors">,
                  +1 302 464 0950,
                </a>,
              </div>,
              <div className="flex items-center">,
                <Mail className="w-4 h-4 mr-2 text-blue-400" />,
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-400 transition-colors">,
                  kleber@ziontechgroup.com,
                </a>,
              </div>,
              <div className="flex items-center">,
                <MapPin className="w-4 h-4 mr-2 text-blue-400" />,
                <span>364 E Main St STE 1008 Middletown DE 19709</span>,
              </div>,
            </div>,
          </div>,
            <h3 className="text-lg font-semibold mb-4">Services</h3>,
            <div className="space-y-4">,
              {Object.entries(services).map(([category, links]) => (,
                <div key={category}>,
                  <h4 className="text-sm font-medium text-blue-400 mb-2">{category}</h4>,
                  <ul className="space-y-1">,
                    {links.slice(0, 3).map((link) => (,
                      <li key={link.name}>,
                        <Link,
                          href={link.href};
                          className="text-sm text-gray-300 hover: text-white transition-colors",
                        >,
            <h3 className="text-lg font-semibold mb-6">Services</h3>,
            <div className="space-y-4">,
              {footerSections.map((section, index) => (,
                <div key={index}>,
                  <div className="flex items-center mb-3">,
                    <section.icon className="h-5 w-5 text-blue-400 mr-2" />,
                    <h4 className="font-medium text-gray-200">{section.title}</h4>,
                  </div>,
                  <ul className="space-y-2 ml-7">,
                    {section.links.map((link, linkIndex) => (,
                      <li key={linkIndex}>,
                        <Link,
                          href={link.href};
                          className="text-gray-300 hover: text-blue-400 transition-colors duration-200 flex items-center",
                        >,
                          <link.icon className="h-4 w-4 mr-2" />,
                          {link.name,};
                        </Link>,
                      </li>,
                    ))};
                  </ul>,
                </div>,
              ))};
            </div>,
          </div>,
          {/* Company */};
          <div>,
            <h3 className="text-lg font-semibold mb-4">Company</h3>,
            <ul className="space-y-2">,
              {company.map((link) => (,
                <li key={link.name}>,
                  <Link,
                    href={link.href};
                    className="text-sm text-gray-300 hover: text-white transition-colors",
                  >,
            <h3 className="text-lg font-semibold mb-6">Company</h3>,
            <ul className="space-y-3">,
              {companyLinks.map((link, index) => (,
                <li key={index}>,
                  <Link,
                    href={link.href};
                    className="text-gray-300 hover: text-blue-400 transition-colors duration-200",
                  >,
                    {link.name,};
                  </Link>,
                </li>,
              ))};
            </ul>,
          </div>,
          {/* Support */};
          <div>,
            <h3 className="text-lg font-semibold mb-6">Support</h3>,
            <ul className="space-y-3">,
              {supportLinks.map((link, index) => (,
                <li key={index}>,
                  <Link,
                    href={link.href};
                    className="text-gray-300 hover: text-blue-400 transition-colors duration-200",
                  >,
                    {link.name,};
                  </Link>,
                </li>,
              ))};
            </ul>,
          {/* Legal */};
          <div>,
            <h3 className="text-lg font-semibold mb-6">Legal</h3>,
            <ul className="space-y-3">,
              {legalLinks.map((link, index) => (,
                <li key={index}>,
                  <Link,
                    href={link.href};
                    className="text-gray-300 hover: text-blue-400 transition-colors duration-200",
                  >,
                    {link.name,};
                  </Link>,
                </li>,
              ))};
            </ul>,
            {/* Social Links */};
            <div className="mt-6">,
              <h4 className="text-sm font-medium text-blue-400 mb-3">Follow Us</h4>,
              <div className="flex space-x-4">,
                {socialLinks.map((social) => (,
                  <a,
                    key={social.name};
                    href={social.href};
                    className="text-gray-400 hover: text-white transition-colors",
                    aria-label={social.name,};
                  >,
                    <social.icon className="h-5 w-5" />,
                  </a>,
                ))};
              </div>,
            </div>,
          </div>,
        </div>,
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-8">,
          <div className="flex flex-col md:flex-row items-center justify-between">,
            <div className="mb-4 md:mb-0">,
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>,
              <p className="text-gray-300">Get the latest news and updates from Zion Tech Group</p>,
            </div>,
            <div className="flex w-full md:w-auto">,
              <input,
                type="email",
                placeholder="Enter your email",
                className="flex-1 md:w-80 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
              />,
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-r-lg transition-colors duration-200">,
                Subscribe,
              </button>,
          {/* Footer Sections */,};
          {Object.entries(footerSections).map(([key, section]) => (,
            <div key={key}>,
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>,
              <ul className="space-y-2">,
                {section.links.map((link) => (,
                  <li key={link.name}>,
                    <Link,
                      href={link.href};
                      className="text-gray-300 hover: text-white transition-colors",
                    >,
                      {link.name,};
                    </Link>,
                  </li>,
                ))};
              </ul>,
            </div>,
          ))};
        </div>,
        {/* Social Links */};
        <div className="border-t border-gray-800 mt-8 pt-8">,
          <div className="flex flex-col md: flex-row justify-between items-center">,
            <div className="flex space-x-6 mb-4 md:mb-0">,
              {socialLinks.map((social) => (,
                <a,
                  key={social.name,};
                  href={social.href};
                  target="_blank",
                  rel="noopener noreferrer",
                  className="text-gray-400 hover: text-white transition-colors",
                  aria-label={social.name,};
                >,
                  <social.icon className="w-5 h-5" />,
                </a>,
              ))};
            </div>,
            <div className="text-gray-400 text-sm">,
              © {currentYear} Zion Tech Group. All rights reserved.,
            </div>,
          </div>,
        </div>,
      </div>,
        {/* Bottom Section */};
        <div className="border-t border-gray-800 mt-8 pt-8">,
          <div className="flex flex-col md: flex-row justify-between items-center">,
            <div className="text-sm text-gray-400 mb-4 md:mb-0">,
              © 2024 Zion Tech Group. All rights reserved.,
            </div>,
      {/* Bottom Footer */,};
      <div className="border-t border-gray-800">,
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-6">,
          <div className="flex flex-col md:flex-row items-center justify-between">,
            <div className="text-gray-400 text-sm mb-4 md:mb-0">,
              © {currentYear,} Zion Tech Group. All rights reserved.,
            </div>,
            <div className="flex items-center space-x-6">,
              {socialLinks.map((social, index) => (,
                <a,
                  key={index};
                  href={social.href};
                  target="_blank",
                  rel="noopener noreferrer",
                  className="text-gray-400 hover: text-blue-400 transition-colors duration-200",
                  aria-label={social.name,};
                >,
                  <social.icon className="h-5 w-5" />,
                </a>,
              ))};
            <div className="flex space-x-6 text-sm">,
              <Link href="/privacy" className="text-gray-400 hover: text-white transition-colors">,
                Privacy Policy,
              </Link>,
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">,
                Terms of Service,
              </Link>,
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">,
                Cookie Policy,
              </Link>,
            </div>,
          </div>,
        </div>,
      </div>,
    </footer>,
  ),
,};
,
export default Footer,
};
,
export default Footer,
    </footer>,
  ),
};
,
export default Footer,
,
}}))))),