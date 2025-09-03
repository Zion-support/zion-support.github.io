<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import {

  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Linkedin, 
  Twitter, 
  Github,
  Facebook,
  Instagram,
  Zap,
  Brain,
  Server,
  Shield,
  Users,
  Building2,
  FileText,
  Rocket,
  Target,
  Atom,
  Network,
  Cloud,
  Lock,
  TrendingUp,
  Workflow,
  MessageCircle,
  Calendar,
  PenTool,
  Activity,
  Cpu,
  Wifi,
  Satellite,
  Handshake,
  BookOpen,
  Video,
  GraduationCap,
  Lightbulb,
  Star,
  HelpCircle,
  BarChart3,
  ShoppingCart,
  Heart,
  Factory,
  DollarSign,
  Briefcase,
  Award,
  ExternalLink,
  ArrowUp,
  Sparkles,
  CheckCircle,
  Monitor,
  Headphones,
  Truck,
  Search,
  Layers,
  Database,
  Home,
  Leaf
} from 'lucide-react';

export function Footer() {

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {

      title: "Pricing & Plans",
      icon: DollarSign,
      links: [
        { name: "Comprehensive Pricing 2025", href: "/comprehensive-pricing-guide-2025", icon: DollarSign },
        { name: "Pricing Overview", href: "/pricing", icon: BarChart3 },
        { name: "Get Custom Quote", href: "/contact", icon: MessageCircle },
      ]
    },
    {
      title: "AI & Automation Services",
      icon: Brain,
      links: [
        { name: "AI Business Intelligence", href: "/services/ai-business-intelligence-dashboard", icon: BarChart3 },
        { name: "AI Customer Support", href: "/services/ai-customer-support-automation", icon: MessageCircle },
        { name: "AI Project Management", href: "/services/ai-project-management-platform", icon: Workflow },
        { name: "Enhanced Services 2025", href: "/enhanced-services-showcase-2025", icon: Star },
        { name: "AI Marketing Automation", href: "/services/ai-marketing-automation-platform", icon: TrendingUp },
        { name: "AI Enterprise Automation", href: "/services/ai-enterprise-automation-platform", icon: Building2 },
        { name: "AI Workflow Orchestrator", href: "/services/ai-workflow-orchestrator", icon: Workflow },
        { name: "AI Financial Trading", href: "/services/ai-financial-trading-platform", icon: TrendingUp },
        { name: "AI Healthcare Analytics", href: "/services/ai-healthcare-analytics-platform", icon: Heart },
        { name: "AI Educational Content Creation", href: "/services/ai-educational-content-creation-platform", icon: BookOpen },
        { name: "AI Legal Automation", href: "/services/ai-legal-document-automation-platform", icon: FileText },
        { name: "AI Legal Research Platform", href: "/services/ai-autonomous-legal-research-platform", icon: FileText },
        { name: "AI HR Platform", href: "/services/ai-hr-platform", icon: Users },
        { name: "AI Real Estate Investment Analytics", href: "/services/ai-real-estate-investment-analytics-platform", icon: Home },
        { name: "AI Autonomous Logistics", href: "/services/ai-autonomous-logistics-platform", icon: Truck },
        { name: "AI Enterprise Resource Planning", href: "/services/ai-enterprise-resource-planning", icon: Database },
        { name: "AI Autonomous Manufacturing", href: "/services/ai-autonomous-manufacturing-platform", icon: Factory },
        { name: "AI Quantum Neural Network", href: "/services/ai-quantum-neural-network-platform", icon: Atom },
        { name: "AI Space Technology", href: "/services/ai-space-technology-platform", icon: Satellite },
        { name: "AI Cybersecurity", href: "/services/ai-cybersecurity-threat-intelligence", icon: Shield }
      ]
    },
    {

      title: "Quantum Computing",
      icon: Atom,
      links: [
        { name: "Quantum AI Platform", href: "/services/quantum-ai-platform", icon: Brain },
        { name: "Quantum Trading Platform", href: "/services/quantum-ai-trading-platform", icon: TrendingUp },
        { name: "Quantum Computing as a Service", href: "/services/quantum-computing-as-a-service", icon: Cloud },
        { name: "Quantum Machine Learning", href: "/services/quantum-machine-learning", icon: Cpu },
        { name: "Quantum Edge Computing", href: "/services/quantum-edge-computing-solutions", icon: Network }
      ]
    },
    {

      title: "IT Infrastructure",
      icon: Server,
      links: [
        { name: "Cloud DevOps", href: "/services/cloud-devops", icon: Cloud },
        { name: "IT Infrastructure Management", href: "/services/it-infrastructure-management", icon: Server },
        { name: "Cybersecurity Solutions", href: "/services/cybersecurity", icon: Shield },
        { name: "Digital Transformation", href: "/services/digital-transformation", icon: Rocket },
        { name: "Green IT Solutions", href: "/services/green-it", icon: Leaf },
        { name: "Space Technology", href: "/services/space-tech", icon: Satellite }
      ]
    },
    {

      title: "Micro SAAS Solutions",
      icon: Building2,
      links: [
        { name: "Micro CRM", href: "/services/micro-crm", icon: Users },
        { name: "Micro SAAS Platform", href: "/services/micro-saas-solutions", icon: Building2 },
        { name: "Micro SAAS Solutions Comprehensive", href: "/services/micro-saas-solutions-comprehensive", icon: Layers },
        { name: "Micro SAAS Innovation Hub", href: "/micro-saas-innovation-hub-2029", icon: Sparkles }
      ]
    }
  ];

  const quickLinks = [
    { name: "About Us", href: "/about", icon: Building2 },
    { name: "Services", href: "/services", icon: Server },
    { name: "Pricing", href: "/pricing", icon: DollarSign },
    { name: "Contact", href: "/contact", icon: MessageCircle },
    { name: "Careers", href: "/careers", icon: Briefcase },
    { name: "Blog", href: "/blog", icon: FileText },
    { name: "Support", href: "/help-center", icon: HelpCircle },
    { name: "Documentation", href: "/documentation", icon: BookOpen }
  ];

  const contactInfo = [
    {

      icon: Phone,
      text: "+1 302 464 0950",
      href: "tel:+13024640950"
    },
    {

      icon: Mail,
      text: "kleber@ziontechgroup.com",
      href: "mailto:kleber@ziontechgroup.com"
    },
    {

      icon: MapPin,
      text: "364 E Main St STE 1008 Middletown DE 19709",
      href: "https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitter },
    { name: "GitHub", href: "https://github.com/ziontechgroup", icon: Github },
    { name: "Facebook", href: "https://facebook.com/ziontechgroup", icon: Facebook },
    { name: "Instagram", href: "https://instagram.com/ziontechgroup", icon: Instagram }
  ];

  return (
    <footer className="bg-zion-slate-darker border-t border-zion-purple/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-zion-purple" />
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading the future of technology with cutting-edge AI solutions, quantum computing, and innovative micro SAAS services.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-zion-purple transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
              <Target className="h-5 w-5 text-zion-purple" />
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-zion-purple transition-colors text-sm flex items-center space-x-2 group"
                  >
                    <link.icon className="h-4 w-4 group-hover:text-zion-purple" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
              <MessageCircle className="h-5 w-5 text-zion-purple" />
              <span>Contact Us</span>
            </h3>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="text-gray-300 hover:text-zion-purple transition-colors text-sm flex items-start space-x-2 group"
                >
                  <contact.icon className="h-4 w-4 mt-0.5 group-hover:text-zion-purple flex-shrink-0" />
                  <span className="leading-relaxed">{contact.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
              <Mail className="h-5 w-5 text-zion-purple" />
              <span>Stay Updated</span>
            </h3>
            <p className="text-gray-300 text-sm">
              Get the latest updates on our innovative services and technology solutions.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-zion-slate border border-zion-slate-light rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent"
              />
              <button className="px-4 py-2 bg-zion-purple hover:bg-zion-purple-dark text-white rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Service Categories */}
        <div className="mt-12 pt-8 border-t border-zion-slate">
          <h3 className="text-xl font-semibold text-white text-center mb-8">
            Our Comprehensive Service Portfolio
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                  <section.icon className="h-5 w-5 text-zion-purple" />
                  <span>{section.title}</span>
                </h4>
                <ul className="space-y-2">
                  {section.links.slice(0, 5).map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-zion-purple transition-colors text-sm flex items-center space-x-2 group"
                      >
                        <link.icon className="h-4 w-4 group-hover:text-zion-purple" />
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-zion-slate-darkest border-t border-zion-slate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <span>•</span>
              <Link to="/privacy" className="hover:text-zion-purple transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link to="/terms" className="hover:text-zion-purple transition-colors">
                Terms of Service
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">Powered by</span>
              <div className="flex items-center space-x-2">
                <Brain className="h-5 w-5 text-zion-purple" />
                <span className="text-sm font-semibold text-white">AI Technology</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-zion-purple hover:bg-zion-purple-dark text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
}
=======
<<<<<<< HEAD
import React from 'react'; import { Link  } from 'react-router-dom'; import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUp  } from 'lucide-react'; export default function Footer() { const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); }; const currentYear = new Date().getFullYear(); const footerLinks = { services: [{ name: 'AI & Machine Learning', href: '/services/ai' }, { name: 'Cloud Solutions', href: '/services/cloud' }, { name: 'Cybersecurity', href: '/services/cybersecurity' }, { name: 'Software Development', href: '/services/development' }, { name: 'Digital Transformation', href: '/services/transformation' }, { name: 'Consulting', href: '/services/consulting' } ], solutions: [{ name: 'Enterprise Solutions', href: '/solutions/enterprise' }, { name: 'Startup Solutions', href: '/solutions/startup' }, { name: 'Government Solutions', href: '/solutions/government' }, { name: 'Healthcare Solutions', href: '/solutions/healthcare' }, { name: 'Financial Solutions', href: '/solutions/financial' } ], company: [{ name: 'About Us', href: '/about' }, { name: 'Our Team', href: '/about#team' }, { name: 'Careers', href: '/careers' }, { name: 'Partners', href: '/partners' }, { name: 'Press', href: '/press' }, { name: 'Case Studies', href: '/case-studies' } ], resources: [{ name: 'Blog', href: '/blog' }, { name: 'Documentation', href: '/docs' }, { name: 'API Reference', href: '/api' }, { name: 'Developer Portal', href: '/developer' }, { name: 'Training', href: '/training' }, { name: 'Support', href: '/support' } ] }; const socialLinks = [ { name: 'Facebook', icon: Facebook, href: 'https:
=======
import React from "react"; export default function Footer() { const scrollToTop = () => { window.scrollTo({ top: 0, behavior: "smooth" })}; const currentYear = new Date().getFullYear(); const footerLinks = {} { name: "Cloud Solutions", href: "/services/cloud" } { name: "Cybersecurity", href: "/services/cybersecurity" } { name: "Software Development", href: "/services/development" } { name: "Digital Transformation", href: "/services/transformation" } { name: "Consulting", href: "/services/consulting" } ], solutions: [{ name: "Enterprise Solutions", href: "/solutions/enterprise" } { name: "Startup Solutions", href: "/solutions/startup" } { name: "Government Solutions", href: "/solutions/government" } { name: "Healthcare Solutions", href: "/solutions/healthcare" } { name: "Financial Solutions", href: "/solutions/financial" } ], company: [{ name: "About Us", href: "/about" } { name: "Our Team", href: "/about#team" } { name: "Careers", href: "/careers" } { name: "Partners", href: "/partners" } { name: "Press", href: "/press" } { name: "Case Studies", href: "/case-studies" } ], resources: [{ name: "Blog", href: "/blog" } { name: "Documentation", href: "/docs" } { name: "API Reference", href: "/api" } { name: "Developer Portal", href: "/developer" } { name: "Training", href: "/training" } { name: "Support", href: "/support" } ] }; const socialLinks = [], solutions: [{ name: "Enterprise Solutions", href: "/solutions/enterprise" } { name: "Startup Solutions", href: "/solutions/startup" } { name: "Government Solutions", href: "/solutions/government" } { name: "Healthcare Solutions", href: "/solutions/healthcare" } { name: "Financial Solutions", href: "/solutions/financial" } ], company: [{ name: "About Us", href: "/about" } { name: "Our Team", href: "/about#team" } { name: "Careers", href: "/careers" } { name: "Partners", href: "/partners" } { name: "Press", href: "/press" } { name: "Case Studies", href: "/case-studies" } ], resources: [{ name: "Blog", href: "/blog" } { name: "Documentation", href: "/docs" } { name: "API Reference", href: "/api" } { name: "Developer Portal", href: "/developer" } { name: "Training", href: "/training" } { name: "Support", href: "/support" } ] }; const socialLinks = [], solutions: [ { name: "Enterprise Solutions", href: "/solutions/enterprise" } { name: "Startup Solutions", href: "/solutions/startup" } { name: "Government Solutions", href: "/solutions/government" } { name: "Healthcare Solutions", href: "/solutions/healthcare" } { name: "Financial Solutions", href: "/solutions/financial" } ], company: [ { name: "About Us", href: "/about" } { name: "Our Team", href: "/about#team" } { name: "Careers", href: "/careers" } { name: "Partners", href: "/partners" } { name: "Press", href: "/press" } { name: "Case Studies", href: "/case-studies" } ], resources: [ { name: "Blog", href: "/blog" } { name: "Documentation", href: "/docs" } { name: "API Reference", href: "/api" } { name: "Developer Portal", href: "/developer" } { name: "Training", href: "/training" } { name: "Support", href: "/support" } ] }; const socialLinks = [], solutions: [{ name: "Enterprise Solutions", href: "/solutions/enterprise" } { name: "Startup Solutions", href: "/solutions/startup" } { name: "Government Solutions", href: "/solutions/government" } { name: "Healthcare Solutions", href: "/solutions/healthcare" } { name: "Financial Solutions", href: "/solutions/financial" } ], company: [{ name: "About Us", href: "/about" } { name: "Our Team", href: "/about#team" } { name: "Careers", href: "/careers" } { name: "Partners", href: "/partners" } { name: "Press", href: "/press" } { name: "Case Studies", href: "/case-studies" } ], resources: [{ name: "Blog", href: "/blog" } { name: "Documentation", href: "/docs" } { name: "API Reference", href: "/api" } { name: "Developer Portal", href: "/developer" } { name: "Training", href: "/training" } { name: "Support", href: "/support" } ] }; const socialLinks = [],"
    solutions: [","
e: "Enterprise Solutions", href: "/solutions/enterprise" } { name: "Startup Solutions", href: "/solutions/startup" } { name: "Government Solutions", href: "/solutions/government" } { name: "Healthcare Solutions", href: "/solutions/healthcare" } { name: "Financial Solutions", href: "/solutions/financial" }"
    company: [","
e: "About Us", href: "/about" } { name: "Our Team", href: "/about#team" } { name: "Careers", href: "/careers" } { name: "Partners", href: "/partners" } { name: "Press", href: "/press" } { name: "Case Studies", href: "/case-studies" }"
    resources: [",
e: "Blog", href: "/blog" } { name: "Documentation", href: "/docs" } { name: "API Reference", href: "/api" } { name: "Developer Portal", href: "/developer" } { name: "Training", href: "/training" } { name: "Support", href: "/support" }

    ]


"
  const socialLinks = []
"
  return ("
    <footer className="bg-gray-900 text-white">""
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">"",
        <div className="grid grid-cols-1 m>
    d:grid-cols-2 l,"
    g: grid-cols-5 gap-8">",
          {/* comment */}""
          <div className="lg: col-span-2">""
            <div className="flex items-center space-x-2 mb-4">""
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">"
  return ("
    <footer className="bg-zion-blue-dark border-t border-zion-blue-light/30">"
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">,
        {/* comment */}"
        <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-5 gap-8">,
          {/* comment */}"
          <div className="lg: col-span-1">"
            <div className="flex items-center space-x-2 mb-4">"
              <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">"
                <Brain className="w-5 h-5 text-white"  />
              </div>"
              <span className="text-xl font-bold text-white">Zion Tech Group</span>"
            <p className="text-zion-slate-light text-sm mb-4">,
              Empowering businesses with cutting-edge AI, cloud solutions, and innovative technology services.
            </p>"
            <div className="space-y-2">"
              <div className="flex items-center space-x-2 text-zion-slate-light text-sm">"
                <Phone className="w-4 h-4"  />"
                <a href="tel: +13024640950" className="hover:text-zion-cyan transition-colors">
                  +1 (302) 464-0950,
                </a>"
                <Mail className="w-4 h-4"  />"
                <a href="mailto:info@ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                  info@ziontechgroup.com"
                <MapPin className="w-4 h-4"  />,
                <span>Delaware, USA</span>
          {/* comment */}

          <div>"
            <h3 className="text-white font-semibold mb-4">Services</h3>"
            <ul className="space-y-2">
              {footerLinks.services.map((link) => ("
                <li key="{link.name}">"
                  <Link to="{link.href}""
                    className="text-zion-slate-light text-sm hover: text-zion-cyan transition-colors"
                  >,
                    {link.name}

                  </Link>
                </li>
              ))}

            </ul>
          {/* comment */}"
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
              {footerLinks.solutions.map((link) => (

          {/* comment */}"
            <h3 className="text-white font-semibold mb-4">Company</h3>
              {footerLinks.company.map((link) => (

          {/* comment */}"
            <h3 className="text-white font-semibold mb-4">Resources</h3>
              {footerLinks.resources.map((link) => (

        {/* comment */}"
        <div className="border-t border-zion-blue-light/30 mt-8 pt-8">"
          <div className="flex flex-col md: flex-row justify-between items-center">"
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social) => {,
                const Icon = social.icon,"
                  <a key="{social.name}""
                    href="{social.href}""
                    target="_blank""
                    rel="noopener noreferrer""
                    className="text-zion-slate-light hover: text-zion-cyan transition-colors"">
                    aria-label="{social.name}""
                    <Icon className="w-5 h-5"  />
                )})}

            "
            <button onClick="{scrollToTop}""
              className="flex items-center space-x-2 text-zion-slate-light hover: text-zion-cyan transition-colors""
              <ArrowUp className="w-4 h-4"  />"
              <span className="text-sm">Back to top</span>
            </button>
,
        {/* comment */}"
          <div className="flex flex-col md: flex-row justify-between items-center text-sm text-zion-slate-light">
            <p>,
              © {currentYear} Zion Tech Group. All rights reserved."
            <div className="flex items-center space-x-1 mt-2 md: mt-0">
              <span>Made with</span>"
              <Heart className="w-4 h-4 text-red-500"  />,
              <span>for innovation</span>,
    </footer>,,
  )}

      <button onClick="{scrollToTop}" className="fixed bottom-8 right-8 bg-cyan-500 hover: bg-cyan-600 text-white p-3 rounded-full shadow-lg transition-colors z-50" aria-label="Scroll to top" >",
        <ArrowUp className="w-5 h-5"  />",,
  )}"
}"react-router-dom&apos;lucide-react&apos;&apos, export default function Footer() {} const scrollToTop = () => { window.scrollTo( { top: 0, behavior: &apos,smooth&apos})}&apos; const currentYear = new Date().getFullYear() const;const;const footerLinks = {} { name: &apos,Cloud Solutions&apos,, href: &apos,/services/cloud&apos} { name: &apos,Cybersecurity&apos,, href: &apos,/services/cybersecurity&apos} { name: &apos,Software Development&apos,, href: &apos,/services/development&apos} { name: &apos,Digital Transformation&apos,, href: &apos,/services/transformation&apos} { name: &apos,Consulting&apos,, href: &apos,/services/consulting&apos} ], solutions: [ { nam,e: &apos,Enterprise Solutions&apos,, href: &apos,/solutions/enterprise&apos} { name: &apos,Startup Solutions&apos,, href: &apos,/solutions/startup&apos} { name: &apos,Government Solutions&apos,, href: &apos,/solutions/government&apos} { name: &apos,Healthcare Solutions&apos,, href: &apos,/solutions/healthcare&apos} { name: &apos,Financial Solutions&apos,, href: &apos,/solutions/financial&apos} ], company: [ { nam,e: &apos,About Us&apos,, href: &apos,/about&apos} { name: &apos,Our Team&apos,, href: &apos,/about#team&apos} { name: &apos,Careers&apos,, href: &apos,/careers&apos} { name: &apos,Partners&apos,, href: &apos,/partners&apos} { name: &apos,Press&apos,, href: &apos,/press&apos} { name: &apos,Case Studies&apos,, href: &apos,/case-studies&apos} ], resources: [ { nam,e: &apos,Blog&apos,, href: &apos,/blog&apos} { name: &apos,Documentation&apos,, href: &apos,/docs&apos} { name: &apos,API Reference&apos,, href: &apos,/api&apos} { name: &apos,Developer Portal&apos,, href: &apos,/developer&apos} { name: &apos,Training&apos,, href: &apos,/training&apos} { name: &apos,Support&apos,, href: &apos,/support&apos} ] } ;&apos;const socialLinks = [], solutions: [ { name: "Enterprise Solutions", href: "/solutions/enterprise" } { name: "Startup Solutions", href: "/solutions/startup" } { name: "Government Solutions", href: "/solutions/government" } { name: "Healthcare Solutions", href: "/solutions/healthcare" } { name: "Financial Solutions", href: "/solutions/financial" } ], company: [ { name: "About Us", href: "/about" } { name: "Our Team", href: "/about#team" } { name: "Careers", href: "/careers" } { name: "Partners", href: "/partners" } { name: "Press", href: "/press" } { name: "Case Studies", href: "/case-studies" } ], resources: [ { name: "Blog", href: "/blog" } { name: "Documentation", href: "/docs" } { name: "API Reference", href: "/api" } { name: "Developer Portal", href: "/developer" } { name: "Training", href: "/training" } { name: "Support", href: "/support" } ] } const socialLinks = ["
  { name: "Facebook", icon: Facebook, href: "https:""',
"
"",
}}""
>>>>>>> main
>>>>>>> main
