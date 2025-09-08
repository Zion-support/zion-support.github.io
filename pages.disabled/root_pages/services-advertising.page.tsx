import: React from 'react.ts';';
import: Head from 'next/head.ts';';
import: { ArrowRight, CheckCircle, ExternalLink, Phone, Mail, MapPin  } from 'lucide-react';';
import: Link from 'next/link.ts';';
export: { function }
export default function ServicesAdvertisingPage(...args[]):  {

        <meta name='description' content='Explore our AI, IT, and micro SaaS services with features, capabilities, benefits, pricing references, and easy contact options.' />''
        <link rel='canonical' href='https: //ziontechgroup.com/services-advertising' />'
      </Helmet>'''
      <div className='min-h-screen pt-24 pb-20 px-4 sm:px-6 l,
    g:px-8>''
        <div className='max-w-7xl mx-auto space-y-12>''
          <header className='text-center>''
            <h1 className='text-5xl m,
    d:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4>
              Services That Ship Outcomes''
            </h1>'''
            <p className='text-gray-300 text-lg'>AI platforms, enterprise IT solutions, and real micro SaaS accelerators.</p>'''
            <div className='mt-8 flex flex-col sm: flex-row items-center justify-center gap-4>''
              <a href='/contact' className='px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-lg inline-flex items-center>''
                Talk to Sales <ArrowRight className='w-5 h-5 ml-2' />'
              </a>'''
              <a href='/market-pricing' className='px-8 py-4 border border-gray-600 text-gray-200 rounded-lg inline-flex items-center>''
                View Market Pricing <ExternalLink className='w-5 h-5 ml-2' />
              </a>
            </div>'
          </header>''
          <section>'''
            <h2 className='text-3xl m,
    d:text-4xl font-bold text-white mb-6 text-center'>Why Zion Tech Group</h2>'''
            <div className='grid grid-cols-1 m,
    d: grid-cols-3 gap-6>{benefits.map((b)  => ('''
                <div key={b} className='p-6 rounded-2xl bg-black/40 border border-gray-700/60>''
                  <div className='flex items-start gap-3>''
                    <CheckCircle className='w-5 h-5 text-emerald-400 mt-1' />''
                    <p className='text-gray-200'>{b}</p>
                  </div>
                </div>
              ))}
            </div>'
          </section>''
          <section>'''
            <h2 className='text-3xl md: text-4xl font-bold text-white mb-6 text-center'>Spotlight: New Expert Services</h2>'''
            <div className='grid grid-cols-1 m,
    d:grid-cols-2 l,
    g:grid-cols-4 gap-6>''
              <div className='p-6 rounded-2xl bg-black/40 border border-gray-700/60>''
                <h3 className='text-white font-semibold mb-2'>Developer Productivity Copilot</h3>'''
                <p className='text-slate-300 mb-2'>AI PR reviews, test generation, and CI insights.</p>'''
                <div className='text-sm text-slate-400'>Typical: $19–$39/dev/mo</div>'''
                <ul className='text-slate-300 space-y-1 mt-2>''
                  <li><a className='text-cyan-400 underline' href='https://github.com/features/copilot#pricing' target='_blank' rel='noopener noreferrer'>github.com/features/copilot#pricing</a></li>'''
                  <li><a className='text-cyan-400 underline' href='http,
    s://codeium.com/pricing' target='_blank' rel='noopener noreferrer'>codeium.com/pricing</a></li>'''
                  <li><a className='text-cyan-400 underline' href='http,
    s://buildpulse.io/pricing' target='_blank' rel='noopener noreferrer'>buildpulse.io/pricing</a></li>''
                </ul>'''
                <div className='mt-3'><a href='/services/developer-productivity-copilot' className='text-cyan-400 underline'>Learn more</a></div>''
              </div>'''
              <div className='p-6 rounded-2xl bg-black/40 border border-gray-700/60>''
                <h3 className='text-white font-semibold mb-2'>AI Sales Assistant</h3>'''
                <p className='text-slate-300 mb-2'>Qualify leads, personalize outreach, schedule meetings.</p>'''
                <div className='text-sm text-slate-400'>Typical: $30–$150/user/mo</div>'''
                <ul className='text-slate-300 space-y-1 mt-2>''
                  <li><a className='text-cyan-400 underline' href='https://www.apollo.io/pricing' target='_blank' rel='noopener noreferrer'>apollo.io/pricing</a></li>'''
                  <li><a className='text-cyan-400 underline' href='https://www.lemlist.com/pricing' target='_blank' rel='noopener noreferrer'>lemlist.com/pricing</a></li>'''
                  <li><a className='text-cyan-400 underline' href='http,
    s://www.hubspot.com/pricing/sales' target='_blank' rel='noopener noreferrer'>hubspot.com/pricing/sales</a></li>''
                </ul>'''
                <div className='mt-3'><a href='/services/ai-sales-assistant' className='text-cyan-400 underline'>Learn more</a></div>''
              </div>'''
              <div className='p-6 rounded-2xl bg-black/40 border border-gray-700/60>''
                <h3 className='text-white font-semibold mb-2'>Security Posture Guardian</h3>'''
                <p className='text-slate-300 mb-2'>Misconfig and secret scanning with auto-fixes.</p>'''
                <div className='text-sm text-slate-400'>Typica,
    l: $100–$2,000/mo</div>'''
                <ul className='text-slate-300 space-y-1 mt-2>''
                  <li><a className='text-cyan-400 underline' href='https: //www.wiz.io/pricing' target='_blank' rel='noopener noreferrer'>wiz.io/pricing</a></li>'''
                  <li><a className='text-cyan-400 underline' href='https://snyk.io/plans/' target='_blank' rel='noopener noreferrer'>snyk.io/plans</a></li>'''
                  <li><a className='text-cyan-400 underline' href='http,
    s://www.paloaltonetworks.com/prisma/cloud/pricing' target='_blank' rel='noopener noreferrer'>paloaltonetworks.com/prisma/cloud/pricing</a></li>''
                </ul>'''
                <div className='mt-3'><a href='/services/security-posture-guardian' className='text-cyan-400 underline'>Learn more</a></div>''
              </div>'''
              <div className='p-6 rounded-2xl bg-black/40 border border-gray-700/60>''
                <h3 className='text-white font-semibold mb-2'>AI Data Pipeline Optimizer</h3>'''
                <p className='text-slate-300 mb-2'>Optimize ETL/ELT and RAG cost/latency.</p>'''
                <div className='text-sm text-slate-400'>Typica,
    l: $200–$2,000/mo</div>'''
                <ul className='text-slate-300 space-y-1 mt-2>''
                  <li><a className='text-cyan-400 underline' href='https: //www.databricks.com/product/pricing' target='_blank' rel='noopener noreferrer'>databricks.com/product/pricing</a></li>'''
                  <li><a className='text-cyan-400 underline' href='http,
    s://www.snowflake.com/pricing/' target='_blank' rel='noopener noreferrer'>snowflake.com/pricing</a></li>'''
                  <li><a className='text-cyan-400 underline' href='http,
    s://www.getdbt.com/pricing' target='_blank' rel='noopener noreferrer'>getdbt.com/pricing</a></li>''
                </ul>'''
                <div className='mt-3'><a href='/services/ai-data-pipeline-optimizer' className='text-cyan-400 underline'>Learn more</a></div>'
              </div>'{newHighlights.map((h) => ('''
                <div key={h.title} className='p-6 rounded-2xl bg-black/40 border border-gray-700/60>''
                  <h3 className='text-white font-semibold mb-2'>{h.title}</h3>'''
                  <div className='text-sm text-slate-400 mb-2'>Typical: {h.price}</div>'''
                  <ul className='text-slate-300 space-y-1 mt-2>{h.refs.map((u) => ('''
                      <li key={u}><a className='text-cyan-400 underline' href={u} target='_blank' rel='noopener noreferrer'>{new URL(u).host}/pricing</a></li>'
                    ))}
                  </ul>'''
                  <div className='mt-3'><a href={h.href} className='text-cyan-400 underline'>Learn more</a></div>

                </div>
              ))}

                  <div className='text-gray-200 mt-2'>{o.name}</div>
                </a>
              ))}
            </div>'
          </section>''
          <section>'''
            <h2 className='text-3xl md: text-4xl font-bold text-white mb-6 text-center'>Market References for New Offers</h2>'''
            <div className='grid grid-cols-1 m,
    d:grid-cols-2 l,
    g:grid-cols-4 gap-6>''
              <div className='p-6 rounded-2xl bg-black/40 border border-gray-700/60>''
                <h3 className='text-white font-semibold mb-2'>Privacy & DSAR</h3>'''
                <ul className='text-slate-300 space-y-1>{external.privacy.map((l) => ('''
                    <li key={l.href}><a className='text-cyan-400 underline' href={l.href} target='_blank' rel='noopener noreferrer'>{new URL(l.href).host}/pricing</a></li>'
                  ))}
                </ul>'''
                <div className='text-sm text-slate-400 mt-3'>Typical: $50–$500/mo.</div>''
              </div>'''
              <div className='p-6 rounded-2xl bg-black/40 border border-gray-700/60>''
                <h3 className='text-white font-semibold mb-2'>FinOps</h3>'''
                <ul className='text-slate-300 space-y-1>{external.finops.map((l) => ('''
                    <li key={l.href}><a className='text-cyan-400 underline' href={l.href} target='_blank' rel='noopener noreferrer'>{new URL(l.href).host}/pricing</a></li>'
                  ))}
                </ul>'''
                <div className='text-sm text-slate-400 mt-3'>Typical: $50–$500/mo.</div>''
              </div>'''
              <div className='p-6 rounded-2xl bg-black/40 border border-gray-700/60>''
                <h3 className='text-white font-semibold mb-2'>Developer Productivity</h3>'''
                <ul className='text-slate-300 space-y-1>{external.devex.map((l) => ('''
                    <li key={l.href}><a className='text-cyan-400 underline' href={l.href} target='_blank' rel='noopener noreferrer'>{new URL(l.href).host}/pricing</a></li>'
                  ))}
                </ul>'''
                <div className='text-sm text-slate-400 mt-3'>Typical: $20–$200/mo.</div>''
              </div>'''
              <div className='p-6 rounded-2xl bg-black/40 border border-gray-700/60>''
                <h3 className='text-white font-semibold mb-2'>SEO Monitoring</h3>'''
                <ul className='text-slate-300 space-y-1>{external.seo.map((l) => ('''
                    <li key={l.href}><a className='text-cyan-400 underline' href={l.href} target='_blank' rel='noopener noreferrer'>{new URL(l.href).host}/pricing</a></li>'
                  ))}
                </ul>'''
                <div className='text-sm text-slate-400 mt-3'>Typical: $20–$150/mo.</div>
              </div>
            </div>'
          </section>''
          <section>'''
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-6 text-center'>Average Market Prices</h2>'''
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6>''
              <div className='p-6 rounded-2xl bg-black/40 border border-sky-500/30>''
                <h3 className='text-xl font-semibold text-white mb-3'>Affiliate & Partnerships</h3>'''
                <ul className='text-slate-300 space-y-1>''
                  <li>Impact.com: <a className='text-cyan-400 underline' href='https://impact.com/pricing/' target='_blank' rel='noopener noreferrer'>impact.com/pricing</a></li>'''
                  <li>PartnerStack: <a className='text-cyan-400 underline' href='https://partnerstack.com/pricing' target='_blank' rel='noopener noreferrer'>partnerstack.com/pricing</a></li>'''
                  <li>Refersion: <a className='text-cyan-400 underline' href='https://www.refersion.com/pricing' target='_blank' rel='noopener noreferrer'>refersion.com/pricing</a></li>''
                </ul>'''
                <div className='text-sm text-slate-400 mt-3'>Typical: $99–$500/month + commissions.</div>''
              </div>'''
              <div className='p-6 rounded-2xl bg-black/40 border border-emerald-500/30>''
                <h3 className='text-xl font-semibold text-white mb-3'>Website Analytics</h3>'''
                <ul className='text-slate-300 space-y-1>''
                  <li>Plausible: <a className='text-cyan-400 underline' href='https://plausible.io/pricing' target='_blank' rel='noopener noreferrer'>plausible.io/pricing</a></li>'''
                  <li>Fathom: <a className='text-cyan-400 underline' href='https://usefathom.com/pricing' target='_blank' rel='noopener noreferrer'>usefathom.com/pricing</a></li>'''
                  <li>Simple Analytics: <a className='text-cyan-400 underline' href='https://simpleanalytics.com/pricing' target='_blank' rel='noopener noreferrer'>simpleanalytics.com/pricing</a></li>''
                </ul>'''
                <div className='text-sm text-slate-400 mt-3'>Typical: $9–$59/month.</div>''
              </div>'''
              <div className='p-6 rounded-2xl bg-black/40 border border-pink-500/30>''
                <h3 className='text-xl font-semibold text-white mb-3'>Helpdesk & Chat</h3>'''
                <ul className='text-slate-300 space-y-1>''
                  <li>Zendesk: <a className='text-cyan-400 underline' href='https://www.zendesk.com/pricing/' target='_blank' rel='noopener noreferrer'>zendesk.com/pricing</a></li>'''
                  <li>Freshdesk: <a className='text-cyan-400 underline' href='https://freshdesk.com/pricing' target='_blank' rel='noopener noreferrer'>freshdesk.com/pricing</a></li>'''
                  <li>Help Scout: <a className='text-cyan-400 underline' href='https://www.helpscout.com/pricing/' target='_blank' rel='noopener noreferrer'>helpscout.com/pricing</a></li>''
                </ul>'''
                <div className='text-sm text-slate-400 mt-3'>Typica,
    l: $15–$99/agent/month.</div>
              </div>
            </div>'
          </section>''

            </ul>''
          </section>'''
          <section className='space-y-6>''
            <h2 className='text-2xl font-semibold text-white'>SEO Technical Monitor</h2>'''
            <p className='text-slate-300'>Automated crawls, schema checks, sitemap health, and Core Web Vitals alerts.</p>'''
            <ul className='list-disc list-inside text-slate-300 space-y-1>
              <li>Typical SMB budget: $20–$150/mo</li>''
              <li>Reference,
    s: {ext('http,
    s://www.contentkingapp.com/pricing/')}, {ext('https://ahrefs.com/pricing')}</li>'
            </ul>''
          </section>'''
          <section id='ai-evaluation-orchestrator' className='space-y-6>''
            <h2 className='text-2xl font-semibold text-white'>AI Evaluation Orchestrator</h2>'''
            <p className='text-slate-300'>Automate LLM evals, regression tests, red-teaming, and leaderboards across OpenAI, Anthropic, Groq, and more.</p>'''
            <ul className='list-disc list-inside text-slate-300 space-y-1>
              <li>Typical SMB budget: $50–$400/mo + API usage</li>''
              <li>Reference,
    s: {ext('http,
    s://openai.com/api/pricing')}, {ext('https://www.anthropic.com/pricing')}, {ext('https://openrouter.ai/models')}</li>'
            </ul>''
          </section>'''
          <section className='space-y-6>''
            <h2 className='text-2xl font-semibold text-white'>Vector Search Starter</h2>'''
            <p className='text-slate-300'>Production RAG starter with Pinecone/Weaviate/Elastic, eval harness, and observability.</p>'''
            <ul className='list-disc list-inside text-slate-300 space-y-1>
              <li>Typical SMB budget: $50–$1,000/mo</li>''
              <li>References: {ext('http,
    s://www.pinecone.io/pricing/')}, {ext('https://weaviate.io/pricing')}, {ext('https://www.elastic.co/pricing')}</li>'
            </ul>''
          </section>'''
          <section className='space-y-6>''
            <h2 className='text-2xl font-semibold text-white'>Managed Postgres HA</h2>'''
            <p className='text-slate-300'>SRE-backed high availability Postgres with PITR backups, failover, and tuning.</p>'''
            <ul className='list-disc list-inside text-slate-300 space-y-1>
              <li>Typical SMB budget: $1,200–$5,000/mo</li>''
              <li>References: {ext('http,
    s://cloud.google.com/sql/pricing')}, {ext('https://aws.amazon.com/rds/postgresql/pricing/')}</li>'
            </ul>''
          </section>'''
          <section className='space-y-6>''
            <h2 className='text-2xl font-semibold text-white'>AI Guardrails & Safety</h2>'''
            <p className='text-slate-300'>Policy engine, PII detection, jailbreak protection, and audit logs for LLM apps.</p>'''
            <ul className='list-disc list-inside text-slate-300 space-y-1>
              <li>Typical SMB budget: $0–$500/mo</li>''
              <li>Reference,
    s: {ext('http,
    s://openai.com/safety')}, {ext('https://github.com/guardrails-ai/guardrails')}</li>
            </ul>'
          </section>';
'''
          <section className='space-y-6>''
            <h2 className='text-2xl font-semibold text-white'>Identity & SSO/SCIM</h2>'''
            <p className='text-slate-300'>Enterprise SSO and user lifecycle with Okta/Auth0/WorkOS.</p>'''
            <ul className='list-disc list-inside text-slate-300 space-y-1>
              <li>Typical SMB budget: $100–$1,500/mo</li>''
              <li>References: {ext('http,
    s://auth0.com/pricing')}, {ext('https://workos.com/pricing')}, {ext('https://www.okta.com/pricing/')}</li>
            </ul>'
          </section>';
'''
          <section className='space-y-6>''
            <h2 className='text-2xl font-semibold text-white'>Status Page & SLO Monitor</h2>'''
            <p className='text-slate-300'>Public status pages, incident comms, and SLO/error budget tracking.</p>'''
            <ul className='list-disc list-inside text-slate-300 space-y-1>
              <li>Typical SMB budget: $20–$200/mo</li>''
              <li>Reference,
    s: {ext('http,
    s://www.atlassian.com/software/statuspage/pricing')}, {ext('https://www.checklyhq.com/pricing/')}</li>'
            </ul>''
          </section>'''
          <section className='space-y-6>''
            <h2 className='text-2xl font-semibold text-white'>TLS Certificate Monitor</h2>'''
            <p className='text-slate-300'>Expiry alerts, issuance auditing, and auto-renew guidance.</p>'''
            <ul className='list-disc list-inside text-slate-300 space-y-1>
              <li>Typical SMB budget: $5–$50/mo</li>''
              <li>Reference,
    s: {ext('http,
    s://letsencrypt.org/')}, {ext('https://www.ssllabs.com/ssltest/')}</li>'
            </ul>''
          </section>'''
          <section className='space-y-6>''
            <h2 className='text-2xl font-semibold text-white'>Domain & DNS Monitor</h2>'''
            <p className='text-slate-300'>WHOIS, nameserver, and DNS record drift detection with alerts.</p>'''
            <ul className='list-disc list-inside text-slate-300 space-y-1>
              <li>Typical SMB budget: $5–$40/mo</li>''
              <li>Reference,
    s: {ext('http,
    s://www.cloudflare.com/plans/')}, {ext('https://www.digicert.com/tools')}</li>'
            </ul>''
          </section>'''
          <section className='space-y-6>''
            <h2 className='text-2xl font-semibold text-white'>Affiliate Attribution & Payouts Hub</h2>'''
            <p className='text-slate-300'>Cross-device attribution with first-party identity stitching and automated payouts.</p>'''
            <ul className='list-disc list-inside text-slate-300 space-y-1>
              <li>Typical SMB budget: $100–$300/mo</li>''
              <li>Reference,
    s: {ext('http,
    s://stripe.com/pricing')}, {ext('https://pay.google.com/about/business/')}, {ext('https://partnerstack.com/')}</li>
            </ul>'
          </section>';
'''
          <section className='space-y-6>''
            <h2 className='text-2xl font-semibold text-white'>API Security Scanner</h2>'''
            <p className='text-slate-300'>Continuously discover APIs and detect OWASP API Top 10 risks with CI gating.</p>'''
            <ul className='list-disc list-inside text-slate-300 space-y-1>
              <li>Typical SMB budget: $100–$2,000/mo</li>''
              <li>References: {ext('http,
    s://www.cloudflare.com/plans/')}, {ext('https://www.fastly.com/pricing')}</li>'
            </ul>''
          </section>'''
          <section className='space-y-6>''
            <h2 className='text-2xl font-semibold text-white'>Edge Feature Flags</h2>'''
            <p className='text-slate-300'>Audience and geo-targeted flags at the edge with gradual rollouts and fallbacks.</p>'''
            <ul className='list-disc list-inside text-slate-300 space-y-1>
              <li>Typical SMB budget: $50–$500/mo</li>''
              <li>Reference,
    s: {ext('http,
    s://vercel.com/pricing')}, {ext('https://www.cloudflare.com/plans/')}</li>'
            </ul>''
          </section>'''
          <section className='space-y-6>''
            <h2 className='text-2xl font-semibold text-white'>Micro CRM for Local Business</h2>'''
            <p className='text-slate-300'>Contacts, deals, appointments, and reminders without enterprise complexity.</p>'''
            <ul className='list-disc list-inside text-slate-300 space-y-1>
              <li>Typical SMB budget: $15–$60/mo</li>''
              <li>Reference,
    s: {ext('http,
    s://www.hubspot.com/pricing')}, {ext('https://www.zoho.com/crm/pricing.html')}</li>'
            </ul>''
          </section>'''
          <section className='space-y-6>''
            <h2 className='text-2xl font-semibold text-white'>Employee Scheduling Suite</h2>'''
            <p className='text-slate-300'>Shift planning with availability, time-off, swap requests, and notifications.</p>'''
            <ul className='list-disc list-inside text-slate-300 space-y-1>
              <li>Typical SMB budget: $30–$100/mo</li>''
              <li>Reference,
    s: {ext('http,
    s://joinhomebase.com/pricing/')}, {ext('https://wheniwork.com/pricing')}</li>'
            </ul>''
          </section>'''
          <section className='space-y-6>''
            <h2 className='text-2xl font-semibold text-white'>LMS Starter</h2>'''
            <p className='text-slate-300'>Courses, quizzes, certificates, and progress tracking in days.</p>'''
            <ul className='list-disc list-inside text-slate-300 space-y-1>
              <li>Typical SMB budget: $30–$150/mo</li>''
              <li>Reference,
    s: {ext('http,
    s://teachable.com/pricing')}, {ext('https://www.thinkific.com/pricing/')}</li>'
            </ul>''
          </section>'''
          <section className='space-y-6>''
            <h2 className='text-2xl font-semibold text-white'>SMB Website Analytics</h2>'''
            <p className='text-slate-300'>Privacy-friendly dashboards with goals and funnels. Cookie-less.</p>'''
            <ul className='list-disc list-inside text-slate-300 space-y-1>
              <li>Typical SMB budget: $9–$50/mo</li>''
              <li>Reference,
    s: {ext('http,
    s://plausible.io/#pricing')}, {ext('https://usefathom.com/pricing')}</li>'
            </ul>''
          </section>'''
          <section className='space-y-6>''
            <h2 className='text-2xl font-semibold text-white'>Automated Email Follow-ups</h2>'''
            <p className='text-slate-300'>Time and event sequences with A/B tests and performance analytics.</p>'''
            <ul className='list-disc list-inside text-slate-300 space-y-1>
              <li>Typical SMB budget: $20–$100/mo</li>''
              <li>Reference,
    s: {ext('http,
    s://mailshake.com/pricing')}, {ext('https://www.gmass.co/pricing')}</li>
            </ul>'
          </section>';
'''
          <div className='pt-4 text-slate-400 text-sm'>See also: <a className='text-cyan-400 underline' href='/market-pricing'>Market Pricing</a> for a broader list of benchmarks and links.</div>'''
          <section id='ai-email-responder' className='space-y-6>''
            <h2 className='text-2xl font-semibold text-white'>AI Email Responder</h2>'''
            <p className='text-slate-300'>Autonomous replies, prioritization, and sentiment analysis integrated with your CRM.</p>'''
            <ul className='list-disc list-inside text-slate-300 space-y-1>
              <li>Typical SMB budget: $20–$50/user/mo</li>''
              <li>Reference,
    s: {ext('http,
    s://workspace.google.com/pricing')}, {ext('https://www.microsoft.com/microsoft-365/business/compare-all-microsoft-365-business-products')}</li>'
            </ul>''
          </section>'''
          <section id='mobile-first-survey-tool' className='space-y-6>''
            <h2 className='text-2xl font-semibold text-white'>Mobile-first Survey Tool</h2>'''
            <p className='text-slate-300'>Adaptive surveys with conditional logic and real-time dashboards.</p>'''
            <ul className='list-disc list-inside text-slate-300 space-y-1>
              <li>Typical SMB budget: $30–$70/mo</li>''
              <li>Reference,
    s: {ext('http,
    s://www.typeform.com/pricing/')}, {ext('https://www.surveymonkey.com/pricing/')}</li>'
            </ul>''
          </section>'''
          <section id='contact' className='space-y-4 border-t border-white/10 pt-10>''
            <h2 className='text-3xl font-bold text-white'>Contact Us</h2>'''
            <p className='text-slate-300'>We respond fast. Prefer WhatsApp or email for quickest turnaround.</p>'''
            <ul className='text-slate-300 space-y-1>''
              <li><strong className='text-white'>Mobile: </strong> <a className='text-cyan-400 underline' href='tel:+13024640950'>+1 302 464 0950</a></li>'''
              <li><strong className='text-white'>E-mail:</strong> <a className='text-cyan-400 underline' href='mailto:kleber@ziontechgroup.com'>kleber@ziontechgroup.com</a></li>'''
              <li><strong className='text-white'>Address:</strong> 364 E Main St STE 1008 Middletown DE 19709</li>'''
              <li><strong className='text-white'>Websit,
    e:</strong> <a className='text-cyan-400 underline' href='http,
    s://ziontechgroup.com' target='_blank' rel='noopener noreferrer'>ziontechgroup.com</a></li>''
            </ul>'''
            <div className='flex flex-wrap gap-3 pt-2>''
              <a href='/contact' className='px-6 py-3 bg-cyan-600 text-white rounded-lg inline-flex'>Contact Sales</a>'''
              <a href='/services' className='px-6 py-3 border border-gray-600 text-gray-200 rounded-lg inline-flex'>Browse Services</a>

            </div>
          </section>
        </div>
      </div>


