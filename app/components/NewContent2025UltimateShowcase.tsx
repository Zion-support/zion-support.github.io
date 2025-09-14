import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Clock, Users, TrendingUp, Zap, Brain, Shield } from 'lucide-react';

const NewContent2025UltimateShowcase = () => {
  const featuredContent = [
    {
      title: "AI 2025: Generative AI Revolution",
      description: "Discover how Generative AI is revolutionizing enterprise operations with 340% productivity gains and $2.3T in global productivity.",
      category: "AI Innovation",
      readTime: "12 min read",
      featured: true,
      href: "/blog/ai-2025-generative-ai-revolution-enterprise-transformation",
      icon: Zap,
      color: "from-purple-600 to-pink-600",
      stats: "340% Productivity Gain"
    },
    {
      title: "Quantum Computing Breakthrough 2025",
      description: "Explore the groundbreaking fusion of quantum computing and AI, unlocking 10,000x faster processing and revolutionary business applications.",
      category: "Quantum AI",
      readTime: "15 min read",
      featured: true,
      href: "/blog/ai-2025-quantum-computing-breakthrough-business-applications",
      icon: Brain,
      color: "from-blue-600 to-cyan-600",
      stats: "10,000x Faster Processing"
    },
    {
      title: "Manufacturing Quantum Success",
      description: "Fortune 500 company achieves $150M annual savings through quantum-powered AI optimization, revolutionizing production processes.",
      category: "Case Study",
      readTime: "8 min read",
      featured: true,
      href: "/case-studies/ai-2025-manufacturing-transformation-quantum-optimization-success",
      icon: TrendingUp,
      color: "from-green-600 to-emerald-600",
      stats: "$150M Annual Savings"
    },
    {
      title: "Quantum Implementation Guide",
      description: "Complete enterprise guide to implementing quantum computing and AI, with roadmap, best practices, and real-world strategies.",
      category: "Implementation Guide",
      readTime: "25 min read",
      featured: true,
      href: "/resources/ai-2025-quantum-implementation-complete-guide",
      icon: Shield,
      color: "from-orange-600 to-red-600",
      stats: "Complete Roadmap"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">🌟 NEW CONTENT 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              That Transforms Businesses
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover cutting-edge insights, proven strategies, and real-world success stories 
            that are reshaping industries and driving unprecedented growth in 2025.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {featuredContent.map((content, index) => {
            const IconComponent = content.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Featured Badge */}
                {content.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </div>
                  </div>
                )}

                {/* Content Card */}
                <div className="p-8">
                  {/* Category and Icon */}
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${content.color} mr-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-purple-600 uppercase tracking-wide">
                        {content.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Clock className="w-4 h-4 mr-1" />
                        {content.readTime}
                      </div>
                    </div>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    {content.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {content.description}
                  </p>

                  {/* Stats */}
                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">Key Impact:</span>
                      <span className="text-lg font-bold text-purple-600">{content.stats}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={content.href}
                    className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    {content.category === 'Case Study' ? 'View Success Story' : 
                     content.category === 'Implementation Guide' ? 'Download Guide' : 'Read Article'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Additional Content Preview */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            More Revolutionary Content Coming Soon
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">AI Workforce Transformation</h4>
              <p className="text-sm text-gray-600">How AI is reshaping the future of work</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Quantum Security Revolution</h4>
              <p className="text-sm text-gray-600">Next-generation cybersecurity solutions</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">AI ROI Optimization</h4>
              <p className="text-sm text-gray-600">Maximizing returns on AI investments</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using our AI and quantum computing solutions 
            to achieve extraordinary results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Explore All Resources
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center space-x-8 text-sm opacity-80">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              <span>500+ Success Stories</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-4 h-4 mr-2" />
              <span>1,000%+ Average ROI</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-2" />
              <span>5-Star Rated Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateShowcase;