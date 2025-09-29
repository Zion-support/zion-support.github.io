import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, TrendingUp, Users, Zap, Target, Star, Brain } from 'lucide-react';

export default function InteractiveContentRecommendation() {
  const [selectedInterest, setSelectedInterest] = useState('');

  const interests = [
    { id: 'automation', label: 'Process Automation', icon: Zap, color: 'blue' },
    { id: 'ai-agents', label: 'AI Agents', icon: Brain, color: 'purple' },
    { id: 'quantum', label: 'Quantum Computing', icon: Target, color: 'indigo' },
    { id: 'sustainability', label: 'Sustainability', icon: Star, color: 'green' },
    { id: 'roi', label: 'ROI & Business Value', icon: TrendingUp, color: 'orange' },
    { id: 'enterprise', label: 'Enterprise Solutions', icon: Users, color: 'teal' },
  ];

  const contentRecommendations = {
    automation: [
      {
        title: 'AI Enterprise Automation 2026: Complete Business Process Transformation',
        type: 'Article',
        readTime: '18 min',
        href: '/blog/ai-enterprise-automation-2026',
        description: 'Transform your enterprise with AI automation. 95% process efficiency, $5M+ savings, and zero-touch operations.',
        metrics: { efficiency: '95%', savings: '$5M+', automation: 'Zero-touch' }
      },
      {
        title: 'AI Workflow Automation Guide: From Manual to Autonomous',
        type: 'Guide',
        readTime: '25 min',
        href: '/blog/ai-workflow-automation-guide',
        description: 'Master workflow automation with intelligent design patterns and smart triggers for maximum efficiency.',
        metrics: { efficiency: '90%', time: '80% faster', accuracy: '99%' }
      }
    ],
    'ai-agents': [
      {
        title: 'AI Agent Orchestration 2026: Multi-Agent System Architecture',
        type: 'Article',
        readTime: '22 min',
        href: '/blog/ai-agent-orchestration-2026',
        description: 'Master multi-agent systems with 95% automation efficiency and $5M+ ROI through advanced orchestration patterns.',
        metrics: { automation: '95%', roi: '$5M+', reliability: '99.9%' }
      },
      {
        title: 'AI Agents in the Enterprise: 2025 Adoption Playbook',
        type: 'Playbook',
        readTime: '10 min',
        href: '/blog/ai-agents-in-the-enterprise-2025',
        description: 'Practical guide to rolling out autonomous AI agents across enterprise workflows with proven ROI.',
        metrics: { adoption: '300%', roi: '250%', efficiency: '85%' }
      }
    ],
    quantum: [
      {
        title: 'AI Quantum Computing 2026: Next-Generation Intelligence',
        type: 'Article',
        readTime: '25 min',
        href: '/blog/ai-quantum-computing-2026',
        description: 'Harness quantum computing for AI breakthroughs with 1000x faster optimization and revolutionary capabilities.',
        metrics: { speed: '1000x', accuracy: '95%', capability: 'Revolutionary' }
      },
      {
        title: 'AI Quantum Optimization 2026: $12M Returns Case Study',
        type: 'Case Study',
        readTime: '12 min',
        href: '/case-studies/ai-quantum-optimization-2026',
        description: 'See how a financial services company achieved 1000x optimization speed and $12M additional returns.',
        metrics: { speed: '1000x', returns: '$12M', efficiency: '95%' }
      }
    ],
    sustainability: [
      {
        title: 'AI Sustainability & Green Tech 2026: Carbon-Neutral Operations',
        type: 'Article',
        readTime: '18 min',
        href: '/blog/ai-sustainability-green-tech-2026',
        description: 'Achieve carbon-neutral AI operations with 80% energy reduction and $2M+ savings through sustainable technology.',
        metrics: { energy: '80% saved', savings: '$2M+', carbon: '100% neutral' }
      },
      {
        title: 'AI Sustainability Transformation 2026: $10M ROI Case Study',
        type: 'Case Study',
        readTime: '15 min',
        href: '/case-studies/ai-sustainability-transformation-2026',
        description: 'See how a Fortune 500 company achieved carbon neutrality and $10M ROI with comprehensive AI sustainability transformation.',
        metrics: { roi: '$10M', carbon: '100% neutral', energy: '80% saved' }
      }
    ],
    roi: [
      {
        title: 'AI Innovation Revolution 2026: Complete Enterprise Transformation Guide',
        type: 'Guide',
        readTime: '25 min',
        href: '/blog/ai-innovation-2026-revolution',
        description: 'Discover revolutionary AI innovations that deliver 300% ROI, autonomous systems, and quantum computing integration.',
        metrics: { roi: '300%', automation: '95%', savings: '$50M+' }
      },
      {
        title: 'AI Innovation Enterprise Success 2026: $50M ROI Case Study',
        type: 'Case Study',
        readTime: '20 min',
        href: '/case-studies/ai-innovation-enterprise-success-2026',
        description: 'See how a Fortune 500 company achieved $50M ROI with comprehensive AI innovation transformation.',
        metrics: { roi: '$50M', uptime: '99.9%', automation: '95%' }
      }
    ],
    enterprise: [
      {
        title: 'AI Platform Architecture 2026: Enterprise-Scale AI Infrastructure Guide',
        type: 'Architecture Guide',
        readTime: '30 min',
        href: '/blog/ai-platform-architecture-2026',
        description: 'Design and implement enterprise-scale AI platforms with microservices, edge computing, and autonomous scaling.',
        metrics: { scale: 'Enterprise', uptime: '99.9%', efficiency: '95%' }
      },
      {
        title: 'AI Autonomous Enterprise 2026: Complete Self-Managing Operations',
        type: 'Guide',
        readTime: '30 min',
        href: '/blog/ai-autonomous-enterprise-2026',
        description: 'Master autonomous AI enterprise operations with zero-touch business management and self-optimizing systems.',
        metrics: { automation: '95%', efficiency: '90%', cost: '90% reduction' }
      }
    ]
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 bg-blue-100 text-blue-600',
      purple: 'from-purple-500 to-purple-600 bg-purple-100 text-purple-600',
      indigo: 'from-indigo-500 to-indigo-600 bg-indigo-100 text-indigo-600',
      green: 'from-green-500 to-green-600 bg-green-100 text-green-600',
      orange: 'from-orange-500 to-orange-600 bg-orange-100 text-orange-600',
      teal: 'from-teal-500 to-teal-600 bg-teal-100 text-teal-600',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const recommendations = selectedInterest ? contentRecommendations[selectedInterest as keyof typeof contentRecommendations] || [] : [];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🎯 PERSONALIZED
            </span>
            <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              RECOMMENDATIONS
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Find Your Perfect AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tell us what interests you most, and we'll recommend the best AI content, 
            case studies, and implementation guides tailored to your needs.
          </p>
        </div>

        {/* Interest Selection */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">What interests you most?</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {interests.map((interest) => {
              const Icon = interest.icon;
              const isSelected = selectedInterest === interest.id;
              const colorClasses = getColorClasses(interest.color);
              
              return (
                <button
                  key={interest.id}
                  onClick={() => setSelectedInterest(interest.id)}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                    isSelected
                      ? `border-${interest.color}-500 bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} text-white shadow-lg`
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <div className="text-center">
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center ${
                      isSelected ? 'bg-white bg-opacity-20' : colorClasses.split(' ')[2]
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        isSelected ? 'text-white' : colorClasses.split(' ')[3]
                      }`} />
                    </div>
                    <span className={`text-sm font-semibold ${
                      isSelected ? 'text-white' : 'text-gray-700'
                    }`}>
                      {interest.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Recommendations */}
        {selectedInterest && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Recommended Content for {interests.find(i => i.id === selectedInterest)?.label}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {recommendations.map((item, index) => (
                <Link key={index} href={item.href} className="group">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-blue-200">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        item.type === 'Case Study' ? 'bg-green-100 text-green-600' :
                        item.type === 'Guide' ? 'bg-blue-100 text-blue-600' :
                        item.type === 'Playbook' ? 'bg-purple-100 text-purple-600' :
                        item.type === 'Architecture Guide' ? 'bg-indigo-100 text-indigo-600' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {item.type}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {item.readTime}
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex gap-6">
                        {Object.entries(item.metrics).map(([key, value], idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-lg font-bold text-blue-600">{value}</div>
                            <div className="text-xs text-gray-500 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                      Read {item.type} →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Browse All Content */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to Explore Everything?
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Browse our complete library of AI content, case studies, and implementation guides. 
              Over 100+ articles and success stories to help you transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
              >
                Browse All Articles
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-indigo-600 hover:text-white transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}