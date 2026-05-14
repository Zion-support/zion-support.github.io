'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, ArrowRight, ChevronLeft, ChevronRight, Check, Mail, Phone, MapPin, ExternalLink, DollarSign, Clock, Users, Zap, TrendingUp, AlertTriangle, Star } from 'lucide-react';
import Link from 'next/link';

interface Config {
  teamSize: string;
  hourlyRate: string;
  processes: { id: string; label: string; hours: string; agentFit: string; complexity: string }[];
  selectedProcesses: string[];
  deploymentSpeed: 'fast' | 'standard' | 'phased';
}

const defaultProcesses = [
  { id: 'support', label: 'Customer Support Agent', hours: '40', agentFit: '24/7 ticket handling, FAQ resolution, escalation routing', complexity: 'Low' },
  { id: 'lead-gen', label: 'Lead Qualification Agent', hours: '25', agentFit: 'Scoring, outreach, scheduling, CRM updates', complexity: 'Medium' },
  { id: 'data-entry', label: 'Data Processing Agent', hours: '20', agentFit: 'OCR extraction, database updates, reconciliation', complexity: 'Low' },
  { id: 'content', label: 'Content Creation Agent', hours: '15', agentFit: 'Draft emails, reports, blog posts, social content', complexity: 'Medium' },
  { id: 'reporting', label: 'Reporting & Analytics Agent', hours: '12', agentFit: 'Auto-generate reports, anomaly detection, alerts', complexity: 'High' },
  { id: 'onboarding', label: 'Employee Onboarding Agent', hours: '10', agentFit: 'Document collection, training setup, checklist mgmt', complexity: 'Low' },
  { id: 'monitoring', label: 'Infrastructure Monitoring Agent', hours: '30', agentFit: 'Alert triage, auto-remediation, status updates', complexity: 'High' },
];

const agentCostPerMonth = 2500; // Typical AI agent deployment cost
const humanCostPerHour = 45; // Typical fully-loaded hourly cost

export default function AIAgentROICalculator() {
  const [step, setStep] = useState<'config' | 'results'>('config');
  const [config, setConfig] = useState<Config>({
    teamSize: '10',
    hourlyRate: '45',
    processes: defaultProcesses,
    selectedProcesses: [],
    deploymentSpeed: 'standard',
  });

  const toggle = (id: string) => {
    setConfig(prev => ({
      ...prev,
      selectedProcesses: prev.selectedProcesses.includes(id)
        ? prev.selectedProcesses.filter(p => p !== id)
        : [...prev.selectedProcesses, id],
    }));
  };

  const analysis = useMemo(() => {
    const selected = config.processes.filter(p => config.selectedProcesses.includes(p.id));
    const totalHumanHours = selected.reduce((sum, p) => sum + (parseInt(p.hours) || 0), 0);
    const automationFactor = { fast: 0.7, standard: 0.8, phased: 0.85 }[config.deploymentSpeed];
    const hoursSaved = Math.round(totalHumanHours * automationFactor);
    const weeklyHoursSaved = Math.round(hoursSaved / 4);
    const rate = parseInt(config.hourlyRate) || humanCostPerHour;
    const weeklySavings = weeklyHoursSaved * rate;
    const monthlySavings = weeklySavings * 4.33;
    const annualSavings = monthlySavings * 12;
    const agentCost = selected.length * agentCostPerMonth;
    const netAnnualSavings = (monthlySavings - agentCost) * 12;
    const roi = agentCost > 0 ? (((monthlySavings - agentCost) / (agentCost)) * 100) : 0;
    const paybackDays = monthlySavings > agentCost ? Math.round((agentCost / (monthlySavings - agentCost)) * 30) : 999;

    const headcountEquivalent = Math.round(hoursSaved / 160); // 160 hours = 1 FTE/month
    const deploymentWeeks = { fast: 2, standard: 4, phased: 8 }[config.deploymentSpeed];

    return {
      selected,
      totalHumanHours,
      hoursSaved,
      weeklyHoursSaved,
      weeklySavings,
      monthlySavings,
      annualSavings,
      agentCost,
      netAnnualSavings,
      roi,
      paybackDays,
      headcountEquivalent,
      deploymentWeeks,
    };
  }, [config]);

  const fmt = (n: number) => '$' + n.toLocaleString(undefined, { maximumFractionDigits: 0 });

  const anySelected = config.selectedProcesses.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950/10 to-slate-900 py-8 px-4 md:py-16 md:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-400 text-sm mb-4">
            <Bot className="w-4 h-4" />
            AI ROI Analysis
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">AI Agent ROI Calculator</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            See exactly how many hours and dollars AI agents can save your organization, with deployment timeline and payback period.
          </p>
        </motion.div>

        {step === 'config' ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="space-y-6 mb-8">
              {/* Team Size */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <label className="flex items-center gap-3 text-white font-semibold mb-3">
                  <Users className="w-5 h-5 text-indigo-400" />
                  Team Size &amp; Avg Hourly Cost
                </label>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <span className="text-slate-400 text-sm">Team size</span>
                    <input type="number" value={config.teamSize} onChange={e => setConfig(p => ({ ...p, teamSize: e.target.value }))}
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white text-lg focus:border-indigo-500 focus:outline-none" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-sm">Fully-loaded hourly cost ($)</span>
                    <input type="number" value={config.hourlyRate} onChange={e => setConfig(p => ({ ...p, hourlyRate: e.target.value }))}
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white text-lg focus:border-indigo-500 focus:outline-none" />
                  </div>
                </div>
              </div>

              {/* Agent Types */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <label className="flex items-center gap-3 text-white font-semibold mb-3">
                  <Bot className="w-5 h-5 text-indigo-400" />
                  Select Agent Workflows to Automate
                </label>
                <p className="text-slate-400 text-sm mb-4">Each agent runs 24/7 for ~{agentCostPerMonth}/mo. Select all that apply.</p>
                <div className="space-y-3">
                  {config.processes.map(p => {
                    const isSelected = config.selectedProcesses.includes(p.id);
                    return (
                      <button key={p.id} onClick={() => toggle(p.id)}
                        className={`w-full text-left p-4 rounded-lg border transition-all ${
                          isSelected ? 'border-indigo-500 bg-indigo-500/10' : 'border-slate-700 hover:border-slate-600'
                        }`}>
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3 flex-1">
                            <div className={`mt-1 w-5 h-5 rounded border flex items-center justify-center shrink-0 ${isSelected ? 'border-indigo-500 bg-indigo-500' : 'border-slate-600'}`}>
                              {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                            </div>
                            <div>
                              <p className={isSelected ? 'text-white font-medium' : 'text-slate-300'}>{p.label}</p>
                              <p className="text-slate-500 text-sm">~{p.hours}h/week · {p.complexity} setup</p>
                              {isSelected && <p className="text-indigo-400 text-xs mt-1">🤖 {p.agentFit}</p>}
                            </div>
                          </div>
                          <div className="text-right shrink-0">
                            <p className="text-green-400 text-sm font-medium">{fmt((parseInt(p.hours) || 0) * parseInt(config.hourlyRate) * 4.33)}/mo</p>
                            <p className="text-slate-500 text-xs">current labor cost</p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Deployment Speed */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <label className="flex items-center gap-3 text-white font-semibold mb-3">
                  <Clock className="w-5 h-5 text-amber-400" />
                  Deployment Speed
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { key: 'fast', label: 'Fast (2 wks)', cost: 'Premium pricing' },
                    { key: 'standard', label: 'Standard (4 wks)', cost: 'Standard pricing' },
                    { key: 'phased', label: 'Phased (8 wks)', cost: 'Lowest risk' },
                  ].map(s => (
                    <button key={s.key} onClick={() => setConfig(p => ({ ...p, deploymentSpeed: s.key as Config['deploymentSpeed'] }))}
                      className={`p-4 rounded-lg border text-center transition-all ${
                        config.deploymentSpeed === s.key ? 'border-amber-500 bg-amber-500/10 text-white' : 'border-slate-700 text-slate-400 hover:border-slate-600'
                      }`}>
                      <p className="font-medium text-sm">{s.label}</p>
                      <p className="text-xs text-slate-500 mt-1">{s.cost}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating summary */}
            <div className={`sticky bottom-4 rounded-xl p-4 flex items-center justify-between transition-all ${
              anySelected ? 'bg-indigo-600/20 border border-indigo-500/30' : 'bg-slate-800/30 border border-slate-700/30'
            }`}>
              <div className="flex items-center gap-6">
                <div><p className="text-indigo-400 text-sm">{config.selectedProcesses.length} agents</p><p className="text-slate-500 text-xs">Selected</p></div>
                <div><p className="text-slate-400 text-sm">~{agentCostPerMonth * (config.selectedProcesses.length)} /mo</p><p className="text-slate-500 text-xs">Agent cost</p></div>
              </div>
              <button onClick={() => setStep('results')} disabled={!anySelected}
                className={`px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                  anySelected ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-slate-700 text-slate-500 cursor-not-allowed'
                }`}>
                <TrendingUp className="w-4 h-4" /> Calculate ROI
              </button>
            </div>
          </motion.div>
        ) : (
          <AnimatePresence>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center justify-between mb-8">
                <button onClick={() => setStep('config')} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                  <ChevronLeft className="w-4 h-4" /> Back
                </button>
                <button onClick={() => { setStep('config'); setConfig(p => ({ ...p, selectedProcesses: [] })); }} className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">Start Over</button>
              </div>

              {/* Hero */}
              <div className="bg-gradient-to-r from-indigo-500/10 to-emerald-500/10 border border-indigo-500/30 rounded-2xl p-8 text-center mb-8">
                <Bot className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-white mb-6">Your AI Agent ROI</h2>
                <div className="grid sm:grid-cols-4 gap-4">
                  <div>
                    <p className="text-3xl font-bold text-white">{analysis.weeklyHoursSaved}h</p><p className="text-slate-400 text-xs">Hours saved/week</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-green-400">{fmt(analysis.monthlySavings)}</p><p className="text-slate-400 text-xs">Labor savings/mo</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-emerald-400">{analysis.roi.toFixed(0)}%</p><p className="text-slate-400 text-xs">Monthly ROI</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-amber-400">{analysis.paybackDays}d</p><p className="text-slate-400 text-xs">Payback period</p>
                  </div>
                </div>
                <p className="text-amber-400 font-medium mt-4">{fmt(analysis.netAnnualSavings)} net annual savings after agent costs</p>
              </div>

              {/* Details Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
                  <h3 className="text-white font-semibold mb-3">Key Metrics</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-slate-400">Headcount equivalent saved</span><span className="text-white font-medium">{analysis.headcountEquivalent} FTE</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Deployment timeline</span><span className="text-white font-medium">{analysis.deploymentWeeks} weeks</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Agent configuration</span><span className="text-white font-medium">{config.selectedProcesses.length} agents</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Automation quality</span><span className="text-white font-medium">{config.deploymentSpeed === 'fast' ? '70%' : config.deploymentSpeed === 'standard' ? '80%' : '85%'}</span></div>
                  </div>
                </div>
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
                  <h3 className="text-white font-semibold mb-3">Monthly Breakdown</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-slate-400">Labor cost eliminated</span><span className="text-green-400 font-medium">-{fmt(analysis.monthlySavings)}</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Agent costs</span><span className="text-red-400 font-medium">{fmt(analysis.agentCost)}</span></div>
                    <div className="flex justify-between border-t border-slate-700 pt-2"><span className="text-white font-semibold">Net savings</span><span className={analysis.netAnnualSavings > 0 ? 'text-green-400' : 'text-red-400'}>{fmt(analysis.monthlySavings - analysis.agentCost)}</span></div>
                  </div>
                </div>
              </div>

              {/* Agent Details */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 mb-8">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2"><Zap className="w-5 h-5 text-amber-400" /> Agent Savings Breakdown</h3>
                <div className="space-y-3">
                  {analysis.selected.map(p => {
                    const humanCost = (parseInt(p.hours) || 0) * parseInt(config.hourlyRate) * 4.33;
                    const saved = Math.round(humanCost * 0.8);
                    return (
                      <div key={p.id} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                        <div>
                          <p className="text-white text-sm font-medium">{p.label}</p>
                          <p className="text-slate-400 text-xs">{p.hours}h/week → {Math.round(parseInt(p.hours) * 0.8)}h saved/week</p>
                        </div>
                        <p className="text-green-400 font-medium">{fmt(saved)}/mo</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Recommendations */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 mb-8">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2"><Star className="w-5 h-5 text-yellow-400" /> Zion&apos;s Agent Deployment Services</h3>
                <ul className="space-y-3">
                  {analysis.selected.length > 0 && (
                    <>
                      <li className="flex items-start gap-3"><ChevronRight className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" /><div><p className="text-white font-medium">Custom Agent Design &amp; Deployment</p><p className="text-slate-400 text-sm">Our team designs, trains, and deploys agents tailored to your workflows in {analysis.deploymentWeeks} weeks.</p>
                      <Link href="/ai-services/ai-agentic-workflows" className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1 mt-1">View: AI Agentic Workflows <ExternalLink className="w-3 h-3" /></Link></div></li>
                    </>
                  )}
                  <li className="flex items-start gap-3"><ChevronRight className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" /><div><p className="text-white font-medium">Agent Monitoring &amp; Optimization</p><p className="text-slate-400 text-sm">Continuous performance monitoring, prompt optimization, and iterative improvement.</p>
                  <Link href="/ai-lab/autonomous-api-monitoring" className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1 mt-1">View: AI Monitoring <ExternalLink className="w-3 h-3" /></Link></div></li>
                  <li className="flex items-start gap-3"><AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" /><div><p className="text-white font-medium">Security &amp; Compliance Review</p><p className="text-slate-400 text-sm">Ensure your agents handle data securely and meet regulatory requirements.</p>
                  <Link href="/ai-services/ai-compliance" className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1 mt-1">View: AI Compliance &amp; Governance <ExternalLink className="w-3 h-3" /></Link></div></li>
                </ul>
              </div>

              {/* Contact */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-3">Let us build your AI workforce</h3>
                <p className="text-slate-400 mb-6">Zion Tech Group deploys proven AI agents with guaranteed ROI.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <Link href="/consultation" className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors">Get Custom Agent Proposal <ArrowRight className="w-4 h-4" /></Link>
                  <Link href="/services" className="inline-flex items-center gap-2 px-8 py-3 border border-slate-600 hover:border-slate-500 text-white rounded-lg font-medium transition-colors">Browse AI Services</Link>
                </div>
                <div className="text-slate-400 text-sm space-y-1">
                  <p><Phone className="w-4 h-4 inline mr-1" /> +1 302 464 0950</p>
                  <p><Mail className="w-4 h-4 inline mr-1" /> <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:underline">kleber@ziontechgroup.com</a></p>
                  <p><MapPin className="w-4 h-4 inline mr-1" /> 364 E Main St STE 1008 Middletown DE 19709</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        <div className="text-center mt-10 text-slate-500 text-xs">
          <p>Free analysis tool by Zion Tech Group — estimates based on typical AI agent efficiency gains of 70-85%</p>
        </div>
      </div>
    </div>
  );
}
