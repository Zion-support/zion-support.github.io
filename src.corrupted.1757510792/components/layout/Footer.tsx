  Mail,
  Phone,
  MapPin,
  Globe,  Linkedin,
  Twitter,
  Github,
  Facebook,
  Instagram,
interface FooterProps {
  className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const solutions = [
    { name: 'Enterprise Solutions', href: '/enterprise-solutions' },
    { name: 'Startup Solutions', href: '/startup-solutions' },
    { name: 'Industry Solutions', href: '/industries' },
    { name: 'Custom Development', href: '/custom-development' },
    { name: 'Digital Transformation', href: '/digital-transformation' },
    { name: 'Technology Consulting', href: '/consulting' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'News & Updates', href: '/news' },
    { name: 'Partners', href: '/partners' }
  ];

  const resources = [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'White Papers', href: '/white-papers' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api-docs' },
    { name: 'Request Demo', href: '/demo' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Security', href: '/cybersecurity' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'Accessibility', href: '/accessibility' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    hours: 'Mon-Fri: 9AM-6PM EST'
  };

  return (
    <footer className={`bg-gray-900 text-white ${className}`}>
  const footerSections = [;
    {;

      title: "Pricing & Plans",
      icon: DollarSign,
      links: [;
        { name: "Comprehensive Pricing 2025", href: "/comprehensive-pricing-guide-2025", icon: DollarSign },
        { name: "Pricing Overview", href: "/pricing", icon: BarChart3 },
        { name: "Get Custom Quote", href: "/contact", icon: MessageCircle },
      ];
},
    {;
      title: "AI & Automation Services",
      icon: Brain,
      links: [;
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
      ];
},
    {;

      title: "Quantum Computing",
      icon: Atom,
      links: [;
        { name: "Quantum AI Platform", href: "/services/quantum-ai-platform", icon: Brain },
        { name: "Quantum Trading Platform", href: "/services/quantum-ai-trading-platform", icon: TrendingUp },
        { name: "Quantum Computing as a Service", href: "/services/quantum-computing-as-a-service", icon: Cloud },
        { name: "Quantum Machine Learning", href: "/services/quantum-machine-learning", icon: Cpu },
        { name: "Quantum Edge Computing", href: "/services/quantum-edge-computing-solutions", icon: Network }
      ];
},
    {;

      title: "IT Infrastructure",
      icon: Server,
      links: [;
        { name: "Cloud DevOps", href: "/services/cloud-devops", icon: Cloud },
        { name: "IT Infrastructure Management", href: "/services/it-infrastructure-management", icon: Server },
        { name: "Cybersecurity Solutions", href: "/services/cybersecurity", icon: Shield },
        { name: "Digital Transformation", href: "/services/digital-transformation", icon: Rocket },
        { name: "Green IT Solutions", href: "/services/green-it", icon: Leaf },
        { name: "Space Technology", href: "/services/space-tech", icon: Satellite }
      ];
},
    {;

      title: "Micro SAAS Solutions",
      icon: Building2,
      links: [;
        { name: "Micro CRM", href: "/services/micro-crm", icon: Users },
        { name: "Micro SAAS Platform", href: "/services/micro-saas-solutions", icon: Building2 },
        { name: "Micro SAAS Solutions Comprehensive", href: "/services/micro-saas-solutions-comprehensive", icon: Layers },
        { name: "Micro SAAS Innovation Hub", href: "/micro-saas-innovation-hub-2029", icon: Sparkles }
      ];
}
  ];
  const quickLinks = [;
    { name: "About Us", href: "/about", icon: Building2 },
    { name: "Services", href: "/services", icon: Server },
    { name: "Pricing", href: "/pricing", icon: DollarSign },
    { name: "Contact", href: "/contact", icon: MessageCircle },
    { name: "Careers", href: "/careers", icon: Briefcase },
    { name: "Blog", href: "/blog", icon: FileText },
    { name: "Support", href: "/help-center", icon: HelpCircle },
    { name: "Documentation", href: "/documentation", icon: BookOpen }
  ];
  const contactInfo = [;
    {;

      icon: Phone,
      text: "+1 302 464 0950",
      href: "tel:+13024640950";
},
    {;

      icon: Mail,
      text: "kleber@ziontechgroup.com",
      href: "mailto:kleber@ziontechgroup.com";
},
    {;

      icon: MapPin,
      text: "364 E Main St STE 1008 Middletown DE 19709",
      href: "https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709";
}
  ];
  const socialLinks = [;
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitter },
    { name: "GitHub", href: "https://github.com/ziontechgroup", icon: Github },
    { name: "Facebook", href: "https://facebook.com/ziontechgroup", icon: Facebook },
    { name: "Instagram", href: "https://instagram.com/ziontechgroup", icon: Instagram }
  ];
  return (;
    <footer className="bg-zion-slate-darker border-t border-zion-purple/20">;      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Zion Tech Group</span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, 
              and digital transformation services. We help businesses thrive in the digital age with 
              cutting-edge technology solutions.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">{contactInfo.email}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <span className="text-gray-300">{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">{contactInfo.hours}</span>
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
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200 group"
                    >
                      <IconComponent className="w-4 h-4 group-hover:text-blue-400" />
                      <span>{service.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Solutions</h3>
            <ul className="space-y-3">
              {solutions.map((solution) => (
                <li key={solution.name}>
                  <Link
                    href={solution.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{solution.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3 mb-8">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    href={resource.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <div>
                <div className="font-semibold">99.9% Uptime</div>
                <div className="text-sm text-gray-400">Guaranteed</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Shield className="w-6 h-6 text-blue-400" />
              <div>
                <div className="font-semibold">SOC 2 Compliant</div>
                <div className="text-sm text-gray-400">Security</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Award className="w-6 h-6 text-yellow-400" />
              <div>
                <div className="font-semibold">500+ Projects</div>
                <div className="text-sm text-gray-400">Completed</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="w-6 h-6 text-purple-400" />
              <div>
                <div className="font-semibold">50+ Experts</div>
                <div className="text-sm text-gray-400">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-zion-slate-darkest border-t border-zion-slate">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">;
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">;
            <div className="flex items-center space-x-4 text-sm text-gray-400">;
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>;
              <span>•</span>;
              <Link to="/privacy" className="hover:text-zion-purple transition-colors">;
                Privacy Policy;
              </Link>;
              <span>•</span>;
              <Link to="/terms" className="hover:text-zion-purple transition-colors">;
                Terms of Service;
              </Link>;
            </div>;
            <div className="flex items-center space-x-4">;
              <span className="text-sm text-gray-400">Powered by</span>;
              <div className="flex items-center space-x-2">;
                <Brain className="h-5 w-5 text-zion-purple" />;
                <span className="text-sm font-semibold text-white">AI Technology</span>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;

      {/* Back to Top Button */}
      <button;
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-zion-purple hover:bg-zion-purple-dark text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110";
        aria-label="Back to top">;
        <ArrowUp className="h-5 w-5" />;
      </button>;
    </footer>;
  );
}import React from 'react'; import { Link } from 'react-router-dom'; import { Mail,Phone,MapPin,Globe,Linkedin,Twitter,Github,Facebook,Instagram,Zap,Brain,Server,Shield,Users,Building2,FileText,Rocket,Target,Atom,Network,Cloud,Lock,TrendingUp,Workflow,MessageCircle,Calendar,PenTool,Activity,Cpu,Wifi,Satellite,Handshake,BookOpen,Video,GraduationCap,Lightbulb,Star,HelpCircle,BarChart3,ShoppingCart,Heart,Factory,DollarSign,Briefcase,Award,ExternalLink,ArrowUp,Sparkles,CheckCircle,Monitor,Headphones,Truck,Search,Layers,Database,Home,Leaf } from 'lucide-react'; export function Footer(props: any) { const currentYear = new Date().getFullYear(); const footerSections = [ { title: "Pricing & Plans",icon: DollarSig n,links: [ { name: "Comprehensive Pricing 2025",href: "/comprehensive-pricing-guide-2025",icon: DollarSig n },{ name: "Pricing Overview",href: "/pricing",icon: BarChart 3 },{ name: "Get Custom Quote",href: "/contact",icon: MessageCircl e },] },{ title: "AI & Automation Services",icon: Brai n,links: [ { name: "AI Business Intelligence",href: "/services/ai-business-intelligence-dashboard",icon: BarChart 3 },{ name: "AI Customer Support",href: "/services/ai-customer-support-automation",icon: MessageCircl e },{ name: "AI Project Management",href: "/services/ai-project-management-platform",icon: Workflo w },{ name: "Enhanced Services 2025",href: "/enhanced-services-showcase-2025",icon: Sta r },{ name: "AI Marketing Automation",href: "/services/ai-marketing-automation-platform",icon: TrendingU p },{ name: "AI Enterprise Automation",href: "/services/ai-enterprise-automation-platform",icon: Building 2 },{ name: "AI Workflow Orchestrator",href: "/services/ai-workflow-orchestrator",icon: Workflo w },{ name: "AI Financial Trading",href: "/services/ai-financial-trading-platform",icon: TrendingU p },{ name: "AI Healthcare Analytics",href: "/services/ai-healthcare-analytics-platform",icon: Hear t },{ name: "AI Educational Content Creation",href: "/services/ai-educational-content-creation-platform",icon: BookOpe n },{ name: "AI Legal Automation",href: "/services/ai-legal-document-automation-platform",icon: FileTex t },{ name: "AI Legal Research Platform",href: "/services/ai-autonomous-legal-research-platform",icon: FileTex t },{ name: "AI HR Platform",href: "/services/ai-hr-platform",icon: User s },{ name: "AI Real Estate Investment Analytics",href: "/services/ai-real-estate-investment-analytics-platform",icon: Hom e },{ name: "AI Autonomous Logistics",href: "/services/ai-autonomous-logistics-platform",icon: Truc k },{ name: "AI Enterprise Resource Planning",href: "/services/ai-enterprise-resource-planning",icon: Databas e },{ name: "AI Autonomous Manufacturing",href: "/services/ai-autonomous-manufacturing-platform",icon: Factor y },{ name: "AI Quantum Neural Network",href: "/services/ai-quantum-neural-network-platform",icon: Ato m },{ name: "AI Space Technology",href: "/services/ai-space-technology-platform",icon: Satellit e },{ name: "AI Cybersecurity",href: "/services/ai-cybersecurity-threat-intelligence",icon: Shiel d } ] },{ title: "Quantum Computing",icon: Ato m,links: [ { name: "Quantum AI Platform",href: "/services/quantum-ai-platform",icon: Brai n },{ name: "Quantum Trading Platform",href: "/services/quantum-ai-trading-platform",icon: TrendingU p },{ name: "Quantum Computing as a Service",href: "/services/quantum-computing-as-a-service",icon: Clou d },{ name: "Quantum Machine Learning",href: "/services/quantum-machine-learning",icon: Cp u },{ name: "Quantum Edge Computing",href: "/services/quantum-edge-computing-solutions",icon: Networ k } ] },{ title: "IT Infrastructure",icon: Serve r,links: [ { name: "Cloud DevOps",href: "/services/cloud-devops",icon: Clou d },{ name: "IT Infrastructure Management",href: "/services/it-infrastructure-management",icon: Serve r },{ name: "Cybersecurity Solutions",href: "/services/cybersecurity",icon: Shiel d },{ name: "Digital Transformation",href: "/services/digital-transformation",icon: Rocke t },{ name: "Green IT Solutions",href: "/services/green-it",icon: Lea f },{ name: "Space Technology",href: "/services/space-tech",icon: Satellit e } ] },{ title: "Micro SAAS Solutions",icon: Building 2,links: [ { name: "Micro CRM",href: "/services/micro-crm",icon: User s },{ name: "Micro SAAS Platform",href: "/services/micro-saas-solutions",icon: Building 2 },{ name: "Micro SAAS Solutions Comprehensive",href: "/services/micro-saas-solutions-comprehensive",icon: Layer s },{ name: "Micro SAAS Innovation Hub",href: "/micro-saas-innovation-hub-2029",icon: Sparkle s } ] } ]; const quickLinks = [ { name: "About Us",href: "/about",icon: Building 2 },{ name: "Services",href: "/services",icon: Serve r },{ name: "Pricing",href: "/pricing",icon: DollarSig n },{ name: "Contact",href: "/contact",icon: MessageCircl e },{ name: "Careers",href: "/careers",icon: Briefcas e },{ name: "Blog",href: "/blog",icon: FileTex t },{ name: "Support",href: "/help-center",icon: HelpCircl e },{ name: "Documentation",href: "/documentation",icon: BookOpe n } ]; const contactInfo = [ { icon: Phon e,text: "+1 302 464 0950",href: "tel:+13024640950" },{ icon: Mai l,text: "kleber@ziontechgroup.com",href: "mailto: klebe r@ziontechgroup.com" },{ icon: MapPi n,text: "364 E Main St STE 1008 Middletown DE 19709",href: "https: } ]; const socialLinks = [ { name: "LinkedIn",href: "https: { name: "Twitter",href: "https: { name: "GitHub",href: "https: { name: "Facebook",href: "https: { name: "Instagram",href: "https: ]; return ( <footer className="bg-zion-slate-darker border-t border-zion-purple/20"> {} <div className="container mx-auto px-4 sm: p x-6 lg: p x-8 py-12"> <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8"> {} <div className="space-y-4"> <div className="flex items-center space-x-2"> <Zap className="h-8 w-8 text-zion-purple" /> <span className="text-2xl font-bold text-white">Zion Tech Group</span> </div> <p className="text-gray-300 text-sm leading-relaxed"> Leading the future of technology with cutting-edge AI solutions,quantum computing,and innovative micro SAAS services. </p> <div className="flex space-x-4"> {socialLinks.map((social) => ( <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover: tex t-zion-purple transition-colors" > <social.icon className="h-5 w-5" /> </a> ))} </div> </div> {} <div className="space-y-4"> <h3 className="text-lg font-semibold text-white flex items-center space-x-2"> <Target className="h-5 w-5 text-zion-purple" /> <span>Quick Links</span> </h3> <ul className="space-y-2"> {quickLinks.map((link) => ( <li key={link.name}> <Link to={link.href} className="text-gray-300 hover: tex t-zion-purple transition-colors text-sm flex items-center space-x-2 group" > <link .icon className="h-4 w-4 group-hover: tex t-zion-purple" /> <span>{link.name}</span> </Link> </li> )) )} </div> )} </ul> </div> {} <div className="space-y-4"> <h3 className="text-lg font-semibold text-white flex items-center space-x-2"> <MessageCircle className="h-5 w-5 text-zion-purple" /> <span>Contact Us</span> </h3> <div className="space-y-3"> {contactInfo.map((contact,index) => ( <a key={index} href={contact.href} target={contact.href.startsWith('http') ? '_blank' : '_self'} rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''} className="text-gray-300 hover: tex t-zion-purple transition-colors text-sm flex items-start space-x-2 group" > <contact.icon className="h-4 w-4 mt-0.5 group-hover: tex t-zion-purple flex-shrink-0" /> <span className="leading-relaxed">{contact.text}</span> </a> ))} </div> </div> {} <div className="space-y-4"> <h3 className="text-lg font-semibold text-white flex items-center space-x-2"> <Mail className="h-5 w-5 text-zion-purple" /> <span>Stay Updated</span> </h3> <p className="text-gray-300 text-sm"> Get the latest updates on our innovative services and technology solutions. </p> <div className="flex space-x-2"> <input type="email" placeholder="Enter your email" className="flex-1 px-3 py-2 bg-zion-slate border border-zion-slate-light rounded-lg text-white placeholder-gray-400 focus: outlin e-none focus: rin g-2 focus: rin g-zion-purple focus: borde r-transparent" /> <button className="px-4 py-2 bg-zion-purple hover: b g-zion-purple-dark text-white rounded-lg transition-colors"> Subscribe </button> </div> </div> </div> {} <div className="mt-12 pt-8 border-t border-zion-slate"> <h3 className="text-xl font-semibold text-white text-center mb-8"> Our Comprehensive Service Portfolio </h3> <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-6"> {footerSections.map((section) => ( <div key={section.title} className="space-y-4"> <h4 className="text-lg font-semibold text-white flex items-center space-x-2"> <section.icon className="h-5 w-5 text-zion-purple" /> <span>{section.title}</span> </h4> <ul className="space-y-2"> {section.links.slice(0,5).map((link) => ( <li key={link.name}> <Link to={link.href} className="text-gray-300 hover: tex t-zion-purple transition-colors text-sm flex items-center space-x-2 group" > <link .icon className="h-4 w-4 group-hover: tex t-zion-purple" /> <span>{link.name}</span> </Link> </li> ))} </ul> </div> ))} </div> </div> </div> {} <div className="bg-zion-slate-darkest border-t border-zion-slate"> <div className="container mx-auto px-4 sm: p x-6 lg: p x-8 py-6"> <div className="flex flex-col md: fle x-row justify-between items-center space-y-4 md: spac e-y-0"> <div className="flex items-center space-x-4 text-sm text-gray-400"> <span>&copy {currentYear} Zion Tech Group. All rights reserved.</span> <span>•</span> <Link to="/privacy" className="hover: tex t-zion-purple transition-colors"> Privacy Policy </Link> <span>•</span> <Link to="/terms" className="hover: tex t-zion-purple transition-colors"> Terms of Service </Link> </div> <div className="flex items-center space-x-4"> <span className="text-sm text-gray-400">Powered by</span> <div className="flex items-center space-x-2"> <Brain className="h-5 w-5 text-zion-purple" /> <span className="text-sm font-semibold text-white">AI Technology</span> </div> </div> </div> </div> </div> {} <button onClick={() => window.scrollTo({ top: 0,behavior: 'smooth' })} className="fixed bottom-6 right-6 bg-zion-purple hover: b g-zion-purple-dark text-white p-3 rounded-full shadow-lg transition-all duration-300 hover: scal e-110" aria-label="Back to top" > <ArrowUp className="h-5 w-5" /> </button> </footer> )}