'use client';
import React from 'react';
import { 
  Brain, Palette, Calendar, FileText, Users, Target, Zap, Shield, 
  Globe, Cpu, Database, Cloud, Settings, Lock, Eye, Activity, 
  CheckCircle, Star, ArrowRight, Phone, Mail, MapPin, TrendingUp
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function AIContentStudioPage() {
  const features = [
    {
      title: "AI Content Generation",
      description: "Create high-quality content in seconds with our advanced AI writing assistant that understands your brand voice and tone.",
      icon: Brain,
      benefits: ["Multiple content types", "Brand voice training", "SEO optimization"]
    },
    {
      title: "Visual Design Tools",
      description: "Design stunning visuals with AI-powered tools that create professional graphics, infographics, and social media content.",
      icon: Palette,
      benefits: ["Auto-design generation", "Brand consistency", "Multiple formats"]
    },
    {
      title: "Content Planning",
      description: "Plan and organize your content strategy with AI-powered insights and automated content calendars.",
      icon: Calendar,
      benefits: ["Content calendar", "Trend analysis", "Optimal timing"]
    },
    {
      title: "Multi-format Support",
      description: "Create content for all platforms including blogs, social media, emails, and marketing materials.",
      icon: FileText,
      benefits: ["Cross-platform content", "Format optimization", "Consistent branding"]
    }
  ];

  const tools = [
    {
      title: "Blog Post Generator",
      description: "Create engaging blog posts with AI-powered research and optimization",
      icon: FileText,
      features: ["SEO optimization", "Research integration", "Multiple tones", "Length control"]
    },
    {
      title: "Social Media Manager",
      description: "Generate platform-specific content for all major social media platforms",
      icon: Users,
      features: ["Platform optimization", "Hashtag generation", "Engagement prediction", "Scheduling"]
    },
    {
      title: "Email Campaign Creator",
      description: "Design compelling email campaigns with AI-powered personalization",
      icon: Mail,
      features: ["Personalization", "A/B testing", "Subject optimization", "Content variation"]
    },
    {
      title: "Visual Content Studio",
      description: "Create stunning visuals with AI-powered design tools",
      icon: Palette,
      features: ["Auto-design", "Brand consistency", "Multiple formats", "Custom templates"]
    }
  ];

  const benefits = [
    'Increase content production by 10x',
    'Reduce content creation time by 80%',
    'Improve content quality and consistency',
    'Save 40+ hours per week',
    'Enhance brand voice and messaging',
    'Scale content marketing efforts'
  ];

  const pricing = [
    {
      name: 'Creator',
      price: '$49',
      period: '/month',
      description: 'Perfect for individual creators and small teams',
      features: [
        'Basic AI content generation',
        'Up to 100 pieces/month',
        'Email support',
        'Standard templates',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Studio',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Advanced AI features',
        'Unlimited content generation',
        'Priority support',
        'Custom templates',
        'Advanced analytics',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with complex needs',
      features: [
        'Full customization',
        'Dedicated support',
        'On-premise deployment',
        'White-label solutions',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Content Studio
                <span className="block text-purple-400">for Creative Teams</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                The ultimate AI-powered content creation platform. Generate, design, and optimize 
                content across all channels with intelligent automation and creative tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Start Creating
                </button>
                <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 hover:text-purple-600 transition-colors">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Studio Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create amazing content
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Content Creation Tools
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional tools powered by AI
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tools.map((tool, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <tool.icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{tool.title}</h3>
                  <p className="text-gray-300 mb-4">{tool.description}</p>
                  <ul className="space-y-2">
                    {tool.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Content Studio?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that transform your content creation
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing for content creation solutions
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm p-8 rounded-xl border ${plan.popular ? 'border-purple-400' : 'border-white/20'}`}>
                  {plan.popular && (
                    <div className="bg-purple-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-purple-600 text-white hover:bg-purple-700' 
                      : 'border border-white/30 text-white hover:bg-white/10'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Create Amazing Content?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your content creation journey with AI today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Start Free Trial
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 hover:text-purple-600 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}