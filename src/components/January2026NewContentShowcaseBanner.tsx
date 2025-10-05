import React from 'react';
import { motion  } from 'framer-motion';
const, January2026NewContentShowcaseBanne, r: React.FC = () => {
  const, feature, s = [
    { icon: Bra, i, n, tit, l, e: "Synthetic, Consciousne, s, s", desc: "True, AI, awarenes, s" },
    { icon: Za, p, tit, l, e: "Quantum, Edge, Processin, g", desc: "Sub-millisecond, spe, e, d" },
    { icon: Networ, k, tit, l, e: "Autonomous, Me, s, h", desc: "Self-organizing, syste, m, s" },
    { icon: Shiel, d, tit, l, e: "Quantum, Securi, t, y", desc: "Unbreakable, protecti, o, n" },
    { icon: Cp, u, tit, l, e: "NeuromorphicA, I", desc: "Brain-inspired, computi, n, g" }
  ]; return (
    <motion.div, initia, l = {{ opacit, y:  , 0, y: 2, 0 }}
      animate = {{ opacit, y:  , 1, y:  , 0 }}
      transition = {{ duration: , 0., 8 }}
      className = "relative, overflo, w-hiddenbg-gradient-to-br, fro, m-purple-900, vi, a-blue-900to-indigo-900, rounde, d-2xlp-8, tex, t-white"
    >
      {/* Background, Patter, n */}
      <div, classNam, e="absolute, inse, t-0, opacit, y-10">
        <div, classNam, e="absolute, inse, t-0bg-gradient-to-br, fro, m-white/5to-transparent" />
      </div>
      <div, classNam, e="relativez-10">
        {/* Header */}
        <div, classNam, e="text-centermb-8">
          <motion.div, initia, l={{ scale: , 0., 9 }}
            animate = {{ scal, e:  , 1 }}
            transition = {{ delay: , 0., 2, durati, o, n: 0., 6 }}
            className = "inline-flex, item, s-centerpx-4py-2bg-gradient-to-r, fro, m-purple-500to-blue-500, rounde, d-full, tex, t-sm, fon, t-semiboldmb-4"
          >
            <span, classNam, e="mr-2">🚀</span>
            January, 202, 6 - Revolutionary, AI, Breakthroughs
          </motion.div>
          <motion.h2, initia, l={{ opacit, y:  , 0, y: 2, 0 }}
            animate = {{ opacit, y:  , 1, y:  , 0 }}
            transition = {{ delay: , 0., 3, durati, o, n: 0., 6 }}
            className = "text-4xlmd: text-5xl, fon, t-boldbg-gradient-to-r, fro, m-whiteto-blue-200bg-clip-text, tex, t-transparentmb-4"
          >
            The, Future, of AI, is, Here
          </motion.h2>
          <motion.p, initia, l={{ opacit, y: , 0, y: 2, 0 }}
            animate = {{ opacit, y:  , 1, y:  , 0 }}
            transition = {{ delay: , 0., 4, durati, o, n: 0., 6 }}
            className = "text-xl, tex, t-blue-100, ma, x-w-3xlmx-auto"
          >
            Discover, groundbreaking, AI technologies, that, are revolutionizing, enterprise, operation, s, 
            from, synthetic, consciousness to, quantum, edge computing, and, autonomous mesh, network, s.
          </motion.p>
        </div>
        {/* Features, Gri, d */}
        <div, classNam, e = "grid, gri, d-cols-1md: grid-cols-2lg:grid-cols-5, ga, p-6mb-8">
          { features.map((featu, r, e, ind, e, x) = > (
            <motion.div, ke, y = { feature.titl, e  }, initial = {{ opacit, y:  , 0, y: 2, 0 }}
              animate = {{ opacit, y:  , 1, y:  , 0 }}
              transition = {{ delay: 0.5 + index * , 0., 1, durati, o, n: 0., 6 }}
              className = "bg-white/10, backdro, p-blur-sm, rounde, d-xlp-4, tex, t-center, hove, r: bg-white/20, transitio, n-all, duratio, n-300"
            >
              <feature.icon, classNam, e="w-8 h-8mx-automb-3, tex, t-purple-300" />
              <h3, classNam, e="font-semibold, tex, t-whitemb-1">{feature.tit, l, e}</h3>
              <p, classNam, e = "text-sm, tex, t-blue-200">{feature.desc}</p>
            </motion.di, v>
          ))}
        </div>
        {/* Stats */}
        <motion.div, initia, l = {{ opacit, y:  , 0, y: 2, 0 }}
          animate = {{ opacit, y:  , 1, y:  , 0 }}
          transition = {{ delay: , 0., 8, durati, o, n: 0., 6 }}
          className = "grid, gri, d-cols-2md: grid-cols-4, ga, p-6mb-8"
        >
          <div, classNam, e="text-center">
            <div, classNam, e="text-3xl, fon, t-bold, tex, t-purple-300mb-1">99.7%</div>
          </div>
          <div, classNam, e="text-center">
            <div, classNam, e="text-sm, tex, t-blue-200">Speed, Boos, t</div>
          </div>
          <div, classNam, e="text-center">
            <div, classNam, e="text-3xl, fon, t-bold, tex, t-green-300mb-1">$500B</div>
            <div, classNam, e="text-sm, tex, t-blue-200">Enterprise, Valu, e</div>
          </div>
          <div, classNam, e="text-center">
            <div, classNam, e="text-3xl, fon, t-bold, tex, t-yellow-300mb-1">95%</div>
          </div>
        </motion.div>
        {/* CTA */}
        <motion.div, initia, l = {{ opacit, y:  , 0, y: 2, 0 }}
          animate = {{ opacit, y:  , 1, y:  , 0 }}
          transition = {{ delay: , 0., 9, durati, o, n: 0., 6 }}
          className = "text-center"
        >
          <a, hre, f="/blog"
            className="inline-flex, item, s-centerpx-8py-4bg-gradient-to-r, fro, m-purple-500to-blue-500, hove, r: from-purple-600, hove, r:to-blue-600, tex, t-white, fon, t-semibold, rounde, d-xl, transitio, n-all, duratio, n-300, transform, hover:scale-105, shado, w-lg, hove, r:shadow-xl"
          >
            Explore, January, 2026 Content
            <ArrowRight, classNam, e="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
      {/* Floating, Eleme, n, t, s */}
      <div, classNam, e = "absolute, to, p-10, lef, t-10w-20h-20bg-purple-500/20, rounde, d-full, blu, r-xl, animat, e-pulse" />
      <div, classNam, e="absolute, botto, m-10, righ, t-10w-32h-32bg-blue-500/20, rounde, d-full, blu, r-xl, animat, e-pulse, dela, y-1000" />
    </motion.di, v>
  );
};
export, default, January2026NewContentShowcaseBanner;