import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ChevronUp, Zap, Brain, Cloud, Shield, Database, Cpu, Network, Eye, Leaf, Heart, Calendar, ShoppingCart, Building, Factory, Store, Truck, GraduationCap, FileText, BarChart3, Users, CreditCard, MessageSquare, Camera, Video, Music, BookOpen, Target, TrendingUp, PieChart, Activity, Globe, Bot, Settings, ArrowRight, Star, Users2, Rocket, Award, Shield as ShieldIcon, Globe as GlobeIcon, Zap as ZapIcon, Code } from 'lucide-react';
import { FooterNewsletter } from "@/components/FooterNewsletter";
import { 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Github, 
  Phone, 
  Mail, 
  MapPin,
  Globe,
  Building,
  Users,
  Zap,
  Code,
  Shield,
  BarChart3,
  Cloud,
  Brain,
  Eye,
  Lightbulb,
  Settings,
  HelpCircle,
  FileText,
  Handshake,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      services: [
        { name: "AI Development", link: "/ai-development" },
        { name: "Machine Learning", link: "/machine-learning" },
        { name: "Natural Language Processing", link: "/nlp" },
        { name: "Computer Vision", link: "/computer-vision" },
        { name: "AI Consulting", link: "/ai-consulting" }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      services: [
        { name: "Cloud Migration", link: "/cloud-migration" },
        { name: "DevOps Automation", link: "/devops" },
        { name: "Serverless Computing", link: "/serverless" },
        { name: "Container Orchestration", link: "/kubernetes" },
        { name: "Infrastructure as Code", link: "/iac" }
      ]
    },
    {
      title: "Security & Compliance",
      services: [
        { name: "Cybersecurity Assessment", link: "/cybersecurity" },
        { name: "Penetration Testing", link: "/penetration-testing" },
        { name: "Compliance Management", link: "/compliance" },
        { name: "Identity & Access Management", link: "/iam" },
        { name: "Data Protection", link: "/data-protection" }
      ]
    },
    {
      title: "Data & Analytics",
      services: [
        { name: "Big Data Engineering", link: "/big-data" },
        { name: "Business Intelligence", link: "/business-intelligence" },
        { name: "Data Visualization", link: "/data-visualization" },
        { name: "Predictive Analytics", link: "/predictive-analytics" },
        { name: "Data Governance", link: "/data-governance" }
      ]
    }
  ];

  const industrySolutions = [
    { name: "Healthcare", link: "/healthcare", description: "Digital health solutions" },
    { name: "Fintech", link: "/fintech", description: "Financial technology" },
    { name: "Education", link: "/education", description: "EdTech platforms" },
    { name: "Manufacturing", link: "/manufacturing", description: "Industry 4.0" },
    { name: "Retail", link: "/retail", description: "E-commerce solutions" },
    { name: "Government", link: "/government", description: "Public sector tech" }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    website: 'https://ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  return (
    <footer className="bg-zion-blue-dark border-t border-zion-blue-light">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top Section - Logo and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                ZION TECH GROUP
              </span>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-lg text-lg leading-relaxed">
              The world's leading technology marketplace dedicated to high-tech and artificial intelligence solutions. 
              We connect businesses with cutting-edge technology services and expert talent.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <Phone className="h-4 w-4 text-zion-cyan" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <Mail className="h-4 w-4 text-zion-cyan" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start space-x-3 text-zion-slate-light">
                <MapPin className="h-4 w-4 text-zion-cyan mt-0.5" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://twitter.com/lovable_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-full hover:bg-zion-purple/10"
                aria-label="Twitter"
                title="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/zion-marketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-full hover:bg-zion-purple/10"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/zionmarketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-full hover:bg-zion-purple/10"
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-full hover:bg-zion-purple/10"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 rounded-full hover:bg-zion-purple/10"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-4 text-lg">Stay Updated</h3>
            <p className="text-zion-slate-light mb-6">
              Get the latest insights on AI, technology trends, and marketplace opportunities delivered to your inbox.
            </p>
            <FooterNewsletter />
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-center p-3 bg-zion-purple/10 rounded-lg">
                <div className="text-2xl font-bold text-zion-cyan">500+</div>
                <div className="text-xs text-zion-slate-light">Expert Talents</div>
              </div>
              <div className="text-center p-3 bg-zion-purple/10 rounded-lg">
                <div className="text-2xl font-bold text-zion-cyan">1000+</div>
                <div className="text-xs text-zion-slate-light">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-12">
          <h3 className="text-white font-semibold mb-6 text-xl text-center">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((category, index) => (
              <div key={index} className="space-y-3">
                <h4 className="text-zion-cyan font-semibold flex items-center">
                  {category.title === "AI & Machine Learning" && <Brain className="h-4 w-4 mr-2" />}
                  {category.title === "Cloud & Infrastructure" && <Cloud className="h-4 w-4 mr-2" />}
                  {category.title === "Security & Compliance" && <Shield className="h-4 w-4 mr-2" />}
                  {category.title === "Data & Analytics" && <BarChart3 className="h-4 w-4 mr-2" />}
                  {category.title}
                </h4>
                <ul className="space-y-2">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex}>
                      <Link 
                        to={service.link} 
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center group"
                      >
                        <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Solutions */}
        <div className="mb-12">
          <h3 className="text-white font-semibold mb-6 text-xl text-center">Industry Solutions</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industrySolutions.map((solution, index) => (
              <Link
                key={index}
                to={solution.link}
                className="group p-4 bg-zion-purple/5 rounded-lg hover:bg-zion-purple/10 transition-colors text-center"
              >
                <div className="text-zion-cyan font-medium group-hover:text-white transition-colors">
                  {solution.name}
                </div>
                <div className="text-xs text-zion-slate-light mt-1">
                  {solution.description}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Additional Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <Building className="h-4 w-4 mr-2" />
              Company
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.link} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <FileText className="h-4 w-4 mr-2" />
              Resources
            </h4>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link 
                    to={resource.link} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <HelpCircle className="h-4 w-4 mr-2" />
              Support
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact Support
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/status" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  System Status
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright and Legal */}
      <div className="border-t border-zion-blue-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-zion-slate-light text-sm">
                &copy; {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <p className="text-zion-slate-light text-xs mt-1">
                Empowering businesses with cutting-edge technology solutions
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Cookie Policy
              </Link>
              <Link to="/accessibility" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
          
          <div className="flex space-x-8">
            <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors duration-200">
              Cookie Policy
            </Link>
            <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors duration-200">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-full shadow-2xl shadow-zion-cyan/30 hover:shadow-zion-cyan/50 transition-all duration-300 hover:scale-110 group"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5 group-hover:animate-bounce" />
      </button>
    </footer>
  );
};

// Social Media Icons Component
const SocialIcon = ({ name }: { name: string }) => {
  const icons = {
    twitter: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.328v15.344C1 18.4 1.595 19 2.328 19h15.34c.734 0 1.332-.6 1.332-1.328V2.328C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
      </svg>
    ),
    github: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
      </svg>
    ),
    youtube: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
      </svg>
    )
  };

  return icons[name as keyof typeof icons] || null;
};

export default Footer;
