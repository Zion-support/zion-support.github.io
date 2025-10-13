import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

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

  const aiServices = [
    { title: "Machine Learning", link: "/ai-services" },
    { title: "Natural Language Processing", link: "/ai-services" },
    { title: "Computer Vision", link: "/ai-services" },
    { title: "Predictive Analytics", link: "/ai-services" },
    { title: "AI Chatbots", link: "/ai-services" },
    { title: "AI Automation", link: "/ai-services" }
  ];

  const itServices = [
    { title: "Cloud Infrastructure", link: "/cloud-infrastructure" },
    { title: "Cybersecurity", link: "/cybersecurity-solutions" },
    { title: "Web Development", link: "/web-development" },
    { title: "Mobile Development", link: "/mobile-development" },
    { title: "Database Management", link: "/database-management" },
    { title: "Network Infrastructure", link: "/network-infrastructure" }
  ];

  const microSaas = [
    { title: "Analytics Dashboard", link: "/zion-analytics-pro" },
    { title: "Security Shield", link: "/zion-security-shield" },
    { title: "Cloud Vault", link: "/zion-cloud-vault" },
    { title: "Content Studio", link: "/zion-content-studio" },
    { title: "Project Master", link: "/zion-project-master" },
    { title: "Email Automation", link: "/zion-email-automation" }
  ];

  const companyLinks = [
    { title: "About Us", link: "/about" },
    { title: "Our Team", link: "/team" },
    { title: "Careers", link: "/careers" },
    { title: "Case Studies", link: "/case-studies" },
    { title: "Blog", link: "/blog" },
    { title: "Tutorials", link: "/tutorials" }
  ];

  const supportLinks = [
    { title: "Contact", link: "/contact" },
    { title: "Support", link: "/support" },
    { title: "Consultation", link: "/consultation" },
    { title: "Demo", link: "/demo" },
    { title: "Privacy Policy", link: "/privacy" },
    { title: "Terms of Service", link: "/terms" }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4" />,
      text: "info@ziontechgroup.com"
    },
    {
      icon: <Phone className="w-4 h-4" />,
      text: "+1 (555) 123-4567"
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      text: "San Francisco, CA"
    }
  ];

  return (
    <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI-powered solutions, IT services, and digital transformation 
              for modern businesses. Transform your operations with cutting-edge technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="text-cyan-400">
                    {info.icon}
                  </div>
                  <span className="text-gray-300">{info.text}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">AI Services</h4>
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.link}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">IT Services</h4>
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.link}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Micro SAAS</h4>
            <ul className="space-y-2">
              {microSaas.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.link}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 mb-6">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.link}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.link}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-white mb-4">
              Stay Updated with Our Latest News
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest insights on AI, technology trends, and industry updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
