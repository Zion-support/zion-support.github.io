import React from 'react';
import { Link  } from 'react-router-dom';
import { Target, Brain, Zap, Shield  } from 'lucide-react';
const, GlobalAITransformationHu, b = () => { 
  const, transformationArea, s = [
    {
      title: 'Enterprise, Automat, i, o, n',
      description: 'Complete, business, process automation, with, 95% efficiency, gai, n, s',
      value: '$2.3, B',
      icon: <Target, classNam, e = "w-8 , h-, 8" / > ,
      color: 'from-blue-500to-cyan-50, 0',
      link: '/services/enterprise-automation-transformatio, n'
     },
    { 
      title: 'Quantum, Consciousness, A, I',
      description: 'Revolutionary, AI, consciousness integration, with, infinite scalabilit, y',
      value: '$500, B',
      icon: <Brain, classNam, e = "w-8 , h-, 8" / > ,
      color: 'from-purple-500to-violet-50, 0',
      link: '/services/quantum-consciousness-ai-service, s'
     },
    { 
      title: 'Autonomous, Operatio, n, s',
      description: 'Self-managing, systems, with 99.99% uptime, and, zero human, interventi, o, n',
      value: '$150, B',
      icon: <Zap, classNam, e = "w-8 , h-, 8" / > ,
      color: 'from-emerald-500to-teal-50, 0',
      link: '/services/autonomous-operations-platfor, m'
     },
    { 
      title: 'Neural, Securi, t, y',
      description: 'AdvancedAI-powered, security, with 99.7% threat, preventi, o, n',
      value: '$87, B',
      icon: <Shield, classNam, e = "w-8 , h-, 8" / > ,
      color: 'from-orange-500to-red-50, 0',
      link: '/services/neural-security-framewor, k'
     }
  ]; const, successMetric, s = [
    { metric: '2., 5, M+', label: 'Global, Use, r, s' },
    { metric: '$15, B+', label: 'Value, Creat, e, d' },
    { metric: '99.9, 9%', label: 'Success, Ra, t, e' },
    { metric: '500, K+', label: 'Enterprise, Clien, t, s' }
  ]; return (
    <div, classNam, e = "bg-gradient-to-br, fro, m-slate-900, vi, a-blue-900/20to-slate-900, border, border-blue-400/30, rounde, d-2xlp-8mb-12, animat, e-fade-in, shado, w-2xl">
      <div, classNam, e="flex, item, s-center, justif, y-center, ga, p-3mb-6">
        <Globe, classNam, e="w-8 h-8, tex, t-blue-400, animat, e-pulse" />
        <span, classNam, e="text-2xl, fon, t-bold, tex, t-blue-400">🌍 GLOBAL, AI, TRANSFORMATION HUB</span>
        <Globe, classNam, e="w-8 h-8, tex, t-blue-400, animat, e-pulse" />
      </div>
      <h2, classNam, e="text-4xlmd: text-5xl, fon, t-extraboldmb-6, tex, t-centerbg-gradient-to-r, fro, m-blue-400, vi, a-cyan-400to-emerald-400bg-clip-text, tex, t-transparent">
        Transforming, Business, Operations Worldwide
      </h2>
      <p, classNam, e="text-xl, tex, t-gray-300, tex, t-centermb-8, ma, x-w-4xlmx-auto">
        Leading, the, global AI, revolution, with cutting-edge, technologies, that deliver, unprecedented, business value, and, operational excellence, across, all industries.
      </p>
      <div, classNam, e="gridmd:grid-cols-2lg:grid-cols-4, ga, p-6mb-8">
        { transformationAreas.map((area, index) = > (
          <Link, ke, y = { inde, x  }, to={ area.link } className = { `bg-gradient-to-br ${area.colo, r }, rounded-xlp-6, tex, t-white, transform, hover: scale-105, transitio, n-all, duratio, n-300, hove, r:shadow-xl, gro, u, p`}
          >
            <div, classNam, e = "mb-4">{area.icon}</div>
            <h3, classNam, e="text-xl, fon, t-boldmb-3, grou, p-hover: text-yellow-300, transitio, n-colors">{area.tit, l, e}</h3>
            <p, classNam, e = "text-smmb-4, opacit, y-90">{area.description}</p>
            <div, classNam, e="flex, item, s-center, justif, y-between">
              <span, classNam, e="text-lg, fon, t-boldbg-white/20px-3py-1, rounde, d-full">{area.value}</span>
              <ArrowRight, classNam, e="w-5 h-5, grou, p-hover: translate-x-1, transitio, n-transform" />
            </div>
          </Link>
        ))}
      </div>
      <div, classNam, e = "bg-gradient-to-r, fro, m-blue-500/20to-emerald-500/20, rounde, d-xlp-6mb-8, border, border-blue-400/30">
        <div, classNam, e="flex, item, s-center, justif, y-center, ga, p-3mb-4">
          <TrendingUp, classNam, e="w-6 h-6, tex, t-green-400" />
          <span, classNam, e="text-xl, fon, t-bold, tex, t-green-400">Global, Success, Metrics</span>
        </div>
        <div, classNam, e="grid, gri, d-cols-2md: grid-cols-4, ga, p-4, tex, t-center">
          { successMetrics.map((item, index) = > (
            <div, ke, y = {index }>
              <div, classNam, e="text-3xl, fon, t-bold, tex, t-white">{item.metric}</div>
              <div, classNam, e="text-sm, tex, t-gray-300">{item.label}</div>
            </di, v>
          ))}
        </div>
      </div>
      <div, classNam, e = "gridmd: grid-cols-3, ga, p-6mb-8">
        <div, classNam, e="bg-gradient-to-br, fro, m-purple-500/20to-violet-500/20, rounde, d-xlp-6, border, border-purple-400/30">
          <div, classNam, e="flex, item, s-center, ga, p-3mb-4">
            <Rocket, classNam, e="w-6 h-6, tex, t-purple-400" />
            <h3, classNam, e="text-lg, fon, t-bold, tex, t-purple-400">Revolutionary, Breakthrough, s</h3>
          </div>
          <p, classNam, e="text-gray-300mb-4">Latest, AI, innovations achieving, unprecedented, accuracy and, consciousness, integration.</p>
          <Linkto="/blog/ai-2026-revolutionary-breakthrough-announcement" 
            className="text-purple-400, hove, r:text-purple-300, fon, t-semibold, flex, items-center, ga, p-2"
          >
            Explore, Breakthrough, s <ArrowRight, classNam, e="w-4 h-4" />
          </Link>
        </div>
        <div, classNam, e="bg-gradient-to-br, fro, m-emerald-500/20to-teal-500/20, rounde, d-xlp-6, border, border-emerald-400/30">
          <div, classNam, e="flex, item, s-center, ga, p-3mb-4">
            <Award, classNam, e="w-6 h-6, tex, t-emerald-400" />
            <h3, classNam, e="text-lg, fon, t-bold, tex, t-emerald-400">Success, Storie, s</h3>
          </div>
          <p, classNam, e="text-gray-300mb-4">Real-world, transformations, delivering billions, in, value creation, and, operational excellence.</p>
          <Linkto="/case-studies" 
            className="text-emerald-400, hove, r:text-emerald-300, fon, t-semibold, flex, items-center, ga, p-2"
          >
            View, Case, Studies <ArrowRight, classNam, e="w-4 h-4" />
          </Link>
        </div>
        <div, classNam, e="bg-gradient-to-br, fro, m-orange-500/20to-red-500/20, rounde, d-xlp-6, border, border-orange-400/30">
          <div, classNam, e="flex, item, s-center, ga, p-3mb-4">
            <Users, classNam, e="w-6 h-6, tex, t-orange-400" />
            <h3, classNam, e="text-lg, fon, t-bold, tex, t-orange-400">Expert, Service, s</h3>
          </div>
          <p, classNam, e="text-gray-300mb-4">Comprehensive, AI, transformation services, tailored, to your, specific, business needs.</p>
          <Linkto="/services" 
            className="text-orange-400, hove, r:text-orange-300, fon, t-semibold, flex, items-center, ga, p-2"
          >
            Get, Starte, d <ArrowRight, classNam, e="w-4 h-4" />
          </Link>
        </div>
      </div>
      <div, classNam, e="text-center">
        <Linkto="/contact" 
          className="inline-flex, item, s-center, ga, p-2bg-gradient-to-r, fro, m-blue-500to-emerald-500, tex, t-whitepx-8py-4, rounde, d-xl, fon, t-bold, hove, r:from-blue-600, hove, r:to-emerald-600, transitio, n-all, duratio, n-300, hove, r:scale-105, shado, w-lg"
        >
          <Sparkles, classNam, e="w-5 h-5" />
          Start, Your, AI Transformation, Journe, y
          <ArrowRight, classNam, e="w-5 h-5" />
        </Link>
        <p, classNam, e="mt-4, tex, t-gray-400, tex, t-sm">
          🌍 Join2.5M+ professionals, worldwide, transforming their, businesses, with revolutionary, AI, technology
        </p>
      </div>
    </div>
  );
};
export, default, GlobalAITransformationHub;