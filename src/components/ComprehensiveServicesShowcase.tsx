import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, Cloud, Shield, Code, Zap, Database, Server, Lock, 
  BarChart3, Users, Globe, ArrowRight, Search, Filter,
  Star, TrendingUp, CheckCircle, Rocket, Cpu, Network,
  Smartphone, ShieldCheck, Globe2, ServerCog, DatabaseIcon,
  FileText, Palette, Target, Lightbulb, Wrench, Cog
} from 'lucide-react';

interface Service {
  id: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  features: string[];
  category: string;
  icon: string;
  color: string;
  popular?: boolean;
  new?: boolean;
  link: string;
}

const services: Service[] = [
  // AI & Machine Learning Services
  {
    id: 'ai-autonomous-suite',
    name: 'AI Autonomous Suite',
    tagline: 'Intelligent automation for modern businesses',
    price: '$79/month',
    description: 'Comprehensive AI-powered automation platform that streamlines business processes and increases efficiency.',
    features: ['Workflow automation', 'AI decision making', 'Integration APIs', 'Custom workflows', 'Analytics dashboard'],
    category: 'AI & Machine Learning',
    icon: '🤖',
    color: 'from-blue-600 to-purple-600',
    popular: true,
    link: 'https://ziontechgroup.com/services/ai-autonomous-suite'
  },
  {
    id: 'ai-email-responder',
    name: 'AI Email Responder',
    tagline: 'Autonomous inbox triage with drafts, tone, and approvals',
    price: '$99/month',
    description: 'AI agent categorizes, prioritizes, and drafts replies with brand tone and policy guardrails.',
    features: ['Inbox triage and SLA queues', 'Draft replies with tone control', 'Approvals and human handoff', 'CSAT analytics'],
    category: 'AI & Machine Learning',
    icon: '📨',
    color: 'from-purple-600 to-indigo-700',
    popular: true,
    link: 'https://ziontechgroup.com/services/ai-email-responder'
  },
  {
    id: 'ai-customer-qa-benchmark',
    name: 'AI Customer QA Benchmark',
    tagline: 'Continuously test your AI agents with real-world scripts',
    price: '$99/month',
    description: 'Scenario-based QA and red-teaming for AI agents with regression baselines and compliance scenarios.',
    features: ['Scripted test suites', 'Hallucination checks', 'RAG validation', 'Compliance guardrails'],
    category: 'AI & Machine Learning',
    icon: '🔬',
    color: 'from-indigo-600 to-violet-700',
    link: 'https://ziontechgroup.com/services/ai-customer-qa-benchmark'
  },
  {
    id: 'ai-autonomous-code-review',
    name: 'AI Autonomous Code Review',
    tagline: 'Automated code quality, security, and architecture reviews',
    price: '$149/month',
    description: 'AI-powered code review that catches bugs, security issues, and architectural problems before they reach production.',
    features: ['Automated code analysis', 'Security vulnerability detection', 'Architecture compliance', 'PR integration'],
    category: 'AI & Machine Learning',
    icon: '🔍',
    color: 'from-emerald-600 to-teal-700',
    new: true,
    link: 'https://ziontechgroup.com/services/ai-autonomous-code-review'
  },

  // Cloud & Infrastructure Services
  {
    id: 'quantum-cloud-infrastructure',
    name: 'Quantum Cloud Infrastructure',
    tagline: 'Next-generation cloud computing with quantum capabilities',
    price: '$299/month',
    description: 'Advanced cloud infrastructure leveraging quantum computing principles for unprecedented performance and security.',
    features: ['Quantum-resistant encryption', 'Advanced load balancing', 'AI-powered optimization', 'Global edge network'],
    category: 'Cloud & Infrastructure',
    icon: '⚛️',
    color: 'from-cyan-600 to-blue-700',
    new: true,
    link: 'https://ziontechgroup.com/services/quantum-cloud-infrastructure'
  },
  {
    id: 'autonomous-devops-platform',
    name: 'Autonomous DevOps Platform',
    tagline: 'Self-healing infrastructure with intelligent automation',
    price: '$199/month',
    description: 'AI-driven DevOps platform that automatically detects, diagnoses, and resolves infrastructure issues.',
    features: ['Self-healing systems', 'Predictive maintenance', 'Automated scaling', 'Performance optimization'],
    category: 'Cloud & Infrastructure',
    icon: '⚡',
    color: 'from-orange-600 to-red-600',
    popular: true,
    link: 'https://ziontechgroup.com/services/autonomous-devops-platform'
  },
  {
    id: 'edge-computing-orchestrator',
    name: 'Edge Computing Orchestrator',
    tagline: 'Intelligent edge computing management and optimization',
    price: '$159/month',
    description: 'Advanced edge computing platform that optimizes resource allocation and performance across distributed networks.',
    features: ['Edge node management', 'Dynamic load balancing', 'Latency optimization', 'Resource orchestration'],
    category: 'Cloud & Infrastructure',
    icon: '🌐',
    color: 'from-green-600 to-emerald-700',
    link: 'https://ziontechgroup.com/services/edge-computing-orchestrator'
  },

  // Cybersecurity Services
  {
    id: 'zero-trust-network-architecture',
    name: 'Zero Trust Network Architecture',
    tagline: 'Comprehensive zero-trust security implementation',
    price: '$399/month',
    description: 'Complete zero-trust network architecture with continuous verification and adaptive access controls.',
    features: ['Continuous verification', 'Adaptive access controls', 'Threat detection', 'Compliance automation'],
    category: 'Cybersecurity',
    icon: '🛡️',
    color: 'from-red-600 to-pink-600',
    popular: true,
    link: 'https://ziontechgroup.com/services/zero-trust-network-architecture'
  },
  {
    id: 'ai-powered-threat-intelligence',
    name: 'AI-Powered Threat Intelligence',
    tagline: 'Real-time threat detection and response with AI',
    price: '$249/month',
    description: 'Advanced threat intelligence platform using AI to detect, analyze, and respond to security threats in real-time.',
    features: ['Real-time threat detection', 'AI-powered analysis', 'Automated response', 'Threat hunting'],
    category: 'Cybersecurity',
    icon: '🔒',
    color: 'from-indigo-600 to-purple-700',
    new: true,
    link: 'https://ziontechgroup.com/services/ai-powered-threat-intelligence'
  },
  {
    id: 'm365-security-hardening-kit',
    name: 'M365 Security Hardening Kit',
    tagline: 'Turnkey baseline hardening and drift detection',
    price: '$199/month',
    description: 'Enforce recommended security baselines in Microsoft 365 with drift monitoring and auto-remediation.',
    features: ['Secure baseline as code', 'Misconfiguration detection', 'Auto-remediation', 'Executive reporting'],
    category: 'Cybersecurity',
    icon: '🔐',
    color: 'from-emerald-600 to-teal-700',
    link: 'https://ziontechgroup.com/services/m365-security-hardening'
  },

  // Micro SaaS Services
  {
    id: 'mobile-first-survey',
    name: 'Mobile-First Survey Tool',
    tagline: 'Tap-friendly micro-surveys with AI insights',
    price: '$19/month',
    description: 'Launch branded, mobile-optimized surveys with AI-based insight clustering and churn-risk flags.',
    features: ['One-tap answers', 'AI clustering', 'Embeddable widgets', 'Export capabilities'],
    category: 'Micro SaaS',
    icon: '📱',
    color: 'from-emerald-600 to-teal-700',
    link: 'https://ziontechgroup.com/services/mobile-first-survey'
  },
  {
    id: 'event-management-dashboard',
    name: 'Event Management Dashboard',
    tagline: 'All-in-one event management platform',
    price: '$89/month',
    description: 'Complete event management solution with ticketing, check-in, scheduling, and analytics.',
    features: ['Tickets and invoices', 'QR check-in', 'Speaker management', 'Post-event analytics'],
    category: 'Micro SaaS',
    icon: '🎟️',
    color: 'from-cyan-600 to-blue-700',
    popular: true,
    link: 'https://ziontechgroup.com/services/event-management-dashboard'
  },
  {
    id: 'churn-risk-alerts',
    name: 'Churn Risk Alerts for Slack',
    tagline: 'Proactive retention with behavior analysis',
    price: '$49/month',
    description: 'Tracks product usage and support sentiment to flag churn risks with next-best-action playbooks.',
    features: ['Usage anomaly detection', 'Sentiment analysis', 'Playbooks', 'Owner assignment'],
    category: 'Micro SaaS',
    icon: '⚠️',
    color: 'from-amber-600 to-orange-700',
    link: 'https://ziontechgroup.com/services/churn-risk-alerts'
  },
  {
    id: 'subscription-revenue-analytics',
    name: 'Subscription Revenue Analytics',
    tagline: 'MRR, churn, and cohort analysis with anomaly detection',
    price: '$59/month',
    description: 'Self-serve dashboards for subscription metrics with anomaly detection and revenue projections.',
    features: ['MRR/ARR trends', 'Anomaly detection', 'CSV imports', 'Board-ready reports'],
    category: 'Micro SaaS',
    icon: '📈',
    color: 'from-fuchsia-600 to-pink-700',
    popular: true,
    link: 'https://ziontechgroup.com/services/subscription-revenue-analytics'
  },

  // Business Intelligence & Analytics
  {
    id: 'ai-business-intelligence',
    name: 'AI Business Intelligence Platform',
    tagline: 'Intelligent insights and predictive analytics',
    price: '$179/month',
    description: 'AI-powered business intelligence platform that provides actionable insights and predictive analytics.',
    features: ['Predictive analytics', 'Natural language queries', 'Automated insights', 'Real-time dashboards'],
    category: 'Business Intelligence',
    icon: '📊',
    color: 'from-blue-600 to-indigo-700',
    new: true,
    link: 'https://ziontechgroup.com/services/ai-business-intelligence'
  },
  {
    id: 'data-pipeline-automation',
    name: 'Data Pipeline Automation',
    tagline: 'Intelligent data processing and transformation',
    price: '$129/month',
    description: 'Automated data pipeline platform that intelligently processes, transforms, and delivers data insights.',
    features: ['Automated ETL processes', 'Data quality monitoring', 'Real-time processing', 'Error handling'],
    category: 'Business Intelligence',
    icon: '🔄',
    color: 'from-green-600 to-blue-600',
    link: 'https://ziontechgroup.com/services/data-pipeline-automation'
  },

  // Developer Tools
  {
    id: 'api-changelog-notifier',
    name: 'API Changelog Notifier',
    tagline: 'Monitor API changes and notify integrators',
    price: '$19/month',
    description: 'Monitor OpenAPI/GraphQL changes and send release notes, breaking-change alerts, and migration timelines.',
    features: ['Schema diffing', 'Release notes', 'Deprecation timelines', 'Email/Slack alerts'],
    category: 'Developer Tools',
    icon: '🔔',
    color: 'from-cyan-600 to-blue-700',
    link: 'https://ziontechgroup.com/services/api-changelog-notifier'
  },
  {
    id: 'code-quality-automation',
    name: 'Code Quality Automation',
    tagline: 'Automated code review and quality assurance',
    price: '$89/month',
    description: 'Automated code quality platform that continuously monitors and improves code standards.',
    features: ['Automated reviews', 'Quality metrics', 'Style enforcement', 'Performance analysis'],
    category: 'Developer Tools',
    icon: '✨',
    color: 'from-purple-600 to-pink-600',
    new: true,
    link: 'https://ziontechgroup.com/services/code-quality-automation'
  },

  // Compliance & Governance
  {
    id: 'iso-27001-evidence-kit',
    name: 'ISO 27001 Evidence Kit',
    tagline: 'Prebuilt controls and evidence collectors',
    price: '$149/month',
    description: 'Automate common ISO 27001 evidence with connectors, control mappings, and exportable audit packs.',
    features: ['Control library', 'Evidence collectors', 'Exceptions management', 'Audit exports'],
    category: 'Compliance & Governance',
    icon: '📋',
    color: 'from-indigo-600 to-blue-700',
    link: 'https://ziontechgroup.com/services/iso-27001-evidence-kit'
  },
  {
    id: 'soc2-compliance-automation',
    name: 'SOC2 Compliance Automation',
    tagline: 'Streamlined SOC2 compliance and monitoring',
    price: '$199/month',
    description: 'Automated SOC2 compliance platform with continuous monitoring and evidence collection.',
    features: ['Automated controls', 'Evidence collection', 'Continuous monitoring', 'Audit preparation'],
    category: 'Compliance & Governance',
    icon: '🏛️',
    color: 'from-emerald-600 to-teal-700',
    new: true,
    link: 'https://ziontechgroup.com/services/soc2-compliance-automation'
  },

  // Emerging Technologies
  {
    id: 'quantum-neural-network',
    name: 'Quantum Neural Network Platform',
    tagline: 'Next-generation AI with quantum computing',
    price: '$499/month',
    description: 'Revolutionary AI platform combining quantum computing with neural networks for unprecedented performance.',
    features: ['Quantum algorithms', 'Neural network optimization', 'Hybrid computing', 'Advanced analytics'],
    category: 'Emerging Technologies',
    icon: '🧠',
    color: 'from-violet-600 to-purple-700',
    new: true,
    link: 'https://ziontechgroup.com/services/quantum-neural-network'
  },
  {
    id: 'blockchain-web3-platform',
    name: 'Blockchain Web3 Platform',
    tagline: 'Enterprise blockchain and Web3 solutions',
    price: '$299/month',
    description: 'Comprehensive blockchain platform for enterprise applications with Web3 integration capabilities.',
    features: ['Smart contracts', 'DeFi integration', 'NFT marketplace', 'Cross-chain bridges'],
    category: 'Emerging Technologies',
    icon: '⛓️',
    color: 'from-orange-600 to-red-600',
    link: 'https://ziontechgroup.com/services/blockchain-web3-platform'
  },
  {
    id: 'space-tech-solutions',
    name: 'Space Technology Solutions',
    tagline: 'Innovative solutions for space industry',
    price: '$399/month',
    description: 'Cutting-edge technology solutions designed specifically for the space industry and satellite operations.',
    features: ['Satellite management', 'Space data analytics', 'Orbital optimization', 'Ground station integration'],
    category: 'Emerging Technologies',
    icon: '🚀',
    color: 'from-blue-600 to-indigo-700',
    new: true,
    link: 'https://ziontechgroup.com/services/space-tech-solutions'
  }
];

const categories = [
  'All Services',
  'AI & Machine Learning',
  'Cloud & Infrastructure',
  'Cybersecurity',
  'Micro SaaS',
  'Business Intelligence',
  'Developer Tools',
  'Compliance & Governance',
  'Emerging Technologies'
];

export default function ComprehensiveServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'All Services' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning': return <Brain className="h-5 w-5" />;
      case 'Cloud & Infrastructure': return <Cloud className="h-5 w-5" />;
      case 'Cybersecurity': return <Shield className="h-5 w-5" />;
      case 'Micro SaaS': return <Code className="h-5 w-5" />;
      case 'Business Intelligence': return <BarChart3 className="h-5 w-5" />;
      case 'Developer Tools': return <Wrench className="h-5 w-5" />;
      case 'Compliance & Governance': return <CheckCircle className="h-5 w-5" />;
      case 'Emerging Technologies': return <Rocket className="h-5 w-5" />;
      default: return <Zap className="h-5 w-5" />;
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Comprehensive{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Tech Solutions
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover our complete suite of innovative services, from AI automation to quantum computing, 
              designed to transform your business and drive growth.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </Link>
              <Link
                to="/services"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Badges */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {service.new && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        New
                      </span>
                    )}
                    {service.popular && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Popular
                      </span>
                    )}
                  </div>
                  <div className="text-2xl">{service.icon}</div>
                </div>

                {/* Service Info */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{service.tagline}</p>
                <p className="text-gray-700 mb-4">{service.description}</p>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Category */}
                <div className="flex items-center gap-2 mb-6">
                  {getCategoryIcon(service.category)}
                  <span className="text-sm text-gray-500">{service.category}</span>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No services found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All Services');
                  setSearchTerm('');
                }}
                className="mt-4 text-blue-600 hover:text-blue-500 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your business?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Let's discuss how our comprehensive suite of services can help you achieve your goals and drive innovation.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-colors"
              >
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </Link>
              <Link
                to="/services"
                className="text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors"
              >
                View all services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
