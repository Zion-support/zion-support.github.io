import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
const October2025NewContentMasterShowcase = () => {
  const contentPieces = [
    {
      icon: Rocket,
      title: 'Hyperscale Cognitive Orchestration',
      description: '127,000+ autonomous AI agents coordinating enterprise operations',
      value: '$42.7B',
      metric: 'Proven Value',
      link: '/blog/ai-2025-october-hyperscale-cognitive-orchestration-revolution',
      color: 'purple',
    },
    {
      icon: Sparkles,
      title: 'Conscious Enterprise Intelligence',
      description: 'Self-aware AI with human-like business intuition and strategic reasoning',
      value: '$27.3B',
      metric: 'Value Created',
      link: '/blog/ai-2025-october-conscious-enterprise-intelligence-breakthrough',
      color: 'pink',
    },
    {
      icon: TrendingUp,
      title: 'Fortune 50 Success Story',
      description: 'How 127,000 AI agents transformed global operations',
      value: '2,847%',
      metric: 'ROI Achieved',
      link: '/case-studies/ai-2025-october-fortune-50-hyperscale-orchestration-42-7-billion-success',
      color: 'blue',
    },
    {
      icon: Settings,
      title: 'Platform Services',
      description: 'Enterprise-grade hyperscale cognitive orchestration implementation',
      value: '90 Days',
      metric: 'Implementation',
      link: '/services/hyperscale-cognitive-orchestration-platform-2025',
      color: 'green',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: {
        bg: 'from-purple-500/20 to-purple-600/20',
        border: 'border-purple-400',
        text: 'text-purple-400',
        hover: 'hover:border-purple-300',
      },
      pink: {
        bg: 'from-pink-500/20 to-pink-600/20',
        border: 'border-pink-400',
        text: 'text-pink-400',
        hover: 'hover:border-pink-300',
      },
      blue: {
        bg: 'from-blue-500/20 to-blue-600/20',
        border: 'border-blue-400',
        text: 'text-blue-400',
        hover: 'hover:border-blue-300',
      },
      green: {
        bg: 'from-green-500/20 to-green-600/20',
        border: 'border-green-400',
        text: 'text-green-400',
        hover: 'hover:border-green-300',
      },
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 py-24">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-yellow-400 rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
            <span className="text-yellow-400 font-bold text-sm">
              🎉 OCTOBER 2025 NEW CONTENT SHOWCASE - JUST PUBLISHED 🎉
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Revolutionary AI Breakthroughs
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Explore our latest innovations in hyperscale AI orchestration, conscious enterprise intelligence, and transformative success stories
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {contentPieces.map((content, index) => {
            const Icon = content.icon;
            const colors = getColorClasses(content.color);

            return (
              <motion.a
                key={index}
                href={content.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative bg-gradient-to-br ${colors.bg} backdrop-blur-md rounded-2xl p-8 border-2 ${colors.border} ${colors.hover} transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-xl mb-4`}>
                  <Icon className={`w-8 h-8 ${colors.text}`} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3">{content.title}</h3>

                {/* Description */}
                <p className="text-slate-300 mb-6">{content.description}</p>

                {/* Value Metric */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className={`text-3xl font-bold ${colors.text}`}>{content.value}</div>
                    <div className="text-sm text-slate-400">{content.metric}</div>
                  </div>
                  <ArrowRight className={`w-6 h-6 ${colors.text} group-hover:translate-x-2 transition-transform`} />
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              </motion.a>
            );
          })}
        </div>

        {/* Combined Value Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">
                $70B+
              </div>
              <div className="text-slate-300">Total Value Created</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-2">
                154,000+
              </div>
              <div className="text-slate-300">AI Agents Deployed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text mb-2">
                2,500%+
              </div>
              <div className="text-slate-300">Average ROI</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-300 mb-4">
            Ready to transform your enterprise with cutting-edge AI?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
          >
            <span>Schedule Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default October2025NewContentMasterShowcase;
