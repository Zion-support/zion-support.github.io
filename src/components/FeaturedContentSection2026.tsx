import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Rocket, 
  Zap, 
  Globe, 
  ArrowRight, 
  Star, 
  Clock, 
  Users,
  TrendingUp,
  Sparkles
} from 'lucide-react';
const FeaturedContentSection2026 = () => {
  const featuredContent = [
    {
      id: 1,
      title: "Revolutionary AI Services 2026",
      description: "Experience the future of artificial intelligence with our cutting-edge services that transcend traditional limitations.",
      image: "/images/ai-services-2026.jpg",
      category: "AI Services",
      readTime: "5 min read",
      views: "12.5K",
      rating: 4.9,
      link: "/revolutionary-ai-services-2026",
      features: ["Synthetic Intelligence", "Holographic Reality", "Quantum-Neural Fusion"],
      icon: Brain,
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Next-Gen Tech Solutions",
      description: "Discover revolutionary technology solutions that are reshaping reality itself, from interdimensional computing to space technology.",
      image: "/images/next-gen-tech-2026.jpg",
      category: "Technology",
      readTime: "7 min read",
      views: "8.9K",
      rating: 4.8,
      link: "/next-gen-tech-solutions-2026",
      features: ["Interdimensional Computing", "Omniversal AI", "Space Technology"],
      icon: Rocket,
      color: "from-blue-600 to-purple-600"
    },
    {
      id: 3,
      title: "Revolutionary Blog Content",
      description: "Stay ahead with our latest insights and breakthroughs in AI consciousness, quantum computing, and future technology.",
      image: "/images/blog-content-2026.jpg",
      category: "Blog",
      readTime: "3 min read",
      views: "15.2K",
      rating: 4.9,
      link: "/blog",
      features: ["AI Consciousness", "Quantum Computing", "Future Tech"],
      icon: Zap,
      color: "from-green-600 to-blue-600"
    }
  ];
  const stats = [
    { number: "500+", label: "Revolutionary Solutions", icon: Sparkles },
    { number: "99.9%", label: "Success Rate", icon: TrendingUp },
    { number: "50+", label: "Countries Served", icon: Globe },
    { number: "24/7", label: "AI Support", icon: Brain }
  ];
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Featured Content 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Revolutionary Content & Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our latest revolutionary content and cutting-edge AI services that are shaping the future of technology.
          </p>
        </motion.div>
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredContent.map((content, index) => (
            <motion.div
              key={content.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800">
                <div className={`absolute inset-0 bg-gradient-to-br ${content.color} opacity-20`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`p-4 bg-gradient-to-r ${content.color} rounded-full`}>
                    <content.icon className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {content.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-white text-xs font-medium">{content.rating}</span>
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {content.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {content.description}
                </p>
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {content.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-slate-700 text-gray-300 px-2 py-1 rounded-full text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{content.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{content.views}</span>
                    </div>
                  </div>
                </div>
                {/* CTA */}
                <a
                  href={content.link}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 group-hover:scale-105"
                >
                  Explore Now
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of forward-thinking organizations already using our revolutionary AI services and content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
                View All Content
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );

};


export default FeaturedContentSection2026;
