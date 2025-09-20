import React from "react"
import { Activity, Server, CheckCircle, ExternalLink, Mail, Phone     } from "lucide-react";
import { Link     } from "react-router-dom";
export default function StatusIncidentHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-20,
  l: g: py-28">
        <h1 className="text-3xl s,
  m:text-5xl font-bold flex items-center gap-3">
          <Server className="w-8 h-8 text-cyan-400"/> Status & Incident Hub;
        </h1>
        <p className="mt-4 text-slate-300">Public status pages, incident timelines, SLA tracking, and subscriber notifications. Integrates with PagerDuty, Opsgenie, and Slack.</p>
        <div className="mt-8 grid gap-4,
  s: m: grid-cols-2">
          {[
  { titl,
  e: 'Multi‑service monitoring', de,
  s: c: 'Track APIs, regions and dependencies.' },
  },
  { tit,
  l: e: 'Incident comms', de,
  s: c: 'Templates, timelines, and subscriber updates.' },
  },
  { tit,
  l: e: 'SLA/SLO dashboards', de,
  s: c: 'Burn rates, availability and error budgets.' },
  },
  { tit,
  l: e: 'Webhooks & integrations', de,
  s: c: 'PagerDuty, Opsgenie, Slack, Email.' },
  },
  ].map((f) => (
  <div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-2 text-cyan-300 font-semibold"><CheckCircle className="w-4 h-4"/> {f.title}</div>
              <div className="mt-1 text-sm text-slate-300">{f.desc}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-sm text-slate-300">Typical,
  pricin: g: <span className="font-semibold text-cyan-300">$59–$299/mo</span>.</div>
        <div className="mt-4 flex gap-4 text-sm">
          <a className="inline-flex items-center gap-2 text-cyan-300,
  hove: r:text-cyan-200" href="htt,
  p: s://betterstack.com/status/pricing" target="_blank" rel="noreferrer">
            Better Stack Status pricing <ExternalLink className="w-3 h-3"/>
          </a>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/contact" className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold,
  hove: r:from-cyan-400,
  hove: r:to-blue-500">Create status page</Link>
          <a href="mail,
  t: o:kleber@ziontechgroup.com" className="rounded-lg border border-cyan-400/40 px-4 py-2 text-sm font-semibold text-cyan-300,
  hove: r:bg-white/5 inline-flex items-center gap-2"><Mail className="w-4 h-4"/> kleber@ziontechgroup.com</a>
          <a href="t,
  e: l:+13024640950" className="rounded-lg border border-cyan-400/40 px-4 py-2 text-sm font-semibold text-cyan-300 hove,
  r:bg-white/5 inline-flex items-center gap-2"><Phone className="w-4 h-4"/> +1 302 464 0950</a>
        </div>
      </section>
    </div>
  )
}

