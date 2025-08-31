import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Globe, Linkedin, Twitter, Github } from 'lucide-react';

const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      services: [
        { name: "AI Chatbot Development", href: "/services#ai-chatbot-development" },
        { name: "Predictive Analytics", href: "/services#predictive-analytics" },
        { name: "Computer Vision", href: "/services#computer-vision" },
        { name: "AI Process Automation", href: "/services#ai-automation" }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      services: [
        { name: "Cloud Migration", href: "/services#cloud-migration" },
        { name: "DevOps Automation", href: "/services#devops-automation" },
        { name: "Serverless Architecture", href: "/services#serverless-architecture" }
      ]
    },
    {
      title: "Cybersecurity",
      services: [
        { name: "Security Audit", href: "/services#security-audit" },
        { name: "Zero Trust Security", href: "/services#zero-trust-security" },
        { name: "Compliance Management", href: "/services#compliance-management" }
      ]
    },
    {
      title: "Web Development",
      services: [
        { name: "Progressive Web Apps", href: "/services#progressive-web-apps" },
        { name: "E-commerce Platforms", href: "/services#ecommerce-platforms" },
        { name: "API Development", href: "/services#api-development" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <div className="text-xl font-bold">Zion Tech Group</div>
                <div className="text-sm text-gray-400">Technology Solutions</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading technology solutions provider specializing in AI, cybersecurity, 
              cloud infrastructure, and digital transformation services.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceCategories.map((category) => (
                <div key={category.title}>
                  <h4 className="font-medium text-blue-400 mb-3">{category.title}</h4>
                  <ul className="space-y-2">
                    {category.services.map((service) => (
                      <li key={service.name}>
                        <Link href={service.href}>
                          <span className="text-gray-300 hover:text-white transition-colors cursor-pointer text-sm">
                            {service.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Phone</p>
                  <a 
                    href="tel:+13024640950" 
                    className="text-white hover:text-blue-400 transition-colors font-medium"
                  >
                    +1 302 464 0950
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Email</p>
                  <a 
                    href="mailto:kleber@ziontechgroup.com" 
                    className="text-white hover:text-blue-400 transition-colors font-medium"
                  >
                    kleber@ziontechgroup.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Address</p>
                  <p className="text-white text-sm">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Globe className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Website</p>
                  <a 
                    href="https://ziontechgroup.com" 
                    className="text-white hover:text-blue-400 transition-colors font-medium"
                  >
                    ziontechgroup.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              &copy; {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy-policy">
                <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Privacy Policy
                </span>
              </Link>
              <Link href="/terms-of-service">
                <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Terms of Service
                </span>
              </Link>
              <Link href="/sitemap">
                <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Sitemap
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;
