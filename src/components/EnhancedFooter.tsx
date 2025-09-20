import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { 
  Phone
  Mail, 
  MapPin, 
  Globe, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram
  Github
  Youtube
  ArrowRight
  Star
  Shield
  Zap
  Brain
  Cloud
  Users
  Award
  TrendingUp
  Lightbulb
  Rocket
  Target
  CheckCircle
  Heart
  MessageCircle
  HelpCircle
  BookOpen
  ShoppingCart
  Cpu
  Database
  Network
  Lock
  BarChart3
  Code
  Server
  Smartphone
  Chip
  Wifi
  ShieldCheck
  Globe2
  Bot
  Workflow
  Eye
  Sparkles
} from "lucide-react"
export function EnhancedFooter() {
  const currentYear = new Date().getFullYear()
  const footerSections = [
    {
      tit,
  l: e: "Services",lin,
  k: s: [
        { nam,
  e: "AI Services", hr,
  e: f: "/ai-services", ic,
  o: n: Brain }, { na,
  m: e: "IT Services", hr,
  e: f: "/it-services", ic,
  o: n: Cpu }, { na,
  m: e: "Micro SaaS", hr,
  e: f: "/micro-saas", ic,
  o: n: ShoppingCart }, { na,
  m: e: "2025 Services", hr,
  e: f: "/comprehensive-services-showcase-2025", ic,
  o: n: Star }, { na,
  m: e: "2026 Services", hr,
  e: f: "/services2026", ic,
  o: n: TrendingUp }, { na,
  m: e: "2027 Services", hr,
  e: f: "/services2027", ic,
  o: n: Rocket }, { na,
  m: e: "2029 Services", hr,
  e: f: "/innovative-services-showcase-2029", ic,
  o: n: Sparkles }
      ]
    }, {
      tit,
  l: e: "Solutions",lin,
  k: s: [
        { nam,
  e: "Enterprise", hr,
  e: f: "/solutions/enterprise", ic,
  o: n: Building }, { na,
  m: e: "Healthcare", hr,
  e: f: "/solutions/healthcare", ic,
  o: n: Heart }, { na,
  m: e: "Finance", hr,
  e: f: "/solutions/finance", ic,
  o: n: DollarSign }, { na,
  m: e: "Manufacturing", hr,
  e: f: "/solutions/manufacturing", ic,
  o: n: Factory }, { na,
  m: e: "Retail", hr,
  e: f: "/solutions/retail", ic,
  o: n: ShoppingBag }, { na,
  m: e: "Education", hr,
  e: f: "/solutions/education", ic,
  o: n: GraduationCap }
      ]
    }, {
      tit,
  l: e: "Company",lin,
  k: s: [
        { nam,
  e: "About Us", hr,
  e: f: "/about", ic,
  o: n: Users }, { na,
  m: e: "Our Team", hr,
  e: f: "/team", ic,
  o: n: Users }, { na,
  m: e: "Careers", hr,
  e: f: "/careers", ic,
  o: n: Star }, { na,
  m: e: "Partners", hr,
  e: f: "/partners", ic,
  o: n: Handshake }, { na,
  m: e: "News", hr,
  e: f: "/news", ic,
  o: n: Newspaper }, { na,
  m: e: "Blog", hr,
  e: f: "/blog", ic,
  o: n: BookOpen }
      ]
    }, {
      tit,
  l: e: "Resources",lin,
  k: s: [
        { nam,
  e: "Documentation", hr,
  e: f: "/docs", ic,
  o: n: FileText }, { na,
  m: e: "API Reference", hr,
  e: f: "/api", ic,
  o: n: Code }, { na,
  m: e: "Developer Portal", hr,
  e: f: "/developers", ic,
  o: n: Terminal }, { na,
  m: e: "White Papers", hr,
  e: f: "/white-papers", ic,
  o: n: FileText }, { na,
  m: e: "Webinars", hr,
  e: f: "/webinars", ic,
  o: n: Video }, { na,
  m: e: "Training", hr,
  e: f: "/training", ic,
  o: n: GraduationCap }
      ]
    }, {
      tit,
  l: e: "Support",lin,
  k: s: [
        { nam,
  e: "Help Center", hr,
  e: f: "/help", ic,
  o: n: HelpCircle }, { na,
  m: e: "Contact Support", hr,
  e: f: "/contact", ic,
  o: n: MessageCircle }, { na,
  m: e: "Status Page", hr,
  e: f: "/status", ic,
  o: n: Activity }, { na,
  m: e: "Request Quote", hr,
  e: f: "/request-quote", ic,
  o: n: DollarSign }, { na,
  m: e: "FAQ", hr,
  e: f: "/faq", ic,
  o: n: HelpCircle }, { na,
  m: e: "Live Chat", hr,
  e: f: "/chat", ic,
  o: n: MessageCircle }
      ]
    }
  ]
  const socialLinks = [
    { na,
  m: e: "LinkedIn", hr,
  e: f: "http,
  s://linkedin.com/company/ziontechgroup", ic,
  o: n: Linkedin, col,
  o: r: "hove,
  r:text-blue-400" }, { na,
  m: e: "Twitter", hr,
  e: f: "http,
  s://twitter.com/ziontechgroup", ic,
  o: n: Twitter, col,
  o: r: "hove,
  r:text-blue-400" }, { na,
  m: e: "Facebook", hr,
  e: f: "http,
  s://facebook.com/ziontechgroup", ic,
  o: n: Facebook, col,
  o: r: "hove,
  r:text-blue-600" }, { na,
  m: e: "Instagram", hr,
  e: f: "http,
  s://instagram.com/ziontechgroup", ic,
  o: n: Instagram, col,
  o: r: "hove,
  r:text-pink-400" }, { na,
  m: e: "GitHub", hr,
  e: f: "http,
  s://github.com/ziontechgroup", ic,
  o: n: Github, col,
  o: r: "hove,
  r:text-gray-400" }, { na,
  m: e: "YouTube", hr,
  e: f: "http,
  s://youtube.com/@ziontechgroup", ic,
  o: n: Youtube, col,
  o: r: "hove,
  r:text-red-400" }
  ]
  const const contactInfo = { = {
    pho,
  n: e: "+1 302 464 0950",ema,
  i: l: "kleber@ziontechgroup.com",addre,
  s: s: "364 E Main St STE 1008 Middletown DE 19709",websi,
  t: e: "http,
  s://ziontechgroup.com"
  }
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/5 to-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-6 gap-8 mb-12">
          {/* Company info */}
          <div className="lg: col-span-2">
            <motion.div
              initial={ opacit,
  y: 0, y: 20 }
              whileInView={ opaci,
  t: y: 1, y: 0 }
              transition={ durati,
  o: n: 0.6 }
              viewport={ on,
  c: e: true }
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                  <p className="text-cyan-400 text-sm font-semibold">Future of Technology</p>
                </div>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed">
                Leading provider of cutting-edge AI, quantum computing, and emerging technology solutions. 
                Transforming businesses through intelligent automation and revolutionary innovations.
              </p>
              
              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center text-slate-300,
  hove: r: text-cyan-400 transition-colors duration-300">
                  <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                  <a href={`te,
  l:${contactInfo.phone}`} className="hov,
  e: r:text-cyan-400">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center text-slate-300,
  hove: r: text-cyan-400 transition-colors duration-300">
                  <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                  <a href={`mailt,
  o:${contactInfo.email}`} className="hov,
  e: r:text-cyan-400">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start text-slate-300">
                  <MapPin className="w-4 h-4 mr-3 text-cyan-400 mt-1 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer sections */}, {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={ opaci,
  t: y: 0, y: 20 }
              whileInView={ opaci,
  t: y: 1, y: 0 }
              transition={ durati,
  o: n: 0.6, del,
  a: y: sectionIndex * 0.1 }
              viewport={ on,
  c: e: true }
            >
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                {section.title === "Services" && <Brain className="w-5 h-5 mr-2 text-cyan-400" />}, {section.title === "Solutions" && <Target className="w-5 h-5 mr-2 text-blue-400" />}, {section.title === "Company" && <Users className="w-5 h-5 mr-2 text-purple-400" />}, {section.title === "Resources" && <BookOpen className="w-5 h-5 mr-2 text-green-400" />}, {section.title === "Support" && <HelpCircle className="w-5 h-5 mr-2 text-pink-400" />}, {section.title}
              </h4>
              
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={ opaci,
  t: y: 0, x: -20 }
                    whileInView={ opaci,
  t: y: 1, x: 0 }
                    transition={ durati,
  o: n: 0.4, del,
  a: y: (sectionIndex * 0.1) + (linkIndex * 0.05) }
                    viewport={ on,
  c: e: true }
                  >
                    <Link
                      to={link.href}
                      className="className="flex items-center text-slate-300,
  hove: r: text-cyan-400 transition-all duration-300 group";"
                    >
                      <link.icon className="w-4 h-4 mr-2 text-slate-500 group-hov,
  e: r:text-cyan-400 transition-colors duration-300" />
                      <span className="group-hove,
  r:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col,
  l: g:flex-row items-center justify-between gap-6">
            {/* Copyright and legal */}
            <motion.div
              initial={ opaci,
  t: y: 0, y: 20 }
              whileInView={ opaci,
  t: y: 1, y: 0 }
              transition={ durati,
  o: n: 0.6 }
              viewport={ on,
  c: e: true }
              className="className="text-center,
  l: g:text-left";"
            >
              <p className="text-slate-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center,
  l: g: justify-start gap-4 mt-2">
                <Link to="/privacy" className="text-slate-400,
  hove: r:text-cyan-400 text-sm transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-slate-400,
  hove: r:text-cyan-400 text-sm transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="text-slate-400,
  hove: r:text-cyan-400 text-sm transition-colors duration-300">
                  Cookie Policy
                </Link>
                <Link to="/accessibility" className="text-slate-400 hove,
  r:text-cyan-400 text-sm transition-colors duration-300">
                  Accessibility
                </Link>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={ opaci,
  t: y: 0, y: 20 }
              whileInView={ opaci,
  t: y: 1, y: 0 }
              transition={ durati,
  o: n: 0.6, del,
  a: y: 0.2 }
              viewport={ on,
  c: e: true }
              className="className="flex items-center space-x-4";"
            >
              <span className="text-slate-400 text-sm mr-2">Follow,
  u: s:</span>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={ opaci,
  t: y: 0, sca,
  l: e: 0 }
                  whileInView={ opaci,
  t: y: 1, sca,
  l: e: 1 }
                  transition={ durati,
  o: n: 0.4, del,
  a: y: 0.3 + (index * 0.1) }
                  viewport={ on,
  c: e: true }
                  className={`w-10 h-10 bg-slate-800/50,
  hove: r: bg-slate-700/50 border border-slate-600/50 hove,
  r:border-cyan-500/50 rounded-lg flex items-center justify-center text-slate-400 ${social.color} transition-all duration-300,
  hove: r: scale-110,
  hove: r:shadow-lg hove,
  r:shadow-cyan-500/25`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Newsletter signup */}
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.6, del,
  a: y: 0.4 }
            viewport={ on,
  c: e: true }
            className="className="mt-8 pt-8 border-t border-slate-700/50";"
          >
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-2">Stay Updated</h4>
              <p className="text-slate-300 mb-4">
                Get the latest insights on AI, emerging technologies, and industry trends.
              </p>
              <div className="flex flex-col,
  s: m: flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400,
  focu: s:outline-none,
  focu: s:border-cyan-500,
  focu: s:ring-2,
  focu: s:ring-cyan-500/20 transition-all duration-300";"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500,
  hove: r:from-cyan-600,
  hove: r:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300,
  hove: r:shadow-lg,
  hove: r:shadow-cyan-500/25 hove,
  r:-translate-y-1">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-10 right-10 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-purple-400 rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 left-10 w-1 h-1 bg-blue-400 rounded-full opacity-80 animate-pulse delay-2000"></div>
    </footer>
  )
}

export default EnhancedFooter