'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Sparkles,
  Zap,
  MessageCircle,
  Mic,
  Eye,
  Shield,
  TrendingUp,
  Bot,
  Megaphone,
  Code,
  Database,
  Cpu,
} from 'lucide-react';

interface AIExperience {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  href: string;
  featured: boolean;
  new?: boolean;
}

const aiExperiences: AIExperience[] = [
  {
    id: 'voice',
    name: 'Voice AI Assistant',
    description: 'Speak naturally with our AI. Get instant responses, control features, and interact hands-free.',
    icon: <Mic className="w-8 h-8" />,
    category: 'Interaction',
    href: '/ai-voice-assistant',
    featured: true,
    new: true
  },
  {
    id: 'chat',
    name: 'Smart Chat Companion',
    description: 'AI-powered conversational assistant that learns from your interactions.',
    icon: <MessageCircle className="w-8 h-8" />,
    category: 'Interaction',
    href: '/zion-ai-chatbot-builder',
    featured: true
  },
  {
    id: 'vision',
    name: 'Computer Vision AI',
    description: 'Advanced image recognition and visual analysis for your applications.',
    icon: <Eye className="w-8 h-8" />,
    category: 'Vision',
    href: '/ai-vision',
    featured: true
  },
  {
    id: 'analytics',
    name: 'Predictive Analytics',
    description: 'Forecast trends and make data-driven decisions with AI precision.',
    icon: <TrendingUp className="w-8 h-8" />,
    category: 'Analytics',
    href: '/ai-predictive-analytics',
    featured: true,
    new: true
  },
  {
    id: 'security',
    name: 'AI Security Shield',
    description: 'Real-time threat detection and autonomous security responses.',
    icon: <Shield className="w-8 h-8" />,
    category: 'Security',
    href: '/ai-security-monitor',
    featured: true
  },
  {
    id: 'code',
    name: 'AI Code Assistant',
    description: 'Intelligent coding help, auto-completion, and bug detection.',
    icon: <Code className="w-8 h-8" />,
    category: 'Development',
    href: '/ai-code-assistant',
    featured: true,
    new: true
  },
  {
    id: 'nlp',
    name: 'Natural Language Processing',
    description: 'Understand and generate human language at scale.',
    icon: <Brain className="w-8 h-8" />,
    category: 'AI',
    href: '/ai-nlp',
    featured: false
  },
  {
    id: 'recommendations',
    name: 'Smart Recommendations',
    description: 'Personalized product and content suggestions powered by AI.',
    icon: <Sparkles className="w-8 h-8" />,
    category: 'AI',
    href: '/ai-recommendation-engine',
    featured: false,
    new: true
  },
  {
    id: 'automation',
    name: 'Workflow Automation',
    description: 'Automate complex processes with intelligent AI agents.',
    icon: <Zap className="w-8 h-8" />,
    category: 'Automation',
    href: '/ai-workflow-automation',
    featured: false
  },
  {
    id: 'ml',
    name: 'ML Platform',
    description: 'Build, train, and deploy machine learning models easily.',
    icon: <Cpu className="w-8 h-8" />,
    category: 'AI',
    href: '/ai-ml-platform',
    featured: false
  },
  {
    id: 'marketing',
    name: 'AI Marketing Hub',
    description: 'Intelligent marketing campaigns that optimize themselves.',
    icon: <Megaphone className="w-8 h-8" />,
    category: 'Marketing',
    href: '/ai-marketing',
    featured: false
  },
  {
    id: 'database',
    name: 'Intelligent Database',
    description: 'Self-optimizing databases that learn from your queries.',
    icon: <Database className="w-8 h-8" />,
    category: 'Infrastructure',
    href: '/ai-database-optimizer',
    featured: false
  },
];

const categories = ['All', 'Interaction', 'Vision', 'Analytics', 'Security', 'Development', 'AI', 'Automation', 'Marketing', 'Infrastructure'];

export default function AIExperiencesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredExperiences = aiExperiences.filter(exp => {
    const matchesCategory = selectedCategory === 'All' || exp.category === selectedCategory;
    const matchesSearch = exp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        exp.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredExperiences = filteredExperiences.filter(exp => exp.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-violet-600/20 text-violet-300 px-4 py-2 rounded-full text-sm mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>In-Browser AI Experiences</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Experience AI{' '}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Like Never Before
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto mb-10"
          >
            Interact with cutting-edge AI directly in your browser. 
            Mic, vision, conversation, and prediction — all powered by Zion's advanced AI engine.
          </motion.p>

          {/* Search & Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-xl mx-auto"
          >
            <input
              type="text"
              placeholder="Search AI experiences..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-700 text-white placeholder-slate-400 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 pb-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/25'
                    : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Experiences */}
      {featuredExperiences.length > 0 && selectedCategory === 'All' && (
        <section className="px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Zap className="w-6 h-6 text-amber-400" />
              Featured AI Experiences
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredExperiences.map((exp, index) => (
                <motion.a
                  key={exp.id}
                  href={exp.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-violet-500/50 transition-all hover:shadow-2xl hover:shadow-violet-600/10"
                >
                  {exp.new && (
                    <div className="absolute top-4 right-4 bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full">
                      NEW
                    </div>
                  )}
                  <div className="w-14 h-14 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {exp.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                    {exp.name}
                  </h3>
                  <p className="text-slate-400 text-sm">{exp.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-violet-400 text-sm">
                    <span>Explore</span>
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Experiences Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Bot className="w-6 h-6 text-violet-400" />
            {selectedCategory === 'All' ? 'All AI Experiences' : `${selectedCategory} Experiences`}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredExperiences.map((exp, index) => (
              <motion.a
                key={exp.id}
                href={exp.href}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="group bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-violet-500/30 transition-all hover:bg-slate-800"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-violet-400 shrink-0 group-hover:bg-violet-600/20 transition-colors">
                    {exp.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-white font-medium text-sm truncate group-hover:text-violet-400 transition-colors">
                      {exp.name}
                    </h3>
                    <p className="text-slate-500 text-xs line-clamp-2 mt-1">{exp.description}</p>
                    <span className="text-slate-600 text-xs mt-2 inline-block">{exp.category}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
          
          {filteredExperiences.length === 0 && (
            <div className="text-center py-16">
              <Sparkles className="w-12 h-12 text-slate-600 mx-auto mb-4" />
              <p className="text-slate-400">No AI experiences found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Experience the Future?
              </h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                Start with our free AI assistant right now. No signup required.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/zion-ai-chatbot-builder"
                  className="px-8 py-3 bg-white text-violet-600 rounded-full font-semibold hover:bg-slate-100 transition-colors"
                >
                  Try AI Chat
                </a>
                <a
                  href="/contact"
                  className="px-8 py-3 bg-violet-700 text-white rounded-full font-semibold hover:bg-violet-800 transition-colors"
                 data-cta-event="cta_contact" data-cta-label="page">
                  Talk to Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
