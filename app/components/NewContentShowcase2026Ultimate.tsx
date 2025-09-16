import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Users, Zap, Brain } from 'lucide-react';

export default function NewContentShowcase2026Ultimate() {
  const featuredContent = [
    {
      title: "Synthetic Intelligence Revolution",
      description: "The ultimate guide to the next evolution beyond AI - self-evolving systems that transform business operations.",
      href: "/blog/ai-2026-synthetic-intelligence-revolution-ultimate-guide",
      category: "AI Technology",
      icon: Brain,
      color: "purple",
      featured: true
    },
    {
      title: "Neural Interface Business Transformation",
      description: "Discover how direct brain-computer interfaces are revolutionizing business operations and human potential.",
      href: "/blog/ai-2026-neural-interface-revolution-business-transformation",
      category: "Innovation",
      icon: Zap,
      color: "emerald",
      featured: true
    },
    {
      title: "Fortune 500: 800% ROI Success Story",
      description: "Real-world case study showing how synthetic intelligence transformed a Fortune 500 company with unprecedented results.",
      href: "/case-studies/synthetic-intelligence-fortune-500-transformation-800-roi-success",
      category: "Case Study",
      icon: TrendingUp,
      color: "blue",
      featured: true
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: "from-purple-600 to-purple-800 border-purple-200 text-purple-700",
      emerald: "from-emerald-600 to-emerald-800 border-emerald-200 text-emerald-700",
      blue: "from-blue-600 to-blue-800 border-blue-200 text-blue-700"
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  const getIconColor = (color: string) => {
    const colors = {
      purple: "text-purple-600",
      emerald: "text-emerald-600", 
      blue: "text-blue-600"
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">NEW CONTENT 2026</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Content Just Published
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our latest groundbreaking content covering the most advanced AI technologies 
            and business transformations that will define 2026 and beyond.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {featuredContent.map((content, index) => {
            const IconComponent = content.icon;
            return (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl border-2 border-gray-100 overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                  content.featured ? 'ring-2 ring-purple-200' : ''
                }`}
              >
                {/* Featured Badge */}
                {content.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    FEATURED
                  </div>
                )}
                
                <div className="p-8">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${getColorClasses(content.color)} mb-6`}>
                    <IconComponent className={`w-8 h-8 ${getIconColor(content.color)}`} />
                  </div>
                  
                  {/* Category */}
                  <div className={`text-sm font-semibold ${getIconColor(content.color)} mb-3`}>
                    {content.category}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    {content.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {content.description}
                  </p>
                  
                  {/* CTA */}
                  <Link
                    href={content.href}
                    className={`inline-flex items-center bg-gradient-to-r ${getColorClasses(content.color)} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Content Preview */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              More Revolutionary Content Coming Soon
            </h3>
            <p className="text-gray-600">
              Stay ahead of the curve with our upcoming content covering the latest in AI technology and business transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Quantum AI</h4>
              <p className="text-sm text-gray-600">Quantum computing meets AI</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Autonomous Systems</h4>
              <p className="text-sm text-gray-600">Self-managing business operations</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Human-AI Fusion</h4>
              <p className="text-sm text-gray-600">Seamless human-AI collaboration</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Business Transformation</h4>
              <p className="text-sm text-gray-600">Complete organizational change</p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Get Early Access to Revolutionary Content
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Be the first to access our latest AI research, case studies, and implementation guides. 
              Join thousands of forward-thinking leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}