'use client';
import React, { useState } from 'react';
import { 
  Edit3, 
  Brain, 
  Zap, 
  CheckCircle, 
  Star, 
  Users, 
  Clock, 
  Shield, 
  Globe, 
  ArrowRight, 
  Play, 
  Download, 
  ExternalLink,
  Mail,
  FileText,
  Search,
  Target,
  TrendingUp,
  Award,
  Lightbulb,
  Wrench,
  BarChart,
  MessageSquare,
  BookOpen,
  Code,
  Camera,
  Mic,
  Palette,
  Settings,
  HelpCircle,
  Info,
  AlertCircle
} from 'lucide-react';

const AIWritingAssistantPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('features');

  const features = [
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Generate high-quality content for any purpose using advanced language models',
      details: [
        'Blog posts and articles',
        'Marketing copy and ads',
        'Email campaigns',
        'Social media content',
        'Product descriptions',
        'Technical documentation'
      ]
    },
    {
      icon: Edit3,
      title: 'Grammar & Style Check',
      description: 'Advanced grammar checking with style suggestions and tone optimization',
      details: [
        'Real-time grammar correction',
        'Style and tone analysis',
        'Readability optimization',
        'Plagiarism detection',
        'Consistency checking',
        'Professional formatting'
      ]
    },
    {
      icon: Target,
      title: 'SEO Optimization',
      description: 'Optimize content for search engines with keyword suggestions and analysis',
      details: [
        'Keyword research and suggestions',
        'SEO score analysis',
        'Meta description generation',
        'Title tag optimization',
        'Content structure analysis',
        'Competitor content analysis'
      ]
    },
    {
      icon: Globe,
      title: 'Multi-language Support',
      description: 'Write and translate content in over 50 languages with native-level quality',
      details: [
        '50+ language support',
        'Cultural context awareness',
        'Idiom and slang handling',
        'Regional dialect support',
        'Professional translation',
        'Language-specific formatting'
      ]
    },
    {
      icon: Zap,
      title: 'Tone Adjustment',
      description: 'Adapt writing style to match your brand voice and audience preferences',
      details: [
        'Brand voice training',
        'Audience-specific tone',
        'Emotional tone control',
        'Formality level adjustment',
        'Industry-specific language',
        'Custom style guides'
      ]
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Track content performance and get insights for improvement',
      details: [
        'Engagement metrics',
        'Readability scores',
        'SEO performance tracking',
        'A/B testing results',
        'Content ROI analysis',
        'Improvement recommendations'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 29,
      period: 'month',
      description: 'Perfect for individuals and small teams',
      features: [
        '10,000 words per month',
        'Basic AI models',
        '5 language support',
        'Standard templates',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 59,
      period: 'month',
      description: 'Ideal for growing businesses and content teams',
      features: [
        '50,000 words per month',
        'Advanced AI models',
        '25 language support',
        'Custom templates',
        'Priority support',
        'Advanced analytics',
        'Team collaboration',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 149,
      period: 'month',
      description: 'For large organizations with high-volume needs',
      features: [
        'Unlimited words',
        'Premium AI models',
        '50+ language support',
        'Custom AI training',
        '24/7 dedicated support',
        'Advanced analytics & reporting',
        'White-label options',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Content Marketing',
      description: 'Create engaging blog posts, articles, and marketing content that drives traffic and conversions',
      icon: Target,
      examples: ['Blog posts', 'Newsletter content', 'Social media posts', 'Email campaigns']
    },
    {
      title: 'E-commerce',
      description: 'Write compelling product descriptions, category pages, and promotional content',
      icon: ShoppingCart,
      examples: ['Product descriptions', 'Category pages', 'Promotional content', 'Review responses']
    },
    {
      title: 'Technical Writing',
      description: 'Generate clear, accurate technical documentation and user guides',
      icon: Code,
      examples: ['API documentation', 'User manuals', 'Technical guides', 'Troubleshooting docs']
    },
    {
      title: 'Academic Writing',
      description: 'Create research papers, essays, and academic content with proper citations',
      icon: BookOpen,
      examples: ['Research papers', 'Essays', 'Thesis writing', 'Literature reviews']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Content Marketing Manager',
      company: 'TechCorp Inc.',
      content: 'AI Writing Assistant has revolutionized our content creation process. We\'ve increased our content output by 300% while maintaining high quality.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'E-commerce Director',
      company: 'ShopSmart',
      content: 'The SEO optimization features are incredible. Our organic traffic increased by 150% in just 3 months.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Technical Writer',
      company: 'DevTools Co.',
      content: 'Perfect for technical documentation. The AI understands complex concepts and explains them clearly.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4">
                  <Edit3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-white neon-text">AI Writing Assistant</h1>
                  <p className="text-purple-400">Powered by Advanced AI</p>
                </div>
              </div>
              <p className="text-xl text-gray-300 mb-6">
                Transform your writing with AI-powered content generation, grammar checking, 
                and SEO optimization. Create compelling content 10x faster with professional quality.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  10,000+ words/month
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  50+ languages
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  SEO optimized
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#demo"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-8 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Try Free Demo
                </a>
                <a
                  href="/contact"
                  className="border border-purple-500 text-purple-400 py-3 px-8 rounded-lg font-medium hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Get Custom Quote
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-purple-500/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-slate-700 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-2">Input:</div>
                      <div className="text-white">Write a blog post about AI in healthcare...</div>
                    </div>
                    <div className="bg-slate-700 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-2">AI Generated:</div>
                      <div className="text-white">
                        <div className="font-semibold mb-2">The Future of Healthcare: How AI is Revolutionizing Patient Care</div>
                        <div className="text-sm text-gray-300">
                          Artificial Intelligence is transforming healthcare in unprecedented ways, 
                          from diagnostic imaging to personalized treatment plans...
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Powerful Features</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Everything you need to create professional, engaging content with the power of AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-400 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="bg-slate-800/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Perfect For</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Whether you're a content creator, marketer, or business owner, our AI Writing Assistant adapts to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-purple-500/20 text-center">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{useCase.description}</p>
                <div className="space-y-1">
                  {useCase.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="text-xs text-gray-500">• {example}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include our core features with no hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border transition-all duration-300 ${
              plan.popular 
                ? 'border-purple-500/60 ring-2 ring-purple-500/20' 
                : 'border-purple-500/20 hover:border-purple-500/40'
            }`}>
              {plan.popular && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium py-1 px-4 rounded-full text-center mb-4">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">${plan.price}</span>
                  <span className="text-gray-400 ml-2">/{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className={`w-full py-3 px-6 rounded-lg font-medium text-center transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                    : 'border border-purple-500 text-purple-400 hover:bg-purple-500/10'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-slate-800/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What Our Users Say</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Join thousands of satisfied users who have transformed their content creation process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-purple-500/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-t border-purple-500/20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Writing?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Start creating better content today with our AI Writing Assistant. 
              Try it free for 14 days with no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#demo"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-8 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="border border-purple-500 text-purple-400 py-3 px-8 rounded-lg font-medium hover:bg-purple-500/10 transition-all duration-300"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIWritingAssistantPage;