import React from 'react',
import Head from 'next/head',
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground',
import Button from '../components/ui/Button',
import { Atom, CheckCircle, Shield, Sparkles } from 'lucide-react',

export default function QuantumServicesPage() {
  const features = [
    'Quantum-inspired optimization & annealing strategiesHybrid quantum-classical pipelines (QAOA, VQE) where applicableQuantum-safe cryptography assessments and roadmapsR&D ideation for quantum-ready workloads'],

  const solutions = [
    { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform' },
    { name: 'Quantum AI Cognitive', href: '/quantum-ai-cognitive' },
    { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure' }],

  return (
    <UltraAdvancedFuturisticBackground colorScheme=&quot;quantum&quot; intensity=&quot;high&quot;>
      <Head>
        <title>Quantum Services | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Quantum computing strategy, hybrid pipelines, and quantum-safe security initiatives.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/quantum-services&quot; />      </Head>
      <div className=&quot;min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto space-y-12&quot;>
          <header className=&quot;text-center&quot;>
            <div className=&quot;inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 mb-4&quot;>
              <Atom className=&quot;w-8 h-8 text-white&quot; />
            </div>
            <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4&quot;>Quantum Services</h1>
            <p className=&quot;text-gray-300 text-lg max-w-3xl mx-auto&quot;>Pragmatic, vendor-neutral guidance on quantum opportunities and post-quantum security.</p>
            <div className=&quot;mt-8 flex flex-col sm:flex-row items-center justify-center gap-4&quot;>
              <Button href=&quot;/contact&quot; className=&quot;px-8 py-4&quot;>Talk to Experts</Button>
              <Button href=&quot;/market-pricing&quot; variant=&quot;outline&quot; className=&quot;px-8 py-4&quot;>See Market Pricing</Button>            </div>
          </header>

          <section>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6 text-center&quot;>Focus Areas</h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
              {features.map((f) => (
                <div key={f} className=&quot;flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-gray-700/60&quot;>
                  <CheckCircle className=&quot;w-5 h-5 text-emerald-400 mt-0.5&quot; />
                  <span className=&quot;text-gray-200&quot;>{f}</span>                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6 text-center&quot;>Highlighted Solutions</h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
              {solutions.map((s) => (
                <a key={s.name} href={s.href} className=&quot;p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-colors&quot;>
                  <div className=&quot;flex items-center gap-3 text-cyan-300 mb-2&quot;><Sparkles className=&quot;w-5 h-5&quot; /><span className=&quot;font-semibold&quot;>{s.name}</span></div>
                  <p className=&quot;text-gray-300 text-sm&quot;>Learn more</p>
                </Link>              ))}
            </div>
          </section>

          <section className=&quot;text-center&quot;>
            <div className=&quot;inline-flex items-center justify-center gap-3 text-gray-300&quot;>
              <Shield className=&quot;w-5 h-5 text-purple-400&quot; />
              <span>Post-quantum readiness assessments and migration planning</span>
            </div>
          </section>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  )
}