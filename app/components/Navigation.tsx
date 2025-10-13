import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Brain, Shield, Zap, Globe, Phone, Mail, MapPin } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const serviceCategories = [
    {
      title: "AI Services",
      icon: <Brain className="w-4 h-4" />,
      color: "text-blue-400",
      services: [
        { name: "AI Analytics Dashboard Pro", link: "/ai-analytics-dashboard-pro" },
        { name: "AI Content Generation Pro", link: "/ai-content-generation-pro" },
        { name: "AI Cybersecurity Suite Pro", link: "/ai-cybersecurity-suite-pro" },
        { name: "AI Business Intelligence Pro", link: "/ai-business-intelligence-pro" },
        { name: "AI Code Assistant Pro", link: "/ai-code-assistant-pro" },
        { name: "AI Customer Support Chatbot", link: "/ai-customer-support-chatbot" },
        { name: "View All AI Services", link: "/ai-services" }
      ]
    },
    {
      title: "IT Services",
      icon: <Shield className="w-4 h-4" />,
      color: "text-green-400",
      services: [
        { name: "Cloud Infrastructure", link: "/cloud-infrastructure" },
        { name: "Cybersecurity Solutions", link: "/cybersecurity-solutions" },
        { name: "Web Development", link: "/web-development" },
        { name: "Mobile Development", link: "/mobile-development" },
        { name: "Database Management", link: "/database-management" },
        { name: "Custom Software", link: "/custom-software" },
        { name: "View All IT Services", link: "/it-services" }
      ]
    },
    {
      title: "Micro SAAS",
      icon: <Zap className="w-4 h-4" />,
      color: "text-purple-400",
      services: [
        { name: "Zion Analytics Pro", link: "/zion-analytics-pro" },
        { name: "Zion Security Shield", link: "/zion-security-shield" },
        { name: "Zion Cloud Vault", link: "/zion-cloud-vault" },
        { name: "Zion Content Studio", link: "/zion-content-studio" },
        { name: "Zion Data Sync", link: "/zion-data-sync" },
        { name: "Zion Lead Magnet", link: "/zion-lead-magnet" },
        { name: "View All Micro SAAS", link: "/micro-saas" }
      ]
    },
    {
      title: "5G Solutions",
      icon: <Globe className="w-4 h-4" />,
      color: "text-orange-400",
      services: [
        { name: "5G Data Analytics", link: "/5g-data-analytics" },
        { name: "5G Edge Computing", link: "/5g-edge-computing" },
        { name: "5G Implementation", link: "/5g-implementation" },
        { name: "5G Mobile Applications", link: "/5g-mobile-applications" },
        { name: "5G Network Infrastructure", link: "/5g-network-infrastructure" },
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
    <nav className="bg-gray-900/95 backdrop-blur-sm text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            Zion Tech Group
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="hover:text-cyan-400 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="hover:text-cyan-400 transition-colors font-medium">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-cyan-400 transition-colors font-medium">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-96 bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="grid grid-cols-2 gap-4 p-6">
                  {serviceCategories.map((category, index) => (
                    <div key={index} className="space-y-2">
                      <div className={`flex items-center space-x-2 ${category.color} font-semibold mb-3`}>
                        {category.icon}
                        <span>{category.title}</span>
                      </div>
                      {category.services.map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          to={service.link}
                          className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors py-1"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/pricing" className="hover:text-cyan-400 transition-colors font-medium">
              Pricing
            </Link>
            <Link to="/case-studies" className="hover:text-cyan-400 transition-colors font-medium">
              Case Studies
            </Link>
            <Link to="/blog" className="hover:text-cyan-400 transition-colors font-medium">
              Blog
            </Link>
            <Link to="/contact" className="hover:text-cyan-400 transition-colors font-medium">
              Contact
            </Link>
            
            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-700">
            <div className="space-y-4">
              <Link to="/" className="block hover:text-cyan-400 transition-colors font-medium py-2">
                Home
              </Link>
              <Link to="/about" className="block hover:text-cyan-400 transition-colors font-medium py-2">
                About
              </Link>
              
              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="font-semibold text-cyan-400 py-2">Services</div>
                {serviceCategories.map((category, index) => (
                  <div key={index} className="ml-4 space-y-1">
                    <div className={`flex items-center space-x-2 ${category.color} font-medium py-1`}>
                      {category.icon}
                      <span>{category.title}</span>
                    </div>
                    {category.services.slice(0, 3).map((service, serviceIndex) => (
                      <Link
                        key={serviceIndex}
                        to={service.link}
                        className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors py-1 ml-6"
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      to={category.services[category.services.length - 1].link}
                      className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors py-1 ml-6 font-medium"
                    >
                      View All {category.title}
                    </Link>
                  </div>
                ))}
              </div>

              <Link to="/pricing" className="block hover:text-cyan-400 transition-colors font-medium py-2">
                Pricing
              </Link>
              <Link to="/case-studies" className="block hover:text-cyan-400 transition-colors font-medium py-2">
                Case Studies
              </Link>
              <Link to="/blog" className="block hover:text-cyan-400 transition-colors font-medium py-2">
                Blog
              </Link>
              <Link to="/contact" className="block hover:text-cyan-400 transition-colors font-medium py-2">
                Contact
              </Link>
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-700 space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <Phone className="w-4 h-4" />
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-cyan-400 transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <Mail className="w-4 h-4" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-2 text-sm text-gray-300">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
