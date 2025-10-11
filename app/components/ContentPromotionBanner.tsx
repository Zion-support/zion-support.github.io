import React from 'react'
import { BookOpen, Link, Zap } from 'lucide-react'

const ContentPromotionBanner: React.FC = () => {
  const featuredContent = [
    {
      title: "North-Engineering Metrics: Fewer KPIs, Better Outcomes",
      category: "Leadership",
      readTime: "5 min read",
      isNew: true
    },
    {
      title: "Building Scalable AI Systems",
      category: "Technology",
      readTime: "8 min read",
      isNew: false
    },
    {
      title: "The Future of Digital Transformation",
      category: "Innovation",
      readTime: "6 min read",
      isNew: true
    }
  ]

  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent" />
      </div>
      
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Latest from Zion Insights
        </h2>
        
        <div className="flex flex-wrap gap-4 mb-8">
          <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-300">
            <BookOpen className="w-5 h-5" />
            Explore All Articles
          </button>
          <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-300">
            <Link className="w-5 h-5" />
            View Case Studies
          </button>
          <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-300">
            <Zap className="w-5 h-5" />
            View Case Studies
          </button>
        </div>

        {/* Featured Content Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featuredContent.map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider text-blue-200 bg-blue-500/20 px-3 py-1 rounded-full">
                  {item.category}
                </span>
                {item.isNew && (
                  <span className="text-xs bg-green-500/20 text-green-200 px-2 py-1 rounded-full">
                    New
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-white/80">{item.readTime}</p>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">50+</div>
            <div className="text-sm text-white/80">Articles Published</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">10K+</div>
            <div className="text-sm text-white/80">Monthly Readers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">95%</div>
            <div className="text-sm text-white/80">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">24/7</div>
            <div className="text-sm text-white/80">Support Available</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentPromotionBanner