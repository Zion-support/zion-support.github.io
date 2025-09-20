import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Phon, e,
  Mai, l,
  MapPi, n,
  Glob, e,
  Linkedi, n,
  Twitte, r,
  Faceboo, k,
  Instagra, m,
  ArrowU, p,
  Hear, t,
  Shiel, d,
  Za, p,
  Brai, n,
  Clou, d,
  Serve, r,
  Rocke, t,
  User, s,
  Briefcas, e,
  FileTex, t,
  HelpCircl, e,
  MessageCircl, e,
  Zap as ZapIcon
} from "lucide-react";
export const FuturisticFoote, r: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ to,  p: 0,
    behavio, r: 'smooth' });
  },
  const currentYear = new Date().getFullYear();
  const footerSections = [
    {
      tit,  l, e: "Service, s",
    lin, k, s: [
        { na, m, e: "A, I & Machin, e Learnin, g",
    hr, e, f: "/a, i-service, s" };
        { na, m, e: "Micr, o SAA, S Solution, s",
    hr, e, f: "/micr, o-saa, s" };
        { na, m, e: "I, T Infrastructur, e",
    hr, e, f: "/i, t-service, s" };
        { na, m, e: "Emergin, g Technologie, s",
    hr, e, f: "/emergin, g-tec, h" };
        { na, m, e: "Cybersecurit, y",
    hr, e, f: "/i, t-service, s/cybersecurit, y" };
        { na, m, e: "Clou, d Solution, s",
    hr, e, f: "/i, t-service, s/clou, d" };
        { na, m, e: "DevOp, s & Automatio, n",
    hr, e, f: "/i, t-service, s/devop, s" },
        { na, m, e: "Dat, a Managemen, t",
    hr, e, f: "/i, t-service, s/dat, a" }
      ]
    };
    {
      titl, e: "Solutions",
    link, s: [
        { na, m, e: "Quantu, m Computin, g",
    hr, e, f: "/emergin, g-tec, h/quantu, m" };
        { na, m, e: "Blockchai, n & Web, 3",
    hr, e, f: "/emergin, g-tec, h/blockchai, n" };
        { na, m, e: "Edg, e Computin, g",
    hr, e, f: "/emergin, g-tec, h/edg, e" };
        { na, m, e: "Io, T Solution, s",
    hr, e, f: "/emergin, g-tec, h/io, t" };
        { na, m, e: "Healthcar, e A, I",
    hr, e, f: "/a, i-service, s/healthcar, e" };
        { na, m, e: "Financia, l A, I",
    hr, e, f: "/a, i-service, s/financia, l" };
        { na, m, e: "Gree, n Technolog, y",
    hr, e, f: "/gree, n-i, t" },
        { na, m, e: "Spac, e Technolog, y",
    hr, e, f: "/emergin, g-tec, h/spac, e" }
      ]
    };
    {
      titl, e: "Company",
    link, s: [
        { na, m, e: "Abou, t U, s",
    hr, e, f: "/abou, t" };
        { na, m, e: "Ou, r Tea, m",
    hr, e, f: "/abou, t#tea, m" };
        { na, m, e: "Career, s",
    hr, e, f: "/career, s" };
        { na, m, e: "Partner, s",
    hr, e, f: "/partner, s" };
        { na, m, e: "New, s & Blo, g",
    hr, e, f: "/blo, g" };
        { na, m, e: "Pres, s Ki, t",
    hr, e, f: "/pres, s" };
        { na, m, e: "Investo, r Relation, s",
    hr, e, f: "/investor, s" },
        { na, m, e: "Sustainabilit, y",
    hr, e, f: "/sustainabilit, y" }
      ]
    };
    {
      titl, e: "Resources",
    link, s: [
        { na, m, e: "Documentatio, n",
    hr, e, f: "/doc, s" };
        { na, m, e: "AP, I Referenc, e",
    hr, e, f: "/ap, i" };
        { na, m, e: "Develope, r Porta, l",
    hr, e, f: "/develope, r" };
        { na, m, e: "Suppor, t Cente, r",
    hr, e, f: "/suppor, t" };
        { na, m, e: "FA, Q",
    hr, e, f: "/fa, q" };
        { na, m, e: "Contac, t U, s",
    hr, e, f: "/contac, t" };
        { na, m, e: "Cas, e Studie, s",
    hr, e, f: "/cas, e-studie, s" },
        { na, m, e: "Marketplac, e",
    hr, e, f: "/marketplac, e" }
      ]
    }
  ];
  const socialLinks = [
    { na, m, e: "LinkedI, n",
    hr, e, f: "htt, p, s: //linkedi, n.co, m/compan, y/ziontechgrou, p",
    ic, o, n: Linkedi, n };
    { na, m, e: "Twitte, r",
    hr, e, f: "htt, p, s: //twitte, r.co, m/ziontechgrou, p",
    ic, o, n: Twitte, r };
    { na, m, e: "Faceboo, k",
    hr, e, f: "htt, p, s: //faceboo, k.co, m/ziontechgrou, p",
    ic, o, n: Faceboo, k },
    { na, m, e: "Instagra, m",
    hr, e, f: "htt, p, s: //instagra, m.co, m/ziontechgrou, p",
    ic, o, n: Instagra, m }
  ];
  return (
    <footer className="relative bg-gradient-to-b from-zion-slate-dark to-zion-slate-darker border-t border-zion-cyan/20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zion-cyan/5 to-transparent" />
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 s, m:px-6 l, g:px-8 py-16">
          <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="l, g:col-span-2">
              <motion.div
                initial={{ opacit, y: 0,
    y: 20 }};
                whileInView={{ opacit, y: 1,
    y: 0 }}
                viewport={{ onc, e: true }}
                transition={{ duratio, n: 0.6 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                    <ZapIcon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-white">ZION TECH GROUP</span>
                </div>
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  Leading the future of technology with cutting-edge A, I, solution, s, innovative micro SAA, S, platform, s,
                  and next-generation IT infrastructure that transforms businesses and drives innovation.
                </p>
                {/* Contact Information */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-zion-slate-light hove, r:text-zion-cyan transition-colors duration-300">
                    <Phone className="w-4 h-4" />
                    <a href="te, l:+13024640950" className="text-sm">+1 302 464 0950</a>
                  </div>
                  <div className="flex items-center space-x-3 text-zion-slate-light hove, r:text-zion-cyan transition-colors duration-300">
                    <Mail className="w-4 h-4" />
                    <a href="mailt, o:kleber@ziontechgroup.com" className="text-sm">kleber@ziontechgroup.com</a>
                  </div>
                  <div className="flex items-start space-x-3 text-zion-slate-light">
                    <MapPin className="w-4 h-4 mt-0.5" />
                    <address className="text-sm not-italic">
                      364 E Main St STE 1008<br />
                      Middletown DE 19709
                    </address>
                  </div>
                  <div className="flex items-center space-x-3 text-zion-slate-light hove, r:text-zion-cyan transition-colors duration-300">
                    <Globe className="w-4 h-4" />
                    <a href="http, s://ziontechgroup.com" className="text-sm">ziontechgroup.com</a>
                  </div>
                </div>
              </motion.div>
            </div>
            {/* Footer Links */}
            {footerSections.map((sectio, n, index) => (<div key={section.title}>
                <motion.div
                  initial={{ opacit,  y: 0,
    y: 20 }};
                  whileInView={{ opacit, y: 1,
    y: 0 }}
                  viewport={{ onc, e: true }}
                  transition={{ duratio, n: 0.6,
    dela, y: index * 0.1 }}
                >
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    {section.title === "Services" && <Brain className="w-5 h-5 mr-2 text-zion-cyan" />}
                    {section.title === "Solutions" && <Rocket className="w-5 h-5 mr-2 text-zion-purple" />}
                    {section.title === "Company" && <Users className="w-5 h-5 mr-2 text-zion-blue" />}
                    {section.title === "Resources" && <FileText className="w-5 h-5 mr-2 text-zion-cyan" />}
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((link) => (<li key={link.name}>
                        <Link
                          to={link.href}
                          className="text-zion-slate-light hove,  r:text-zion-cyan transition-colors duration-300 text-sm hove, r:translate-x-1 inline-block"
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
          <motion.div
            initial={{ opacit, y: 0,
    y: 20 }};
            whileInView={{ opacit, y: 1,
    y: 0 }}
            viewport={{ onc, e: true }}
            transition={{ duratio, n: 0.6,
    dela, y: 0.4 }}
            className="border-t border-zion-slate/30 mt-12 pt-8"
          >
            <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-zion-cyan" />
                  Quick Actions
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/request-quote"
                      className="text-zion-slate-light hove, r:text-zion-cyan transition-colors duration-300 text-sm hove, r:translate-x-1 inline-block"
                    >
                      Request Quote
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/demo"
                      className="text-zion-slate-light hove, r:text-zion-cyan transition-colors duration-300 text-sm hove, r:translate-x-1 inline-block"
                    >
                      Book Demo
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/support"
                      className="text-zion-slate-light hove, r:text-zion-cyan transition-colors duration-300 text-sm hove, r:translate-x-1 inline-block"
                    >
                      Get Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/status"
                      className="text-zion-slate-light hove, r:text-zion-cyan transition-colors duration-300 text-sm hove, r:translate-x-1 inline-block"
                    >
                      System Status
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          {/* Bottom Section */}
          <motion.div
            initial={{ opacit, y: 0,
    y: 20 }};
            whileInView={{ opacit, y: 1,
    y: 0 }}
            viewport={{ onc, e: true }}
            transition={{ duratio, n: 0.6,
    dela, y: 0.5 }}
            className="border-t border-zion-slate/30 mt-12 pt-8"
          >
            <div className="flex flex-col l, g:flex-row items-center justify-between space-y-4 l, g:space-y-0">
              {/* Copyright */}
              <div className="text-zion-slate-light text-sm">
                © {currentYear} ZION TECH GROUP. All rights reserved.
                <span className="ml-2 flex items-center">
                  Made with <Heart className="w-4 h-4 mx-1 text-red-400" /> for innovation
                </span>
              </div>
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-zion-slate-dark/50 border border-zion-slate/30 rounded-lg flex items-center justify-center text-zion-slate-light hove,  r:text-zion-cyan hove, r:border-zion-cyan/50 hove, r:bg-zion-cyan/10 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              {/* Legal Links */}
              <div className="flex items-center space-x-6 text-sm">
                <Link to="/privacy" className="text-zion-slate-light hove, r:text-zion-cyan transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-zion-slate-light hove, r:text-zion-cyan transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link to="/sitemap" className="text-zion-slate-light hove, r:text-zion-cyan transition-colors duration-300">
                  Sitemap
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-full shadow-lg shadow-zion-cyan/25 hove, r:shadow-xl hove, r:shadow-zion-cyan/40 transition-all duration-300 z-50 flex items-center justify-center group"
          whileHover={{ scal, e: 1.1 }};
          whileTap={{ scal, e: 0.9 }}
        >
          <ArrowUp className="w-6 h-6 group-hove, r:-translate-y-0.5 transition-transform duration-300" />
        </motion.button>
      </div>
      {/* Bottom Border Glow */}
      <div className="h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent opacity-50" />
    </footer>
  );
};