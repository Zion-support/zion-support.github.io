import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function EmergingTech() {
  const technologies = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Advanced AI solutions including machine learning, deep learning, and neural networks for intelligent automation.',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    }, {
      icon: Lock,
      title: 'Blockchain & Web3',
      description: 'Decentralized applications, smart contracts, and blockchain solutions for secure, transparent operations.',
      features: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms', 'Cryptocurrency Integration']
    }, {
      icon: Globe,
      title: 'Internet of Things (IoT)',
      description: 'Connected devices and IoT ecosystems for smart homes, cities, and industrial automation.',
      features: ['Device Management', 'Data Analytics', 'Remote Monitoring', 'Automation Systems']
    }, {
      icon: Eye,
      title: 'Augmented & Virtual Reality',
      description: 'Immersive AR/VR experiences for training, entertainment, and business applications.',
      features: ['AR Applications', 'VR Experiences', 'Mixed Reality', '3D Visualization']
    }, {
      icon: Zap,
      title: 'Edge Computing',
      description: 'Distributed computing solutions that bring processing power closer to data sources.',
      features: ['Real-time Processing', 'Reduced Latency', 'Bandwidth Optimization', 'Offline Capabilities']
    }, {
      icon: Database,
      title: 'Quantum Computing',
      description: 'Next-generation computing solutions leveraging quantum mechanics for complex problem solving.',
      features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Simulation']
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition by adopting cutting-edge technologies before your competitors.'
    }, {
      icon: Zap,
      title: 'Innovation Leadership',
      description: 'Position your company as an innovation leader in your industry with emerging technology solutions.'
    }, {
      icon: Globe,
      title: 'Future-Proof Solutions',
      description: 'Build solutions that are designed to evolve and adapt to future technological advancements.'
    }, {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Early adoption of emerging technologies helps identify and mitigate potential risks and challenges.'
    }
  ];

  const applications = [
    {
      industry: 'Healthcare',
      technologies: ['AI Diagnostics', 'IoT Monitoring', 'Blockchain Records', 'AR Surgery'],
      description: 'Revolutionary healthcare solutions improving patient outcomes and operational efficiency.'
    }, {
      industry: 'Finance',
      technologies: ['Blockchain Payments', 'AI Fraud Detection', 'Quantum Security', 'IoT Banking'],
      description: 'Next-generation financial services with enhanced security and user experience.'
    }, {
      industry: 'Manufacturing',
      technologies: ['IoT Sensors', 'AI Quality Control', 'AR Training', 'Edge Computing'],
      description: 'Smart manufacturing solutions for increased productivity and quality control.'
    }, {
      industry: 'Retail',
      technologies: ['AR Shopping', 'AI Personalization', 'IoT Inventory', 'Blockchain Supply Chain'],
      description: 'Immersive retail experiences with intelligent automation and supply chain transparency.'
    }
  ];

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
              <a href="/contact" className="px-8 py-4">Start a Pilot</a>
              <a href="/market-pricing" className="px-8 py-4">See Market Pricing</a>
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
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SimpleFooter />
    </>
  )}