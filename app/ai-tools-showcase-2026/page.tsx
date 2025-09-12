import React from 'react';
import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Zap, Shield, BarChart3, Code, Database, Cpu } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Tools Showcase 2026 - Revolutionary AI Solutions | Zion Tech Group',
  description: 'Discover the most advanced AI tools and solutions for 2026. From neural interfaces to quantum computing, explore cutting-edge AI technologies.',
  keywords: 'AI tools 2026, artificial intelligence solutions, neural interfaces, quantum computing, AI automation, machine learning tools',
};

const aiTools = [
  {
    id: 1,
    name: 'Neural Interface Pro 2026',
    category: 'Neural Computing',
    description: 'Revolutionary brain-computer interface technology enabling direct neural communication with AI systems.',
    features: ['Real-time neural signal processing', 'Advanced pattern recognition', 'Secure neural encryption'],
    icon: Brain,
    badge: 'Revolutionary',
    price: 'Enterprise',
    rating: 5.0,
    users: '10K+'
  },
  {
    id: 2,
    name: 'Quantum AI Optimizer',
    category: 'Quantum Computing',
    description: 'Breakthrough quantum machine learning platform delivering exponential performance improvements.',
    features: ['Quantum algorithm optimization', 'Parallel processing capabilities', 'Advanced error correction'],
    icon: Cpu,
    badge: 'Breakthrough',
    price: 'Premium',
    rating: 4.9,
    users: '5K+'
  },
  {
    id: 3,
    name: 'Autonomous Agent Suite',
    category: 'AI Automation',
    description: 'Complete suite of autonomous AI agents for enterprise workflow automation and optimization.',
    features: ['Self-learning algorithms', 'Multi-agent collaboration', 'Real-time decision making'],
    icon: Zap,
    badge: 'Advanced',
    price: 'Standard',
    rating: 4.8,
    users: '25K+'
  },
  {
    id: 4,
    name: 'AI Security Guardian',
    category: 'Cybersecurity',
    description: 'Advanced AI-powered cybersecurity platform with predictive threat detection and automated response.',
    features: ['Predictive threat analysis', 'Automated incident response', 'Behavioral anomaly detection'],
    icon: Shield,
    badge: 'Enterprise',
    price: 'Enterprise',
    rating: 4.9,
    users: '15K+'
  },
  {
    id: 5,
    name: 'Data Intelligence Hub',
    category: 'Data Analytics',
    description: 'Comprehensive AI-driven data analytics platform with real-time insights and predictive modeling.',
    features: ['Real-time data processing', 'Predictive analytics', 'Automated reporting'],
    icon: BarChart3,
    badge: 'Professional',
    price: 'Standard',
    rating: 4.7,
    users: '30K+'
  },
  {
    id: 6,
    name: 'Code Generation AI',
    category: 'Development',
    description: 'Advanced AI code generation tool with context-aware programming assistance and optimization.',
    features: ['Context-aware code generation', 'Automated testing', 'Performance optimization'],
    icon: Code,
    badge: 'Developer',
    price: 'Premium',
    rating: 4.8,
    users: '20K+'
  },
  {
    id: 7,
    name: 'Vector Database Pro',
    category: 'Database',
    description: 'High-performance vector database optimized for AI applications with advanced similarity search.',
    features: ['High-speed vector search', 'Scalable architecture', 'AI-optimized indexing'],
    icon: Database,
    badge: 'Performance',
    price: 'Enterprise',
    rating: 4.9,
    users: '12K+'
  },
  {
    id: 8,
    name: 'Multimodal AI Engine',
    category: 'Multimodal AI',
    description: 'Advanced multimodal AI system processing text, images, audio, and video with unified understanding.',
    features: ['Cross-modal understanding', 'Real-time processing', 'Advanced fusion algorithms'],
    icon: Brain,
    badge: 'Cutting-edge',
    price: 'Premium',
    rating: 4.9,
    users: '8K+'
  }
];

const categories = ['All', 'Neural Computing', 'Quantum Computing', 'AI Automation', 'Cybersecurity', 'Data Analytics', 'Development', 'Database', 'Multimodal AI'];

export default function AIToolsShowcase2026() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI Tools Showcase 2026
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover the most revolutionary AI tools and solutions that will transform your business in 2026. 
            From neural interfaces to quantum computing, explore cutting-edge technologies.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Explore All Tools
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Badge 
              key={category}
              variant={category === 'All' ? 'default' : 'secondary'}
              className="px-4 py-2 text-sm cursor-pointer hover:bg-blue-100"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {aiTools.map((tool) => {
            const IconComponent = tool.icon;
            return (
              <Card key={tool.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {tool.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-semibold">{tool.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit text-xs">
                    {tool.category}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-gray-600 mb-4">
                    {tool.description}
                  </CardDescription>
                  
                  <div className="space-y-2 mb-4">
                    {tool.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-500">
                        <div className="w-1 h-1 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">{tool.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500">{tool.users} users</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">{tool.price}</span>
                    <Button size="sm" variant="outline">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-6 opacity-90">
            Join thousands of companies already using our AI tools to achieve breakthrough results.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" variant="secondary">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}