import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, PenTool, Image, Video, Mic, Globe, TrendingUp, Target, Zap, 
  CheckCircle, ArrowRight, Users, Activity, Database, Lock, BarChart3, 
  AlertTriangle, Calendar, Clock, Smartphone, Monitor, Tablet, FileText,
  Type, Palette, Camera, Music, Headphones, BookOpen, Newspaper, Megaphone
} from 'lucide-react';

export default function AIContentCreationPlatform(props: any) {
  const features = [
    {
      icon: PenTool,
      title: "AI Writing Assistant",
      description: "Generate high-quality articles, blogs, and marketing copy with advanced AI"
    },
    {
      icon: Image,
      title: "AI Image Generation",
      description: "Create stunning visuals, graphics, and illustrations with AI-powered tools"
    },
    {
      icon: Video,
      title: "Video Content Creation",
      description: "Generate engaging video content, animations, and multimedia presentations"
    },
    {
      icon: Mic,
      title: "Audio & Podcast Production",
      description: "Create professional audio content, podcasts, and voice-overs with AI"
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Generate content in 50+ languages with native-level quality"
    },
    {
      icon: Zap,
      title: "Content Optimization",
      description: "SEO-optimized content with keyword analysis and performance tracking"
    }
  ];

  const benefits = [
    "Create 10x more content in half the time with AI assistance",
    "Improve content engagement by 60% with data-driven insights",
    "Reduce content creation costs by 70% compared to traditional methods",
    "Generate SEO-optimized content that ranks higher in search results",
    "Maintain consistent brand voice across all content types",
    "Scale content production without increasing team size"
  ];

  const contentTypes = [
    {
      icon: FileText,
      title: "Written Content",
      description: "Articles, blogs, whitepapers, and marketing copy",
      features: ["SEO optimization", "Plagiarism detection", "Tone adjustment"]
    },
    {
      icon: Image,
      title: "Visual Content",
      description: "Graphics, illustrations, and social media images",
      features: ["Brand consistency", "Multiple formats", "Custom styles"]
    },
    {
      icon: Video,
      title: "Video Content",
      description: "Promotional videos, tutorials, and social media clips",
      features: ["Auto-editing", "Music integration", "Caption generation"]
    },
    {
      icon: Mic,
      title: "Audio Content",
      description: "Podcasts, voice-overs, and audio presentations",
      features: ["Voice cloning", "Background music", "Transcription"]
    }
  ];

  const useCases = [
    {
      industry: "Marketing & Advertising",
      icon: Megaphone,
      applications: [
        "Social media content creation",
        "Email marketing campaigns",
        "Landing page copy",
        "Ad copy and creative assets"
      ]
    },
    {
      industry: "E-commerce",
      icon: ShoppingBag,
      applications: [
        "Product descriptions",
        "Category pages",
        "Email marketing",
        "Social media posts"
      ]
    },
    {
      industry: "Education",
      icon: BookOpen,
      applications: [
        "Course materials",
        "Educational videos",
        "Study guides",
        "Interactive content"
      ]
    },
    {
      industry: "Publishing",
      icon: Newspaper,
      applications: [
        "Article writing",
        "Newsletters",
        "Press releases",
        "Editorial content"
      ]
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for individuals and small teams",
      features: [
        "Up to 100 content pieces/month",
        "Basic AI writing tools",
        "Image generation (50/month)",
        "SEO optimization",
        "Email support",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "Up to 500 content pieces/month",
        "Advanced AI writing tools",
        "Unlimited image generation",
        "Video content creation",
        "Audio generation",
        "Priority support",
        "Team collaboration"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "Comprehensive solution for large organizations",
      features: [
        "Unlimited content creation",
        "Custom AI models",
        "Advanced analytics",
        "API access",
        "Dedicated support",
        "Custom integrations",
        "White-label options"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <PenTool className="w-4 h-4" />
              <span>AI-Powered Content Creation</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Content Creation Platform
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Create engaging, high-quality content at scale with AI-powered writing, 
              image generation, video creation, and audio production tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300"
              >
                Start Free Trial
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Content Creation Tools
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create engaging content across all formats and platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-xl border border-slate-600/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Content Creation?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your content strategy with AI-powered tools and insights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Multi-Format Content Creation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create engaging content across all formats and platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contentTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-xl border border-slate-600/50"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg mr-4">
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{type.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect for Every Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored content creation solutions for different industries and use cases
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-xl border border-slate-600/50"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg mr-4">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{useCase.industry}</h3>
                </div>
                <ul className="space-y-3">
                  {useCase.applications.map((application, appIndex) => (
                    <li key={appIndex} className="flex items-start text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                      {application}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Content Creation Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing plans designed to meet your content creation needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-xl border ${
                  plan.popular 
                    ? 'border-purple-500/50 shadow-lg shadow-purple-500/25' 
                    : 'border-slate-600/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                      : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join thousands of creators and businesses who trust AI-powered content creation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300"
              >
                Start Your Free Trial
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>