import React from 'react';
import Link from 'next/link';
import { BookOpen, FileText, BarChart3, ArrowRight, Star, Clock, Users } from 'lucide-react';

const NewContentShowcaseBanner2025: React.FC = () => {
  const newContent = [
    {
      type: 'Blog Post',
      title: 'AI 2025: The Edge Computing Revolution',
      description: 'Discover how edge AI computing is transforming business operations with real-time intelligence.',
      icon: BookOpen,
      link: '/blog/ai-2025-edge-computing-revolution',
      featured: true,
      readTime: '12 min read'
    },
    {
      type: 'Case Study',
      title: 'Global Retail $2.5B Revenue Increase',
      description: 'How a Fortune 100 retail company achieved unprecedented growth with edge AI transformation.',
      icon: BarChart3,
      link: '/case-studies/global-retail-edge-ai-transformation-2025',
      featured: true,
      readTime: '8 min read'
    },
    {
      type: 'Implementation Guide',
      title: 'Edge AI Implementation Master Guide 2025',
      description: 'Complete roadmap for implementing edge AI solutions in your organization.',
      icon: FileText,
      link: '/resources/edge-ai-implementation-master-guide-2025',
      featured: true,
      readTime: '45 min read'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">✨ NEW CONTENT JUST RELEASED</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Fresh Insights for
            <span className="block text-blue-600">AI-Powered Success</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead of the curve with our latest research, case studies, and implementation guides 
            from the forefront of AI innovation.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {newContent.map((content, index) => {
            const IconComponent = content.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-xl mr-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {content.type}
                      </span>
                      {content.featured && (
                        <span className="ml-2 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                          FEATURED
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {content.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {content.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{content.readTime}</span>
                    </div>
                    
                    <Link 
                      href={content.link}
                      className="flex items-center text-blue-600 font-medium hover:text-blue-700 group-hover:translate-x-1 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Join Thousands of AI Innovators
            </h3>
            <p className="text-gray-600">
              Our content helps organizations achieve breakthrough results with AI implementation
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50,000+</div>
              <div className="text-gray-600">Monthly Readers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">2,500%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get personalized consultation on implementing edge AI solutions that deliver 
            measurable business results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center group"
            >
              <Users className="w-5 h-5 mr-2" />
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/services"
              className="bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all duration-300 flex items-center group border-2 border-white/20"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            🔥 <strong>Trending Now:</strong> Edge AI Computing • Autonomous Business Operations • Real-time Intelligence
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcaseBanner2025;