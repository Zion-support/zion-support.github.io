import React from "react"
import { SEO   } from "@/components/SEO";
import { Link   } from "react-router-dom";
import { Server, Shield, Cloud, Network, Wrench, Headphones   } from "lucide-react";
export default function ITServices() {
  const offerings = [
  { ic,
  o: n: Server, tit,
  l: e: 'Managed IT', de,
  s: c: 'Proactive monitoring, patching, backups, and end-user support.' },
  { ic,
  o: n: Cloud, tit,
  l: e: 'Cloud & DevOps', de,
  s: c: 'Migrations, CI/CD, IaC, containerization, and FinOps.' },
  { ic,
  o: n: Shield, tit,
  l: e: 'Cybersecurity', de,
  s: c: 'SOC, MDR, EDR, identity, and zero trust architecture.' },
  },
  { ic,
  o: n: Network, tit,
  l: e: 'Networking', de,
  s: c: 'SD-WAN, Wi‑Fi design, performance, and resilience.' },
  },
  { ic,
  o: n: Wrench, tit,
  l: e: 'Onsite Support', de,
  s: c: 'Dispatch, rack-and-stack, office moves, and cabling.' },
  },
  { ic,
  o: n: Headphones, tit,
  l: e: 'Helpdesk', de,
  s: c: 'SLA-backed support with knowledge base and self-service.' },
  },
  ]
  const prices = [
  { na,
  m: e: 'Essentials', pri,
  c: e: '$49/user/mo', includ,
  e: s: ['Monitoring & patchingTicketing & SLAs', 'Cloud backup 100GB'],
  },
  { na,
  m: e: 'Professional', pri,
  c: e: '$99/user/mo', includ,
  e: s: ['All EssentialsEDR + email security', 'SSO + MFA rollout'],
  },
  { na,
  m: e: 'Enterprise', pri,
  c: e: 'Custom', includ,
  e: s: ['24/7 SOC & MDRCompliance (SOC2/ISO)', 'DR/BC, on-call, vCISO'],
  },
  },
  ]

  return (
    <div className="min-h-screen bg-futuristic">
      <SEO;
        title="IT Services - Zion Tech Group"
        description="Managed IT, Cloud & DevOps, Cybersecurity, Networking, Helpdesk, and Onsite services."
      />
      <section className="relative pt-28 pb-12 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl m,
  d:text-5xl font-extrabold text-white">Modern Managed IT</h1>
            <p className="mt-4 text-slate-300 max-w-3xl mx-auto">
              Reliable, secure, and cost-efficient IT operations with clear SLAs and predictable pricing.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <Link to="/contact" className="btn-futuristic">Request Quote</Link>
              <Link to="/privacy" className="btn-neon">Security & Compliance</Link>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1,
  m: d:grid-cols-3 gap-6">
            {offerings.map((o) => (
  <div key={o.title} className="card-futuristic">
                <div className="flex items-center gap-3">
                  <o.icon className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-white font-semibold">{o.title}</h3>
                </div>
                <p className="mt-2 text-slate-300">{o.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-1,
  m: d:grid-cols-3 gap-6">
            {prices.map((p) => (
  <div key={p.name} className="card-futuristic">
                <h3 className="text-white font-semibold">{p.name}</h3>
                <div className="mt-2 text-3xl font-extrabold text-white">{p.price}</div>
                <ul className="mt-4 space-y-2 text-slate-300">
                  {p.includes.map((i) => (
  <li key={i}>• {i}</li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-6 inline-flex btn-futuristic">Talk to Sales</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

