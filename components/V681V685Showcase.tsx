import React from 'react';

const V681V685Showcase: React.FC = () => {
  const engines = [
    {
      id: 'V681',
      name: 'Email Sentiment Trend Analyzer',
      icon: '📈',
      description: 'Track sentiment trends over time, predict communication issues, and improve team morale with advanced analytics.',
      features: [
        'Historical sentiment tracking',
        'Trend analysis & prediction',
        'Team morale monitoring',
        'Communication health scoring',
        'Sentiment-based alerts'
      ],
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'V682',
      name: 'Email Workflow Automation Engine',
      icon: '⚙️',
      description: 'Detect actionable workflows from emails and auto-generate workflow diagrams with execution tracking.',
      features: [
        'Workflow detection from emails',
        'Auto-generated diagrams (Mermaid/ASCII)',
        'Execution tracking',
        'Bottleneck identification',
        'Workflow optimization suggestions'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'V683',
      name: 'Email Context Memory System',
      icon: '🧠',
      description: 'Extract and store key context from emails with relationship graphs and intelligent recall for follow-ups.',
      features: [
        'Context extraction (people, projects, deadlines)',
        'Relationship graph building',
        'Context switch detection',
        'Context recall for follow-ups',
        'Missing context identification'
      ],
      color: 'from-purple-500 to-violet-500'
    },
    {
      id: 'V684',
      name: 'Email Priority Decay Tracker',
      icon: '⏳',
      description: 'Track how email priority changes over time with urgency decay detection and forgotten item identification.',
      features: [
        'Priority change tracking',
        'Urgency decay detection',
        'Forgotten item identification',
        'Priority half-life calculation',
        'Reassessment suggestions'
      ],
      color: 'from-amber-500 to-orange-500'
    },
    {
      id: 'V685',
      name: 'Email Thread Summarizer Pro',
      icon: '📝',
      description: 'Generate comprehensive summaries of email threads with key points, action items, and decision logging.',
      features: [
        'Thread summarization',
        'Key points extraction',
        'Action item tracking',
        'Decision logging',
        'Timeline reconstruction',
        'Participant role analysis'
      ],
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            V681-V685: Advanced Analytics & Automation
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Five powerful engines that transform email communications into actionable insights,
            automated workflows, and comprehensive knowledge management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {engines.map((engine) => (
            <div
              key={engine.id}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`text-5xl bg-gradient-to-br ${engine.color} p-4 rounded-xl`}>
                  {engine.icon}
                </div>
                <div>
                  <div className="text-sm text-slate-400 font-mono">{engine.id}</div>
                  <h3 className="text-xl font-bold text-white">{engine.name}</h3>
                </div>
              </div>

              <p className="text-slate-300 mb-6">{engine.description}</p>

              <ul className="space-y-2">
                {engine.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                    <span className={`text-lg bg-gradient-to-br ${engine.color} bg-clip-text text-transparent`}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Why Choose V681-V685?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">📊</div>
              <h4 className="text-xl font-bold text-white mb-2">Data-Driven Insights</h4>
              <p className="text-slate-300 text-sm">
                Transform email data into actionable intelligence with advanced analytics
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h4 className="text-xl font-bold text-white mb-2">Automated Workflows</h4>
              <p className="text-slate-300 text-sm">
                Detect and automate workflows to save time and reduce errors
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h4 className="text-xl font-bold text-white mb-2">Smart Prioritization</h4>
              <p className="text-slate-300 text-sm">
                Track priority changes and never miss critical deadlines
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💡</div>
              <h4 className="text-xl font-bold text-white mb-2">Knowledge Management</h4>
              <p className="text-slate-300 text-sm">
                Build comprehensive knowledge bases from email conversations
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 p-0.5 rounded-full">
            <div className="bg-slate-900 px-8 py-4 rounded-full">
              <span className="text-white font-bold">
                🚀 3,098 Total Services Available
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default V681V685Showcase;
