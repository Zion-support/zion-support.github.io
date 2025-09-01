import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const HomePage = React.memo(function);
export default HomePage HomePage() {
  const featuredReports = [
    {
      title: 'Latest Insights',
      description: 'Discover cutting-edge AI and technology insights',
      href: '/reports/insights',
      count: '15+ reports'
    },
    {
      title: 'Strategic Dossiers',
      description: 'Comprehensive analysis and strategic recommendations',
      href: '/reports/dossiers',
      count: '8+ dossiers'
    },
    {
      title: 'Technical Tutorials',
      description: 'Step-by-step guides for developers and engineers',
      href: '/reports/tutorials',
      count: '25+ tutorials'
    },
    {
      title: 'Industry Whitepapers',
      description: 'In-depth research and industry analysis',
      href: '/reports/whitepapers',
      count: '12+ whitepapers'
    }
  ];

  const newFeatures = [
    {
      title: 'Component Library',
      description: 'Explore our new reusable UI components',
      href: '/components',
      icon: '🧩'
    },
    {
      title: 'Content Discovery',
      description: 'AI-powered content recommendations',
      href: '/explore',
      icon: '🔍'
    },
    {
      title: 'Automation Hub',
      description: 'See our autonomous systems in action',
      href: '/automation',
      icon: '🤖'
    }
  ];

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Index - Zion Tech Solutions</title>
        <meta name="description" content="Index page" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        {/* Navigation */}
        <nav className="border-b border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Zion Tech Group
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">About</Link>
                <Link href="/automation" className="text-white/80 hover:text-white transition-colors">Automation</Link>
                <Link href="/reports" className="text-white/80 hover:text-white transition-colors">Reports</Link>
                <Link href="/blog" className="text-white/80 hover:text-white transition-colors">Blog</Link>
                <Link href="/api-documentation" className="text-white/80 hover:text-white transition-colors">API</Link>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-6 py-12">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <h1 className="text-6xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-2xl text-white/80 max-w-4xl mx-auto mb-8 leading-relaxed">
              Autonomous innovation hub delivering cutting-edge technology solutions and intelligent automation systems.
            </p>
                          <div className="flex flex-wrap justify-center gap-4">
                <Link href="/about" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-300 transform hover:scale-105">
                  Learn More
                </Link>
                <Link href="/services" className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Our Services
                </Link>
              </div>
          </section>

          {/* About Section */}
          <section id="about" className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">About Zion Tech Group</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                We are pioneers in autonomous technology, creating intelligent systems that drive innovation 
                and transform industries through cutting-edge AI, automation, and technological advancement.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-300">Innovation First</h3>
                <p className="text-white/70">
                  Pushing the boundaries of what's possible through autonomous research and development.
                </p>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold mb-3 text-fuchsia-300">Autonomous Systems</h3>
                <p className="text-white/70">
                  Building intelligent systems that operate independently and continuously improve.
                </p>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold mb-3 text-green-300">Global Impact</h3>
                <p className="text-white/70">
                  Creating solutions that benefit humanity and advance technological progress worldwide.
                </p>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">Our Services</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Comprehensive technology solutions powered by autonomous intelligence and innovation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-white/5 to-white/10 p-8 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-cyan-300">AI & Machine Learning</h3>
                <p className="text-white/70 mb-6">
                  Advanced artificial intelligence solutions including neural networks, autonomous learning systems, 
                  and cognitive computing capabilities.
                </p>
                <ul className="text-white/60 space-y-2">
                  <li>• Neural Architecture Optimization</li>
                  <li>• Autonomous Learning Systems</li>
                  <li>• Cognitive Computing</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-white/5 to-white/10 p-8 rounded-xl border border-white/10 hover:border-fuchsia-400/30 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-fuchsia-300">Automation & Orchestration</h3>
                <p className="text-white/70 mb-6">
                  Comprehensive automation solutions that streamline operations and optimize performance 
                  across complex systems.
                </p>
                <ul className="text-white/60 space-y-2">
                  <li>• System Automation</li>
                  <li>• Process Orchestration</li>
                  <li>• Performance Optimization</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-white/5 to-white/10 p-8 rounded-xl border border-white/10 hover:border-green-400/30 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-green-300">Infrastructure & Scaling</h3>
                <p className="text-white/70 mb-6">
                  Scalable infrastructure solutions designed for growth, reliability, and autonomous operations.
                </p>
                <ul className="text-white/60 space-y-2">
                  <li>• Cloud Infrastructure</li>
                  <li>• Auto-scaling Systems</li>
                  <li>• High Availability</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-white/5 to-white/10 p-8 rounded-xl border border-white/10 hover:border-yellow-400/30 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-yellow-300">Research & Development</h3>
                <p className="text-white/70 mb-6">
                  Cutting-edge research in emerging technologies including quantum computing, 
                  biotechnology, and advanced materials.
                </p>
                <ul className="text-white/60 space-y-2">
                  <li>• Quantum Computing</li>
                  <li>• Biotechnology</li>
                  <li>• Advanced Materials</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-white/5 to-white/10 p-8 rounded-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-purple-300">Security & Compliance</h3>
                <p className="text-white/70 mb-6">
                  Comprehensive security solutions ensuring protection, compliance, and trust 
                  across all systems and operations.
                </p>
                <ul className="text-white/60 space-y-2">
                  <li>• Threat Detection</li>
                  <li>• Compliance Monitoring</li>
                  <li>• Security Automation</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-white/5 to-white/10 p-8 rounded-xl border border-white/10 hover:border-red-400/30 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-red-300">Consulting & Strategy</h3>
                <p className="text-white/70 mb-6">
                  Strategic technology consulting helping organizations navigate digital transformation 
                  and implement autonomous solutions.
                </p>
                <ul className="text-white/60 space-y-2">
                  <li>• Digital Transformation</li>
                  <li>• Technology Strategy</li>
                  <li>• Implementation Support</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 p-12 rounded-2xl border border-cyan-400/20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 text-white">Our Impact</h2>
                <p className="text-xl text-white/70">
                  Numbers that demonstrate our commitment to innovation and excellence
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">99.97%</div>
                  <div className="text-white/70">System Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-fuchsia-400 mb-2">47</div>
                  <div className="text-white/70">Regions Served</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">1000+</div>
                  <div className="text-white/70">Autonomous Processes</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">156</div>
                  <div className="text-white/70">Active Projects</div>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Updates Section */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-3xl font-bold tracking-wide text-white/90 mb-8">Latest Autonomous Updates</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025:08:15:0406</h3>
                <p className="text-sm text-white/75 mb-3">Comprehensive overview of AI breakthroughs and automation achievements.</p>
                <div className="inline-flex items-center gap-1 text-xs text-cyan-300/90">Read More <span aria-hidden>→</span></div>
              </Link>
              
              <Link href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025:08:15:0405</h3>
                <p className="text-sm text-white/75 mb-3">Performance enhancements and autonomous decision-making advances.</p>
                <div className="inline-flex items-center gap-1 text-xs text-cyan-300/90">Read More <span aria-hidden>→</span></div>
              </Link>
              
              <Link href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025:08:15:0404</h3>
                <p className="text-sm text-white/75 mb-3">Breakthrough innovations in research and system evolution.</p>
                <div className="inline-flex items-center gap-1 text-xs text-cyan-300/90">Read More <span aria-hidden>→</span></div>
              </Link>
              
              <Link href="/reports/updates/update-2025-08-15-0111" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025:08:15:0111</h3>
                <p className="text-sm text-white/75 mb-3">Infrastructure scaling and operational excellence achievements.</p>
                <div className="inline-flex items-center gap-1 text-xs text-cyan-300/90">Read More <span aria-hidden>→</span></div>
              </Link>
              
              <Link href="/reports/updates/update-2025-08-15-0403" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025:08:15:0403</h3>
                <p className="text-sm text-white/75 mb-3">Intelligence breakthroughs and cognitive system advances.</p>
                <div className="inline-flex items-center gap-1 text-xs text-cyan-300/90">Read More <span aria-hidden>→</span></div>
              </Link>
              
              <Link href="/reports/updates/update-2025-08-15-0402" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025:08:15:0402</h3>
                <p className="text-sm text-white/75 mb-3">Ecosystem integration and comprehensive automation progress.</p>
                <div className="inline-flex items-center gap-1 text-xs text-cyan-300/90">Read More <span aria-hidden>→</span></div>
              </Link>
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center mb-16">
            <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 p-12 rounded-2xl border border-cyan-400/20">
              <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Future?</h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Join us in building the autonomous future. Let's explore how our innovative solutions 
                can drive your organization forward.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/about" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all duration-300 transform hover:scale-105">
                  Get Started
                </Link>
                <Link href="/services" className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Learn More
                </Link>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-white/5 mt-20">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-white/70 text-sm">
                  Pioneering autonomous technology solutions for the future.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-white">Products</h4>
                <ul className="space-y-2 text-sm text-white/70">
                  <li><Link href="/automation" className="hover:text-white">Automation</Link></li>
                  <li><Link href="/reports" className="hover:text-white">Reports</Link></li>
                  <li><Link href="/api-documentation" className="hover:text-white">API</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-white">Company</h4>
                <ul className="space-y-2 text-sm text-white/70">
                  <li><Link href="/about" className="hover:text-white">About</Link></li>
                  <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                  <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-white">Legal</h4>
                <ul className="space-y-2 text-sm text-white/70">
                  <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
                  <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60 text-sm">
              © 2025 Zion Tech Group. All rights reserved.
            </div>
          </div>
        </footer>
      </div>

      {/* Header */}
      <header className="relative z-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="text-2xl font-bold tracking-wide">
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</span>
          </div>
          <div className="hidden gap-6 md:flex">
            <Link href="/main/front#capabilities"><a className="text-white/80 hover:text-white">Services</a></Link>
            <Link href="/main/front"><a className="text-white/80 hover:text-white">Products</a></Link>
            <Link href="/automation"><a className="text-white/80 hover:text-white">Automations</a></Link>
            <Link href="/newsroom"><a className="text-white/80 hover:text-white">Contact</a></Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-6 pt-10 pb-16 md:pt-16 md:pb-24">
          <div className="text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
              Autonomous cloud systems are live and improving the app in real time
            </div>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              <span className="gradient-text">Autonomous Cloud Automations</span>
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-white/80">
              Self-improving, cloud-native agents that invent, generate, and run new automation factories—fixing, optimizing, and syncing changes to the repository continuously.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/automation"><a className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-shadow">Explore Automations</a></Link>
              <Link href="/site-health"><a className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10">Live Meta Factory</a></Link>
            </div>

            {/* Futuristic info strip */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ['24/7', 'Autonomous'],
                ['Main', 'Direct Sync'],
                ['0 Ops', 'Cloud‑Native'],
                ['Safety', 'Guardrails'],
              ].map(([k,v]) => (
                <div key={k} className="glow-card rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left">
                  <div className="text-lg font-bold text-white">{k}</div>
                  <div className="text-xs text-white/70">{v}</div>
                </div>
              ))}
            </div>

            {/* Trusted by */}
            <div className="mx-auto mt-10 max-w-5xl">
              <div className="text-xs uppercase tracking-widest text-white/50">Trusted by forward‑looking teams</div>
              <div className="mt-3 grid grid-cols-2 gap-3 opacity-80 sm:grid-cols-4">
                {['Nebula Labs', 'Aurora Cloud', 'Quanta AI', 'NovaOps'].map((brand) => (
                  <div key={brand} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-center text-white/70 backdrop-blur-md">{brand}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-7xl px-6 pb-14">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Features</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Self‑Improving', desc: 'Agents continuously analyze, invent, and evolve automations.' },
              { title: 'Repo Sync', desc: 'Changes are committed and pushed automatically to main.' },
              { title: 'Zero Ops', desc: 'Runs fully in the cloud—no servers or manual intervention.' },
              { title: 'Safety‑First', desc: 'Conservative edits with logs, reports, and guardrails.' },
              { title: 'Scalable', desc: 'Generates domain‑specific factories on demand.' },
              { title: 'Observability', desc: 'Dashboards, reports, and artifacts across hubs.' },
              { title: 'Futuristic UI', desc: 'Neon, animated, holographic surfaces with tilt and beams.' },
              { title: 'Cloud Automations', desc: 'Scheduled functions that replace GitHub Actions.' },
              { title: 'Edge‑Optimized', desc: 'Global performance with smart bundling and caching.' },
            ].map((f) => (
              <article key={f.title} className="group glow-card relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:border-cyan-400/30">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-white/75">{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      
{/* AUTO-GENERATED: HOME_LATEST_CONTENT_START */}

 <section className="mx-auto max-w-7xl px-6 pb-14">
   <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Latest Autonomous Content</h2>
   <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/reports/updates/update-2025-08-18T16-38" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 18T16: 38</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </Link>
            <Link href="/reports/updates/update-2025-08-18-1638" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 18: 1638</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </Link>
            <Link href="/reports/updates/update-2025-08-18-1636" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 18: 1636</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </Link>
            <Link href="/reports/updates/update-2025-08-18T16-35" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 18T16: 35</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </Link>
            <Link href="/reports/updates/update-2025-08-18-1635" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 18: 1635</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </Link>
            <Link href="/reports/updates/update-2025-08-18T16-34" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 18T16: 34</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </Link>
   </div>
 </section>
 
{/* AUTO-GENERATED: HOME_LATEST_CONTENT_END */}
</section>
    </div>
  );
};

export default Index;