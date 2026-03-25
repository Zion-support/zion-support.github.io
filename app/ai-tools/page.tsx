'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import {
  Brain,
  Calculator,
  FileText,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Zap,
  ChevronRight,
  Globe,
} from 'lucide-react';

// Dynamic import for client-side only components
const AIROICalculator = dynamic(
  () => import('../components/AIROICalculator'),
  { ssr: false, loading: () => <div className="h-96 bg-slate-800 animate-pulse rounded-2xl" /> }
);

const AIDocumentAnalyzer = dynamic(
  () => import('../components/AIDocumentAnalyzer'),
  { ssr: false, loading: () => <div className="h-96 bg-slate-800 animate-pulse rounded-2xl" /> }
);

interface Tool {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  href?: string;
  demo?: React.ReactNode;
}

const aiTools: Tool[] = [
  {
    id: 'roi-calculator',
    name: 'AI ROI Calculator',
    description: 'Calculate your expected return on investment for any AI implementation',
    icon: <Calculator className="w-6 h-6" />,
    category: 'Business',
    demo: <AIROICalculator />
  },
  {
    id: 'code-complexity',
    name: 'Code Complexity Analyzer',
    description: 'Analyze code complexity and get AI-powered refactoring suggestions',
    icon: <Brain className="w-6 h-6" />,
    category: 'Development',
    href: '/tools/code-complexity-analyzer'
  },
  {
    id: 'api-tester',
    name: 'API Response Tester',
    description: 'Test API latency and performance with detailed metrics',
    icon: <Zap className="w-6 h-6" />,
    category: 'Development',
    href: '/tools/api-response-tester'
  },
  {
    id: 'file-analyzer',
    name: 'AI File Analyzer',
    description: 'Upload files and get AI-powered analysis and metadata extraction',
    icon: <FileText className="w-6 h-6" />,
    category: 'Productivity',
    href: '/tools/file-analyzer'
  },
  {
    id: 'sql-query-generator',
    name: 'SQL Query Generator',
    description: 'Generate SQL queries from natural language descriptions',
    icon: <Brain className="w-6 h-6" />,
    category: 'Development',
    href: '/tools/sql-query-generator'
  },
  {
    id: 'jwt-decoder',
    name: 'JWT Decoder',
    description: 'Decode and inspect JWT tokens instantly',
    icon: <Brain className="w-6 h-6" />,
    category: 'Development',
    href: '/tools/jwt-decoder'
  },
  {
    id: 'cron-generator',
    name: 'Cron Generator',
    description: 'Generate cron expressions for scheduled tasks',
    icon: <Sparkles className="w-6 h-6" />,
    category: 'Development',
    href: '/tools/cron-generator'
  },
  {
    id: 'website-analyzer',
    name: 'Website Analyzer',
    description: 'Analyze websites for SEO, performance, security, and accessibility',
    icon: <Globe className="w-6 h-6" />,
    category: 'Developer',
    href: '/tools/website-analyzer'
  },
  {
    id: 'api-designer',
    name: 'API Designer',
    description: 'Design, document, and test APIs visually',
    icon: <Sparkles className="w-6 h-6" />,
    category: 'Development',
    href: '/tools/api-designer'
  },
  {
    id: 'document-analyzer',
    name: 'AI Document Analyzer',
    description: 'Upload documents for instant AI-powered analysis and insights',
    icon: <FileText className="w-6 h-6" />,
    category: 'Productivity',
    demo: <AIDocumentAnalyzer />
  },
  {
    id: 'chatbot-builder',
    name: 'AI Chatbot Builder',
    description: 'Create custom AI chatbots for your website in minutes',
    icon: <MessageCircle className="w-6 h-6" />,
    category: 'Development',
    href: '/ai-chatbot-builder'
  },
  {
    id: 'content-generator',
    name: 'AI Content Generator',
    description: 'Generate marketing content, blogs, and copy with AI',
    icon: <Sparkles className="w-6 h-6" />,
    category: 'Marketing',
    href: '/ai-content-generator'
  },
  {
    id: 'code-assistant',
    name: 'AI Code Assistant',
    description: 'Get intelligent coding help, auto-completion, and bug detection',
    icon: <Brain className="w-6 h-6" />,
    category: 'Development',
    href: '/ai-code-assistant'
  },
  {
    id: 'analytics',
    name: 'AI Analytics Platform',
    description: 'Advanced analytics with predictive insights and visualizations',
    icon: <Zap className="w-6 h-6" />,
    category: 'Analytics',
    href: '/analytics-dashboard'
  },
];

const categories = ['All', 'Business', 'Productivity', 'Development', 'Marketing', 'Analytics'];

export default function AIToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeTool, setActiveTool] = useState<string | null>(null);

  const filteredTools = aiTools.filter(
    tool => selectedCategory === 'All' || tool.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-green-600/20 text-green-300 px-4 py-2 rounded-full text-sm mb-6"
          >
            <Zap className="w-4 h-4" />
            <span>Free AI Tools</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Free AI Tools{' '}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              You Can Use Now
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto mb-10"
          >
            Experience the power of AI without any signup. 
            Calculate ROI, analyze documents, build chatbots — all free.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#tools"
              className="px-8 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors flex items-center gap-2"
            >
              Try Tools Now
              <ChevronRight className="w-5 h-5" />
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border border-slate-600 text-white rounded-full font-semibold hover:bg-slate-800 transition-colors"
             data-cta-event="cta_contact" data-cta-label="page">
              Talk to Sales
            </a>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section id="tools" className="px-6 pb-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white shadow-lg shadow-green-600/25'
                    : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6">
            {filteredTools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden"
              >
                {activeTool === tool.id && tool.demo ? (
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white">
                          {tool.icon}
                        </div>
                        <h3 className="text-white font-bold">{tool.name}</h3>
                      </div>
                      <button
                        onClick={() => setActiveTool(null)}
                        className="text-slate-400 hover:text-white"
                      >
                        <ChevronRight className="w-5 h-5 rotate-90" />
                      </button>
                    </div>
                    {tool.demo}
                  </div>
                ) : (
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white shrink-0">
                        {tool.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-white font-bold">{tool.name}</h3>
                          <span className="text-xs text-slate-500">{tool.category}</span>
                        </div>
                        <p className="text-slate-400 text-sm mt-1">{tool.description}</p>
                        
                        <div className="mt-4 flex gap-2">
                          {tool.demo ? (
                            <button
                              onClick={() => setActiveTool(tool.id)}
                              className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center gap-2"
                            >
                              Try Now
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          ) : tool.href ? (
                            <a
                              href={tool.href}
                              className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center gap-2"
                            >
                              Open Tool
                              <ArrowRight className="w-4 h-4" />
                            </a>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-4">
                Need Custom AI Solutions?
              </h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                Our team can build custom AI tools tailored to your specific business needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="px-8 py-3 bg-white text-green-600 rounded-full font-semibold hover:bg-slate-100 transition-colors"
                 data-cta-event="cta_contact" data-cta-label="page">
                  Get a Quote
                </a>
                <a
                  href="/ai-services"
                  className="px-8 py-3 bg-green-700 text-white rounded-full font-semibold hover:bg-green-800 transition-colors"
                >
                  View All Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
