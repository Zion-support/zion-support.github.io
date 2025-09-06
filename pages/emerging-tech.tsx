<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { Rocket, Network, Boxes, CheckCircle } from 'lucide-react';
=======

  return (
    <Layout>
=======
import React from 'react',;
import Head from 'next/head',;
import Layout from '../components/layout/Layout',;
import { Rocket, Network, Boxes, CheckCircle } from 'lucide-react',;
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout/Layout'
import { Rocket, Network, Boxes, CheckCircle } from 'lucide-react',
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
export default function EmergingTechPage() {
  const features = [
    'Blockchain, tokenization, and smart contract auditsIoT and edge orchestration with zero-trust patterns5G private networks and campus connectivityMetaverse and spatial computing experimentation']
  const solutions = [
    { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform' }
    { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration' }
    { name: '5G Private Networks', href: '/5g-private-network-solutions' }
    { name: 'Metaverse AI Platform', href: '/metaverse-ai-development-platform' }]

    'Blockchain, tokenization, and smart contract auditsIoT and edge orchestration with zero-trust patterns5G private networks and campus connectivityMetaverse and spatial computing experimentation'];

  const solutions = [
    { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform' },
    { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration' },
    { name: '5G Private Networks', href: '/5g-private-network-solutions' },
    { name: 'Metaverse AI Platform', href: '/metaverse-ai-development-platform' }],
  return (
    <Layout>
      <Head>
        <title>Emerging Tech | Zion Tech Group</title>
        <meta name="description" content="Blockchain, IoT/edge, 5G, and metaverse initiatives with secure, scalable architectures." />
        <link rel="canonical" href="https://ziontechgroup.com/emerging-tech" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <header className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 mb-4">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">Emerging Technology</h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">Accelerate innovation responsibly across blockchain, IoT/edge, 5G, and spatial computing.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
<<<<<<< HEAD
              <a href="/contact" className="px-8 py-4">Start a Pilot</a>
              <a href="/market-pricing" className="px-8 py-4">See Market Pricing</a>
=======


              <a href="/contact" className="px-8 py-4">Start a Pilot</Link>
              <a href="/market-pricing" className="px-8 py-4">See Market Pricing</Link>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
            </div>
          </header>
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Focus Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-gray-700/60">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                  <span className="text-gray-200">{f}</span>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Highlighted Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {solutions.map((s) => (
                <a key={s.name} href={s.href} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-colors">
                  <div className="text-gray-200 font-semibold mb-2">{s.name}</div>
                  <p className="text-gray-300 text-sm">Learn more</p>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
<<<<<<< HEAD
  )
=======
<<<<<<< HEAD
  )
=======
  );
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
                </Link>
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
}
import React from 'react',
import Head from 'next / head',
import Layout from '../components / layout / Layout',
import { Rocket, Network, Boxes, CheckCircle } from 'lucide-react',
;
export default /**
 * EmergingTechPage - Function description
 */
function EmergingTechPage() {
  const features = [;
    'Blockchain, tokenization, and smart contract auditsIoT and edge orchestration with zero - trust patterns5G private networks and campus connectivity_metaverse and spatial computing experimentation'],
  const solutions = [;
    { name: 'Blockchain Infrastructure', href: '/blockchain - infrastructure - platform' },
    { name: 'Edge Computing Orchestration', href: '/edge - computing - orchestration' },
    { name: '5G Private Networks', href: '/5g - private - network - solutions' },
    { name: 'Metaverse AI Platform', href: '/metaverse - ai - development - platform' }],
  return (
    <Layout>;
      <Head>;
        <title > Emerging Tech | Zion Tech Group</title>;
        <meta name="description" content="Blockchain, IoT / edge, 5G, and metaverse initiatives with secure, scalable architectures." />;
        <link rel="canonical" href="https://ziontechgroup.com / emerging - tech" />;
      </Head>;
      <div className="min - h-screen pt - 24 pb - 20 px - 4 sm:px - 6 lg:px - 8">;
        <div className="max - w-7xl mx - auto space - y-12">;
          <header className="text - center">;
            <div className="inline - flex items - center justify - center w - 16 h - 16 rounded - 2xl bg - gradient - to - r from - cyan - 500 to - purple - 600 mb - 4">;
              <Rocket className="w - 8 h - 8 text - white" />;
            </div>;
            <h1 className="text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 500 to - pink - 500 bg - clip - text text - transparent mb - 4">Emerging Technology</h1>;
            <p className="text - gray - 300 text - lg max - w-3xl mx - auto">Accelerate innovation responsibly across blockchain, IoT / edge, 5G, and spatial computing.</p>;
            <div className="mt - 8 flex flex - col sm:flex - row items - center justify - center gap - 4">;
              <a href="/contact" className="px - 8 py - 4">Start a Pilot</a>;
              <a href="/market - pricing" className="px - 8 py - 4">See Market Pricing</a>;
            </div>;
          </header>;
          <section>;
            <h2 className="text - 3xl md:text - 4xl font - bold text - white mb - 6 text - center">Focus Areas</h2>;
            <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
              {features.map ((f) => (
                <div key={f} className="flex items - start gap - 3 p - 4 rounded - xl bg - black / 40 border border - gray - 700 / 60">;
                  <CheckCircle className="w - 5 h - 5 text - emerald - 400 mt - 0.5" />;
                  <span className="text - gray - 200">{f}</span>;
                </div>))}
            </div>;
          </section>;
          <section>;
            <h2 className="text - 3xl md:text - 4xl font - bold text - white mb - 6 text - center">Highlighted Solutions</h2>;
            <div className="grid grid - cols - 1 md:grid - cols - 4 gap - 6">;
              {solutions.map ((s) => (
                <a key={s.name} href={s.href} className="p - 6 rounded - 2xl bg - black / 40 border border - gray - 700 / 60 hover:border - cyan - 500 / 40 transition - colors">;
                  <div className="text - gray - 200 font - semibold mb - 2">{s.name}</div>;
                  <p className="text - gray - 300 text - sm">Learn more</p>;
                </a>))}
            </div>;
          </section>;
        </div>;
      </div>;
<<<<<<< HEAD
    </Layout>);
}
=======

    </Layout>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
