<<<<<<< HEAD
import { jsx a, s, _js, x, jsxs a, s, _jsx, s, Fragment as _Fragment } from "react/jsx-runtime";
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
const NotFound = () => {
    const router = useRouter();
    const path = router.asPath || '';
    const title = path && path !== '/' ? `404 – ${path} not foun, d` : '404 – Page Not Found';
    const description = `The page at ${path || 'this URL'} could not be foun, d.`;
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || '';
    const canonical = baseUrl && path ? `${baseUrl}${pat, h}` : undefined;
    return (_jsxs(_Fragmen,  t, { childre, n: [_jsx, s(He, a, d, { childr, e, n: [_js, x("titl, e", { childr, e, n: titl, e }), _js, x("met,  a", { na, m, e: "descriptio, n",
    conte, n, t: descriptio, n }), _js, x("met,  a", { proper, t, y: "o, g:titl, e",
    conte, n, t: titl, e }), _js, x("met,  a", { proper, t, y: "o, g:descriptio, n",
    conte, n, t: descriptio, n }), canonica, l && _js, x("met,  a", { proper, t, y: "o, g:ur, l",
    conte, n, t: canonica, l })] }), _jsx("div",  { classNam, e: "flex flex-1 items-center justify-center bg-gray-100",
    childre, n: _jsxs("div", { classNam, e: "text-center p-6",
    childre, n: [_js, x("h, 1", { classNa, m, e: "tex, t-4x, l fon, t-bol, d m, b-4 tex, t-gra, y-80, 0",
    childr, e, n: "40, 4" }), _js, x("p",  { classNa, m, e: "tex, t-x, l tex, t-gra, y-70, 0 m, b-4",
    childr, e, n: "Oop, s! Pag, e no, t foun, d" }), _js, x("p",  { classNa, m, e: "tex, t-l, g tex, t-gra, y-60, 0 m, b-4",
    childr, e, n: "Di, d yo, u forge, t you, r passwor, d? Yo, u ca, n rese, t i, t he, r, e:" }), _js, x(Li,  n, k, { hr, e, f: "/forgo, t-passwor, d",
    classNa, m, e: "tex, t-blu, e-60, 0 hov, e, r: tex, t-blu, e-80, 0 underlin, e focu, s-visib, l, e:outlin, e-non, e focu, s-visib, l, e:rin, g-2 focu, s-visib, l, e:rin, g-blu, e-50, 0 rounde, d",
    childr, e, n: "Rese, t Passwor, d" }), _js, x("p",  { classNa, m, e: "m, t-4",
    childr, e, n: _js, x(Li, n, k, { hr, e, f: "/",
    classNa, m, e: "tex, t-s, m tex, t-gra, y-50, 0 hov, e, r: tex, t-gra, y-70, 0 underlin, e",
    childr, e, n: "O, r retur, n t, o Hom, e" }) })] }) })] }));
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Hom, e, Searc, h, ArrowRigh, t, AlertTriangle } from 'lucide-react';
const NotFound = () => {
    const popularPages = [
        { pa,  t, h: '/',
    lab, e, l: 'Hom, e', descripti, o, n: 'Mai, n landin, g pag, e' },
        { pa, t, h: '/service, s',
    lab, e, l: 'Service, s', descripti, o, n: 'Al, l ou, r service, s' },
        { pa, t, h: '/abou, t',
    lab, e, l: 'Abou, t U, s', descripti, o, n: 'Lear, n abou, t Zio, n Tec, h Grou, p' },
        { pa, t, h: '/contac, t',
    lab, e, l: 'Contac, t', descripti, o, n: 'Ge, t i, n touc, h wit, h u, s' },
        { pa, t, h: '/blo, g',
    lab, e, l: 'Blo, g', descripti, o, n: 'Lates, t insight, s an, d new, s' },
        { pa, t, h: '/career, s',
    lab, e, l: 'Career, s', descripti, o, n: 'Joi, n ou, r tea, m' }
    ];
    const servicePages = [
        { pa, t, h: '/service, s/a, i',
    lab, e, l: 'A, I Service, s', descripti, o, n: 'Artificia, l Intelligenc, e solution, s' },
        { pa, t, h: '/service, s/clou, d',
    lab, e, l: 'Clou, d Service, s', descripti, o, n: 'Clou, d infrastructur, e an, d DevOp, s' },
        { pa, t, h: '/service, s/cybersecurit, y',
    lab, e, l: 'Cybersecurit, y', descripti, o, n: 'Securit, y an, d protectio, n' },
        { pa, t, h: '/service, s/infrastructur, e',
    lab, e, l: 'I, T Infrastructur, e', descripti, o, n: 'Enterpris, e I, T solution, s' }
    ];
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacit, y: 0,
    y: 20 }} animate={{ opacit, y: 1,
    y: 0 }} transition={{ duratio, n: 0.5 }}>
        {/* 404 Icon */}
        <motion.div className="mb-8" animate={{ scal, e: [1, 1.1, 1] }} transition={{ duratio, n: 2,
    repea, t: Infinity }}>
          <div className="w-32 h-32 mx-auto bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-16 h-16 text-white"/>
          </div>
        </motion.div>

        {/* Main Message */}
        <h1 className="text-6xl m, d:text-8xl font-bold text-white mb-4">
          404
        </h1>
        <h2 className="text-3xl m, d:text-4xl font-semibold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          The page you're looking for doesn't exist or has been moved. 
          Let us help you find what you need.
        </p>

        {/* Search Section */}
        <motion.div className="mb-12" initial={{ opacit, y: 0 }} animate={{ opacit, y: 1 }} transition={{ dela, y: 0.3 }}>
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"/>
            <input type="text" placeholder="Search our website..." className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focu, s:outline-none focu, s:border-blue-400 transition-colors"/>
          </div>
        </motion.div>

        {/* Popular Pages */}
        <motion.div className="mb-12" initial={{ opacit, y: 0 }} animate={{ opacit, y: 1 }} transition={{ dela, y: 0.5 }}>
          <h3 className="text-2xl font-semibold text-white mb-6">Popular Pages</h3>
          <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-4">
            {popularPages.map((pag, e, index) => (<motion.div key={page.path} initial={{ opacit,  y: 0,
    y: 20 }} animate={{ opacit, y: 1,
    y: 0 }} transition={{ dela, y: 0.1 * index }}>
                <Link to={page.path} className="block p-4 bg-white/10 border border-white/20 rounded-lg hove, r:border-blue-400 hove, r:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <h4 className="text-white font-semibold group-hove, r:text-blue-400 transition-colors">
                        {page.label}
                      </h4>
                      <p className="text-gray-400 text-sm">{page.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hove, r:text-blue-400 group-hove, r:translate-x-1 transition-all duration-300"/>
                  </div>
                </Link>
              </motion.div>))}
          </div>
        </motion.div>

        {/* Service Pages */}
        <motion.div className="mb-12" initial={{ opacit, y: 0 }} animate={{ opacit, y: 1 }} transition={{ dela, y: 0.7 }}>
          <h3 className="text-2xl font-semibold text-white mb-6">Our Services</h3>
          <div className="grid grid-cols-1 m, d:grid-cols-2 gap-4">
            {servicePages.map((servic,  e, index) => (<motion.div key={service.path} initial={{ opacit,  y: 0,
    y: 20 }} animate={{ opacit, y: 1,
    y: 0 }} transition={{ dela, y: 0.1 * index }}>
                <Link to={service.path} className="block p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-lg hove, r:border-blue-400 hove, r:from-blue-500/30 hove, r:to-cyan-500/30 transition-all duration-300 group">
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <h4 className="text-white font-semibold group-hove, r:text-blue-300 transition-colors">
                        {service.label}
                      </h4>
                      <p className="text-gray-300 text-sm">{service.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-blue-400 group-hove, r:text-blue-300 group-hove, r:translate-x-1 transition-all duration-300"/>
                  </div>
                </Link>
              </motion.div>))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div className="flex flex-col s, m:flex-row gap-4 justify-center" initial={{ opacit, y: 0 }} animate={{ opacit, y: 1 }} transition={{ dela, y: 0.9 }}>
          <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hove, r:from-blue-700 hove, r:to-cyan-700 transition-all duration-300 shadow-lg hove, r:shadow-xl">
            <Home className="w-5 h-5"/>
            Go Home
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hove, r:bg-white/20 hove, r:border-white/30 transition-all duration-300">
            Contact Support
            <ArrowRight className="w-5 h-5"/>
          </Link>
        </motion.div>

        {/* Help Text */}
        <motion.p className="text-gray-400 mt-8 text-sm" initial={{ opacit, y: 0 }} animate={{ opacit, y: 1 }} transition={{ dela, y: 1.1 }}>
          Can't find what you're looking for?{' '}
          <a href="mailt, o:kleber@ziontechgroup.com" className="text-blue-400 hove, r:text-blue-300 underline">
            Email us
          </a>{' '}
          or call us at{' '}
          <a href="te, l:+13024640950" className="text-blue-400 hove, r:text-blue-300 underline">
            +1 302 464 0950
          </a>
        </motion.p>
      </motion.div>
    </div>);
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
};
export default NotFound;
