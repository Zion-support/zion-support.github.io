import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Core Services",
      links: [
        { label: "AI Solutions", path: "/ai-solutions" },
        { label: "Quantum Technology", path: "/quantum-technology" },
        { label: "Cybersecurity", path: "/cybersecurity" },
        { label: "Cloud & DevOps", path: "/cloud-devops" },
        { label: "Enterprise Solutions", path: "/enterprise-solutions" }
      ]
    },
    {
      title: "AI & Autonomous Systems",
      links: [
        { label: "AI Autonomous Systems", path: "/ai-autonomous-systems" },
        { label: "AI Research Assistant", path: "/ai-autonomous-research-assistant" },
        { label: "AI Business Manager", path: "/ai-autonomous-business-manager" },
        { label: "AI Business Platform", path: "/ai-autonomous-business-platform" },
        { label: "AI Asset Management", path: "/ai-powered-it-asset-management" }
      ]
    },
    {
      title: "Advanced Solutions",
      links: [
        { label: "Quantum Neural Networks", path: "/quantum-neural-network-platform" },
        { label: "Autonomous Business Platform", path: "/autonomous-business-operations-platform" },
        { label: "SOC2 Compliance", path: "/soc2-compliance-automation" },
        { label: "5G Enterprise Solutions", path: "/5g-enterprise-solutions" },
        { label: "Emerging Technology", path: "/emerging-tech" }
      ]
    },
    {
      title: "Industry Solutions",
      links: [
        { label: "Healthcare Solutions", path: "/solutions/healthcare" },
        { label: "Financial Solutions", path: "/solutions/financial" },
        { label: "Manufacturing Solutions", path: "/solutions/manufacturing" },
        { label: "Retail Solutions", path: "/solutions/retail" },
        { label: "Government Solutions", path: "/solutions/government" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Our Team", path: "/team" },
        { label: "Careers", path: "/careers" },
        { label: "Partners", path: "/partners" },
        { label: "Case Studies", path: "/case-studies" }
      ]
    },
    {
      title: "Resources & Support",
      links: [
        { label: "Help Center", path: "/help" },
        { label: "Documentation", path: "/docs" },
        { label: "FAQ", path: "/faq" },
        { label: "Webinars", path: "/webinars" },
        { label: "White Papers", path: "/white-papers" }
      ]
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "https://linkedin.com/company/ziontechgroup", icon: "💼" },
    { name: "Twitter", url: "https://twitter.com/ziontechgroup", icon: "🐦" },
    { name: "GitHub", url: "https://github.com/ziontechgroup", icon: "💻" },
    { name: "YouTube", url: "https://youtube.com/@ziontechgroup", icon: "📺" }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-2xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of innovative technology solutions, AI-powered services, 
              and digital transformation expertise. We help businesses navigate the future of technology.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-lg hover:bg-blue-500/20 hover:scale-110 transition-all duration-300"
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
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

      {/* Newsletter Signup */}
      <div className="border-t border-white/10 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Our Latest Insights
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get the latest technology trends, AI insights, and industry updates delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm text-gray-300">
              <Link to="/privacy" className="hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-blue-400 transition-colors duration-300">
                Cookie Policy
              </Link>
              <Link to="/sitemap" className="hover:text-blue-400 transition-colors duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;