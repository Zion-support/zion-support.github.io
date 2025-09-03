import React from 'react';
import Head from 'next/head';
import { Rocket, Brain, Shield, Globe, Zap, Database, CheckCircle, ArrowRight, Cpu, Network, Eye, Lock } from 'lucide-react';
import SimpleNavigation from '../src/components/SimpleNavigation';
import { SimpleFooter } from '../src/components/SimpleFooter';

export default function EmergingTech() {
  const technologies = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Advanced AI solutions including machine learning, deep learning, and neural networks for intelligent automation.',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: Lock,
      title: 'Blockchain & Web3',
      description: 'Decentralized applications, smart contracts, and blockchain solutions for secure, transparent operations.',
      features: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms', 'Cryptocurrency Integration']
    },
    {
      icon: Globe,
      title: 'Internet of Things (IoT)',
      description: 'Connected devices and IoT ecosystems for smart homes, cities, and industrial automation.',
      features: ['Device Management', 'Data Analytics', 'Remote Monitoring', 'Automation Systems']
    },
    {
      icon: Eye,
      title: 'Augmented & Virtual Reality',
      description: 'Immersive AR/VR experiences for training, entertainment, and business applications.',
      features: ['AR Applications', 'VR Experiences', 'Mixed Reality', '3D Visualization']
    },
    {
      icon: Zap,
      title: 'Edge Computing',
      description: 'Distributed computing solutions that bring processing power closer to data sources.',
      features: ['Real-time Processing', 'Reduced Latency', 'Bandwidth Optimization', 'Offline Capabilities']
    },
    {
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
    },
    {
      icon: Zap,
      title: 'Innovation Leadership',
      description: 'Position your company as an innovation leader in your industry with emerging technology solutions.'
    },
    {
      icon: Globe,
      title: 'Future-Proof Solutions',
      description: 'Build solutions that are designed to evolve and adapt to future technological advancements.'
    },
    {
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
    },
    {
      industry: 'Finance',
      technologies: ['Blockchain Payments', 'AI Fraud Detection', 'Quantum Security', 'IoT Banking'],
      description: 'Next-generation financial services with enhanced security and user experience.'
    },
    {
      industry: 'Manufacturing',
      technologies: ['IoT Sensors', 'AI Quality Control', 'AR Training', 'Edge Computing'],
      description: 'Smart manufacturing solutions for increased productivity and quality control.'
    },
    {
      industry: 'Retail',
      technologies: ['AR Shopping', 'AI Personalization', 'IoT Inventory', 'Blockchain Supply Chain'],
      description: 'Immersive retail experiences with intelligent automation and supply chain transparency.'
    }
  ];

  return (
    <>
      <Head>
        <title>Emerging Technologies - Zion Tech Group</title>
        <meta name="description" content="Explore cutting-edge emerging technologies including AI, blockchain, IoT, AR/VR, and quantum computing solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <SimpleNavigation />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 to-orange-50 py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex items-center justify-center mb-4">
                <Rocket className="h-8 w-8 text-orange-600 mr-3" />
                <span className="text-base font-semibold leading-7 text-orange-600">Emerging Technologies</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Shape the Future with Emerging Tech
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Explore the cutting edge of technology with our emerging tech solutions. From AI and blockchain 
                to IoT and quantum computing, we help you leverage tomorrow's technologies today to create 
                innovative solutions and gain competitive advantages.
              </p>
            </div>
          </div>
        </section>

        {/* Technologies Grid */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Emerging Technologies We Work With</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Cutting-edge technologies that are shaping the future of business and society
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg">
                      <tech.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{tech.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{tech.description}</p>
                  <ul className="space-y-2">
                    {tech.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Invest in Emerging Technologies?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Strategic advantages of early adoption and innovation leadership
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-200">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Industry Applications</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                How emerging technologies are transforming different industries
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {applications.map((app, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{app.industry}</h3>
                  <p className="text-gray-600 mb-6">{app.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {app.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Trends */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Technology Trends 2024-2025</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Key emerging technology trends that will shape the future
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Brain className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Generative AI</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  AI systems that can create content, code, and solutions autonomously, revolutionizing creativity and problem-solving.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600 text-sm">Content Generation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600 text-sm">Code Automation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600 text-sm">Design Assistance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Network className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">5G & Edge Computing</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Ultra-fast connectivity combined with distributed computing for real-time applications and IoT ecosystems.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600 text-sm">Real-time Processing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600 text-sm">IoT Connectivity</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600 text-sm">Low Latency</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Lock className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Web3 & Metaverse</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Decentralized web technologies and virtual worlds creating new digital economies and experiences.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600 text-sm">Decentralized Apps</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600 text-sm">Virtual Worlds</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600 text-sm">Digital Assets</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-orange-600 to-red-600">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Explore Emerging Technologies?
              </h2>
              <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how emerging technologies can transform your business and create new opportunities for growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-orange-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Explore Emerging Tech</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/services"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-orange-600 transition-colors"
                >
                  View All Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SimpleFooter />
    </>
  );
}