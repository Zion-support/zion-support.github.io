import { Link } from 'react-router-dom';
import { Scale, Shield, CheckCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function October2025ComplianceAutomationBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-amber-950 via-orange-950 to-yellow-950 border-y-4 border-amber-500">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(245,158,11,0.3),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
      </div>

      {/* Floating Icons Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <Scale className="absolute top-20 left-10 w-12 h-12 text-amber-400/20 animate-float" />
        <Shield className="absolute top-40 right-20 w-16 h-16 text-orange-400/20 animate-float-delayed" />
        <CheckCircle className="absolute bottom-20 left-1/4 w-14 h-14 text-yellow-400/20 animate-float" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Breaking News Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-amber-500/20 border border-amber-400/50 rounded-full backdrop-blur-sm animate-pulse-subtle">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
            </span>
            <span className="text-sm font-bold text-amber-300 uppercase tracking-wider">
              ⚖️ Just Published: October 1, 2025 ⚖️
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-8">
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 mb-4 leading-tight">
            Autonomous Compliance AI
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            99.94% Regulatory Excellence
          </h3>
          <p className="text-xl text-amber-200 max-w-4xl mx-auto leading-relaxed">
            Deploy self-learning compliance achieving <span className="text-amber-300 font-bold">99.94% accuracy</span>, 
            {' '}<span className="text-amber-300 font-bold">87% cost reduction</span>, and 
            {' '}<span className="text-amber-300 font-bold">$2.7B savings</span>
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-6xl mx-auto">
          {[
            { label: 'Accuracy', value: '99.94%', color: 'amber' },
            { label: 'Cost Reduction', value: '87%', color: 'orange' },
            { label: 'Savings', value: '$2.7B', color: 'yellow' },
            { label: 'Jurisdictions', value: '147', color: 'amber' }
          ].map((metric, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:scale-105 transition-transform duration-300">
              <div className={`text-3xl font-black text-${metric.color}-400 mb-1`}>
                {metric.value}
              </div>
              <div className="text-sm text-gray-300 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-amber-900/40 to-orange-900/40 backdrop-blur-sm border border-amber-500/30 rounded-2xl p-6 hover:border-amber-400 transition-all duration-300">
            <Scale className="w-12 h-12 text-amber-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">
              Regulatory Intelligence
            </h4>
            <ul className="space-y-2">
              {[
                '147 jurisdictions monitored',
                'Real-time regulation tracking',
                'NLP-powered interpretation',
                '4-hour adaptation time'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-amber-200">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-900/40 to-yellow-900/40 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-6 hover:border-orange-400 transition-all duration-300">
            <Shield className="w-12 h-12 text-orange-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">
              Automated Controls
            </h4>
            <ul className="space-y-2">
              {[
                'Dynamic policy generation',
                'Continuous monitoring',
                'Automated testing',
                'Evidence collection'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-orange-200">
                  <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-yellow-900/40 to-amber-900/40 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-6 hover:border-yellow-400 transition-all duration-300">
            <CheckCircle className="w-12 h-12 text-yellow-400 mb-4" />
            <h4 className="text-xl font-bold text-white mb-3">
              Business Value
            </h4>
            <ul className="space-y-2">
              {[
                '100% audit success',
                'Zero violations',
                '647% average ROI',
                '95% workload reduction'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-yellow-200">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link 
            to="/blog/ai-2025-october-autonomous-compliance-automation-revolution"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white text-xl font-bold rounded-2xl shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transform hover:scale-105 transition-all duration-300"
          >
            <span>Explore Compliance Automation →</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
          <p className="text-amber-300 text-sm mt-4 font-semibold">
            Join 3,247 enterprises achieving perfect compliance with 87% cost reduction
          </p>
        </div>
      </div>
    </div>
  );
}
