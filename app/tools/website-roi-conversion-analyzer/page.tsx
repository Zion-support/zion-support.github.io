'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Activity, ArrowRight, ChevronLeft, Check, Mail, Phone, MapPin, ExternalLink, Zap, MessageSquare } from 'lucide-react';
import Link from 'next/link';

interface Config {
  traffic: string;
  conversionRate: string;
  aov: string;
  monthlySpend: string;
  hasChatbot: boolean;
  hasPersonalization: boolean;
  hasSmartSearch: boolean;
}

const defaults: Config = {
  traffic: '10000',
  conversionRate: '2.0',
  aov: '100',
  monthlySpend: '500',
  hasChatbot: false,
  hasPersonalization: false,
  hasSmartSearch: false,
};

export default function WebsiteROIAnalyzer() {
  const [config, setConfig] = useState<Config>(defaults);
  const [step, setStep] = useState<'input' | 'results'>('input');

  const update = (key: keyof Config, value: string | boolean) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const toggle = (key: keyof Config) => {
    setConfig(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const analysis = useMemo(() => {
    const traffic = parseInt(config.traffic) || 0;
    const conversion = parseFloat(config.conversionRate) || 0;
    const aov = parseInt(config.aov) || 0;
    const spend = parseInt(config.monthlySpend) || 0;

    const currentCustomers = traffic * (conversion / 100);
    const currentRevenue = currentCustomers * aov;

    // Zion Improvement Factors
    let factor = 1.0;
    const improvements: { name: string; impact: string; value: string }[] = [];
    
    if (!config.hasChatbot) {
      factor += 0.10;
      improvements.push({ name: 'AI Agent / Chatbot', impact: '+10-20% Conversion', value: '+$' + Math.round(currentRevenue * 0.15).toLocaleString() + '/mo' });
    }
    if (!config.hasPersonalization) {
      factor += 0.10;
      improvements.push({ name: 'Personalization Engine', impact: '+5-15% Revenue', value: '+$' + Math.round(currentRevenue * 0.10).toLocaleString() + '/mo' });
    }
    if (!config.hasSmartSearch) {
      factor += 0.10;
      improvements.push({ name: 'AI Search Optimization', impact: '+15-25% Search Conversion', value: '+$' + Math.round(currentRevenue * 0.12).toLocaleString() + '/mo' });
    }

    const projectedRevenue = currentRevenue * factor;
    const monthlyLift = projectedRevenue - currentRevenue;
    const annualLift = monthlyLift * 12;
    const roi = parseInt(config.monthlySpend) > 0 ? ((monthlyLift / parseInt(config.monthlySpend)) * 100) : 0;

    return {
      current: { revenue: currentRevenue, customers: currentCustomers },
      projected: { revenue: projectedRevenue },
      lift: monthlyLift,
      annualLift,
      roi,
      improvements,
    };
  }, [config]);

  const fmt = (n: number, prefix = '$', suffix = '') => prefix + n.toLocaleString(undefined, { maximumFractionDigits: 0 }) + suffix;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950/10 to-slate-900 py-8 px-4 md:py-16 md:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm mb-4">
            <TrendingUp className="w-4 h-4" />
            Revenue Optimization Tool
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">Website ROI & Conversion Analyzer</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            See exactly how much revenue you're leaving on the table &mdash; and how AI tools can unlock it.
          </p>
        </motion.div>

        {step === 'input' ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="space-y-6">
              {/* Traffic */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <label className="flex items-center gap-3 text-white font-semibold mb-3">
                  <Users className="w-5 h-5 text-blue-400" />
                  Monthly Visitors
                </label>
                <input type="number" value={config.traffic} onChange={e => update('traffic', e.target.value)}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white text-lg focus:border-blue-500 focus:outline-none"
                  min="0" />
              </div>

              {/* Conversion & AOV */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                  <label className="flex items-center gap-3 text-white font-semibold mb-3">
                    <Activity className="w-5 h-5 text-green-400" />
                    Conversion Rate (%)
                  </label>
                  <input type="number" value={config.conversionRate} onChange={e => update('conversionRate', e.target.value)}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white text-lg focus:border-green-500 focus:outline-none"
                    step="0.1" />
                </div>
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                  <label className="flex items-center gap-3 text-white font-semibold mb-3">
                    <DollarSign className="w-5 h-5 text-amber-400" />
                    Avg Order Value ($)
                  </label>
                  <input type="number" value={config.aov} onChange={e => update('aov', e.target.value)}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white text-lg focus:border-amber-500 focus:outline-none" />
                </div>
              </div>

              {/* Monthly Spend */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <label className="flex items-center gap-3 text-white font-semibold mb-3">
                  <DollarSign className="w-5 h-5 text-purple-400" />
                  Current Tech Spend ($/mo)
                </label>
                <p className="text-slate-400 text-sm mb-2">Marketing + Hosting + Tools</p>
                <input type="number" value={config.monthlySpend} onChange={e => update('monthlySpend', e.target.value)}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white text-lg focus:border-purple-500 focus:outline-none" />
              </div>

              {/* Current Tooling */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <label className="flex items-center gap-3 text-white font-semibold mb-3">
                  <Zap className="w-5 h-5 text-blue-400" />
                  Current AI Features
                </label>
                <div className="space-y-3">
                  {[
                    { key: 'hasChatbot', label: 'AI Chatbot / Agent on site', icon: '🤖' },
                    { key: 'hasPersonalization', label: 'Personalized recommendations', icon: '✨' },
                    { key: 'hasSmartSearch', label: 'AI-Powered Search & Discovery', icon: '🔍' },
                  ].map(f => (
                    <button key={f.key} onClick={() => toggle(f.key as keyof Config)}
                      className={`w-full text-left p-3 rounded-lg border flex items-center justify-between transition-all ${
                        config[f.key as keyof Config] === true ? 'border-blue-500 bg-blue-500/10 text-white' : 'border-slate-700 text-slate-400 hover:border-slate-600'
                      }`}>
                      <span className="flex items-center gap-2"><span>{f.icon}</span> {f.label}</span>
                      {config[f.key as keyof Config] === true ? <Check className="w-4 h-4 text-blue-400" /> : <span className="text-slate-600">Off</span>}
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <button onClick={() => setStep('results')}
                  className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-lg font-semibold transition-colors flex items-center gap-3 mx-auto">
                  <TrendingUp className="w-5 h-5" />
                  Calculate ROI
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <AnimatePresence>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              {/* Results */}
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 text-center">
                  <p className="text-slate-400 text-sm mb-1">Current Monthly Revenue</p>
                  <p className="text-2xl font-bold text-white">{fmt(analysis.current.revenue)}</p>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5 text-center">
                  <p className="text-blue-400 text-sm mb-1">Projected Monthly Revenue</p>
                  <p className="text-2xl font-bold text-blue-300">{fmt(analysis.projected.revenue)}</p>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5 text-center">
                  <p className="text-green-400 text-sm mb-1">Annual Revenue Lift</p>
                  <p className="text-2xl font-bold text-green-400">{fmt(analysis.annualLift)}</p>
                </div>
              </div>

              {/* Improvement Breakdown */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Unlocking Growth</h3>
                <div className="space-y-4">
                  {analysis.improvements.map((imp, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-white font-medium">{imp.name}</p>
                        <p className="text-slate-400 text-sm">{imp.impact} — {imp.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-3">Turn Your Site into a Revenue Engine</h3>
                <p className="text-slate-400 mb-6">Zion Tech Group builds intelligent websites that convert 20-40% better.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <Link href="/consultation" className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                    Start a Project <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/services" className="inline-flex items-center gap-2 px-8 py-3 border border-slate-600 hover:border-slate-500 text-white rounded-lg font-medium transition-colors">Browse Services</Link>
                </div>
                <div className="text-slate-400 text-sm space-y-1">
                  <p><Phone className="w-4 h-4 inline mr-1" /> +1 302 464 0950</p>
                  <p><Mail className="w-4 h-4 inline mr-1" /> <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:underline">kleber@ziontechgroup.com</a></p>
                  <p><MapPin className="w-4 h-4 inline mr-1" /> 364 E Main St STE 1008 Middletown DE 19709</p>
                </div>
              </div>

              <div className="text-center">
                <button onClick={() => setStep('input')} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 mx-auto">
                  <ChevronLeft className="w-4 h-4" /> Recalculate
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
        
        <div className="text-center mt-10 text-slate-500 text-xs">
          <p>Free analysis tool by Zion Tech Group — estimates based on industry averages for AI-driven CRO improvements</p>
        </div>
      </div>
    </div>
  );
}
