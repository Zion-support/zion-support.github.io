import React, { useState, useCallback } from 'react';

type Provider = 'gmail' | 'google-workspace' | 'outlook' | 'outlook-365' | 'custom';
type OrgSize = '1-10' | '11-50' | '51-200' | '201-1000' | '1000+';
type EmailVolume = 'low' | 'medium' | 'high' | 'enterprise';

interface StepItem {
  title: string;
  description: string;
  steps: string[];
}

const STEPS: StepItem[] = [
  {
    title: '1. Verify Your Domain',
    description: 'Add a TXT or MX record to your DNS settings to prove domain ownership to Google.',
    steps: [
      'Log in to your domain registrar (e.g., GoDaddy, Namecheap, Cloudflare).',
      'Navigate to DNS Management or DNS Records.',
      'Add the TXT verification record provided by Google Workspace admin console.',
      'Save and wait for DNS propagation (usually 5–45 minutes).',
    ],
  },
  {
    title: '2. Create MX Records',
    description: 'Point your domain email to Google Workspace mail servers.',
    steps: [
      'In your DNS settings, remove any existing MX records.',
      'Add the following MX records:',
      '  • ASPMX.L.GOOGLE.COM (Priority: 1)',
      '  • ALT1.ASPMX.L.GOOGLE.COM (Priority: 5)',
      '  • ALT2.ASPMX.L.GOOGLE.COM (Priority: 5)',
      '  • ALT3.ASPMX.L.GOOGLE.COM (Priority: 10)',
      '  • ALT4.ASPMX.L.GOOGLE.COM (Priority: 10)',
      'Wait up to 48 hours for full propagation.',
    ],
  },
  {
    title: '3. Set Up SPF Record',
    description: 'Configure SPF to prevent your emails from being marked as spam.',
    steps: [
      'Add a TXT record with the SPF value:',
      '  "v=spf1 include:_spf.google.com ~all"',
      'If you already have an SPF record, add include:_spf.google.com to it.',
      'Avoid having multiple SPF records — they will cause authentication failures.',
      'Use an SPF checker tool to validate your record.',
    ],
  },
  {
    title: '4. Configure DKIM',
    description: 'Enable DomainKeys Identified Mail for email authentication and integrity.',
    steps: [
      'In Google Admin Console, go to Apps → Google Workspace → Gmail → Authenticate email.',
      'Select your domain and click "Generate new record".',
      'Copy the DKIM TXT record and add it to your DNS settings.',
      'Wait for propagation, then click "Start authentication" in the admin console.',
    ],
  },
  {
    title: '5. Enable DMARC',
    description: 'Set up DMARC to protect your domain from spoofing and phishing attacks.',
    steps: [
      'Start with a monitoring policy (p=none) to collect reports without affecting mail flow:',
      '  "_dmarc.yourdomain.com TXT v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com"',
      'After monitoring for 2–4 weeks, upgrade to quarantine (p=quarantine).',
      'After another 2–4 weeks, upgrade to reject (p=reject).',
      'Configure aggregate (rua) and forensic (ruf) reporting addresses.',
    ],
  },
  {
    title: '6. Create User Accounts',
    description: 'Add users and set up groups for your organization in Google Workspace.',
    steps: [
      'In Admin Console, go to Directory → Users.',
      'Click "Add new user" and fill in the name, email, and password.',
      'For bulk uploads, use the CSV bulk upload feature.',
      'Create groups (Directory → Groups) for departments or teams.',
      'Set up organizational units for applying different policies per team.',
    ],
  },
  {
    title: '7. Configure Email Routing & Aliases',
    description: 'Set up email routing rules and aliases for efficient mail management.',
    steps: [
      'Go to Admin Console → Apps → Google Workspace → Gmail → Routing.',
      'Create routing rules for auto-forwarding, auto-reply, or content-based routing.',
      'Set up email aliases for roles (e.g., info@, support@, sales@).',
      'Configure catch-all addresses if needed.',
      'Enable or disable outbound gateway as needed.',
    ],
  },
  {
    title: '8. Set Up Mobile & Client Access',
    description: 'Configure mobile device management and email client settings.',
    steps: [
      'Enable mobile management in Admin Console → Security → Mobile.',
      'Configure IMAP/POP settings if users need legacy client access.',
      'Set up OAuth apps for third-party integrations.',
      'Enable Google Sync for mobile devices.',
    ],
  },
  {
    title: '9. Migrate Existing Email',
    description: 'Move existing emails from your old provider to Google Workspace.',
    steps: [
      'Use the Google Workspace Migration for Microsoft Exchange for bulk migration.',
      'Use IMAP migration for smaller setups or other IMAP providers.',
      'Set the old server to forward remaining mail after cutover.',
      'Update MX records to point to Google only after migration is complete.',
    ],
  },
  {
    title: '10. Security & Compliance',
    description: 'Finalize security settings, retention policies, and compliance controls.',
    steps: [
      'Enable 2-step verification in Security → 2-Step Verification.',
      'Configure Data Loss Prevention (DLP) rules for sensitive data.',
      'Set up email retention policies under Vault or Gmail settings.',
      'Enable audit logging and review activity reports.',
      'Configure content compliance rules for outbound email.',
    ],
  },
];

export default function GoogleWorkspaceSetup() {
  const [provider, setProvider] = useState<Provider>('google-workspace');
  const [orgSize, setOrgSize] = useState<OrgSize>('11-50');
  const [emailVolume, setEmailVolume] = useState<EmailVolume>('medium');
  const [expandedStep, setExpandedStep] = useState<number | null>(0);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const toggleFavorite = useCallback((stepIndex: number) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(stepIndex)) next.delete(stepIndex);
      else next.add(stepIndex);
      return next;
    });
  }, []);

  const toggleExpand = useCallback((index: number) => {
    setExpandedStep((prev) => (prev === index ? null : index));
  }, []);

  const resetAll = () => {
    setProvider('google-workspace');
    setOrgSize('11-50');
    setEmailVolume('medium');
    setExpandedStep(0);
    setFavorites(new Set());
  };

  const providerLabels: Record<Provider, string> = {
    gmail: 'Gmail (Free)',
    'google-workspace': 'Google Workspace',
    outlook: 'Outlook (Free)',
    'outlook-365': 'Microsoft 365',
    custom: 'Custom / Other',
  };

  const sizeLabels: Record<OrgSize, string> = {
    '1-10': '1–10 users',
    '11-50': '11–50 users',
    '51-200': '51–200 users',
    '201-1000': '201–1,000 users',
    '1000+': '1,000+ users',
  };

  const volumeLabels: Record<EmailVolume, string> = {
    low: 'Low (<100/day)',
    medium: 'Medium (100–1K/day)',
    high: 'High (1K–10K/day)',
    enterprise: 'Enterprise (10K+/day)',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-12">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="text-center mb-10">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg shadow-amber-500/20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.99.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Google Workspace Setup Guide</h1>
          <p className="mt-2 text-slate-400 max-w-xl mx-auto">Step-by-step guide to configure your Google Workspace with proper DNS, authentication, and security settings.</p>
        </div>

        {/* Configuration Options */}
        <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-3">
          <div className="rounded-xl border border-slate-700/60 bg-slate-900/50 p-4">
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Email Provider</label>
            <select
              value={provider}
              onChange={(e) => setProvider(e.target.value as Provider)}
              className="w-full rounded-lg border border-slate-600/70 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
            >
              {Object.entries(providerLabels).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
          </div>
          <div className="rounded-xl border border-slate-700/60 bg-slate-900/50 p-4">
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Organization Size</label>
            <select
              value={orgSize}
              onChange={(e) => setOrgSize(e.target.value as OrgSize)}
              className="w-full rounded-lg border border-slate-600/70 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
            >
              {Object.entries(sizeLabels).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
          </div>
          <div className="rounded-xl border border-slate-700/60 bg-slate-900/50 p-4">
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Email Volume</label>
            <select
              value={emailVolume}
              onChange={(e) => setEmailVolume(e.target.value as EmailVolume)}
              className="w-full rounded-lg border border-slate-600/70 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
            >
              {Object.entries(volumeLabels).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Checklist Summary */}
        <div className="rounded-2xl border border-amber-700/50 bg-amber-900/10 p-5 mb-8">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-amber-200">Setup Checklist</h3>
            <button
              onClick={resetAll}
              className="text-xs text-amber-400 hover:text-amber-300 transition"
            >
              Reset All
            </button>
          </div>
          <div className="space-y-2">
            {STEPS.map((step, i) => (
              <div key={i} className="rounded-xl border border-amber-900/40 bg-amber-950/30 overflow-hidden">
                <button
                  onClick={() => toggleExpand(i)}
                  className="flex w-full items-center justify-between p-4 text-left hover:bg-amber-500/10 transition"
                >
                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleFavorite(i); }}
                      className="text-amber-500 hover:text-amber-400 transition"
                    >
                      {favorites.has(i) ? '★' : '☆'}
                    </button>
                    <span className={`text-sm font-semibold ${expandedStep === i ? 'text-amber-200' : 'text-amber-300/80'}`}>
                      {step.title}
                    </span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 text-amber-500 transition-transform ${expandedStep === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedStep === i && (
                  <div className="px-4 pb-4">
                    <p className="text-xs text-amber-300/80 mb-2">{step.description}</p>
                    <ol className="space-y-1 text-xs text-amber-200/90 list-decimal pl-5">
                      {step.steps.map((s, j) => (
                        <li key={j} className="py-0.5">{s}</li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* DNS Quick Reference */}
        <div className="rounded-2xl border border-slate-700/60 bg-slate-900/50 p-6 mb-8">
          <h3 className="text-sm font-semibold text-slate-300 mb-3">DNS Records Quick Reference</h3>
          <div className="space-y-2 text-xs text-slate-400">
            <div className="grid grid-cols-4 gap-2 border-b border-slate-700/40 pb-2">
              <span className="font-semibold text-amber-400">Type</span>
              <span className="font-semibold text-amber-400">Host</span>
              <span className="font-semibold text-amber-400">Value</span>
              <span className="font-semibold text-amber-400">Priority</span>
            </div>
            {[
              ['MX', '@', 'ASPMX.L.GOOGLE.COM', '1'],
              ['MX', '@', 'ALT1.ASPMX.L.GOOGLE.COM', '5'],
              ['MX', '@', 'ALT2.ASPMX.L.GOOGLE.COM', '5'],
              ['MX', '@', 'ALT3.ASPMX.L.GOOGLE.COM', '10'],
              ['MX', '@', 'ALT4.ASPMX.L.GOOGLE.COM', '10'],
              ['TXT', '@', '"v=spf1 include:_spf.google.com ~all"', '—'],
              ['TXT', '_dmarc', '"v=DMARC1; p=none; rua=mailto:dmarc@..."', '—'],
            ].map(([type, host, value, pri]) => (
              <div key={`${type}-${host}`} className="grid grid-cols-4 gap-2 border-b border-slate-700/20 py-1">
                <span>{type}</span>
                <span className="font-mono">{host}</span>
                <span className="font-mono text-xs break-all">{value}</span>
                <span className="text-center">{pri}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pro Tips */}
        <div className="rounded-2xl border border-slate-700/60 bg-slate-900/30 p-6">
          <h3 className="text-sm font-semibold text-slate-300 mb-2">Pro Tips</h3>
          <ul className="space-y-1 text-xs text-slate-500">
            <li>• Start with p=none DMARC policy and monitor reports for 2–4 weeks before tightening.</li>
            <li>• Use Google&apos;s bulk upload CSV template for migrating 10+ users efficiently.</li>
            <li>• Enable S/MIME for encrypting sensitive outgoing emails.</li>
            <li>• Configure Gmail routing rules to auto-label and archive newsletters.</li>
            <li>• Set up email delegation for shared mailboxes (e.g., info@, support@).</li>
            <li>• All configuration is computed client-side — nothing is sent to any server.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}