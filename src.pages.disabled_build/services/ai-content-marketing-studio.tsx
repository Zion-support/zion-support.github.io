import React from 'react';
import { motion } from 'framer-motion';
import { SEOOptimizer } from '../../components/SEOOptimizer';
import { 
  PenTool, 
  Brain, 
  Zap, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Users,
  BarChart3,
  Workflow,
  Target,
  Rocket,
  Lightbulb,
  Star,
  Award,
  Handshake,
  Phone,
  Mail,
  MapPin,
  FileText,
  Image,
  Video,
  Globe,
  Search,
  Palette,
  Sparkles,
  Eye,
  Share2,
  Calendar,
  DollarSign,
  Clock,
  Shield,
  Cpu,
  Database,
  Network,
  Activity,
  Monitor,
  Smartphone,
  Tablet,
  Laptop
} from 'lucide-react';

const AIContentMarketingStudio = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Content Generation",
      description: "Advanced AI that creates high-quality, engaging content across all formats - blogs, social media, emails, and more."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Audience Intelligence",
      description: "Deep insights into your target audience with AI-powered persona analysis and content optimization recommendations."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance Analytics",
      description: "Comprehensive analytics dashboard showing content performance, engagement metrics, and ROI tracking."
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Automated Workflows",
      description: "Streamlined content creation workflows with automated scheduling, publishing, and performance monitoring."
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "SEO Optimization",
      description: "AI-powered SEO tools that optimize content for search engines and improve organic visibility."
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Brand Consistency",
      description: "Maintain consistent brand voice and style across all content with AI-powered brand guidelines."
    }
  ];

  const benefits = [
    "Increase content production by 10x",
    "Improve engagement rates by 40-60%",
    "Reduce content creation costs by 70%",
    "Boost SEO rankings by 50%",
    "24/7 automated content generation",
    "Multi-platform content distribution",
    "Real-time performance optimization",
    "Scalable to any content volume"
  ];

  const pricing = [
    {
      name: "Creator",
      price: "$1,999",
      period: "/month",
      description: "Perfect for small businesses and content creators",
      features: [
        "Up to 100 AI-generated articles/month",
        "Basic SEO optimization",
        "Social media content",
        "Email marketing templates",
        "Standard analytics",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "$4,999",
      period: "/month",
      description: "Ideal for growing businesses and marketing teams",
      features: [
        "Up to 500 AI-generated articles/month",
        "Advanced SEO tools",
        "Multi-platform content",
        "Custom brand voice",
        "Priority support",
        "API access",
        "Advanced analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$9,999",
      period: "/month",
      description: "For large organizations and agencies",
      features: [
        "Unlimited content generation",
        "Custom AI models",
        "White-label solutions",
        "Dedicated support",
        "Advanced security",
        "Custom integrations"
      ]
    }
  ];

  const contentTypes = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Blog Posts & Articles",
      description: "SEO-optimized long-form content that ranks and converts"
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: "Social Media Content",
      description: "Engaging posts for all major social platforms"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Scripts & Content",
      description: "Compelling video content that captures attention"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Marketing",
      description: "High-converting email sequences and campaigns"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Content",
      description: "Search-optimized content that drives organic traffic"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multi-language Content",
      description: "Global content in multiple languages and cultures"
    }
  ];

  const seoData = {
    title: "AI Content Marketing Studio | Zion Tech Group",
    description: "Revolutionary AI-powered content marketing platform that generates, optimizes, and distributes high-quality content automatically. Increase production 10x and engagement by 60%.",
    keywords: "AI content marketing, content generation, marketing automation, SEO content, social media content, AI writing",
    url: "https://ziontechgroup.com/services/ai-content-marketing-studio"
  };

  return (
    <>
      <SEOOptimizer {...seoData} />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/10 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm font-medium mb-8">
                <PenTool className="w-4 h-4 mr-2" />
                AI-Powered Content Marketing
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                AI Content
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> Marketing</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-purple to-zion-cyan">Studio</span>
              </h1>
              
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Transform your content marketing with AI that writes, optimizes, and distributes high-quality content automatically. 
                Increase production 10x, boost engagement by 60%, and dominate your market with intelligent content.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 flex items-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300 flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +1 (302) 464-0950
                </motion.button>
              </div>
            </motion.div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-zion-cyan/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-zion-purple/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-zion-cyan/30 rounded-full blur-lg animate-pulse delay-500"></div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 bg-zion-slate-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Revolutionize Your Content Marketing
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Our AI platform delivers measurable results that transform your content marketing strategy
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-purple/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <CheckCircle className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                  <p className="text-white font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Types */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                All Content Types Covered
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                From blog posts to social media, our AI creates engaging content for every platform and audience
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentTypes.map((content, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-purple/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group text-center"
                >
                  <div className="text-zion-cyan mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                    {content.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {content.title}
                  </h3>
                  <p className="text-zion-slate-light">
                    {content.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-zion-slate-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Advanced AI Features
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Cutting-edge artificial intelligence that continuously learns and improves your content marketing
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-purple/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300 group"
                >
                  <div className="text-zion-cyan mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-zion-slate-light">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Choose the plan that fits your content marketing needs and scale as you grow
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-zion-slate-dark/50 border rounded-xl p-8 ${
                    plan.popular 
                      ? 'border-zion-cyan shadow-lg shadow-zion-cyan/20' 
                      : 'border-zion-purple/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-zion-cyan text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                      <span className="text-zion-slate-light ml-1">{plan.period}</span>
                    </div>
                    <p className="text-zion-slate-light mt-2">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-zion-slate-light">
                        <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan-dark hover:to-zion-purple-dark'
                        : 'bg-zion-slate-dark border border-zion-purple/30 text-zion-purple hover:bg-zion-purple/10'
                    }`}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-zion-slate-dark/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark border border-zion-purple/30 rounded-2xl p-12 text-center"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Content Marketing?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Join hundreds of companies already using our AI platform to revolutionize their content marketing. 
                Get started with a free consultation today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 flex items-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Schedule Demo
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300 flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +1 (302) 464-0950
                </motion.button>
              </div>
              
              <div className="mt-8 text-zion-slate-light">
                <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
                <p>📧 kleber@ziontechgroup.com</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIContentMarketingStudio;