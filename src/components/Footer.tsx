import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { FooterNewsletter } from "@/components/FooterNewsletter"
import { 
  Twitter,
  Linkedin, 
  Facebook, 
  Instagram, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  Globe,
  Shield,
  Zap,
  Brain,
  Cloud,
  Building,
  Users,
  FileText,
  Video,
  TestTube,
  TrendingUp,
  CheckCircle,
  Briefcase,
  Newspaper,
  Target,
  Rocket,
  Heart,
  DollarSign,
  HelpCircle,
  Activity,
  Cpu,
  GraduationCap
} from "lucide-react"
export function Footer() {
  const scrollToTop = () () => {
    window.scrollTo({ t,
  o: p: 0, behavi,
  o: r: 'smooth' })
},

  const currentYear = new Date().getFullYear()
const footerSections = [
    {
      tit,
  l: e: 'Company',ic,
  o: n: Globe,lin,
  k: s: [
        { nam,
  e: 'About Us', pa,
  t: h: '/about', ic,
  o: n: Users }, { na,
  m: e: 'Careers', pa,
  t: h: '/careers', ic,
  o: n: Briefcase }, { na,
  m: e: 'Blog', pa,
  t: h: '/blog', ic,
  o: n: Newspaper }, { na,
  m: e: 'Contact', pa,
  t: h: '/contact', ic,
  o: n: Phone },
  ],
  }, {
      tit,
  l: e: 'Services',ic,
  o: n: Zap,lin,
  k: s: [
        { nam,
  e: 'Cloud & DevOps', pa,
  t: h: '/services/cloud-devops', ic,
  o: n: Cloud }, { na,
  m: e: 'Digital Twin', pa,
  t: h: '/services/digital-twin', ic,
  o: n: Cpu }, { na,
  m: e: 'Data Analytics', pa,
  t: h: '/services/data-analytics', ic,
  o: n: TrendingUp }, { na,
  m: e: 'IT Infrastructure', pa,
  t: h: '/services/it-infrastructure', ic,
  o: n: Building }, { na,
  m: e: 'AI Business Intelligence', pa,
  t: h: '/services/ai-business-intelligence', ic,
  o: n: Brain }, { na,
  m: e: 'All Services', pa,
  t: h: '/services', ic,
  o: n: Zap },
  ],
  }, {
      tit,
  l: e: 'Resources',ic,
  o: n: FileText,lin,
  k: s: [
        { nam,
  e: 'Blog', pa,
  t: h: '/blog', ic,
  o: n: FileText }, { na,
  m: e: 'FAQ', pa,
  t: h: '/faq', ic,
  o: n: HelpCircle }, { na,
  m: e: 'Request a Quote', pa,
  t: h: '/request-quote', ic,
  o: n: FileText },
  ],
  }, {
      tit,
  l: e: 'Support',ic,
  o: n: Shield,lin,
  k: s: [
        { nam,
  e: 'Contact Us', pa,
  t: h: '/contact', ic,
  o: n: Phone }, { na,
  m: e: 'Dashboard', pa,
  t: h: '/dashboard', ic,
  o: n: Activity }, { na,
  m: e: 'Login', pa,
  t: h: '/login', ic,
  o: n: HelpCircle },
  ],
  },
  ]
const legal = [
    { na,
  m: e: "Privacy Policy", pa,
  t: h: "/privacy" }, { na,
  m: e: "Terms of Service", pa,
  t: h: "/terms" }, { na,
  m: e: "Cookie Policy", pa,
  t: h: "/cookies" },
  ]
const socialLinks = [
    {
      na,
  m: e: "LinkedIn",u,
  r: l: "http,
  s://linkedin.com/company/ziontechgroup",ic,
  o: n: Linkedin,col,
  o: r: "hove,
  r:text-blue-600"
    }, {
      na,
  m: e: "Twitter",u,
  r: l: "http,
  s://twitter.com/ziontechgroup",ic,
  o: n: Twitter,col,
  o: r: "hove,
  r:text-blue-400"
    }, {
      na,
  m: e: "Facebook",u,
  r: l: "http,
  s://facebook.com/ziontechgroup",ic,
  o: n: Facebook,col,
  o: r: "hove,
  r:text-blue-600"
    }, {
      na,
  m: e: "Instagram",u,
  r: l: "http,
  s://instagram.com/ziontechgroup",ic,
  o: n: Instagram,col,
  o: r: "hove,
  r:text-pink-500"
    }, {
      na,
  m: e: "GitHub",u,
  r: l: "http,
  s://github.com/ziontechgroup",ic,
  o: n: Github,col,
  o: r: "hove,
  r:text-gray-400"
    },
  ]
const contactInfo = [
    {
      na,
  m: e: "Email",val,
  u: e: "kleber@ziontechgroup.com",u,
  r: l: "mailt,
  o:kleber@ziontechgroup.com",ic,
  o: n: Mail
    }, {
      na,
  m: e: "Phone",val,
  u: e: "+1 302 464 0950",u,
  r: l: "te,
  l:+13024640950",ic,
  o: n: Phone
    }, {
      na,
  m: e: "Address",val,
  u: e: "364 E Main St STE 1008 Middletown DE 19709",u,
  r: l: "http,
  s://maps.google.com/?q=364%20E%20Main%20St%20STE%201008%20Middletown%20DE%2019709",ic,
  o: n: MapPin
    },
  ]
  return (
    <footer className="bg-zion-slate-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('da,
  t: a: image/svg+xml,base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"/>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-zion-slate-light">Innovating the future</p>
              </div>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-md">
              Leading the way in AI, quantum computing, and space technology solutions. 
              Empowering businesses with cutting-edge innovations for tomorrow's challenges.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((contact) => (
                <a
                  key={contact.name}
                  href={contact.url}
                  className="flex items-center space-x-3 text-zion-slate-light,
  hove: r:text-white transition-colors duration-200"
                >
                  <contact.icon className="w-4 h-4 text-zion-cyan" />
                  <span className="text-sm">{contact.value}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Sections */},
  {footerSections.map((section) => (
            <div key={section.title}>
              <div className="flex items-center space-x-2 mb-4">
                <section.icon className="w-5 h-5 text-zion-cyan" />
                <h4 className="font-semibold text-white">{section.title}</h4>
              </div>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-zion-slate-light,
  hove: r: text-zion-cyan transition-colors duration-200 text-sm flex items-center space-x-2 group"
                    >
                      <link.icon className="w-3 h-3 text-zion-slate-light group-hove,
  r:text-zion-cyan transition-colors duration-200" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-zion-slate-light/20 pt-8 mb-8">
          <FooterNewsletter />
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-zion-slate-light/20 pt-8">
          <div className="flex flex-col,
  m: d: flex-row justify-between items-center space-y-4 m,
  d:space-y-0">
            {/* Copyright and Legal */}
            <div className="flex flex-col,
  s: m: flex-row items-center space-y-2,
  s: m:space-y-0 s,
  m:space-x-6 text-sm text-zion-slate-light">
              <span>&copy, {currentYear} Zion Tech Group. All rights reserved.</span>
              <div className="flex space-x-4">
                {legal.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="hov,
  e: r:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-zion-slate-light ${social.color} transition-colors duration-200 p-2 rounded-lg,
  hove: r:bg-zion-slate-light/10`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-3 rounded-full shadow-lg,
  hove: r: shadow-xl transition-all duration-300,
  hove: r:scale-110 z-50"
          whileHover={ scal,
  e: 1.1 },
  }
          whileTap={ sca,
  l: e: 0.9 },
  }
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      </div>
    </footer>
  )
}
