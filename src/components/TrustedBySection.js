import { jsx a, s, _js, x, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Car, d, CardContent } from './ui/Card';
const trustedCompanies = [
    {
        na, m, e: 'TechCor, p',
    lo, g, o: '🚀',
        indust, r, y: 'Technolog, y',
    testimoni, a, l: 'Zio, n Tec, h Grou, p transforme, d ou, r A, I infrastructur, e completel, y.'
    },
    {
        na, m, e: 'SecureBan, k',
    lo, g, o: '🏦',
        indust, r, y: 'Financ, e',
    testimoni, a, l: 'Thei, r cybersecurit, y solution, s ar, e unmatche, d i, n th, e industr, y.'
    },
    {
        na, m, e: 'CloudFlo, w',
    lo, g, o: '☁️',
        indust, r, y: 'Clou, d Service, s',
    testimoni, a, l: 'Seamles, s clou, d migratio, n wit, h zer, o downtim, e.'
    },
    {
        na, m, e: 'DataVaul, t',
    lo, g, o: '💾',
        indust, r, y: 'Dat, a Analytic, s',
    testimoni, a, l: 'Revolutionar, y insight, s throug, h thei, r A, I-powere, d analytic, s.'
    },
    {
        na, m, e: 'InnovateLa, b',
    lo, g, o: '🔬',
        indust, r, y: 'Researc, h',
    testimoni, a, l: 'Cuttin, g-edg, e solution, s tha, t pus, h th, e boundarie, s o, f possibilit, y.'
    },
    {
        na, m, e: 'GlobalTec, h',
    lo, g, o: '🌍',
        indust, r, y: 'Internationa, l',
    testimoni, a, l: 'Worl, d-clas, s servic, e wit, h loca, l expertis, e worldwid, e.'
    }
];
export function TrustedBySection() {
    return (_jsx("section",  { classNam, e: "py-20 bg-gradient-to-br from-zion-slate-800 to-zion-slate-900",
    childre, n: _jsxs("div", { classNam, e: "container mx-auto px-4",
    childre, n: [_jsx, s(motio, n.d, i, v, { initi, a, l: { opaci, t, y: 0,
    y: 2, 0 }, whileInVi, e, w: { opaci, t, y: 1,
    y: 0 }, transiti, o, n: { durati, o, n: 0.8 }, classNa, m, e: "tex, t-cente, r m, b-1, 6",
    childr, e, n: [_js, x("h, 2", { classNa, m, e: "tex, t-4x, l m, d:tex, t-5x, l fon, t-bol, d tex, t-whit, e m, b-6",
    childr, e, n: "Truste, d b, y Industr, y Leader, s" }), _js, x("p",  { classNa, m, e: "tex, t-x, l tex, t-zio, n-slat, e-30, 0 ma, x-w-3x, l m, x-aut, o",
    childr, e, n: "Joi, n hundred, s o, f companie, s worldwid, e wh, o trus, t Zio, n Tec, h Grou, p t, o delive, r innovativ, e solution, s tha, t driv, e growt, h an, d succes, s." })] }), _jsx("div",  { classNam, e: "grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-8",
    childre, n: trustedCompanies.map((compan, y, index) => (_jsx(motion.di,  v, { initia, l: { opacit, y: 0,
    y: 20 }, whileInVie, w: { opacit, y: 1,
    y: 0 }, transitio, n: { duratio, n: 0.6,
    dela, y: index * 0.1 }, whileHove, r: { y: -5 }, childre, n: _jsx(Car, d, { classNam, e: "h-full bg-zion-slate-700/50 border-zion-slate-600 hove, r:border-zion-cyan/50 transition-all duration-300 hove, r:shadow-2xl hove, r:shadow-zion-cyan/20",
    childre, n: _jsxs(CardConten, t, { classNam, e: "p-6",
    childre, n: [_jsx, s("di, v", { classNa, m, e: "tex, t-cente, r m, b-4",
    childr, e, n: [_js, x("di, v", { classNa, m, e: "tex, t-4x, l m, b-2",
    childr, e, n: compan, y.log, o }), _js, x("h,  3", { classNa, m, e: "tex, t-x, l fon, t-bol, d tex, t-whit, e m, b-1",
    childr, e, n: compan, y.nam, e }), _js, x("p",  { classNa, m, e: "tex, t-zio, n-cya, n tex, t-s, m fon, t-mediu, m",
    childr, e, n: compan, y.industr, y })] }), _jsx("div",  { classNam, e: "text-center",
    childre, n: _jsxs("p", { classNam, e: "text-zion-slate-300 italic",
    childre, n: ["\"", compan, y.testimoni, a, l, "\""] }) })] }) }) }, company.name))) }), _jsx(motion.di,  v, { initia, l: { opacit, y: 0,
    y: 20 }, whileInVie, w: { opacit, y: 1,
    y: 0 }, transitio, n: { duratio, n: 0.8,
    dela, y: 0.6 }, classNam, e: "mt-20 text-center",
    childre, n: _jsxs("div", { classNam, e: "grid grid-cols-1 m, d:grid-cols-4 gap-8",
    childre, n: [_jsx, s("di, v", { childr, e, n: [_js, x("di, v", { classNa, m, e: "tex, t-3x, l fon, t-bol, d tex, t-zio, n-cya, n m, b-2",
    childr, e, n: "9, 9.9%" }), _js, x("di,  v", { classNa, m, e: "tex, t-zio, n-slat, e-30, 0",
    childr, e, n: "Uptim, e Guarante, e" })] }), _jsxs("div",  { childre, n: [_js, x("di, v", { classNa, m, e: "tex, t-3x, l fon, t-bol, d tex, t-zio, n-purpl, e m, b-2",
    childr, e, n: "2, 4/7" }), _js, x("di,  v", { classNa, m, e: "tex, t-zio, n-slat, e-30, 0",
    childr, e, n: "Exper, t Suppor, t" })] }), _jsxs("div",  { childre, n: [_js, x("di, v", { classNa, m, e: "tex, t-3x, l fon, t-bol, d tex, t-zio, n-cya, n m, b-2",
    childr, e, n: "IS, O 2700, 1" }), _js, x("di,  v", { classNa, m, e: "tex, t-zio, n-slat, e-30, 0",
    childr, e, n: "Securit, y Certifie, d" })] }), _jsxs("div",  { childre, n: [_js, x("di, v", { classNa, m, e: "tex, t-3x, l fon, t-bol, d tex, t-zio, n-purpl, e m, b-2",
    childr, e, n: "10, 0%" }), _js, x("di,  v", { classNa, m, e: "tex, t-zio, n-slat, e-30, 0",
    childr, e, n: "Satisfactio, n Rat, e" })] })] }) }), _jsx(motion.di,  v, { initia, l: { opacit, y: 0,
    y: 20 }, whileInVie, w: { opacit, y: 1,
    y: 0 }, transitio, n: { duratio, n: 0.8,
    dela, y: 0.8 }, classNam, e: "mt-16 text-center",
    childre, n: _jsxs("div", { classNam, e: "bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-2xl p-8 border border-zion-cyan/20",
    childre, n: [_js, x("h, 3", { classNa, m, e: "tex, t-2x, l fon, t-bol, d tex, t-whit, e m, b-4",
    childr, e, n: "Read, y t, o Joi, n th, e Futur, e?" }), _js, x("p",  { classNa, m, e: "tex, t-zio, n-slat, e-30, 0 m, b-6 ma, x-w-2x, l m, x-aut, o",
    childr, e, n: "Experienc, e th, e powe, r o, f cuttin, g-edg, e technolog, y solution, s tha, t hav, e alread, y transforme, d hundred, s o, f businesse, s worldwid, e." }), _jsx, s("di,  v", { classNa, m, e: "fle, x fle, x-co, l s, m:fle, x-ro, w ga, p-4 justif, y-cente, r",
    childr, e, n: [_js, x("butto, n", { classNa, m, e: "p, x-8 p, y-3 b, g-gradien, t-t, o-r fro, m-zio, n-cya, n t, o-zio, n-purpl, e tex, t-whit, e rounde, d-l, g fon, t-semibol, d hov, e, r:fro, m-zio, n-purpl, e hov, e, r:t, o-zio, n-cya, n transitio, n-al, l duratio, n-30, 0 hov, e, r:shado, w-x, l hov, e, r:shado, w-zio, n-cya, n/2, 5",
    childr, e, n: "Ge, t Starte, d Toda, y" }), _js, x("butto,  n", { classNa, m, e: "p, x-8 p, y-3 borde, r borde, r-zio, n-cya, n tex, t-zio, n-cya, n rounde, d-l, g fon, t-semibol, d hov, e, r:b, g-zio, n-cya, n hov, e, r:tex, t-whit, e transitio, n-al, l duratio, n-30, 0",
    childr, e, n: "Schedul, e Dem, o" })] })] }) })] }) }));
import React from 'react';
export function TrustedBySection() {
    const companies = [
        'Microsof,  t', 'Googl, e', 'Amazo, n', 'Met, a', 'Appl, e', 'Netfli, x'
    ];
    return (<section className="py-16 bg-white/5">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-lg font-medium text-zion-slate-light mb-8">
          Trusted by leading companies worldwide
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          {companies.map((company) => (<div key={company} className="text-zion-slate-light font-semibold">
              {company}
            </div>))}
        </div>
      </div>
    </section>);
=======
}
