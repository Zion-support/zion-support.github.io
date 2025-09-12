import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Download, BookOpen, Zap } from 'lucide-react';

<<<<<<< HEAD
const NewContentPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🚀 New AI Content Just Released!
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover our latest AI insights, success stories, and implementation guides. 
            Join 10,000+ professionals transforming their businesses with AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-4">🏢</div>
            <h3 className="text-lg font-semibold mb-2">Enterprise Success Stories</h3>
            <p className="text-blue-100 text-sm mb-4">
              Real Fortune 500 transformations with 300% productivity gains and $50M+ savings
            </p>
            <Link 
              href="/blog/ai-2025-enterprise-automation-success"
              className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-semibold text-sm"
            >
              Read Now <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-4">🧠</div>
            <h3 className="text-lg font-semibold mb-2">Revolutionary Breakthroughs</h3>
            <p className="text-blue-100 text-sm mb-4">
              Explore quantum AI, autonomous systems, and technologies reshaping our world
            </p>
            <Link 
              href="/blog/ai-2025-revolutionary-breakthroughs"
              className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-semibold text-sm"
            >
              Explore <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-4">🛍️</div>
            <h3 className="text-lg font-semibold mb-2">Retail Transformation</h3>
            <p className="text-blue-100 text-sm mb-4">
              $200M revenue boost case study with 150% customer satisfaction improvement
            </p>
            <Link 
              href="/case-studies/ai-retail-transformation-success-2025"
              className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-semibold text-sm"
            >
              Learn More <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-4">📚</div>
            <h3 className="text-lg font-semibold mb-2">Master Guide 2025</h3>
            <p className="text-blue-100 text-sm mb-4">
              200-page implementation playbook with frameworks, templates, and strategies
            </p>
            <Link 
              href="/resources/ai-implementation-master-guide-2025"
              className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-semibold text-sm"
            >
              Download Free <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/blog"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              View All Content
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 font-semibold text-lg transition-all duration-300"
            >
              <Zap className="w-5 h-5 mr-2" />
              Get Expert Consultation
            </Link>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-blue-100">
            <div className="flex items-center">
              <Star className="w-5 h-5 mr-2 text-yellow-300" />
              <span className="text-sm">10,000+ Downloads</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-green-300" />
              <span className="text-sm">300% Success Rate</span>
            </div>
            <div className="flex items-center">
              <Download className="w-5 h-5 mr-2 text-blue-300" />
              <span className="text-sm">Free Resources</span>
            </div>
import { ArrowRight, Star, TrendingUp, Zap, CheckCircle } from 'lucide-react';

interface ContentPromotionBannerProps {
  className?: string;
}

const NewContentPromotionBanner: React.FC<ContentPromotionBannerProps> = ({ className = '' }) => {
  return (
    <div className={`bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Star className="w-6 h-6 text-yellow-400 mr-2" />
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wide">New Content</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionary AI Content: Transform Your Business in 2025
          </h2>
          <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
            Discover the latest AI breakthroughs, success stories, and implementation guides that are helping Fortune 500 companies achieve unprecedented results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-xl font-semibold">90% Efficiency Gains</h3>
            </div>
            <p className="text-blue-100 mb-4">
              Learn how Fortune 500 companies achieved 90% efficiency gains through strategic AI automation implementation.
            </p>
            <Link 
              href="/blog/ai-2025-enterprise-automation-success"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold"
            >
              Read Case Study <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-xl font-semibold">15 Breakthrough Technologies</h3>
            </div>
            <p className="text-blue-100 mb-4">
              Explore the 15 most revolutionary AI breakthroughs of 2025 that are reshaping industries and creating new possibilities.
            </p>
            <Link 
              href="/blog/ai-2025-revolutionary-breakthroughs"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold"
            >
              Discover Breakthroughs <ArrowRight className="w-4 h-4 ml-2" />
import { ArrowRight, Star, TrendingUp, Clock, Users, Zap } from 'lucide-react';

interface ContentItem {
  title: string;
  description: string;
  href: string;
  category: string;
  readTime: string;
  isNew?: boolean;
  isTrending?: boolean;
  icon: string;
  stats?: string;
  featured?: boolean;
}

const newContentItems: ContentItem[] = [
  {
    title: "AI Enterprise Readiness 2025: Complete Implementation Guide",
    description: "Master AI enterprise readiness with our comprehensive 2025 guide. Learn proven strategies, frameworks, and best practices for successful AI transformation at scale.",
    href: "/blog/ai-2025-enterprise-readiness-comprehensive-guide",
    category: "Enterprise AI",
    readTime: "25 min read",
    isNew: true,
    icon: "🏢",
    stats: "500+ enterprises using this",
    featured: true
  },
  {
    title: "AI Multimodal Revolution 2025: Comprehensive Market Analysis",
    description: "Explore the AI multimodal revolution transforming industries in 2025. Discover breakthrough technologies, market opportunities, and implementation strategies for multimodal AI systems.",
    href: "/blog/ai-2025-multimodal-revolution-comprehensive-analysis",
    category: "AI Revolution",
    readTime: "18 min read",
    isNew: true,
    icon: "🧠",
    stats: "$180B market value",
    featured: true
  },
  {
    title: "AI Transformation: Global Retail Giant Achieves $2.3B Revenue Growth",
    description: "Discover how a Fortune 500 retail giant achieved $2.3B revenue growth and 45% operational efficiency through comprehensive AI transformation. Real results, proven strategies.",
    href: "/case-studies/ai-transformation-retail-giant-success-2025",
    category: "Case Study",
    readTime: "15 min read",
    isNew: true,
    icon: "🏪",
    stats: "$2.3B revenue growth",
    featured: true
  }
];

const NewContentPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            New Content Available
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Discover Our Latest AI Insights & Success Stories
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Stay ahead of the curve with our newest content covering enterprise AI readiness, multimodal AI revolution, and real-world transformation success stories.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newContentItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="flex gap-2">
                  {item.isNew && (
                    <span className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                  {item.isTrending && (
                    <span className="bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                      TRENDING
                    </span>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                {item.description}
              </p>

              <div className="flex items-center justify-between text-sm text-blue-200">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {item.readTime}
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  {item.stats}
                </div>
              </div>

              <div className="mt-4 flex items-center text-blue-200 group-hover:text-white transition-colors">
                <span className="text-sm font-medium">Read More</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-200 text-sm">Enterprises Using Our Guides</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">$2.3B</div>
              <div className="text-blue-200 text-sm">Revenue Growth Achieved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">$180B</div>
              <div className="text-blue-200 text-sm">Market Value Analyzed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-blue-200 text-sm">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center"
            >
              <Users className="w-5 h-5 mr-2" />
              Explore All Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
            >
              <Zap className="w-5 h-5 mr-2" />
              View Success Stories
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <CheckCircle className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-xl font-semibold">$2.5B Revenue Increase</h3>
            </div>
            <p className="text-blue-100 mb-4">
              See how a global retail giant achieved $2.5B revenue increase through comprehensive AI transformation.
            </p>
            <Link 
              href="/case-studies/ai-2025-retail-transformation-success"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold"
            >
              View Success Story <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-blue-100 mb-6">
              Join thousands of companies already leveraging these AI breakthroughs to achieve unprecedented results. Get started with our expert guidance and proven frameworks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
              >
                Start Your AI Journey
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link 
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
              >
                View All Case Studies
              </Link>
            </div>
=======
export default function NewContentPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-red-600/20"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-700"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4 backdrop-blur-sm">
            <span className="text-sm font-medium">🚀 JUST RELEASED</span>
          </div>
          
          {/* Main heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🎉 Massive Content Update: 3+ New Expert Resources Just Dropped!
          </h2>
          
          {/* Description */}
          <p className="text-lg opacity-90 mb-6 max-w-4xl mx-auto leading-relaxed">
            Discover our latest breakthrough content: <strong>AI Enterprise Integration Masterclass</strong>, 
            <strong> AI Trends 2025 Predictions</strong>, and <strong>Healthcare AI Success Story</strong>. 
            Get expert insights on the technologies and strategies transforming businesses in 2025.
          </p>
          
          {/* Content highlights */}
          <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-5xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg border border-white border-opacity-20">
              <div className="text-2xl mb-2">🎓</div>
              <h3 className="font-semibold mb-1">Enterprise Masterclass</h3>
              <p className="text-sm opacity-90">Complete AI integration guide</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg border border-white border-opacity-20">
              <div className="text-2xl mb-2">🔮</div>
              <h3 className="font-semibold mb-1">Trend Predictions</h3>
              <p className="text-sm opacity-90">2025 AI trends analysis</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg border border-white border-opacity-20">
              <div className="text-2xl mb-2">🏥</div>
              <h3 className="font-semibold mb-1">Healthcare Success</h3>
              <p className="text-sm opacity-90">$2.3M savings case study</p>
            </div>
          </div>
          
          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/content-showcase"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore All New Content
            </Link>
            <Link
              href="/blog/ai-2025-enterprise-integration-masterclass"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Start with Masterclass
            </Link>
          </div>
          
          {/* Additional info */}
          <div className="mt-6 text-sm opacity-75">
            <p>📚 25+ min comprehensive guides • 🏆 Real-world case studies • 🎯 Actionable insights</p>
>>>>>>> cursor/create-and-deploy-new-content-46f8
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner;