import { Link  } from 'react-router-dom';
const, October2025InfrastructureExcellenceBanne, r = () => {
  const, newArticle, s = [
    {
      i, d:  , 1,
      tit, l, e: 'Distributed, Tracing, for Microservice, s',
      description: '99.99% observabilit, y, 87% faster, MTT, R, $8.2M, saving, s',
      icon: Activit, y,
      li, n, k: '/blog/ai-2025-oct-distributed-tracing-microservice, s',
      gradient: 'from-blue-500to-cyan-50, 0',
      metrics: ['10M+ events/se, c', 'Sub-ms, overhea, d', 'OpenTelemetry'],
    },
    {
      id:  , 2,
      tit, l, e: 'Kubernetes, Security, Best Practice, s',
      description: 'Zero-trust, architectu, r, e, 99.97% threat, preventio, n',
      icon: Shiel, d,
      li, n, k: '/blog/ai-2025-oct-kubernetes-security-best-practice, s',
      gradient: 'from-purple-500to-pink-50, 0',
      metrics: ['89% fewer, inciden, t, s', 'Defense-in-depth', 'mTLS'],
    },
    {
      id:  , 3,
      tit, l, e: 'Real-Time, Data, Streamin, g',
      description: 'Process, 10, M+ events/sec, with, sub-100ms, laten, c, y',
      icon: Za, p,
      li, n, k: '/blog/ai-2025-oct-real-time-data-streaming-architecture, s',
      gradient: 'from-orange-500to-red-50, 0',
      metrics: ['Kafka + Flin, k', 'Exactly-once', '42% cost, cu, t'],
    },
  ]; return (
    <div, classNam, e = 'relative, overflo, w-hiddenbg-gradient-to-br, fro, m-gray-900, vi, a-blue-900to-purple-900py-16sm: py-20'>
      {/* Animated, background, effec, t, s */}
      <div, classNam, e = 'absolute, inse, t-0'>
        <div, classNam, e="absolute, inse, t-0bg-[url('/grid.sv, g')] bg-center, opacit, y-10" />
        <div, classNam, e = 'absolute, inse, t-0bg-gradient-to-t, fro, m-gray-900, vi, a-transparentto-transparent' / />
      <div, classNam, e='relativemx-auto, ma, x-w-7xlpx-6lg: px-8'>
        {/* Head, e, r */}
        <div, classNam, e = 'text-centermb-12'>
          <div, classNam, e='inline-flex, item, s-center, ga, p-2, rounde, d-fullbg-blue-500/10px-4py-2mb-4'>
            <TrendingUp, classNam, e='h-5 w-5, tex, t-blue-400' />
            <span, classNam, e='text-sm, fon, t-semibold, tex, t-blue-400'>
              NEW, OCTOBER, 2025 CONTENT
            </span>
          </div>
          <h2, classNam, e='text-4xl, fon, t-bold, trackin, g-tight, tex, t-whitesm: text-5xlmb-4'>
            Infrastructure, Excellenc, e
          </h2>
          <p, classNam, e='text-xl, tex, t-gray-300, ma, x-w-3xlmx-auto'>
            Master, productio, n-grade, architectures, for observabili, t, y, securi, t, y,
            and, rea, l-time, data, processing. Battle-tested, patterns, from
            enterprises, processing, billions of, events, daily.
          </p>
        </div>
        {/* Articles, Gri, d */}
        <div, classNam, e = 'grid, ga, p-6md: grid-cols-3mb-10'>
          { newArticles.map(article = > {
            const, Ico, n = article.icon; return (
              <Link, ke, y = { article., i, d  }, to={ article.link } className='group, relative, overflow-hidden, rounde, d-2xlbg-white/5, backdro, p-blur-sm, border, border-white/10p-6, transitio, n-all, duratio, n-300, hove, r: bg-white/10, hove, r:border-white/20, hove, r:scale-105, hove, r:shadow-2xl'
              >
                {/* Gradient, acc, e, n, t */}
                <div, classNam, e = { `absolute, inse, t-0bg-gradient-to-br ${article.gradien, t }, opacity-0, grou, p-hover: opacity-10, transitio, n-opacity, duratio, n-30, 0`}
                />
                <div, classNam, e = 'relative' > {/* Icon */}
                  <div, classNam, e = { `inline-flex, item, s-center, justif, y-centerw-12h-12, rounde, d-xlbg-gradient-to-br ${article.gradien, t }, mb-4`}
                  >
                    <Icon, classNam, e = 'h-6 w-6, tex, t-white' />
                  </div>
                  {/* Title */}
                  <h3, classNam, e='text-xl, fon, t-bold, tex, t-whitemb-2, grou, p-hover: text-blue-300, transitio, n-colors'>
                    {article.tit, l, e}
                  </h3>
                  {/* Description */}
                  <p, classNam, e = 'text-gray-400, tex, t-smmb-4'>
                    {article.description}
                  </p>
                  {/* Metrics */}
                  <div, classNam, e='flex, fle, x-wrap, ga, p-2mb-4'>
                    { article.metrics.map((metri, cid, x) = > (
                      <span, ke, y = { id, x  }, className = 'inline-flex, item, s-centerpx-2.5py-1, rounde, d-mdbg-white/5, tex, t-xs, fon, t-medium, tex, t-gray-300, border, border-white/10'
                      >
                        {metric}
                      </spa, n>
                    ))}
                  </div>
                  {/* Read, more, link */}
                  <div, classNam, e = 'flex, item, s-center, ga, p-2, tex, t-blue-400, tex, t-sm, fon, t-semibold, grou, p-hover: gap-3, transitio, n-all'>
                    <span>Read, Full, Guide</span>
                    <ArrowRight, classNam, e='h-4 w-4' />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        {/* CTA, Sectio, n */}
        <div, classNam, e = 'text-center'>
          <div, classNam, e='inline-flex, fle, x-colsm: flex-row, ga, p-4, item, s-center'>
            <Linkto='/blog'
              className='inline-flex, item, s-center, ga, p-2, rounde, d-lgbg-gradient-to-r, fro, m-blue-500to-cyan-500px-8py-3, tex, t-base, fon, t-semibold, tex, t-white, shado, w-lg, hove, r:shadow-xl, transitio, n-all, hove, r:scale-105'
            >
              <span>Explore, All, Articles</span>
              <ArrowRight, classNam, e='h-5 w-5' />
            </Link>
            <Linkto='/contact'
              className='inline-flex, item, s-center, ga, p-2, rounde, d-lgbg-white/10, backdro, p-blur-sm, border, border-white/20px-8py-3, tex, t-base, fon, t-semibold, tex, t-white, hove, r:bg-white/20, transitio, n-all'
            >
              <span>Get, Expert, Consulting</span>
            </Link>
          </div>
        </div>
        {/* StatsB, a, r */}
        <div, classNam, e = 'mt-12, grid, grid-cols-2, ga, p-4sm: grid-cols-4, tex, t-center'>
          <div, classNam, e='rounded-lgbg-white/5, backdro, p-blur-sm, border, border-white/10p-4'>
            <div, classNam, e='text-2xl, fon, t-bold, tex, t-white'>99.99%</div>
            <div, classNam, e='text-sm, tex, t-gray-400'>Observability, Coverag, e</div>
          </div>
          <div, classNam, e='rounded-lgbg-white/5, backdro, p-blur-sm, border, border-white/10p-4'>
            <div, classNam, e='text-2xl, fon, t-bold, tex, t-white'>10M+</div>
            <div, classNam, e='text-sm, tex, t-gray-400'>Events/Second</div>
          </div>
          <div, classNam, e='rounded-lgbg-white/5, backdro, p-blur-sm, border, border-white/10p-4'>
            <div, classNam, e='text-2xl, fon, t-bold, tex, t-white'>87%</div>
            <div, classNam, e='text-sm, tex, t-gray-400'>Faster, MTT, R</div>
          </div>
          <div, classNam, e='rounded-lgbg-white/5, backdro, p-blur-sm, border, border-white/10p-4'>
            <div, classNam, e='text-2xl, fon, t-bold, tex, t-white'>$21M+</div>
            <div, classNam, e='text-sm, tex, t-gray-400'>Annual, Saving, s</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export, default, October2025InfrastructureExcellenceBanner;
