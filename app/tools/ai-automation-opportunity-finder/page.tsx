'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight, ChevronLeft, ChevronRight, Check, Mail, Phone, MapPin, ExternalLink, Clock, DollarSign, Users, FileText, TrendingUp } from 'lucide-react';
import Link from 'next/link';

interface DeptConfig {
  key: string; label: string; icon: string; size: string; tasks: { id: string; label: string; hours: string; complexity: 'low' | 'medium' | 'high'; aiFit: string}[]; selected: string[];
}

const departments: DeptConfig[] = [
  {
    key: 'support', label: 'Customer Support', icon: '💬', size: '3', tasks: [
      { id: 'ticket-respond', label: 'Ticket response & triage', hours: '10', complexity: 'medium', aiFit: 'Auto-classify and draft responses for 60% of tickets' },
      { id: 'faq', label: 'FAQ handling', hours: '5', complexity: 'low', aiFit: 'Deploy AI chatbot for instant FAQ resolution' },
      { id: 'sentiment', label: 'Customer sentiment tracking', hours: '3', complexity: 'medium', aiFit: 'AI sentiment analysis on all interactions' },
      { id: 'escalation', label: 'Escalation routing', hours: '4', complexity: 'medium', aiFit: 'Smart routing to the right team instantly' },
    ], selected: [],
  },
  {
    key: 'sales', label: 'Sales & Marketing', icon: '📈', size: '2', tasks: [
      { id: 'lead-qual', label: 'Lead qualification', hours: '8', complexity: 'medium', aiFit: 'AI scores and routes leads automatically' },
      { id: 'email-campaigns', label: 'Email campaign creation', hours: '6', complexity: 'medium', aiFit: 'AI-generated personalized campaigns' },
      { id: 'content', label: 'Content/blog writing', hours: '8', complexity: 'medium', aiFit: 'AI drafts with fact-check and tone adjustment' },
      { id: 'crm', label: 'CRM data entry', hours: '4', complexity: 'low', aiFit: 'Automated CRM sync from emails and calls' },
    ], selected: [],
  },
  {
    key: 'finance', label: 'Finance & Operations', icon: '💰', size: '2', tasks: [
      { id: 'invoicing', label: 'Invoice processing', hours: '5', complexity: 'medium', aiFit: 'AI extracts and reconciles invoices automatically' },
      { id: 'expense', label: 'Expense report review', hours: '3', complexity: 'low', aiFit: 'Anomaly detection and auto-approval' },
      { id: 'forecasting', label: 'Financial forecasting', hours: '8', complexity: 'high', aiFit: 'ML-powered revenue and expense models' },
      { id: 'reporting', label: 'Monthly reporting', hours: '6', complexity: 'medium', aiFit: 'Automated report generation from data sources' },
    ], selected: [],
  },
  {
    key: 'hr', label: 'HR & People Ops', icon: '👥', size: '1', tasks: [
      { id: 'onboarding', label: 'Employee onboarding', hours: '4', complexity: 'low', aiFit: 'Automated checklist, docs, and training assignment' },
      { id: 'screening', label: 'Resume screening', hours: '6', complexity: 'medium', aiFit: 'AI matches candidates to job requirements' },
      { id: 'feedback', label: 'Employee feedback analysis', hours: '3', complexity: 'low', aiFit: 'Sentiment analysis of surveys and reviews' },
    ], selected: [],
  },
  {
    key: 'it', label: 'IT & Engineering', icon: '⚙️', size: '3', tasks: [
      { id: 'monitoring', label: 'Infrastructure monitoring', hours: '5', complexity: 'medium', aiFit: 'AI anomaly detection and auto-remediation' },
      { id: 'code-review', label: 'Code review', hours: '4', complexity: 'medium', aiFit: 'AI reviews for quality, security, best practices' },
      { id: 'deployments', label: 'Deployment management', hours: '3', complexity: 'medium', aiFit: 'Automated CI/CD with rollback intelligence' },
      { id: 'documentation', label: 'API/technical documentation', hours: '4', complexity: 'low', aiFit: 'AI-generate docs from codebases' },
    ], selected: [],
  },
];

function aiServiceMap(taskId: string): { name: string; href: string } {
  const map: Record<string, { name: string; href: string }> = {
    'ticket-respond': { name: 'AI Chatbot Builder Pro', href: '/ai-services/ai-chatbot-builder-pro' },
    'faq': { name: 'AI Customer Support Pro', href: '/ai-services/ai-customer-support' },
    'sentiment': { name: 'AI Customer Sentiment Analytics', href: '/ai-services/ai-customer-sentiment-analytics' },
    'escalation': { name: 'AI Intelligent Request Routing', href: '/ai-services/ai-intelligent-routing' },
    'lead-qual': { name: 'AI Lead Scoring Platform', href: '/micro-saas/ai-lead-scoring-platform' },
    'email-campaigns': { name: 'AI Email Marketing Automation', href: '/ai-services/ai-email-marketing' },
    'content': { name: 'AI Content Generation', href: '/ai-services/ai-content-generation' },
    'crm': { name: 'AI Automation Platform', href: '/ai-services/process-automation' },
    'invoicing': { name: 'AI Automated Invoicing', href: '/micro-saas/ai-automated-invoicing' },
    'expense': { name: 'AI Expense Categorizer', href: '/micro-saas/ai-expense-tracker' },
    'forecasting': { name: 'AI Financial Forecasting', href: '/ai-services/ai-financial-forecasting' },
    'reporting': { name: 'AI Analytics & BI', href: '/data-analytics' },
    'onboarding': { name: 'AI HR Onboarding', href: '/micro-saas/ai-hr-onboarding' },
    'screening': { name: 'AI Recruitment Assistant', href: '/ai-services/ai-hr-assistant' },
    'feedback': { name: 'AI Employee Feedback Platform', href: '/micro-sas/ai-employee-feedback-platform' },
    'monitoring': { name: 'Managed SOC & Threat Intelligence', href: '/it-services/managed-soc-threat-intelligence' },
    'code-review': { name: 'Zion AI Code Reviewer', href: '/zion-ai-code-reviewer' },
    'deployments': { name: 'AI DevOps Automation', href: '/ai-powered-devops' },
    'documentation': { name: 'AI Document Intelligence', href: '/ai-services/ai-document-intelligence' },
  };
  return map[taskId] || { name: 'AI Automation Platform', href: '/ai-services/process-automation' };
}

export default function AIAutomationFinder() {
  const [step, setStep] = useState<'select' | 'results'>('select');
  const [config, setConfig] = useState<DeptConfig[]>(JSON.parse(JSON.stringify(departments)));

  const toggleTask = (deptIdx: number, taskId: string) => {
    const updated = [...config];
    const dept = { ...updated[deptIdx] };
    const tasks = [...dept.tasks];
    const existing = dept.selected.includes(taskId);
    dept.selected = existing ? dept.selected.filter(t => t !== taskId) : [...dept.selected, taskId];
    updated[deptIdx] = { ...dept, tasks };
    setConfig(updated);
  };

  const totals = useMemo(() => {
    let totalHours = 0;
    let opportunities: { dept: string; task: string; hours: number; aiFit: string; service: { name: string; href: string } }[] = [];
    config.forEach(dept => {
      dept.tasks.forEach(t => {
        if (dept.selected.includes(t.id)) {
          const h = parseInt(t.hours) || 0;
          totalHours += h;
          opportunities.push({ dept: dept.label, task: t.label, hours: h, aiFit: t.aiFit, service: aiServiceMap(t.id) });
        }
      });
    });
    const automationFactor = 0.75;
    const hoursSaved = Math.round(totalHours * automationFactor);
    const weeklyHoursSaved = Math.round(hoursSaved / 4);
    const hourlyRate = 35;
    const weeklySavings = weeklyHoursSaved * hourlyRate;
    const annualSavings = weeklySavings * 52;

    return { totalHours, hoursSaved, weeklyHoursSaved, weeklySavings, annualSavings, opportunities };
  }, [config]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-yellow-950/10 to-slate-900 py-8 px-4 md:py-16 md:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 text-yellow-400 text-sm mb-4">
            <Zap className="w-4 h-4" />
            Automation ROI Calculator
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">AI Automation Opportunity Finder</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Select the workflows you want to automate and instantly see hours saved, cost reduction, and matched Zion services.
          </p>
        </motion.div>

        {step === 'select' ? (
          <div className="space-y-6 mb-10">
            {config.map((dept, di) => (
              <div key={dept.key} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{dept.icon}</span>
                  <h2 className="text-xl font-bold text-white">{dept.label}</h2>
                  <span className="text-slate-500 text-sm">~{parseInt(dept.size) * 120}h/mo current effort</span>
                </div>
                <div className="space-y-2">
                  {dept.tasks.map(t => {
                    const isSelected = dept.selected.includes(t.id);
                    return (
                      <button key={t.id} onClick={() => toggleTask(di, t.id)}
                        className={`w-full text-left p-4 rounded-lg border transition-all ${
                          isSelected ? 'border-yellow-500 bg-yellow-500/10' : 'border-slate-700 hover:border-slate-600'
                        }`}>
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3">
                            <div className={`mt-1 w-5 h-5 rounded border flex items-center justify-center ${isSelected ? 'border-yellow-500 bg-yellow-500' : 'border-slate-600'}`}>
                              {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                            </div>
                            <div>
                              <p className={isSelected ? 'text-white font-medium' : 'text-slate-300'}>{t.label}</p>
                              <p className="text-slate-500 text-sm">~{t.hours}h/week · <span className={t.complexity === 'high' ? 'text-red-400' : t.complexity === 'medium' ? 'text-yellow-400' : 'text-green-400'}>{t.complexity} complexity</span></p>
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-600 mt-1" />
                        </div>
                        {isSelected && (
                          <p className="text-slate-400 text-xs mt-2 ml-8">🤖 {t.aiFit}</p>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Floating summary */}
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 sticky bottom-4 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div><p className="text-yellow-400 text-sm">{totals.totalHours}h/week</p><p className="text-slate-500 text-xs">Selected</p></div>
                <div><p className="text-green-400 text-sm">~{totals.weeklyHoursSaved}h saved</p><p className="text-slate-500 text-xs">After automation</p></div>
                <div><p className="text-blue-400 text-sm">${totals.weeklySavings}/wk</p><p className="text-slate-500 text-xs">Estimated savings</p></div>
              </div>
              <button onClick={() => setStep('results')} disabled={totals.totalHours === 0}
                className={`px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                  totals.totalHours > 0 ? 'bg-yellow-600 hover:bg-yellow-700 text-black' : 'bg-slate-700 text-slate-500 cursor-not-allowed'
                }`}>
                <TrendingUp className="w-4 h-4" /> Get Full Report
              </button>
            </div>
          </div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center justify-between mb-8">
              <button onClick={() => setStep('select')} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
              <button onClick={() => { setStep('select'); setConfig(JSON.parse(JSON.stringify(departments))); }} className="text-sm text-slate-400 hover:text-yellow-400 transition-colors">Start Over</button>
            </div>

            {/* Summary */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 text-center">
                <Clock className="w-6 h-6 text-red-400 mx-auto mb-2" />
                <p className="text-3xl font-bold text-white">{totals.totalHours}h</p>
                <p className="text-slate-400 text-sm">Current weekly hours</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5 text-center">
                <Zap className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <p className="text-3xl font-bold text-green-400">{totals.weeklyHoursSaved}h</p>
                <p className="text-slate-400 text-sm">Hours saved/week with AI</p>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-5 text-center">
                <DollarSign className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <p className="text-3xl font-bold text-blue-400">${totals.annualSavings.toLocaleString()}</p>
                <p className="text-slate-400 text-sm">Annual savings potential</p>
              </div>
            </div>

            {/* Detailed list */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Automation Opportunities</h3>
              <div className="space-y-4">
                {totals.opportunities.map((opp, i) => (
                  <div key={i} className="p-4 bg-slate-700/30 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-white font-medium">{opp.dept}: {opp.task}</p>
                        <p className="text-slate-400 text-sm">Current: ~{opp.hours}h/week → AI saves ~{Math.round(opp.hours * 0.75)}h/week</p>
                        <p className="text-yellow-400 text-xs mt-1">🤖 {opp.aiFit}</p>
                      </div>
                      <p className="text-green-400 font-medium whitespace-nowrap">${Math.round(opp.hours * 0.75 * 35 * 52).toLocaleString()}/yr</p>
                    </div>
                    <Link href={opp.service.href} className="inline-flex items-center gap-1 mt-3 text-blue-400 hover:text-blue-300 text-sm">
                      View: {opp.service.name} <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-3">Let Zion Automate Your Workflows</h3>
              <p className="text-slate-400 mb-6">Our automation team builds custom AI solutions with guaranteed ROI.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Link href="/consultation" className="inline-flex items-center gap-2 px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-black rounded-lg font-medium transition-colors">
                  Get Free Automation Audit <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/services" className="inline-flex items-center gap-2 px-8 py-3 border border-slate-600 hover:border-slate-500 text-white rounded-lg font-medium transition-colors">Browse Services</Link>
              </div>
              <div className="text-slate-400 text-sm space-y-1">
                <p><Phone className="w-4 h-4 inline mr-1" /> +1 302 464 0950</p>
                <p><Mail className="w-4 h-4 inline mr-1" /> <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:underline">kleber@ziontechgroup.com</a></p>
                <p><MapPin className="w-4 h-4 inline mr-1" /> 364 E Main St STE 1008 Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        )}

        <div className="text-center mt-10 text-slate-500 text-xs">
          <p>Free analysis tool by Zion Tech Group — estimates based on typical AI automation efficiency gains of 40-80%</p>
        </div>
      </div>
    </div>
  );
}
