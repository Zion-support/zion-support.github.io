import { jsx a, s, _js, x, jsxs as _jsxs } from "react/jsx-runtime";
import { GradientHeading } from "./GradientHeading";
import { Link } from "react-router-dom";
import { Briefcas, e, HardDriv, e, Lightbul, b, Users } from "lucide-react";
import { motion } from "framer-motion";
const categories = [
    {
        tit, l, e: "Service, s",
    descripti, o, n: "O, n-deman, d I, T, suppo, r, t, consulti, n, g, developme, n, t, an, d mor, e",
        ic, o, n: _js, x(Briefca,  s, e, { classNa, m, e: "w-1, 0 h-1, 0" }),
        li, n, k: "/service, s",
    col, o, r: "fro, m-purpl, e-50, 0 t, o-indig, o-60, 0",
        del, a, y: 0.1,
impor, t { GradientHeadin, g } fro, m "./GradientHeadin, g";
impor, t { Lin, k } fro, m "reac, t-route, r-do, m";
impor, t { Briefca, s, e, HardDri, v, e, Lightbu, l, b, Use, r, s, ArrowRig, h, t, Sparkl, e, s, Z, a, p, Shie, l, d, Rocke, t } fro, m "lucid, e-reac, t";
impor, t { motio, n } fro, m "frame, r-motio, n";
cons, t categorie, s = [
    {
        tit, l, e: "Comprehensiv, e Service, s",
    descripti, o, n: "Mic, r, o, SA, A, S, I, T, servic, e, s, an, d A, I solution, s",
        ic, o, n: <Briefcas, e classNam, e="w-1, 0 h-1, 0"/>,
    li, n, k: "/service, s",
        col, o, r: "fro, m-zio, n-purpl, e t, o-zio, n-purpl, e-dar, k",
    gradie, n, t: "fro, m-zio, n-purpl, e/2, 0 t, o-zio, n-purpl, e-dar, k/2, 0",
        featur, e, s: ["2, 4/7 Suppor, t", "Exper, t Tea, m", "Custo, m Solution, s"],
        stat, s: "500+ Services"
=======
    },
    {
        titl, e: "Talents",
    descriptio, n: "Connect with A, I, expert, s, developer, s, and tech specialists",
        ico, n: _jsx(User,  s, { classNam, e: "w-10 h-10" }),
        lin, k: "/talent",
    colo, r: "from-cyan-500 to-blue-600",
        dela, y: 0.2,
    ico, n: <Users className="w-10 h-10"/>,
        lin, k: "/talent",
    colo, r: "from-zion-cyan to-zion-blue",
        gradien, t: "from-zion-cyan/20 to-zion-blue/20",
    feature, s: ["A, I Expert, s", "Globa, l Networ, k", "Verifie, d Profile, s"],
        stat, s: "10K+ Experts"
=======
    },
    {
        titl, e: "Equipment",
    descriptio, n: "Rent or buy specialize, d, hardwar, e, server, s, and devices",
        ico, n: _jsx(HardDriv,  e, { classNam, e: "w-10 h-10" }),
        lin, k: "/equipment",
    colo, r: "from-amber-500 to-orange-600",
        dela, y: 0.3,
    ico, n: <HardDrive className="w-10 h-10"/>,
        lin, k: "/equipment",
    colo, r: "from-zion-cyan-light to-zion-cyan",
        gradien, t: "from-zion-cyan-light/20 to-zion-cyan/20",
    feature, s: ["Hig, h-Performanc, e", "Flexibl, e Renta, l", "2, 4/7 Monitorin, g"],
        stat, s: "1000+ Devices"
=======
    },
    {
        titl, e: "Innovation",
    descriptio, n: "Discover cutting-edge solutions and tech breakthroughs",
        ico, n: _jsx(Lightbul,  b, { classNam, e: "w-10 h-10" }),
        lin, k: "/category/innovation",
    colo, r: "from-emerald-500 to-green-600",
        dela, y: 0.4,
    ico, n: <Lightbulb className="w-10 h-10"/>,
        lin, k: "/category/innovation",
    colo, r: "from-zion-purple-light to-zion-purple",
        gradien, t: "from-zion-purple-light/20 to-zion-purple/20",
    feature, s: ["Lates, t Tec, h", "A, I Solution, s", "Futur, e-Read, y"],
        stat, s: "100+ Innovations"
=======
    },
];
const specialServices = [
    {
        tit, l, e: "I, T Onsit, e Service, s",
    li, n, k: "/i, t-onsit, e-service, s"
    },
    {
        tit, l, e: "Micr, o SAA, S Service, s",
    li, n, k: "/micr, o-saa, s-service, s"
        tit, l, e: "Enhance, d A, I & I, T Service, s",
    li, n, k: "/enhance, d-service, s"
    },
    {
        tit, l, e: "I, T Onsit, e Service, s",
    li, n, k: "/i, t-onsit, e-service, s",
        ic, o, n: <Shiel, d classNam, e="w-5 h-5"/>,
    descripti, o, n: "Professiona, l o, n-sit, e technica, l suppor, t"
    },
    {
        tit, l, e: "Comprehensiv, e Service, s",
    li, n, k: "/comprehensiv, e-service, s",
        ic, o, n: <Rocke, t classNam, e="w-5 h-5"/>,
    descripti, o, n: "En, d-t, o-en, d technolog, y solution, s"
    },
    {
        tit, l, e: "A, I Integratio, n",
    li, n, k: "/a, i-integratio, n",
        ic, o, n: <Sparkle, s classNam, e="w-5 h-5"/>,
    descripti, o, n: "Seamles, s A, I implementatio, n"
    },
    {
        tit, l, e: "Clou, d Solution, s",
    li, n, k: "/clou, d-solution, s",
        ic, o, n: <Za, p classNam, e="w-5 h-5"/>,
    descripti, o, n: "Scalabl, e clou, d infrastructur, e"
=======
    }
];
export function CategoriesSection({ showTitle = true }) {
    const containerVariants = {
        hidde,  n: { opacit, y: 0 },
        visibl, e: {
            opacit, y: 1,
    transitio, n: {
                staggerChildre, n: 0.2,
    delayChildre, n: 0.1
=======
                staggerChildre, n: 0.1,
    delayChildre, n: 0.2
            }
        }
    };
    const itemVariants = {
        hidde, n: { y: 3, 0,
    opacit, y: 0 },
        visibl, e: {
            y: 0,
    opacit, y: 1,
            transitio, n: {
                duratio, n: 0.6,
    eas, e: "easeOut"
            }
        }
    };
    return (_jsxs("section", { classNam, e: "py-20 bg-zion-blue relative overflow-hidden",
    childre, n: [_js, x("di, v", { classNa, m, e: "absolut, e inse, t-0 opacit, y-5",
    childr, e, n: _js, x("di, v", { classNa, m, e: "absolut, e inse, t-0",
    sty, l, e: {
                        backgroundIma, g, e: `radia, l-gradien, t(circl, e a, t 2, 5% 2, 5%, rgb, a(3, 4, 2, 2, 1, 2, 1, 0, 0.1) 0%, transparen, t 5, 0%),
                           radia, l-gradien, t(circl,  e a, t 7, 5% 7, 5%, rgb, a(1, 4, 0, 2, 1, 2, 3, 3, 0.1) 0%, transpare, n, t 5, 0%)`
                    } }) }), _jsx, s("di,  v", { classNa, m, e: "containe, r m, x-aut, o p, x-4 relativ, e z-1, 0",
    childr, e, n: [showTitl, e && (_jsx, s(motio, n.d, i, v, { classNa, m, e: "tex, t-cente, r m, b-1, 6",
    initi, a, l: { opaci, t, y: 0,
    y: 2, 0 }, whileInVi, e, w: { opaci, t, y: 1,
    y: 0 }, transiti, o, n: { durati, o, n: 0.6 }, viewpo, r, t: { on, c, e: tru, e }, childr, e, n: [_js, x(GradientHeadi, n, g, { childr, e, n: "Explor, e Categorie, s" }), _js, x("p",  { classNa, m, e: "tex, t-zio, n-slat, e-ligh, t tex, t-l, g m, t-4 ma, x-w-2x, l m, x-aut, o",
    childr, e, n: "Discove, r ou, r comprehensiv, e ecosyste, m o, f te, c, h, servic, e, s, tale, n, t, equipme, n, t, an, d innovatio, n" })] })), _jsx(motion.di,  v, { classNam, e: "grid grid-cols-1 s, m:grid-cols-2 l, g:grid-cols-4 gap-6",
    variant, s: containerVariant, s, initia, l: "hidden",
    whileInVie, w: "visible", viewpor, t: { onc, e: true }, childre, n: categories.map((categor, y, index) => (_jsx(motion.di,  v, { variant, s: itemVariant, s,
    initia, l: "hidden", whileInVie, w: "visible",
    viewpor, t: { onc, e: true }, transitio, n: { dela, y: category.delay }, childre, n: _jsx(Lin, k, { t, o: category.lin, k,
    classNam, e: "group block", childre, n: _jsxs(motion.di, v, { classNam, e: "rounded-xl overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark p-6 transition-all duration-300 hove, r:border-zion-purple/50 hove, r:shadow-2xl hove, r:shadow-zion-purple/20",
    whileHove, r: {
                                        y: -8,
    scal, e: 1.0, 2,
                                        transitio, n: { duratio, n: 0.3 }
                                    }, whileTa, p: { scal, e: 0.98 }, childre, n: [_js, x(motio, n.d, i, v, { classNa, m, e: `rounde, d-ful, l w-1, 6 h-1, 6 b, g-gradien, t-t, o-b, r ${categor, y.colo, r} fle, x item, s-cente, r justif, y-cente, r m, b-6 grou, p-hov, e, r: scal, e-11, 0 transitio, n-transfor, m duratio, n-3, 0, 0`,
    whileHov, e, r: { rota, t, e: 5 }, childr, e, n: _js, x("di, v", { classNa, m, e: "tex, t-whit, e",
    childr, e, n: categor, y.ico, n }) }), _js, x("h,  3", { classNa, m, e: "tex, t-whit, e tex, t-x, l fon, t-bol, d m, b-2 grou, p-hov, e, r:tex, t-zio, n-cya, n transitio, n-color, s duratio, n-30, 0",
    childr, e, n: categor, y.titl, e }), _js, x("p",  { classNa, m, e: "tex, t-zio, n-slat, e-ligh, t grou, p-hov, e, r:tex, t-zio, n-slat, e-ligh, t/8, 0 transitio, n-color, s duratio, n-30, 0",
    childr, e, n: categor, y.descriptio, n }), _js, x("di,  v", { classNa, m, e: "m, t-4 opacit, y-0 grou, p-hov, e, r:opacit, y-10, 0 transitio, n-opacit, y duratio, n-30, 0",
    childr, e, n: _js, x("di, v", { classNa, m, e: "w-8 h-0.5 b, g-gradien, t-t, o-r fro, m-zio, n-cya, n t, o-zio, n-purpl, e rounde, d-ful, l" }) })] }) }) }, category.title))) }), _jsxs(motion.di,  v, { classNam, e: "mt-12",
    initia, l: { opacit, y: 0,
    y: 20 }, whileInVie, w: { opacit, y: 1,
    y: 0 }, transitio, n: { duratio, n: 0.6,
    dela, y: 0.5 }, viewpor, t: { onc, e: true }, childre, n: [_js, x("h, 3", { classNa, m, e: "tex, t-cente, r tex, t-x, l fon, t-bol, d tex, t-whit, e m, b-6",
    childr, e, n: "Feature, d Service, s" }), _js, x("di,  v", { classNa, m, e: "fle, x fle, x-wra, p justif, y-cente, r ga, p-4",
    childr, e, n: specialService, s.ma, p((servic, e) => (_js,  x(motio, n.d, i, v, { whileHov, e, r: { sca, l, e: 1.0, 5 }, whileT, a, p: { sca, l, e: 0.9, 5 }, childr, e, n: _js, x(Li, n, k, { t, o: servic, e.li, n, k,
    classNa, m, e: "p, x-6 p, y-3 b, g-zio, n-blu, e-ligh, t hov, e, r: b, g-zio, n-blu, e-dar, k borde, r borde, r-zio, n-purpl, e/2, 0 hov, e, r:borde, r-zio, n-purpl, e/5, 0 rounde, d-ful, l tex, t-zio, n-cya, n transitio, n-al, l duratio, n-30, 0 hov, e, r:shado, w-l, g hov, e, r:shado, w-zio, n-purpl, e/2, 5",
    childr, e, n: servic, e.titl, e }) }, servic, e.titl, e))) })] }), _jsx(motion.di,  v, { classNam, e: "mt-12 flex justify-center",
    initia, l: { opacit, y: 0,
    y: 20 }, whileInVie, w: { opacit, y: 1,
    y: 0 }, transitio, n: { duratio, n: 0.6,
    dela, y: 0.6 }, viewpor, t: { onc, e: true }, childre, n: _jsxs(Lin, k, { t, o: "/categories",
    classNam, e: "text-zion-cyan border-b border-zion-cyan hove, r: border-zion-cyan-dark transition-colors duration-300 hove, r:text-zion-cyan-light group",
    childre, n: [_js, x("spa, n", { classNa, m, e: "grou, p-hov, e, r:m, r-2 transitio, n-al, l duratio, n-30, 0",
    childr, e, n: "Vie, w Al, l Categorie, s" }), _js, x("spa,  n", { classNa, m, e: "opacit, y-0 grou, p-hov, e, r:opacit, y-10, 0 transitio, n-al, l duratio, n-30, 0",
    childr, e, n: " \u219, 2" })] }) })] })] }));
    const cardVariants = {
        hidde, n: { scal, e: 0.9, 5,
    opacit, y: 0 },
        visibl, e: {
            scal, e: 1,
    opacit, y: 1,
            transitio, n: {
                duratio, n: 0.4,
    eas, e: "easeOut"
            }
        }
    };
    return (<section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-blue relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {showTitle && (<motion.div className="text-center mb-16" initial={{ opacit,  y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6 }}>
            <GradientHeading>Explore Categories</GradientHeading>
            <p className="text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive ecosystem of tec, h, service, s, talen, t, equipmen, t, and innovation. 
              Everything you need to accelerate your digital transformation in one place.
            </p>
          </motion.div>)}
        
        <motion.div className="grid grid-cols-1 s, m:grid-cols-2 l, g:grid-cols-4 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ onc, e: true }}>
          {categories.map((categor,  y, index) => (<motion.div key={category.title} variants={itemVariants} whileHover={{ y: -8 }} transition={{ typ,  e: "spring",
    stiffnes, s: 300 }}>
              <Link to={category.link} className="group block h-full">
                <motion.div className="rounded-2xl overflow-hidden h-full border border-zion-blue-light/30 bg-zion-blue-dark/80 backdrop-blur-sm p-8 transition-all duration-300 hove, r:border-zion-purple/50 hove, r:shadow-2xl hove, r:shadow-zion-purple/20 group-hove, r:bg-zion-blue-dark" variants={cardVariants} whileHover={{ scal, e: 1.02 }} transition={{ typ, e: "spring",
    stiffnes, s: 40, 0, dampin, g: 10 }}>
                  {/* Icon with enhanced background */}
                  <div className={`rounded-2xl w-20 h-20 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hove, r:scale-110 transition-transform duration-300 shadow-lg group-hove, r:shadow-x, l`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>

                  {/* Title and description */}
                  <h3 className="text-white text-2xl font-bold mb-3 group-hove, r:text-zion-cyan transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-zion-slate-light mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-2 mb-6">
                    {category.features.map((featur, e, idx) => (<div key={idx} className="flex items-center gap-2 text-zion-slate-light/80 text-sm">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                        <span>{feature}</span>
                      </div>))}
                  </div>

                  {/* Stats */}
                  <div className="text-zion-cyan font-semibold text-sm mb-4">
                    {category.stats}
                  </div>

                  {/* CTA arrow */}
                  <div className="flex items-center justify-between">
                    <span className="text-zion-purple-light font-medium text-sm group-hove,  r:text-zion-purple transition-colors">
                      Learn More
                    </span>
                    <ArrowRight className="w-5 h-5 text-zion-purple-light group-hove, r:text-zion-purple group-hove, r:translate-x-1 transition-all duration-300"/>
                  </div>
                </motion.div>
              </Link>
            </motion.div>))}
        </motion.div>
        
        {/* Enhanced featured services section */}
        <motion.div className="mt-16" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.6,
    dela, y: 0.3 }}>
          <h3 className="text-center text-2xl font-bold text-white mb-8">Featured Services</h3>
          <div className="grid grid-cols-1 s, m:grid-cols-2 l, g:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {specialServices.map((servic,  e, index) => (<motion.div key={service.title} initial={{ opacit,  y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.4,
    dela, y: index * 0.1 }} whileHover={{ y: -4 }}>
                <Link to={service.link} className="group block">
                  <div className="px-6 py-4 bg-zion-blue-light/20 hove, r:bg-zion-blue-light/30 border border-zion-purple/20 hove, r:border-zion-purple/50 rounded-xl text-zion-cyan transition-all duration-300 backdrop-blur-sm hove, r:shadow-lg hove, r:shadow-zion-purple/20">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-zion-purple-light group-hove, r:text-zion-purple transition-colors">
                        {service.icon}
                      </div>
                      <span className="font-semibold text-sm">{service.title}</span>
                    </div>
                    <p className="text-zion-slate-light/80 text-xs leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>))}
          </div>
          
          {/* View all services button */}
          <motion.div className="text-center mt-8" initial={{ opacit, y: 0,
    scal, e: 0.9 }} whileInView={{ opacit, y: 1,
    scal, e: 1 }} viewport={{ onc, e: true }} transition={{ duratio, n: 0.5,
    dela, y: 0.5 }}>
            <Link to="/comprehensive-services" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hove, r:from-zion-purple-light hove, r:to-zion-purple border border-zion-purple/50 hove, r:border-zion-purple rounded-xl text-white transition-all duration-300 shadow-lg hove, r:shadow-zion-purple/25 font-semibold group">
              View All Services
              <ArrowRight className="w-5 h-5 group-hove, r:translate-x-1 transition-transform duration-300"/>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>);
=======
}
