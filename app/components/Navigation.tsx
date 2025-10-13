import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Brain, Shield, Zap, Globe } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const services = [
    {
      title: "AI Services",
      icon: <Brain className="w-4 h-4" />,
      link: "/ai-services",
      description: "Artificial Intelligence Solutions"
    },
    {
      title: "IT Services",
      icon: <Shield className="w-4 h-4" />,
      link: "/it-services",
      description: "Technology Infrastructure"
    },
    {
      title: "Micro SAAS",
      icon: <Zap className="w-4 h-4" />,
      link: "/micro-saas",
      description: "Ready-to-deploy Software"
    },
    {
      title: "5G Solutions",
      icon: <Globe className="w-4 h-4" />,
      link: "/5g-solutions",
      description: "Next-gen Connectivity"
    }
  ];

  const companyLinks = [
    { title: "About Us", link: "/about" },
    { title: "Our Team", link: "/team" },
    { title: "Careers", link: "/careers" },
    { title: "Case Studies", link: "/case-studies" }
  ];

  const supportLinks = [
    { title: "Contact", link: "/contact" },
    { title: "Support", link: "/support" },
    { title: "Consultation", link: "/consultation" },
    { title: "Demo", link: "/demo" }
  ];

  return (
    <nav className="bg-black/20 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors">
            Zion Tech Group
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-gray-300 hover:text-white transition-colors"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/20 p-4 z-50">
                  <div className="grid grid-cols-2 gap-4">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.link}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
                        onMouseEnter={() => setActiveDropdown('services')}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="text-cyan-400 mt-1">
                          {service.icon}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{service.title}</div>
                          <div className="text-sm text-gray-600">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-gray-300 hover:text-white transition-colors"
                onMouseEnter={() => setActiveDropdown('company')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Company
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'company' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/20 p-4 z-50">
                  {companyLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.link}
                      className="block px-3 py-2 text-gray-900 hover:bg-white/10 rounded-lg transition-colors"
                      onMouseEnter={() => setActiveDropdown('company')}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Support Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-gray-300 hover:text-white transition-colors"
                onMouseEnter={() => setActiveDropdown('support')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Support
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'support' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/20 p-4 z-50">
                  {supportLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.link}
                      className="block px-3 py-2 text-gray-900 hover:bg-white/10 rounded-lg transition-colors"
                      onMouseEnter={() => setActiveDropdown('support')}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <div className="space-y-4">
              <Link 
                to="/" 
                className="block text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              <div>
                <div className="text-gray-300 font-semibold mb-2">Services</div>
                <div className="ml-4 space-y-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.link}
                      className="block text-gray-400 hover:text-white transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-gray-300 font-semibold mb-2">Company</div>
                <div className="ml-4 space-y-2">
                  {companyLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.link}
                      className="block text-gray-400 hover:text-white transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-gray-300 font-semibold mb-2">Support</div>
                <div className="ml-4 space-y-2">
                  {supportLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.link}
                      className="block text-gray-400 hover:text-white transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
