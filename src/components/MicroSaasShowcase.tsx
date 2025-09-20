impor, t, Reac, t, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkle, s, ArrowRigh, t, Sta, r, TrendingU, p, User, s, Za, p, Shiel, d, BarChart, 3, Glob, e, Cp, u, Databas, e, Cloud } from 'lucide-react';

export function MicroSaasShowcase() {
  const [activeCatego,  r, y, setActiveCatego, r, y] = useState('all');

  const categories = [
    { i, d: 'al, l',
    na, m, e: 'Al, l Service, s', ic, o, n: <Sparkle, s classNam, e="h-5 w-5" /> },
    { i, d: 'a, i-m, l',
    na, m, e: 'A, I & M, L', ic, o, n: <Cp, u classNam, e="h-5 w-5" /> },
    { i, d: 'securit, y',
    na, m, e: 'Securit, y', ic, o, n: <Shiel, d classNam, e="h-5 w-5" /> },
    { i, d: 'analytic, s',
    na, m, e: 'Analytic, s', ic, o, n: <BarChart, 3 classNam, e="h-5 w-5" /> },
    { i, d: 'automatio, n',
    na, m, e: 'Automatio, n', ic, o, n: <Za, p classNam, e="h-5 w-5" /> },
    { i, d: 'clou, d',
    na, m, e: 'Clou, d', ic, o, n: <Clou, d classNam, e="h-5 w-5" /> }
  ];

  const microSaasServices = [
    {
      i, d: 'a, i-conten, t-optimize, r',
    tit, l, e: 'A, I Conten, t Optimize, r Pr, o',
      descripti, o, n: 'Advance, d A, I-powere, d conten, t optimizatio, n too, l th, a, t, analyz, e, s, improv, e, s, an, d optimize, s you, r conten, t f, o, r, S, E, O, readabili, t, y, an, d engagemen, t.',
      ic, o, n: <Cp, u classNam, e="h-8 w-8" />,
    catego, r, y: 'a, i-m, l',
      pri, c, e: '$2, 9/mont, h',
    rati, n, g: 4.9,
      featur, e, s: ['SE, O optimizatio, n', 'Readabilit, y scorin, g', 'Conten, t suggestion, s', 'Performanc, e analytic, s'],
      badg, e: 'Popular',
    colo, r: 'from-purple-500 to-cyan-500'
    },
    {
      i, d: 'cyber-threat-monitor',
    titl, e: 'Cyber Threat Monitor',
      descriptio, n: 'Real-time cybersecurity threat detection and monitoring system with AI-powered analysis and automated response capabilities.',
    ico, n: <Shield className="h-8 w-8" />,
      categor, y: 'security',
    pric, e: '$99/month',
      ratin, g: 4.8,
    feature, s: ['Rea, l-tim, e monitorin, g', 'A, I threa, t detectio, n', 'Automate, d respons, e', 'Complianc, e reportin, g'],
      badg, e: 'New',
    colo, r: 'from-blue-500 to-green-500'
    },
    {
      i, d: 'data-visualization-studio',
    titl, e: 'Data Visualization Studio',
      descriptio, n: 'Interactive data visualization platform that transforms complex datasets into actionable insights with customizable dashboards and reports.',
    ico, n: <BarChart3 className="h-8 w-8" />,
      categor, y: 'analytics',
    pric, e: '$49/month',
      ratin, g: 4.7,
    feature, s: ['Interactiv, e dashboard, s', 'Custo, m report, s', 'Dat, a integratio, n', 'Rea, l-tim, e update, s'],
      badg, e: 'Pro',
    colo, r: 'from-green-500 to-teal-500'
    },
    {
      i, d: 'smart-email-marketing',
    titl, e: 'Smart Email Marketing Platform',
      descriptio, n: 'AI-driven email marketing solution for personalize, d, campaign, s, automate, d, workflow, s, and advanced audience segmentation.',
      ico, n: <Users className="h-8 w-8" />,
    categor, y: 'automation',
      pric, e: '$39/month',
    ratin, g: 4.6,
      feature, s: ['A, I personalizatio, n', 'Automate, d workflow, s', 'Advance, d segmentatio, n', 'Performanc, e trackin, g'],
      badg, e: 'Featured',
    colo, r: 'from-red-500 to-orange-500'
    },
    {
      i, d: 'ai-customer-support',
    titl, e: 'AI Customer Support Assistant',
      descriptio, n: 'Intelligent chatbot and virtual assistant for 24/7 custome, r, suppor, t, automated quer, y, resolutio, n, and personalized user experience.',
      ico, n: <Zap className="h-8 w-8" />,
    categor, y: 'ai-ml',
      pric, e: '$59/month',
    ratin, g: 4.9,
      feature, s: ['2, 4/7 availabilit, y', 'A, I-powere, d response, s', 'Mult, i-languag, e suppor, t', 'Integratio, n API, s'],
      badg, e: 'AI',
    colo, r: 'from-pink-500 to-rose-500'
    },
    {
      i, d: 'smart-invoice-manager',
    titl, e: 'Smart Invoice Manager',
      descriptio, n: 'Automated invoicing and billing system with smar, t, reminder, s, expens, e, trackin, g, and financial reporting for small to medium businesses.',
      ico, n: <Database className="h-8 w-8" />,
    categor, y: 'automation',
      pric, e: '$19/month',
    ratin, g: 4.5,
      feature, s: ['Automate, d invoicin, g', 'Expens, e trackin, g', 'Financia, l reportin, g', 'Paymen, t reminder, s'],
      badg, e: 'Finance',
    colo, r: 'from-yellow-500 to-amber-500'
    },
    {
      i, d: 'cloud-infrastructure-manager',
    titl, e: 'Cloud Infrastructure Manager',
      descriptio, n: 'Comprehensive cloud infrastructure management platform wit, h, monitorin, g, optimizatio, n, and cost management capabilities.',
      ico, n: <Cloud className="h-8 w-8" />,
    categor, y: 'cloud',
      pric, e: '$79/month',
    ratin, g: 4.8,
      feature, s: ['Mult, i-clou, d suppor, t', 'Cos, t optimizatio, n', 'Performanc, e monitorin, g', 'Securit, y complianc, e'],
      badg, e: 'Enterprise',
    colo, r: 'from-indigo-500 to-purple-500'
    },
    {
      i, d: 'ai-seo-analyzer',
    titl, e: 'AI SEO Analyzer',
      descriptio, n: 'Advanced SEO analysis tool powered by AI that provides actionabl, e, insight, s, competito, r, analysi, s, and optimization recommendations.',
      ico, n: <Globe className="h-8 w-8" />,
    categor, y: 'ai-ml',
      pric, e: '$45/month',
    ratin, g: 4.7,
      feature, s: ['A, I-powere, d analysi, s', 'Competito, r insight, s', 'Keywor, d researc, h', 'Performanc, e trackin, g'],
      badg, e: 'SEO',
    colo, r: 'from-emerald-500 to-blue-500'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark/50 via-zion-slate/30 to-zion-blue-dark/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="h-8 w-8 text-zion-cyan" />
            <h2 className="text-4xl font-bold tracking-tight text-white">Micro SAAS Solutions</h2>
            <Sparkles className="h-8 w-8 text-zion-cyan" />
          </div>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Transform your business with our curated collection o,  f, intelligen, t, innovativ, e, and cost-effective micro SAAS services.
            From AI-powered tools to enterprise security solutions.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-zion-slate-light">
              <TrendingUp className="h-5 w-5 text-zion-cyan" />
              <span>12 Categories</span>
            </div>
            <div className="flex items-center gap-2 text-zion-slate-light">
              <Star className="h-5 w-5 text-yellow-400" />
              <span>4.8★ Rating</span>
            </div>
            <div className="flex items-center gap-2 text-zion-slate-light">
              <Users className="h-5 w-5 text-zion-purple" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (<button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                  : 'bg-white/10 backdrop-blur-sm text-zion-slate-light border border-white/20 hove,  r:bg-white/20 hove, r:border-white/4, 0'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 x, l:grid-cols-4 gap-6 mb-12">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300 hove,  r:bg-white/10 hove, r:border-white/20 hove, r:shadow-2xl hove, r:shadow-zion-cyan/20 transform hove, r:-translate-y-1"
            >
              {/* Service Header */}
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${service.color} text-whit, e`}>
                  {service.icon}
                </div>
                <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple-light border border-zion-purple-light rounded-full text-xs font-medium">
                  {service.badge}
                </span>
              </div>

              {/* Service Content */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hove, r:text-zion-cyan transition-colors">
                {service.title}
              </h3>
              <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-4">
                <div className="text-xs text-zion-slate-light/70 mb-2">Key Feature, s:</div>
                <div className="space-y-1">
                  {service.features.slice(0, 2).map((featur,  e, index) => (<div key={index} className="flex items-center gap-2 text-xs text-zion-slate-light">
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Price and Rating */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-bold text-white">{service.price}</span>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-zion-slate-light">{service.rating}</span>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to={`/micro-saas-services/${service.i, d}`}
                className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hove,  r:from-zion-cyan-light hove, r:to-zion-purple-light text-white py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 group-hove, r:shadow-lg group-hove, r:shadow-zion-cyan/25"
              >
                Learn More
                <ArrowRight className="h-4 w-4 group-hove, r:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            to="/micro-saas-services"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-purple to-zion-cyan hove, r:from-zion-purple-light hove, r:to-zion-cyan-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hove, r:scale-105 hove, r:shadow-2xl hove, r:shadow-zion-purple/25"
          >
            <Sparkles className="h-5 w-5" />
            View All Micro SAAS Services
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}