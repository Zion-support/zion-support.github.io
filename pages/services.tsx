import React from 'react';
import { Link } from 'react-router-dom';
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
  FileText,
  Mail,
  MessageSquare,
  ShoppingCart,
  UserCheck,
} from 'lucide-react';
import PageTransition from '../src/components/PageTransition';

export default function Services() {
  const title = 'Services — Zion Tech Group';
  const description =
    'AI autonomous systems, cloud platforms, cybersecurity, and micro SaaS delivery.';

  return (
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
                  to="/contact"
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
                  to="/contact"
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
                Protect your business with enterprise-grade security frameworks
                and compliance automation.
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
                  <span className="text-sm text-gray-700">Security audits</span>
                </li>
              </ul>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>3-6 weeks delivery</span>
                </div>
                <Link
                  to="/contact"
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
                  <span className="text-sm text-gray-700">API development</span>
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
                  to="/contact"
                  className="inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-500 transition-colors group"
                  aria-label="Get started with custom software services"
                >
                  Get started with SaaS
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Additional Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Expand your capabilities with our specialized micro SaaS solutions and AI-powered tools.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {/* AI-Powered Content Creation */}
            <div
              id="content-creation"
              className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-300"
            >
              <div className="flex items-center gap-x-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 group-hover:bg-blue-700 transition-colors">
                  <FileText className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    AI Content Creation Tools
                  </h2>
                  <p className="text-sm text-blue-600 font-medium">
                    Starting at $99/month
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Automate your content production with AI-powered writing tools, SEO optimization, and multimedia generation.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-700">
                    AI blog post generation
                  </span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-700">
                    SEO content optimization
                  </span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-700">
                    Social media content
                  </span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-700">
                    Brand voice consistency
                  </span>
                </li>
              </ul>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>1-2 weeks setup</span>
                </div>
                <Link
                  to="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* AI Email Responder */}
            <div
              id="email-automation"
              className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-green-300"
            >
              <div className="flex items-center gap-x-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 group-hover:bg-green-700 transition-colors">
                  <Mail className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    AI Email Responder
                  </h2>
                  <p className="text-sm text-green-600 font-medium">
                    Starting at $149/month
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Automate email responses with intelligent AI that understands context and maintains your brand voice.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-700">
                    Smart email classification
                  </span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-700">
                    Automated responses
                  </span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-700">
                    Priority flagging
                  </span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-700">
                    Multi-language support
                  </span>
                </li>
              </ul>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>2-3 weeks setup</span>
                </div>
                <Link
                  to="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center text-sm font-semibold text-green-600 hover:text-green-500 transition-colors group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Customer Support Platform */}
            <div
              id="customer-support"
              className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-purple-300"
            >
              <div className="flex items-center gap-x-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600 group-hover:bg-purple-700 transition-colors">
                  <MessageSquare className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Customer Support Platform
                  </h2>
                  <p className="text-sm text-purple-600 font-medium">
                    Starting at $199/month
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Comprehensive helpdesk solution with AI chatbots, ticket management, and analytics.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-purple-600" />
                  <span className="text-sm text-gray-700">
                    AI-powered chatbots
                  </span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-purple-600" />
                  <span className="text-sm text-gray-700">
                    Ticket management system
                  </span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-purple-600" />
                  <span className="text-sm text-gray-700">
                    Live chat integration
                  </span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-purple-600" />
                  <span className="text-sm text-gray-700">
                    Performance analytics
                  </span>
                </li>
              </ul>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>3-4 weeks setup</span>
                </div>
                <Link
                  to="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-500 transition-colors group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* E-Commerce Return Management */}
            <div
              id="ecommerce-returns"
              className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-orange-300"
            >
              <div className="flex items-center gap-x-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600 group-hover:bg-orange-700 transition-colors">
                  <ShoppingCart className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    E-Commerce Return Management
                  </h2>
                  <p className="text-sm text-orange-600 font-medium">
                    Starting at $179/month
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Streamline your return process with automated workflows, label generation, and tracking.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-orange-600" />
                  <span className="text-sm text-gray-700">
                    Automated return requests
                  </span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-orange-600" />
                  <span className="text-sm text-gray-700">
                    Return label generation
                  </span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-orange-600" />
                  <span className="text-sm text-gray-700">
                    Status tracking system
                  </span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-orange-600" />
                  <span className="text-sm text-gray-700">
                    Analytics dashboard
                  </span>
                </li>
              </ul>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>2-3 weeks setup</span>
                </div>
                <Link
                  to="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-500 transition-colors group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* AI Talent Matching */}
            <div
              id="talent-matching"
              className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-indigo-300"
            >
              <div className="flex items-center gap-x-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600 group-hover:bg-indigo-700 transition-colors">
                  <UserCheck className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    AI Talent Matching Platform
                  </h2>
                  <p className="text-sm text-indigo-600 font-medium">
                    Starting at $249/month
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Connect with the perfect tech talent using advanced AI algorithms and verified profiles.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-indigo-600" />
                  <span className="text-sm text-gray-700">
                    AI-powered matching
                  </span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-indigo-600" />
                  <span className="text-sm text-gray-700">
                    Verified tech profiles
                  </span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-indigo-600" />
                  <span className="text-sm text-gray-700">
                    Skills assessment
                  </span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-indigo-600" />
                  <span className="text-sm text-gray-700">
                    Project matching
                  </span>
                </li>
              </ul>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>4-6 weeks setup</span>
                </div>
                <Link
                  to="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-500 transition-colors group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Data Analytics Services */}
            <div
              id="data-analytics"
              className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-teal-300"
            >
              <div className="flex items-center gap-x-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-600 group-hover:bg-teal-700 transition-colors">
                  <BarChart3 className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Data Analytics Services
                  </h2>
                  <p className="text-sm text-teal-600 font-medium">
                    Starting at $299/month
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Unlock insights from your data with advanced analytics, reporting, and business intelligence.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-teal-600" />
                  <span className="text-sm text-gray-700">
                    Custom dashboards
                  </span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-teal-600" />
                  <span className="text-sm text-gray-700">
                    Predictive analytics
                  </span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-teal-600" />
                  <span className="text-sm text-gray-700">
                    Real-time reporting
                  </span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-teal-600" />
                  <span className="text-sm text-gray-700">
                    Data visualization
                  </span>
                </li>
              </ul>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>3-5 weeks setup</span>
                </div>
                <Link
                  to="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-500 transition-colors group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
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

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Let&apos;s discuss your project requirements and how we can help
              you achieve your goals.'
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="mailto:kleber@ziontechgroup.com"
                className="group rounded-md bg-white px-8 py-4 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-all duration-200 hover:scale-105"
                aria-label="Contact us to get started"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 inline group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/"
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
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="text-white">
                <div className="font-semibold mb-2">Phone</div>
                <div>+1 302 464 0950</div>
              </div>
              <div className="text-white">
                <div className="font-semibold mb-2">Email</div>
                <div>kleber@ziontechgroup.com</div>
              </div>
              <div className="text-white">
                <div className="font-semibold mb-2">Address</div>
                <div>364 E Main St STE 1008<br />Middletown, DE 19709</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
