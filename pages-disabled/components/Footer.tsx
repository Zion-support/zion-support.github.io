
Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,;

class ErrorBoundary extends React.Component {
  constructor(props) {

    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {}
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {}
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {}
    if (this.state.hasError) {}
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from "react";"
import Link from "next/link";"
import { motion } from "framer-motion";
import {;
  Mail,;
  Phone,;
  MapPin,;
  Facebook,;
  Twitter,;
  Linkedin,;
  Instagram,;
  Github,;

} from "lucide-react";
const Footer = () => {}
  const currentYear = new Date().getFullYear();

import Link from 'next/link';

  const footerLinks = {
    services: [
      { name: "AI Services", href: "/ai-services" }
      { name: "IT Services", href: "/it-services" }
      { name: "Micro SaaS", href: "/micro-saas" }
      { name: "Cloud Solutions", href: "/cloud-solutions" }
      { name: "Cybersecurity", href: "/cybersecurity" }
      { name: "Database Solutions", href: "/database-solutions" }
    ]

    solutions: [
      { name: "Enterprise Solutions", href: "/enterprise-solutions" }
      { name: "Startup Solutions", href: "/startup-solutions" }
      { name: "Industries", href: "/industries" }
      { name: "Custom Development", href: "/custom-development" }
      { name: "Digital Transformation", href: "/digital-transformation" }

      { name: "Consulting", href: "/consulting" }
    ]
    company: ["
      { name: "About Us", href: "/about" }"
      { name: "Our Team", href: "/team" }"
      { name: "Careers", href: "/careers" }"
      { name: "Case Studies", href: "/case-studies" }"
      { name: "News", href: "/news" }"
      { name: "Partners", href: "/partners" }
    ]
    resources: ["
      { name: "Blog", href: "/blog" }"
      { name: "Documentation", href: "/docs" }"
      { name: "API Documentation", href: "/docs/api" }"
      { name: "Tutorials", href: "/tutorials" }"
      { name: "White Papers", href: "/white-papers" }"
      { name: "Webinars", href: "/webinars" }
    ]
    legal: ["
      { name: "Privacy Policy", href: "/privacy" }"
      { name: "Terms of Service", href: "/terms" }"
      { name: "Cookie Policy", href: "/cookies" }"
      { name: "Security", href: "/security" }"
      { name: "Compliance", href: "/compliance" }"
      { name: "Accessibility", href: "/accessibility" }
    ]
  }

  const socialLinks = [
    { name: "Facebook", href: "#", icon: Facebook }
    { name: "Twitter", href: "#", icon: Twitter }
    { name: "LinkedIn", href: "#", icon: Linkedin }
    { name: "Instagram", href: "#", icon: Instagram }
    { name: "GitHub", href: "#", icon: Github }

  const socialLinks = [;
    { name: "Facebook", href: "#", icon: Facebook },;
    { name: "Twitter", href: "#", icon: Twitter },;
    { name: "LinkedIn", href: "#", icon: Linkedin },;
    { name: "Instagram", href: "#", icon: Instagram },;
    { name: "GitHub", href: "#", icon: Github },;
  ];

  return (
    <footer className="bg-gray-900 text-white">;
      <div className="container mx-auto px-4 py-16">;

        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">;
          {/* Company Info */}"
          <div className="lg:col-span-1">;
            <motion&& motion.div;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}

          {/* Company */}
          <div>;
            <motion&& motion.div;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8, delay: 0 && 0.3 }}>;"
              <h3 className="text-lg font-semibold mb-6">Company</h3>;"
              <ul className="space-y-3">;
                {footerLinks && footerLinks.company.map((link, index) => (;
                  <li key={index}>;
                    <Link;
                      href={link && link.href}"
                      className="text-gray-400 hover:text-white transition-colors">;
                      {link && link.name}
                    </Link>;
                  </li>;
                ))}

          {/* Resources & Legal */}
          <div>;
            <motion&& motion.div;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}>;"
              <h3 className="text-lg font-semibold mb-6">Resources</h3>;"
              <ul className="space-y-3 mb-8">;
                {footerLinks && footerLinks.resources.map((link, index) => (;
                  <li key={index}>;
                    <Link;
                      href={link && link.href}"
                      className="text-gray-400 hover:text-white transition-colors">;
                      {link && link.name}
                    </Link>;
                  </li>;
                ))}

              </ul>;
"
              <h3 className="text-lg font-semibold mb-6">Legal</h3>;"
              <ul className="space-y-3">;
                {footerLinks && footerLinks.legal.map((link, index) => (;
                  <li key={index}>;

                      className="text-gray-400 hover:text-white transition-colors">;
                      {link && link.name}
                    </Link>;
                  </li>;
                ))}

              </ul>;
            </motion && motion.div>;
          </div>;
        </div>;

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">;

          <div className="flex flex-col md:flex-row justify-between items-center">;
            <motion&& motion.div;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}

            <motion.div

            <motion.div
              transition={{ duration: 0 && 0.8 }}

              className="text-gray-400 text-sm mb-4 md:mb-0">;
              © {currentYear} Zion Tech Group. All rights reserved.;
            </motion && motion.div>;

              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}"
              className="flex space-x-4">;
              {socialLinks && socialLinks.map((social, index) => (;
                <a;
                  key={index}
                  href={social && social.href}"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label={social && social.name}>;"
                  <social && social.icon className="w-5 h-5" />;
                </a>;
              ))}

        {/* Service Categories */}
        <div className="mt-16 pt-8 border-t border-gray-800">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Micro SaaS Categories */}
            <div>"
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Micro SaaS Solutions</h4>"
              <div className="grid grid-cols-2 gap-2">
                {microSaasCategories.map((category) => ("
                  <div key={category.title} className="flex items-center space-x-2 text-sm text-gray-400">"
                    <category.icon className="w-4 h-4" />
                    <span>{category.title}</span>"
                    <span className="text-blue-400">({category.count})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Service Categories */}
            <div>"
              <h4 className="text-lg font-semibold mb-4 text-green-400">AI Services</h4>"
              <div className="grid grid-cols-2 gap-2">
                {aiServiceCategories.map((category) => ("
                  <div key={category.title} className="flex items-center space-x-2 text-sm text-gray-400">"
                    <category.icon className="w-4 h-4" />
                    <span>{category.title}</span>"
                    <span className="text-green-400">({category.count})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* IT Service Categories */}
            <div>"
              <h4 className="text-lg font-semibold mb-4 text-purple-400">IT Services</h4>"
              <div className="grid grid-cols-2 gap-2">
                {itServiceCategories.map((category) => ("
                  <div key={category.title} className="flex items-center space-x-2 text-sm text-gray-400">"
                    <category.icon className="w-4 h-4" />
                    <span>{category.title}</span>"
                    <span className="text-purple-400">({category.count})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}"
        <div className="mt-16 pt-8 border-t border-gray-800">"
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>"
              <div className="text-3xl font-bold text-blue-400 mb-2">235+</div>"
              <div className="text-gray-400">Services & Solutions</div>
            </div>
            <div>"
              <div className="text-3xl font-bold text-green-400 mb-2">1,200+</div>"
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div>"
              <div className="text-3xl font-bold text-purple-400 mb-2">95+</div>"
              <div className="text-gray-400">Expert Team Members</div>
            </div>
            <div>"
              <div className="text-3xl font-bold text-yellow-400 mb-2">15+</div>"
              <div className="text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}"
      <div className="bg-gray-800 border-t border-gray-700">"
        <div className="container mx-auto px-4 py-6">"
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">"
            <div className="text-gray-400 text-sm">

            <motion.div

              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}"
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <a;
                  key={index}
                  href={social.href}"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label={social.name}
                >"
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>

            <div className="flex items-center space-x-6">

              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors text-sm">
                Sitemap;
              </Link>"
              <Link href="/accessibility" className="text-gray-400 hover:text-white transition-colors text-sm">
                Accessibility;
              </Link>"
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookie Policy;
              </Link>
            </div>

          </div>
        </div>
      </div>
    </footer>

  );

import MainLayout from '../../src/components/layout/MainLayout';

const Page = () => {}
  return (
    <MainLayout"
      title="Footer - Zion Tech Group""
      description="Footer component"
    >"
      <div className="min-h-screen bg-gray-50">"
        <div className="container mx-auto px-4 py-16">"
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Footer</h1>"
          <p className="text-xl text-gray-600">Footer component page</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;

