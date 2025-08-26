import React from 'react';
import { motion } from 'framer-motion';
import { Brain, FileText, Image, Video, Music, Globe, Zap, Users, BarChart3, Target, Sparkles } from 'lucide-react';
export default function AIContentGenerator() {
  const features = [
    {
      icon: FileText,
      title: "AI-Powered Writing",
      description: "Generate high-quality articles, blogs, marketing copy, and technical content with advanced language models"
    },
    {
      icon: Image,
      title: "Visual Content Creation",
      description: "Create stunning images, graphics, and visual assets using AI-powered design tools"
    },
    {
      icon: Video,
      title: "Video Content Generation",
      description: "Produce engaging video content, animations, and multimedia presentations automatically"
    },
    {
      icon: Music,
      title: "Audio Content",
      description: "Generate background music, sound effects, and audio content for your projects"
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Create content in multiple languages with accurate translations and cultural adaptation"
    },
    {
      icon: Target,
      title: "Audience Targeting",
      description: "Optimize content for specific audiences and demographics using AI insights"
    }
  ];
  const contentTypes = [
    {
      category: "Written Content",
      items: [
        "Blog posts and articles",
        "Marketing copy and ads",
        "Product descriptions",
        "Technical documentation",
        "Social media posts",
        "Email campaigns",
        "Press releases",
        "White papers and reports"
      ]
    },
    {
      category: "Visual Content",
      items: [
        "Social media graphics",
        "Infographics and charts",
        "Product mockups",
        "Brand logos and icons",
        "Website banners",
        "Presentation slides",
        "E-book covers",
        "Marketing materials"
      ]
    },
    {
      category: "Video & Audio",
      items: [
        "Product demos",
        "Explainer videos",
        "Social media clips",
        "Background music",
        "Podcast intros",
        "Sound effects",
        "Voice-overs",
        "Video presentations"
      ]
    }
  ];
  const useCases = [
    {
      industry: "Marketing & Advertising",
      description: "Create compelling campaigns, social media content, and brand messaging",
      benefits: ["10x faster content creation", "Improved engagement rates", "Consistent brand voice"]
    },
    {
      industry: "E-commerce",
      description: "Generate product descriptions, marketing materials, and customer communications",
      benefits: ["Automated product content", "SEO-optimized descriptions", "Multilingual support"]
    },
    {
      industry: "Content Marketing",
      description: "Produce high-quality blog posts, articles, and thought leadership content",
      benefits: ["Scalable content production", "SEO optimization", "Audience targeting"]
    },
    {
      industry: "Education & Training",
      description: "Create educational materials, course content, and learning resources",
      benefits: ["Personalized learning content", "Multimedia materials", "Adaptive content"]
    }
  ];
  const stats = [
    { label: "Content Generated", value: "1M+", icon: FileText },
    { label: "Languages Supported", value: "50+", icon: Globe },
    { label: "Content Types", value: "25+", icon: Target },
    { label: "Customer Satisfaction", value: "98%", icon: Users },
    { label: "Time Saved", value: "80%", icon: Zap },
    { label: "ROI Improvement", value: "300%", icon: BarChart3 }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate-darker">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI Content Innovation
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            AI Content
            <span className="bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent"> Generator</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8"
          >
            Transform your content creation process with our AI-powered generator. Create high-quality,
            engaging content across all formats in minutes, not hours.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/30 transition-all duration-300">
              Start Creating
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300">
              View Demo
            </button>
          </motion.div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-zion-slate-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Content Creation
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our AI content generator combines cutting-edge technology with intuitive design to
              transform how content is created across all industries.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Content Types Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Content Types
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              From written content to visual assets, our AI generator supports all your content creation needs.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contentTypes.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Sparkles className="w-6 h-6 text-zion-cyan mr-3" />
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full flex-shrink-0"></div>
                      <span className="text-zion-slate-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our AI content generator is transforming content creation across diverse industries and applications.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.industry}</h3>
                <p className="text-zion-slate-light mb-6">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-zion-cyan" />
                      <span className="text-zion-slate-light text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-zion-purple to-zion-cyan rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Content Creation?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of creators who have already revolutionized their content production with our AI-powered
              generator. Start creating amazing content today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-zion-purple px-8 py-3 rounded-lg font-semibold hover:bg-zion-slate-light transition-colors duration-300">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-zion-purple transition-colors duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}