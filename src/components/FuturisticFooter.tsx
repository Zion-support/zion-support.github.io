import { useCallback  } from "react";
import React from "react"
import { Link   } from "react-router-dom";
import { motion   } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowUp,
  Heart,
  Shield,
  Zap,
  Brain,
  Cloud,
  Server,
  Rocket,
  Users,
  Briefcase,
  FileText,
  HelpCircle,
  MessageCircle,
  Zap as ZapIcon;
}
}
 } from "lucide-react";
export,
  const: FuturisticFooter: React.FC = () () => {
  const scrollToTop = () () => {
    window.scrollTo({ to,
  p: 0, behavi,
  o: r: 'smooth' })
},
  const currentYear = new Date().getFullYear()
const footerSections = [
    {
      tit,
  l: e: "Services",lin,
  k: s: [
        { nam,
  e: "AI & Machine Learning", hr,
  e: f: "/ai-services" }, { na,
  m: e: "Micro SAAS Solutions", hr,
  e: f: "/micro-saas" }, { na,
  m: e: "IT Infrastructure", hr,
  e: f: "/it-services" }, { na,
  m: e: "Emerging Technologies", hr,
  e: f: "/emerging-tech" }, { na,
  m: e: "Cybersecurity", hr,
  e: f: "/it-services/cybersecurity" }, { na,
  m: e: "Cloud Solutions", hr,
  e: f: "/it-services/cloud" }, { na,
  m: e: "DevOps & Automation", hr,
  e: f: "/it-services/devops" }, { na,
  m: e: "Data Management", hr,
  e: f: "/it-services/data" },
  ],
  }, {
      tit,
  l: e: "Solutions",lin,
  k: s: [
        { nam,
  e: "Quantum Computing", hr,
  e: f: "/emerging-tech/quantum" }, { na,
  m: e: "Blockchain & Web3", hr,
  e: f: "/emerging-tech/blockchain" }, { na,
  m: e: "Edge Computing", hr,
  e: f: "/emerging-tech/edge" }, { na,
  m: e: "IoT Solutions", hr,
  e: f: "/emerging-tech/iot" }, { na,
  m: e: "Healthcare AI", hr,
  e: f: "/ai-services/healthcare" }, { na,
  m: e: "Financial AI", hr,
  e: f: "/ai-services/financial" }, { na,
  m: e: "Green Technology", hr,
  e: f: "/green-it" }, { na,
  m: e: "Space Technology", hr,
  e: f: "/emerging-tech/space" },
  ],
  }, {
      tit,
  l: e: "Company",lin,
  k: s: [
        { nam,
  e: "About Us", hr,
  e: f: "/about" }, { na,
  m: e: "Our Team", hr,
  e: f: "/about#team" }, { na,
  m: e: "Careers", hr,
  e: f: "/careers" }, { na,
  m: e: "Partners", hr,
  e: f: "/partners" }, { na,
  m: e: "News & Blog", hr,
  e: f: "/blog" }, { na,
  m: e: "Press Kit", hr,
  e: f: "/press" }, { na,
  m: e: "Investor Relations", hr,
  e: f: "/investors" }, { na,
  m: e: "Sustainability", hr,
  e: f: "/sustainability" },
  ],
  }, {
      tit,
  l: e: "Resources",lin,
  k: s: [
        { nam,
  e: "Documentation", hr,
  e: f: "/docs" }, { na,
  m: e: "API Reference", hr,
  e: f: "/api" }, { na,
  m: e: "Developer Portal", hr,
  e: f: "/developer" }, { na,
  m: e: "Support Center", hr,
  e: f: "/support" }, { na,
  m: e: "FAQ", hr,
  e: f: "/faq" }, { na,
  m: e: "Contact Us", hr,
  e: f: "/contact" }, { na,
  m: e: "Case Studies", hr,
  e: f: "/case-studies" }, { na,
  m: e: "Marketplace", hr,
  e: f: "/marketplace" },
  ],
  },
  ]
const socialLinks = [
    { na,
  m: e: "LinkedIn", hr,
  e: f: "http,
  s://linkedin.com/company/ziontechgroup", ic,
  o: n: Linkedin }, { na,
  m: e: "Twitter", hr,
  e: f: "http,
  s://twitter.com/ziontechgroup", ic,
  o: n: Twitter }, { na,
  m: e: "Facebook", hr,
  e: f: "http,
  s://facebook.com/ziontechgroup", ic,
  o: n: Facebook }, { na,
  m: e: "Instagram", hr,
  e: f: "http,
  s://instagram.com/ziontechgroup", ic,
  o: n: Instagram },
  ]
  return (
    <footer className="relative bg-gradient-to-b from-zion-slate-dark to-zion-slate-darker border-t border-zion-cyan/20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zion-cyan/5 to-transparent" />
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4,
  s: m: px-6,
  l: g:px-8 py-16">
          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg: col-span-2">
              <motion.div;
                initial={ opacit,
  y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                viewport={ on,
  c: e: true },
  }
                transition={ durati,
  o: n: 0.6 },
  }
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                    <ZapIcon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-white">ZION TECH GROUP</span>
                </div>
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  Leading the future of technology with cutting-edge AI solutions, innovative micro SAAS platforms,
                  and next-generation IT infrastructure that transforms businesses and drives innovation.
                </p>
                {/* Contact Information */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-zion-slate-light,
  hove: r: text-zion-cyan transition-colors duration-300">
                    <Phone className="w-4 h-4" />
                    <a href="t,
  e: l:+13024640950" className="text-sm">+1 302 464 0950</a>
                  </div>
                  <div className="flex items-center space-x-3 text-zion-slate-light,
  hove: r:text-zion-cyan transition-colors duration-300">
                    <Mail className="w-4 h-4" />
                    <a href="mail,
  t: o:kleber@ziontechgroup.com" className="text-sm">kleber@ziontechgroup.com</a>
                  </div>
                  <div className="flex items-start space-x-3 text-zion-slate-light">
                    <MapPin className="w-4 h-4 mt-0.5" />
                    <address className="text-sm not-italic">
                      364 E Main St STE 1008<br />
                      Middletown DE 19709;
                    </address>
                  </div>
                  <div className="flex items-center space-x-3 text-zion-slate-light,
  hove: r:text-zion-cyan transition-colors duration-300">
                    <Globe className="w-4 h-4" />
                    <a href="http,
  s://ziontechgroup.com" className="text-sm">ziontechgroup.com</a>
                  </div>
                </div>
              </motion.div>
            </div>
            {/* Footer Links */},
  {footerSections.map((section, index) => (
              <div key={section.title}>
                <motion.div;
                  initial={ opaci,
  t: y: 0, y: 20 },
  }
                  whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                  viewport={ on,
  c: e: true },
  }
                  transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                >
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    {section.title === "Services" && <Brain className="w-5 h-5 mr-2 text-zion-cyan" />},
  {section.title === "Solutions" && <Rocket className="w-5 h-5 mr-2 text-zion-purple" />},
  {section.title === "Company" && <Users className="w-5 h-5 mr-2 text-zion-blue" />},
  {section.title === "Resources" && <FileText className="w-5 h-5 mr-2 text-zion-cyan" />},
  {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link;
                          to={link.href}
                          className="text-zion-slate-light,
  hove: r: text-zion-cyan transition-colors duration-300 text-sm hove,
  r:translate-x-1 inline-block"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
          {/* Additional Quick Access Section */}
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            viewport={ on,
  c: e: true },
  }
            transition={ durati,
  o: n: 0.6, del,
  a: y: 0.4 },
  }
            className="border-t border-zion-slate/30 mt-12 pt-8"
          >
            <div className="grid grid-cols-1,
  m: d: grid-cols-2,
  l: g:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-zion-cyan" />
                  Quick Actions;
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link;
                      to="/request-quote"
                      className="text-zion-slate-light,
  hove: r:text-zion-cyan transition-colors duration-300 text-sm,
  hove: r:translate-x-1 inline-block"
                    >
                      Request Quote;
                    </Link>
                  </li>
                  <li>
                    <Link;
                      to="/demo"
                      className="text-zion-slate-light,
  hove: r:text-zion-cyan transition-colors duration-300 text-sm,
  hove: r:translate-x-1 inline-block"
                    >
                      Book Demo;
                    </Link>
                  </li>
                  <li>
                    <Link;
                      to="/support"
                      className="text-zion-slate-light,
  hove: r:text-zion-cyan transition-colors duration-300 text-sm,
  hove: r:translate-x-1 inline-block"
                    >
                      Get Support;
                    </Link>
                  </li>
                  <li>
                    <Link;
                      to="/status"
                      className="text-zion-slate-light,
  hove: r:text-zion-cyan transition-colors duration-300 text-sm hove,
  r:translate-x-1 inline-block"
                    >
                      System Status;
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          {/* Bottom Section */}
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            viewport={ on,
  c: e: true },
  }
            transition={ durati,
  o: n: 0.6, del,
  a: y: 0.5 },
  }
            className="border-t border-zion-slate/30 mt-12 pt-8"
          >
            <div className="flex flex-col,
  l: g: flex-row items-center justify-between space-y-4 l,
  g:space-y-0">
              {/* Copyright */}
              <div className="text-zion-slate-light text-sm">
                © {currentYear} ZION TECH GROUP. All rights reserved.
                <span className="ml-2 flex items-center">
                  Made with <Heart className="w-4 h-4 mx-1 text-red-400" /> for innovation;
                </span>
              </div>
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a;
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-zion-slate-dark/50 border border-zion-slate/30 rounded-lg flex items-center justify-center text-zion-slate-light,
  hove: r: text-zion-cyan,
  hove: r:border-zion-cyan/50 hove,
  r:bg-zion-cyan/10 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              {/* Legal Links */}
              <div className="flex items-center space-x-6 text-sm">
                <Link to="/privacy" className="text-zion-slate-light,
  hove: r: text-zion-cyan transition-colors duration-300">
                  Privacy Policy;
                </Link>
                <Link to="/terms" className="text-zion-slate-light,
  hove: r:text-zion-cyan transition-colors duration-300">
                  Terms of Service;
                </Link>
                <Link to="/sitemap" className="text-zion-slate-light hove,
  r:text-zion-cyan transition-colors duration-300">
                  Sitemap;
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Scroll to Top Button */}
        <motion.button;
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-full shadow-lg shadow-zion-cyan/25,
  hove: r: shadow-xl,
  hove: r:shadow-zion-cyan/40 transition-all duration-300 z-50 flex items-center justify-center group"
          whileHover={ scal,
  e: 1.1 },
  }
          whileTap={ sca,
  l: e: 0.9 },
  }
        >
          <ArrowUp className="w-6 h-6 group-hov,
  e: r:-translate-y-0.5 transition-transform duration-300" />
        </motion.button>
      </div>
      {/* Bottom Border Glow */}
      <div className="h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent opacity-50" />
    </footer>
  )
}