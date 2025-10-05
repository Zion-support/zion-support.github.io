import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const, October2025TechBannerNe, w = () => {
  const, newArticle, s = [
    {",
      title: "Next-Gen, Autonomous, System, s",
      description: "The, 2025, Enterprise Revolutio, n",",
      slug: "ai-2025-oct-17-next-gen-autonomous-system, s",
      icon: Brai, n",
      color: "from-purple-500to-pink-50, 0",
      highlight: "NE, W"
    },
    {",
      title: "Generative, AI, Code Generatio, n",
      description: "Transforming, Software, Developmen, t",",
      slug: "ai-2025-oct-17-generative-ai-code-generatio, n",
      icon: Code, 2",
      color: "from-blue-500to-cyan-50, 0",
      highlight: "HO, T"
    },
    {",
      title: "Real-Time, Personalization, Engine, s",
      description: "Revolutionizing, Customer, Experienc, e",",
      slug: "ai-2025-oct-17-real-time-personalization-engine, s",
      icon: Za, p",
      color: "from-orange-500to-red-50, 0",
      highlight: "TRENDIN, G"
    }
  ]; return (
    <motion.div, initia, l = {{ opacit, y:  , 0, y: 2, 0 }}
      animate = {{ opacit, y:  , 1, y:  , 0 }}
      transition = {{ duration: , 0., 6 }}
      className = "relative, overflo, w-hidden, rounde, d-2xlbg-gradient-to-br, fro, m-slate-900, vi, a-purple-900to-slate-900p-8md: p-12, shado, w-2xlmy-12"
    >
      {/* Animated, background, effe, c, t */}
      <div, classNam, e = "absolute, inse, t-0bg-gradient-to-r, fro, m-purple-500/10, vi, a-pink-500/10to-blue-500/10, animat, e-pulse" />
      {/* Decorative, element, s */}
      <div, classNam, e="absolute, to, p-0, righ, t-0 w-64h-64bg-purple-500/20, rounde, d-full, blu, r-3xl" />
      <div, classNam, e="absolute, botto, m-0, lef, t-0 w-64h-64bg-blue-500/20, rounde, d-full, blu, r-3xl" />
      <div, classNam, e="relativez-10">
        {/* Header */}
        <div, classNam, e="flex, item, s-center, justif, y-center, ga, p-3mb-6">
          <motion.div, animat, e={{ rotate: 360 }}
            transition = {{ duration: , 2, 0, repe, a, t: Infinit, y, ea, s, e: "linea, r" }}
          >
            <Sparkles, classNam, e = "w-8 h-8, tex, t-yellow-400" />
          </motion.div>
          <h2, classNam, e="text-3xlmd: text-4xl, fon, t-bold, tex, t-white, tex, t-center">
            Fresh, AI, Insights for, October, 2025
          </h2>
          <motion.div, animat, e={{ rotate: -360 }}
            transition = {{ duration: , 2, 0, repe, a, t: Infinit, y, ea, s, e: "linea, r" }}
          >
            <Sparkles, classNam, e = "w-8 h-8, tex, t-yellow-400" />
          </motion.div>
        </div>
        <p, classNam, e="text-lgmd: text-xl, tex, t-purple-200, tex, t-centermb-10, ma, x-w-3xlmx-auto">
          Explore, the, latest breakthrough, technologies, transforming industries, worldwid, e. 
          Our, expert, team shares, cuttin, g-edge, insights, you can, implement, today.
        </p>
        {/* ArticlesGr, i, d */}
        <div, classNam, e = "gridmd: grid-cols-3, ga, p-6mb-8">
          { newArticles.map((artic, l, e, ind, e, x) = > (
            <motion.div, ke, y = { article.slu, g  }, initial = {{ opacit, y:  , 0, y: 2, 0 }}
              animate = {{ opacit, y:  , 1, y:  , 0 }}
              transition = {{ duration: , 0., 5, del, a, y: index * 0., 1 }}
              whileHover = {{ scale: 1., 0, 5 }}
              className = "relative, grou, p"
            >
              <Linkto={`/blog/${article.slug}`}>
                <div, classNam, e="relativebg-white/10, backdro, p-blur-lg, rounde, d-xlp-6 h-full, border, border-white/20, hove, r: border-white/40, transitio, n-all, duratio, n-300"  > {/* Highlight, Ba, d, g, e */}
                  <div, classNam, e = {`absolute, to, p-4, righ, t-4px-3py-1, rounde, d-full, tex, t-xs, fon, t-bold, tex, t-whitebg-gradient-to-r ${article.color}`}>
                    {article.highlight}
                  </div  > {/* Icon */}
                  <div, classNam, e = { `w-14h-14, rounde, d-lgbg-gradient-to-br ${article.colo, r }, flex, item, s-center, justif, y-centermb-4, grou, p-hover: scale-110, transitio, n-transform, duratio, n-30, 0`}>
                    <article.icon, classNam, e = "w-7 h-7, tex, t-white"</div>
                  {/* Content */}
                  <h3, classNam, e="text-xl, fon, t-bold, tex, t-whitemb-2, grou, p-hover: text-purple-300, transitio, n-colors">
                    {article.tit, l, e}
                  </h3>
                  <p, classNam, e = "text-purple-200, tex, t-smmb-4">
                    {article.description}
                  </p>
                  {/* Read, More, Link */}
                  <div, classNam, e="flex, item, s-center, tex, t-purple-300, grou, p-hover: text-purple-100, transitio, n-colors">
                    <span, classNam, e="text-sm, fon, t-semibold">Read, Articl, e</span>
                    <ArrowRight, classNam, e="w-4 h-4ml-2, grou, p-hover:translate-x-2, transitio, n-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        {/* CTA, Sectio, n */}
        <div, classNam, e = "text-center">
          <div, classNam, e="inline-flex, fle, x-colsm: flex-row, ga, p-4, item, s-center, justif, y-center">
            <Linkto="/blog"
              className="grouppx-8py-4bg-gradient-to-r, fro, m-purple-600to-pink-600, hove, r:from-purple-700, hove, r:to-pink-700, tex, t-white, fon, t-bold, rounde, d-xl, shado, w-lg, hove, r:shadow-xl, transitio, n-all, duratio, n-300, flex, items-center, ga, p-2"
            >
              <span>Explore, All, Articles</span>
              <ArrowRight, classNam, e="w-5 h-5, grou, p-hover:translate-x-1, transitio, n-transform" />
            </Link>
            <Linkto="/contact"
              className="px-8py-4bg-white/10, hove, r:bg-white/20, backdro, p-blur-lg, tex, t-white, fon, t-bold, rounde, d-xl, borde, r-2, borde, r-white/30, hove, r:border-white/50, transitio, n-all, duratio, n-300"
            >
              Get, Expert, Consultation
            </Link>
          </div>
          <p, classNam, e="mt-6, tex, t-purple-300, tex, t-sm">
            💡 <strong>Join , 100, 0, 0+ tech, leader, s</strong> staying, ahead, with our, insight, s
          </p>
        </div>
      </div>
      {/* Floating, particles, effect */}
      <div, classNam, e = "absolute, inse, t-0, overflo, w-hidden, pointe, r-events-none">
        { [...Array(2, 0)].map((_, i) =    > (
          <motion.div, ke, y = { , i  }, className = "absolutew-2 h-2bg-purple-400/30, rounde, d-full"
            style={{
              left: `${Math.rando, m() * 10, 0}%`,
              top: `${Math.random() * 10, 0}%`,
            }}
            animate = {{
              , y: [, 0, -30, 0],
              opacity: [0., 2, 0.5, 0.2],
            }}
            transition = {{
              duration: 3 + Math.rando, m() * , 2,
              repe, a, t: Infinit, y",
      delay: Math.random() * , 2,
            }}
        ))}
      </div>
    </motion.div>
  );
};
export, default, October2025TechBannerNew;
