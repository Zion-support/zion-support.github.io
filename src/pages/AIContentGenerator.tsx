import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  PenTool, 
  FileText, 
  Brain, 
  Zap, 
  Target, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Globe, 
  Shield, 
  Type, 
  Video, 
  ShoppingBag, 
  Mail,
  Sparkles,
  Clock,
  TrendingUp,
  Palette,
  Languages,
  Calendar,
  BarChart3,
  Settings,
  Zap as ZapIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AIContentGenerator = () => {
  const [selectedContentType, setSelectedContentType] = useState('blog');
  const [generating, setGenerating] = useState(false);

  const features = [
    {
      icon: Brain,
      title: "AI Writing Assistant",
      description: "Generate high-quality content for blogs, social media, and marketing campaigns",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FileText,
      title: "Multi-Format Support",
      description: "Create content in various formats: text, images, videos, and audio",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Type,
      title: "Brand Voice Consistency",
      description: "Maintain your brand's unique voice across all content pieces",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Target,
      title: "SEO Optimization",
      description: "AI-powered SEO suggestions to improve content visibility and ranking",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const contentTypes = [
    {
      id: 'blog',
      title: "Blog Posts",
      description: "Long-form articles and blog content",
      icon: FileText,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 'social',
      title: "Social Media",
      description: "Posts for all major social platforms",
      icon: Users,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 'marketing',
      title: "Marketing Copy",
      description: "Ads, landing pages, and promotional content",
      icon: Target,
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: 'product',
      title: "Product Descriptions",
      description: "Compelling product and service descriptions",
      icon: ShoppingBag,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 'email',
      title: "Email Campaigns",
      description: "Newsletters and email marketing content",
      icon: Mail,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 'video',
      title: "Video Scripts",
      description: "Scripts for video content and presentations",
      icon: Video,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for individuals and small businesses",
      features: [
        "Up to 50 content pieces/month",
        "Basic AI writing tools",
        "Standard templates",
        "Email support",
        "Basic SEO suggestions"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Advanced content creation for growing businesses",
      features: [
        "Up to 200 content pieces/month",
        "Advanced AI writing tools",
        "Custom templates",
        "Priority support",
        "Advanced SEO optimization",
        "Brand voice training",
        "Multi-language support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Full-featured solution for large organizations",
      features: [
        "Unlimited content generation",
        "Custom AI model training",
        "API access",
        "Dedicated account manager",
        "Advanced analytics",
        "White-label solutions",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const handleGenerateContent = () => {
    setGenerating(true);
    // Simulate content generation
    setTimeout(() => {
      setGenerating(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <SEO 
        title="AI Content Generator - Zion Tech Group"
        description="Generate high-quality, SEO-optimized content with our AI-powered writing assistant. Create blogs, social media posts, marketing copy, and more."
        keywords="AI content generator, content creation, AI writing, blog content, social media content, marketing copy"
      />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                AI Content
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  {" "}Generator
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your content creation with AI-powered writing assistance. Generate engaging, 
              SEO-optimized content for blogs, social media, marketing campaigns, and more in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleGenerateContent}
                disabled={generating}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                {generating ? (
                  <>
                    <ZapIcon className="mr-2 h-5 w-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Start Generating
                  </>
                )}
              </Button>
              <Link 
                to="/demo"
                className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose AI Content Generation?</h2>
            <p className="text-lg text-gray-300">Unlock the power of AI to create compelling content faster than ever</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Content Types We Generate</h2>
            <p className="text-lg text-gray-300">From blog posts to video scripts, we cover all your content needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentTypes.map((contentType, index) => (
              <motion.div
                key={contentType.id}
                className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer ${
                  selectedContentType === contentType.id ? 'ring-2 ring-blue-500' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                onClick={() => setSelectedContentType(contentType.id)}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${contentType.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <contentType.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{contentType.title}</h3>
                <p className="text-gray-300 text-center">{contentType.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-300">Choose the plan that fits your content creation needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`relative bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-blue-500' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 + (index * 0.1) }}
                whileHover={{ y: -5 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700' 
                      : 'bg-white/10 hover:bg-white/20'
                  } text-white border-0`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Content Creation?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of content creators who are already using AI to produce 
              high-quality content faster and more efficiently than ever before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/ai-content-resources"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIContentGenerator;
