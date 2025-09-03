import React from 'react'
import Link from 'next/link'
import { 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  ArrowUp, 
  ArrowRight,
  Brain,
  Code,
  Server,
  Shield,
  Cloud,
  Zap,
  Users,
  BarChart3,
  Settings,
  FileText,
  HelpCircle,
  Award,
  CheckCircle,
  Star,
  Lock,
  Eye,
  Network,
  Database,
  Cpu,
  Smartphone,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Sparkles,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Palette,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Github
} from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerSections = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      category: "Core Services",
      services: [
        { name: "AI Content Creation", href: "/services/ai-content-creation", badge: "Popular" },
        { name: "AI Email Automation", href: "/services/ai-email-responder", badge: "New" },
        { name: "AI SEO Optimization", href: "/services/ai-seo-optimization", badge: "Featured" },
        { name: "AI Development", href: "/services/ai-development", badge: "Custom" },
        { name: "Machine Learning", href: "/ai-services", badge: "Advanced" },
        { name: "Natural Language Processing", href: "/ai-services", badge: "NLP" }
      ]
    },
    {
      title: "Micro SaaS Solutions",
      icon: Code,
      category: "Micro SaaS",
      services: [
        { name: "Content Creation Suite", href: "/micro-saas", badge: "Popular" },
        { name: "Email Automation", href: "/micro-saas", badge: "New" },
        { name: "Affiliate Tracking", href: "/micro-saas", badge: "Marketing" },
        { name: "Return Management", href: "/micro-saas", badge: "E-commerce" },
        { name: "Talent Matching", href: "/micro-saas", badge: "HR" },
        { name: "Document Processing", href: "/micro-saas", badge: "Automation" }
      ]
    },
    {
      title: "IT & Infrastructure",
      icon: Server,
      category: "Infrastructure",
      services: [
        { name: "Cloud Services", href: "/it-services", badge: "Popular" },
        { name: "Cybersecurity", href: "/cybersecurity", badge: "Security" },
        { name: "Network Management", href: "/it-services", badge: "Network" },
        { name: "IT Support", href: "/it-services", badge: "Support" },
        { name: "DevOps", href: "/cloud-devops", badge: "DevOps" },
        { name: "IoT Solutions", href: "/iot-solutions", badge: "IoT" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "Partners", href: "/partners" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Press", href: "/press" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "White Papers", href: "/whitepapers" },
        { name: "Support", href: "/support" },
        { name: "Training", href: "/training" },
        { name: "Blog", href: "/blog" },
        { name: "Help Center", href: "/help" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "GDPR Compliance", href: "/gdpr" },
        { name: "Security", href: "/security" },
        { name: "Compliance", href: "/compliance" }
      ]
    }
  ]

  const contactInfo = [
    { icon: Mail, label: "Email", value: "kleber@ziontechgroup.com", href: "mailto:kleber@ziontechgroup.com" },
    { icon: Phone, label: "Phone", value: "+1 302 464 0950", href: "tel:+13024640950" },
    { icon: MapPin, label: "Address", value: "364 E Main St STE 1008, Middletown DE 19709", href: "#" },
    { icon: Globe, label: "Website", value: "ziontechgroup.com", href: "https://ziontechgroup.com" }
  ]

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/company/ziontechgroup", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/ziontechgroup", label: "Twitter" },
    { icon: Facebook, href: "https://facebook.com/ziontechgroup", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/ziontechgroup", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/ziontechgroup", label: "YouTube" },
    { icon: Github, href: "https://github.com/ziontechgroup", label: "GitHub" }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI solutions, micro SaaS applications, and comprehensive IT services. 
              Transforming businesses with cutting-edge technology and innovative solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center text-sm text-gray-300">
                  <info.icon className="h-4 w-4 mr-3 text-blue-400" />
                  <a 
                    href={info.href} 
                    className="hover:text-white transition-colors"
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {info.value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Services Sections */}
          {footerSections.slice(0, 3).map((section, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center mb-4">
                <section.icon className="h-5 w-5 text-blue-400 mr-2" />
                <h3 className="text-lg font-semibold">{section.title}</h3>
              </div>
              <div className="space-y-2">
                {section.services ? (
                  section.services.map((service, serviceIndex) => (
                    <Link 
                      key={serviceIndex}
                      href={service.href}
                      className="block text-sm text-gray-300 hover:text-white transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span>{service.name}</span>
                        {service.badge && (
                          <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
                            {service.badge}
                          </span>
                        )}
                      </div>
                    </Link>
                  ))
                ) : (
                  section.links?.map((link, linkIndex) => (
                    <Link 
                      key={linkIndex}
                      href={link.href}
                      className="block text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {footerSections.slice(3).map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-semibold">{section.title}</h3>
                <div className="space-y-2">
                  {section.links?.map((link, linkIndex) => (
                    <Link 
                      key={linkIndex}
                      href={link.href}
                      className="block text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={scrollToTop}
                className="flex items-center text-sm text-gray-300 hover:text-white transition-colors"
              >
                <ArrowUp className="h-4 w-4 mr-1" />
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <span className="flex items-center">
                Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by Zion Tech Group
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer