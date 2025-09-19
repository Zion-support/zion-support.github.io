import React, { useMemo, useState } from 'react';
import { 
  BookOpen, 
  FileText, 
  Play, 
  Users, 
  Calendar, 
  ArrowRight,
  Clock,
  Eye,
  Heart,
  Share2,
  Tag,
  TrendingUp,
  Lightbulb,
  Code,
  Shield,
  Cloud,
  Brain,
  Zap,
  CheckCircle,
  Star,
  Award,
  Target
} from 'lucide-react';

const ContentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('blog');

  const tabs = [
    { id: 'blog', name: 'Latest Blog Posts', icon: BookOpen },
    { id: 'case-studies', name: 'Case Studies', icon: FileText },
    { id: 'webinars', name: 'Webinars', icon: Play },
    { id: 'whitepapers', name: 'White Papers', icon: FileText }
  ];

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { blogPosts } = require('../data/blog-posts.js');
  const latestFour = useMemo(() => {
    try {
      return [...blogPosts]
        .sort((a, b) => (b.publishDate || '').localeCompare(a.publishDate || ''))
        .slice(0, 4);
    } catch {
      return blogPosts.slice(0, 4);
    }
  }, [blogPosts]);

  const caseStudies = [
    {
      id: 1,
      title: "Fortune 500 Company Reduces IT Costs by 60% with AI Automation",
      client: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Manual IT operations causing delays and high costs",
      solution: "Implemented AI autonomous business manager with predictive maintenance",
      results: ["60% reduction in IT costs", "85% faster incident resolution", "99.9% uptime achieved"],
      duration: "6 months",
      savings: "$2.4M annually",
      featured: true
    },
    {
      id: 2,
      title: "Healthcare Provider Enhances Patient Care with Predictive Analytics",
      client: "Metropolitan Health System",
      industry: "Healthcare",
      challenge: "Need for early disease detection and treatment optimization",
      solution: "Deployed AI healthcare analytics platform with predictive modeling",
      results: ["40% improvement in early detection", "25% reduction in readmissions", "30% cost savings"],
      duration: "4 months",
      savings: "$1.8M annually",
      featured: true
    },
    {
      id: 3,
      title: "Financial Services Firm Achieves Zero-Trust Security with Quantum Encryption",
      client: "Premier Investment Bank",
      industry: "Financial Services",
      challenge: "Protecting sensitive financial data from advanced cyber threats",
      solution: "Implemented quantum encryption suite with real-time threat detection",
      results: ["100% security compliance", "Zero data breaches", "50% faster threat response"],
      duration: "3 months",
      savings: "$3.2M in prevented losses"
    }
  ];

  const webinars = [
    {
      id: 1,
      title: "AI-Powered Business Transformation: A Practical Guide",
      presenter: "Dr. Sarah Chen & Michael Rodriguez",
      date: "2025-01-25",
      time: "2:00 PM EST",
      duration: "45 minutes",
      attendees: "2,847 registered",
      topics: ["AI Implementation", "ROI Measurement", "Change Management"],
      featured: true
    },
    {
      id: 2,
      title: "Quantum Security: Preparing for the Future",
      presenter: "Alex Thompson",
      date: "2025-01-30",
      time: "3:00 PM EST",
      duration: "30 minutes",
      attendees: "1,523 registered",
      topics: ["Quantum Computing", "Security Strategy", "Risk Assessment"]
    },
    {
      id: 3,
      title: "Building Scalable Cloud Architectures",
      presenter: "Jennifer Liu",
      date: "2025-02-05",
      time: "1:00 PM EST",
      duration: "40 minutes",
      attendees: "3,156 registered",
      topics: ["Cloud Design", "Cost Optimization", "Performance Tuning"]
    }
  ];

  const whitepapers = [
    {
      id: 1,
      title: "The State of AI in Enterprise: 2025 Industry Report",
      description: "Comprehensive analysis of AI adoption trends, challenges, and opportunities across industries.",
      pages: 45,
      downloads: "15.2k",
      topics: ["AI Trends", "Market Analysis", "Implementation Guide"],
      featured: true
    },
    {
      id: 2,
      title: "Quantum Computing: Security Implications for Business",
      description: "In-depth exploration of quantum computing's impact on cybersecurity and business strategies.",
      pages: 32,
      downloads: "8.7k",
      topics: ["Quantum Security", "Risk Assessment", "Future Planning"]
    },
    {
      id: 3,
      title: "Multi-Cloud Strategy: Best Practices and Implementation",
      description: "Complete guide to designing and implementing effective multi-cloud architectures.",
      pages: 38,
      downloads: "12.1k",
      topics: ["Cloud Architecture", "Best Practices", "Cost Management"]
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'blog':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <divarticle
                key={post.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {post.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </span>
                  </div>
                )}
                {post.new && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      New
                    </span>
                  </div>
                )}
                
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-blue-500" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      post.category === 'AI & Machine Learning' ? 'bg-purple-100 text-purple-800' :
                      post.category === 'Cybersecurity' ? 'bg-red-100 text-red-800' :
                      post.category === 'Cloud Solutions' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="flex items-center text-xs text-gray-500">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {post.views}
                      </span>
                      <span className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {post.likes}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{post.author}</p>
                        <p className="text-xs text-gray-500">{post.authorRole}</p>
                      </div>
                    </div>
                    
                    <divbutton
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </divbutton>
                  </div>
                </div>
              </divarticle>
            ))}
          </div>
        );
      
      case 'case-studies':
        return (
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <divdiv
                key={study.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8"
              >
                {study.featured && (
                  <div className="flex items-center mb-4">
                    <Award className="w-5 h-5 text-yellow-500 mr-2" />
                    <span className="text-sm font-semibold text-yellow-600">Featured Case Study</span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Client: {study.client}</h4>
                    <p className="text-gray-600 mb-4">{study.industry}</p>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-red-800 mb-2">Challenge:</h5>
                      <p className="text-red-700">{study.challenge}</p>
                    </div>
                  </div>
                  
                  <div>
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <h5 className="font-semibold text-blue-800 mb-2">Solution:</h5>
                      <p className="text-blue-700">{study.solution}</p>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-green-800 mb-2">Results:</h5>
                      <ul className="space-y-1">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-green-700">
                            <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center space-x-6">
                    <div>
                      <span className="text-sm text-gray-500">Duration:</span>
                      <p className="font-semibold">{study.duration}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Annual Savings:</span>
                      <p className="font-semibold text-green-600">{study.savings}</p>
                    </div>
                  </div>
                  
                  <divbutton
                    className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold"
                  >
                    <span>View Full Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </divbutton>
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'webinars':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => (
              <divdiv
                key={webinar.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {webinar.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                )}
                
                <div className="h-32 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <Play className="w-12 h-12 text-blue-500" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{webinar.title}</h3>
                  
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {webinar.date} at {webinar.time}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {webinar.duration}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      {webinar.attendees}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Topics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {webinar.topics.map((topic, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <divbutton
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg font-semibold flex items-center justify-center space-x-2"
                  >
                    <span>Register Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </divbutton>
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'whitepapers':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitepapers.map((paper, index) => (
              <divdiv
                key={paper.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {paper.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                )}
                
                <div className="h-32 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                  <FileText className="w-12 h-12 text-indigo-500" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{paper.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{paper.description}</p>
                  
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center justify-between text-gray-600">
                      <span>Pages:</span>
                      <span className="font-semibold">{paper.pages}</span>
                    </div>
                    <div className="flex items-center justify-between text-gray-600">
                      <span>Downloads:</span>
                      <span className="font-semibold">{paper.downloads}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Topics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {paper.topics.map((topic, idx) => (
                        <span key={idx} className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <divbutton
                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-lg font-semibold flex items-center justify-center space-x-2"
                  >
                    <span>Download PDF</span>
                    <ArrowRight className="w-4 h-4" />
                  </divbutton>
                </div>
              </div>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <divdiv
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full">
              <Lightbulb className="w-5 h-5" />
              <span className="font-semibold">Expert Insights & Resources</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Knowledge Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay ahead with our latest insights, case studies, and expert resources. 
            Discover how cutting-edge technology is transforming businesses worldwide.
          </p>
        </div>

        {/* Tab Navigation */}
        <divdiv
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <divbutton
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300
                  ${isActive 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
                  }
                `}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.name}</span>
              </divbutton>
            );
          })}
        </div>

        {/* Content */}
          <div
            key={activeTab}
          >
            {renderContent()}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get exclusive access to our latest research, case studies, and technology insights delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ContentShowcase };
export default ContentShowcase;
