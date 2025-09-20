import React from "react"
import { Link   } from "react-router-dom";
import { SEO   } from "@/components/SEO";
import { Header   } from "@/components/Header";
import { Footer   } from "@/components/Footer";
import { Target, Brain, Cloud, Shield, BarChart3, Building   } from "lucide-react";
export default function Solutions() {
  const solutions = [
  { na,
  m: e: 'Enterprise Solutions', pa,
  t: h: '/solutions', ic,
  o: n: Building, descripti,
  o: n: 'End-to-end solutions for large organizations' },
  },
  { na,
  m: e: 'AI Solutions', pa,
  t: h: '/ai-solutions', ic,
  o: n: Brain, descripti,
  o: n: 'Applied AI for real business outcomes' },
  },
  { na,
  m: e: 'Cloud & DevOps', pa,
  t: h: '/services/devops-cloud', ic,
  o: n: Cloud, descripti,
  o: n: 'Modernize delivery with DevOps and cloud' },
  },
  { na,
  m: e: 'Cybersecurity', pa,
  t: h: '/services/cybersecurity', ic,
  o: n: Shield, descripti,
  o: n: 'Protect systems with AI-powered security' },
  },
  { na,
  m: e: 'Data Analytics', pa,
  t: h: '/services/data-analytics', ic,
  o: n: BarChart3, descripti,
  o: n: 'Turn data into decisions' },
  },
  ]
  return (
    <div className="min-h-screen bg-zion-blue text-white">
      <SEO title="Solutions - Zion Tech Group" description="Industry and capability solutions by Zion Tech Group." canonical="htt,
  p: s: //ziontechgroup.com/solutions" />
      <Header />
      <section className="pt-24 pb-12 bg-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl m,
  d:text-5xl font-bold mb-4">Solutions</h1>
          <p className="text-zion-slate-light max-w-3xl mx-auto">Explore our solutions across AI, Cloud, Security, and Analytics tailored for enterprises and startups.</p>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4 grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-6">
          {solutions.map((s) => (
  <Link key={s.name} to={s.path} className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-6,
  hove: r:border-zion-cyan/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <s.icon className="w-6 h-6 text-zion-cyan" />
                <h3 className="text-xl font-semibold">{s.name}</h3>
              </div>
              <p className="text-zion-slate-light">{s.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}

