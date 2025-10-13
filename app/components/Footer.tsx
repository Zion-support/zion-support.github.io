import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, Phone, Mail, MapPin, ArrowRight, Brain, Shield, Zap, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Twitter",
      url: "https://twitter.com/ziontechgroup",
      icon: <Twitter className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/ziontechgroup",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/ziontechgroup",
      icon: <Github className="w-5 h-5" />,
    },
  ];

  const serviceCategories = [
    {
      title: "AI Services",
      icon: <Brain className="w-4 h-4" />,
      services: [
        { name: "AI Analytics Dashboard Pro", link: "/ai-analytics-dashboard-pro" },
        { name: "AI Content Generation Pro", link: "/ai-content-generation-pro" },
        { name: "AI Cybersecurity Suite Pro", link: "/ai-cybersecurity-suite-pro" },
        { name: "AI Business Intelligence Pro", link: "/ai-business-intelligence-pro" },
        { name: "View All AI Services", link: "/ai-services" }
      ]
    },
    {
      title: "IT Services",
      icon: <Shield className="w-4 h-4" />,
      services: [
        { name: "Cloud Infrastructure", link: "/cloud-infrastructure" },
        { name: "Cybersecurity Solutions", link: "/cybersecurity-solutions" },
        { name: "Web Development", link: "/web-development" },
        { name: "Mobile Development", link: "/mobile-development" },
        { name: "View All IT Services", link: "/it-services" }
      ]
    },
    {
      title: "Micro SAAS",
      icon: <Zap className="w-4 h-4" />,
      services: [
        { name: "Zion Analytics Pro", link: "/zion-analytics-pro" },
        { name: "Zion Security Shield", link: "/zion-security-shield" },
        { name: "Zion Cloud Vault", link: "/zion-cloud-vault" },
        { name: "Zion Content Studio", link: "/zion-content-studio" },
        { name: "View All Micro SAAS", link: "/micro-saas" }
      ]
    },
    {
      title: "5G Solutions",
      icon: <Globe className="w-4 h-4" />,
      services: [
        { name: "5G Data Analytics", link: "/5g-data-analytics" },
        { name: "5G Edge Computing", link: "/5g-edge-computing" },
        { name: "5G Implementation", link: "/5g-implementation" },
        { name: "5G Smart City Solutions", link: "/5g-smart-city-solutions" },
        { name: "View All 5G Solutions", link: "/5g-solutions" }
      ]
    }
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709"
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Zion Tech Group
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses. 
              Transform your operations with cutting-edge technology.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-cyan-400 transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-cyan-400 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                <span className="text-gray-300">{contactInfo.address}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-gray-800"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-4">
            <h4 className="text-xl font-semibold mb-6 text-cyan-400">Our Services</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceCategories.map((category, index) => (
                <div key={index}>
                  <div className="flex items-center space-x-2 mb-4">
                    {category.icon}
                    <h5 className="font-semibold text-white">{category.title}</h5>
                  </div>
                  <ul className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex}>
                        <Link
                          to={service.link}
                          className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                        >
                          <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Links */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h5 className="font-semibold text-white mb-4">Company</h5>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">About Us</Link></li>
                <li><Link to="/careers" className="text-gray-300 hover:text-cyan-400 transition-colors">Careers</Link></li>
                <li><Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors">Case Studies</Link></li>
                <li><Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-4">Resources</h5>
              <ul className="space-y-2">
                <li><Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors">Pricing</Link></li>
                <li><Link to="/tutorials" className="text-gray-300 hover:text-cyan-400 transition-colors">Tutorials</Link></li>
                <li><Link to="/support" className="text-gray-300 hover:text-cyan-400 transition-colors">Support</Link></li>
                <li><Link to="/demo" className="text-gray-300 hover:text-cyan-400 transition-colors">Demo</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-4">Legal</h5>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-gray-300 hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-300 hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
                <li><Link to="/cookies" className="text-gray-300 hover:text-cyan-400 transition-colors">Cookie Policy</Link></li>
                <li><Link to="/sitemap" className="text-gray-300 hover:text-cyan-400 transition-colors">Sitemap</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Proudly serving businesses worldwide</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
