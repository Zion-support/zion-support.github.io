import React from 'react';
import SEOHead from '../../components/SEOHead';
import { 
  Brain, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Zap, 
  Globe, 
  BarChart3, 
  Shield, 
  Clock,
  DollarSign,
  Award,
  TrendingUp,
  Target,
  Rocket,
  MessageSquare,
  FileText,
  Image,
  Video,
  Headphones,
  Palette,
  Search,
  Share2,
  Download,
  Upload,
  Settings,
  Play
} from 'lucide-react';

const AIContentGeneratorPage: React.FC = () => {
  const features = [
    {
      title: "AI-Powered Content Creation",
      description: "Generate high-quality content using advanced AI models trained on millions of articles, blogs, and marketing materials.",
      icon: Brain,
      details: [
        "Natural language processing",
        "Context-aware generation",
        "Multiple content formats",
        "Real-time content creation"
      ]
    },
    {
      title: "Multi-Language Support",
      description: "Create content in 50+ languages with native-level quality and cultural adaptation.",
      icon: Globe,
      details: [
        "50+ languages supported",
        "Cultural adaptation",
        "Localized content",
        "Translation accuracy"
      ]
    },
    {
      title: "SEO Optimization",
      description: "Built-in SEO optimization to ensure your content ranks well in search engines.",
      icon: Search,
      details: [
        "Keyword optimization",
        "Meta descriptions",
        "Title tag generation",
        "Content structure optimization"
      ]
    },
    {
      title: "Brand Voice Customization",
      description: "Train the AI to match your brand's unique voice, tone, and style preferences.",
      icon: Palette,
      details: [
        "Brand voice training",
        "Tone customization",
        "Style consistency",
        "Brand guidelines integration"
      ]
    },
    {
      title: "Content Templates",
      description: "Access to hundreds of professionally designed content templates for various industries.",
      icon: FileText,
      details: [
        "Industry-specific templates",
        "Content type variety",
        "Custom template creation",
        "Template library updates"
      ]
    },
    {
      title: "Plagiarism Detection",
      description: "Built-in plagiarism detection to ensure your content is original and unique.",
      icon: Shield,
      details: [
        "Real-time plagiarism check",
        "Originality scoring",
        "Source attribution",
        "Duplicate content detection"
      ]
    },
    {
      title: "Social Media Integration",
      description: "Direct publishing to social media platforms with platform-specific optimization.",
      icon: Share2,
      details: [
        "Multi-platform publishing",
        "Platform-specific formatting",
        "Scheduling capabilities",
        "Performance tracking"
      ]
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive analytics to track content performance and engagement metrics.",
      icon: BarChart3,
      details: [
        "Performance metrics",
        "Engagement tracking",
        "ROI analysis",
        "Content insights"
      ]
    }
  ];

  const contentTypes = [
    { name: "Blog Posts", icon: FileText, count: "10,000+" },
    { name: "Social Media Posts", icon: Share2, count: "50,000+" },
    { name: "Email Campaigns", icon: MessageSquare, count: "5,000+" },
    { name: "Product Descriptions", icon: Target, count: "25,000+" },
    { name: "Ad Copy", icon: Zap, count: "15,000+" },
    { name: "Press Releases", icon: Globe, count: "2,000+" }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "month",
      originalPrice: "$49",
      description: "Perfect for small businesses and content creators",
      features: [
        "10,000 words per month",
        "5 content templates",
        "Basic SEO optimization",
        "Email support",
        "1 brand voice profile",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$59",
      period: "month",
      originalPrice: "$99",
      description: "Ideal for growing businesses and marketing teams",
      features: [
        "50,000 words per month",
        "Unlimited templates",
        "Advanced SEO optimization",
        "Priority support",
        "5 brand voice profiles",
        "Advanced analytics",
        "Social media integration",
        "Plagiarism detection"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$149",
      period: "month",
      originalPrice: "$249",
      description: "For large organizations with high content needs",
      features: [
        "Unlimited words",
        "All templates + custom",
        "Full SEO suite",
        "24/7 dedicated support",
        "Unlimited brand voices",
        "Enterprise analytics",
        "API access",
        "White-label options",
        "Team collaboration",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp Solutions",
      content: "AI Content Generator has revolutionized our content marketing. We've increased our content output by 300% while maintaining quality.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Content Manager",
      company: "Digital Marketing Pro",
      content: "The SEO optimization feature is incredible. Our organic traffic has increased by 150% since we started using this tool.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder",
      company: "StartupXYZ",
      content: "As a small business owner, this tool has been a game-changer. I can now compete with larger companies in content marketing.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <>
      <SEOHead
        title="AI Content Generator Pro - Zion Tech Group | AI-Powered Content Creation"
        description="Create high-quality content with our AI Content Generator Pro. Generate blogs, social media posts, emails, and more in 50+ languages. SEO optimized, plagiarism-free content. Starting at $29/month."
        keywords="ai content generator, content creation, ai writing, blog generator, social media content, seo content, content marketing, ai copywriting"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                AI Content Generator
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Pro
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Create high-quality, SEO-optimized content in minutes, not hours. 
                Generate blogs, social media posts, emails, and more in 50+ languages with our advanced AI.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="#pricing" 
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Start Free Trial
                </a>
                <a 
                  href="#demo" 
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
                >
                  Watch Demo
                </a>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-300">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  Free 14-day trial
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  No credit card required
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  Cancel anytime
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-800 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-3 rounded-lg mr-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">AI Content Generator</h3>
                    <p className="text-cyan-400">Powered by Advanced AI</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-slate-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-300">Content Type</span>
                      <span className="text-cyan-400 text-sm">Blog Post</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-300">SEO Score</span>
                      <span className="text-green-400 text-sm">95/100</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-cyan-600 h-2 rounded-full w-5/6"></div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-300">Plagiarism Check</span>
                      <span className="text-green-400 text-sm">100% Original</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-cyan-600 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex space-x-2">
                  <button className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300">
                    Generate Content
                  </button>
                  <button className="bg-slate-600 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                    <Settings className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create professional, engaging content that drives results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-700 rounded-xl p-6 hover:bg-slate-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-3 rounded-lg mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Content Types We Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Generate any type of content you need for your business and marketing campaigns.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {contentTypes.map((type, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{type.name}</h3>
                <p className="text-cyan-400 font-bold">{type.count} generated</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your content needs. All plans include our core features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-700 rounded-xl p-8 hover:bg-slate-600 transition-all duration-300 transform hover:scale-105 shadow-xl relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-4xl font-bold text-cyan-400">${plan.price}</span>
                    <span className="text-gray-400">/{plan.period}</span>
                    <span className="text-sm text-gray-500 line-through">${plan.originalPrice}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a 
                  href="/contact"
                  className={`w-full text-center font-bold py-3 px-6 rounded-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white'
                      : 'bg-slate-600 hover:bg-slate-500 text-white'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied customers who have transformed their content marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Content Marketing?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Start your free 14-day trial today. No credit card required. Cancel anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-cyan-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Free Trial
            </a>
            <a 
              href="tel:+13024640950" 
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AIContentGeneratorPage;