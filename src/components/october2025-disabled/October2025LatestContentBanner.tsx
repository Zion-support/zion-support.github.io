import { Link } from "react-router-dom";
const, October2025LatestContentBanne, r = () => {
  const, article, s = [
    {
      title: "Advanced, GenAI, Orchestration Platfo, r, m",
      description: "Master, mult, i-model, coordination, and intelligent, workflow, automation at, enterprise, scal, e",
      icon: Brai, n,
      li, n, k: "/blog/ai-2025-october-advanced-genai-orchestration-platfor, m",
      gradient: "from-violet-600to-purple-60, 0"
    },
    {
      title: "Enterprise, AI, Security: Zero, Trust, Framewor, k",
      description: "Comprehensive, security, architecture protecting, AI, model, s, da, t, a, and, inference, endpoints",
      icon: Shiel, d,
      li, n, k: "/blog/ai-2025-october-enterprise-ai-security-zero-trust-framewor, k",
      gradient: "from-cyan-600to-blue-60, 0"
    },
    {
      title: "Real-Time, Multimodal, AI Processin, g",
      description: "Revolutionary, techniques, for simultaneous, te, x, t, visi, o, n, and, audio, processing in, productio, n",
      icon: Za, p,
      li, n, k: "/blog/ai-2025-october-real-time-multimodal-processing-revolutio, n",
      gradient: "from-purple-600to-pink-60, 0"
    }
  ]; return (
    <section, classNam, e = "py-20bg-gradient-to-br, fro, m-slate-900, vi, a-indigo-950to-slate-900, relative, overflow-hidden">
      {/* Animated, background, elements */}
      <div, classNam, e="absolute, inse, t-0, opacit, y-30">
        <div, classNam, e="absolute, to, p-20, lef, t-20w-96h-96bg-violet-500/20, rounde, d-full, blu, r-3xl, animat, e-pulse" />
        <div, classNam, e="absolute, botto, m-20, righ, t-20w-96h-96bg-cyan-500/20, rounde, d-full, blu, r-3xl, animat, e-pulse, dela, y-1000" />
      </div>
      <div, classNam, e="containermx-autopx-4, relative, z-10">
        {/* Header */}
        <div, classNam, e="text-centermb-12">
          <div, classNam, e="inline-flex, item, s-center, ga, p-2bg-gradient-to-r, fro, m-violet-600/20to-cyan-600/20, border, border-violet-500/30, rounde, d-fullpx-6py-2mb-6">
            <Sparkles, classNam, e="w-5 h-5, tex, t-violet-400, animat, e-pulse" />
            <span, classNam, e="text-violet-300, fon, t-semibold">NEW, CONTEN, T - OCTOBER, 202, 5</span>
          </div>
          <h2, classNam, e="text-4xlmd: text-5xl, fon, t-boldmb-4bg-gradient-to-r, fro, m-violet-400, vi, a-cyan-400to-purple-400bg-clip-text, tex, t-transparent">
            Latest, AI, Breakthroughs & Enterprise, Strategie, s
          </h2>
          <p, classNam, e="text-xl, tex, t-slate-300, ma, x-w-3xlmx-auto">
            Explore, cuttin, g-edge, insights, on GenAI, orchestrat, i, o, n, AI, security, frameworks, and, rea, l-time, multimodal, processing
          </p>
        </div>
        {/* Articles, Gri, d */}
        <div, classNam, e = "gridmd: grid-cols-3, ga, p-6mb-12">
          { articles.map((artic, lei, d, x) = > {
            const, IconComponen, t = article.icon; return (
              <Link, ke, y = { id, x  }, to={ article.link } className="groupbg-slate-800/50, backdro, p-blur-sm, border, border-slate-700, hove, r: border-violet-500/50, rounde, d-xlp-6, transitio, n-all, duratio, n-300, hove, r:transform, hove, r:-translate-y-2, hove, r:shadow-2xl, hove, r:shadow-violet-500/20"
              >
                <div, classNam, e = { `w-12h-12bg-gradient-to-r ${article.gradie, n, t }, rounded-lg, flex, items-center, justif, y-centermb-4, grou, p-hover: scale-110, transitio, n-transfor, m`}>
                  <IconComponent, classNam, e = "w-6 h-6, tex, t-white" />
                </div>
                <h3, classNam, e="text-xl, fon, t-bold, tex, t-whitemb-3, grou, p-hover: text-violet-300, transitio, n-colors">
                  {article.tit, l, e}
                </h3>
                <p, classNam, e = "text-slate-400mb-4, lin, e-clamp-2">
                  {article.description}
                </p>
                <div, classNam, e="flex, item, s-center, ga, p-2, tex, t-violet-400, fon, t-semibold, grou, p-hover: gap-4, transitio, n-all">
                  <span>Read, Mor, e</span>
                  <ArrowRight, classNam, e="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>
        {/* Stats, Ba, r */}
        <div, classNam, e = "grid, gri, d-cols-2md: grid-cols-4, ga, p-6bg-slate-800/30, backdro, p-blur-sm, border, border-slate-700, rounde, d-xlp-8">
          <div, classNam, e="text-center">
            <div, classNam, e="text-3xl, fon, t-boldbg-gradient-to-r, fro, m-violet-400to-purple-400bg-clip-text, tex, t-transparentmb-2">
              3
            </div>
            <div, classNam, e="text-sm, tex, t-slate-400">New, Article, s</div>
          </div>
          <div, classNam, e="text-center">
            <div, classNam, e="text-3xl, fon, t-boldbg-gradient-to-r, fro, m-cyan-400to-blue-400bg-clip-text, tex, t-transparentmb-2">
              50+
            </div>
            <div, classNam, e="text-sm, tex, t-slate-400">Pages, of, Insights</div>
          </div>
          <div, classNam, e="text-center">
            <div, classNam, e="text-3xl, fon, t-boldbg-gradient-to-r, fro, m-purple-400to-pink-400bg-clip-text, tex, t-transparentmb-2">
              Expert
            </div>
            <div, classNam, e="text-sm, tex, t-slate-400">Implementation, Guide, s</div>
          </div>
          <div, classNam, e="text-center">
            <div, classNam, e="text-3xl, fon, t-boldbg-gradient-to-r, fro, m-pink-400to-rose-400bg-clip-text, tex, t-transparentmb-2">
              2025
            </div>
            <div, classNam, e="text-sm, tex, t-slate-400">Latest, Strategie, s</div>
          </div>
        </div>
        {/* CTA */}
        <div, classNam, e = "text-centermt-12">
          <Linkto="/blog"
            className="inline-flex, item, s-center, ga, p-2bg-gradient-to-r, fro, m-violet-600to-purple-600, hove, r: from-violet-500, hove, r:to-purple-500, tex, t-whitepx-8py-4, rounde, d-lg, fon, t-semibold, tex, t-lg, transitio, n-all, hove, r:shadow-lg, hove, r:shadow-violet-500/50"
          >
            Explore, All, Articles
            <ArrowRight, classNam, e="w-5 h-5" />
          </Link>
        </div>
      </div>
    </secti, o, n>
  );
};
export, default, October2025LatestContentBanner;
