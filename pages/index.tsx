import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star, 
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server,
  ChevronRight, ExternalLink, TrendingUp, BarChart3, Cloud, Network
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import EnhancedContactForm from '../components/EnhancedContactForm';
import EnhancedServicesShowcase from '../components/EnhancedServicesShowcase';
import EnhancedTestimonialsSection from '../components/EnhancedTestimonialsSection';

export default function HomePage() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate features
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 6);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Brain,
      title: "AI Autonomous Ecosystem",
      description: "Revolutionary autonomous AI solutions that adapt and evolve",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Atom,
      title: "Quantum AI Neural Networks",
      description: "Quantum-powered AI with advanced consciousness capabilities",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Quantum Cybersecurity",
      description: "Quantum-resistant security with AI-powered threat detection",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Rocket,
      title: "Space Resource Intelligence",
      description: "AI-powered space resource discovery and optimization",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Cpu,
      title: "Autonomous DevOps",
      description: "AI-powered DevOps optimization and automation",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Database,
      title: "Edge Computing Orchestration",
      description: "Advanced edge computing optimization platform",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const services = [
    {
      title: "AI Business Intelligence",
      description: "Transform data into actionable insights with AI-powered analytics",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      link: "https://ziontechgroup.com/ai-business-intelligence",
      price: "$499/month",
      features: ["AI-powered dashboards", "Predictive analytics", "Real-time insights"]
    },
    {
      title: "Quantum Cybersecurity",
      description: "Future-proof security with quantum-resistant encryption and AI threat detection",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      link: "https://ziontechgroup.com/quantum-cybersecurity",
      price: "$799/month",
      features: ["Quantum-resistant encryption", "AI threat detection", "Zero-trust architecture"]
    },
    {
      title: "AI Customer Experience",
      description: "Deliver personalized customer experiences at scale with AI",
      icon: Users,
      color: "from-green-500 to-teal-500",
      link: "https://ziontechgroup.com/ai-customer-experience",
      price: "$399/month",
      features: ["Customer journey mapping", "AI personalization", "Sentiment analysis"]
    },
    {
      title: "Edge Computing Orchestration",
      description: "Deploy and manage applications at the edge with intelligent orchestration",
      icon: Network,
      color: "from-purple-500 to-pink-500",
      link: "https://ziontechgroup.com/edge-computing-orchestration",
      price: "$349/month",
      features: ["Edge node management", "IoT device management", "Real-time monitoring"]
    },
    {
      title: "Space Technology Innovation",
      description: "Accelerate space exploration with cutting-edge technology solutions",
      icon: Rocket,
      color: "from-violet-500 to-purple-500",
      link: "https://ziontechgroup.com/space-technology",
      price: "$2,499/month",
      features: ["Satellite management", "AI mission planning", "Quantum communication"]
    },
    {
      title: "Neural Interface Development",
      description: "Build the future of human-computer interaction with neural interfaces",
      icon: Brain,
      color: "from-pink-500 to-rose-500",
      link: "https://ziontechgroup.com/neural-interface",
      price: "$899/month",
      features: ["BCI development tools", "Neural signal processing", "AI pattern recognition"]
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: CheckCircle },
    { number: "50+", label: "Enterprise Clients", icon: Users },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "24/7", label: "Support Available", icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <Head>
        <title>Zion Tech Group — Leading-Edge Technology Solutions & Autonomous Innovation Platform</title>
        <meta name="description" content="Zion Tech Group delivers cutting-edge AI, quantum computing, cybersecurity, and digital transformation solutions. Leading the future of autonomous innovation." />
        <meta property="og:title" content="Zion Tech Group — Leading-Edge Technology Solutions" />
        <meta property="og:description" content="Cutting-edge AI, quantum computing, cybersecurity, and digital transformation solutions. Leading the future of autonomous innovation." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="AI, quantum computing, cybersecurity, digital transformation, autonomous systems, technology solutions" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

          {/* Technology & Infrastructure Deep Dive */}
          <section className="mx-auto max-w-7xl px-6 pb-16"></section>
            <h2 className="text-center text-4xl font-bold tracking-wide text-white/90 mb-12">🏗️ Technology & Infrastructure Deep Dive</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center"></div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                  <span className="text-xl">🔧</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Development Tools</h3>
                <p className="text-white/70 text-sm">TypeScript, ESLint, Husky</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center"></div>
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">Monitoring</h3>
                <p className="text-white/70 text-sm">Performance, Health, Analytics</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center"></div>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                  <span className="text-xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Deployment</h3>
                <p className="text-white/70 text-sm">Netlify, PM2, Docker</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center"></div>
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                  <span className="text-xl">🔒</span>
                </div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Security</h3>
                <p className="text-white/70 text-sm">Scanning, Compliance, Protection</p>
              </div>
            </div>
          </section>

 <section className="mx-auto max-w-7xl px-6 pb-14">
   <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Latest Autonomous Content</h2>
   <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a href="/reports/updates/update-2025-08-17-1812" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17: 1812</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a>
            <a href="/reports/updates/update-2025-08-17T21-11" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17T21: 11</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a>
            <a href="/reports/updates/update-2025-08-17-1811" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17: 1811</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a>
            <a href="/reports/updates/update-2025-08-17-2110" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17: 2110</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a>
            <a href="/reports/updates/update-2025-08-17-1809" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17: 1809</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a>
            <a href="/reports/updates/update-2025-08-17-1808" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 17: 1808</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a>
   </div>
 </section>
 
{/* AUTO-GENERATED: HOME_LATEST_CONTENT_END */}
</section>
    </div>
  );
}
;