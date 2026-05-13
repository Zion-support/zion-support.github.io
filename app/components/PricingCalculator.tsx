'use client';

import React, { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';

// ─── Service Definitions ───────────────────────────────────────────────────────

const AI_SERVICES = [
  {
    id: 'ai-automation' as const,
    name: 'AI Process Automation',
    basePrice: 199,
    description: 'Workflow automation, document processing, and task scheduling',
    category: 'AI' as const,
  },
  {
    id: 'ai-analytics' as const,
    name: 'AI Analytics & Business Intelligence',
    basePrice: 299,
    description: 'Predictive analytics, dashboards, and automated reporting',
    category: 'AI' as const,
  },
  {
    id: 'ai-customer-support' as const,
    name: 'AI Customer Support',
    basePrice: 499,
    description: '24/7 chatbot, ticket routing, and sentiment analysis',
    category: 'AI' as const,
  },
  {
    id: 'ai-content-generation' as const,
    name: 'AI Content Generation',
    basePrice: 149,
    description: 'Blog posts, social media, ad copy, and email campaigns',
    category: 'AI' as const,
  },
  {
    id: 'ai-sales-intelligence' as const,
    name: 'AI Sales Intelligence',
    basePrice: 399,
    description: 'Lead scoring, pipeline forecasting, and deal insights',
    category: 'AI' as const,
  },
  {
    id: 'ai-fraud-detection' as const,
    name: 'AI Fraud Detection',
    basePrice: 599,
    description: 'Real-time anomaly detection and AML/KYC screening',
    category: 'AI' as const,
  },
  {
    id: 'ai-voice-assistant' as const,
    name: 'AI Voice Assistant',
    basePrice: 349,
    description: 'Voice AI with 50+ languages and CRM integration',
    category: 'AI' as const,
  },
  {
    id: 'ai-email-marketing' as const,
    name: 'AI Email Marketing',
    basePrice: 199,
    description: 'Smart campaigns, send-time optimization, and segmentation',
    category: 'AI' as const,
  },
  {
    id: 'ai-video-analytics' as const,
    name: 'AI Video Analytics',
    basePrice: 549,
    description: 'Object detection, people counting, and behavioral analysis',
    category: 'AI' as const,
  },
  {
    id: 'ai-compliance' as const,
    name: 'AI Compliance & Regulatory',
    basePrice: 449,
    description: 'Automated monitoring, risk scoring, and audit trails (GDPR/HIPAA/SOC 2)',
    category: 'AI' as const,
  },
  {
    id: 'ai-hr-assistant' as const,
    name: 'AI HR Assistant',
    basePrice: 299,
    description: 'Resume screening, onboarding chatbot, and engagement tracking',
    category: 'AI' as const,
  },
  {
    id: 'ai-supply-chain' as const,
    name: 'AI Supply Chain Optimization',
    basePrice: 449,
    description: 'Demand forecasting, inventory optimization, and logistics routing',
    category: 'AI' as const,
  },
] as const;

const IT_SERVICES = [
  {
    id: 'cloud-migration' as const,
    name: 'Cloud Migration & Modernization',
    basePrice: 1999,
    description: 'Zero-downtime migration to AWS, Azure, or GCP with IaC automation',
    category: 'IT' as const,
  },
  {
    id: 'cybersecurity' as const,
    name: 'Cybersecurity & Penetration Testing',
    basePrice: 2499,
    description: 'Vulnerability scanning, pen testing, incident response, and compliance audits',
    category: 'IT' as const,
  },
  {
    id: 'data-engineering' as const,
    name: 'Data Engineering & ETL Pipelines',
    basePrice: 2999,
    description: 'ETL/ELT workflows, data lakes, real-time stream processing',
    category: 'IT' as const,
  },
  {
    id: 'devops-cicd' as const,
    name: 'DevOps & CI/CD Automation',
    basePrice: 1999,
    description: 'CI/CD pipelines, Kubernetes orchestration, GitOps, and SRE',
    category: 'IT' as const,
  },
  {
    id: 'saas-development' as const,
    name: 'SaaS Product Development',
    basePrice: 4999,
    description: 'Full-stack SaaS — MVP, scaling, billing, and analytics built-in',
    category: 'IT' as const,
  },
  {
    id: 'api-integration' as const,
    name: 'API Development & Integration',
    basePrice: 1499,
    description: 'REST/GraphQL APIs, webhooks, gateway, and OpenAPI documentation',
    category: 'IT' as const,
  },
  {
    id: 'database-optimization' as const,
    name: 'Database Optimization & Management',
    basePrice: 1499,
    description: 'Query tuning, HA clustering, automated backups for PostgreSQL, MySQL, MongoDB',
    category: 'IT' as const,
  },
  {
    id: 'monitoring-observability' as const,
    name: 'Monitoring & Observability',
    basePrice: 999,
    description: 'Real-time dashboards, alerting, log aggregation, and distributed tracing',
    category: 'IT' as const,
  },
  {
    id: 'it-consulting' as const,
    name: 'IT Strategy & Digital Transformation',
    basePrice: 2499,
    description: 'CTO-as-a-service, tech stack evaluation, and transformation roadmaps',
    category: 'IT' as const,
  },
] as const;

const ALL_SERVICES = [...AI_SERVICES, ...IT_SERVICES];

type ServiceId = (typeof ALL_SERVICES)[number]['id'];
type Category = 'AI' | 'IT';

interface CalculatedService {
  id: ServiceId;
  name: string;
  description: string;
  category: Category;
  basePrice: number;
  adjustedPrice: number;
  teamMultiplier: number;
}

// ─── Pricing Logic ─────────────────────────────────────────────────────────────

function calculateAdjustedPrice(
  basePrice: number,
  teamSize: number,
  supportTier: string
): number {
  // Team size multiplier: scales sub-linearly (economies of scale)
  let teamMultiplier: number;
  if (teamSize <= 5) {
    teamMultiplier = 1.0;
  } else if (teamSize <= 15) {
    teamMultiplier = 1.0 + (teamSize - 5) * 0.05; // +5% per extra person up to 15
  } else if (teamSize <= 50) {
    teamMultiplier = 1.5 + (teamSize - 15) * 0.02; // +2% per extra person up to 50
  } else {
    teamMultiplier = 2.1 + Math.log2(teamSize / 50) * 0.3; // logarithmic beyond 50
  }

  // Support tier multiplier
  const supportMultiplier: Record<string, number> = {
    basic: 1.0,
    standard: 1.3,
    premium: 1.7,
    enterprise: 2.2,
  };

  const supportMult = supportMultiplier[supportTier] || 1.0;

  // Monthly price = base * teamMultiplier * supportMultiplier
  return Math.round(basePrice * teamMultiplier * supportMult);
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function PricingCalculator() {
  const [teamSize, setTeamSize] = useState(10);
  const [supportTier, setSupportTier] = useState<'basic' | 'standard' | 'premium' | 'enterprise'>('standard');
  const [selectedAICategories, setSelectedAICategories] = useState<string[]>([]);
  const [selectedITCategories, setSelectedITCategories] = useState<string[]>([]);
  const [isMonthly, setIsMonthly] = useState(true);
  const [expandedService, setExpandedService] = useState<ServiceId | null>(null);

  // Derived: selected services with calculated pricing
  const calculatedServices = useMemo(() => {
    const selectedIds = new Set([...selectedAICategories, ...selectedITCategories]);
    if (selectedIds.size === 0) return [];

    return ALL_SERVICES.filter((s) => selectedIds.has(s.id)).map((service) => {
      const adjustedPrice = calculateAdjustedPrice(service.basePrice, teamSize, supportTier);
      const teamMultiplier = teamSize <= 5 ? 1.0 : teamSize <= 15 ? 1.0 + (teamSize - 5) * 0.05 : teamSize <= 50 ? 1.5 + (teamSize - 15) * 0.02 : 2.1 + Math.log2(teamSize / 50) * 0.3;
      return {
        ...service,
        adjustedPrice,
        teamMultiplier: Math.round(teamMultiplier * 100) / 100,
      };
    });
  }, [selectedAICategories, selectedITCategories, teamSize, supportTier]);

  const totals = useMemo(() => {
    if (calculatedServices.length === 0) return { monthly: 0, annual: 0, savings: 0 };
    const monthly = calculatedServices.reduce((sum, s) => sum + s.adjustedPrice, 0);
    const annual = monthly * 12;
    const savings = Math.round(annual * 0.15); // 15% annual discount
    return { monthly, annual, savings: annual - savings };
  }, [calculatedServices]);

  const handleToggleAI = useCallback(
    (id: string) => {
      setSelectedAICategories((prev) =>
        prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
      );
    },
    []
  );

  const handleToggleIT = useCallback(
    (id: string) => {
      setSelectedITCategories((prev) =>
        prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
      );
    },
    []
  );

  const handleReset = useCallback(() => {
    setSelectedAICategories([]);
    setSelectedITCategories([]);
    setTeamSize(10);
    setSupportTier('standard');
    setIsMonthly(true);
    setExpandedService(null);
  }, []);

  // Helper to render service row
  const renderServiceRow = (service: typeof ALL_SERVICES[number]) => {
    const isSelected = [...selectedAICategories, ...selectedITCategories].includes(service.id);
    const calculated = calculatedServices.find((s) => s.id === service.id);
    const isExpanded = expandedService === service.id;

    return (
      <div
        key={service.id}
        className={`rounded-xl border transition-all duration-200 ${
          isSelected
            ? 'border-purple-500/50 bg-slate-900/60 shadow-lg shadow-purple-500/10'
            : 'border-slate-700/50 bg-slate-900/40 hover:border-slate-600'
        }`}
      >
        <button
          onClick={() => {
            if (service.category === 'AI') handleToggleAI(service.id);
            else handleToggleIT(service.id);
          }}
          className="w-full px-5 py-4 text-left flex items-center justify-between gap-4"
          aria-pressed={isSelected}
          aria-label={`${isSelected ? 'Deselect' : 'Select'} ${service.name}`}
        >
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div
              className={`flex-shrink-0 w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                isSelected
                  ? 'bg-purple-600 border-purple-500'
                  : 'border-slate-600 bg-slate-800'
              }`}
            >
              {isSelected && (
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold text-white truncate">{service.name}</div>
              <div className="text-xs text-slate-400 truncate">{service.description}</div>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            {calculated && (
              <span className="text-sm font-bold text-purple-300 whitespace-nowrap">
                ${calculated.adjustedPrice.toLocaleString()}/mo
              </span>
            )}
            <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
              {service.category}
            </span>
            <svg
              className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        {/* Expandable details */}
        {isExpanded && (
          <div className="px-5 pb-4 text-sm text-slate-300 border-t border-slate-700/50 pt-3">
            <ul className="space-y-1">
              {service.category === 'AI' ? (
                <>
                  <li>✅ Pre-trained models included</li>
                  <li>✅ Custom fine-tuning available</li>
                  <li>✅ API access with rate limits</li>
                  <li>✅ Monthly usage analytics</li>
                  <li>✅ {service.name.includes('Compliance') || service.name.includes('Fraud') ? 'Regulatory compliance documentation' : 'Dedicated Slack support channel'}</li>
                </>
              ) : (
                <>
                  <li>✅ Infrastructure provisioning included</li>
                  <li>✅ Architecture review & design</li>
                  <li>✅ Deployment & CI/CD setup</li>
                  <li>✅ Monitoring & alerting dashboards</li>
                  <li>✅ Knowledge transfer & documentation</li>
                </>
              )}
            </ul>
            <div className="mt-3 text-xs text-slate-500">
              Base price: ${service.basePrice}/mo · Team multiplier: ×{Math.round(
                teamSize <= 5 ? 1.0 : teamSize <= 15 ? 1.0 + (teamSize - 5) * 0.05 : teamSize <= 50 ? 1.5 + (teamSize - 15) * 0.02 : 2.1 + Math.log2(teamSize / 50) * 0.3
              )}{' '}
              · Support tier: {supportTier}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <main className="relative container-page pb-24 pt-8" id="main-content">
      {/* Controls Bar */}
      <section className="mb-10 rounded-3xl border border-slate-700/70 bg-slate-900/80 p-6 sm:p-8 backdrop-blur-sm">
        <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
          <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          Configure Your Estimate
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Team Size */}
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Team Size: <span className="text-purple-400 font-bold">{teamSize}</span>
            </label>
            <input
              type="range"
              min="1"
              max="200"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider-thumb"
              aria-label="Team size"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-1">
              <span>1 person</span>
              <span>200+ people</span>
            </div>
          </div>

          {/* Support Tier */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Support Level</label>
            <select
              value={supportTier}
              onChange={(e) => setSupportTier(e.target.value as any)}
              className="w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2.5 text-sm text-slate-100 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/30"
              aria-label="Support tier"
            >
              <option value="basic">Basic ($0/mo)</option>
              <option value="standard">Standard (+30%)</option>
              <option value="premium">Premium (+70%)</option>
              <option value="enterprise">Enterprise (+120%)</option>
            </select>
          </div>

          {/* Billing Cycle */}
          <div className="flex items-end">
            <div className="w-full">
              <label className="block text-sm font-medium text-slate-300 mb-2">Billing Cycle</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setIsMonthly(true)}
                  className={`rounded-lg py-2.5 text-sm font-semibold transition ${
                    isMonthly
                      ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/20'
                      : 'bg-slate-800 text-slate-300 border border-slate-600'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsMonthly(false)}
                  className={`rounded-lg py-2.5 text-sm font-semibold transition ${
                    !isMonthly
                      ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/20'
                      : 'bg-slate-800 text-slate-300 border border-slate-600'
                  } flex items-center justify-center gap-1`}
                >
                  Annual
                  <span className="text-[10px] bg-green-500/80 text-white px-1.5 py-0.5 rounded font-medium">
                    -15%
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Selection */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold text-white">Select Services</h2>
            <p className="text-sm text-slate-400 mt-1">Click to include/exclude services in your estimate</p>
          </div>
          <button
            onClick={handleReset}
            className="text-sm text-purple-400 hover:text-purple-300 transition font-medium flex items-center gap-1"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            Reset All
          </button>
        </div>

        {/* AI Services */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-purple-300 mb-3 flex items-center gap-2">
            <span className="text-base">🤖</span> AI Services ({selectedAICategories.length} selected)
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {AI_SERVICES.map(renderServiceRow)}
          </div>
        </div>

        {/* IT Services */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300 mb-3 flex items-center gap-2">
            <span className="text-base">⚙️</span> IT & Cloud Services ({selectedITCategories.length} selected)
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {IT_SERVICES.map(renderServiceRow)}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      {calculatedServices.length > 0 && (
        <section className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-700/70 bg-slate-950/95 backdrop-blur-xl shadow-2xl shadow-purple-900/10">
          <div className="container-page mx-auto flex flex-col items-center justify-between gap-4 py-4 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="text-sm text-slate-400">
                {calculatedServices.length} service{calculatedServices.length !== 1 ? 's' : ''} selected · {teamSize} team {teamSize === 1 ? 'member' : 'members'}
              </p>
              <p className="text-lg font-bold text-white mt-1">
                {isMonthly ? (
                  <>
                    <span className="text-2xl">${totals.monthly.toLocaleString()}</span>
                    <span className="text-sm text-slate-400 font-normal">/month</span>
                  </>
                ) : (
                  <>
                    <span className="text-2xl">${totals.savings.toLocaleString()}</span>
                    <span className="text-sm text-slate-400 font-normal">/year</span>
                    <span className="text-xs text-green-400 ml-2 font-medium">
                      (save ${(totals.annual - totals.savings).toLocaleString()} vs monthly)
                    </span>
                  </>
                )}
              </p>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <Link
                href="/contact"
                className="flex-1 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:from-purple-500 hover:to-pink-500"
                data-cta-event="cta_primary"
                data-cta-label="calculator_get_quote"
              >
                Get Custom Quote
              </Link>
              <button
                onClick={() => {
                  const text = `Service Estimate from Zion Tech Group\n\nTeam: ${teamSize} members\nSupport: ${supportTier}\nBilling: ${isMonthly ? 'Monthly' : 'Annual'}\nServices: ${calculatedServices.map((s) => `${s.name}: $${s.adjustedPrice}/mo`).join(', ')}\n\n${isMonthly ? `Monthly Total: $${totals.monthly.toLocaleString()}` : `Annual Total: $${totals.savings.toLocaleString()} (save $${(totals.annual - totals.savings).toLocaleString()})`}\n\nContact: +1 302 464 0950 | commercial@ziontechgroup.com`;
                  navigator.clipboard.writeText(text).then(() => {
                    const btn = document.activeElement as HTMLElement;
                    const original = btn.textContent;
                    if (original) {
                      btn.textContent = '✓ Copied!';
                      setTimeout(() => (btn.textContent = original), 2000);
                    }
                  });
                }}
                className="flex-1 rounded-xl border border-slate-600 bg-slate-900/70 px-6 py-3 text-center text-sm font-semibold text-slate-200 transition hover:border-purple-400 hover:bg-slate-800"
              >
                📋 Copy Estimate
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Empty state */}
      {calculatedServices.length === 0 && (
        <div className="mt-20 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-900/60 border border-slate-700/50 mb-6">
            <svg className="w-10 h-10 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
          </div>
          <h3 className="text-lg font-semibold text-slate-400">No services selected yet</h3>
          <p className="text-sm text-slate-500 mt-2">Browse the services above and click to add them to your estimate</p>
        </div>
      )}
    </main>
  );
}