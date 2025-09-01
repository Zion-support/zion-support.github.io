import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer';

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
        <nav className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Zion Tech Group
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-white hover:text-cyan-400 transition-colors">Home</Link>
                <Link href="/about" className="text-white/80 hover:text-cyan-400 transition-colors">About</Link>
                <Link href="/services" className="text-white/80 hover:text-cyan-400 transition-colors">Services</Link>
                <Link href="/contact" className="text-white/80 hover:text-cyan-400 transition-colors">Contact</Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-6 py-12">
          {/* Navigation */}
          <nav className="flex justify-center mb-12">
            <div className="flex space-x-6">
              <a href="/about" className="text-white/80 hover:text-cyan-400 transition-colors">About</a>
              <a href="/services" className="text-white/80 hover:text-cyan-400 transition-colors">Services</a>
              <a href="/contact" className="text-white/80 hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </nav>

          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Autonomous innovation hub delivering cutting-edge technology solutions and intelligent automation systems.
            </p>
            
            {/* Stats and Navigation */}
            <div className="flex flex-wrap justify-center gap-6 text-lg mb-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/20">
                <span className="text-cyan-300 font-semibold">227+</span> Active Automations
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/20">
                <span className="text-blue-300 font-semibold">2,960+</span> Generated Pages
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl px-6 py-3 border border-white/20">
                <span className="text-green-300 font-semibold">99.9%</span> Uptime
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="/about" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                About Us
              </a>
              <a href="/services" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">
                Our Services
              </a>
              <a href="/automation" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-purple-400/50">
                Automation
              </a>
              <a href="/case-studies" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-orange-400/50">
                Case Studies
              </a>
              <a href="/case-studies" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-orange-400/50">
                Case Studies
              </a>
              <a href="/contact" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
                Contact
              </a>
              <a href="/automation" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-purple-400/50">
                Automation
              </a>
              <a href="/blog" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-orange-400/50">
                Blog
              </a>
              <a href="/technology-insights" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-indigo-400/50">
                Insights
              </a>
              <a href="/case-studies" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-emerald-400/50">
                Case Studies
              </a>
            </div>
          </section>

          {/* Success Stories Section */}
          <section className="mx-auto max-w-7xl px-6 pb-14 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold tracking-wide text-white/90 mb-4">Success Stories</h2>
              <p className="text-white/70 max-w-2xl mx-auto mb-6">
                Discover how our autonomous AI solutions have transformed businesses across industries
              </p>
              <a href="/case-studies" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                View All Case Studies →
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-6 rounded-2xl border border-blue-500/30">
                <div className="text-3xl mb-3">🏥</div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Healthcare</h3>
                <p className="text-white/70 text-sm mb-3">40% reduction in patient wait times</p>
                <div className="text-2xl font-bold text-white">$2.3M</div>
                <div className="text-xs text-white/60">Annual savings</div>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 p-6 rounded-2xl border border-green-500/30">
                <div className="text-3xl mb-3">🏭</div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">Manufacturing</h3>
                <p className="text-white/70 text-sm mb-3">35% increase in efficiency</p>
                <div className="text-2xl font-bold text-white">$4.1M</div>
                <div className="text-xs text-white/60">Annual ROI</div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-6 rounded-2xl border border-purple-500/30">
                <div className="text-3xl mb-3">💳</div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Finance</h3>
                <p className="text-white/70 text-sm mb-3">95% fraud detection accuracy</p>
                <div className="text-2xl font-bold text-white">$8.7M</div>
                <div className="text-xs text-white/60">Fraud prevented</div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 p-6 rounded-2xl border border-orange-500/30">
                <div className="text-3xl mb-3">🚚</div>
                <h3 className="text-lg font-semibold text-orange-400 mb-2">Logistics</h3>
                <p className="text-white/70 text-sm mb-3">45% faster delivery</p>
                <div className="text-2xl font-bold text-white">$6.2M</div>
                <div className="text-xs text-white/60">Annual savings</div>
              </div>
            </div>
          </section>

          {/* Technology Stack Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Technology Stack</h2>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">Next.js</span>
                  </div>
                  <p className="text-white/80">React Framework</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">GitHub</span>
                  </div>
                  <p className="text-white/80">Actions & CI/CD</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">AI/ML</span>
                  </div>
                  <p className="text-white/80">Machine Learning</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-600 to-cyan-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">Cloud</span>
                  </div>
                  <p className="text-white/80">Native Architecture</p>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Updates Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white/90">Latest Autonomous Updates</h2>
            <div className="text-center mb-8">
              <a href="/reports" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                View All Reports →
              </a>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <a href="/reports/updates/update-2025-08-15-0406" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025: 08: 15: 0406</h3>
                <p className="text-sm text-white/75 mb-3">Latest system status and performance metrics from our autonomous agents.</p>
                <div className="inline-flex items-center gap-1 text-xs text-cyan-300/90">View Report <span aria-hidden>→</span></div>
              </a>
              
              <a href="/reports/updates/update-2025-08-15-0405" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025: 08: 15: 0405</h3>
                <p className="text-sm text-white/75 mb-3">System enhancements and performance improvements overview.</p>
                <div className="inline-flex items-center gap-1 text-xs text-cyan-300/90">View Report <span aria-hidden>→</span></div>
              </a>
              
              <a href="/reports/updates/update-2025-08-15-0404" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025: 08: 15: 0404</h3>
                <p className="text-sm text-white/75 mb-3">Recent developments in AI content generation and security.</p>
                <div className="inline-flex items-center gap-1 text-xs text-cyan-300/90">View Report <span aria-hidden>→</span></div>
              </a>
              
              <a href="/reports/updates/update-2025-08-15-0111" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025: 08: 15: 0111</h3>
                <p className="text-sm text-white/75 mb-3">Infrastructure scaling and content management improvements.</p>
                <div className="inline-flex items-center gap-1 text-xs text-cyan-300/90">View Report <span aria-hidden>→</span></div>
              </a>
              
              <a href="/reports/updates/update-2025-08-15-0403" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025: 08: 15: 0403</h3>
                <p className="text-sm text-white/75 mb-3">Automation efficiency and content quality enhancements.</p>
                <div className="inline-flex items-center gap-1 text-xs text-cyan-300/90">View Report <span aria-hidden>→</span></div>
              </a>
              
              <a href="/reports/updates/update-2025-08-15-0402" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold mb-2">Autonomous Update — 2025: 08: 15: 0402</h3>
                <p className="text-sm text-white/75 mb-3">Redundancy systems and AI integration updates.</p>
                <div className="inline-flex items-center gap-1 text-xs text-cyan-300/90">View Report <span aria-hidden>→</span></div>
              </a>
            </div>
          </section>

          {/* Why Choose Zion */}
          <section className="mx-auto max-w-7xl px-6 pb-14">
            <h2 className="text-center text-2xl font-bold tracking-wide text-white/90 mb-8">Why Choose Zion Tech Group?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">Innovation First</h3>
                <p className="text-white/70 text-sm">Pioneering the future of autonomous technology with cutting-edge AI solutions.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-lg font-semibold mb-2 text-fuchsia-400">Lightning Fast</h3>
                <p className="text-white/70 text-sm">Rapid deployment and 24/7 autonomous operation for maximum efficiency.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-lg font-semibold mb-2 text-green-400">Enterprise Security</h3>
                <p className="text-white/70 text-sm">Bank-grade security with autonomous threat detection and response.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-lg font-semibold mb-2 text-blue-400">Global Scale</h3>
                <p className="text-white/70 text-sm">Deploy anywhere with our distributed autonomous infrastructure.</p>
              </div>
            </div>
          </section>

          {/* Footer Section */}
          <footer className="bg-black/20 backdrop-blur-xl border-t border-white/10 mt-20">
            <div className="container mx-auto px-6 py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-cyan-400">Company</h3>
                  <ul className="space-y-2 text-white/70">
                    <li><a href="/about" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                    <li><a href="/news" className="hover:text-cyan-400 transition-colors">News</a></li>
                    <li><a href="/events" className="hover:text-cyan-400 transition-colors">Events</a></li>
                    <li><a href="/contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4 text-fuchsia-400">Services</h3>
                  <ul className="space-y-2 text-white/70">
                    <li><a href="/services" className="hover:text-fuchsia-400 transition-colors">AI Development</a></li>
                    <li><a href="/services" className="hover:text-fuchsia-400 transition-colors">Automation</a></li>
                    <li><a href="/services" className="hover:text-fuchsia-400 transition-colors">Cloud Infrastructure</a></li>
                    <li><a href="/services" className="hover:text-fuchsia-400 transition-colors">Consulting</a></li>
                  </ul>
                </div>
                                  <div>
                    <h3 className="text-lg font-bold mb-4 text-green-400">Resources</h3>
                    <ul className="space-y-2 text-white/70">
                      <li><a href="/blog" className="hover:text-green-400 transition-colors">Blog</a></li>
                      <li><a href="/reports" className="hover:text-green-400 transition-colors">Reports</a></li>
                      <li><a href="/case-studies" className="hover:text-green-400 transition-colors">Case Studies</a></li>
                      <li><a href="/resources" className="hover:text-green-400 transition-colors">Resources</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-blue-400">Legal</h3>
                    <ul className="space-y-2 text-white/70">
                      <li><a href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                      <li><a href="/about" className="hover:text-blue-400 transition-colors">About</a></li>
                      <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
                      <li><a href="/events" className="hover:text-blue-400 transition-colors">Events</a></li>
                    </ul>
                  </div>
              </div>
            </div>
          </section>

          {/* Footer Navigation */}
          <footer className="mt-20 pt-12 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-cyan-300">Company</h3>
                <ul className="space-y-2 text-white/70">
                  <li><a href="/about" className="hover:text-cyan-300 transition-colors">About Us</a></li>
                  <li><a href="/services" className="hover:text-cyan-300 transition-colors">Services</a></li>
                  <li><a href="/case-studies" className="hover:text-cyan-300 transition-colors">Case Studies</a></li>
                  <li><a href="/contact" className="hover:text-cyan-300 transition-colors">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-fuchsia-300">Technology</h3>
                <ul className="space-y-2 text-white/70">
                  <li><a href="/automation" className="hover:text-fuchsia-300 transition-colors">Automation</a></li>
                  <li><a href="/technology-insights" className="hover:text-fuchsia-300 transition-colors">Insights</a></li>
                  <li><a href="/blog" className="hover:text-fuchsia-300 transition-colors">Blog</a></li>
                  <li><a href="/reports" className="hover:text-fuchsia-300 transition-colors">Reports</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-green-300">Resources</h3>
                <ul className="space-y-2 text-white/70">
                  <li><a href="/reports/updates" className="hover:text-green-300 transition-colors">Updates</a></li>
                  <li><a href="/automation-health" className="hover:text-green-300 transition-colors">System Health</a></li>
                  <li><a href="/privacy" className="hover:text-green-300 transition-colors">Privacy Policy</a></li>
                  <li><a href="/security" className="hover:text-green-300 transition-colors">Security</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-300">Connect</h3>
                <ul className="space-y-2 text-white/70">
                  <li><a href="/contact" className="hover:text-blue-300 transition-colors">Get Started</a></li>
                  <li><a href="/services" className="hover:text-blue-300 transition-colors">Request Quote</a></li>
                  <li><a href="/about" className="hover:text-blue-300 transition-colors">Partnership</a></li>
                  <li><a href="/contact" className="hover:text-blue-300 transition-colors">Support</a></li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-12 pt-8 border-t border-white/10">
              <p className="text-white/60">
                © 2025 Zion Tech Group. All rights reserved. | 
                <a href="/privacy" className="hover:text-cyan-300 transition-colors ml-2">Privacy</a> | 
                <a href="/security" className="hover:text-cyan-300 transition-colors ml-2">Security</a>
              </p>
            </div>
          </footer>
        </main>
        <Footer />
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