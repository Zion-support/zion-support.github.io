import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  TrendingUp, 
  Clock, 
  Users, 
  Star,
  Sparkles,
  Award,
  Target,
  Zap,
  BarChart3,
  Shield,
  Bot
} from 'lucide-react';

interface ContentShowcaseProps {
  className?: string;
  title?: string;
  subtitle?: string;
  maxItems?: number;
}

const featuredContent = [
  {
    id: 1,
    type: 'tool',
    title: 'AI Workflow Automation ROI Calculator',
    description: 'Interactive tool to calculate potential savings from AI workflow automation',
    category: 'AI & Automation',
    readTime: 'Interactive',
    views: '2.3k',
    rating: 4.9,
    badge: 'Featured Tool',
    link: '/blog/ai-workflow-automation-roi-calculator',
    icon: BarChart3,
    color: 'green'
  },
  {
    id: 2,
    type: 'guide',
    title: 'Micro SAAS Platform Comparison 2025',
    description: 'Comprehensive guide to choosing the right micro SAAS platform for your business',
    category: 'Technology',
    readTime: '12 min read',
    views: '1.8k',
    rating: 4.8,
    badge: 'New Release',
    link: '/blog/micro-saas-platform-comparison-2025',
    icon: Target,
    color: 'blue'
  },
  {
    id: 3,
    type: 'checklist',
    title: 'AI Virtual Assistant Implementation Checklist',
    description: '25 critical steps for successful AI virtual assistant deployment',
    category: 'AI & Automation',
    readTime: '8 min read',
    views: '3.1k',
    rating: 4.9,
    badge: 'Popular',
    link: '/blog/ai-virtual-assistant-implementation-checklist',
    icon: Bot,
    color: 'purple'
  },
  {
    id: 4,
    type: 'case-study',
    title: 'Data Analytics Automation Success Stories',
    description: '10 companies share how they achieved 300% faster insights',
    category: 'Data Analytics',
    readTime: '15 min read',
    views: '2.7k',
    rating: 4.7,
    badge: 'Case Study',
    link: '/blog/data-analytics-automation-success-stories',
    icon: TrendingUp,
    color: 'orange'
  },
  {
    id: 5,
    type: 'insight',
    title: 'AI vs. AI: The New Cybersecurity Battlefield',
    description: 'How AI is being used both defensively and offensively in cybersecurity',
    category: 'Cybersecurity',
    readTime: '5 min read',
    views: '1.5k',
    rating: 4.6,
    badge: 'Insight',
    link: '/insights',
    icon: Shield,
    color: 'red'
  },
  {
    id: 6,
    type: 'framework',
    title: 'Digital Transformation with AI: A 90-Day Roadmap',
    description: 'Practical roadmap for digital transformation using AI technologies',
    category: 'Digital Transformation',
    readTime: '14 min read',
    views: '2.1k',
    rating: 4.8,
    badge: 'Framework',
    link: '/blog/digital-transformation-ai-roadmap',
    icon: Zap,
    color: 'cyan'
  }
];

export const ContentShowcase: React.FC<ContentShowcaseProps> = ({
  className = "",
  title = "Featured Content & Resources",
  subtitle = "Discover our latest tools, guides, and insights to accelerate your AI journey",
  maxItems = 6
}) => {
  const displayedContent = featuredContent.slice(0, maxItems);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'tool': return '🛠️';
      case 'guide': return '📚';
      case 'checklist': return '✅';
      case 'case-study': return '📊';
      case 'insight': return '💡';
      case 'framework': return '🏗️';
      default: return '📄';
    }
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: 'from-green-500 to-emerald-600',
      blue: 'from-blue-500 to-cyan-600',
      purple: 'from-purple-500 to-pink-600',
      orange: 'from-orange-500 to-red-600',
      red: 'from-red-500 to-pink-600',
      cyan: 'from-cyan-500 to-blue-600'
    };
    return colorMap[color as keyof typeof colorMap] || 'from-gray-500 to-gray-600';
  };

  return (
    <section className={`py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 ${className}`}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-sm font-medium mb-6 border border-blue-500/30">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Latest Content & Resources
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedContent.map((item) => {
            const IconComponent = item.icon;
            const colorGradient = getColorClasses(item.color);
            
            return (
              <article
                key={item.id}
                className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${colorGradient} flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">{getTypeIcon(item.type)}</span>
                        <span className="text-xs uppercase tracking-wider text-gray-400 font-medium">
                          {item.type.replace('-', ' ')}
                        </span>
                      </div>
                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${colorGradient} text-white`}>
                        {item.badge}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {item.views}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {item.readTime}
                    </div>
                  </div>
                  <span className="text-xs bg-gray-700/50 px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>

                {/* CTA */}
                <Link
                  to={item.link}
                  className={`w-full bg-gradient-to-r ${colorGradient} text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group/btn`}
                >
                  {item.type === 'tool' ? 'Try Tool' : 'Read More'}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </article>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-8 h-8 text-yellow-400" />
              <h3 className="text-2xl font-bold text-white">Get Access to All Resources</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who trust our content to stay ahead in AI and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/blog"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Explore All Content
              </Link>
              <Link
                to="/insights"
                className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <TrendingUp className="w-5 h-5" />
                View Latest Insights
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentShowcase;