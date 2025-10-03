import { motion } from 'framer-motion';
import { Database, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const October2025DataGovernanceShowcase = () => {
  const contentItems = [
    {
      type: 'Blog Post',
      icon: Brain,
      title: 'Autonomous Data Governance Revolution',
      description: 'Enterprise-scale self-regulating data platforms with AI-powered compliance, quality assurance, and security',
      link: '/blog/ai-2025-oct-autonomous-data-governance-revolution',
      metrics: ['847% ROI', '97% Violation Reduction', '87% FTE Savings'],
      color: 'emerald',
    },
    {
      type: 'Case Study',
      icon: TrendingUp,
      title: 'Global Healthcare Network: $247M Success',
      description: '847 hospitals, 27 countries, 2.4 exabytes - how autonomous governance transformed a global healthcare network',
      link: '/case-studies/ai-2025-oct-global-healthcare-autonomous-governance-247m-success',
      metrics: ['$247M Value', '1,235% ROI', '97% Compliance'],
      color: 'cyan',
    },
    {
      type: 'Services',
      icon: Shield,
      title: 'Autonomous Governance Transformation',
      description: 'End-to-end implementation services for autonomous data governance platforms with guaranteed ROI',
      link: '/services/autonomous-data-governance',
      metrics: ['6-12 Months', '$2M-$5M', '847% Avg ROI'],
      color: 'teal',
    },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-emerald-400 animate-pulse" />
            <span className="text-emerald-300 font-bold text-sm">NEW CONTENT - OCTOBER 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Autonomous Data Governance
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover how AI-powered autonomous governance platforms are transforming enterprise data management
          </p>
        </motion.div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contentItems.map((item, index) => {
            const Icon = item.icon;
            const colorClassesMap = {
              emerald: {
                bg: 'from-emerald-900/50 to-emerald-800/30',
                border: 'border-emerald-500/30',
                icon: 'text-emerald-400',
                badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50',
                button: 'from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700',
              },
              cyan: {
                bg: 'from-cyan-900/50 to-cyan-800/30',
                border: 'border-cyan-500/30',
                icon: 'text-cyan-400',
                badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50',
                button: 'from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700',
              },
              teal: {
                bg: 'from-teal-900/50 to-teal-800/30',
                border: 'border-teal-500/30',
                icon: 'text-teal-400',
                badge: 'bg-teal-500/20 text-teal-300 border-teal-500/50',
                button: 'from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700',
              },
            };
            const colorClasses = colorClassesMap[item.color as keyof typeof colorClassesMap];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                className={`bg-gradient-to-br ${colorClasses.bg} backdrop-blur-lg rounded-2xl p-8 border ${colorClasses.border} hover:scale-105 transition-all duration-300 shadow-xl`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 bg-white/10 rounded-xl ${colorClasses.icon}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${colorClasses.badge}`}>
                    {item.type}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">{item.description}</p>

                <div className="space-y-2 mb-6">
                  {item.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className={`w-4 h-4 ${colorClasses.icon}`} />
                      <span className="text-white text-sm font-medium">{metric}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={item.link}
                  className={`group inline-flex items-center gap-2 bg-gradient-to-r ${colorClasses.button} text-white px-6 py-3 rounded-xl font-bold text-sm w-full justify-center transition-all duration-300 shadow-lg`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Key Insights Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-lg rounded-2xl p-8 border border-slate-600/30"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-2">
            <Database className="w-6 h-6 text-emerald-400" />
            Why Autonomous Data Governance?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-emerald-400 mb-2">97%</p>
              <p className="text-slate-300 text-sm">Compliance Violation Reduction</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-cyan-400 mb-2">$127M</p>
              <p className="text-slate-300 text-sm">Average Annual Savings</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-teal-400 mb-2">847%</p>
              <p className="text-slate-300 text-sm">Average 3-Year ROI</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-green-400 mb-2">96%</p>
              <p className="text-slate-300 text-sm">Faster Time to Compliance</p>
            </div>
          </div>
        </motion.div>

        {/* Industries Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-400 text-sm mb-4">Trusted by leading organizations in:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Healthcare & Life Sciences', 'Financial Services', 'Retail & E-Commerce', 'Manufacturing & IoT', 'Technology & SaaS', 'Government'].map((industry) => (
              <span
                key={industry}
                className="bg-slate-800/50 backdrop-blur-sm text-slate-300 px-4 py-2 rounded-full text-sm border border-slate-600/30 hover:bg-slate-700/50 transition-all"
              >
                {industry}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default October2025DataGovernanceShowcase;
