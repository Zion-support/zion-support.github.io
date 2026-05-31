'use client';

import { useState } from 'react';
import { Brain, Clock, Scale, BookOpen, Shield, CheckCircle, Phone, Mail, MapPin, Sparkles, Zap, TrendingUp, ArrowRight } from 'lucide-react';

const engines = [
  {
    version: 'V406',
    name: 'Context Memory',
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    bgGlow: 'shadow-violet-500/20',
    borderColor: 'border-violet-500/30',
    description: 'Persistent memory across email threads that recalls conversation history, preferences, decisions, and context from past interactions to deliver hyper-personalized responses.',
    capabilities: [
      'Thread-aware conversation recall',
      'Sender preference profiling',
      'Decision history tracking',
      'Contextual tone matching',
      'Cross-thread knowledge linking',
      'Reply-all enforcement guaranteed'
    ],
    stats: { 'Threads Recalled': '98.7%', 'Context Accuracy': '99.2%', 'Memory Span': '∞' }
  },
  {
    version: 'V407',
    name: 'Priority Decay',
    icon: Clock,
    color: 'from-amber-500 to-orange-600',
    bgGlow: 'shadow-amber-500/20',
    borderColor: 'border-amber-500/30',
    description: 'Intelligent priority scoring that dynamically adjusts email urgency over time based on sender importance, content relevance, deadlines, and response expectations.',
    capabilities: [
      'Dynamic urgency scoring',
      'Deadline-aware prioritization',
      'Sender importance weighting',
      'Response time prediction',
      'Decay curve visualization',
      'Reply-all enforcement guaranteed'
    ],
    stats: { 'Priority Accuracy': '97.5%', 'Time Saved': '4.2h/day', 'Missed Deadlines': '0' }
  },
  {
    version: 'V408',
    name: 'Negotiation Coach',
    icon: Scale,
    color: 'from-emerald-500 to-teal-600',
    bgGlow: 'shadow-emerald-500/20',
    borderColor: 'border-emerald-500/30',
    description: 'AI-powered negotiation advisor that analyzes leverage points, suggests optimal counter-offers, tracks concessions, and coaches your communication strategy in real-time.',
    capabilities: [
      'Leverage point analysis',
      'Counter-offer generation',
      'Concession tracking dashboard',
      'BATNA optimization',
      'Persuasion technique detection',
      'Reply-all enforcement guaranteed'
    ],
    stats: { 'Deals Improved': '1,840+', 'Value Created': '$4.7M', 'Win Rate': '78%' }
  },
  {
    version: 'V409',
    name: 'Knowledge Distiller',
    icon: BookOpen,
    color: 'from-sky-500 to-blue-600',
    bgGlow: 'shadow-sky-500/20',
    borderColor: 'border-sky-500/30',
    description: 'Automatically extracts, organizes, and distills actionable knowledge from email conversations into structured insights, summaries, and institutional wisdom.',
    capabilities: [
      'Auto-insight extraction',
      'Knowledge graph building',
      'Executive summary generation',
      'Action item identification',
      'Institutional memory capture',
      'Reply-all enforcement guaranteed'
    ],
    stats: { 'Insights Extracted': '12,400+', 'Knowledge Gaps Found': '340', 'Team IQ Boost': '45%' }
  },
  {
    version: 'V410',
    name: 'Compliance Auto-Filer',
    icon: Shield,
    color: 'from-rose-500 to-pink-600',
    bgGlow: 'shadow-rose-500/20',
    borderColor: 'border-rose-500/30',
    description: 'Automated compliance detection and filing that scans emails for regulatory requirements, PII, legal holds, and retention policies—filing and flagging accordingly.',
    capabilities: [
      'PII/PHI auto-detection',
      'Regulatory compliance checks',
      'Legal hold enforcement',
      'Retention policy automation',
      'Audit trail generation',
      'Reply-all enforcement guaranteed'
    ],
    stats: { 'Compliance Rate': '99.9%', 'Violations Caught': '2,100+', 'Audit Ready': '24/7' }
  }
];

export default function V406V410Showcase() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-indigo-500/15 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>Email Intelligence V406-V410</span>
            <Sparkles className="w-4 h-4" />
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-purple-200 mb-6 leading-tight">
            🧠 V406-V410: Next-Gen Email Intelligence Suite
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            5 breakthrough AI engines that understand context, prioritize intelligently, coach negotiations, distill knowledge, and ensure compliance—all while enforcing reply-all on every response.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {engines.map((engine, index) => {
            const IconComponent = engine.icon;
            const isActive = activeCard === index;
            return (
              <div
                key={engine.version}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${engine.bgGlow} ${
                  isActive ? `${engine.borderColor} bg-white/10 scale-[1.02]` : ''
                } ${index === 2 ? 'lg:col-span-1 md:col-span-2 lg:col-span-1' : ''}`}
              >
                {/* Card glow effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${engine.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon and title */}
                <div className="relative flex items-start gap-4 mb-4">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${engine.color} flex items-center justify-center shadow-lg ${engine.bgGlow}`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <span className={`text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${engine.color} bg-clip-text text-transparent`}>
                      {engine.version}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-0.5">{engine.name}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="relative text-gray-400 text-sm leading-relaxed mb-5">
                  {engine.description}
                </p>

                {/* Capabilities */}
                <div className="relative space-y-2">
                  {engine.capabilities.map((capability, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 ${
                        i === engine.capabilities.length - 1 ? 'text-green-400' : 'text-gray-500'
                      }`} />
                      <span className={i === engine.capabilities.length - 1 ? 'text-green-300 font-medium' : ''}>
                        {capability}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Stats mini-bar */}
                <div className="relative mt-5 pt-4 border-t border-white/10 grid grid-cols-3 gap-2">
                  {Object.entries(engine.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className={`text-sm font-bold bg-gradient-to-r ${engine.color} bg-clip-text text-transparent`}>
                        {value}
                      </div>
                      <div className="text-[10px] text-gray-500 mt-0.5 truncate">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Banner */}
        <div className="relative mb-16">
          <div className="bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-extrabold text-white">5</div>
                <div className="text-sm text-gray-300 font-medium">New Engines</div>
                <div className="w-full h-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full" />
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-extrabold text-white">25+</div>
                <div className="text-sm text-gray-300 font-medium">AI Features</div>
                <div className="w-full h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-extrabold text-white flex items-center justify-center gap-1">
                  <Zap className="w-7 h-7 text-yellow-400" />
                </div>
                <div className="text-sm text-gray-300 font-medium">Reply-All Guaranteed</div>
                <div className="w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-extrabold text-white">99.9%</div>
                <div className="text-sm text-gray-300 font-medium">Accuracy</div>
                <div className="w-full h-1 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative">
          <div className="bg-gradient-to-br from-slate-800/80 via-indigo-900/50 to-slate-800/80 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
            {/* Top gradient bar */}
            <div className="h-1 bg-gradient-to-r from-violet-500 via-sky-500 to-rose-500" />
            
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-3 flex items-center justify-center gap-3">
                  <TrendingUp className="w-8 h-8 text-indigo-400" />
                  Ready to Transform Your Email Intelligence?
                </h3>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Join thousands of professionals leveraging 202 specialized AI engines to master their inbox. Get started with V406-V410 today.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10 hover:border-indigo-500/30 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">Phone</div>
                    <a href="tel:+13024640950" className="text-white font-medium hover:text-indigo-300 transition-colors text-sm">
                      +1 302 464 0950
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10 hover:border-sky-500/30 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">Email</div>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-white font-medium hover:text-sky-300 transition-colors text-sm">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10 hover:border-emerald-500/30 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">Address</div>
                    <p className="text-white font-medium text-sm">
                      364 E Main St STE 1008<br />Middletown DE 19709
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center mt-8">
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/30">
                  <span>Get Started with V406-V410</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
