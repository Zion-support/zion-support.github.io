'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Clock, CheckCircle, AlertTriangle, TrendingUp, ChevronLeft, ChevronRight, ArrowRight, Mail, Phone, MapPin, BarChart3, Zap, Server, ExternalLink, Star, Award } from 'lucide-react';
import Link from 'next/link';

interface Metrics {
  uptime: string;
  avgResponseTime: string;
  mttrHour: string;
  firstCallResolution: string;
  ticketVolume: string;
  hasMonitoring: boolean;
  hasRunbooks: boolean;
  hasOnCallRotation: boolean;
}

const defaults: Metrics = {
  uptime: '99.5',
  avgResponseTime: '500',
  mttrHour: '4',
  firstCallResolution: '60',
  ticketVolume: '100',
  hasMonitoring: false,
  hasRunbooks: false,
  hasOnCallRotation: false,
};

const benchmarks = {
  enterprise: { uptime: 99.99, responseTime: 200, mttr: 1, firstCall: 85 },
  standard: { uptime: 99.9, responseTime: 500, mttr: 4, firstCall: 70 },
  baseline: { uptime: 99.0, responseTime: 1000, mttr: 8, firstCall: 50 },
};

function scoreUptime(val: number): { score: number; level: string } {
  if (val >= 99.99) return { score: 95, level: 'Enterprise' };
  if (val >= 99.9) return { score: 80, level: 'Standard' };
  if (val >= 99.0) return { score: 50, level: 'Baseline' };
  return { score: 20, level: 'Below Standard' };
}

function colorFor(score: number) {
  if (score >= 80) return 'text-green-400';
  if (score >= 60) return 'text-blue-400';
  if (score >= 40) return 'text-yellow-400';
  return 'text-red-400';
}

function ringFor(score: number) {
  if (score >= 80) return 'stroke-green-500';
  if (score >= 60) return 'stroke-blue-500';
  if (score >= 40) return 'stroke-yellow-500';
  return 'stroke-red-500';
}

export default function ITSLAPerformanceScorecard() {
  const [metrics, setMetrics] = useState<Metrics>(defaults);
  const [step, setStep] = useState<'input' | 'results'>('input');

  const update = (key: keyof Metrics, value: string | boolean) => {
    setMetrics(prev => ({ ...prev, [key]: value }));
  };

  const toggle = (key: keyof Metrics) => {
    setMetrics(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const scores = useMemo(() => {
    const uptime = parseFloat(metrics.uptime) || 99.5;
    const responseTime = parseFloat(metrics.avgResponseTime) || 500;
    const mttr = parseFloat(metrics.mttrHour) || 4;
    const firstCall = parseFloat(metrics.firstCallResolution) || 60;
    const ticketVolume = parseInt(metrics.ticketVolume) || 100;

    const uptimeScore = scoreUptime(uptime).score;
    const respScore = responseTime <= 200 ? 95 : responseTime <= 500 ? 75 : responseTime <= 1000 ? 55 : 30;
    const mttrScore = mttr <= 1 ? 95 : mttr <= 2 ? 80 : mttr <= 4 ? 60 : mttr <= 8 ? 40 : 20;
    const fcrScore = firstCall >= 85 ? 90 : firstCall >= 70 ? 75 : firstCall >= 55 ? 60 : 40;

    let automationBonus = 0;
    if (metrics.hasMonitoring) automationBonus += 5;
    if (metrics.hasRunbooks) automationBonus += 3;
    if (metrics.hasOnCallRotation) automationBonus += 2;

    const overall = Math.min(98, Math.round((uptimeScore + respScore + mttrScore + fcrScore) / 4 + automationBonus));

    // Projected improvement with Zion managed services
    const projUptime = Math.min(99.99, uptime + (uptime < 99.9 ? 0.5 : 0.05));
    const projResponse = Math.max(150, Math.round(responseTime * 0.35));
    const projMTTR = Math.max(0.5, mttr * 0.3);
    const projFCR = Math.min(90, firstCall + 15);

    // Cost analysis
    const downtimeHours = (1 - uptime / 100) * 8760;
    const hourlyCost = ticketVolume * 25 || 2500;
    const downtimeCost = Math.round(downtimeHours * hourlyCost);
    const projDowntimeHours = (1 - projUptime / 100) * 8760;
    const projDowntimeCost = Math.round(projDowntimeHours * hourlyCost);

    return {
      uptime: { score: uptimeScore, level: scoreUptime(uptime).level, current: uptime, projected: projUptime },
      response: { score: respScore, currentMs: responseTime, projected: projResponse },
      mttr: { score: mttrScore, current: mttr, projected: projMTTR },
      fcr: { score: fcrScore, current: firstCall, projected: projFCR },
      overall,
      automation: { hasMonitoring: metrics.hasMonitoring, hasRunbooks: metrics.hasRunbooks, hasOnCallRotation: metrics.hasOnCallRotation },
      downtime: { hours: downtimeHours, cost: downtimeCost, projHours: projDowntimeHours, projCost: projDowntimeCost },
    };
  }, [metrics]);

  const fmt = (n: number) => '$' + n.toLocaleString(undefined, { maximumFractionDigits: 0 });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950/10 to-slate-900 py-8 px-4 md:py-16 md:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm mb-4">
            <Award className="w-4 h-4" />
            IT Performance Benchmark
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">IT SLA &amp; Performance Scorecard</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Benchmark your IT operations against industry standards and see how much Zion managed services can improve your metrics.
          </p>
        </motion.div>

        {step === 'input' ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="space-y-6">
              {/* Uptime */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <label className="flex items-center gap-3 text-white font-semibold mb-3">
                  <Shield className="w-5 h-5 text-blue-400" />
                  Current Uptime (%)
                </label>
                <input type="number" value={metrics.uptime} onChange={e => update('uptime', e.target.value)}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white text-lg focus:border-blue-500 focus:outline-none"
                  min="90" max="100" step="0.01" />
                <div className="flex justify-between mt-2 text-xs text-slate-500">
                  <span>99.0% Baseline</span><span>99.9% Standard</span><span>99.99% Enterprise</span>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <label className="flex items-center gap-3 text-white font-semibold mb-3">
                  <Clock className="w-5 h-5 text-amber-400" />
                  Avg Response Time (ms)
                </label>
                <input type="number" value={metrics.avgResponseTime} onChange={e => update('avgResponseTime', e.target.value)}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white text-lg focus:border-blue-500 focus:outline-none"
                  min="50" max="10000" />
                <p className="text-slate-500 text-sm mt-1">Target: &lt;200ms Enterprise | &lt;500ms Standard</p>
              </div>

              {/* MTTR */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <label className="flex items-center gap-3 text-white font-semibold mb-3">
                  <ChevronRight className="w-5 h-5 text-red-400" />
                  Mean Time to Recover (hours)
                </label>
                <input type="number" value={metrics.mttrHour} onChange={e => update('mttrHour', e.target.value)}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white text-lg focus:border-red-500 focus:outline-none"
                  min="0.5" max="72" />
                <p className="text-slate-500 text-sm mt-1">Enterprise target: &lt;1 hour</p>
              </div>

              {/* First Call Resolution */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <label className="flex items-center gap-3 text-white font-semibold mb-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  First Call Resolution Rate (%)
                </label>
                <input type="number" value={metrics.firstCallResolution} onChange={e => update('firstCallResolution', e.target.value)}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white text-lg focus:border-green-500 focus:outline-none"
                  min="0" max="100" />
              </div>

              {/* Ticket Volume */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <label className="flex items-center gap-3 text-white font-semibold mb-3">
                  <BarChart3 className="w-5 h-5 text-purple-400" />
                  Monthly Ticket Volume
                </label>
                <input type="number" value={metrics.ticketVolume} onChange={e => update('ticketVolume', e.target.value)}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white text-lg focus:border-purple-500 focus:outline-none"
                  min="0" />
              </div>

              {/* Automation */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <label className="flex items-center gap-3 text-white font-semibold mb-3">
                  <Zap className="w-5 h-5 text-amber-400" />
                  Current IT Automation
                </label>
                <div className="space-y-3">
                  {[
                    { key: 'hasMonitoring', label: '24/7 Automated Monitoring', icon: '📊' },
                    { key: 'hasRunbooks', label: 'Automated Runbooks / SOPs', icon: '📋' },
                    { key: 'hasOnCallRotation', label: 'Structured On-Call Rotation', icon: '🔄' },
                  ].map(f => (
                    <button key={f.key} onClick={() => toggle(f.key as keyof Metrics)}
                      className={`w-full text-left p-3 rounded-lg border flex items-center justify-between transition-all ${
                        metrics[f.key as keyof Metrics] === true ? 'border-amber-500 bg-amber-500/10 text-white' : 'border-slate-700 text-slate-400 hover:border-slate-600'
                      }`}>
                      <span className="flex items-center gap-2"><span>{f.icon}</span> {f.label}</span>
                      {metrics[f.key as keyof Metrics] === true ? <CheckCircle className="w-4 h-4 text-amber-400" /> : <span className="text-slate-600">Off</span>}
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <button onClick={() => setStep('results')}
                  className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-lg font-semibold transition-colors flex items-center gap-3 mx-auto">
                  <TrendingUp className="w-5 h-5" />
                  Generate Scorecard
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <AnimatePresence>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              {/* Overall */}
              <div className={`bg-slate-800/50 border rounded-2xl p-8 text-center mb-8 ${scores.overall >= 70 ? 'border-green-500/30' : scores.overall >= 50 ? 'border-yellow-500/30' : 'border-red-500/30'}`}>
                <Award className={`w-12 h-12 mx-auto mb-4 ${colorFor(scores.overall)}`} />
                <h2 className="text-2xl font-bold text-white mb-2">Your IT Performance Score</h2>
                <div className="flex justify-center gap-12 mb-4">
                  <div>
                    <div className="relative w-32 h-32">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="42" fill="none" stroke="rgb(51 65 85)" strokeWidth="8" />
                        <circle cx="50" cy="50" r="42" fill="none" className={ringFor(scores.overall)} strokeWidth="8" strokeDasharray={`${scores.overall * 2.64} 264`} strokeLinecap="round" />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className={`text-4xl font-bold ${colorFor(scores.overall)}`}>{scores.overall}</span>
                        <span className="text-slate-400 text-xs">/100</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-slate-300 text-lg">
                      {scores.overall >= 80 ? 'Strong IT operations with minor optimization opportunities.' : scores.overall >= 60 ? 'Solid foundation. Managed services can close gaps quickly.' : 'Significant improvement available. Our team can help.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Metric Cards */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {/* Uptime */}
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className={`w-5 h-5 ${colorFor(scores.uptime.score)}`} />
                    <span className="text-white font-semibold">Uptime</span>
                  </div>
                  <div className="flex justify-between items-end mb-2">
                    <div>
                      <span className={`text-3xl font-bold ${colorFor(scores.uptime.score)}`}>{scores.uptime.current}%</span>
                      <span className="text-slate-500 text-sm ml-1">Current</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500" />
                    <div>
                      <span className="text-3xl font-bold text-green-400">{scores.uptime.projected.toFixed(2)}%</span>
                      <span className="text-slate-500 text-sm ml-1">With Zion</span>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400">Current: {scores.uptime.level} | Target: Enterprise (99.99%)</div>
                </div>

                {/* Response Time */}
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className={`w-5 h-5 ${colorFor(scores.response.score)}`} />
                    <span className="text-white font-semibold">Response Time</span>
                  </div>
                  <div className="flex justify-between items-end mb-2">
                    <span className={`text-3xl font-bold ${colorFor(scores.response.score)}`}>{scores.response.currentMs}ms</span>
                    <ArrowRight className="w-4 h-4 text-slate-500" />
                    <span className="text-3xl font-bold text-green-400">{scores.response.projected}ms</span>
                  </div>
                  <div className="text-xs text-slate-400">Enterprise target: &lt;200ms</div>
                </div>

                {/* MTTR */}
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <ChevronRight className={`w-5 h-5 ${colorFor(scores.mttr.score)}`} />
                    <span className="text-white font-semibold">MTTR</span>
                  </div>
                  <div className="flex justify-between items-end mb-2">
                    <span className={`text-3xl font-bold ${colorFor(scores.mttr.score)}`}>{scores.mttr.current}h</span>
                    <ArrowRight className="w-4 h-4 text-slate-500" />
                    <span className="text-3xl font-bold text-green-400">{parseFloat(scores.mttr.projected.toFixed(1))}h</span>
                  </div>
                  <div className="text-xs text-slate-400">Enterprise target: &lt;1 hour</div>
                </div>

                {/* First Call Resolution */}
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className={`w-5 h-5 ${colorFor(scores.fcr.score)}`} />
                    <span className="text-white font-semibold">First Call Resolution</span>
                  </div>
                  <div className="flex justify-between items-end mb-2">
                    <span className={`text-3xl font-bold ${colorFor(scores.fcr.score)}`}>{scores.fcr.current}%</span>
                    <ArrowRight className="w-4 h-4 text-slate-500" />
                    <span className="text-3xl font-bold text-green-400">{scores.fcr.projected}%</span>
                  </div>
                  <div className="text-xs text-slate-400">Enterprise target: 85%+</div>
                </div>
              </div>

              {/* Downtime Cost */}
              <div className="bg-gradient-to-r from-red-500/10 to-amber-500/10 border border-red-500/20 rounded-2xl p-8 mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-red-400" /> Downtime Cost Analysis</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-red-400">{scores.downtime.hours.toFixed(1)} hrs/yr</p>
                    <p className="text-slate-400 text-sm">Current downtime</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-red-400">{fmt(scores.downtime.cost)}</p>
                    <p className="text-slate-400 text-sm">Annual downtime cost</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-400">{fmt(Math.max(1, scores.downtime.cost - scores.downtime.projCost))}</p>
                    <p className="text-slate-400 text-sm">Potential annual savings</p>
                  </div>
                </div>
              </div>

              {/* Recommendations + Services */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Star className="w-5 h-5 text-amber-400" /> How Zion Managed Services Close the Gaps</h3>
                <div className="space-y-3">
                  {scores.uptime.score < 80 && (
                    <div className="p-3 bg-slate-700/30 rounded-lg flex items-start gap-3">
                      <Server className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                      <div>
                        <span className="text-white font-medium">Infrastructure Reliability</span>
                        <span className="text-slate-400 text-sm block"> → {fmt(Math.max(1, scores.downtime.cost - scores.downtime.projCost))}/yr saved via improved architecture</span>
                        <Link href="/it-services/cloud-migration" className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1 mt-1">View: Cloud Migration &amp; Modernization <ArrowRight className="w-3 h-3" /></Link>
                      </div>
                    </div>
                  )}
                  {scores.response.score < 75 && (
                    <div className="p-3 bg-slate-700/30 rounded-lg flex items-start gap-3">
                      <Zap className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                      <div>
                        <span className="text-white font-medium">Performance Optimization</span>
                        <span className="text-slate-400 text-sm block"> → {scores.response.currentMs}ms → {scores.response.projected}ms response time target</span>
                        <Link href="/ai-services/ai-intelligent-routing" className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1 mt-1">View: Network Architecture &amp; SD-WAN <ArrowRight className="w-3 h-3" /></Link>
                      </div>
                    </div>
                  )}
                  {scores.mttr.score < 60 && (
                    <div className="p-3 bg-slate-700/30 rounded-lg flex items-start gap-3">
                      <Clock className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                      <div>
                        <span className="text-white font-medium">Incident Response</span>
                        <span className="text-slate-400 text-sm block"> → MTTR {scores.mttr.current}h → {parseFloat(scores.mttr.projected.toFixed(1))}h with managed SOC</span>
                        <Link href="/it-services/managed-soc-threat-intelligence" className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1 mt-1">View: Managed SOC &amp; Threat Intelligence <ArrowRight className="w-3 h-3" /></Link>
                      </div>
                    </div>
                  )}
                  {scores.fcr.score < 75 && (
                    <div className="p-3 bg-slate-700/30 rounded-lg flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <div>
                        <span className="text-white font-medium">Service Desk Automation</span>
                        <span className="text-slate-400 text-sm block"> → FCR {scores.fcr.current}% → {scores.fcr.projected}% with AI routing</span>
                        <Link href="/it-services/it-service-desk-automation" className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1 mt-1">View: IT Service Desk Automation <ArrowRight className="w-3 h-3" /></Link>
                      </div>
                    </div>
                  )}
                  {!metrics.hasMonitoring && (
                    <div className="p-3 bg-slate-700/30 rounded-lg flex items-start gap-3">
                      <Shield className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                      <div>
                        <span className="text-white font-medium">Enable 24/7 Monitoring</span>
                        <span className="text-slate-400 text-sm block"> → Automated alerting, anomaly detection, proactive response</span>
                        <Link href="/it-services/managed-soc-threat-intelligence" className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1 mt-1">View: Managed Monitoring <ArrowRight className="w-3 h-3" /></Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-3">Let Zion Manage Your IT Operations</h3>
                <p className="text-slate-400 mb-6">Our managed services deliver guaranteed SLA improvements with transparent reporting.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <Link href="/consultation" className="inline-flex items-center gap-2 px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors">
                    Get Custom SLA Proposal <ExternalLink className="w-4 h-4" />
                  </Link>
                  <Link href="/services" className="inline-flex items-center gap-2 px-8 py-3 border border-slate-600 hover:border-slate-500 text-white rounded-lg font-medium transition-colors">Browse IT Services</Link>
                </div>
                <div className="text-slate-400 text-sm space-y-1">
                  <p><Phone className="w-4 h-4 inline mr-1" /> +1 302 464 0950</p>
                  <p><Mail className="w-4 h-4 inline mr-1" /> <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:underline">kleber@ziontechgroup.com</a></p>
                  <p><MapPin className="w-4 h-4 inline mr-1" /> 364 E Main St STE 1008 Middletown DE 19709</p>
                </div>
              </div>

              <div className="text-center">
                <button onClick={() => setStep('input')} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 mx-auto">
                  <ChevronLeft className="w-4 h-4" /> Recalculate with Different Metrics
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        <div className="text-center mt-10 text-slate-500 text-xs">
          <p>Free benchmark tool by Zion Tech Group — projections based on typical managed services performance improvements</p>
        </div>
      </div>
    </div>
  );
}
