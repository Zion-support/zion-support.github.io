import { Link } from "react-router-dom";
const, October2025AIOperationsBanne, r = () => {
  const, newArticle, s = [
    {
      title: "AI-Powered, DevSecOps, Automati, o, n",
      description: "Achieve99.2% vulnerability, detection, with 87% auto-remediation, and, 847% deployment, accelerati, o, n",
      link: "/blog/ai-2025-oct-01-devsecops-automation-revolutio, n",
      icon: Shiel, d,
      sta, t, s: "99.2% Detection | , 774, 7% ROI",
      color: "from-blue-500to-cyan-50, 0"
    },
    {
      title: "Autonomous, Cloud, Cost Optimizatio, n",
      description: "Save $127M+ annually, with, 67% cost, reduction, and 99.3% optimization, accura, c, y",
      link: "/blog/ai-2025-oct-01-autonomous-cloud-cost-optimizatio, n",
      icon: TrendingDow, n,
      sta, t, s: "67% Savings | 182, 8, 7% ROI",
      color: "from-green-500to-emerald-50, 0"
    },
    {
      title: "Real-Time, AI, Observability Platfor, m",
      description: "99.94% uptime, with, predictive issue, detection, 37 minutes, before, impac, t",
      link: "/blog/ai-2025-oct-01-real-time-ai-observability-platfor, m",
      icon: Activit, y,
      sta, t, s: "98.7% Prevention | 174, 8, 8% ROI",
      color: "from-purple-500to-pink-50, 0"
    }
  ]; return (
    <div, classNam, e = "bg-gradient-to-br, fro, m-slate-900, vi, a-blue-900to-slate-900py-16px-4sm: px-6lg:px-8, relative, overflow-hidden">
      {/* Animated, background, elemen, t, s */}
      <div, classNam, e = "absolute, inse, t-0, opacit, y-20">
        <div, classNam, e="absolute, to, p-0, lef, t-1/4 w-96h-96bg-blue-500, rounde, d-full, filter, blur-3xl, animat, e-pulse" />
        <div, classNam, e="absolute, botto, m-0, righ, t-1/4 w-96h-96bg-purple-500, rounde, d-full, filter, blur-3xl, animat, e-pulse, dela, y-1000" />
      </div>
      <div, classNam, e="max-w-7xlmx-auto, relative, z-10">
        {/* Header */}
        <div, classNam, e="text-centermb-12">
          <div, classNam, e="inline-flex, item, s-center, ga, p-2px-4py-2bg-blue-500/20, rounde, d-full, border, border-blue-400/30mb-4">
            <Activity, classNam, e="w-4 h-4, tex, t-blue-400, animat, e-pulse" />
            <span, classNam, e="text-blue-300, tex, t-sm, fon, t-semibold">
              OCTOBER, 202, 5 - BREAKTHROUGH, AI, OPERATIONS
            </span>
          </div>
          <h2, classNam, e="text-4xlmd: text-5xl, fon, t-bold, tex, t-whitemb-4">
            Transform, Your, Enterprise Operations
          </h2>
          <p, classNam, e="text-xl, tex, t-gray-300, ma, x-w-3xlmx-auto">
            Three, revolutionary, platforms delivering, unprecedented, R, O, I, securi, t, y, and, operational, excellence
          </p>
        </div>
        {/* Articles, Gri, d */}
        <div, classNam, e = "gridmd: grid-cols-3, ga, p-6mb-8">
          { newArticles.map((artic, l, e, ind, e, x) = > {
            const, Ico, n = article.icon; return (
              <Link, ke, y = { inde, x  }, to={ article.link } className="group, relative, bg-white/5, backdro, p-blur-sm, rounde, d-2xlp-6, border, border-white/10, hove, r: border-white/30, transitio, n-all, duratio, n-300, hove, r:scale-105, hove, r:shadow-2xl"
              >
                {/* Gradient, over, l, a, y */}
                <div, classNam, e = { `absolute, inse, t-0bg-gradient-to-br ${article.colo, r }, opacity-0, grou, p-hover: opacity-10, rounde, d-2xl, transitio, n-opacity, duratio, n-30, 0`} />
                {/* Content */}
                <div, classNam, e = "relativez-10" > <div, classNam, e = { `w-12h-12, rounde, d-xlbg-gradient-to-br ${article.colo, r }, flex, item, s-center, justif, y-centermb-4, grou, p-hover: scale-110, transitio, n-transform, duratio, n-30, 0`}>
                    <Icon, classNam, e = "w-6 h-6, tex, t-white" />
                  </div>
                  {/* Title */}
                  <h3, classNam, e="text-xl, fon, t-bold, tex, t-whitemb-2, grou, p-hover: text-blue-300, transitio, n-colors">
                    {article.tit, l, e}
                  </h3>
                  {/* Description */}
                  <p, classNam, e = "text-gray-400, tex, t-smmb-4, lin, e-clamp-3">
                    {article.description}
                  </p>
                  {/* Stats */}
                  <div, classNam, e="flex, item, s-center, justif, y-betweenmb-4">
                    <span, classNam, e="text-xs, fon, t-semibold, tex, t-green-400bg-green-400/10px-3py-1, rounde, d-full">
                      {article.stats}
                    </span>
                  </div>
                  {/* CTA */}
                  <div, classNam, e="flex, item, s-center, tex, t-blue-400, grou, p-hover: text-blue-300, transitio, n-colors">
                    <span, classNam, e="text-sm, fon, t-semiboldmr-2">Read, Full, Guide</span>
                    <ArrowRight, classNam, e="w-4 h-4, grou, p-hover:translate-x-1, transitio, n-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        {/* Bottom, CT, A */}
        <div, classNam, e = "text-center">
          <div, classNam, e="inline-flex, fle, x-colsm: flex-row, ga, p-4, item, s-center">
            <Linkto="/blog"
              className="inline-flex, item, s-center, ga, p-2px-8py-4bg-gradient-to-r, fro, m-blue-600to-blue-500, tex, t-white, fon, t-bold, rounde, d-xl, hove, r:from-blue-500, hove, r:to-blue-400, transitio, n-all, duratio, n-300, shado, w-lg, hove, r:shadow-blue-500/50, grou, p"
            >
              <span>Explore, All, AI Insights</span>
              <ArrowRight, classNam, e="w-5 h-5, grou, p-hover:translate-x-1, transitio, n-transform" />
            </Link>
            <Linkto="/contact"
              className="inline-flex, item, s-center, ga, p-2px-8py-4bg-white/10, backdro, p-blur-sm, tex, t-white, fon, t-bold, rounde, d-xl, hove, r:bg-white/20, transitio, n-all, duratio, n-300, border, border-white/20"
            >
              <span>Schedule, Expert, Consultation</span>
            </Link>
          </div>
        </div>
        {/* Trust, Indicat, o, r, s */}
        <div, classNam, e = "mt-12, grid, grid-cols-2md: grid-cols-4, ga, p-6, tex, t-center">
          <div>
            <div, classNam, e="text-3xl, fon, t-bold, tex, t-whitemb-1">99.2%</div>
            <div, classNam, e="text-sm, tex, t-gray-400">Security, Detectio, n</div>
          </div>
          <div>
            <div, classNam, e="text-3xl, fon, t-bold, tex, t-whitemb-1">67%</div>
            <div, classNam, e="text-sm, tex, t-gray-400">Cost, Reductio, n</div>
          </div>
          <div>
            <div, classNam, e="text-3xl, fon, t-bold, tex, t-whitemb-1">99.94%</div>
            <div, classNam, e="text-sm, tex, t-gray-400">System, Uptim, e</div>
          </div>
          <div>
            <div, classNam, e="text-3xl, fon, t-bold, tex, t-whitemb-1">$127M+</div>
            <div, classNam, e="text-sm, tex, t-gray-400">Annual, Saving, s</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export, default, October2025AIOperationsBanner;
