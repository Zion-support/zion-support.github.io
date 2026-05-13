'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cloud, DollarSign, ArrowRight, Check, Mail, Phone, MapPin, ExternalLink, ChevronRight, ChevronLeft, Server, Database, Network, Zap, Download, TrendingUp, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

interface CloudConfig {
  provider: string;
  monthlySpend: string;
  vms: string;
  storageTB: string;
  databases: string;
  bandwidth: string;
  hasReservedInstances: boolean;
  hasAutoScaling: boolean;
  hasMultiRegion: boolean;
}

const defaults: CloudConfig = {
  provider: 'aws',
  monthlySpend: '5000',
  vms: '20',
  storageTB: '5',
  databases: '3',
  bandwidth: '500',
  hasReservedInstances: false,
  hasAutoScaling: false,
  hasMultiRegion: false,
};

export default function CloudCostOptimizer() {
  const [config, setConfig] = useState<CloudConfig>(defaults);
  const [showResults, setShowResults] = useState(false);

  const update = (key: keyof CloudConfig, value: string | boolean) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const analyze = useCallback(() => {
    const spend = parseFloat(config.monthlySpend) || 5000;
    const vms = parseInt(config.vms) || 10;
    const storage = parseFloat(config.storageTB) || 5;
    const bandwidth = parseInt(config.bandwidth) || 500;

    // Current cost estimation model
    const computeCost = spend * 0.45;
    const storageCost = spend * 0.15;
    const networkCost = spend * 0.10;
    const dbCost = spend * 0.20;
    const overhead = spend * 0.10;

    // Optimization potentials (based on best practices)
    const reservedSavings = config.hasReservedInstances ? 0 : computeCost * 0.30;
    const rightsizeSavings = vms * 50; // Average $50/VM from rightsizing
    const storageSavings = storage * (storage > 10 ? 15 : 10); // $10-15/TB savings
    const networkSavings = bandwidth > 1000 ? networkCost * 0.20 : networkCost * 0.10;
    const autoscaleSavings = config.hasAutoScaling ? 0 : computeCost * 0.15;
    const spotSavings = computeCost * 0.10; // 10% potential with Spot/Preemptible

    const totalSavings = reservedSavings + rightsizeSavings + storageSavings + networkSavings + autoscaleSavings + spotSavings;
    const optimizedSpend = spend - totalSavings;
    const savingsPercent = ((totalSavings / spend) * 100).toFixed(0);
    const annualSavings = totalSavings * 12;

    // Risk score
    let riskScore = 0;
    if (!config.hasReservedInstances) riskScore += 2;
    if (!config.hasAutoScaling) riskScore += 2;
    if (!config.hasMultiRegion) riskScore += 1;
    if (vms > 50) riskScore += 2;
    if (storage > 50) riskScore += 1;

    const riskLevel = riskScore >= 5 ? 'HIGH' : riskScore >= 3 ? 'MODERATE' : 'LOW';
    const recommendations: string[] = [];
    const linkedServices: { name: string; href: string }[] = [];

    if (!config.hasReservedInstances) {
      recommendations.push('Purchase Reserved Instances or Savings Plans for steady-state workloads (30-40% savings)');
      linkedServices.push({ name: 'Cloud Cost Optimization', href: '/it-services/cloud-cost-optimization' });
    }
    if (!config.hasAutoScaling) {
      recommendations.push('Implement auto-scaling to match capacity with actual demand');
      linkedServices.push({ name: 'Container Orchestration & Kubernetes', href: '/it-services/kubernetes-management' });
    }
    if (!config.hasMultiRegion && spend > 10000) {
      recommendations.push('Consider multi-region architecture for redundancy and latency optimization');
      linkedServices.push({ name: 'Network Architecture & SD-WAN', href: '/it-services/network-architecture-sdwan' });
    }
    if (rightsizeSavings > 500) {
      recommendations.push(`Rightsize ${vms} VMs — estimated $${rightsizeSavings.toFixed(0)}/mo savings`);
    }
    recommendations.push('Enable lifecycle policies for unused resources and snapshots');
    linkedServices.push({ name: 'AI Cloud Cost Optimizer', href: '/ai-lab/autonomous-api-cost-estimator' });

    return {
      currentSpend: spend,
      optimizedSpend: Math.round(optimizedSpend),
      totalSavings: Math.round(totalSavings),
      savingsPercent,
      annualSavings: Math.round(annualSavings),
      riskLevel,
      breakdown: { compute: Math.round(computeCost), storage: Math.round(storageCost), network: Math.round(networkCost), databases: Math.round(dbCost), overhead: Math.round(overhead) },
      savingsBreakdown: { reserved: Math.round(reservedSavings), rightsizing: Math.round(rightsizeSavings), storage: Math.round(storageSavings), network: Math.round(networkSavings), autoscaling: Math.round(autoscaleSavings), spot: Math.round(spotSavings) },
      recommendations,
      linkedServices,
    };
  }, [config]);

  const results = showResults ? analyze() : null;
  const fmt = (n: number) => '$' + n.toLocaleString();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950/20 to-slate-900 py-8 px-4 md:py-16 md:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm mb-4">
            <Cloud className="w-4 h-4" />
            Free Cloud Analysis Tool
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">AI Cloud Cost Optimizer</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Analyze your cloud infrastructure costs and discover how much you can save with Zion's optimization strategies.
          </p>
        </motion.div>

        {!showResults ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <div className="space-y-6">
              {/* Provider */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <label className="flex items-center gap-3 text-white font-semibold mb-3">
                  <Cloud className="w-5 h-5 text-blue-400" />
                  Cloud Provider
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[{ key: 'aws', label: 'AWS', icon: '☁️' }, { key: 'gcp', label: 'Google Cloud', icon: '🌐' }, { key: 'azure', label: 'Azure', icon: '🔷' }].map(p => (
                    <button key={p.key} onClick={() => update('provider', p.key)}
                      className={`p-4 rounded-lg border text-center transition-all ${config.provider === p.key ? 'border-blue-500 bg-blue-500/10 text-white' : 'border-slate-700 text-slate-400 hover:border-slate-600'}`}>
                      <span className="text-2xl">{p.icon}</span>
                      <span className="block mt-1 text-sm font-medium">{p.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Monthly Spend */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <label className="flex items-center gap-3 text-white font-semibold mb-3">
                  <DollarSign className="w-5 h-5 text-green-400" />
                  Monthly Cloud Spend ($)
                </label>
                <input type="number" value={config.monthlySpend} onChange={e => update('monthlySpend', e.target.value)}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white text-lg focus:border-green-500 focus:outline-none"
                  min="100" />
              </div>

              {/* Resources */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <label className="flex items-center gap-3 text-white font-semibold mb-3">
                  <Server className="w-5 h-5 text-purple-400" />
                  Infrastructure Scale
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { key: 'vms', label: 'VMs / Instances', value: config.vms },
                    { key: 'storageTB', label: 'Storage (TB)', value: config.storageTB },
                    { key: 'databases', label: 'Databases', value: config.databases },
                    { key: 'bandwidth', label: 'Bandwidth (GB)', value: config.bandwidth },
                  ].map(f => (
                    <div key={f.key}>
                      <label className="text-slate-400 text-xs mb-1 block">{f.label}</label>
                      <input type="number" value={f.value} onChange={e => update(f.key as keyof CloudConfig, e.target.value)}
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:border-purple-500 focus:outline-none"
                        min="0" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <label className="flex items-center gap-3 text-white font-semibold mb-3">
                  <Zap className="w-5 h-5 text-amber-400" />
                  Current Optimization Features
                </label>
                <div className="space-y-3">
                  {([
                    { key: 'hasReservedInstances' as const, label: 'Reserved Instances / Savings Plans', icon: '🎫' },
                    { key: 'hasAutoScaling' as const, label: 'Auto-Scaling / Load Balancing', icon: '⚖️' },
                    { key: 'hasMultiRegion' as const, label: 'Multi-Region / Disaster Recovery', icon: '🌍' },
                  ]).map(f => (
                    <button key={f.key} onClick={() => update(f.key, !config[f.key])}
                      className={`w-full text-left p-3 rounded-lg border flex items-center justify-between transition-all ${
                        config[f.key] === true ? 'border-green-500 bg-green-500/10 text-white' : 'border-slate-700 text-slate-400 hover:border-slate-600'
                      }`}>
                      <span className="flex items-center gap-2"><span>{f.icon}</span> {f.label}</span>
                      {config[f.key] === true ? <Check className="w-4 h-4 text-green-400" /> : <span className="text-slate-600">Off</span>}
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <button onClick={() => setShowResults(true)}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-lg font-semibold transition-colors flex items-center gap-3 mx-auto">
                  <TrendingUp className="w-5 h-5" />
                  Analyze & Optimize My Costs
                </button>
              </div>
            </div>
          </motion.div>
        ) : results && (
          <AnimatePresence>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              {/* Savings Hero */}
              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-2xl p-8 text-center mb-8">
                <TrendingUp className="w-10 h-10 text-green-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-white mb-2">Your Cloud Optimization Potential</h2>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-3xl font-bold text-slate-300">{fmt(results.currentSpend)}</p>
                    <p className="text-slate-400 text-xs mt-1">Current monthly</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-red-400">{fmt(results.totalSavings)}</p>
                    <p className="text-slate-400 text-xs mt-1">Potential savings/mo</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-green-400">{results.savingsPercent}%</p>
                    <p className="text-slate-400 text-xs mt-1">Savings rate</p>
                  </div>
                </div>
                <p className="text-amber-400 font-medium">
                  🎯 {fmt(results.annualSavings)} potential annual savings
                </p>
              </div>

              {/* Cost Breakdown */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 mb-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><DollarSign className="w-5 h-5" /> Current Cost Distribution</h3>
                <div className="space-y-4">
                  {Object.entries(results.breakdown).filter(([_, v]) => v > 0).map(([key, value]) => {
                    const pct = ((value / results.currentSpend) * 100).toFixed(0);
                    const icons: Record<string, React.ReactNode> = { compute: <Server className="w-4 h-4" />, storage: <Database className="w-4 h-4" />, network: <Network className="w-4 h-4" />, databases: <Database className="w-4 h-4" />, overhead: <Cloud className="w-4 h-4" /> };
                    const labels: Record<string, string> = { compute: 'Compute (VMs, Containers)', storage: 'Storage (EBS, S3, Blob)', network: 'Network & Bandwidth', databases: 'Managed Databases', overhead: 'Overhead / Other' };
                    return (
                      <div key={key} className="flex items-center gap-4">
                        <div className="text-slate-400 w-8">{icons[key]}</div>
                        <span className="text-slate-300 text-sm w-40">{labels[key]}</span>
                        <div className="flex-1 bg-slate-700/50 rounded-full h-4"><div className="h-4 rounded-full bg-blue-500/60" style={{ width: `${pct}%` }} /></div>
                        <span className="text-white font-medium w-28 text-right">{fmt(value)} ({pct}%)</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Savings Breakdown */}
              <div className="bg-slate-800/50 border border-green-500/20 rounded-2xl p-8 mb-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><Check className="w-5 h-5 text-green-400" /> Where You Can Save</h3>
                <div className="space-y-3">
                  {Object.entries(results.savingsBreakdown).filter(([_, v]) => v > 0).map(([key, value]) => {
                    const labels: Record<string, string> = { reserved: 'Reserved Instances / Savings Plans', rightsizing: 'VM Rightsizing', storage: 'Storage Lifecycle Policies', network: 'CDN & Bandwidth Optimization', autoscaling: 'Auto-Scaling Implementation', spot: 'Spot / Preemptible Instances' };
                    return (
                      <div key={key} className="flex items-center gap-4 p-3 bg-green-500/5 rounded-lg">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300 text-sm flex-1">{labels[key]}</span>
                        <span className="text-green-400 font-medium">{fmt(value)}/mo</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Recommendations */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><ChevronRight className="w-5 h-5 text-amber-400" /> Recommended Actions</h3>
                <ul className="space-y-3">
                  {results.recommendations.map((r, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300"><span className="text-blue-400 mt-1">▸</span>{r}</li>
                  ))}
                </ul>
                <div className="mt-6 space-y-2">
                  {results.linkedServices.map((s, i) => (
                    <Link key={i} href={s.href} className="flex items-center gap-2 text-blue-400 hover:text-blue-300 hover:underline text-sm">
                      <ArrowRight className="w-3.5 h-3.5" /> {s.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-3">Let Zion Optimize Your Cloud Costs</h3>
                <p className="text-slate-400 mb-6">Our cloud architects provide free assessments and guaranteed savings plans.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <Link href="/consultation" className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                    Free Cloud Assessment <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/services" className="inline-flex items-center gap-2 px-8 py-3 border border-slate-600 hover:border-slate-500 text-white rounded-lg font-medium transition-colors">Browse Cloud Services</Link>
                </div>
                <div className="text-slate-400 text-sm space-y-1">
                  <p><Phone className="w-4 h-4 inline mr-1" /> +1 302 464 0950</p>
                  <p><Mail className="w-4 h-4 inline mr-1" /> <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:underline">kleber@ziontechgroup.com</a></p>
                  <p><MapPin className="w-4 h-4 inline mr-1" /> 364 E Main St STE 1008 Middletown DE 19709</p>
                </div>
              </div>

              <div className="text-center">
                <button onClick={() => { setShowResults(false); setConfig(defaults); }} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 mx-auto">
                  <ChevronLeft className="w-4 h-4" /> Recalculate with Different Parameters
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        <div className="text-center mt-10 text-slate-500 text-xs">
          <p>Free tool by Zion Tech Group — estimates based on AWS/GCP/Azure best practice benchmarks and typical optimization savings of 20-40%</p>
        </div>
      </div>
    </div>
  );
}
