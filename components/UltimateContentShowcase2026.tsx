import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { ArrowRight, Star, TrendingUp, Zap, Shield, Brain, Rocket } from 'lucide-react';

const UltimateContentShowcase2026: React.FC = () => {
  const ultimateContent = [
    {
      id: 'ai-revolution-2026',
      title: 'AI Revolution 2026: The Complete Transformation Guide',
      description: 'Comprehensive guide covering the latest AI breakthroughs, implementation strategies, and future predictions.',
      category: 'AI Innovation',
      icon: '🧠',
      featured: true,
      new: true,
      link: '/ai-revolution-2026',
      stats: { views: '50K+', rating: 4.9 }
    },
    {
      id: 'quantum-ai-breakthrough',
      title: 'Quantum AI Breakthrough: Next-Gen Computing',
      description: 'Explore the convergence of quantum computing and artificial intelligence.',
      category: 'Quantum Computing',
      icon: '⚛️',
      featured: true,
      new: true,
      link: '/quantum-ai-breakthrough',
      stats: { views: '25K+', rating: 4.8 }
    },
    {
      id: 'ai-autonomous-systems',
      title: 'Autonomous AI Systems: Self-Evolving Technology',
      description: 'Learn about self-improving AI systems that adapt and evolve without human intervention.',
      category: 'Autonomous Systems',
      icon: '🤖',
      featured: false,
      new: true,
      link: '/ai-autonomous-systems',
      stats: { views: '15K+', rating: 4.7 }
    },
    {
      id: 'ai-ethics-framework',
      title: 'AI Ethics Framework: Responsible Innovation',
      description: 'Comprehensive framework for ethical AI development and deployment.',
      category: 'AI Ethics',
      icon: '⚖️',
      featured: false,
      new: true,
      link: '/ai-ethics-framework',
      stats: { views: '20K+', rating: 4.9 }
    },
    {
      id: 'ai-business-transformation',
      title: 'AI Business Transformation: ROI Strategies',
      description: 'Proven strategies for implementing AI in business with measurable ROI.',
      category: 'Business Strategy',
      icon: '📈',
      featured: true,
      new: false,
      link: '/ai-business-transformation',
      stats: { views: '35K+', rating: 4.8 }
    },
    {
      id: 'ai-cybersecurity-2026',
      title: 'AI Cybersecurity 2026: Advanced Threat Protection',
      description: 'Next-generation cybersecurity powered by artificial intelligence.',
      category: 'Cybersecurity',
      icon: '🛡️',
      featured: false,
      new: true,
      link: '/ai-cybersecurity-2026',
      stats: { views: '30K+', rating: 4.9 }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-6 py-2 mb-6">
            <Star className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">ULTIMATE CONTENT COLLECTION 2026</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            🚀 The Most Advanced AI Content Ever Created
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Discover our groundbreaking collection of AI resources, case studies, and implementation guides. 
            Everything you need to master artificial intelligence in 2026 and beyond.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-blue-600">100K+</div>
              <div className="text-sm text-gray-600">Total Views</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-green-600">4.9★</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-purple-600">50+</div>
              <div className="text-sm text-gray-600">Resources</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-orange-600">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {ultimateContent.map((content) => (
            <Card key={content.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-4xl">{content.icon}</div>
                  <div className="flex gap-2">
                    {content.featured && (
                      <Badge variant="default" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                    {content.new && (
                      <Badge variant="secondary" className="bg-gradient-to-r from-green-400 to-blue-500 text-white">
                        <Zap className="w-3 h-3 mr-1" />
                        New
                      </Badge>
                    )}
                  </div>
                </div>
                <Badge variant="outline" className="w-fit mb-3">{content.category}</Badge>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                  {content.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {content.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      {content.stats.views}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      {content.stats.rating}
                    </div>
                  </div>
                </div>
                <Button asChild className="w-full group-hover:bg-blue-600 transition-colors">
                  <Link href={content.link}>
                    Explore Content
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              🎯 Ready to Transform Your AI Journey?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who are already using our content to revolutionize their AI implementations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/ultimate-content-hub-2026">
                  <Rocket className="w-5 h-5 mr-2" />
                  Access All Content
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link href="/contact">
                  <Brain className="w-5 h-5 mr-2" />
                  Get Expert Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2026;