'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import {
  Brain,
  Zap,
  Shield,
  Cpu,
  FileText,
  Calculator,
  Activity,
  ChevronRight,
} from 'lucide-react';

const AIServiceHealthMonitor = dynamic(
  () => import('../components/AIServiceHealthMonitor'),
  { ssr: false, loading: () => <div className="h-96 bg-slate-800 animate-pulse rounded-2xl" /> }
);

const AIROICalculator = dynamic(
  () => import('../components/AIROICalculator'),
  { ssr: false, loading: () => <div className="h-96 bg-slate-800 animate-pulse rounded-2xl" /> }
);

const AIDocumentAnalyzer = dynamic(
  () => import('../components/AIDocumentAnalyzer'),
  { ssr: false, loading: () => <div className="h-96 bg-slate-800 animate-pulse rounded-2xl" /> }
);

interface DashboardTab {
  id: string;
  name: string;
  icon: React.ReactNode;
  component: React.ReactNode;
}

const tabs: DashboardTab[] = [
  { id: 'health', name: 'Service Health', icon: <Activity className="w-5 h-5" />, component: <AIServiceHealthMonitor /> },
  { id: 'roi', name: 'ROI Calculator', icon: <Calculator className="w-5 h-5" />, component: <AIROICalculator /> },
  { id: 'analyzer', name: 'Document Analyzer', icon: <FileText className="w-5 h-5" />, component: <AIDocumentAnalyzer /> },
];

const quickLinks = [
  { name: 'AI Experiences', href: '/ai-experiences', icon: <Brain className="w-5 h-5" />, color: 'from-violet-500 to-purple-500' },
  { name: 'AI Tools', href: '/ai-tools', icon: <Zap className="w-5 h-5" />, color: 'from-green-500 to-emerald-500' },
  { name: 'AI Services', href: '/ai-services', icon: <Cpu className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500' },
  { name: 'AI Lab', href: '/ai-lab', icon: <Shield className="w-5 h-5" />, color: 'from-amber-500 to-orange-500' },
];

const stats = [
  { label: 'Active AI Services', value: '200+', change: '+12 this week' },
  { label: 'API Uptime', value: '99.98%', change: 'Excellent' },
  { label: 'AI Models Deployed', value: '50+', change: '3 new this month' },
  { label: 'Daily API Calls', value: '2.4M', change: '+15% vs last month' },
];

export default function AIDashboardPage() {
  const [activeTab, setActiveTab] = useState('health');
  const currentTab = tabs.find(t => t.id === activeTab) || tabs[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero */}
      <section className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm mb-4">
              <Cpu className="w-4 h-4" />
              <span>AI Control Center</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Your AI{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Operations Hub
              </span>
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Monitor AI services, calculate ROI, analyze documents, and manage all your AI operations in one place.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-4 border border-slate-700"
              >
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
                <div className="text-green-400 text-xs mt-1">{stat.change}</div>
              </motion.div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="group bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-blue-500/50 transition-all"
              >
                <div className={`w-10 h-10 bg-gradient-to-br ${link.color} rounded-lg flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform`}>
                  {link.icon}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Tabs */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {tab.icon}
                {tab.name}
              </button>
            ))}
          </div>

          {/* Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-900/50 rounded-2xl border border-slate-700 p-6"
          >
            {currentTab.component}
          </motion.div>
        </div>
      </section>
    </div>
  );
}