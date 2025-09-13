import React from 'react';
import { Metadata } from 'next';
import { 
  Brain, 
  Code, 
  Image, 
  Video, 
  Music, 
  FileText, 
  BarChart3, 
  Search, 
  MessageSquare, 
  Zap,
  ArrowRight,
  Star,
  Download,
  Play,
  Settings,
  Shield,
  Globe,
  Users
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Tools Ultimate Showcase 2025 - Complete AI Toolkit | Zion Tech Group',
  description: 'Explore our comprehensive collection of AI tools and utilities for 2025. From content generation to data analysis, discover the most advanced AI-powered solutions.',
  keywords: 'AI tools, artificial intelligence utilities, AI software, content generation, data analysis, AI automation',
  openGraph: {
    title: 'AI Tools Ultimate Showcase 2025 - Complete AI Toolkit',
    description: 'Explore our comprehensive collection of AI tools and utilities for 2025.',
    type: 'website',
  },
};

export default function AIToolsUltimateShowcase2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-8">
            <Zap className="w-4 h-4" />
            <span>Ultimate AI Tools Collection 2025</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Complete AI
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Toolkit
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover the most comprehensive collection of AI tools and utilities designed to revolutionize 
            your workflow, boost productivity, and unlock new possibilities across every industry.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2">
              Explore All Tools
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
              Try Free Demo
            </button>
          </div>
        </div>
      </section>

      {/* Tool Categories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            AI Tool Categories
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: 'Code Generation & Analysis',
                description: 'Advanced AI-powered coding tools for developers and engineers.',
                tools: ['Code Generator', 'Bug Detector', 'Code Optimizer', 'Documentation Writer'],
                color: 'from-green-600 to-emerald-600'
              },
              {
                icon: Image,
                title: 'Visual Content Creation',
                description: 'AI tools for creating stunning images, graphics, and visual content.',
                tools: ['Image Generator', 'Photo Enhancer', 'Style Transfer', 'Logo Creator'],
                color: 'from-purple-600 to-pink-600'
              },
              {
                icon: Video,
                title: 'Video Production',
                description: 'Revolutionary video creation and editing powered by AI.',
                tools: ['Video Generator', 'Auto Editor', 'Voice Synthesis', 'Motion Graphics'],
                color: 'from-red-600 to-orange-600'
              },
              {
                icon: Music,
                title: 'Audio & Music',
                description: 'AI-powered audio processing and music generation tools.',
                tools: ['Music Composer', 'Voice Cloner', 'Audio Enhancer', 'Podcast Generator'],
                color: 'from-yellow-600 to-amber-600'
              },
              {
                icon: FileText,
                title: 'Content Writing',
                description: 'Advanced AI writing assistants for all types of content.',
                tools: ['Article Writer', 'Copy Generator', 'Translation', 'SEO Optimizer'],
                color: 'from-indigo-600 to-blue-600'
              },
              {
                icon: BarChart3,
                title: 'Data Analysis',
                description: 'Powerful AI tools for data processing and business intelligence.',
                tools: ['Data Visualizer', 'Predictive Analytics', 'Report Generator', 'Insight Extractor'],
                color: 'from-teal-600 to-cyan-600'
              },
              {
                icon: Search,
                title: 'Search & Discovery',
                description: 'Intelligent search and content discovery solutions.',
                tools: ['Smart Search', 'Content Recommender', 'Trend Analyzer', 'Knowledge Graph'],
                color: 'from-gray-600 to-slate-600'
              },
              {
                icon: MessageSquare,
                title: 'Communication',
                description: 'AI-powered communication and customer service tools.',
                tools: ['Chatbot Builder', 'Email Assistant', 'Meeting Scheduler', 'Response Generator'],
                color: 'from-rose-600 to-pink-600'
              },
              {
                icon: Brain,
                title: 'Machine Learning',
                description: 'Advanced ML tools for model training and deployment.',
                tools: ['Model Trainer', 'Data Preprocessor', 'Feature Engineer', 'Model Deployer'],
                color: 'from-violet-600 to-purple-600'
              }
            ].map((category, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{category.description}</p>
                
                <div className="space-y-2">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="flex items-center gap-2 text-blue-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-sm">{tool}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`w-full mt-6 bg-gradient-to-r ${category.color} text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2`}>
                  Explore Tools
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Featured AI Tools
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most popular and powerful AI tools that are transforming industries worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Neural Code Generator',
                description: 'Generate high-quality code in any programming language using advanced neural networks.',
                rating: 4.9,
                users: '50K+',
                category: 'Code Generation',
                features: ['Multi-language Support', 'Context Awareness', 'Error Detection', 'Auto-completion'],
                price: 'Free Tier Available'
              },
              {
                name: 'Quantum Image Creator',
                description: 'Create stunning images and artwork using quantum-enhanced AI algorithms.',
                rating: 4.8,
                users: '75K+',
                category: 'Visual Content',
                features: ['Style Transfer', 'High Resolution', 'Batch Processing', 'API Access'],
                price: 'From $29/month'
              },
              {
                name: 'Voice Synthesis Studio',
                description: 'Generate natural-sounding speech in multiple languages and voices.',
                rating: 4.9,
                users: '30K+',
                category: 'Audio & Music',
                features: ['100+ Voices', 'Emotion Control', 'Real-time Processing', 'Custom Voices'],
                price: 'From $19/month'
              },
              {
                name: 'Data Intelligence Suite',
                description: 'Advanced analytics and insights powered by machine learning algorithms.',
                rating: 4.7,
                users: '25K+',
                category: 'Data Analysis',
                features: ['Predictive Analytics', 'Visualization', 'Automated Reports', 'Real-time Insights'],
                price: 'From $49/month'
              },
              {
                name: 'Content Marketing AI',
                description: 'Complete content creation and marketing automation platform.',
                rating: 4.8,
                users: '40K+',
                category: 'Content Writing',
                features: ['SEO Optimization', 'Multi-platform', 'A/B Testing', 'Performance Tracking'],
                price: 'From $39/month'
              },
              {
                name: 'Smart Chatbot Builder',
                description: 'Create intelligent chatbots with advanced conversation capabilities.',
                rating: 4.9,
                users: '60K+',
                category: 'Communication',
                features: ['Natural Language', 'Multi-channel', 'Analytics', 'Easy Integration'],
                price: 'From $15/month'
              }
            ].map((tool, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{tool.name}</h3>
                    <span className="text-sm text-blue-400 bg-blue-400/20 px-3 py-1 rounded-full">
                      {tool.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">{tool.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{tool.description}</p>
                
                <div className="space-y-2 mb-6">
                  {tool.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-blue-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {tool.users}
                    </span>
                    <span className="text-green-400 font-semibold">{tool.price}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2">
                    <Play className="w-4 h-4" />
                    Try Demo
                  </button>
                  <button className="px-4 py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Seamless Integration
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI tools integrate seamlessly with your existing workflow and popular platforms.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Connect Everything
              </h3>
              <p className="text-gray-300 mb-8">
                Our AI tools are designed to work together and integrate with your favorite platforms. 
                From APIs to plugins, we make it easy to incorporate AI into your existing workflow.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">API Integration</h4>
                    <p className="text-gray-400">RESTful APIs for seamless integration</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Enterprise Security</h4>
                    <p className="text-gray-400">Bank-level security and compliance</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Global Scale</h4>
                    <p className="text-gray-400">Worldwide deployment and support</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h4 className="text-xl font-bold text-white mb-6">Popular Integrations</h4>
              <div className="grid grid-cols-2 gap-4">
                {['Slack', 'Microsoft Teams', 'Google Workspace', 'Salesforce', 'HubSpot', 'Zapier', 'Webflow', 'WordPress'].map((platform, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg mx-auto mb-2"></div>
                    <span className="text-white text-sm font-medium">{platform}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Building with AI Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join over 500,000 developers, creators, and businesses who are already using our AI tools 
            to build amazing products and solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              View Documentation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}