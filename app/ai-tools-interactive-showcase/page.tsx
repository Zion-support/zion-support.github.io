import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Wrench, 
  Brain, 
  Code, 
  Zap, 
  Target, 
  BarChart3, 
  Palette, 
  MessageSquare,
  FileText,
  Image,
  Video,
  Music,
  Search,
  Shield,
  Globe,
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Interactive AI Tools Showcase - Advanced AI-Powered Solutions 2026',
  description: 'Discover cutting-edge AI tools and interactive solutions. Experience advanced AI-powered applications for productivity, creativity, analysis, and automation.',
  keywords: 'AI tools, interactive AI, AI applications, productivity tools, creative AI, automation tools, AI solutions',
  openGraph: {
    title: 'Interactive AI Tools Showcase - Advanced AI Solutions',
    description: 'Experience the power of next-generation AI tools and interactive applications',
    type: 'website',
  },
};

const AIToolsInteractiveShowcase = () => {
  const toolCategories = [
    {
      title: 'AI Development Tools',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      tools: [
        {
          name: 'Neural Code Generator',
          description: 'AI-powered code generation with context awareness and optimization',
          features: ['Multi-language support', 'Real-time suggestions', 'Code optimization'],
          demo: true
        },
        {
          name: 'Intelligent Debug Assistant',
          description: 'Advanced debugging with AI-powered error detection and solutions',
          features: ['Error prediction', 'Automated fixes', 'Performance analysis'],
          demo: true
        },
        {
          name: 'Smart API Designer',
          description: 'Automated API design and documentation generation',
          features: ['Auto-documentation', 'Schema validation', 'Testing automation'],
          demo: false
        }
      ]
    },
    {
      title: 'Creative AI Suite',
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
      tools: [
        {
          name: 'AI Art Studio',
          description: 'Advanced image generation with style transfer and enhancement',
          features: ['Style transfer', 'Image enhancement', 'Batch processing'],
          demo: true
        },
        {
          name: 'Neural Music Composer',
          description: 'AI-powered music composition and arrangement',
          features: ['Genre adaptation', 'Mood-based composition', 'Instrument selection'],
          demo: true
        },
        {
          name: 'Video Content Generator',
          description: 'Automated video creation with AI-driven editing',
          features: ['Auto-editing', 'Scene generation', 'Voice synthesis'],
          demo: false
        }
      ]
    },
    {
      title: 'Business Intelligence',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500',
      tools: [
        {
          name: 'Predictive Analytics Engine',
          description: 'Advanced forecasting with machine learning algorithms',
          features: ['Trend analysis', 'Risk assessment', 'Scenario modeling'],
          demo: true
        },
        {
          name: 'Customer Insight Platform',
          description: 'AI-powered customer behavior analysis and segmentation',
          features: ['Behavior tracking', 'Segmentation', 'Recommendation engine'],
          demo: true
        },
        {
          name: 'Market Intelligence Bot',
          description: 'Real-time market analysis and competitive intelligence',
          features: ['Market monitoring', 'Competitor analysis', 'Opportunity detection'],
          demo: false
        }
      ]
    },
    {
      title: 'Communication & Collaboration',
      icon: MessageSquare,
      color: 'from-orange-500 to-red-500',
      tools: [
        {
          name: 'AI Meeting Assistant',
          description: 'Intelligent meeting transcription and action item extraction',
          features: ['Live transcription', 'Action items', 'Summary generation'],
          demo: true
        },
        {
          name: 'Smart Document Processor',
          description: 'Advanced document analysis and content extraction',
          features: ['Content extraction', 'Format conversion', 'Search optimization'],
          demo: true
        },
        {
          name: 'Multilingual Translator',
          description: 'Real-time translation with context preservation',
          features: ['100+ languages', 'Context awareness', 'Tone preservation'],
          demo: false
        }
      ]
    }
  ];

  const featuredTools = [
    {
      name: 'AI Content Optimizer',
      icon: FileText,
      description: 'Revolutionary content optimization using advanced NLP and machine learning',
      stats: ['95% accuracy', '10x faster', '50+ languages'],
      category: 'Content Creation'
    },
    {
      name: 'Smart Security Scanner',
      icon: Shield,
      description: 'AI-powered security analysis and threat detection system',
      stats: ['99.9% detection', 'Real-time alerts', 'Zero false positives'],
      category: 'Security'
    },
    {
      name: 'Global AI Assistant',
      icon: Globe,
      description: 'Comprehensive AI assistant with multi-domain expertise',
      stats: ['24/7 availability', 'Multi-language', 'Context aware'],
      category: 'Productivity'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Interactive AI Tools Showcase
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            AI Tools
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Interactive</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience the power of next-generation AI tools. Discover interactive solutions that transform how you work, create, and innovate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#tools"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Explore Tools
            </Link>
            <Link 
              href="/contact"
              className="px-8 py-4 border-2 border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Featured AI Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTools.map((tool, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 mb-6">
                    <tool.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{tool.name}</h3>
                  <p className="text-gray-300 mb-6">{tool.description}</p>
                  <div className="space-y-2 mb-6">
                    {tool.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="flex items-center justify-center text-blue-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        {stat}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-purple-300 font-medium">{tool.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tool Categories */}
      <section id="tools" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">AI Tool Categories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive suite of AI-powered tools designed to enhance productivity, creativity, and innovation.
            </p>
          </div>
          
          <div className="space-y-16">
            {toolCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="flex items-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} mr-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">{category.title}</h3>
                    <p className="text-gray-300">Advanced AI tools for {category.title.toLowerCase()}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.tools.map((tool, toolIndex) => (
                    <div 
                      key={toolIndex}
                      className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {tool.name}
                        </h4>
                        {tool.demo && (
                          <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-medium rounded-full">
                            Live Demo
                          </span>
                        )}
                      </div>
                      <p className="text-gray-300 mb-4">{tool.description}</p>
                      <div className="space-y-2">
                        {tool.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-gray-300">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 flex gap-3">
                        <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                          Try Now
                        </button>
                        <button className="px-4 py-2 border border-white/20 text-white rounded-lg font-medium hover:bg-white/10 transition-all duration-300">
                          Learn More
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Experience AI in Action</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Try our interactive AI tools and see the future of intelligent automation.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-12 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">AI-Powered Content Generator</h3>
                <p className="text-gray-300 mb-8">
                  Experience the power of our AI content generation tool. Input your requirements and watch as AI creates professional content in seconds.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-white">
                    <Zap className="w-5 h-5 mr-3 text-yellow-400" />
                    <span>Generate content in 30+ languages</span>
                  </div>
                  <div className="flex items-center text-white">
                    <Target className="w-5 h-5 mr-3 text-green-400" />
                    <span>Optimized for SEO and engagement</span>
                  </div>
                  <div className="flex items-center text-white">
                    <Brain className="w-5 h-5 mr-3 text-blue-400" />
                    <span>Context-aware and personalized</span>
                  </div>
                </div>
                <button className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                  Try Content Generator
                </button>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="space-y-4">
                  <div>
                    <label className="block text-white font-medium mb-2">Content Type</label>
                    <select className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white">
                      <option>Blog Post</option>
                      <option>Product Description</option>
                      <option>Email Campaign</option>
                      <option>Social Media Post</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Topic</label>
                    <input 
                      type="text" 
                      placeholder="Enter your topic..."
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Tone</label>
                    <select className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white">
                      <option>Professional</option>
                      <option>Casual</option>
                      <option>Technical</option>
                      <option>Creative</option>
                    </select>
                  </div>
                  <button className="w-full p-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-medium hover:from-green-600 hover:to-emerald-600 transition-all duration-300">
                    Generate Content
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Discover how our AI tools can revolutionize your productivity, creativity, and business operations. 
              Start your journey with intelligent automation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                href="/ai-services"
                className="px-8 py-4 border-2 border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIToolsInteractiveShowcase;