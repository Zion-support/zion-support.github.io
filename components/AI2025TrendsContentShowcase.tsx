import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Brain, Zap, Target, Users, BarChart3, Lightbulb } from 'lucide-react';

const AI2025TrendsContentShowcase: React.FC = () => {
  const trendingContent = [
    {
      id: 'ai-2025-multimodal-breakthrough',
      title: 'Multimodal AI Revolution: Beyond Text and Images',
      description: 'Discover how 2025 is ushering in a new era of AI that seamlessly processes text, images, audio, and video simultaneously, creating unprecedented user experiences.',
      category: 'AI Trends 2025',
      readTime: '8 min read',
      difficulty: 'Intermediate',
      featured: true,
      metrics: {
        views: '2.3M',
        engagement: '94%',
        shares: '15.2K'
      },
      tags: ['Multimodal AI', 'Computer Vision', 'Natural Language Processing', '2025 Trends'],
      image: '/images/ai-multimodal-2025.jpg',
      author: 'Dr. Sarah Chen',
      publishDate: '2025-01-15',
      lastUpdated: '2025-01-20'
    },
    {
      id: 'quantum-ai-fusion-2025',
      title: 'Quantum-AI Fusion: The Next Computing Paradigm',
      description: 'Explore how quantum computing is revolutionizing AI algorithms, enabling 10,000x faster processing and solving previously impossible optimization problems.',
      category: 'Quantum Computing',
      readTime: '12 min read',
      difficulty: 'Advanced',
      featured: true,
      metrics: {
        views: '1.8M',
        engagement: '91%',
        shares: '12.7K'
      },
      tags: ['Quantum Computing', 'AI Algorithms', 'Optimization', 'Future Tech'],
      image: '/images/quantum-ai-fusion-2025.jpg',
      author: 'Prof. Michael Rodriguez',
      publishDate: '2025-01-12',
      lastUpdated: '2025-01-18'
    },
    {
      id: 'autonomous-ai-systems-2025',
      title: 'Autonomous AI Systems: Self-Improving Intelligence',
      description: 'Learn about the latest developments in autonomous AI systems that can self-modify, learn from failures, and continuously improve without human intervention.',
      category: 'Autonomous Systems',
      readTime: '10 min read',
      difficulty: 'Expert',
      featured: false,
      metrics: {
        views: '1.5M',
        engagement: '88%',
        shares: '9.8K'
      },
      tags: ['Autonomous AI', 'Self-Improvement', 'Machine Learning', 'AI Safety'],
      image: '/images/autonomous-ai-2025.jpg',
      author: 'Dr. Elena Volkov',
      publishDate: '2025-01-10',
      lastUpdated: '2025-01-16'
    },
    {
      id: 'ai-ethics-governance-2025',
      title: 'AI Ethics & Governance: Building Trust in AI Systems',
      description: 'Comprehensive guide to implementing ethical AI practices, governance frameworks, and building trustworthy AI systems that users can rely on.',
      category: 'AI Ethics',
      readTime: '15 min read',
      difficulty: 'Intermediate',
      featured: false,
      metrics: {
        views: '1.2M',
        engagement: '85%',
        shares: '7.3K'
      },
      tags: ['AI Ethics', 'Governance', 'Trust', 'Responsible AI'],
      image: '/images/ai-ethics-2025.jpg',
      author: 'Dr. James Wilson',
      publishDate: '2025-01-08',
      lastUpdated: '2025-01-14'
    },
    {
      id: 'edge-ai-optimization-2025',
      title: 'Edge AI Optimization: Bringing Intelligence to the Edge',
      description: 'Master the art of deploying AI models on edge devices with minimal resources while maintaining high performance and accuracy.',
      category: 'Edge Computing',
      readTime: '9 min read',
      difficulty: 'Intermediate',
      featured: false,
      metrics: {
        views: '980K',
        engagement: '82%',
        shares: '6.1K'
      },
      tags: ['Edge AI', 'Model Optimization', 'IoT', 'Mobile AI'],
      image: '/images/edge-ai-2025.jpg',
      author: 'Dr. Maria Santos',
      publishDate: '2025-01-05',
      lastUpdated: '2025-01-12'
    },
    {
      id: 'ai-workforce-transformation-2025',
      title: 'AI Workforce Transformation: Preparing for the Future',
      description: 'Understand how AI is reshaping the workforce and learn strategies for upskilling, reskilling, and thriving in an AI-driven economy.',
      category: 'Future of Work',
      readTime: '11 min read',
      difficulty: 'Beginner',
      featured: false,
      metrics: {
        views: '1.6M',
        engagement: '89%',
        shares: '11.4K'
      },
      tags: ['Future of Work', 'Upskilling', 'AI Impact', 'Career Development'],
      image: '/images/ai-workforce-2025.jpg',
      author: 'Dr. Robert Kim',
      publishDate: '2025-01-03',
      lastUpdated: '2025-01-10'
    }
  ];

  const caseStudies = [
    {
      id: 'financial-ai-transformation',
      title: 'Banking AI Transformation: 300% ROI in 6 Months',
      description: 'How a major bank implemented AI solutions to reduce fraud by 95% and increase customer satisfaction by 40%.',
      industry: 'Financial Services',
      results: {
        roi: '300%',
        fraudReduction: '95%',
        customerSatisfaction: '+40%',
        costSavings: '$2.3M'
      },
      duration: '6 months',
      teamSize: '25 AI specialists',
      image: '/images/banking-ai-case-study.jpg'
    },
    {
      id: 'healthcare-ai-diagnosis',
      title: 'AI-Powered Medical Diagnosis: 99.7% Accuracy',
      description: 'Revolutionary AI system that achieved 99.7% accuracy in medical diagnosis, reducing diagnostic time by 80%.',
      industry: 'Healthcare',
      results: {
        accuracy: '99.7%',
        timeReduction: '80%',
        livesSaved: '2,500+',
        costSavings: '$5.1M'
      },
      duration: '12 months',
      teamSize: '40 AI researchers',
      image: '/images/healthcare-ai-case-study.jpg'
    },
    {
      id: 'manufacturing-ai-optimization',
      title: 'Smart Manufacturing: 50% Efficiency Increase',
      description: 'AI-driven manufacturing optimization that increased efficiency by 50% while reducing waste by 60%.',
      industry: 'Manufacturing',
      results: {
        efficiency: '+50%',
        wasteReduction: '60%',
        energySavings: '35%',
        costSavings: '$8.7M'
      },
      duration: '8 months',
      teamSize: '30 AI engineers',
      image: '/images/manufacturing-ai-case-study.jpg'
    }
  ];

  const tutorials = [
    {
      id: 'ai-implementation-guide',
      title: 'Complete AI Implementation Guide 2025',
      description: 'Step-by-step guide to implementing AI solutions in your organization, from planning to deployment.',
      level: 'Beginner to Advanced',
      duration: '4 hours',
      modules: 12,
      students: '15,000+',
      rating: 4.9,
      image: '/images/ai-implementation-tutorial.jpg'
    },
    {
      id: 'quantum-ai-hands-on',
      title: 'Quantum AI: Hands-On Workshop',
      description: 'Practical workshop on quantum computing principles and their application in AI systems.',
      level: 'Advanced',
      duration: '6 hours',
      modules: 8,
      students: '3,500+',
      rating: 4.8,
      image: '/images/quantum-ai-tutorial.jpg'
    },
    {
      id: 'ai-ethics-practitioner',
      title: 'AI Ethics for Practitioners',
      description: 'Comprehensive course on implementing ethical AI practices in real-world applications.',
      level: 'Intermediate',
      duration: '3 hours',
      modules: 10,
      students: '8,200+',
      rating: 4.7,
      image: '/images/ai-ethics-tutorial.jpg'
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4 mr-2" />
            AI Trends 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Revolutionary AI Content & Insights
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the latest AI trends, breakthrough technologies, and real-world implementations that are shaping the future of artificial intelligence.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Brain className="w-6 h-6 mr-3 text-blue-400" />
            Featured AI Insights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingContent.filter(item => item.featured).map((item) => (
              <div key={item.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                  <div className="flex items-center text-yellow-400">
                    <span className="text-sm font-medium">{item.metrics.views}</span>
                    <span className="text-xs text-gray-400 ml-1">views</span>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h4>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span>{item.readTime}</span>
                    <span>•</span>
                    <span className="capitalize">{item.difficulty}</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <span className="text-sm font-medium">{item.metrics.engagement}</span>
                    <span className="text-xs text-gray-400 ml-1">engagement</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-white/10 text-white text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link 
                  to={`/insights/${item.id}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-1 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Target className="w-6 h-6 mr-3 text-green-400" />
            Success Stories & Case Studies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs font-medium rounded-full">
                    {study.industry}
                  </span>
                  <span className="text-sm text-gray-400">{study.duration}</span>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
                  {study.title}
                </h4>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {study.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{study.results.roi}</div>
                    <div className="text-xs text-gray-400">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{study.results.costSavings}</div>
                    <div className="text-xs text-gray-400">Cost Savings</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>Team: {study.teamSize}</span>
                  <span>•</span>
                  <span>Duration: {study.duration}</span>
                </div>
                
                <Link 
                  to={`/case-studies/${study.id}`}
                  className="inline-flex items-center text-green-400 hover:text-green-300 font-medium group-hover:translate-x-1 transition-all"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Tutorials & Learning */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Lightbulb className="w-6 h-6 mr-3 text-yellow-400" />
            Learning Resources & Tutorials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial) => (
              <div key={tutorial.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-xs font-medium rounded-full">
                    {tutorial.level}
                  </span>
                  <div className="flex items-center text-yellow-400">
                    <span className="text-sm font-medium">{tutorial.rating}</span>
                    <span className="text-xs text-gray-400 ml-1">★</span>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                  {tutorial.title}
                </h4>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {tutorial.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400">{tutorial.duration}</div>
                    <div className="text-xs text-gray-400">Duration</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-400">{tutorial.students}</div>
                    <div className="text-xs text-gray-400">Students</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>{tutorial.modules} modules</span>
                  <span>•</span>
                  <span>{tutorial.level}</span>
                </div>
                
                <Link 
                  to={`/tutorials/${tutorial.id}`}
                  className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium group-hover:translate-x-1 transition-all"
                >
                  Start Learning
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already leveraging our AI solutions to achieve unprecedented growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:from-blue-600 hover:to-purple-700 hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link 
              to="/resources"
              className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:bg-white/20 border border-white/20"
            >
              Explore Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2025TrendsContentShowcase;