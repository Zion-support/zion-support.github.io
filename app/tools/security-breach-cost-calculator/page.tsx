'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, AlertTriangle, Shield, DollarSign, BarChart3, ArrowRight, Check, Mail, Phone, MapPin, Lock, Globe, Users, FileText } from 'lucide-react';
import Link from 'next/link';

interface FormData {
  employees: string;
  dataTypes: string[];
  industry: string;
  securityMaturity: string;
  compliance: boolean;
  incidentResponse: string;
}

const defaults: FormData = {
  employees: '50',
  dataTypes: [],
  industry: 'technology',
  securityMaturity: 'basic',
  compliance: false,
  incidentResponse: 'none',
};

const industryMultipliers: Record<string, number> = {
  healthcare: 2.8,
  financial: 2.4,
  government: 2.2,
  retail: 1.6,
  technology: 1.4,
  manufacturing: 1.2,
  education: 1.0,
};

const dataRiskMultiplier: Record<string, number> = {
  phi: 3.5,
  pci: 2.8,
  gdpr: 2.2,
  pii: 1.8,
  intellectual_property: 1.5,
  public: 0.3,
};

export default function SecurityBreachCostCalculator() {
  const [form, setForm] = useState<FormData>(defaults);
  const [showResults, setShowResults] = useState(false);

  const updateField = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const toggleDataType = (type: string) => {
    setForm(prev => ({
      ...prev,
      dataTypes: prev.dataTypes.includes(type)
        ? prev.dataTypes.filter(d => d !== type)
        : [...prev.dataTypes, type],
    }));
  };

  const calculate = () => {
    const employeeCount = parseInt(form.employees) || 50;
    const baseCost = employeeCount * 42;

    const indMult = industryMultipliers[form.industry] || 1.0;
    const secMult = { none: 3.0, basic: 2.0, structured: 1.2, advanced: 0.8 }[form.securityMaturity] || 2.0;
    const respMult = { none: 2.5, basic: 1.8, documented: 1.2, tested: 0.9 }[form.incidentResponse] || 1.8;
    const complianceDiscount = form.compliance ? 0.85 : 1.0;

    const avgDataMult = form.dataTypes.length > 0
      ? form.dataTypes.reduce((sum, d) => sum + (dataRiskMultiplier[d] || 1), 0) / form.dataTypes.length
      : 1.0;

    const directCost = Math.round(baseCost * indMult * avgDataMult);
    const withSecurity = Math.round(directCost * secMult);
    const withResponse = Math.round(withSecurity * respMult);
    const final = Math.round(withResponse * complianceDiscount);

    const notificationCost = Math.round(final * 0.15);
    const legalCost = Math.round(final * 0.12);
    const forensicsCost = Math.round(final * 0.08);
    const lostRevenue = Math.round(final * 0.25);
    const brandDamage = Math.round(final * 0.20);
    const regulatoryFines = Math.round(final * 0.20);

    const preventionCost = Math.round(final * 0.15);
    const savings = final - preventionCost;
    const roi = ((savings / preventionCost) * 100).toFixed(0);

    return {
      totalCost: final,
      breakdown: { notification: notificationCost, legal: legalCost, forensics: forensicsCost, lostRevenue, brandDamage, regulatoryFines, remediation: final - notificationCost - legalCost - forensicsCost - lostRevenue - brandDamage - regulatoryFines },
      preventionCost,
      savings,
      roi,
      riskLevel: final > 500000 ? 'CRITICAL' : final > 200000 ? 'HIGH' : final > 100000 ? 'MODERATE' : 'LOWER',
    };
  };

  const results = showResults ? calculate() : null;

  const fmt = (n: number) => '$' + n.toLocaleString();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-950/20 to-slate-900 py-8 px-4 md:py-16 md:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-400 text-sm mb-4">
            <AlertTriangle className="w-4 h-4" />
            Risk Assessment Tool
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">AI Security Breach Cost Calculator</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Estimate the financial impact of a potential data breach and discover how much proactive security could save your organization.
          </p>
        </motion.div>

        {!showResults ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <div className="space-y-6">
              {/* Employees */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <label className="flex items-center gap-3 text-white font-semibold mb-3">
                  <Users className="w-5 h-5 text-blue-400" />
                  Number of Employees
                </label>
                <input
                  type="number" value={form.employees}
  onChange={e => updateField('employees', e.target.value)}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white text-lg focus:border-blue-500 focus:outline-none"
                  min="1" max="100000"
                />
                <p className="text-slate-400 text-sm mt-2">Average cost per employee in a breach: ~$42</p>
              </div>

              {/* Industry */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <label className="flex items-center gap-3 text-white font-semibold mb-3">
                  <Globe className="w-5 h-5 text-blue-400" />
                  Industry
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {Object.keys(industryMultipliers).map(ind => (
                    <button key={ind} onClick={() => updateField('industry', ind)}
                      className={`p-3 rounded-lg border text-center transition-all capitalize ${
                        form.industry === ind ? 'border-blue-500 bg-blue-500/10 text-white' : 'border-slate-700 text-slate-400 hover:border-slate-600'
                      }`}>
                      <span className="text-sm">{ind.replace('_', ' ')}</span>
                      <span className="block text-xs text-slate-500 mt-1">{industryMultipliers[ind]}x risk</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Data Types */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <label className="flex items-center gap-3 text-white font-semibold mb-3">
                  <Lock className="w-5 h-5 text-red-400" />
                  Types of Data You Handle (select all that apply)
                </label>
                <div className="space-y-2">
                  {[
                    { key: 'phi', label: 'Protected Health Information (PHI)', mult: 3.5 },
                    { key: 'pci', label: 'Payment Card Data (PCI)', mult: 2.8 },
                    { key: 'gdpr', label: 'EU Personal Data (GDPR)', mult: 2.2 },
                    { key: 'pii', label: 'Personally Identifiable Information (PII)', mult: 1.8 },
                    { key: 'intellectual_property', label: 'Trade Secrets & Intellectual Property', mult: 1.5 },
                    { key: 'public', label: 'Only Public / Non-sensitive Data', mult: 0.3 },
                  ].map(dt => (
                    <button key={dt.key} onClick={() => toggleDataType(dt.key)}
                      className={`w-full text-left p-3 rounded-lg border flex items-center justify-between transition-all ${
                        form.dataTypes.includes(dt.key) ? 'border-red-500 bg-red-500/10 text-white' : 'border-slate-700 text-slate-400 hover:border-slate-600'
                      }`}>
                      <span className="text-sm">{dt.label}</span>
                      <span className="text-xs text-slate-500">{dt.mult}x risk</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Security Maturity */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <label className="flex items-center gap-3 text-white font-semibold mb-3">
                  <Shield className="w-5 h-5 text-green-400" />
                  Current Security Posture
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { key: 'none', label: 'No formal security', desc: 'Firewalls only', mult: '3.0x' },
                    { key: 'basic', label: 'Basic', desc: 'AV + password policies', mult: '2.0x' },
                    { key: 'structured', label: 'Structured', desc: 'MFA + logging + backups', mult: '1.2x' },
                    { key: 'advanced', label: 'Advanced', desc: 'SIEM + threat detection', mult: '0.8x' },
                  ].map(sm => (
                      <button key={sm.key} onClick={() => updateField('securityMaturity', sm.key)}
                        className={`p-4 rounded-lg border text-left transition-all ${
                          form.securityMaturity === sm.key ? 'border-green-500 bg-green-500/10 text-white' : 'border-slate-700 text-slate-400 hover:border-slate-600'
                        }`}>
                        <span className="font-medium text-sm">{sm.label}</span>
                        <span className="block text-xs text-slate-500 mt-1">{sm.desc}</span>
                        <span className="block text-xs text-green-400 mt-1">{ sm.mult} cost factor</span>
                      </button>
                    ))}
                </div>
              </div>

              {/* Compliance */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <label className="flex items-center gap-3 text-white font-semibold mb-3">
                  <FileText className="w-5 h-5 text-amber-400" />
                  Regulatory Compliance?
                </label>
                <div className="flex gap-3">
                  {[true, false].map(val => (
                    <button key={String(val)} onClick={() => updateField('compliance', val)}
                      className={`flex-1 p-4 rounded-lg border text-center transition-all ${
                        form.compliance === val ? 'border-amber-500 bg-amber-500/10 text-white' : 'border-slate-700 text-slate-400 hover:border-slate-600'
                      }`}>
                      {val ? 'Yes — SOC 2 / HIPAA / GDPR / ISO' : 'No compliance framework'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Incident Response */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <label className="flex items-center gap-3 text-white font-semibold mb-3">
                  <Calculator className="w-5 h-5 text-purple-400" />
                  Incident Response Plan
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { key: 'none', label: 'None', mult: '2.5x' },
                    { key: 'basic', label: 'Informal', mult: '1.8x' },
                    { key: 'documented', label: 'Documented', mult: '1.2x' },
                    { key: 'tested', label: 'Tested', mult: '0.9x' },
                  ].map(ir => (
                    <button key={ir.key} onClick={() => updateField('incidentResponse', ir.key)}
      className={`p-4 rounded-lg border text-center transition-all ${
                        form.incidentResponse === ir.key ? 'border-purple-500 bg-purple-500/10 text-white' : 'border-slate-700 text-slate-400 hover:border-slate-600'
                      }`}>
                      {ir.label}
                      <span className="block text-xs text-purple-400 mt-1">{ir.mult}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Calculate */}
              <div className="text-center">
                <button onClick={() => setShowResults(true)}
                  className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl text-lg font-semibold transition-colors flex items-center gap-3 mx-auto">
                  <AlertTriangle className="w-5 h-5" />
                  Calculate Breach Cost
                </button>
                <p className="text-slate-500 text-xs mt-2">Estimates are based on IBM Cost of a Data Breach Report 2023 and industry averages</p>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {results && (() => {
              const riskColors: Record<string, string> = {
                CRITICAL: 'text-red-400',
                HIGH: 'text-orange-400',
                MODERATE: 'text-yellow-400',
                LOWER: 'text-green-400',
              };
              return (
                <>
                  <div className="bg-slate-800/50 border border-red-500/30 rounded-2xl p-8 text-center mb-8">
                    <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-white mb-2">Estimated Breach Cost</h2>
                    <p className={`text-5xl md:text-6xl font-bold ${riskColors[results.riskLevel]} mb-2`}>{fmt(results.totalCost)}</p>
                    <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm ${
                      results.riskLevel === 'CRITICAL' ? 'bg-red-500/20 text-red-400' :
                      results.riskLevel === 'HIGH' ? 'bg-orange-500/20 text-orange-400' :
                      results.riskLevel === 'MODERATE' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {results.riskLevel} RISK LEVEL
                    </span>
                    <p className="text-slate-400 mt-4 max-w-xl mx-auto">
                      Based on {form.employees} employees in {form.industry.replace('_', ' ')} handling {form.dataTypes.length > 0 ? form.dataTypes.join(', ') : 'standard data'}.
                      {form.securityMaturity === 'none' ? ' Your current security posture provides minimal protection.' : form.securityMaturity === 'basic' ? ' Basic security controls reduce but do not eliminate risk.' : ' Your security posture provides meaningful risk reduction.'}
                    </p>
                  </div>

                  {/* Breakdown */}
                  <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 mb-8">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5" /> Cost Breakdown
                    </h3>
                    <div className="space-y-4">
                      {results && Object.entries(results.breakdown).filter(([_, v]) => v > 0).map(([key, value]) => {
                        const pct = ((value / results.totalCost) * 100).toFixed(0);
                        const labels: Record<string, string> = {
                          notification: 'Notification & Communication',
                          legal: 'Legal & Forensic Investigation',
                          forensics: 'Forensic Analysis',
                          lostRevenue: 'Lost Business & Revenue',
                          brandDamage: 'Brand & Reputation Damage',
                          regulatoryFines: 'Regulatory Fines & Penalties',
                          remediation: 'Remediation & Recovery',
                        };
                        return (
                          <div key={key} className="flex items-center gap-4">
                            <span className="text-slate-400 text-sm w-48">{labels[key] || key}</span>
                            <div className="flex-1 bg-slate-700/50 rounded-full h-4">
                              <div className="h-4 rounded-full bg-red-500/60 transition-all" style={{ width: `${pct}%` }} />
                            </div>
                            <span className="text-white font-medium w-32 text-right">{fmt(value)} ({pct}%)</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Prevention Savings */}
                  <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-2xl p-8 mb-8">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <Calculator className="w-5 h-5 text-green-400" /> Proactive Security Savings
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                          <p className="text-3xl font-bold text-green-400">{fmt(results.preventionCost)}</p>
                        <p className="text-slate-400 text-sm mt-1">Annual prevention investment</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-amber-400">{fmt(results.savings)}</p>
                        <p className="text-slate-400 text-sm mt-1">Potential savings per breach</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-blue-400">{results.roi}%</p>
                        <p className="text-slate-400 text-sm mt-1">Return on security investment</p>
                      </div>
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 mb-8">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-400" /> Recommended Actions
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-slate-700/30 rounded-xl">
                        <h4 className="text-white font-medium mb-2">Immediate</h4>
                        <ul className="space-y-2">
                          <li className="text-slate-300 text-sm flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" /> Implement incident response plan</li>
                          <li className="text-slate-300 text-sm flex items-start gap-2"><Lock className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" /> Enable multi-factor authentication</li>
                          <li className="text-slate-300 text-sm flex items-start gap-2"><Shield className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" /> Deploy endpoint detection</li>
                        </ul>
                        <Link href="/it-services/managed-soc-threat-intelligence" className="inline-flex items-center gap-1 mt-3 text-blue-400 hover:text-blue-300 text-sm">
                          Managed SOC & Threat Intelligence <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                      <div className="p-4 bg-slate-700/30 rounded-xl">
                        <h4 className="text-white font-medium mb-2">Strategic</h4>
                        <ul className="space-y-2">
                          <li className="text-slate-300 text-sm flex items-start gap-2"><Globe className="w-4 h-4 text-green-400 mt-0.5 shrink-0" /> Pursue relevant compliance certification</li>
                          <li className="text-slate-300 text-sm flex items-start gap-2"><FileText className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" /> Build security awareness training</li>
                          <li className="text-slate-300 text-sm flex items-start gap-2"><DollarSign className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" /> Establish security budget aligned to risk</li>
                        </ul>
                        <Link href="/it-services/enterprise-backup-dr" className="inline-flex items-center gap-1 mt-3 text-blue-400 hover:text-blue-300 text-sm">
                          Enterprise Backup & DR <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Contact CTA */}
                  <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-3">Protect Your Organization Today</h3>
                    <p className="text-slate-400 mb-6">Zion Tech Group provides end-to-end security solutions — from assessment to implementation to managed operations.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                      <Link href="/consultation" className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors">
                        <Calculator className="w-4 h-4" /> Free Security Assessment <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link href="/services" className="inline-flex items-center gap-2 px-8 py-3 border border-slate-600 hover:border-slate-500 text-white rounded-lg font-medium transition-colors">
                        Browse Security Services
                      </Link>
                    </div>
                    <div className="text-slate-400 text-sm space-y-1">
                      <p><Phone className="w-4 h-4 inline mr-1" /> +1 302 464 0950</p>
                      <p><Mail className="w-4 h-4 inline mr-1" /> <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:underline">kleber@ziontechgroup.com</a></p>
                      <p><MapPin className="w-4 h-4 inline mr-1" /> 364 E Main St STE 1008 Middletown DE 19709</p>
                    </div>
                  </div>

                  <div className="text-center">
                    <button onClick={() => { setShowResults(false); setForm(defaults); }}
                      className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 mx-auto">
                      <ArrowRight className="w-4 h-4 rotate-180" /> Recalculate with Different Parameters
                    </button>
                  </div>
                </>
              );
            })()}
          </motion.div>
        )}

        <div className="text-center mt-10 text-slate-500 text-xs">
          <p>Free tool by Zion Tech Group — estimates based on IBM Cost of a Data Breach Report 2023 and industry averages</p>
        </div>
      </div>
    </div>
  );
}
