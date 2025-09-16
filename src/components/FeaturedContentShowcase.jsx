import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Award, TrendingUp, Star, ArrowRight } from 'lucide-react';

const FeaturedContentShowcase = () => {
  const showcaseItems = [
    {
      type: "case-study",
      title: "Fortune 500 AI Transformation: 850% ROI Success",
      description: "How a leading manufacturing company achieved unprecedented ROI through comprehensive AI automation",
      metrics: "850% ROI",
      duration: "6 months",
      category: "Manufacturing",
      badge: "Case Study",
      color: "from-emerald-500 to-teal-600",
      icon: TrendingUp,
      slug: "fortune-500-ai-transformation-850-roi-success"
    },
    {
      type: "guide",
      title: "AI 2026 Implementation Master Guide",
      description: "Complete blueprint for implementing cutting-edge AI solutions in enterprise environments",
      metrics: "500+ pages",
      duration: "2 hours read",
      category: "Implementation Guide",
      badge: "Master Guide",
      color: "from-blue-500 to-indigo-600",
      icon: Award,
      slug: "ai-2026-implementation-guide"
    },
    {
      type: "research",
      title: "Consciousness Computing Global Impact Study",
      description: "Comprehensive research on how consciousness computing is transforming industries worldwide",
      metrics: "50 countries",
      duration: "1 hour read",
      category: "Research Report",
      badge: "Research",
      color: "from-purple-500 to-pink-600",
      icon: Users,
      slug: "consciousness-computing-global-impact-study"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Content & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest breakthroughs, implementation guides, and real-world success stories 
            that are shaping the future of AI and technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                {/* Header with gradient */}
                <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
                
                <div className="p-6">
                  {/* Badge and category */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${item.color} text-white`}>
                      {item.badge}
                    </span>
                    <span className="text-sm text-gray-500 font-medium">{item.category}</span>
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${item.color} mb-4`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="font-semibold">{item.metrics}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{item.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link 
                    to={`/${item.type}/${item.slug}`}
                    className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 group-hover:shadow-lg"
                  >
                    Explore Content
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of companies already using our AI solutions to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                View Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/contact"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedContentShowcase;