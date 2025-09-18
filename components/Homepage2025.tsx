"use client";

import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Brain,
  Cloud,
  Globe,
  Lock,
  Shield,
  Star,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
// Data imports temporarily disabled due to module resolution conflicts
import dynamic from 'next/dynamic';
import AdvancedAutomationBanner2026 from './AdvancedAutomationBanner2026';
import UltraFuturisticBackground2026 from './backgrounds/UltraFuturisticBackground2026';
import InnovativeServicesShowcase2026 from './InnovativeServicesShowcase2026';
import RevolutionaryContentBanner2026 from './RevolutionaryContentBanner2026';
import InteractiveFeatures from './InteractiveFeatures';
import ContentShowcase from './ContentShowcase';

interface Homepage2025Props { showInternalNav?: boolean }

const Homepage2025 = ({ showInternalNav = true }: Homepage2025Props) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [currentServiceIndex, setCurrentServiceIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentServiceIndex(((currentServiceIndex + 1) % 5));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  const featuredServices: Array<{ title: string; description: string; popular?: boolean }> = [];

  const latestInsights = [
    // Featured content (Sept 18, 2025)
    {
      title: 'AI-Powered Business Transformation Guide',
      href: '/blog/ai-powered-business-transformation-2025',
      tag: 'Featured',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Quantum Computing Enterprise Applications',
      href: '/blog/quantum-computing-enterprise-applications-2025',
      tag: 'Quantum',
      gradient: 'from-indigo-500 to-cyan-500'
    },
    {
      title: 'AI Ops 2025: Autonomous Platforms',
      href: '/blog/ai-ops-autonomous-platforms-2025',
      tag: 'AI Ops',
      gradient: 'from-emerald-500 to-cyan-500'
    },
    // Latest content (Sept 18, 2025)
    {
      title: 'Governed Real‑Time Observability (2026)',
      href: '/blog/ai-2026-governed-real-time-observability',
      tag: 'New',
      gradient: 'from-teal-500 to-emerald-600'
    },
    {
      title: 'Agent Release Scorecards — Evidence‑First (2026)',
      href: '/blog/ai-2026-agent-release-scorecards',
      tag: 'New',
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      title: 'Production Agent Postmortems — Playbook (2026)',
      href: '/blog/ai-2026-production-agent-postmortems-playbook',
      tag: 'New',
      gradient: 'from-fuchsia-500 to-pink-600'
    },
    {
      title: 'Safe Tooling Permissions — Playbook (2026)',
      href: '/blog/ai-2026-safe-tooling-permissions-playbook',
      tag: 'New',
      gradient: 'from-fuchsia-500 to-pink-600'
    },
    {
      title: 'Reliable Real‑Time Agents (2026)',
      href: '/blog/ai-2026-reliable-real-time-agents',
      tag: 'New',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Zero‑Trust Agents (2026)',
      href: '/blog/ai-2026-zero-trust-agents',
      tag: 'New',
      gradient: 'from-violet-500 to-indigo-500'
    },
    {
      title: 'AI Ops 2025: Autonomous Platforms',
      href: '/blog/ai-ops-autonomous-platforms-2025',
      tag: 'AI Ops',
      gradient: 'from-emerald-500 to-cyan-500'
>>>>>>> 06262d699328 (feat: add new content, interactive features, and homepage improvements)
    },
    // Newly added content (Sept 16, 2025)
    {
      title: 'Low‑Latency Agent Observability (2026)',
      href: '/blog/ai-2026-low-latency-agent-observability',
      tag: 'New',
      gradient: 'from-sky-500 to-blue-600'
    },
    {
      title: 'Agent Safety Evidence Integration (2026)',
      href: '/blog/ai-2026-agent-safety-evidence-integration',
      tag: 'New',
      gradient: 'from-rose-500 to-orange-500'
    },
    {
      title: 'Cost‑Aware Real‑Time Routing (2026)',
      href: '/blog/ai-2026-cost-aware-real-time-routing',
      tag: 'New',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Production Agent Postmortems — Playbook (2026)',
      href: '/blog/ai-2026-production-agent-postmortems-playbook',
      tag: 'New',
      gradient: 'from-amber-500 to-rose-500'
    },
    {
      title: 'Exec Guide — Agent SLO Scorecards (2026)',
      href: '/blog/ai-2026-exec-guide-to-agent-slo-scorecards',
      tag: 'New',
      gradient: 'from-emerald-500 to-cyan-600'
    },
    {
      title: 'Agent Platform Readiness Checklist (2026)',
      href: '/blog/ai-2026-agent-platform-readiness-checklist',
      tag: 'New',
      gradient: 'from-indigo-500 to-fuchsia-600'
    },
    {
      title: 'Trusted GenAI Patterns for Regulated Enterprises (2026)',
      href: '/blog/ai-2026-trusted-genai-patterns-regulated-enterprises',
      tag: 'New',
      gradient: 'from-rose-500 to-orange-500'
    },
    {
      title: 'Real-Time Retrieval Architectures (2026)',
      href: '/blog/ai-2026-real-time-retrieval-architectures',
      tag: 'New',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Guide — Agent SLO Blueprints for Reliable Autonomy',
      href: '/reports/guides/guide-2025-09-agent-slo-blueprints',
      tag: 'New',
      gradient: 'from-emerald-500 to-cyan-500'
    },
    {
      title: 'Case Study — 2x Faster Agent Onboarding',
      href: '/reports/cases/case-2025-09-agent-onboarding-velocity',
      tag: 'New',
      gradient: 'from-indigo-500 to-fuchsia-500'
    },
    {
      title: 'Safe Autonomy in Production (2026)',
      href: '/blog/ai-2026-safe-autonomy-in-production',
      tag: 'New',
      gradient: 'from-rose-500 to-orange-500'
    },
    {
      title: 'Evidence Hub in Practice (2026)',
      href: '/blog/ai-2026-evidence-hub-in-practice',
      tag: 'New',
      gradient: 'from-cyan-500 to-violet-600'
    },
    {
      title: 'Autonomous Incident Response Blueprint (2026)',
      href: '/blog/ai-2026-autonomous-incident-response-blueprint',
      tag: 'New',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Evidence‑Led Operations Blueprint (2026)',
      href: '/blog/ai-2026-evidence-led-operations-blueprint',
      tag: 'New',
      gradient: 'from-amber-500 to-pink-500'
    },
    {
      title: 'Safe Autonomy in Production (2026)',
      href: '/blog/ai-2026-safe-autonomy-in-production',
      tag: 'New',
      gradient: 'from-rose-500 to-orange-500'
    },
    {
      title: 'Evidence Hub in Practice (2026)',
      href: '/blog/ai-2026-evidence-hub-in-practice',
      tag: 'New',
      gradient: 'from-cyan-500 to-violet-600'
    },
    {
      title: 'Agentic Observability — Deep Dive (2026)',
      href: '/blog/ai-2026-agentic-observability-deep-dive',
      tag: 'New',
      gradient: 'from-violet-500 to-fuchsia-500'
    },
    {
      title: 'Enterprise Agent Risk Mitigation (2026)',
      href: '/blog/ai-2026-enterprise-agent-risk-mitigation',
      tag: 'New',
      gradient: 'from-rose-500 to-orange-500'
    },
    {
      title: 'Trustworthy Model Routing — Starter Kit (2026)',
      href: '/blog/ai-2026-trustworthy-model-routing-starter',
      tag: 'Starter Kit',
      gradient: 'from-sky-500 to-blue-600'
    },
    {
      title: 'Enterprise Automation Strategy 2025',
      href: '/blog/ai-2025-enterprise-automation-strategy',
      tag: 'Strategy',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Autonomous Incident Response Blueprint (2026)',
      href: '/blog/ai-2026-autonomous-incident-response-blueprint',
      tag: 'New',
      gradient: 'from-rose-500 to-red-500'
    },
    {
      title: 'Real-Time Evals & Inference Guardrails (2026)',
      href: '/blog/ai-2026-real-time-evals-inference-guardrails',
      tag: 'New',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Edge Agents in Production — 2026 Guide',
      href: '/blog/ai-2026-edge-agents-production-guide',
      tag: 'New',
      gradient: 'from-indigo-500 to-cyan-500'
    },
    {
      title: 'Enterprise Agent Risk Mitigation (2026)',
      href: '/blog/ai-2026-enterprise-agent-risk-mitigation',
      tag: 'New',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Agentic Benchmarking Field Guide (2026)',
      href: '/blog/ai-2026-agentic-benchmarking-field-guide',
      tag: 'New',
      gradient: 'from-fuchsia-500 to-indigo-500'
    },
    {
      title: 'Governed Tooling: Risk Tiers (2026)',
      href: '/blog/ai-2026-governed-tooling-risk-tiers',
      tag: 'New',
      gradient: 'from-amber-500 to-pink-500'
    },
    {
      title: 'Reliable Autonomy Operations (2026)',
      href: '/blog/ai-2026-reliable-autonomy-operations',
      tag: 'New',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Agentic Observability — Deep Dive (2026)',
      href: '/blog/ai-2026-agentic-observability-deep-dive',
      tag: 'New',
      gradient: 'from-purple-500 to-fuchsia-500'
    },
    {
      title: 'Agent Platform SLO Blueprint (2026)',
      href: '/blog/ai-2026-agent-slo-blueprint',
      tag: 'New',
      gradient: 'from-amber-500 to-rose-500'
    },
    {
      title: 'Governed Tool Use — Case Studies (2026)',
      href: '/blog/ai-2026-governed-tool-use-case-studies',
      tag: 'New',
      gradient: 'from-indigo-500 to-cyan-500'
    },
    {
      title: '2025-09 Research Brief — Agentic Business Ops',
      href: '/reports/briefs/brief-2025-09-agentic-business-ops',
      tag: 'Brief',
      gradient: 'from-cyan-500 to-fuchsia-500'
    },
    {
      title: 'Blueprint — Autonomous IT Service Desk (v1)',
      href: '/reports/blueprints/blueprint-2025-09-autonomous-it-service-desk',
      tag: 'Blueprint',
      gradient: 'from-emerald-500 to-cyan-500'
    },
    {
      title: 'Case Study — 32% Cost Savings with FinOps AI',
      href: '/reports/cases/case-2025-09-finops-ai-savings',
      tag: 'Case Study',
      gradient: 'from-cyan-500 to-violet-500'
    },
    {
      title: 'Enterprise Automation Strategy 2025',
      href: '/blog/ai-2025-enterprise-automation-strategy',
      tag: 'Automation',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Agentic Product Playbooks',
      href: '/blog/agentic-product-playbooks',
      tag: 'Agentic',
      gradient: 'from-fuchsia-500 to-indigo-500'
    },
    {
      title: 'Safety Evals Operational Checklist (2026)',
      href: '/blog/ai-2026-safety-evals-operational-checklist',
      tag: 'Safety',
      gradient: 'from-emerald-500 to-cyan-500'
    },
    {
      title: 'Operationalizing Agentic Workflows (2026)',
      href: '/blog/ai-2026-operationalizing-agentic-workflows',
      tag: 'Agentic',
      gradient: 'from-cyan-500 to-purple-500'
    },
    {
      title: 'Operational Evals — Blueprint (2026)',
      href: '/blog/ai-2026-operational-evals-blueprint',
      tag: 'New',
      gradient: 'from-amber-500 to-rose-500'
    },
    {
      title: 'Agent Observability Blueprint (2026)',
      href: '/blog/ai-2026-agent-observability-blueprint',
      tag: 'New',
      gradient: 'from-indigo-500 to-cyan-500'
    },
    {
      title: 'Customer-Facing AI Agents in 2025',
      href: '/blog/ai-customer-agents-2025',
      tag: 'New',
      gradient: 'from-emerald-500 to-lime-500'
    },
    {
      title: 'Evidence‑Led Operations — Centralizing Evals, Incidents, KPIs',
      href: '/blog/ai-2026-evidence-led-operations-blueprint',
      tag: 'Operations',
      gradient: 'from-amber-500 to-pink-500'
    },
    { title: 'Guide — Zero‑to‑One Eval Gates (2026)', href: '/reports/guides/guide-2026-zero-to-one-eval-gates', tag: 'Guide', gradient: 'from-amber-500 to-pink-500' },
    { title: 'Case Study — Guarded Autonomy Containment 44%', href: '/reports/cases/case-2026-guarded-autonomy-containment-44', tag: 'Case Study', gradient: 'from-purple-500 to-blue-500' },
    { title: 'Brief — Cost‑Aware Model Routing Patterns (2026)', href: '/reports/briefs/brief-2026-cost-aware-model-routing-patterns', tag: 'Brief', gradient: 'from-fuchsia-500 to-indigo-500' },
    { title: 'Operational Evals — Blueprint (2026)', href: '/blog/ai-2026-operational-evals-blueprint', tag: 'New', gradient: 'from-amber-500 to-rose-500' },
    { title: 'Agent Observability Blueprint (2026)', href: '/blog/ai-2026-agent-observability-blueprint', tag: 'New', gradient: 'from-indigo-500 to-cyan-500' }
  ];

  const navigationSections = [
    { id: 'hero', label: 'Home', icon: '🏠' },
    { id: 'services', label: 'Micro SAAS', icon: '🚀' },
    { id: 'ai', label: 'AI Services', icon: '🧠' },
    { id: 'automation', label: 'AI Automation', icon: '⚡' },
    { id: 'quantum', label: 'Quantum Security', icon: '🔐' },
    { id: 'it', label: 'IT Solutions', icon: '💻' },
    { id: 'emerging', label: 'Emerging Tech', icon: '🌟' },
    { id: 'contact', label: 'Contact', icon: '📞' }
  ];

  const features = [
    {
      title: "AI-Powered Innovation",
      description: "Cutting-edge artificial intelligence solutions that transform business operations and drive growth",
      icon: Brain
    },
    {
      title: "Quantum Computing",
      description: "Next-generation quantum solutions for complex problem-solving and advanced cryptography",
      icon: Globe
    },
    {
      title: "Cybersecurity Excellence",
      description: "Enterprise-grade security solutions with AI-powered threat detection and response",
      icon: Shield
    },
    {
      title: "Process Automation",
      description: "Intelligent automation that streamlines operations and enhances productivity",
      icon: Zap
    }
  ];

  const NewContentAdBanner = dynamic(() => import('../src/components/NewContentAdBanner'), { ssr: false });
  const ContentSpotlight = dynamic(() => import('../src/components/ContentSpotlight'), { ssr: false });

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <UltraFuturisticBackground2026 intensity="medium" theme="quantum">
      {showInternalNav && (
        <>
          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center space-x-2"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg"></div>
                  <span className="text-white font-bold text-xl">ZionTech Group</span>
                </motion.div>
                
                {/* Desktop Navigation */}
                <div className="hidden lg:flex space-x-8">
                  {navigationSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`flex items-center space-x-2 text-sm font-medium transition-all duration-300 ${
                        activeSection === section.id
                          ? 'text-cyan-400 border-b-2 border-cyan-400'
                          : 'text-gray-300 hover:text-cyan-400'
                      }`}
                    >
                      <span>{section.icon}</span>
                      <span>{section.label}</span>
                    </button>
                  ))}
                </div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="hidden md:flex items-center space-x-4"
                >
                  <a
                    href="tel:+13024640950"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                  >
                    +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-sm"
                  >
                    Contact Us
                  </a>
                </motion.div>

                {/* Mobile Menu Button */}
                <button
                  className="lg:hidden text-white p-2"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>

              {/* Mobile Navigation Menu */}
              <AnimatePresence>
                {isMobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="lg:hidden border-t border-white/10"
                  >
                    <div className="py-4 space-y-2">
                      {navigationSections.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`flex items-center space-x-3 w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                            activeSection === section.id
                              ? 'bg-cyan-400/20 text-cyan-400'
                              : 'text-gray-300 hover:bg-white/10'
                          }`}
                        >
                          <span>{section.icon}</span>
                          <span>{section.label}</span>
                        </button>
                      ))}
                      <div className="pt-4 border-t border-white/10">
                        <a
                          href="tel:+13024640950"
                          className="flex items-center space-x-3 px-4 py-2 text-cyan-400 hover:bg-white/10 rounded-lg transition-all duration-300"
                        >
                          <span>📱</span>
                          <span>+1 302 464 0950</span>
                        </a>
                        <a
                          href="mailto:kleber@ziontechgroup.com"
                          className="flex items-center space-x-3 px-4 py-2 text-cyan-400 hover:bg-white/10 rounded-lg transition-all duration-300"
                        >
                          <span>✉️</span>
                          <span>kleber@ziontechgroup.com</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>
        </>
      )}

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-6xl mx-auto relative z-10"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-lg font-medium backdrop-blur-sm"
              >
                <Star className="w-5 h-5" />
                <span>Innovation Leader 2025-2026</span>
              </motion.div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Pioneering the future of technology with innovative solutions that drive business transformation
              </p>
              
              {/* Enhanced CTA Section */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              >
                <Link href="/comprehensive-services-showcase-2026">
                  <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                    <span className="flex items-center gap-2">
                      Explore 2026 Services
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </Link>
                <Link href="/comprehensive-services-showcase-2025">
                  <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    2025 Services Showcase
                  </button>
                </Link>
                <Link href="/get-started">
                  <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                </Link>
              </motion.div>
              
              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center justify-center space-x-6 text-sm text-gray-400"
              >
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span>Global Reach</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-purple-400" />
                  <span>Proven Results</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Automated new content banners */}
          <NewContentAdBanner />
          <ContentSpotlight />
          {/* New Content Promo */}
          <div className="mb-8 rounded-2xl p-6 bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="uppercase tracking-wider text-xs font-bold opacity-90 mb-1">New</div>
                <h3 className="text-2xl font-extrabold">Fresh Articles: September 2025</h3>
                <p className="opacity-90">Real-time evals, edge agents, and trustworthy routing now live.</p>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 w-full md:w-auto">
                <a href="/blog/ai-2026-production-agent-postmortems-playbook" className="group block bg-white/10 rounded-xl p-4 hover:bg-white/15 transition">
                  <div className="text-sm font-semibold mb-1 line-clamp-2">Production Agent Postmortems — Playbook (2026)</div>
                  <div className="text-xs opacity-90">6 min • Reliability</div>
                </a>
                <a href="/blog/ai-2026-real-time-evals-inference-guardrails" className="group block bg-white/10 rounded-xl p-4 hover:bg-white/15 transition">
                  <div className="text-sm font-semibold mb-1 line-clamp-2">Real-Time Evals & Inference Guardrails (2026)</div>
                  <div className="text-xs opacity-90">7 min • Safety</div>
                </a>
                <a href="/blog/ai-2026-edge-agents-production-guide" className="group block bg-white/10 rounded-xl p-4 hover:bg-white/15 transition">
                  <div className="text-sm font-semibold mb-1 line-clamp-2">Edge Agents in Production — 2026 Guide</div>
                  <div className="text-xs opacity-90">8 min • Edge</div>
                </a>
                <a href="/blog/ai-2026-operational-evals-blueprint" className="group block bg-white/10 rounded-xl p-4 hover:bg-white/15 transition">
                  <div className="text-sm font-semibold mb-1 line-clamp-2">Operational Evals — Blueprint (2026)</div>
                  <div className="text-xs opacity-90">8 min • Evals</div>
                </a>
                <a href="/blog/ai-2026-agent-observability-blueprint" className="group block bg-white/10 rounded-xl p-4 hover:bg-white/15 transition">
                  <div className="text-sm font-semibold mb-1 line-clamp-2">Agent Observability Blueprint (2026)</div>
                  <div className="text-xs opacity-90">7 min • Observability</div>
                </a>
                <a href="/blog/ai-2026-trustworthy-model-routing-starter" className="group block bg-white/10 rounded-xl p-4 hover:bg-white/15 transition">
                  <div className="text-sm font-semibold mb-1 line-clamp-2">Trustworthy Model Routing — Starter Kit (2026)</div>
                  <div className="text-xs opacity-90">6 min • Routing</div>
                </a>
                <a href="/blog/ai-2026-evidence-led-operations-blueprint" className="group block bg-white/10 rounded-xl p-4 hover:bg-white/15 transition">
                  <div className="text-sm font-semibold mb-1 line-clamp-2">AI 2026: Evidence‑Led Operations</div>
                  <div className="text-xs opacity-90">7 min • Operations</div>
                </a>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Latest Insights</h2>
              <p className="text-gray-300 mt-2">New guides and blueprints from our experts</p>
            </div>
            <Link href="/blog" className="text-cyan-400 hover:text-cyan-300">View all</Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestInsights.map((post, index) => (
              <motion.a
                key={post.href}
                href={post.href}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-6"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-cyan-300">
                  <span className="px-2 py-1 rounded-md bg-white/10 border border-white/10">{post.tag}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {post.title}
                </h3>
                <span className="mt-4 inline-flex items-center text-cyan-400 group-hover:text-cyan-300 text-sm">
                  Read more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI-powered automation to quantum computing, we provide the tools you need to stay ahead of the competition.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-3 mb-6">
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Revolutionary 2026 Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From AI-powered business intelligence to quantum computing and emerging technologies, we're building the future today
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "AI Business Intelligence", description: "Transform data into actionable insights with AI-powered analytics", icon: Brain, gradient: "from-purple-500 to-pink-500", link: "/comprehensive-services-showcase-2026" },
              { title: "Cloud Infrastructure", description: "Automate cloud infrastructure deployment and management", icon: Cloud, gradient: "from-cyan-500 to-blue-500", link: "/comprehensive-services-showcase-2026" },
              { title: "Cybersecurity Intelligence", description: "Advanced threat detection and response with AI", icon: Shield, gradient: "from-red-500 to-orange-500", link: "/comprehensive-services-showcase-2026" },
              { title: "Data Engineering", description: "Streamline data pipelines and analytics with AI", icon: BarChart3, gradient: "from-emerald-500 to-teal-500", link: "/comprehensive-services-showcase-2026" },
              { title: "Quantum Computing", description: "Access quantum computing power through the cloud", icon: Globe, gradient: "from-indigo-500 to-purple-500", link: "/comprehensive-services-showcase-2026" },
              { title: "Blockchain Intelligence", description: "Intelligent blockchain analytics and DeFi optimization", icon: Lock, gradient: "from-yellow-500 to-orange-500", link: "/comprehensive-services-showcase-2026" }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => window.location.href = service.link}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="relative p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} p-3 mb-4`}>
                    <service.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{service.description}</p>
                  <a href={service.link} className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm font-medium">Explore Service</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action for Services Showcase */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a
              href="/comprehensive-services-showcase-2026"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              View All 2026 Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Revolutionary Content Banner 2026 */}
      <RevolutionaryContentBanner2026 />

      {/* Innovative Services Showcase 2026 */}
      <InnovativeServicesShowcase2026 />

      {/* Advanced Automation Banner 2026 */}
      <AdvancedAutomationBanner2026 />

      {/* Interactive Features Section */}
      <InteractiveFeatures />

      {/* Content Showcase Section */}
      <ContentShowcase />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get in touch with our team to discuss how our innovative services can help you achieve your goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300 text-sm">Dedicated professionals ready to help</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Fast Implementation</h3>
              <p className="text-gray-300 text-sm">Quick setup and deployment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-300 text-sm">Round-the-clock assistance</p>
            </div>
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Email Us
              </a>
              <a
                href="tel:+13024640950"
                className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-gray-400 mb-4">
            <p>© 2025-2026 ZionTech Group. All rights reserved.</p>
            <p className="mt-2">
              Address: 364 E Main St STE 1008 Middletown DE 19709 | 
              Phone: +1 302 464 0950 | 
              Email: kleber@ziontechgroup.com
            </p>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="/comprehensive-services-showcase-2026" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              2026 Services
            </a>
            <a href="/comprehensive-services-showcase-2025" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              2025 Services
            </a>
            <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Website
            </a>
          </div>
        </div>
      </footer>
    </UltraFuturisticBackground2026>
  );
};

export default Homepage2025;