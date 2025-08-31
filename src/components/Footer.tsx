import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Atom, 
  Rocket, 
  Code, 
  Globe, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Github,
  ArrowRight,
  Heart,
  Star,
  Award,
  Users,
  CheckCircle,
  Target,
  BookOpen,
  HelpCircle,
  MessageCircle,
  DollarSign
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const companyInfo = {
    name: "Zion Tech Group",
    description: "Leading provider of AI-powered technology solutions, quantum computing, and digital transformation services for enterprises worldwide.",
    address: "364 E Main St STE 1008, Middletown DE 19709",
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM EST"
  };

  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      services: [
        { name: "AI Business Intelligence", href: "/services/ai-business-intelligence" },
        { name: "AI Compliance Assistant", href: "/services/ai-compliance-assistant" },
        { name: "AI Sales Copilot", href: "/services/ai-sales-copilot" },
        { name: "AI Content Marketing", href: "/services/ai-content-marketing-suite" },
        { name: "AI Customer Support", href: "/services/ai-customer-support-automation" },
        { name: "AI Project Management", href: "/services/ai-project-management" },
        { name: "AI Research Assistant", href: "/services/ai-autonomous-research-assistant" },
        { name: "AI Financial Trading", href: "/services/ai-financial-trading-platform" },
        { name: "AI Healthcare Platform", href: "/services/ai-healthcare-platform" },
        { name: "AI Quantum Hybrid", href: "/services/ai-quantum-hybrid-platform" }
      ]
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      services: [
        { name: "AI Cybersecurity Platform", href: "/services/ai-cybersecurity-platform" },
        { name: "Security Headers & CSP", href: "/services/security-headers-csp" },
        { name: "DSR Privacy Portal", href: "/services/dsr-portal" },
        { name: "Zero Trust Network", href: "/services/zero-trust-network-access" },
        { name: "SOC2 Compliance", href: "/services/soc2-compliance-automation" }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      services: [
        { name: "Cloud DevOps", href: "/services/cloud-devops" },
        { name: "IT Infrastructure", href: "/services/it-infrastructure" },
        { name: "FinOps Advisor", href: "/services/finops-advisor" },
        { name: "Cloud Migration", href: "/services/cloud-migration-services" },
        { name: "Edge Computing", href: "/services/iot-edge-computing" }
      ]
    },
    {
      title: "Quantum Computing",
      icon: Atom,
      services: [
        { name: "Quantum Edge Computing", href: "/services/quantum-edge-computing" },
        { name: "Quantum Neural Networks", href: "/services/quantum-neural-networks" },
        { name: "Quantum Financial Trading", href: "/services/quantum-financial-trading" },
        { name: "AI Quantum Hybrid", href: "/services/ai-quantum-hybrid-platform" }
      ]
    },
    {
      title: "Digital Transformation",
      icon: Rocket,
      services: [
        { name: "Digital Twin Solutions", href: "/services/digital-twin" },
        { name: "IoT Edge Computing", href: "/services/iot-edge-computing" },
        { name: "Blockchain Solutions", href: "/services/blockchain-enterprise-solutions" },
        { name: "5G Enterprise Solutions", href: "/services/5g-enterprise-solutions" }
      ]
    },
    {
      title: "Micro SaaS",
      icon: Code,
      services: [
        { name: "Custom SaaS Development", href: "/services/micro-saas-solutions" },
        { name: "API Development", href: "/services/api-development" },
        { name: "Mobile App Development", href: "/services/mobile-development" },
        { name: "Web Application Development", href: "/services/web-development" }
      ]
    }
  ];

  const solutions = [
    { name: "Healthcare Solutions", href: "/solutions/healthcare" },
    { name: "Financial Solutions", href: "/solutions/financial" },
    { name: "Manufacturing Solutions", href: "/solutions/manufacturing" },
    { name: "Government Solutions", href: "/solutions/government" },
    { name: "Retail Solutions", href: "/solutions/retail" },
    { name: "Education Solutions", href: "/solutions/education" },
    { name: "Startup Solutions", href: "/solutions/startup" },
    { name: "Enterprise Solutions", href: "/enterprise" }
  ];

  const resources = [
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "White Papers", href: "/white-papers" },
    { name: "Webinars", href: "/webinars" },
    { name: "Documentation", href: "/documentation" },
    { name: "API Reference", href: "/api" },
    { name: "Help Center", href: "/help" },
    { name: "FAQ", href: "/faq" },
    { name: "Training", href: "/training" },
    { name: "Tutorials", href: "/tutorials" },
    { name: "Research & Development", href: "/research-development" }
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Leadership", href: "/leadership" },
    { name: "Careers", href: "/careers" },
    { name: "Partners", href: "/partners" },
    { name: "News", href: "/news" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
    { name: "Request Quote", href: "/request-quote" },
    { name: "Schedule Demo", href: "/schedule-demo" }
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Accessibility", href: "/accessibility" },
    { name: "Security", href: "/security" },
    { name: "Compliance", href: "/compliance" }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/ziontechgroup", color: "hover:text-blue-600" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/ziontechgroup", color: "hover:text-blue-400" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/ziontechgroup", color: "hover:text-blue-700" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/ziontechgroup", color: "hover:text-pink-600" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/ziontechgroup", color: "hover:text-red-600" },
    { name: "GitHub", icon: Github, href: "https://github.com/ziontechgroup", color: "hover:text-gray-700 dark:hover:text-gray-300" }
  ];

  const achievements = [
    { number: "500+", label: "Projects Completed", icon: CheckCircle },
    { number: "50+", label: "Team Members", icon: Users },
    { number: "25+", label: "Countries Served", icon: Globe },
    { number: "99%", label: "Client Satisfaction", icon: Star },
    { number: "15+", label: "Years Experience", icon: Award }
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: '+1 (302) 464-0950',
      href: 'tel:+13024640950'
    },
    {
      icon: Mail,
      text: 'kleber@ziontechgroup.com',
      href: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: MapPin,
      text: '364 E Main St STE 1008, Middletown DE 19709',
      href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008,+Middletown+DE+19709'
    },
    {
      icon: Clock,
      text: 'Mon-Fri: 9AM-6PM EST',
      href: '#'
    }
  ];

  const quickLinks = [
    { name: "Get Started", href: "/get-started", icon: Rocket },
    { name: "Pricing", href: "/pricing", icon: DollarSign },
    { name: "Support", href: "/help", icon: HelpCircle },
    { name: "Documentation", href: "/documentation", icon: BookOpen }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Zion Tech Group</h3>
                <p className="text-blue-400 text-sm">Future Technology Solutions</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              {companyInfo.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((contact) => (
                <div key={contact.text} className="flex items-center space-x-3 text-gray-300">
                  <contact.icon className="w-4 h-4 text-blue-400" />
                  <a href={contact.href} className="hover:text-blue-400 transition-colors">
                    {contact.text}
                  </a>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-slate-800 rounded-lg text-gray-400 transition-all duration-200 ${social.color} hover:bg-slate-700`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white flex items-center space-x-2">
              <Zap className="w-5 h-5 text-blue-400" />
              <span>Services</span>
            </h4>
            <div className="space-y-4">
              {serviceCategories.slice(0, 3).map((category) => (
                <div key={category.title} className="space-y-2">
                  <div className="flex items-center space-x-2 text-blue-400">
                    <category.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{category.title}</span>
                  </div>
                  <div className="ml-6 space-y-1">
                    {category.services.slice(0, 3).map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white flex items-center space-x-2">
              <Target className="w-5 h-5 text-green-400" />
              <span>Solutions</span>
            </h4>
            <div className="space-y-2">
              {solutions.slice(0, 8).map((solution) => (
                <Link
                  key={solution.name}
                  to={solution.href}
                  className="block text-sm text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  {solution.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-purple-400" />
              <span>Resources</span>
            </h4>
            <div className="space-y-2">
              {resources.slice(0, 8).map((resource) => (
                <Link
                  key={resource.name}
                  to={resource.href}
                  className="block text-sm text-gray-300 hover:text-purple-400 transition-colors duration-200"
                >
                  {resource.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white flex items-center space-x-2">
              <Users className="w-5 h-5 text-cyan-400" />
              <span>Company</span>
            </h4>
            <div className="space-y-2">
              {company.slice(0, 8).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="mt-16 pt-8 border-t border-slate-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Quick Access</h3>
            <p className="text-gray-400">Get started with our services quickly</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="flex flex-col items-center p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  <link.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-medium text-center group-hover:text-blue-400 transition-colors">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-16 pt-8 border-t border-slate-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Our Achievements</h3>
            <p className="text-gray-400">Delivering exceptional results for our clients worldwide</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {achievements.map((achievement) => (
              <div key={achievement.label} className="text-center">
                <div className="flex justify-center mb-3">
                  <achievement.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{achievement.number}</div>
                <div className="text-sm text-gray-400">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-slate-700">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Get the latest insights on AI, quantum computing, and technology trends
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span className="hidden sm:inline">for innovation</span>
            </div>
            
            <div className="flex space-x-6">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}