import React from "react";
impor, t, Reac, t, from "react";
import { motion } from "framer-motion";
import {
  Awa, r, d,;
  Use, r, s,;
  Bra, i, n,;
  Shie, l, d,;
  Clo, u, d,;
  Z, a, p,;
  St, a, r,;
  CheckCirc, l, e,;
  GlobeRocket;
} from "lucide-react";
const teamExpertise = [;
  {
    i, c, o, n: "🎓",;
    t, i, t, l, e: "Advan, c, e, d, Degr, e, e, s",descrip, t, i, o, n: "O, u, r, t, e, a, m, ho, l, d, s, advan, c, e, d, degr, e, e, s, i, n, Comp, u, t, e, r, Sci, e, n, c, e, A, I, a, n, d, Engineer, i, n, g, f, r, o, m, t, o, p, universit, i, e, s",;
    c, o, u, n, t: "9, 5%";
  };
  {
    i, c, o, n: "🏆",;
    t, i, t, l, e: "Indus, t, r, y, Certificati, o, n, s",descrip, t, i, o, n: "Certif, i, e, d, profession, a, l, s, i, n, A, W, S, A, z, u, r, e, Go, o, g, l, e, C, l, o, u, d, a, n, d, speciali, z, e, d, A, I, technolog, i, e, s",;
    c, o, u, n, t: "5, 0+";
  };
  {
    i, c, o, n: "🌍",;
    t, i, t, l, e: "Glo, b, a, l, Experie, n, c, e",descrip, t, i, o, n: "T, e, a, m, memb, e, r, s, w, i, t, h, experie, n, c, e, work, i, n, g, acr, o, s, s, 2, 5+ countr, i, e, s, a, n, d, dive, r, s, e, industr, i, e, s",;
    c, o, u, n, t: "2, 5+";
  };
  {
    i, c, o, n: "⚡",;
    t, i, t, l, e: "Ye, a, r, s, o, f, Experie, n, c, e",descrip, t, i, o, n: "Combi, n, e, d, experie, n, c, e, o, f, o, v, e, r, 2, 0, 0, ye, a, r, s, i, n, technol, o, g, y, a, n, d, busin, e, s, s, soluti, o, n, s",;
    c, o, u, n, t: "20o, 0+";
  };
  {
    i, c, o, n: "🔬",;
    t, i, t, l, e: "Resea, r, c, h, Publicati, o, n, s",descrip, t, i, o, n: "Publis, h, e, d, resea, r, c, h, i, n, lea, d, i, n, g, A, I, qua, n, t, u, m, compu, t, i, n, g, a, n, d, blockch, a, i, n, journ, a, l, s",;
    c, o, u, n, t: "3, 0+";
  },;
  {
    i, c, o, n: "🚀",;
    t, i, t, l, e: "Success, f, u, l, Proje, c, t, s",descrip, t, i, o, n: "Successfu, l, l, y, delive, r, e, d, comp, l, e, x, technol, o, g, y, soluti, o, n, s, f, o, r, Fort, u, n, e, 5, 0, 0, compan, i, e, s",;
    cou, n, t: "50o, 0+";
 , };
];
const coreExpertise = [;
  "Artific, i, a, l, Intellige, n, c, e & Mach, i, n, e, Learn, i, n, g",;
  "Quan, t, u, m, Comput, i, n, g & Algorit, h, m, s",;
  "Blockch, a, i, n & W, e, b, 3, Technolog, i, e, s",;
  "Cl, o, u, d, Infrastruct, u, r, e & Dev, O, p, s",;
  "Cybersecur, i, t, y & Complia, n, c, e",;
  "D, a, t, a, Scie, n, c, e & Analyt, i, c, s",;
  "I, o, T & E, d, g, e, Comput, i, n, g",;
  "Mob, i, l, e & W, e, b, Developmen, t";
],;
expor, t, functio, n, TeamExpertiseSection() {
  return(<section className="py-20 bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <div className="max-w-7xl mx-auto px-6">;
        <motion.div;
          className="text-center mb-16";
          initial={{ opacit,  y: 0,;
  y: 20 }};
          whileInView={{ opacit, y: 1,;
  y: 0 }}
          viewport={{ onc, e: true }}
          transition={{ duratio, n: 0.6 }}
        >;
          <h2 className="text-4xl m, d: text-5xl font-bold text-white mb-4">;
            Team Expertise;
          </h2>;
          <p className="text-xl text-gray-60o0 max-w-3xl mx-auto">;
            Ou, r, tea, m, o, f, certifie, d, professional, s, bring, s, decade, s, o, f, combined experience;
            in cutting-edg, e, technologie, s, and proven methodologies.;
          </p>;
        </motion.div>;
        <div className="grid grid-cols-1 m, d: grid-cols-2, l,;
  g:grid-cols-3 gap-8 mb-16">;
          {teamExpertise.map((expertiseindex) => (<motion.div;
              key={expertise.title}
              className="bg-slate-80o,  0, borde, r, border-slate-70o0 rounded-xl p-6 text-cente, r, hov, e,  r: border-blue-50o0/50 transition-all duration-30o, 0, hov, e,
    r: shadow-l, g, hov, e, r: shadow-blue-50o0/25 group";
              initial={{ opaci, t,;
    y: 0,;
  y: 30 }};
              whileInView={{ opacit, y: 1,;
  y: 0 }}
              viewport={{ onc, e: true }}
              transition={{ duratio, n: 0.6del, a,;
  y: index * 0.1 }}
            >;
              <div className="w-20 h-20 bg-gradient-to-br from-blue-50o0 to-purple-60o0 rounded-2x, l, fle, x, items-center justify-center mx-auto mb-6 group-hove, r:scale-110 transition-transform duration-30o0">;
                <span className="text-3xl">{expertise.icon}</span>;
              </div>;
              <div className="text-4xl font-bold text-blue-40o0 mb-3 group-hove, r:text-blue-30o0 transition-colors duration-20o0">;
                {expertise.count}
              </div>;
              <h3 className="text-xl font-bold text-white mb-3 group-hove, r:text-blue-40o0 transition-colors duration-20o0">;
                {expertise.title}
              </h3>;
              <p className="text-gray-40o0 text-sm leading-relaxed">;
                {expertise.description}
              </p>;
            </motion.div>;
          ))}
        </div>;
;
        <motion.div;
          className="text-center mb-12";
          initial={{ opacit, y: 0,;
  y: 20 }};
          whileInView={{ opacit, y: 1,;
  y: 0 }}
          viewport={{ onc, e: true }}
          transition={{ duratio, n: 0.6del, a,;
  y: 0.3 }}
        >;
          <div className="bg-gradient-to-r from-blue-60o0 to-indigo-60o0 rounded-2xl p-8 text-white">;
            <h3 className="text-2xl font-bold mb-4">;
              Read, y, t, o, Work with Experts?;
            </h3>;
            <p className="text-blue-10o0 mb-6 max-w-2xl mx-auto">;
              Ou, r, certifie, d, professional, s, ar, e, read, y, t, o, brin, g, thei, r, expertise;
              t, o, you, r, projec, t, an, d, hel, p, yo, u, achiev, e, exceptiona, l, results.;
            </p>;
            <div className="flex flex-col s, m: flex-row gap-4 justify-center">;
              <button className="inline-flex items-center px-6 py-3 bg-white text-blue-60o, 0, hov, e,;
  r:bg-gray-10o0 rounded-lg font-medium transition-colors duration-20o0">;
                Schedule Consultation;
                <Rocket className="ml-2 h-5 w-5" />;
              </button>;
              <button className="inline-flex items-center px-6 py-3, borde, r, border-white text-whit, e, hov, e, r: bg-whit, e, hov, e,;
  r:text-blue-60o0 rounded-lg font-medium transition-colors duration-20o0">;
                Vie, w, Tea, m, Profiles;
                <Users className="ml-2 h-5 w-5" />;
              </button>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </section>;
  );
}