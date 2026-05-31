'use client';

import { useState } from 'react';
import { Send, FileText, Link2, Timer, Heart, CheckCircle, Phone, Mail, MapPin, Sparkles, Zap, TrendingUp, ArrowRight } from 'lucide-react';

const engines = [
  {
    version: 'V411',
    name: 'Smart Follow-up Automator',
    icon: Send,
    color: 'from-violet-500 to-purple-600',
    bgGlow: 'shadow-violet-500/20',
    borderColor: 'border-violet-500/30',
    description: 'AI-powered follow-up engine that auto-generates contextually relevant follow-up messages, schedules optimal send times based on recipient behavior, and tracks the full conversation state to never let a thread go cold.',
    capabilities: [
      'Auto-generates contextual follow-ups',
      'Optimal send time scheduling',
      'Conversation state tracking',
      'Multi-touch cadence orchestration',
      'Reply-all enforcement guaranteed'
    ],
    stats: { 'Follow-ups Sent': '45,200+', 'Response Rate': '73%', 'Time Saved': '6.1h/day' }
  },
  {
    version: 'V412',
    name: 'Email Thread Summarizer Pro',
    icon: FileText,
    color: 'from-emerald-500 to-teal-600',
    bgGlow: 'shadow-emerald-500/20',
    borderColor: 'border-emerald-500/30',
    description: 'Condenses lengthy email threads into crisp executive summaries, extracting key decisions, action items, and outstanding questions so you can catch up in seconds instead of reading dozens of messages.',
    capabilities: [
      'Executive summary generation',
      'Decision point extraction',
      'Action item identification',
      'Outstanding question detection',
      'Reply-all enforcement guaranteed'
    ],
    stats: { 'Threads Summarized': '89,000+', 'Time Saved': '3.8h/day', 'Accuracy': '99.4%' }
  },
  {
    version: 'V413',
    name: 'Cross-Reference Analyzer',
    icon: Link2,
    color: 'from-sky-500 to-blue-600',
    bgGlow: 'shadow-sky-500/20',
    borderColor: 'border-sky-500/30',
    description: 'Deep cross-referencing engine that connects incoming emails against your CRM records, internal knowledge base, and past conversations to surface relevant context, commitments, and contradictions instantly.',
    capabilities: [
      'CRM record cross-referencing',
      'Knowledge base linking',
      'Past conversation matching',
      'Commitment conflict detection',
      'Reply-all enforcement guaranteed'
    ],
    stats: { 'References Found': '127,000+', 'CRM Matches': '94.6%', 'Conflicts Caught': '1,840' }
  },
  {
    version: 'V414',
    name: 'Response Time Optimizer',
    icon: Timer,
    color: 'from-amber-500 to-orange-600',
    bgGlow: 'shadow-amber-500/20',
    borderColor: 'border-amber-500/30',
    description: 'Analyzes your response patterns across contacts and teams, identifies bottlenecks in communication flows, tracks SLA compliance in real-time, and provides actionable recommendations to close response gaps.',
    capabilities: [
      'Response pattern analysis',
      'Bottleneck identification',
      'SLA compliance tracking',
      'Team performance dashboards',
      'Reply-all enforcement guaranteed'
    ],
    stats: { 'Avg Response Time': '-62%', 'SLA Compliance': '99.7%', 'Bottlenecks Fixed': '340+' }
  },
  {
    version: 'V415',
    name: 'Relationship Health Tracker',
    icon: Heart,
    color: 'from-rose-500 to-pink-600',
    bgGlow: 'shadow-rose-500/20',
    borderColor: 'border-rose-500/30',
    description: 'Monitors the health of every professional relationship in your inbox by tracking communication frequency, analyzing sentiment trends, detecting engagement drops, and alerting you to at-risk relationships before they go cold.',
    capabilities: [
      'Communication frequency monitoring',
      'Sentiment trend analysis',
      'At-risk relationship alerts',
      'Engagement score tracking',
      'Reply-all enforcement guaranteed'
    ],
    stats: { 'Relationships Tracked': '8,400+', 'At-Risk Alerts': '920', 'Sentiment Accuracy': '97.8%' }
  }
];

export default function V411V415Showcase() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-indigo-500/15 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>Email Intelligence V411-V415</span>
            <Sparkles className="w-4 h-4" />
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-purple-200 mb-6 leading-tight">
            🧠 V411-V415: Enterprise Email Intelligence
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            5 breakthrough AI engines that automate follow-ups, summarize threads, cross-reference data, optimize response times, and track relationship health—all while enforcing reply-all on every response.
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
                <div className="text-4xl font-extrabold text-white">30+</div>
                <div className="text-sm text-gray-300 font-medium">AI Features</div>
                <div className="w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-extrabold text-white flex items-center justify-center gap-1">
                  <Zap className="w-7 h-7 text-yellow-400" />
                </div>
                <div className="text-sm text-gray-300 font-medium">Reply-All Enforced</div>
                <div className="w-full h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
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
                  Join thousands of professionals leveraging 207 specialized AI engines to master their inbox. Get started with V411-V415 today.
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
                  <span>Get Started with V411-V415</span>
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
