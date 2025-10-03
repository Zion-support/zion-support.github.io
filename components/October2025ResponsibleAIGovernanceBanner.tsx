import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Scale, CheckCircle, ArrowRight, Award } from 'lucide-react';
const October2025ResponsibleAIGovernanceBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 py-24 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full backdrop-blur-sm">
            <Shield className="w-5 h-5 text-cyan-300" />
            <span className="text-cyan-200 font-semibold uppercase tracking-wider text-sm">
              🛡️ JUST PUBLISHED: October 2025 - Responsible AI Governance Framework
            </span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent leading-tight">
            Responsible AI Governance:<br />Build Trust at Scale
          </h2>
          <p className="text-2xl md:text-3xl text-cyan-200 font-light max-w-4xl mx-auto leading-relaxed">
            Ensure Ethics, Compliance & Innovation—Without Slowing Down
          </p>
        </motion.div>

        {/* Critical Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-red-900/30 to-orange-900/30 backdrop-blur-md border border-red-400/30 rounded-2xl p-8 mb-12"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">⚠️ The Stakes Have Never Been Higher</h3>
            <p className="text-red-200">AI governance is now a business imperative, not optional</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { value: '$47M', label: 'Average Compliance Fine', icon: '💰' },
              { value: '67%', label: 'Consumers Concerned About AI Ethics', icon: '😰' },
              { value: '42%', label: 'Would Switch Providers Over AI Concerns', icon: '🚪' },
              { value: '$284M', label: 'Average Reputational Damage', icon: '📉' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-red-300 mb-1">{stat.value}</div>
                <div className="text-sm text-red-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { value: 'ZERO', label: 'Regulatory Violations Guaranteed', icon: Shield, color: 'from-green-400 to-emerald-400' },
            { value: '$284M', label: 'Risk Avoided', icon: Lock, color: 'from-blue-400 to-cyan-400' },
            { value: '40%', label: 'Customer Trust Increase', icon: Award, color: 'from-purple-400 to-pink-400' },
            { value: '85%', label: 'Governance Automation', icon: Eye, color: 'from-yellow-400 to-orange-400' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center"
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
              <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-cyan-200 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Content Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          {/* Framework Guide Card */}
          <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-md border border-cyan-400/30 rounded-3xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  📋 Comprehensive Governance Framework
                </h3>
                <p className="text-cyan-200">
                  Fortune 100 Success: 8,400+ AI Models, Zero Violations
                </p>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              {[
                'Complete ethical foundation & principles',
                'Automated bias detection & mitigation',
                'Regulatory compliance across EU, US, UK, China',
                'Explainability & transparency frameworks',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="/content/blog/ai-2025-october-responsible-ai-governance-framework.md"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 group"
            >
              Read Framework Guide
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Consulting Services Card */}
          <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 backdrop-blur-md border border-purple-400/30 rounded-3xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  🏆 Governance Consulting Services
                </h3>
                <p className="text-purple-200">
                  94+ Implementations, Zero Client Violations Ever
                </p>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              {[
                'Zero regulatory violation guarantee',
                '$100M+ average risk mitigation per client',
                'Industry-specific compliance (Finance, Healthcare, HR)',
                'No impact on innovation velocity',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="/content/services/responsible-ai-governance-consulting.md"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 group"
            >
              Explore Consulting
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Industry Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Industry-Specific Governance Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { industry: 'Financial Services', focus: 'Fair Lending & Model Risk', icon: '🏦' },
              { industry: 'Healthcare', focus: 'HIPAA & FDA Compliance', icon: '🏥' },
              { industry: 'Human Resources', focus: 'Anti-Discrimination & Pay Equity', icon: '👥' },
              { industry: 'Retail', focus: 'Consumer Protection & Privacy', icon: '🛍️' },
            ].map((item, index) => (
              <div key={index} className="text-center p-4 bg-white/5 rounded-xl">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="font-bold text-white mb-2">{item.industry}</div>
                <div className="text-sm text-cyan-200">{item.focus}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <p className="text-xl text-white mb-4">
              <span className="font-bold">Protect Your Organization with Responsible AI Governance</span>
            </p>
            <p className="text-cyan-200 mb-6">
              Schedule a free risk assessment to identify your governance gaps
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:governance@ziontechgroup.com"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Schedule Free Risk Assessment
              </a>
              <a
                href="tel:+18554487878"
                className="px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Call: +1 (855) AI-TRUST
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default October2025ResponsibleAIGovernanceBanner;
