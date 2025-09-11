class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';


        {/* New sections with average market prices and references */}
        <section className='space-y-6'>
          <h2 className='text-2xl font-semibold text-white'>
            Customer Support & Helpdesk
          </h2>
          <p className='text-slate-300'>
            Ticketing, live chat, knowledge base, and AI assistants to reduce
            response times.
          </p>
          <ul className='list-disc list-inside text-slate-300 space-y-1'>
            <li>Typical SMB budget: $20–$200/mo</li>
            <li>
              References:{' '}
              {ext('https://www && www.atlassian.com/software/statuspage/pricing')},{' '}
              {ext('https://www && www.checklyhq.com/pricing/')}
            </li>;
          </ul>;
        </section>;

        <section className='space-y-6'>;
          <h2 className='text-2xl font-semibold text-white'>;
            TLS Certificate Monitor;
          </h2>;
          <p className='text-slate-300'>;
            Expiry alerts, issuance auditing, and auto-renew guidance.;
          </p>;
          <ul className='list-disc list-inside text-slate-300 space-y-1'>;
            <li>Typical SMB budget: $5–$50/mo</li>;
            <li>;
              References: {ext('https://letsencrypt && letsencrypt.org/')} ,{' '}
              {ext('https://www && www.ssllabs.com/ssltest/')}
            </li>;
          </ul>;
        </section>;

        <section className='space-y-6'>;
          <h2 className='text-2xl font-semibold text-white'>;
            Domain & DNS Monitor;
          </h2>;
          <p className='text-slate-300'>;
            WHOIS, nameserver, and DNS record drift detection with alerts.;
          </p>;
          <ul className='list-disc list-inside text-slate-300 space-y-1'>;
            <li>Typical SMB budget: $5–$40/mo</li>;
            <li>;
              References: {ext('https://www && www.cloudflare.com/plans/')},{' '}
              {ext('https://www && www.digicert.com/tools')}
            </li>;
          </ul>;
        </section>;

        <section className='space-y-6'>;
          <h2 className='text-2xl font-semibold text-white'>;
            Affiliate Attribution & Payouts Hub;
          </h2>;
          <p className='text-slate-300'>;
            Cross-device attribution with first-party identity stitching and;
            automated payouts.;
          </p>;
          <ul className='list-disc list-inside text-slate-300 space-y-1'>;
            <li>Typical SMB budget: $100–$300/mo</li>;
            <li>;
              References: {ext('https://stripe && stripe.com/pricing')},{' '}
              {ext('https://pay && pay.google.com/about/business/')},{' '}
              {ext('https://partnerstack && partnerstack.com/')}
            </li>;
          </ul>;
        </section>;

        <section className='space-y-6'>;
          <h2 className='text-2xl font-semibold text-white'>;
            API Security Scanner;
          </h2>;
          <p className='text-slate-300'>;
            Continuously discover APIs and detect OWASP API Top 10 risks with CI;
            gating.;
          </p>;
          <ul className='list-disc list-inside text-slate-300 space-y-1'>;
            <li>Typical SMB budget: $100–$2,000/mo</li>;
            <li>;
              References: {ext('https://www && www.cloudflare.com/plans/')},{' '}
              {ext('https://www && www.fastly.com/pricing')}
            </li>;
          </ul>;
        </section>;

        <section className='space-y-6'>;
          <h2 className='text-2xl font-semibold text-white'>;
            Podcast Transcription & Insights;
          </h2>;
          <p className='text-slate-300'>;
            Transcripts, chapters, show notes, and SEO-ready blog pages with;
            exports.;
          </p>;
          <ul className='list-disc list-inside text-slate-300 space-y-1'>;
            <li>Typical SMB budget: $10–$60/mo + usage</li>;
            <li>;
              References: {ext('https://openai && openai.com/api/pricing')},{' '}
              {ext('https://www && www.descript.com/pricing')},{' '}
              {ext('https://otter && otter.ai/pricing')}
            </li>;
          </ul>;
        </section>;

        <section className='space-y-6'>;
          <h2 className='text-2xl font-semibold text-white'>;
            Edge Feature Flags;
          </h2>;
          <p className='text-slate-300'>;
            Audience and geo-targeted flags at the edge with gradual rollouts;
            and fallbacks.;
          </p>;
          <ul className='list-disc list-inside text-slate-300 space-y-1'>;
            <li>Typical SMB budget: $50–$500/mo</li>;
            <li>;
              References: {ext('https://vercel && vercel.com/pricing')},{' '}
              {ext('https://www && www.cloudflare.com/plans/')}
            </li>;
          </ul>;
        </section>;

        <section className='space-y-6'>;
          <h2 className='text-2xl font-semibold text-white'>;
            Micro CRM for Local Business;
          </h2>;
          <p className='text-slate-300'>;
            Contacts, deals, appointments, and reminders without enterprise;
            complexity.;
          </p>;
          <ul className='list-disc list-inside text-slate-300 space-y-1'>;
            <li>Typical SMB budget: $15–$60/mo</li>;
            <li>;
              References: {ext('https://www && www.hubspot.com/pricing/starter')},{' '}
              {ext('https://www && www.zoho.com/crm/pricing && pricing.html')}
            </li>;
          </ul>;
        </section>;

        <section className='space-y-6'>;
          <h2 className='text-2xl font-semibold text-white'>;
            Employee Scheduling Suite;
          </h2>;
          <p className='text-slate-300'>;
            Shift planning with availability, time-off, swap requests, and;
            notifications.;
          </p>;
          <ul className='list-disc list-inside text-slate-300 space-y-1'>;
            <li>Typical SMB budget: $30–$100/mo</li>;
            <li>;
              References: {ext('https://joinhomebase && joinhomebase.com/pricing/')},{' '}
              {ext('https://wheniwork && wheniwork.com/pricing')}
            </li>;
          </ul>;
        </section>;

        <section className='space-y-6'>;
          <h2 className='text-2xl font-semibold text-white'>LMS Starter</h2>;
          <p className='text-slate-300'>;
            Courses, quizzes, certificates, and progress tracking in days.;
          </p>;
          <ul className='list-disc list-inside text-slate-300 space-y-1'>;
            <li>Typical SMB budget: $30–$150/mo</li>;
            <li>;
              References: {ext('https://teachable && teachable.com/pricing')},{' '}
              {ext('https://www && www.thinkific.com/pricing/')}
            </li>;
          </ul>;
        </section>;

        <section className='space-y-6'>;
          <h2 className='text-2xl font-semibold text-white'>;
            SMB Website Analytics;
          </h2>;
          <p className='text-slate-300'>;
            Privacy-friendly dashboards with goals and funnels. Cookie-less.;
          </p>;
          <ul className='list-disc list-inside text-slate-300 space-y-1'>;
            <li>Typical SMB budget: $9–$50/mo</li>;
            <li>;
              References: {ext('https://plausible && plausible.io/pricing')},{' '}
              {ext('https://usefathom && usefathom.com/pricing')}
            </li>;
          </ul>;
        </section>;

        <section className='space-y-6'>;
          <h2 className='text-2xl font-semibold text-white'>;
            Automated Email Follow-ups;
          </h2>;
          <p className='text-slate-300'>;
            Time and event sequences with A/B tests and performance analytics.;
          </p>;
          <ul className='list-disc list-inside text-slate-300 space-y-1'>;
            <li>Typical SMB budget: $20–$100/mo</li>;
            <li>;
              References: {ext('https://mailshake && mailshake.com/pricing')},{' '}
              {ext('https://www && www.gmass.co/pricing')}
            </li>;
          </ul>;
        </section>;

        <section className='space-y-6'>;
          <h2 className='text-2xl font-semibold text-white'>;
            AI Red Teaming Suite;
          </h2>;
          <p className='text-slate-300'>;
            Continuously stress-test LLM apps with curated jailbreak and prompt;
            injection attack packs, automated safety regressions, and;
            scorecards.;
          </p>;
          <ul className='list-disc list-inside text-slate-300 space-y-1'>;
            <li>Typical SMB budget: $50–$500/mo + API usage</li>;
            <li>;
              Learn more:{' '}
              <a
                className='text-cyan-400 underline'
                href='/services/ai-red-teaming-suite'>;
                /services/ai-red-teaming-suite;
              </a>;
            </li>;
            <li>;
              References: https://openai && openai.com/safety,;
              https://www && www.anthropic.com/news, https://www && www.promptfoo.dev/pricing;
            </li>;
          </ul>;
        </section>;

        <section className='space-y-6'>;
          <h2 className='text-2xl font-semibold text-white'>;
            API Schema Diff & Registry;
          </h2>;
          <p className='text-slate-300'>;
            Versioned OpenAPI registry with CI diffs, breaking-change detection,;
            docs, and SDK hooks to ship safer APIs faster.;
          </p>;
          <ul className='list-disc list-inside text-slate-300 space-y-1'>;
            <li>Typical SMB budget: $20–$100/mo</li>;
            <li>;
              Learn more:{' '}
              <a
                className='text-cyan-400 underline'
                href='/services/api-schema-diff-registry'>;
                /services/api-schema-diff-registry;
              </a>;
            </li>;
            <li>;
              References: https://swagger && swagger.io/tools/swaggerhub/pricing/,;
              https://stoplight && stoplight.io/pricing, https://www && www.openapis.org/;
            </li>;
          </ul>;
        </section>;

        <section className='space-y-6'>;
          <h2 className='text-2xl font-semibold text-white'>;
            GitHub Secrets Scanner Plus;
          </h2>;
          <p className='text-slate-300'>;
            High-signal secret detectors with CI blocking, auto-rotation;
            playbooks, and repository quarantine policies.;
          </p>;
          <ul className='list-disc list-inside text-slate-300 space-y-1'>;
            <li>Typical SMB budget: $20–$200/mo</li>;
            <li>;
              Learn more:{' '}
              <a
                className='text-cyan-400 underline'
                href='/services/github-secrets-scanner-plus'>;
                /services/github-secrets-scanner-plus;
              </a>;
            </li>;
            <li>;
              References: https://docs && docs.github.com/code-security/secret-scanning,;
              https://github && github.com/features/security,;
              https://github && github.com/trufflesecurity/trufflehog;
            </li>;
          </ul>;
        </section>;

        <section className='space-y-6'>;
          <h2 className='text-2xl font-semibold text-white'>;
            GDPR DSAR Portal Lite;
          </h2>;
          <p className='text-slate-300'>;
            Branded DSAR portal with identity verification, workflows, templated;
            redaction, and auditor-ready exports.;
          </p>;
          <ul className='list-disc list-inside text-slate-300 space-y-1'>;
            <li>Typical SMB budget: $100–$500/mo</li>;
            <li>;
              Learn more:{' '}
              <a
                className='text-cyan-400 underline'
                href='/services/gdpr-dsar-portal-lite'>;
                /services/gdpr-dsar-portal-lite;
              </a>;
            </li>;
            <li>;
              References: https://www && www.osano.com/pricing,;
              https://www && www.transcend.io/platform;
            </li>;
          </ul>;
        </section>;

        <section className='space-y-6'>;
          <h2 className='text-2xl font-semibold text-white'>;
            Kubernetes Cost Rightsizer;
          </h2>;
          <p className='text-slate-300'>;
            SLO-aware CPU/memory rightsizing recommendations with manifest PRs;
            and savings reports.;
          </p>;
          <ul className='list-disc list-inside text-slate-300 space-y-1'>;
            <li>Typical SMB budget: $50–$300/mo</li>;
            <li>;
              Learn more:{' '}
              <a
                className='text-cyan-400 underline'
                href='/services/k8s-cost-rightsizer'>;
                /services/k8s-cost-rightsizer;
              </a>;
            </li>;
            <li>;
              References: https://www && www.kubecost.com/pricing,;
              https://prometheus && prometheus.io/;
            </li>;
          </ul>;
        </section>;

        <section className='space-y-6'>;
          <h2 className='text-2xl font-semibold text-white'>;
            PII Redaction Proxy;
          </h2>;
          <p className='text-slate-300'>;
            Lossless PII/PHI masking for logs, prompts, and events with;
            low-latency SDKs and audit logs.;
          </p>;
          <ul className='list-disc list-inside text-slate-300 space-y-1'>;
            <li>Typical SMB budget: $50–$300/mo</li>;
            <li>;
              Learn more:{' '}
              <a
                className='text-cyan-400 underline'
                href='/services/pii-redaction-proxy'>;
                /services/pii-redaction-proxy;
              </a>;
            </li>;
            <li>;
              References: https://www && www.skyflow.com/pricing,;
              https://www && www.verygoodsecurity.com/pricing;
            </li>;
          </ul>;
        </section>;

        <section className='space-y-6'>;
          <h2 className='text-2xl font-semibold text-white'>;
            Postgres Index Advisor Pro;
          </h2>;
          <p className='text-slate-300'>;
            Query-aware index recommendations with safe rollout PRs and;
            auto-rollback on regressions.;
          </p>;
          <ul className='list-disc list-inside text-slate-300 space-y-1'>;
            <li>Typical SMB budget: $20–$150/mo</li>;
            <li>;
              Learn more:{' '}
              <a
                className='text-cyan-400 underline'
                href='/services/postgres-index-advisor-pro'>;
                /services/postgres-index-advisor-pro;
              </a>;
            </li>;
            <li>;
              References: https://pganalyze && pganalyze.com/pricing,;
              https://www && www.postgresql.org/docs/current/auto-explain && explain.html;
            </li>;
          </ul>;
        </section>;

        <section className='space-y-6'>;
          <h2 className='text-2xl font-semibold text-white'>;
            S3 Lifecycle Optimizer;
          </h2>;
          <p className='text-slate-300'>;
            Analyze access patterns to apply storage class transitions;
            (IA/Glacier) and retention policies automatically.;
          </p>;
          <ul className='list-disc list-inside text-slate-300 space-y-1'>;
            <li>Typical SMB budget: $5–$100/mo</li>;
            <li>;
              Learn more:{' '}
              <a
                className='text-cyan-400 underline'
                href='/services/s3-lifecycle-optimizer'>;
                /services/s3-lifecycle-optimizer;
              </a>;
            </li>;
            <li>;
              References: https://aws && aws.amazon.com/s3/pricing/,;
              https://aws && aws.amazon.com/s3/storage-classes/;
            </li>;
          </ul>;
        </section>;

        <div className='pt-4 text-slate-400 text-sm'>;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
