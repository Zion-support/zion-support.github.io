import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  Linkedin, 
  Twitter, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowRight,
  Brain,
  Shield,
  Zap,
  Globe,
  BarChart3,
  Cloud,
  Code,
  Database,
  Network,
  Smartphone,
  Monitor,
  Target,
  Calendar,
  Users,
  Award,
  Star
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = useMemo(() => [
    { name: "AI Solutions", href: "/ai-services", icon: <Brain className="w-4 h-4" /> },
    { name: "IT Services", href: "/services", icon: <Shield className="w-4 h-4" /> },
    { name: "Micro SAAS", href: "/micro-saas", icon: <Zap className="w-4 h-4" /> },
    { name: "5G Solutions", href: "/5g-solutions", icon: <Globe className="w-4 h-4" /> }
  ], []);

  const aiServices = useMemo(() => [
    { name: "AI Analytics", href: "/ai-analytics" },
    { name: "AI Automation", href: "/ai-automation" },
    { name: "AI Content Generation", href: "/ai-content-generation" },
    { name: "AI Customer Service", href: "/ai-customer-service" },
    { name: "AI Marketing", href: "/ai-marketing" },
    { name: "AI Healthcare", href: "/ai-healthcare" }
  ], []);

  const microSaasServices = useMemo(() => [
    { name: "Zion Analytics Pro", href: "/zion-analytics-pro" },
    { name: "Zion Security Shield", href: "/zion-security-shield" },
    { name: "Zion Cloud Vault", href: "/zion-cloud-vault" },
    { name: "Zion Content Studio", href: "/zion-content-studio" },
    { name: "Zion AI Video Generator", href: "/zion-ai-video-generator" },
    { name: "Zion AI Invoice Generator", href: "/zion-ai-invoice-generator" }
  ], []);

  const companyLinks = useMemo(() => [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "Demo", href: "/demo" },
    { name: "Support", href: "/support" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" }
  ], []);

  const stats = useMemo(() => [
    { number: "10,000+", label: "Active Users", icon: <Users className="w-5 h-5" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-5 h-5" /> },
    { number: "60+", label: "Micro SAAS Solutions", icon: <Zap className="w-5 h-5" /> },
    { number: "24/7", label: "Support", icon: <Clock className="w-5 h-5" /> }
  ], []);

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <span className="ml-3 text-xl font-bold text-white">Zion Tech Group</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                  <span className="text-sm">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                  <span className="text-sm">+1 (302) 464-0950</span>
                </div>
                <div className="flex items-start text-gray-300">
                  <MapPin className="w-4 h-4 mr-3 text-cyan-400 mt-0.5" />
                  <span className="text-sm">364 E Main St STE 1008<br />Middletown, DE 19709</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">Core Services</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.href}
                      className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors group"
                    >
                      {service.icon}
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">AI Services</h4>
              <ul className="space-y-2">
                {aiServices.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">Micro SAAS</h4>
              <ul className="space-y-2">
                {microSaasServices.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {companyLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://linkedin.com/company/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

            <div className="text-center text-gray-400 text-sm">
              <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
              <p className="mt-2">Transforming businesses with cutting-edge AI and technology solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
