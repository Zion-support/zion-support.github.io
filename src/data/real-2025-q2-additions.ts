export interface Real2025Q2Addition {
  id: string;
  name: string;
  tagline: string;
  price: string;
  features: string[];
}

export const real2025Q2Additions: Real2025Q2Addition[] = [
  {
    id: 'ai-meeting-notes',
    name: 'AI Meeting Notes & Action Items',
    tagline: 'Never miss decisions and follow‑ups again',
    price: '$29/mo+',
    features: [
      'Auto-transcription with speaker labels',
      'Decision and action item extraction',
      'Email and Slack follow‑ups',
      'Workspace search'
    ]
  },
  {
    id: 'uptime-sla-reporter',
    name: 'Uptime & SLA Reporter',
    tagline: 'Proactive reliability with customer‑facing transparency',
    price: '$19/mo+',
    features: [
      'Global checks and alerting',
      'SLA calculations per customer',
      'Incident timelines and labels',
      'Hosted status pages'
    ]
  }
];
