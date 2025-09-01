import React from 'react';

export default function ServicesSimple() {
  const services = [
    {
      id: 'ai-autonomous-business-manager-2025',
      name: 'AI Autonomous Business Manager 2025',
      tagline: 'Fully autonomous business operations with AI decision-making',
      description: 'Revolutionary AI platform that autonomously manages business operations, makes strategic decisions, optimizes resources, and drives growth with minimal human intervention.',
      category: 'AI Solutions',
      price: '$2,999',
      billing: 'month',
      features: [
        'Autonomous decision-making engine',
        'Real-time market analysis and adaptation',
        'Predictive business modeling with 95% accuracy',
        'Resource optimization algorithms',
        'Strategic planning automation'
      ],
      benefits: [
        'Reduce operational costs by 40%',
        'Improve decision-making speed by 80%',
        'Increase revenue by 25%',
        'Eliminate human bias in decisions',
        '24/7 autonomous operation'
      ],
      marketSize: '$15.7B',
      growthRate: '+35% YoY',
      rating: 4.9,
      reviews: 156,
      popular: true,
      icon: '🤖',
      color: 'from-blue-600 to-purple-700'
    },
    {
      id: 'quantum-cybersecurity-suite-2025',
      name: 'Quantum Cybersecurity Suite 2025',
      tagline: 'Quantum-resistant security with AI threat detection',
      description: 'Next-generation cybersecurity platform combining quantum-resistant encryption, AI-powered threat detection, and autonomous response capabilities for enterprise-grade protection.',
      category: 'Cybersecurity',
      price: '$8,999',
      billing: 'month',
      features: [
        'Quantum-resistant encryption algorithms',
        'AI-powered threat detection with 99.99% accuracy',
        'Zero-trust architecture implementation',
        'Real-time threat intelligence feeds',
        'Automated incident response'
      ],
      benefits: [
        'Protect against quantum computing threats',
        'Reduce security incidents by 90%',
        'Automate compliance processes',
        'Real-time threat detection and response',
        'Future-proof security infrastructure'
      ],
      marketSize: '$182.3B',
      growthRate: '+12.4% YoY',
      rating: 4.8,
      reviews: 89,
      popular: true,
      icon: '🔐',
      color: 'from-red-600 to-orange-700'
    },
    {
      id: 'quantum-financial-trading-platform-2025',
      name: 'Quantum Financial Trading Platform 2025',
      tagline: 'Quantum-powered trading with AI risk management',
      description: 'Revolutionary quantum computing-powered financial trading platform providing ultra-fast market analysis, risk assessment, and automated trading strategies with quantum advantage.',
      category: 'FinTech & DeFi',
      price: '$15,999',
      billing: 'month',
      features: [
        'Quantum-powered market analysis',
        'Ultra-fast trading execution (<1ms latency)',
        'AI-driven risk assessment',
        'Portfolio optimization algorithms',
        'Real-time market sentiment analysis'
      ],
      benefits: [
        'Execute trades 1000x faster than traditional systems',
        'Improve trading accuracy by 85%',
        'Reduce risk exposure by 60%',
        'Increase portfolio returns by 40%',
        '24/7 automated trading'
      ],
      marketSize: '$8.9B',
      growthRate: '+28% YoY',
      rating: 4.9,
      reviews: 234,
      popular: true,
      icon: '📈',
      color: 'from-green-600 to-emerald-700'
    },
    {
      id: 'autonomous-healthcare-diagnostics-2025',
      name: 'Autonomous Healthcare Diagnostics Platform 2025',
      tagline: 'AI-powered medical diagnostics with FDA approval',
      description: 'AI-powered autonomous healthcare diagnostics platform providing real-time medical imaging analysis, disease prediction, and treatment recommendations with FDA approval and HIPAA compliance.',
      category: 'BioTech & Health',
      price: '$7,999',
      billing: 'month',
      features: [
        'AI-powered medical imaging analysis',
        'Real-time disease detection and classification',
        'Predictive health analytics',
        'Automated radiology reporting',
        'Treatment recommendation engine'
      ],
      benefits: [
        'Improve diagnostic accuracy by 95%',
        'Reduce diagnosis time by 80%',
        'Lower healthcare costs by 30%',
        'Increase patient outcomes by 40%',
        '24/7 diagnostic support'
      ],
      marketSize: '$45.2B',
      growthRate: '+18.7% YoY',
      rating: 4.8,
      reviews: 167,
      popular: true,
      icon: '🏥',
      color: 'from-blue-600 to-cyan-700'
    },
    {
      id: 'autonomous-supply-chain-platform-2025',
      name: 'Autonomous Supply Chain Platform 2025',
      tagline: 'AI-powered end-to-end supply chain optimization',
      description: 'AI-powered autonomous supply chain management platform that predicts disruptions, optimizes logistics, and automates decision-making for end-to-end supply chain visibility and efficiency.',
      category: 'Supply Chain & Logistics',
      price: '$5,999',
      billing: 'month',
      features: [
        'AI-powered demand forecasting with 98% accuracy',
        'Autonomous inventory optimization',
        'Real-time supply chain visibility',
        'Predictive disruption detection',
        'Automated supplier selection'
      ],
      benefits: [
        'Reduce supply chain costs by 25%',
        'Improve delivery times by 40%',
        'Increase inventory turnover by 35%',
        'Reduce stockouts by 90%',
        'Enhance sustainability metrics'
      ],
      marketSize: '$19.2B',
      growthRate: '+22.3% YoY',
      rating: 4.7,
      reviews: 145,
      popular: true,
      icon: '🚚',
      color: 'from-orange-600 to-red-700'
    },
    {
      id: 'autonomous-energy-management-2025',
      name: 'Autonomous Energy Management Platform 2025',
      tagline: 'AI-powered energy optimization and trading',
      description: 'AI-powered autonomous energy management platform that optimizes energy consumption, predicts demand, and automates energy trading for utilities, commercial buildings, and industrial facilities.',
      category: 'Energy Management',
      price: '$5,499',
      billing: 'month',
      features: [
        'AI-powered energy consumption optimization',
        'Real-time demand forecasting',
        'Automated energy trading',
        'Smart grid integration',
        'Renewable energy optimization'
      ],
      benefits: [
        'Reduce energy costs by 30%',
        'Improve energy efficiency by 40%',
        'Increase renewable energy utilization by 50%',
        'Reduce carbon emissions by 25%',
        'Automate energy trading decisions'
      ],
      marketSize: '$12.8B',
      growthRate: '+19.5% YoY',
      rating: 4.6,
      reviews: 98,
      popular: false,
      icon: '⚡',
      color: 'from-yellow-600 to-orange-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 py-20 sm:py-32">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
              <span>⚡</span>
              <span>2025 Innovation Showcase</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Revolutionary AI & Tech Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Discover our comprehensive portfolio of cutting-edge AI, cybersecurity, quantum computing, and emerging technology solutions designed to transform your business.
            </p>
            <div className="mt-8 flex items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-sm text-blue-100">
                <span>👥</span>
                <span>1000+ Enterprise Clients</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-100">
                <span>⭐</span>
                <span>4.8/5 Customer Rating</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-100">
                <span>🛡️</span>
                <span>SOC 2 Type II Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span>📞</span>
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📧</span>
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span>Visit Website</span>
                <span>🔗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Market-Leading Solutions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our services are designed to address the most pressing challenges in today's rapidly evolving technology landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 text-center">
              <div className="mx-auto h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🧠</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI & Machine Learning</h3>
              <p className="text-sm text-gray-600 mb-3">Advanced AI solutions for business automation and intelligence</p>
              <div className="text-2xl font-bold text-blue-600">$15.7B</div>
              <div className="text-sm text-green-600">+35% YoY Growth</div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-100 rounded-xl p-6 text-center">
              <div className="mx-auto h-12 w-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cybersecurity</h3>
              <p className="text-sm text-gray-600 mb-3">Quantum-resistant security and threat protection</p>
              <div className="text-2xl font-bold text-red-600">$182.3B</div>
              <div className="text-sm text-green-600">+12.4% YoY Growth</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 text-center">
              <div className="mx-auto h-12 w-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">📈</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">FinTech & Trading</h3>
              <p className="text-sm text-gray-600 mb-3">Quantum-powered financial solutions</p>
              <div className="text-2xl font-bold text-green-600">$8.9B</div>
              <div className="text-sm text-green-600">+28% YoY Growth</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl p-6 text-center">
              <div className="mx-auto h-12 w-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Emerging Tech</h3>
              <p className="text-sm text-gray-600 mb-3">Quantum computing and blockchain solutions</p>
              <div className="text-2xl font-bold text-purple-600">$45.2B</div>
              <div className="text-sm text-green-600">+18.7% YoY Growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {services.length} revolutionary services
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.id} className="group relative bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    POPULAR
                  </div>
                )}

                <div className="p-6">
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{service.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-sm text-gray-500">{service.tagline}</p>
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                      <span className="text-gray-500">/{service.billing}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-xs text-gray-600">
                          <span className="text-green-500">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Market Info */}
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-gray-500">Market Size:</span>
                        <p className="font-medium">{service.marketSize}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Growth Rate:</span>
                        <p className="font-medium text-green-600">{service.growthRate}</p>
                      </div>
                    </div>
                  </div>

                  {/* Category and Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {service.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-xs text-gray-600">{service.rating}</span>
                      <span className="text-xs text-gray-400">({service.reviews})</span>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4 p-3 bg-green-50 rounded-lg">
                    <div className="text-xs">
                      <span className="text-gray-500">Key Benefits:</span>
                      <ul className="mt-1 space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, index) => (
                          <li key={index} className="text-green-700">• {benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-2">
                    <a
                      href="https://ziontechgroup.com/contact"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                    >
                      Learn More
                      <span className="ml-2">→</span>
                    </a>
                    <a
                      href="tel:+13024640950"
                      className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Let's discuss how our innovative services can help you achieve your goals and stay ahead of the competition.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+13024640950"
                className="w-full sm:w-auto rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-all duration-200"
              >
                Call Now: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="w-full sm:w-auto rounded-md border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Email Us
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="mx-auto h-12 w-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">📞</span>
                </div>
                <h3 className="text-lg font-semibold text-white">Phone Support</h3>
                <p className="mt-2 text-blue-100">
                  +1 302 464 0950<br />
                  24/7 Availability
                </p>
              </div>
              <div>
                <div className="mx-auto h-12 w-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">📧</span>
                </div>
                <h3 className="text-lg font-semibold text-white">Email Support</h3>
                <p className="mt-2 text-blue-100">
                  kleber@ziontechgroup.com<br />
                  Fast Response Time
                </p>
              </div>
              <div>
                <div className="mx-auto h-12 w-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">📍</span>
                </div>
                <h3 className="text-lg font-semibold text-white">Visit Us</h3>
                <p className="mt-2 text-blue-100">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}