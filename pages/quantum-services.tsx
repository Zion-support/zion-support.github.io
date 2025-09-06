<<<<<<< HEAD
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
import Head from 'next / head';
import UltraAdvancedFuturisticBackground from '../components / ui / UltraAdvancedFuturisticBackground';
import Button from '../components / ui / Button';
import {Atom, CheckCircle, Shield, Sparkles} from 'lucide-react';
export default /**
 * QuantumServicesPage - Function description
 */
function QuantumServicesPage() {
  const features = [;
    'Quantum - inspired optimization & annealing strategies',
    'Hybrid quantum - classical pipelines (QAOA, VQE) where applicable',
    'Quantum - safe cryptography assessments and roadmaps',
    'R & D ideation for quantum - ready workloads',
  ];
;
  const solutions = [;
    {
      name: 'Quantum Internet Security',
      href: '/quantum - internet - security - platform',
    },
    { name: 'Quantum AI Cognitive', href: '/quantum - ai - cognitive' },
    {
      name: 'Quantum Cloud Infrastructure',
      href: '/quantum - cloud - infrastructure',
    },
  ];
;
  return (
export default function QuantumServicesPage() {
  const features = [
    'Quantum-inspired optimization & annealing strategiesHybrid quantum-classical pipelines (QAOA, VQE) where applicableQuantum-safe cryptography assessments and roadmapsR&D ideation for quantum-ready workloads'];
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Button from '../components/ui/Button';
import {Atom, CheckCircle, Shield, Sparkles} from 'lucide-react';
export default function QuantumServicesPage() {
  const features = [
    'Quantum-inspired optimization & annealing strategies',
    'Hybrid quantum-classical pipelines (QAOA, VQE) where applicable',
    'Quantum-safe cryptography assessments and roadmaps',
    'R&D ideation for quantum-ready workloads',;
  ];

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from 'react',
import Head from 'next/head',
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground',
<<<<<<< HEAD
import Button from '../components/ui/Button';
import { Atom, CheckCircle, Shield, Sparkles } from 'lucide-react';
export default function QuantumServicesPage() {

  const features = [
    'Quantum-inspired optimization & annealing strategies'
    'Hybrid quantum-classical pipelines (QAOA, VQE) where applicable'
    'Quantum-safe cryptography assessments and roadmaps'
    'R&D ideation for quantum-ready workloads'
  ];
  const solutions = [
    {
      name: 'Quantum Internet Security'
      href: '/quantum-internet-security-platform'
    }
    { name: 'Quantum AI Cognitive', href: '/quantum-ai-cognitive' }
    {
      name: 'Quantum Cloud Infrastructure'
      href: '/quantum-cloud-infrastructure'
    }
  ];

=======
import Button from '../components/ui/Button',
import { Atom, CheckCircle, Shield, Sparkles } from 'lucide-react',
export default function QuantumServicesPage() {
  const features = [
    'Quantum-inspired optimization & annealing strategiesHybrid quantum-classical pipelines (QAOA, VQE) where applicableQuantum-safe cryptography assessments and roadmapsR&D ideation for quantum-ready workloads'],
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  const solutions = [
    { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform' },
    { name: 'Quantum AI Cognitive', href: '/quantum-ai-cognitive' },
    { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure' }],
<<<<<<< HEAD
return (
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <UltraAdvancedFuturisticBackground colorScheme="quantum" intensity="high">
      <Head>
        <title>Quantum Services | Zion Tech Group</title>
        <meta name="description" content="Quantum computing strategy, hybrid pipelines, and quantum-safe security initiatives." />
        <link rel="canonical" href="https://ziontechgroup.com/quantum-services" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <header className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 mb-4">
              <Atom className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">Quantum Services</h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">Pragmatic, vendor-neutral guidance on quantum opportunities and post-quantum security.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" className="px-8 py-4">Talk to Experts</Button>
              <Button href="/market-pricing" variant="outline" className="px-8 py-4">See Market Pricing</Button>
            </div>
          </header>
          <section>
<<<<<<< HEAD
                className='px-8 py-4'>;
                See Market Pricing;
              </Button>            </div>;
          </header>;
          <section>;
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-6 text-center'>;
              Focus Areas;
            </h2>;
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
              {features && features.map(f => (;
                <div
                  key={f}
                  className='flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-gray-700/60'>;
                  <CheckCircle className='w-5 h-5 text-emerald-400 mt-0 && 0.5' />;
                  <span className='text-gray-200'>{f}</span>                </div>;
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Focus Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-gray-700/60">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                  <span className="text-gray-200">{f}</span>
                </div>
<<<<<<< HEAD
              ))}
            </div>;
          </section>;
          <section>;
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-6 text-center'>;
              Highlighted Solutions;
            </h2>;
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>;
              {solutions && solutions.map(s => (;
                <a
                  key={s && s.name}
                  href={s && s.href}
                  className='p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-colors'>;
                  <div className='flex items-center gap-3 text-cyan-300 mb-2'>;
                    <Sparkles className='w-5 h-5' />;
                    <span className='font-semibold'>{s && s.name}</span>;
                  </div>;
                  <p className='text-gray-300 text-sm'>Learn more</p>                </a>;
=======
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>
          </section>
          <section>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Highlighted Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {solutions.map((s) => (
                <a key={s.name} href={s.href} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center gap-3 text-cyan-300 mb-2"><Sparkles className="w-5 h-5" /><span className="font-semibold">{s.name}</span></div>
                  <p className="text-gray-300 text-sm">Learn more</p>
<<<<<<< HEAD
                </a>
              ))}
          <section className="text-center">
            <div className="inline-flex items-center justify-center gap-3 text-gray-300">
              <Shield className="w-5 h-5 text-purple-400" />
      </Head>
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
              <Button href=&quot;/market-pricing&quot; variant=&quot;outline&quot; className=&quot;px-8 py-4&quot;>See Market Pricing</Button>
            </div>
          </header>

          <section>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6 text-center&quot;>Focus Areas</h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
              {features.map((f) => (
                <div key={f} className=&quot;flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-gray-700/60&quot;>
                  <CheckCircle className=&quot;w-5 h-5 text-emerald-400 mt-0.5&quot; />
                  <span className=&quot;text-gray-200&quot;>{f}</span>
                </div>
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
                </Link>
              ))}
            </div>
          </section>

          <section className=&quot;text-center&quot;>
            <div className=&quot;inline-flex items-center justify-center gap-3 text-gray-300&quot;>
              <Shield className=&quot;w-5 h-5 text-purple-400&quot; />

              <span>Post-quantum readiness assessments and migration planning</span>
            </div>
=======
                </Link>
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>
          </section>
<<<<<<< HEAD
          <section className='text-center'>
            <div className='inline-flex items-center justify-center gap-3 text-gray-300'>
              <Shield className='w-5 h-5 text-purple-400' />
              <span>
                Post-quantum readiness assessments and migration planning
              </span>            </div>
=======
          <section className="text-center">
            <div className="inline-flex items-center justify-center gap-3 text-gray-300">
              <Shield className="w-5 h-5 text-purple-400" />
              <span>Post-quantum readiness assessments and migration planning</span>
            </div>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          </section>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
<<<<<<< HEAD
</div>;
          </section>;
          <section className='text-center'>;
            <div className='inline-flex items-center justify-center gap-3 text-gray-300'>;
              <Shield className='w-5 h-5 text-purple-400' />;
              <span>;
                Post-quantum readiness assessments and migration planning;
    <UltraAdvancedFuturisticBackground color_scheme='quantum' intensity='high'>;
      <Head>;
        <title > Quantum Services | Zion Tech Group</title>;
        <meta;
          name='description';
          content='Quantum computing strategy, hybrid pipelines, and quantum - safe security initiatives.';
        />;
        <link;
          rel='canonical';
          href='https://ziontechgroup.com / quantum - services';
        />;
      </Head>;
      <div className='min - h-screen pt - 24 pb - 20 px - 4 sm:px - 6 lg:px - 8'>;
        <div className='max - w-7xl mx - auto space - y-12'>;
          <header className='text - center'>;
            <div className='inline - flex items - center justify - center w - 16 h - 16 rounded - 2xl bg - gradient - to - r from - cyan - 500 to - purple - 600 mb - 4'>;
              <Atom className='w - 8 h - 8 text - white' />;
            </div>;
            <h1 className='text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 500 to - pink - 500 bg - clip - text text - transparent mb - 4'>;
              Quantum Services;
            </h1>;
            <p className='text - gray - 300 text - lg max - w-3xl mx - auto'>;
              Pragmatic, vendor - neutral guidance on quantum opportunities and;
              post - quantum security.;
            </p>;
            <div className='mt - 8 flex flex - col sm:flex - row items - center justify - center gap - 4'>;
              <Button href='/contact' className='px - 8 py - 4'>;
                Talk to Experts;
              </Button>;
              <Button;
                href='/market - pricing';
                variant='outline';
                className='px - 8 py - 4';
              >;
                See Market Pricing;
              </Button>            </div>;
          </header>;
          <section>;
            <h2 className='text - 3xl md:text - 4xl font - bold text - white mb - 6 text - center'>;
              Focus Areas;
            </h2>;
            <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 4'>;
              {features.map (function => (
                <div;
                  key={f}
                  className='flex items - start gap - 3 p - 4 rounded - xl bg - black / 40 border border - gray - 700 / 60';
                >;
                  <CheckCircle className='w - 5 h - 5 text - emerald - 400 mt - 0.5' />;
                  <span className='text - gray - 200'>{f}</span>                </div>))}
            </div>;
          </section>;
          <section>;
            <h2 className='text - 3xl md:text - 4xl font - bold text - white mb - 6 text - center'>;
              Highlighted Solutions;
            </h2>;
            <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 6'>;
              {solutions.map (string => (
                <a;
                  key={s.name}
                  href={s.href}
                  className='p - 6 rounded - 2xl bg - black / 40 border border - gray - 700 / 60 hover:border - cyan - 500 / 40 transition - colors';
                >;
                  <div className='flex items - center gap - 3 text - cyan - 300 mb - 2'>;
                    <Sparkles className='w - 5 h - 5' />;
                    <span className='font - semibold'>{s.name}</span>;
                  </div>;
                  <p className='text - gray - 300 text - sm'>Learn more</p>                </a>))}
            </div>;
          </section>;
          <section className='text - center'>;
            <div className='inline - flex items - center justify - center gap - 3 text - gray - 300'>;
              <Shield className='w - 5 h - 5 text - purple - 400' />;
              <span>;
                Post - quantum readiness assessments and migration planning;
              </span>            </div>;
          </section>;
        </div>;
      </div>;
  )
}
    </UltraAdvancedFuturisticBackground>);
;
=======
<<<<<<< HEAD
);
<<<<<<< HEAD
=======

}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
