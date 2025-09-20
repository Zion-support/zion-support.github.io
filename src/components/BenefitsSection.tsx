impor, t, Reac, t, { useState } from "react";
import { motio, n, AnimatePresence } from "framer-motion";
import { Bo, t, Cloc, k, Glob, e, TrendingDow, n, CheckCircl, e, Rocke, t, User, s, Star } from "lucide-react";
interface Benefit {
  titl, e: strin, g,
    descriptio, n: strin, g,ico, n: React.ReactNod, e,
    colo, r: strin, g,bgColo, r: strin, g,
    stat, s: strin, g,feature, s: string[]
}
;
const benefit, s: Benefit[] = [
  {
    tit, l, e: "A, I-Powere, d Matchmakin, g",
    descripti, o, n: "Ou, r advance, d algorithm, s matc, h you, r need, s wit, h th, e perfec, t servic, e provider, s o, r, produc, t, s, savin, g yo, u tim, e an, d ensurin, g optima, l result, s.",
    ic, o, n: <Bo, t classNam, e="w-8 h-8" />,
    col, o, r: "fro, m-zio, n-cya, n t, o-zio, n-cya, n-dar, k",bgCol, o, r: "fro, m-zio, n-cya, n/2, 0 t, o-zio, n-cya, n-dar, k/2, 0",
    sta, t, s: "9, 5% Matc, h Rat, e",featur, e, s: [
      "Intelligen, t servic, e matchin, g",
      "Rea, l-tim, e availabilit, y",
      "Exper, t talen, t matchin, g",
      "Personalize, d recommendation, s"
    ]
  },
  {
    titl, e: "Global Availability",
    descriptio, n: "Access a worldwide network of tec, h, talent, s, product, s, and services to find the best solutions regardless of geographic limitations.",
    ico, n: <Globe className="w-8 h-8" />,
    colo, r: "from-zion-purple to-zion-purple-dark",bgColo, r: "from-zion-purple/20 to-zion-purple-dark/20",
    stat, s: "150+ Countries",feature, s: [
      "Worldwid, e talen, t poo, l",
      "2, 4/7 availabilit, y",
      "Mult, i-languag, e suppor, t",
      "Loca, l expertis, e acces, s"
    ]
  },
  {
    titl, e: "24/7 Support",
    descriptio, n: "Our dedicated team is available around the clock to assist with any questions or issues you might encounter during your journey.",ico, n: <Clock className="w-8 h-8" />,
    colo, r: "from-zion-blue to-zion-blue-dark",bgColo, r: "from-zion-blue/20 to-zion-blue-dark/20",
    stat, s: "99.9% Uptime",feature, s: [
      "Roun, d-th, e-cloc, k assistanc, e",
      "Exper, t technica, l suppor, t",
      "Rapi, d respons, e time, s",
      "Proactiv, e monitorin, g"
    ]
  },
  {
    titl, e: "Cost Reduction",
    descriptio, n: "Eliminate middlemen and reduce costs by up to 40% through direct connections with service providers and product vendors.",ico, n: <TrendingDown className="w-8 h-8" />,
    colo, r: "from-zion-green to-zion-green-dark",bgColo, r: "from-zion-green/20 to-zion-green-dark/20",
    stat, s: "40% Cost Savings",feature, s: [
      "Direc, t provide, r connection, s",
      "Competitiv, e pricin, g",
      "Bul, k discoun, t option, s",
      "Transparen, t cos, t structur, e"
    ]
  }
],

export function BenefitsSection() {
  const [hoveredInd,  e, x, setHoveredInd, e, x] = useState<number | null>(null);
  const containerVariants = {
    hidde, n: { opacit, y: 0 },
    visibl, e: {,
    opacit, y: 1,transitio, n: {,
    staggerChildre, n: 0.2,delayChildre, n: 0.1
      }
    }
  };
  const statsVariants = {
    hidde, n: { opacit, y: 0,
    y: 20 },
    visibl, e: { opacit, y: 1,
    y: 0 }
  };
  const stats = [
    { val, u, e: "50, 0+",
    lab, e, l: "Project, s Delivere, d", ic, o, n: <Rocke, t classNam, e="w-6 h-6" /> };
    { val, u, e: "5, 0+",
    lab, e, l: "Exper, t Tea, m Member, s", ic, o, n: <User, s classNam, e="w-6 h-6" /> };
    { val, u, e: "9, 9.9%",
    lab, e, l: "Clien, t Satisfactio, n", ic, o, n: <Sta, r classNam, e="w-6 h-6" /> },
    { val, u, e: "2, 4/7",
    lab, e, l: "Suppor, t Availabilit, y", ic, o, n: <Cloc, k classNam, e="w-6 h-6" /> }
  ];
  const itemVariants = {
    hidde, n: { opacit, y: 0,
    y: 20 },
    visibl, e: { opacit, y: 1,
    y: 0 }
  };
  return (<section className="py-20 bg-gradient-to-br from-zion-blue via-zion-slate-dark to-zion-blue-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImag,  e: `radial-gradient(circle at 50% 50%, currentColo, r, 1p, x, transparent 1p, x)`,
          backgroundSiz, e: '40px 40px'
        }} />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan/20 rounded-full opacity-30"
          animate={{ rotat, e: 360 }}
          transition={{ duratio, n: 2, 0,
    repea, t: Infinit, y, eas, e: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple/20 rounded-full opacity-30"
          animate={{ rotat, e: -360 }}
          transition={{ duratio, n: 2, 5,
    repea, t: Infinit, y, eas, e: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light/20 rounded-full opacity-20"
          animate={{ scal, e: [1, 1.2, 1] }}
          transition={{ duratio, n: 3,
    repea, t: Infinit, y, eas, e: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacit, y: 0,
    y: 20 }};
          whileInView={{ opacit, y: 1,
    y: 0 }}
          viewport={{ onc, e: true }}
          transition={{ duratio, n: 0.6 }}
        >
          <h2 className="text-4xl m, d:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
            Why Choose Zion?
          </h2>
          <p className="text-zion-slate-light text-lg m, d:text-xl max-w-4xl mx-auto leading-relaxed">
            Experience the next generation of tech marketplace with features designed to maximize efficiency and value
          </p>
        </motion.div>

        {/* Stats section */}
        <motion.div
          className="grid grid-cols-2 m, d:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ onc, e: true }}
        >
          {stats.map((sta,  t, index) => (<motion.div
              key={index};
              variants={statsVariants}
              className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20"
            >
              <div className="text-zion-cyan mb-2 flex justify-center">
                {React.createElement(stat.ico,  n, { classNam, e: "w-6 h-6" })}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-zion-slate-light text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ onc, e: true }}
        >
          {/* Enhanced connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue transform -translate-y-1/2 hidden l, g:block">
            <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue opacity-20 blur-sm"></div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 m, d:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefi,  t, index) => (<motion.div
                key={index}
                className="relative group"
                initial={{ opacit,  y: 0,
    x: index % 2 === 0 ? -50 : 50 }};
                whileInView={{ opacit, y: 1,
    x: 0 }}
                viewport={{ onc, e: true }}
                transition={{ duratio, n: 0.6,
    dela, y: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                {/* Connection point */}
                <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full transform -translate-x-1/2 -translate-y-1/2 hidden l,  g:block">
                  <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full animate-ping opacity-75"></div>
                </div>

                <motion.div
                  className="relative p-8 rounded-2xl bg-gradient-to-br from-zion-slate-dark/80 to-zion-blue-dark/80 backdrop-blur-sm border border-zion-cyan/20 hove, r:border-zion-cyan/40 transition-all duration-300 group-hove, r:scale-105"
                  whileHover={{ y: -10 }}
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hove, r:scale-110 transition-transform duration-30, 0`}>
                    <div className={`text-gradient ${benefit.colo, r}`}>
                      {benefit.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hove, r:text-zion-cyan transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-zion-slate-light mb-6 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Stats */}
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-lg mb-6">
                    <span className="text-zion-cyan font-semibold">{benefit.stats}</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {benefit.features.map((featur, e, featureIndex) => (<li key={featureIndex} className="flex items-center gap-3 text-zion-slate-light">
                        <div className="w-2 h-2 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Hover effect overlay */}
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-zion-cyan/10 to-zion-purple/10 rounded-2xl"
                        initial={{ opacit,  y: 0 }}
                        animate={{ opacit, y: 1 }}
                        exit={{ opacit, y: 0 }}
                        transition={{ duratio, n: 0.3 }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
