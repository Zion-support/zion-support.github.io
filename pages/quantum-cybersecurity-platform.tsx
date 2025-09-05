<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import Button from '../components/ui/Button',
export default function QuantumCybersecurityPlatform() {
  return (
    <>
=======
import React from 'react';
import Head from 'next/head';
import Button from '../components/ui/Button';

export default function QuantumCybersecurityPlatform() {_return (_<>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <Head>
        <title>Quantum Cybersecurity Platform | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Next-gen quantum-resistant cybersecurity solutions for enterprise workloads.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/quantum-cybersecurity-platform&quot; />
      </Head>
<<<<<<< HEAD
      <div className=&quot;min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-black text-white&quot;>
        <div className=&quot;max-w-6xl mx-auto space-y-10&quot;>
          <header className=&quot;text-center&quot;>
            <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4&quot;>Quantum Cybersecurity</h1>
            <p className=&quot;text-gray-300 text-lg&quot;>Quantum-safe encryption, threat detection, and secure communications.</p>
=======
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-6xl mx-auto space-y-10">
          <header className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">Quantum Cybersecurity</h1>
            <p className="text-gray-300 text-lg">Quantum-safe encryption, _threat detection, _and secure communications.</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </header>
          <section className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
            {[
<<<<<<< HEAD
              'Post-quantum cryptography integrationQuantum key distribution optionsAdvanced anomaly and threat detectionSecurity analytics and incident workflowsCompliance and reportingFrom $4,999/mo'
            ].map((f) => (
              <div key={f} className=&quot;p-6 rounded-2xl bg-black/40 border border-gray-700/60 text-gray-200&quot;>{f}</div>
=======
              'Post-quantum cryptography integration', _'Quantum key distribution options', _'Advanced anomaly and threat detection', _'Security analytics and incident workflows', _'Compliance and reporting', _'From $4, _999/mo'
            ].map((f) => (
              <div key={f} className="p-6 rounded-2xl bg-black/40 border border-gray-700/60 text-gray-200">{_f}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            ))}
          </section>
          <div className=&quot;text-center&quot;>
            <Button href=&quot;/contact&quot; className=&quot;px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white&quot;>Contact Security Team</Button>
          </div>
        </div>
      </div>
    </>
  )
}