import React from "react;
import { Link    } from "react-router-dom;
import { ArrowRight, Mail, Phone, MapPin, Globe, Twitter, Linkedin, Github, Facebook, Instagram, Youtube, Award, Users, Shield, Zap, Brain, Cloud, CheckCircle    } from "lucide-react;

const Footer = () => {
    const currentYear = new Date().getFullYear()
  const serviceCategories = [
    {
      title: 'AI Services','
      icon: <Brain className="w-5 h-5" />,"
      color: 'from-blue-500 to-cyan-500','
      links: [
        { label: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro' ,
  },
        {
    label: 'AI Cybersecurity Suite Pro', href: '/ai-cybersecurity-suite-pro' ,
  },
        {
    label: 'AI Content Generation Pro', href: '/ai-content-generation-pro' ,
  },
        {
    label: 'AI Customer Support Chatbot', href: '/ai-customer-support-chatbot' ,
  },
        {
    label: 'AI Data Analytics Pro', href: '/ai-data-analytics-pro' ,
  },
        {
    label: 'AI Financial Analysis Pro', href: '/ai-financial-analysis-pro' ,
  },
        {
    label: 'AI HR Recruitment Pro', href: '/ai-hr-recruitment-pro' ,
  },
        {
    label: 'AI Image Recognition Pro', href: '/ai-image-recognition-pro' ,
  }
      ,
  ,
  ]
    },
    {
    title: 'IT Services','
      icon: <Cloud className="w-5 h-5" />,"
      color: 'from-green-500 to-emerald-500','
      links: [
    { label: 'Cloud Infrastructure', href: '/cloud-infrastructure' ,
  },
        {
    label: 'Database Management', href: '/database-management' ,
  },
        {
    label: 'Cybersecurity Solutions', href: '/cybersecurity-solutions' ,
  },
        {
    label: 'IT Consulting', href: '/it-consulting' ,
  },
        {
    label: 'System Integration', href: '/system-integration' ,
  },
        {
    label: 'Network Security', href: '/network-security' ,
  }
      ,
  ,
  ]
    },
    {
    title: 'Solutions','
      icon: <Zap className="w-5 h-5" />,"
      color: 'from-purple-500 to-pink-500','
      links: [
    { label: 'Digital Transformation', href: '/digital-transformation' ,
  },
        {
    label: 'Business Intelligence', href: '/business-intelligence' ,
  },
        {
    label: 'Process Automation', href: '/process-automation' ,
  },
        {
    label: 'Data Analytics', href: '/data-analytics' ,
  },
        {
    label: 'Mobile Solutions', href: '/mobile-solutions' ,
  }
      ,
  ,
  ]
    }
  ]
  const companyLinks = [
    {
    label: 'About Us', href: '/about' ,
  },
    {
    label: 'Our Team', href: '/team' ,
  },
    {
    label: 'Careers', href: '/careers' ,
  },
    {
    label: 'Case Studies', href: '/case-studies' ,
  },
    {
    label: 'Blog', href: '/blog' ,
  },
    {
    label: 'News', href: '/news' ,
  }
  ,
  ,
  ]
  const supportLinks = [
    {
    label: 'Help Center', href: '/help' ,
  },
    {
    label: 'Documentation', href: '/docs' ,
  },
    {
    label: 'API Reference', href: '/api-docs' ,
  },
    {
    label: 'Status Page', href: '/status' ,
  },
    {
    label: 'Contact Support', href: '/support' ,
  }
  ,
  ,
  ]
  const legalLinks = [
    {
    label: 'Privacy Policy', href: '/privacy' ,
  },
    {
    label: 'Terms of Service', href: '/terms' ,
  },
    {
    label: 'Cookie Policy', href: '/cookies' ,
  },
    {
    label: 'GDPR Compliance', href: '/gdpr' ,
  },
    {
    label: 'Security', href: '/security' ,
  }
  ,
  ,
  ]
  const socialLinks = [
    {
    icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' ,
  },'"'"
    {
    icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn' ,
  },'"'"
    {
    icon: <Github className="w-5 h-5" />, href: 'https://github.com/ziontechgroup', label: 'GitHub' ,
  },'"'"
    {
    icon: <Facebook className="w-5 h-5" />, href: 'https://facebook.com/ziontechgroup', label: 'Facebook' ,
  },'"'"
    {
    icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/ziontechgroup', label: 'Instagram' ,
  },'"'"
    {
    icon: <Youtube className="w-5 h-5" />, href: 'https://youtube.com/ziontechgroup', label: 'YouTube' ,
  }'"'"
  ,
  ,
  ]
  return (
<>    <footer className="bg-slate-900 text-white">"
      {/* Main Footer Content   */}


          {/* Service Categories   */}
          {serviceCategories.map((category, index) => (
            <div key={index} className="lg:col-span-1">"
              <div className="flex items-center mb-6">"
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-3`}>```
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>"
              </div>
              <ul className="space-y-3">"
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}></li>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm">"
                      {link.label}
                    </Link>
                  </li>
                )})}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Links   */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-slate-700">"
          <div></div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>"
            <ul className="space-y-3">"
              {companyLinks.map((link, index) => (
                <li key={index}></li>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm">"
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div></div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>"
            <ul className="space-y-3">"
              {supportLinks.map((link, index) => (
                <li key={index}></li>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm">"
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div></div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>"
            <ul className="space-y-3">"
              {legalLinks.map((link, index) => (
                <li key={index}></li>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm">"
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup   */}
        <div className="mt-12 pt-8 border-t border-slate-700">"
          <div className="max-w-md mx-auto text-center">"
            <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>"
            <p className="text-gray-400 mb-6">Get the latest news and updates from Zion Tech Group.</p>"
            <div className="flex">"
              <input
                type="email
                placeholder="Enter your email
                className="flex-1 px-4 py-2 bg-slate-800 border border-slate-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500
              /></input>
              <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-r-lg transition-colors flex items-center">"
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />"
              </button>
            </div>
          </div>
        </div>

      {/* Bottom Footer   */}
      <div className="bg-slate-800 border-t border-slate-700">"
        <div className="container mx-auto px-4 py-6">"
          <div className="flex flex-col md:flex-row items-center justify-between">"
            <div className="text-gray-400 text-sm mb-4 md:mb-0">"
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">"
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank
                  rel="noopener noreferrer
                  className="text-gray-400 hover:text-white transition-colors
                  aria-label={social.label}></a>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer