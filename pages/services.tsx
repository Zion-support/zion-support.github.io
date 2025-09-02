import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import {
  ArrowRight,
  Brain,
  Cloud,
  Shield,
  Zap,
  Database,
  Server,
  Lock,
  BarChart3,
  Users,
  Globe,
  Code,
  CheckCircle,
  Star,
  TrendingUp,
  Clock,
  Award,
  Network,
} from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function Services() {
  const title = 'Services — Zion Tech Group';
  const description =
    'AI autonomous systems, cloud platforms, cybersecurity, and micro SaaS delivery.';

  return (
    <Layout>
      <PageTransition>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm: py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-blue-600 mr-2" />
                <span className="text-base font-semibold leading-7 text-blue-600">
                  Our Services
                </span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Services
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                From strategy to production, we deliver outcomes fast. Our
                comprehensive suite of services covers everything you need to
                transform your business.
              </p>
            </div>
          </div>
        </section>
        {/* Services Grid */}
        <section className="py-24 sm: py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* AI Autonomous Systems */}
              <div
                id="ai"
                className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-300"
              >
                <div className="flex items-center gap-x-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 group-hover:bg-blue-700 transition-colors">
                    <Brain className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      AI Autonomous Systems
                    </h2>
                    <p className="text-sm text-blue-600 font-medium">
                      Intelligent Automation
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Transform your operations with intelligent automation and
                  AI-powered decision making.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-gray-700">
                      Sales/CS multi-agent copilots
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-gray-700">
                      RAG and workflow orchestration
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-gray-700">
                      Observability and guardrails
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-gray-700">
                      Intelligent process automation
                    </span>
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>2-4 weeks delivery</span>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors group"
                    aria-label="Get started with AI services"
                  >
                    Get started with AI
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              {/* Cloud Platforms */}
              <div
                id="cloud"
                className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-green-300"
              >
                <div className="flex items-center gap-x-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 group-hover:bg-green-700 transition-colors">
                    <Cloud className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      Cloud Platforms
                    </h2>
                    <p className="text-sm text-green-600 font-medium">
                      Scalable Infrastructure
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Build scalable, resilient cloud infrastructure that grows with
                  your business.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">
                      Serverless and Kubernetes
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">
                      Data pipelines and ML ops
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">
                      FinOps and SRE practices
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">
                      Multi-cloud architecture
                    </span>
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>4-8 weeks delivery</span>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-sm font-semibold text-green-600 hover: text-green-500 transition-colors group"
                    aria-label="Get started with cloud services"
                  >
                    Get started with Cloud
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              {/* Cybersecurity */}
              <div
                id="cybersecurity"
                className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-purple-300"
              >
                <div className="flex items-center gap-x-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600 group-hover:bg-purple-700 transition-colors">
                    <Shield className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      Cybersecurity
                    </h2>
                    <p className="text-sm text-purple-600 font-medium">
                      Zero-Trust Security
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Protect your business with enterprise-grade security
                  frameworks and compliance automation.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                    <span className="text-sm text-gray-700">
                      Zero-trust architecture
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                    <span className="text-sm text-gray-700">
                      Compliance automation
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                    <span className="text-sm text-gray-700">
                      Incident response
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                    <span className="text-sm text-gray-700">
                      Security audits
                    </span>
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>3-6 weeks delivery</span>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-500 transition-colors group"
                    aria-label="Get started with cybersecurity services"
                  >
                    Get started with Security
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              {/* Micro SaaS */}
              <div
                id="saas"
                className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-orange-300"
              >
                <div className="flex items-center gap-x-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600 group-hover:bg-orange-700 transition-colors">
                    <Code className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      Micro SaaS
                    </h2>
                    <p className="text-sm text-orange-600 font-medium">
                      Custom Solutions
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Custom software solutions tailored to your specific business
                  needs and workflows.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-sm text-gray-700">
                      Custom web applications
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-sm text-gray-700">
                      API development
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-sm text-gray-700">
                      Integration services
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-sm text-gray-700">
                      Maintenance & support
                    </span>
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>6-12 weeks delivery</span>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-500 transition-colors group"
                    aria-label="Get started with custom software services"
                  >
                    Get started with SaaS
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
            {/* Additional Core Services */}
            <div className="grid gap-8 lg:grid-cols-2 mt-16">
              {/* Blockchain & Web3 Services */}
              <div
                id="blockchain"
                className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-indigo-300"
              >
                <div className="flex items-center gap-x-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600 group-hover:bg-indigo-700 transition-colors">
                    <Database className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      Blockchain & Web3 Solutions
                    </h2>
                    <p className="text-sm text-indigo-600 font-medium">
                      Decentralized Innovation
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Build secure, scalable blockchain applications and Web3
                  solutions for the decentralized future.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm text-gray-700">
                      Smart contract development and auditing
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm text-gray-700">
                      DeFi protocols and DApp development
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm text-gray-700">
                      NFT marketplace and tokenization
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm text-gray-700">
                      Cross-chain interoperability solutions
                    </span>
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>4-12 weeks delivery</span>
                  </div>
                  <Link
                    href="https: //ziontechgroup.com/blockchain-solutions"
                    className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-500 transition-colors group"
                    aria-label="Get started with blockchain services"
                  >
                    Get started with Web3
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              {/* IoT & Edge Computing */}
              <div
                id="iot"
                className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-teal-300"
              >
                <div className="flex items-center gap-x-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-600 group-hover:bg-teal-700 transition-colors">
                    <Network className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      IoT & Edge Computing
                    </h2>
                    <p className="text-sm text-teal-600 font-medium">
                      Connected Intelligence
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Connect and manage IoT devices with edge computing for
                  real-time data processing and analytics.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-teal-600" />
                    <span className="text-sm text-gray-700">
                      IoT device management and monitoring
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-teal-600" />
                    <span className="text-sm text-gray-700">
                      Edge computing and real-time analytics
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-teal-600" />
                    <span className="text-sm text-gray-700">
                      Industrial IoT and predictive maintenance
                    </span>
                  </li>
                  <li className="flex items-center gap-x-3">
                    <CheckCircle className="h-4 w-4 text-teal-600" />
                    <span className="text-sm text-gray-700">
                      Smart city and building automation
                    </span>
                  </li>
                </ul>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>6-16 weeks delivery</span>
                  </div>
                  <Link
                    href="https://ziontechgroup.com/iot-solutions"
                    className="inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-500 transition-colors group"
                    aria-label="Get started with IoT services"
                  >
                    Get started with IoT
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Expanded Service Catalog */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-14">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Expanded Service Catalog
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                More real, production-ready services across AI, IT, and Micro
                SaaS. Transparent starting prices and clear outcomes. Visit our
                website at{' '}
                <a
                  href="https: //ziontechgroup.com"
                  className="text-blue-600 hover:text-blue-500 underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  ziontechgroup.com
                </a>
                .
              </p>
              <p className="mt-3 text-sm text-gray-500">
                Average market price ranges referenced from public agency rate
                cards and vendor quotes. For tailored pricing, see our{' '}
                <Link
                  href="/pricing-guide"
                  className="text-blue-600 hover: text-blue-500 underline"
                >
                  Pricing Guide
                </Link>
                .
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Services */}
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Brain className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">
                    Revenue AI Agents (Sales/CS)
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Multi-agent copilots for SDR, AM, and Support with guardrails.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Integrates CRM, Helpdesk, and Knowledge Base</li>
                  <li>• Measurable pipeline lift and deflection</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-blue-600">
                    Starting $8k–$25k
                  </span>
                  <Link
                    href="/contact"
                    className="text-blue-600 hover: text-blue-500"
                  >
                    Talk to us →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Database className="h-5 w-5 text-indigo-600" />
                  <h3 className="font-semibold text-gray-900">
                    Data Engineering as a Service
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Modern ELT, dbt, and warehouse modeling, with governance.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Snowflake/BigQuery/Redshift, Lakehouse setups</li>
                  <li>• Data quality SLAs and observability</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-indigo-600">
                    Starting $10k–$40k
                  </span>
                  <Link
                    href="/contact"
                    className="text-indigo-600 hover: text-indigo-500"
                  >
                    Get estimate →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Server className="h-5 w-5 text-emerald-600" />
                  <h3 className="font-semibold text-gray-900">
                    MLOps Platform Setup
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  CI/CD for models, feature stores, evals, and monitoring.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Vertex/SageMaker/Databricks integrations</li>
                  <li>• Reproducible pipelines and governance</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-emerald-600">
                    Starting $15k–$60k
                  </span>
                  <Link
                    href="/contact"
                    className="text-emerald-600 hover: text-emerald-500"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
              {/* IT & Cloud */}
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Cloud className="h-5 w-5 text-green-600" />
                  <h3 className="font-semibold text-gray-900">
                    FinOps & Cloud Cost Optimization
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Rightsizing, savings plans, architectural refactors for cost.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Typical 20–45% monthly savings</li>
                  <li>• Automated policy enforcement</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-green-600">
                    Assessments $4k–$12k
                  </span>
                  <Link
                    href="/contact"
                    className="text-green-600 hover: text-green-500"
                  >
                    Start now →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="h-5 w-5 text-purple-600" />
                  <h3 className="font-semibold text-gray-900">
                    SOC-as-a-Service
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Managed detection & response with 24/7 coverage.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• SIEM, EDR, and threat intel</li>
                  <li>• Incident playbooks and compliance</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-purple-600">
                    From $3k/mo
                  </span>
                  <Link
                    href="/contact"
                    className="text-purple-600 hover: text-purple-500"
                  >
                    Request details →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="h-5 w-5 text-orange-600" />
                  <h3 className="font-semibold text-gray-900">
                    Fractional CTO/Architecture Advisory
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Strategy, roadmap, and architecture leadership on-demand.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Platform modernization & product strategy</li>
                  <li>• Vendor selection and governance</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-orange-600">
                    From $4k/mo
                  </span>
                  <Link
                    href="/contact"
                    className="text-orange-600 hover: text-orange-500"
                  >
                    Book intro →
                  </Link>
                </div>
              </div>
              {/* AI Services - Additional */}
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Brain className="h-5 w-5 text-violet-600" />
                  <h3 className="font-semibold text-gray-900">
                    AI-Powered Business Intelligence
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Automated insights, predictive analytics, and intelligent
                  reporting.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Natural language query interface</li>
                  <li>• Automated anomaly detection and alerts</li>
                  <li>• Custom dashboard generation</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-violet-600">
                    From $399/mo
                  </span>
                  <Link
                    href="/contact"
                    className="text-violet-600 hover: text-violet-500"
                  >
                    Schedule demo →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Database className="h-5 w-5 text-cyan-600" />
                  <h3 className="font-semibold text-gray-900">
                    Intelligent Document Processing
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Extract, classify, and process documents with AI accuracy.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• OCR with 99%+ accuracy</li>
                  <li>• Automated data extraction and validation</li>
                  <li>• Workflow automation and routing</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-cyan-600">
                    From $299/mo
                  </span>
                  <Link
                    href="/contact"
                    className="text-cyan-600 hover: text-cyan-500"
                  >
                    Try free trial →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="h-5 w-5 text-yellow-600" />
                  <h3 className="font-semibold text-gray-900">
                    AI Test Automation Platform
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Self-healing test scripts and intelligent test case
                  generation.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Visual regression testing with AI</li>
                  <li>• Automated test maintenance</li>
                  <li>• Cross-browser and device testing</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-yellow-600">
                    From $199/mo
                  </span>
                  <Link
                    href="/contact"
                    className="text-yellow-600 hover:text-yellow-500"
                  >
                    Start testing →
                  </Link>
                </div>
              </div>
              {/* Micro SaaS */}
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Code className="h-5 w-5 text-rose-600" />
                  <h3 className="font-semibold text-gray-900">
                    AI Content Localization SaaS
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Translate and culturally adapt content at scale.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Multi-market SEO and brand alignment</li>
                  <li>• Human-in-the-loop quality controls</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-rose-600">
                    From $199/mo
                  </span>
                  <Link
                    href="/contact"
                    className="text-rose-600 hover:text-rose-500"
                  >
                    Request demo →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <BarChart3 className="h-5 w-5 text-sky-600" />
                  <h3 className="font-semibold text-gray-900">
                    Predictive Maintenance Toolkit
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Out-of-the-box anomaly detection for equipment and IoT.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Sensor ingestion, dashboards, and alerts</li>
                  <li>• Edge or cloud deployment options</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-sky-600">
                    From $299/mo
                  </span>
                  <Link
                    href="/contact"
                    className="text-sky-600 hover: text-sky-500"
                  >
                    See live demo →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Lock className="h-5 w-5 text-teal-600" />
                  <h3 className="font-semibold text-gray-900">
                    Compliance Copilot (SOC2/HIPAA/GDPR)
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Automated evidence collection and continuous controls.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Policy templates and auditor-ready reports</li>
                  <li>• Ticketing and alerting integrations</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-teal-600">
                    From $249/mo
                  </span>
                  <Link
                    href="/contact"
                    className="text-teal-600 hover: text-teal-500"
                  >
                    Book a walkthrough →
                  </Link>
                </div>
              </div>
              {/* Additional IT Services */}
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Server className="h-5 w-5 text-lime-600" />
                  <h3 className="font-semibold text-gray-900">
                    DevOps Automation Platform
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Complete CI/CD pipelines with infrastructure as code.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• GitOps workflows and automated deployments</li>
                  <li>• Infrastructure monitoring and alerting</li>
                  <li>• Multi-cloud orchestration</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-lime-600">
                    From $599/mo
                  </span>
                  <Link
                    href="/contact"
                    className="text-lime-600 hover:text-lime-500"
                  >
                    Get started →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="h-5 w-5 text-pink-600" />
                  <h3 className="font-semibold text-gray-900">
                    Digital Transformation Consulting
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  End-to-end modernization strategy and implementation.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Legacy system migration and modernization</li>
                  <li>• Cloud-native architecture design</li>
                  <li>• Change management and training</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-pink-600">
                    From $8k–$50k
                  </span>
                  <Link
                    href="/contact"
                    className="text-pink-600 hover:text-pink-500"
                  >
                    Schedule consultation →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <BarChart3 className="h-5 w-5 text-amber-600" />
                  <h3 className="font-semibold text-gray-900">
                    Infrastructure Monitoring & Observability
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Real-time monitoring with AI-powered anomaly detection.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Application performance monitoring (APM)</li>
                  <li>• Log aggregation and analysis</li>
                  <li>• Predictive scaling and optimization</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-amber-600">
                    From $199/mo
                  </span>
                  <Link
                    href="/contact"
                    className="text-amber-600 hover: text-amber-500"
                  >
                    Monitor now →
                  </Link>
                </div>
              </div>
              {/* Additional Micro SaaS */}
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="h-5 w-5 text-emerald-600" />
                  <h3 className="font-semibold text-gray-900">
                    Smart Project Management Suite
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  AI-powered project tracking with intelligent resource
                  allocation.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Automated task prioritization and scheduling</li>
                  <li>• Team performance analytics and insights</li>
                  <li>• Integration with popular tools (Slack, Jira, etc.)</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-emerald-600">
                    From $149/mo
                  </span>
                  <Link
                    href="/contact"
                    className="text-emerald-600 hover: text-emerald-500"
                  >
                    Start free trial →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Star className="h-5 w-5 text-indigo-600" />
                  <h3 className="font-semibold text-gray-900">
                    Customer Feedback Intelligence Platform
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  AI-driven sentiment analysis and actionable insights from
                  customer feedback.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Multi-channel feedback aggregation</li>
                  <li>• Sentiment analysis and trend identification</li>
                  <li>• Automated response recommendations</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-indigo-600">
                    From $99/mo
                  </span>
                  <Link
                    href="/contact"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    Analyze feedback →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="h-5 w-5 text-red-600" />
                  <h3 className="font-semibold text-gray-900">
                    Workflow Automation Engine
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  No-code workflow builder with AI-powered optimization
                  suggestions.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Visual workflow designer with drag-and-drop</li>
                  <li>• 500+ pre-built integrations</li>
                  <li>• AI-powered efficiency recommendations</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-red-600">
                    From $79/mo
                  </span>
                  <Link
                    href="/contact"
                    className="text-red-600 hover:text-red-500"
                  >
                    Automate workflows →
                  </Link>
                </div>
              </div>
              {/* New AI-Powered Micro SaaS Services */}
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Brain className="h-5 w-5 text-purple-600" />
                  <h3 className="font-semibold text-gray-900">
                    AI-Powered Lead Scoring & Qualification
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Intelligent lead scoring with behavioral analysis and
                  conversion prediction.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Real-time lead scoring with 95%+ accuracy</li>
                  <li>• Behavioral pattern recognition and intent analysis</li>
                  <li>• Automated follow-up recommendations and timing</li>
                  <li>• CRM integration with Salesforce, HubSpot, Pipedrive</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-purple-600">
                    From $199/mo
                  </span>
                  <Link
                    href="https: //ziontechgroup.com/ai-lead-scoring"
                    className="text-purple-600 hover:text-purple-500"
                  >
                    Try demo →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Database className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">
                    Smart Data Quality & Enrichment Platform
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Automated data cleaning, validation, and enrichment with AI
                  accuracy.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Real-time data validation and deduplication</li>
                  <li>• AI-powered data enrichment from 50+ sources</li>
                  <li>• Automated data quality scoring and monitoring</li>
                  <li>• GDPR/CCPA compliant data processing</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-blue-600">
                    From $299/mo
                  </span>
                  <Link
                    href="https: //ziontechgroup.com/data-quality"
                    className="text-blue-600 hover:text-blue-500"
                  >
                    Clean your data →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="h-5 w-5 text-green-600" />
                  <h3 className="font-semibold text-gray-900">
                    AI-Powered Fraud Detection & Prevention
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Real-time fraud detection with machine learning and behavioral
                  analysis.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Real-time transaction monitoring and scoring</li>
                  <li>• Behavioral biometrics and device fingerprinting</li>
                  <li>• Customizable risk rules and thresholds</li>
                  <li>• Integration with payment processors and banks</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-green-600">
                    From $499/mo
                  </span>
                  <Link
                    href="https://ziontechgroup.com/fraud-detection"
                    className="text-green-600 hover:text-green-500"
                  >
                    Secure transactions →
                  </Link>
                </div>
              </div>
              {/* New IT Services */}
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Cloud className="h-5 w-5 text-cyan-600" />
                  <h3 className="font-semibold text-gray-900">
                    Multi-Cloud Migration & Management
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Seamless migration between AWS, Azure, GCP with cost
                  optimization.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Zero-downtime migration strategies</li>
                  <li>• Automated cost optimization and rightsizing</li>
                  <li>• Disaster recovery and backup solutions</li>
                  <li>• 24/7 monitoring and support</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-cyan-600">
                    From $5k–$25k
                  </span>
                  <Link
                    href="https: //ziontechgroup.com/cloud-migration"
                    className="text-cyan-600 hover:text-cyan-500"
                  >
                    Migrate now →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Server className="h-5 w-5 text-orange-600" />
                  <h3 className="font-semibold text-gray-900">
                    Kubernetes & Container Orchestration
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Production-ready Kubernetes clusters with auto-scaling and
                  monitoring.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Managed Kubernetes clusters (EKS, AKS, GKE)</li>
                  <li>• Auto-scaling and load balancing</li>
                  <li>• CI/CD pipeline integration</li>
                  <li>• Security hardening and compliance</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-orange-600">
                    From $2k–$8k
                  </span>
                  <Link
                    href="https: //ziontechgroup.com/kubernetes"
                    className="text-orange-600 hover:text-orange-500"
                  >
                    Deploy K8s →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Lock className="h-5 w-5 text-red-600" />
                  <h3 className="font-semibold text-gray-900">
                    Zero-Trust Security Implementation
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Complete zero-trust architecture with identity and access
                  management.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Identity and access management (IAM)</li>
                  <li>• Network segmentation and micro-segmentation</li>
                  <li>• Endpoint detection and response (EDR)</li>
                  <li>• Security awareness training and testing</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-red-600">
                    From $10k–$50k
                  </span>
                  <Link
                    href="https: //ziontechgroup.com/zero-trust"
                    className="text-red-600 hover:text-red-500"
                  >
                    Secure your network →
                  </Link>
                </div>
              </div>
              {/* New Micro SaaS Solutions */}
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <BarChart3 className="h-5 w-5 text-indigo-600" />
                  <h3 className="font-semibold text-gray-900">
                    AI-Powered Inventory Optimization
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Predictive inventory management with demand forecasting and
                  automated reordering.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Demand forecasting with 90%+ accuracy</li>
                  <li>• Automated reorder point calculations</li>
                  <li>• Supplier performance analytics</li>
                  <li>• Integration with ERP and e-commerce platforms</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-indigo-600">
                    From $149/mo
                  </span>
                  <Link
                    href="https://ziontechgroup.com/inventory-optimization"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    Optimize inventory →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="h-5 w-5 text-pink-600" />
                  <h3 className="font-semibold text-gray-900">
                    Smart Employee Onboarding Platform
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Automated onboarding workflows with AI-powered personalization
                  and compliance tracking.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Personalized onboarding journeys</li>
                  <li>• Automated document collection and verification</li>
                  <li>• Compliance tracking and reporting</li>
                  <li>• Integration with HRIS and payroll systems</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-pink-600">
                    From $99/mo
                  </span>
                  <Link
                    href="https://ziontechgroup.com/employee-onboarding"
                    className="text-pink-600 hover:text-pink-500"
                  >
                    Streamline onboarding →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="h-5 w-5 text-teal-600" />
                  <h3 className="font-semibold text-gray-900">
                    AI-Powered SEO & Content Optimization
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Automated SEO analysis, content optimization, and keyword
                  research with AI insights.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Real-time SEO audits and recommendations</li>
                  <li>• AI-generated content suggestions</li>
                  <li>• Competitor analysis and gap identification</li>
                  <li>• Automated technical SEO monitoring</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-teal-600">
                    From $199/mo
                  </span>
                  <Link
                    href="https: //ziontechgroup.com/seo-optimization"
                    className="text-teal-600 hover:text-teal-500"
                  >
                    Boost SEO →
                  </Link>
                </div>
              </div>
              {/* Advanced AI Services */}
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Brain className="h-5 w-5 text-violet-600" />
                  <h3 className="font-semibold text-gray-900">
                    AI-Powered Customer Service Automation
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Intelligent chatbots and virtual assistants with natural
                  language processing.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Multi-language chatbot with 95%+ accuracy</li>
                  <li>• Sentiment analysis and escalation routing</li>
                  <li>• Integration with CRM and ticketing systems</li>
                  <li>• Custom training on your business data</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-violet-600">
                    From $399/mo
                  </span>
                  <Link
                    href="https://ziontechgroup.com/ai-customer-service"
                    className="text-violet-600 hover:text-violet-500"
                  >
                    Automate support →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Database className="h-5 w-5 text-emerald-600" />
                  <h3 className="font-semibold text-gray-900">
                    AI-Powered Predictive Analytics Platform
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Advanced predictive modeling for business forecasting and
                  decision making.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Revenue and sales forecasting</li>
                  <li>• Customer churn prediction and prevention</li>
                  <li>• Market trend analysis and insights</li>
                  <li>• Custom model development and training</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-emerald-600">
                    From $599/mo
                  </span>
                  <Link
                    href="https://ziontechgroup.com/predictive-analytics"
                    className="text-emerald-600 hover:text-emerald-500"
                  >
                    Predict the future →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="h-5 w-5 text-yellow-600" />
                  <h3 className="font-semibold text-gray-900">
                    AI-Powered Code Review & Quality Assurance
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Automated code analysis, security scanning, and quality
                  improvement suggestions.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Automated code review with AI insights</li>
                  <li>• Security vulnerability detection</li>
                  <li>• Performance optimization recommendations</li>
                  <li>• Integration with GitHub, GitLab, Bitbucket</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-yellow-600">
                    From $199/mo
                  </span>
                  <Link
                    href="https: //ziontechgroup.com/ai-code-review"
                    className="text-yellow-600 hover:text-yellow-500"
                  >
                    Improve code quality →
                  </Link>
                </div>
              </div>
              {/* Emerging Technology Services */}
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Brain className="h-5 w-5 text-purple-600" />
                  <h3 className="font-semibold text-gray-900">
                    AI-Powered Voice & Video Analytics
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Real-time speech recognition, sentiment analysis, and video
                  content understanding.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>
                    • Multi-language voice transcription with 99%+ accuracy
                  </li>
                  <li>• Real-time sentiment and emotion analysis</li>
                  <li>• Video content analysis and object detection</li>
                  <li>• Integration with Zoom, Teams, and custom platforms</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-purple-600">
                    From $299/mo
                  </span>
                  <Link
                    href="https: //ziontechgroup.com/voice-video-analytics"
                    className="text-purple-600 hover:text-purple-500"
                  >
                    Analyze media →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Database className="h-5 w-5 text-cyan-600" />
                  <h3 className="font-semibold text-gray-900">
                    Quantum-Ready Data Encryption
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Future-proof encryption solutions preparing for quantum
                  computing threats.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Post-quantum cryptography implementation</li>
                  <li>• Quantum key distribution (QKD) systems</li>
                  <li>• Hybrid classical-quantum security protocols</li>
                  <li>• Compliance with NIST quantum standards</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-cyan-600">
                    From $2k–$15k
                  </span>
                  <Link
                    href="https: //ziontechgroup.com/quantum-encryption"
                    className="text-cyan-600 hover:text-cyan-500"
                  >
                    Secure future →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="h-5 w-5 text-rose-600" />
                  <h3 className="font-semibold text-gray-900">
                    Metaverse & Virtual Reality Solutions
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Immersive virtual experiences and metaverse platform
                  development.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• VR/AR application development</li>
                  <li>• Virtual event and conference platforms</li>
                  <li>• 3D virtual showrooms and retail spaces</li>
                  <li>• Cross-platform metaverse integration</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-rose-600">
                    From $5k–$30k
                  </span>
                  <Link
                    href="https://ziontechgroup.com/metaverse-solutions"
                    className="text-rose-600 hover:text-rose-500"
                  >
                    Enter metaverse →
                  </Link>
                </div>
              </div>
              {/* Specialized Industry Solutions */}
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="h-5 w-5 text-emerald-600" />
                  <h3 className="font-semibold text-gray-900">
                    Healthcare AI & HIPAA Compliance
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  AI-powered healthcare solutions with full HIPAA compliance and
                  medical data security.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Medical image analysis and diagnosis assistance</li>
                  <li>• Patient data anonymization and privacy protection</li>
                  <li>• Clinical decision support systems</li>
                  <li>• Integration with EHR and medical devices</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-emerald-600">
                    From $8k–$50k
                  </span>
                  <Link
                    href="https://ziontechgroup.com/healthcare-ai"
                    className="text-emerald-600 hover:text-emerald-500"
                  >
                    Transform healthcare →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <BarChart3 className="h-5 w-5 text-amber-600" />
                  <h3 className="font-semibold text-gray-900">
                    FinTech & RegTech Solutions
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Financial technology solutions with regulatory compliance and
                  risk management.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Automated KYC/AML compliance systems</li>
                  <li>• Real-time fraud detection and prevention</li>
                  <li>• Cryptocurrency trading and portfolio management</li>
                  <li>• Regulatory reporting and audit automation</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-amber-600">
                    From $10k–$75k
                  </span>
                  <Link
                    href="https://ziontechgroup.com/fintech-solutions"
                    className="text-amber-600 hover:text-amber-500"
                  >
                    Innovate finance →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="h-5 w-5 text-indigo-600" />
                  <h3 className="font-semibold text-gray-900">
                    EdTech & Learning Management AI
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Intelligent learning platforms with personalized education and
                  assessment.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• AI-powered personalized learning paths</li>
                  <li>• Automated content generation and curation</li>
                  <li>• Intelligent assessment and grading systems</li>
                  <li>• Student performance analytics and insights</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-indigo-600">
                    From $5k–$25k
                  </span>
                  <Link
                    href="https://ziontechgroup.com/edtech-solutions"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    Transform education →
                  </Link>
                </div>
              </div>
              {/* Advanced Automation Services */}
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="h-5 w-5 text-lime-600" />
                  <h3 className="font-semibold text-gray-900">
                    Hyperautomation Platform
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  End-to-end business process automation with AI, RPA, and
                  intelligent workflows.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Robotic Process Automation (RPA) implementation</li>
                  <li>• Intelligent document processing and OCR</li>
                  <li>• Business process mining and optimization</li>
                  <li>• Cross-system integration and orchestration</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-lime-600">
                    From $3k–$20k
                  </span>
                  <Link
                    href="https: //ziontechgroup.com/hyperautomation"
                    className="text-lime-600 hover:text-lime-500"
                  >
                    Automate everything →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Server className="h-5 w-5 text-violet-600" />
                  <h3 className="font-semibold text-gray-900">
                    Edge AI & Real-Time Processing
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Deploy AI models at the edge for ultra-low latency and
                  real-time decision making.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Edge AI model optimization and deployment</li>
                  <li>• Real-time video and image processing</li>
                  <li>• IoT sensor data analysis and insights</li>
                  <li>• Autonomous system control and decision making</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-violet-600">
                    From $4k–$25k
                  </span>
                  <Link
                    href="https://ziontechgroup.com/edge-ai"
                    className="text-violet-600 hover:text-violet-500"
                  >
                    Deploy edge AI →
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-3">
                  <Lock className="h-5 w-5 text-red-600" />
                  <h3 className="font-semibold text-gray-900">
                    AI-Powered Threat Intelligence
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Advanced threat detection and response with machine learning
                  and behavioral analysis.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 mb-4">
                  <li>• Real-time threat detection and analysis</li>
                  <li>• Automated incident response and remediation</li>
                  <li>• Threat hunting and intelligence gathering</li>
                  <li>• Security orchestration and automation (SOAR)</li>
                </ul>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-red-600">
                    From $2k–$15k
                  </span>
                  <Link
                    href="https: //ziontechgroup.com/threat-intelligence"
                    className="text-red-600 hover:text-red-500"
                  >
                    Defend against threats →
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-10 text-center text-sm text-gray-500">
              Need something custom? Email{' '}
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="text-blue-600 hover:text-blue-500"
              >
                kleber@ziontechgroup.com
              </a>{' '}
              or call{' '}
              <a
                href="tel:+13024640950"
                className="text-blue-600 hover:text-blue-500"
              >
                +1 302 464 0950
              </a>
              .
            </div>
          </div>
        </section>
        {/* Process Section */}
        <section className="py-24 sm:py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Delivery Process
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We follow a proven methodology that ensures quality, speed, and
                successful outcomes.
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Discovery
                </h3>
                <p className="text-gray-600">
                  Understand your needs and requirements
                </p>
              </div>
              <div className="text-center group">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 group-hover:bg-green-200 transition-colors mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Strategy
                </h3>
                <p className="text-gray-600">Plan the solution architecture</p>
              </div>
              <div className="text-center group">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Development
                </h3>
                <p className="text-gray-600">Build and test the solution</p>
              </div>
              <div className="text-center group">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 group-hover:bg-orange-200 transition-colors mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Deployment
                </h3>
                <p className="text-gray-600">Launch and monitor performance</p>
              </div>
            </div>
          </div>
        </section>
        {/* Pricing & Market Positioning Section */}
        <section className="py-24 sm:py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Competitive Pricing & Market Leadership
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our pricing reflects the true value of cutting-edge technology
                solutions, with transparent costs and exceptional ROI.
              </p>
            </div>

            {/* Pricing Tiers */}
            <div className="grid grid-cols-1 lg: grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Micro SaaS Solutions
                  </h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    $300 - $8,000
                  </div>
                  <div className="text-sm text-gray-500">per month</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Rapid deployment (1-8 weeks)
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Industry-specific solutions
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    AI-powered automation
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Scalable architecture
                  </li>
                </ul>
                <div className="text-center">
                  <div className="text-xs text-gray-500 mb-2">
                    Market Average: $1, 200 - $15,000/month
                  </div>
                  <div className="text-sm font-medium text-green-600">
                    Save up to 60%
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover: shadow-lg transition-all duration-300 ring-2 ring-blue-500">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-2">
                    Most Popular
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    AI Services
                  </h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    $1, 500 - $75,000
                  </div>
                  <div className="text-sm text-gray-500">per month</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Cutting-edge AI technology
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Custom model development
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Real-time processing
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Advanced analytics
                  </li>
                </ul>
                <div className="text-center">
                  <div className="text-xs text-gray-500 mb-2">
                    Market Average: $5, 000 - $100,000/month
                  </div>
                  <div className="text-sm font-medium text-green-600">
                    Save up to 40%
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover: shadow-lg transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    IT Services
                  </h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    $4, 000 - $150,000
                  </div>
                  <div className="text-sm text-gray-500">per month</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Enterprise-grade solutions
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    24/7 support & monitoring
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Advanced security
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    Scalable infrastructure
                  </li>
                </ul>
                <div className="text-center">
                  <div className="text-xs text-gray-500 mb-2">
                    Market Average: $8, 000 - $200,000/month
                  </div>
                  <div className="text-sm font-medium text-green-600">
                    Save up to 50%
                  </div>
                </div>
              </div>
            </div>

            {/* Market Positioning */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Choose Zion Tech Group?
                </h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  We combine cutting-edge technology with proven expertise to
                  deliver solutions that drive real business value.
                </p>
              </div>

              <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 mb-4">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Industry Leaders
                  </h4>
                  <p className="text-sm text-gray-600">
                    500+ successful projects across diverse industries
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 mb-4">
                    <Zap className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Rapid Delivery
                  </h4>
                  <p className="text-sm text-gray-600">
                    50% faster deployment than industry average
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 mb-4">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Enterprise Security
                  </h4>
                  <p className="text-sm text-gray-600">
                    99.9% uptime with enterprise-grade security
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 mb-4">
                    <TrendingUp className="h-6 w-6 text-orange-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Proven ROI
                  </h4>
                  <p className="text-sm text-gray-600">
                    Average 300% ROI within first year
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to get started?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
                Let&aposs discuss your project requirements and how we can help
                you achieve your goals.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/contact"
                  className="group rounded-md bg-white px-8 py-4 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-all duration-200 hover:scale-105"
                  aria-label="Contact us to get started"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 inline group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/"
                  className="text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors group"
                  aria-label="Back to homepage"
                >
                  Back to Home{' '}
                  <span
                    aria-hidden="true"
                    className="group-hover:translate-x-1 transition-transform inline-block"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
}
