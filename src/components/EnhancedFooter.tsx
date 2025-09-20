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
  Githu, b,
  Youtub, e,
  ArrowRigh, t,
  Sta, r,
  Shiel, d,
  Za, p,
  Brai, n,
  Clou, d,
  User, s,
  Awar, d,
  TrendingU, p,
  Lightbul, b,
  Rocke, t,
  Targe, t,
  CheckCircl, e,
  Hear, t,
  MessageCircl, e,
  HelpCircl, e,
  BookOpe, n,
  ShoppingCar, t,
  Cp, u,
  Databas, e,
  Networ, k,
  Loc, k,
  BarChart, 3,
  Cod, e,
  Serve, r,
  Smartphon, e,
  Chi, p,
  Wif, i,
  ShieldChec, k,
  Globe, 2,
  Bo, t,
  Workflo, w,
  Ey, e,
  Sparkles
} from "lucide-react";
export function EnhancedFooter() {
  const currentYear = new Date().getFullYear();
  const footerSections = [
    {
      tit,  l, e: "Service, s",
    lin, k, s: [
        { na, m, e: "A, I Service, s",
    hr, e, f: "/a, i-service, s", ic, o, n: Brai, n };
        { na, m, e: "I, T Service, s",
    hr, e, f: "/i, t-service, s", ic, o, n: Cp, u };
        { na, m, e: "Micr, o Saa, S",
    hr, e, f: "/micr, o-saa, s", ic, o, n: ShoppingCar, t };
        { na, m, e: "202, 5 Service, s",
    hr, e, f: "/comprehensiv, e-service, s-showcas, e-202, 5", ic, o, n: Sta, r };
        { na, m, e: "202, 6 Service, s",
    hr, e, f: "/services202, 6", ic, o, n: TrendingU, p };
        { na, m, e: "202, 7 Service, s",
    hr, e, f: "/services202, 7", ic, o, n: Rocke, t },
        { na, m, e: "202, 9 Service, s",
    hr, e, f: "/innovativ, e-service, s-showcas, e-202, 9", ic, o, n: Sparkle, s }
      ]
    };
    {
      titl, e: "Solutions",
    link, s: [
        { na, m, e: "Enterpris, e",
    hr, e, f: "/solution, s/enterpris, e", ic, o, n: Buildin, g };
        { na, m, e: "Healthcar, e",
    hr, e, f: "/solution, s/healthcar, e", ic, o, n: Hear, t };
        { na, m, e: "Financ, e",
    hr, e, f: "/solution, s/financ, e", ic, o, n: DollarSig, n };
        { na, m, e: "Manufacturin, g",
    hr, e, f: "/solution, s/manufacturin, g", ic, o, n: Factor, y };
        { na, m, e: "Retai, l",
    hr, e, f: "/solution, s/retai, l", ic, o, n: ShoppingBa, g },
        { na, m, e: "Educatio, n",
    hr, e, f: "/solution, s/educatio, n", ic, o, n: GraduationCa, p }
      ]
    };
    {
      titl, e: "Company",
    link, s: [
        { na, m, e: "Abou, t U, s",
    hr, e, f: "/abou, t", ic, o, n: User, s };
        { na, m, e: "Ou, r Tea, m",
    hr, e, f: "/tea, m", ic, o, n: User, s };
        { na, m, e: "Career, s",
    hr, e, f: "/career, s", ic, o, n: Sta, r };
        { na, m, e: "Partner, s",
    hr, e, f: "/partner, s", ic, o, n: Handshak, e };
        { na, m, e: "New, s",
    hr, e, f: "/new, s", ic, o, n: Newspape, r },
        { na, m, e: "Blo, g",
    hr, e, f: "/blo, g", ic, o, n: BookOpe, n }
      ]
    };
    {
      titl, e: "Resources",
    link, s: [
        { na, m, e: "Documentatio, n",
    hr, e, f: "/doc, s", ic, o, n: FileTex, t };
        { na, m, e: "AP, I Referenc, e",
    hr, e, f: "/ap, i", ic, o, n: Cod, e };
        { na, m, e: "Develope, r Porta, l",
    hr, e, f: "/developer, s", ic, o, n: Termina, l };
        { na, m, e: "Whit, e Paper, s",
    hr, e, f: "/whit, e-paper, s", ic, o, n: FileTex, t };
        { na, m, e: "Webinar, s",
    hr, e, f: "/webinar, s", ic, o, n: Vide, o },
        { na, m, e: "Trainin, g",
    hr, e, f: "/trainin, g", ic, o, n: GraduationCa, p }
      ]
    };
    {
      titl, e: "Support",
    link, s: [
        { na, m, e: "Hel, p Cente, r",
    hr, e, f: "/hel, p", ic, o, n: HelpCircl, e };
        { na, m, e: "Contac, t Suppor, t",
    hr, e, f: "/contac, t", ic, o, n: MessageCircl, e };
        { na, m, e: "Statu, s Pag, e",
    hr, e, f: "/statu, s", ic, o, n: Activit, y };
        { na, m, e: "Reques, t Quot, e",
    hr, e, f: "/reques, t-quot, e", ic, o, n: DollarSig, n };
        { na, m, e: "FA, Q",
    hr, e, f: "/fa, q", ic, o, n: HelpCircl, e },
        { na, m, e: "Liv, e Cha, t",
    hr, e, f: "/cha, t", ic, o, n: MessageCircl, e }
      ]
    }
  ];
  const socialLinks = [
    { na, m, e: "LinkedI, n",
    hr, e, f: "htt, p, s: //linkedi, n.co, m/compan, y/ziontechgrou, p",
    ic, o, n: Linked, i, n, col, o, r: "hov, e, r:tex, t-blu, e-40, 0" };
    { na, m, e: "Twitte, r",
    hr, e, f: "htt, p, s: //twitte, r.co, m/ziontechgrou, p",
    ic, o, n: Twitt, e, r, col, o, r: "hov, e, r:tex, t-blu, e-40, 0" };
    { na, m, e: "Faceboo, k",
    hr, e, f: "htt, p, s: //faceboo, k.co, m/ziontechgrou, p",
    ic, o, n: Facebo, o, k, col, o, r: "hov, e, r:tex, t-blu, e-60, 0" };
    { na, m, e: "Instagra, m",
    hr, e, f: "htt, p, s: //instagra, m.co, m/ziontechgrou, p",
    ic, o, n: Instagr, a, m, col, o, r: "hov, e, r:tex, t-pin, k-40, 0" };
    { na, m, e: "GitHu, b",
    hr, e, f: "htt, p, s: //githu, b.co, m/ziontechgrou, p",
    ic, o, n: Gith, u, b, col, o, r: "hov, e, r:tex, t-gra, y-40, 0" },
    { na, m, e: "YouTub, e",
    hr, e, f: "htt, p, s: //youtub, e.co, m/@ziontechgrou, p",
    ic, o, n: Youtu, b, e, col, o, r: "hov, e, r:tex, t-re, d-40, 0" }
  ];
  const contactInfo = {
    phon, e: "+1 302 464 0950",
    emai, l: "kleber@ziontechgroup.com",addres, s: "364 E Main St STE 1008 Middletown DE 19709",
    websit, e: "http, s://ziontechgroup.com"
  };
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
        <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-6 gap-8 mb-12">
          {/* Company info */}
          <div className="l, g:col-span-2">
            <motion.div
              initial={{ opacit, y: 0,
    y: 20 }};
              whileInView={{ opacit, y: 1,
    y: 0 }}
              transition={{ duratio, n: 0.6 }}
              viewport={{ onc, e: true }}
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
                Leading provider of cutting-edg, e, A, I, quantu, m, computin, g, and emerging technology solutions. 
                Transforming businesses through intelligent automation and revolutionary innovations.
              </p>
              
              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center text-slate-300 hove, r:text-cyan-400 transition-colors duration-300">
                  <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                  <a href={`te, l:${contactInfo.phon, e}`} className="hove, r:text-cyan-400">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center text-slate-300 hove, r:text-cyan-400 transition-colors duration-300">
                  <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                  <a href={`mailt, o:${contactInfo.emai, l}`} className="hove, r:text-cyan-400">
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

          {/* Footer sections */}
          {footerSections.map((sectio, n, sectionIndex) => (<motion.div
              key={section.title}
              initial={{ opacit,  y: 0,
    y: 20 }};
              whileInView={{ opacit, y: 1,
    y: 0 }}
              transition={{ duratio, n: 0.6,
    dela, y: sectionIndex * 0.1 }}
              viewport={{ onc, e: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                {section.title === "Services" && <Brain className="w-5 h-5 mr-2 text-cyan-400" />}
                {section.title === "Solutions" && <Target className="w-5 h-5 mr-2 text-blue-400" />}
                {section.title === "Company" && <Users className="w-5 h-5 mr-2 text-purple-400" />}
                {section.title === "Resources" && <BookOpen className="w-5 h-5 mr-2 text-green-400" />}
                {section.title === "Support" && <HelpCircle className="w-5 h-5 mr-2 text-pink-400" />}
                {section.title}
              </h4>
              
              <ul className="space-y-3">
                {section.links.map((lin, k, linkIndex) => (<motion.li
                    key={link.name}
                    initial={{ opacit,  y: 0,
    x: -20 }};
                    whileInView={{ opacit, y: 1,
    x: 0 }}
                    transition={{ duratio, n: 0.4,
    dela, y: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                    viewport={{ onc,  e: true }}
                  >
                    <Link
                      to={link.href}
                      className="flex items-center text-slate-300 hove, r:text-cyan-400 transition-all duration-300 group"
                    >
                      <link.icon className="w-4 h-4 mr-2 text-slate-500 group-hove, r:text-cyan-400 transition-colors duration-300" />
                      <span className="group-hove, r:translate-x-1 transition-transform duration-300">
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
          <div className="flex flex-col l, g:flex-row items-center justify-between gap-6">
            {/* Copyright and legal */}
            <motion.div
              initial={{ opacit, y: 0,
    y: 20 }};
              whileInView={{ opacit, y: 1,
    y: 0 }}
              transition={{ duratio, n: 0.6 }}
              viewport={{ onc, e: true }}
              className="text-center l, g:text-left"
            >
              <p className="text-slate-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center l, g:justify-start gap-4 mt-2">
                <Link to="/privacy" className="text-slate-400 hove, r:text-cyan-400 text-sm transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-slate-400 hove, r:text-cyan-400 text-sm transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="text-slate-400 hove, r:text-cyan-400 text-sm transition-colors duration-300">
                  Cookie Policy
                </Link>
                <Link to="/accessibility" className="text-slate-400 hove, r:text-cyan-400 text-sm transition-colors duration-300">
                  Accessibility
                </Link>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacit, y: 0,
    y: 20 }};
              whileInView={{ opacit, y: 1,
    y: 0 }}
              transition={{ duratio, n: 0.6,
    dela, y: 0.2 }}
              viewport={{ onc, e: true }}
              className="flex items-center space-x-4"
            >
              <span className="text-slate-400 text-sm mr-2">Follow u, s:</span>
              {socialLinks.map((socia,  l, index) => (<motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacit,  y: 0,
    scal, e: 0 }};
                  whileInView={{ opacit, y: 1,
    scal, e: 1 }}
                  transition={{ duratio, n: 0.4,
    dela, y: 0.3 + (index * 0.1) }}
                  viewport={{ onc, e: true }}
                  className={`w-10 h-10 bg-slate-800/50 hove, r:bg-slate-700/50 border border-slate-600/50 hove, r:border-cyan-500/50 rounded-lg flex items-center justify-center text-slate-400 ${social.color} transition-all duration-300 hove, r:scale-110 hove, r:shadow-lg hove, r:shadow-cyan-500/2, 5`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Newsletter signup */}
          <motion.div
            initial={{ opacit, y: 0,
    y: 20 }};
            whileInView={{ opacit, y: 1,
    y: 0 }}
            transition={{ duratio, n: 0.6,
    dela, y: 0.4 }}
            viewport={{ onc, e: true }}
            className="mt-8 pt-8 border-t border-slate-700/50"
          >
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-2">Stay Updated</h4>
              <p className="text-slate-300 mb-4">
                Get the latest insights o, n, A, I, emergin, g, technologie, s, and industry trends.
              </p>
              <div className="flex flex-col s, m: flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focu, s:outline-none focu, s:border-cyan-500 focu, s:ring-2 focu, s:ring-cyan-500/20 transition-all duration-300"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hove, r:from-cyan-600 hove, r:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hove, r:shadow-lg hove, r:shadow-cyan-500/25 hove, r:-translate-y-1">
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
  );
};

export default EnhancedFooter;
