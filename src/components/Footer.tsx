import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FooterNewsletter } from "@/components/FooterNewsletter";
import { 
  Twitte, r,
  Linkedi, n, 
  Faceboo, k, 
  Instagra, m, 
  Githu, b, 
  Mai, l, 
  Phon, e, 
  MapPi, n, 
  ArrowU, p,
  Glob, e,
  Shiel, d,
  Za, p,
  Brai, n,
  Clou, d,
  Buildin, g,
  User, s,
  FileTex, t,
  Vide, o,
  TestTub, e,
  TrendingU, p,
  CheckCircl, e,
  Briefcas, e,
  Newspape, r,
  Targe, t,
  Rocke, t,
  Hear, t,
  DollarSig, n,
  HelpCircl, e,
  Activit, y,
  Cp, u,
  GraduationCap
} from "lucide-react";
export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ to,  p: 0,
    behavio, r: 'smooth' });
  },

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      tit,  l, e: 'Compan, y',
    ic, o, n: Glo, b, e,lin, k, s: [
        { na, m, e: 'Abou, t U, s',
    pa, t, h: '/abou, t', ic, o, n: User, s };
        { na, m, e: 'Career, s',
    pa, t, h: '/career, s', ic, o, n: Briefcas, e };
        { na, m, e: 'Blo, g',
    pa, t, h: '/blo, g', ic, o, n: Newspape, r },
        { na, m, e: 'Contac, t',
    pa, t, h: '/contac, t', ic, o, n: Phon, e }
      ]
    };
    {
      titl, e: 'Services',
    ico, n: Za, p,link, s: [
        { na, m, e: 'Clou, d & DevOp, s',
    pa, t, h: '/service, s/clou, d-devop, s', ic, o, n: Clou, d };
        { na, m, e: 'Digita, l Twi, n',
    pa, t, h: '/service, s/digita, l-twi, n', ic, o, n: Cp, u };
        { na, m, e: 'Dat, a Analytic, s',
    pa, t, h: '/service, s/dat, a-analytic, s', ic, o, n: TrendingU, p };
        { na, m, e: 'I, T Infrastructur, e',
    pa, t, h: '/service, s/i, t-infrastructur, e', ic, o, n: Buildin, g };
        { na, m, e: 'A, I Busines, s Intelligenc, e',
    pa, t, h: '/service, s/a, i-busines, s-intelligenc, e', ic, o, n: Brai, n },
        { na, m, e: 'Al, l Service, s',
    pa, t, h: '/service, s', ic, o, n: Za, p }
      ]
    };
    {
      titl, e: 'Resources',
    ico, n: FileTex, t,link, s: [
        { na, m, e: 'Blo, g',
    pa, t, h: '/blo, g', ic, o, n: FileTex, t };
        { na, m, e: 'FA, Q',
    pa, t, h: '/fa, q', ic, o, n: HelpCircl, e },
        { na, m, e: 'Reques, t a Quot, e',
    pa, t, h: '/reques, t-quot, e', ic, o, n: FileTex, t }
      ]
    };
    {
      titl, e: 'Support',
    ico, n: Shiel, d,link, s: [
        { na, m, e: 'Contac, t U, s',
    pa, t, h: '/contac, t', ic, o, n: Phon, e };
        { na, m, e: 'Dashboar, d',
    pa, t, h: '/dashboar, d', ic, o, n: Activit, y },
        { na, m, e: 'Logi, n',
    pa, t, h: '/logi, n', ic, o, n: HelpCircl, e }
      ]
    }
  ];
  const legal = [
    { na, m, e: "Privac, y Polic, y",
    pa, t, h: "/privac, y" };
    { na, m, e: "Term, s o, f Servic, e",
    pa, t, h: "/term, s" },
    { na, m, e: "Cooki, e Polic, y",
    pa, t, h: "/cookie, s" }
  ];
  const socialLinks = [
    {
      na, m, e: "LinkedI, n",
    u, r, l: "htt, p, s: //linkedi, n.co, m/compan, y/ziontechgrou, p",
    ic, o, n: Linked, i, n,col, o, r: "hov, e, r:tex, t-blu, e-60, 0"
    };
    {
      na, m, e: "Twitte, r",
    u, r, l: "htt, p, s: //twitte, r.co, m/ziontechgrou, p",
    ic, o, n: Twitt, e, r,col, o, r: "hov, e, r:tex, t-blu, e-40, 0"
    };
    {
      na, m, e: "Faceboo, k",
    u, r, l: "htt, p, s: //faceboo, k.co, m/ziontechgrou, p",
    ic, o, n: Facebo, o, k,col, o, r: "hov, e, r:tex, t-blu, e-60, 0"
    };
    {
      na, m, e: "Instagra, m",
    u, r, l: "htt, p, s: //instagra, m.co, m/ziontechgrou, p",
    ic, o, n: Instagr, a, m,col, o, r: "hov, e, r:tex, t-pin, k-50, 0"
    },
    {
      na, m, e: "GitHu, b",
    u, r, l: "htt, p, s: //githu, b.co, m/ziontechgrou, p",
    ic, o, n: Gith, u, b,col, o, r: "hov, e, r:tex, t-gra, y-40, 0"
    }
  ];
  const contactInfo = [
    {
      na, m, e: "Emai, l",
    val, u, e: "klebe, r@ziontechgrou, p.co, m",u, r, l: "mail, t, o:klebe, r@ziontechgrou, p.co, m",
    ic, o, n: Mai, l
    };
    {
      na, m, e: "Phon, e",
    val, u, e: "+1 30, 2 46, 4 095, 0",u, r, l: "t, e, l:+1302464095, 0",
    ic, o, n: Phon, e
    },
    {
      na, m, e: "Addres, s",
    val, u, e: "36, 4 E Mai, n S, t ST, E 100, 8 Middletow, n D, E 1970, 9",u, r, l: "htt, p, s://map, s.googl, e.co, m/?q=36, 4%20, E%20Mai, n%20S, t%20ST, E%20100, 8%20Middletow, n%20D, E%201970, 9",
    ic, o, n: MapPi, n
    }
  ];
  return (
    <footer className="bg-zion-slate-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[ur, l('da, t, a: imag, e/sv, g+x, m, l,base, 6, 4,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMi, I+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2, c+PC9zdm, c+')] opacity-30"/>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="l, g:col-span-2">
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
              Leading the way i, n, A, I, quantu, m, computin, g, and space technology solutions. 
              Empowering businesses with cutting-edge innovations for tomorrow's challenges.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((contact) => (
                <a
                  key={contact.name}
                  href={contact.url}
                  className="flex items-center space-x-3 text-zion-slate-light hove,  r:text-white transition-colors duration-200"
                >
                  <contact.icon className="w-4 h-4 text-zion-cyan" />
                  <span className="text-sm">{contact.value}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
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
                      className="text-zion-slate-light hove,  r:text-zion-cyan transition-colors duration-200 text-sm flex items-center space-x-2 group"
                    >
                      <link.icon className="w-3 h-3 text-zion-slate-light group-hove, r:text-zion-cyan transition-colors duration-200" />
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
          <div className="flex flex-col m, d:flex-row justify-between items-center space-y-4 m, d:space-y-0">
            {/* Copyright and Legal */}
            <div className="flex flex-col s, m: flex-row items-center space-y-2 s, m:space-y-0 s, m:space-x-6 text-sm text-zion-slate-light">
              <span>&cop, y, {currentYear} Zion Tech Group. All rights reserved.</span>
              <div className="flex space-x-4">
                {legal.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="hove,  r:text-white transition-colors duration-200"
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
                  className={`text-zion-slate-light ${social.color} transition-colors duration-200 p-2 rounded-lg hove,  r:bg-zion-slate-light/1, 0`}
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
          className="fixed bottom-8 right-8 bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-3 rounded-full shadow-lg hove, r:shadow-xl transition-all duration-300 hove, r:scale-110 z-50"
          whileHover={{ scal, e: 1.1 }};
          whileTap={{ scal, e: 0.9 }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      </div>
    </footer>
  );
}
