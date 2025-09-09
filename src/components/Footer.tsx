import { Link } from 'react-router-dom';
import '../styles/futuristic.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "AI & Technology Services",
      icon: Brain,
      links: [
        { label: "AI Workflow Automation", path: "/services/ai-workflow-automation" },
        { label: "AI Customer Intelligence", path: "/services/ai-customer-intelligence" },
        { label: "AI Security & Compliance", path: "/services/ai-security-compliance" },
        { label: "AI Data Analytics", path: "/services/ai-data-analytics" },
        { label: "AI & Autonomous Systems", path: "/services/ai-autonomous-systems" },
        { label: "AI Research Assistant", path: "/ai-autonomous-research-assistant" },
        { label: "Quantum Neural Networks", path: "/quantum-neural-network-platform" },
        { label: "Autonomous Business Platform", path: "/autonomous-business-operations-platform" },
        { label: "AI Asset Management", path: "/ai-powered-it-asset-management" },
        { label: "Quantum Technology", path: "/services/quantum-technology" },
        { label: "Machine Learning Solutions", path: "/services/ai-machine-learning" },
        { label: "AI Business Intelligence", path: "/services/ai-business-intelligence" }
      ]
    },
    {
      title: "Infrastructure & Security",
      icon: Shield,
      links: [
        { label: "IT Infrastructure", path: "/services/it-infrastructure" },
        { label: "Cybersecurity", path: "/services/cybersecurity" },
        { label: "SOC2 Compliance Automation", path: "/soc2-compliance-automation" },
        { label: "Cloud DevOps", path: "/cloud-devops" },
        { label: "5G Enterprise Solutions", path: "/5g-enterprise-solutions" },
        { label: "Network Infrastructure", path: "/services/network-infrastructure" },
        { label: "Managed IT Services", path: "/services/managed-it-services" },
        { label: "Security Assessment", path: "/services/security-assessment" }
      ]
    },
    {
      title: "Industry Solutions",
      icon: Building,
      links: [
        { label: "Enterprise Solutions", path: "/solutions/enterprise" },
        { label: "Healthcare Solutions", path: "/solutions/healthcare" },
        { label: "Financial Solutions", path: "/solutions/financial" },
        { label: "Manufacturing Solutions", path: "/solutions/manufacturing" },
        { label: "Retail Solutions", path: "/solutions/retail" },
        { label: "Government Solutions", path: "/solutions/government" },
        { label: "Digital Transformation", path: "/digital-transformation" },
        { label: "Micro SAAS Solutions", path: "/services/micro-saas-solutions" }
      ]
    },
    {
      title: "Company & Resources",
      icon: Users,
      links: [
        { label: "About Us", path: "/about" },
        { label: "Our Mission", path: "/mission" },
        { label: "Team", path: "/team" },
        { label: "Careers", path: "/careers" },
        { label: "Partners", path: "/partners" },
        { label: "Blog", path: "/blog" },
        { label: "Case Studies", path: "/case-studies" },
        { label: "Help Center", path: "/help" }
      ]
    }
  ];

  // Fixed social media links with proper URLs
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/ziontechgroup', 
      icon: Linkedin,
      fallback: 'https://linkedin.com'
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/ziontechgroup', 
      icon: Twitter,
      fallback: 'https://twitter.com'
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com/ziontechgroup', 
      icon: Github,
      fallback: 'https://github.com'
    },
    { 
      name: 'YouTube', 
      url: 'https://youtube.com/@ziontechgroup', 
      icon: Youtube,
      fallback: 'https://youtube.com'
    },
    { 
      name: 'Facebook', 
      url: 'https://facebook.com/ziontechgroup', 
      icon: Facebook,
      fallback: 'https://facebook.com'
    },
    { 
      name: 'Instagram', 
      url: 'https://instagram.com/ziontechgroup', 
      icon: Instagram,
      fallback: 'https://instagram.com'
    }
  ];

  const quickLinks = [
    { label: "Pricing", path: "/pricing" },
    { label: "Contact", path: "/contact" },
    { label: "Support", path: "/help" },
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Terms of Service", path: "/terms" },
    { label: "Cookie Policy", path: "/cookies" }
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-sm text-gray-400">AI-Powered Innovation</p>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services.
            </p>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Phone className="w-4 h-4 text-cyan-500" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <div className={`p-2 bg-gradient-to-r ${section.color} rounded-lg`}>
                    <section.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-white text-lg">{section.title}</h3>
                </div>
                
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm hover:translate-x-1 transform transition-transform duration-300 inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="border-t border-zion-cyan/20 py-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Join hundreds of companies already leveraging our cutting-edge AI and technology solutions to drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan/90 hover:to-zion-blue/90 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center space-x-2 border border-zion-cyan/50 text-zion-cyan hover:bg-zion-cyan hover:text-black px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                <span>View Pricing</span>
                <Eye className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-zion-cyan/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-zion-slate-light text-sm">
              <Heart className="w-4 h-4 text-red-500" />
              <span>Made with innovation by Zion Tech Group</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-zion-slate-light">
              <Link to="/privacy" className="hover:text-zion-cyan transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-zion-cyan transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-zion-cyan transition-colors duration-300">
                Cookie Policy
              </Link>
              <Link to="/accessibility" className="hover:text-zion-cyan transition-colors duration-300">
                Accessibility
              </Link>
            </div>
            
            <div className="text-zion-slate-light text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-zion-cyan hover:bg-zion-cyan-light text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </footer>
  );
}

export default Footer;