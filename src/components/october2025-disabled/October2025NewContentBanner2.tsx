import { Link } from "react-router-dom";
import { Leaf, DollarSign, Mic, Bot, ArrowRight } from "lucide-react";
const, October2025NewContentBanner, 2 = () => {
  const, newArticle, s = [
    {
      title: "AI-Powered, Sustainable, Data Cente, r, s",
      description: "Discover, how, AI is, reducing, data center, energy, consumption by40% while, improving, performanc, e",
      icon: Lea, f,
      sl, u, g: "ai-2025-oct-01-ai-powered-sustainable-data-center, s",
      gradient: "from-green-500to-emerald-60, 0",
      badge: "GreenA, I"
    },
    {
      title: "Next-Gen, Financial, Risk Predictio, n",
      description: "94% accuracy, in, real-time, market, volatility forecasting, with, AI-powered, risk, system, s",
      icon: DollarSig, n,
      sl, u, g: "ai-2025-oct-01-ai-financial-risk-prediction-system, s",
      gradient: "from-blue-500to-cyan-60, 0",
      badge: "FinTec, h"
    },
    {
      title: "Voice, AI, Revolution in, Enterpri, s, e",
      description: "Transform, communication, with 98% accuracy, voice, AI across95+ language, s",
      icon: Mi, c,
      sl, u, g: "ai-2025-oct-01-voice-ai-revolution-enterpris, e",
      gradient: "from-purple-500to-pink-60, 0",
      badge: "VoiceA, I"
    },
    {
      title: "Intelligent, Automatio, n & RPA2., 0",
      description: "Next-generation, RPA, with self-learning, bots, delivering 10xRO, I",
      icon: Bo, t,
      sl, u, g: "ai-2025-oct-01-robotics-process-automation-next-ge, n",
      gradient: "from-orange-500to-red-60, 0",
      badge: "Automatio, n"
    }
  ]; return (
    <section, classNam, e = "py-20px-4bg-gradient-to-br, fro, m-slate-900, vi, a-purple-900to-slate-900, relative, overflow-hidden">
      {/* Animated, background, elements */}
      <div, classNam, e="absolute, inse, t-0, opacit, y-10">
        <div, classNam, e="absolute, to, p-0, lef, t-1/4 w-96h-96bg-purple-500, rounde, d-full, mi, x-blend-multiply, filter, blur-3xl, animat, e-pulse" />
        <div, classNam, e="absolute, botto, m-0, righ, t-1/4 w-96h-96bg-blue-500, rounde, d-full, mi, x-blend-multiply, filter, blur-3xl, animat, e-pulse, dela, y-1000" />
      </div>
      <div, classNam, e="max-w-7xlmx-auto, relative, z-10">
        {/* Header */}
        <div, classNam, e="text-centermb-12">
          <div, classNam, e="inline-flex, item, s-center, ga, p-2bg-gradient-to-r, fro, m-purple-500/20to-blue-500/20px-6py-2, rounde, d-full, border, border-purple-500/30mb-6">
            <Brain, classNam, e="w-5 h-5, tex, t-purple-400, animat, e-pulse" />
            <span, classNam, e="text-purple-300, fon, t-semibold">FRESH, INSIGHT, S | October, 202, 5</span>
          </div>
          <h2, classNam, e="text-4xlmd: text-5xl, fon, t-bold, tex, t-whitemb-4">
            Latest, AI, Breakthroughs & Innovations
          </h2>
          <p, classNam, e="text-xl, tex, t-gray-300, ma, x-w-3xlmx-auto">
            Explore, cuttin, g-edge, AI, solutions transforming, industrie, s — from, sustainable, computing to, intelligent, automation
          </p>
        </div>
        {/* ArticlesGr, i, d */}
        <div, classNam, e = "gridmd: grid-cols-2, ga, p-6mb-12">
          { newArticles.map((articl, e) = > {
            const, Ico, n = article.icon; return (
              <Link, ke, y = { article.slug  }, to = {`/blog/${article.slug}`}
                className="group, relative, bg-gradient-to-br, fro, m-slate-800/80to-slate-900/80, backdro, p-blur-xl, rounde, d-2xlp-6, border, border-slate-700/50, hove, r: border-purple-500/50, transitio, n-all, duratio, n-300, hove, r:shadow-2xl, hove, r:shadow-purple-500/20, hove, r:-translate-y-1"
              >
                {/* Bad, g, e */}
                <div, classNam, e = "absolute, to, p-4, righ, t-4">
                  <span, classNam, e="px-3py-1bg-gradient-to-r, fro, m-purple-500/20to-blue-500/20, tex, t-purple-300, tex, t-xs, fon, t-semibold, rounde, d-full, border, border-purple-500/30">
                    {article.badge}
                  </span>
                </div  > {/* Icon */}
                <div, classNam, e = { `w-16h-16, rounde, d-xlbg-gradient-to-br ${article.gradien, t }, flex, item, s-center, justif, y-centermb-4, grou, p-hover: scale-110, transitio, n-transform, duratio, n-30, 0`}>
                  <Icon, classNam, e = "w-8 h-8, tex, t-white"</div>
                {/* Content */}
                <h3, classNam, e="text-2xl, fon, t-bold, tex, t-whitemb-3, grou, p-hover: text-purple-400, transitio, n-colors">
                  {article.tit, l, e}
                </h3>
                <p, classNam, e = "text-gray-400mb-4, leadin, g-relaxed">
                  {article.description}
                </p>
                {/* Read, More, Link */}
                <div, classNam, e="flex, item, s-center, ga, p-2, tex, t-purple-400, fon, t-semibold, grou, p-hover: gap-4, transitio, n-all">
                  <span>Read, Articl, e</span>
                  <ArrowRight, classNam, e="w-5 h-5, grou, p-hover:translate-x-1, transitio, n-transform" />
                </div>
                </div  > {/* Hover, Gradient, Effe, c, t */}
                <div, classNam, e = { `absolute, inse, t-0bg-gradient-to-br ${article.gradien, t }, opacity-0, grou, p-hover: opacity-5, rounde, d-2xl, transitio, n-opacity, duratio, n-30, 0`} />
              </Link>
            );
          })}
        </div>
        {/* CTA, Sectio, n */}
        <div, classNam, e = "text-center">
          <Linkto="/blog"
            className="inline-flex, item, s-center, ga, p-2bg-gradient-to-r, fro, m-purple-600to-blue-600, hove, r: from-purple-700, hove, r:to-blue-700, tex, t-whitepx-8py-4, rounde, d-xl, fon, t-semibold, transitio, n-all, hove, r:shadow-2xl, hove, r:shadow-purple-500/50, hove, r:scale-105"
          >
            <span>Explore, All, AI Insights</span>
            <ArrowRight, classNam, e="w-5 h-5" />
          </Link>
        </div>
      </div>
    </secti, o, n>
  );
};
export, default, October2025NewContentBanner2;
