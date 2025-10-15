import React from 'react';
import SEOHead from '../../components/SEOHead';
import { 
  PenTool, 
  Image, 
  Video, 
  FileText, 
  Zap, 
  CheckCircle,
  Star,
  ArrowRight,
  Brain,
  Database,
  Target,
  Activity,
  Users,
  Clock,
  Globe,
  Palette,
  Type,
  Camera,
  Mic
} from 'lucide-react';

const AIContentStudio: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI Content Generation',
      description: 'Generate high-quality content using advanced AI models trained on millions of successful campaigns.'
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: 'Multi-Format Creation',
      description: 'Create blog posts, social media content, ads, emails, and more from a single prompt.'
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: 'AI Image Generation',
      description: 'Generate stunning visuals, graphics, and illustrations using cutting-edge AI image models.'
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: 'Video Content Creation',
      description: 'Create engaging video content with AI-powered editing, voiceovers, and animations.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Brand Voice Consistency',
      description: 'Maintain consistent brand voice and tone across all content with AI-powered style matching.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Automated Workflows',
      description: 'Set up automated content pipelines that generate and publish content on schedule.'
    }
  ];

  const contentTypes = [
    {
      title: 'Blog Posts',
      description: 'Long-form articles and blog content',
      icon: <FileText className="w-8 h-8" />,
      count: '10,000+'
    },
    {
      title: 'Social Media',
      description: 'Posts for all major platforms',
      icon: <Globe className="w-8 h-8" />,
      count: '50,000+'
    },
    {
      title: 'Email Campaigns',
      description: 'Newsletters and marketing emails',
      icon: <Users className="w-8 h-8" />,
      count: '25,000+'
    },
    {
      title: 'Ad Copy',
      description: 'High-converting ad content',
      icon: <Target className="w-8 h-8" />,
      count: '15,000+'
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$79',
      period: '/month',
      description: 'Perfect for individual creators',
      features: [
        'Up to 100 content pieces/month',
        'Basic AI models',
        '5 brand voices',
        'Standard templates',
        'Email support',
        '1 user account',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Studio',
      price: '$149',
      period: '/month',
      description: 'Ideal for small teams',
      features: [
        'Up to 500 content pieces/month',
        'Advanced AI models',
        'Unlimited brand voices',
        'Premium templates',
        'Priority support',
        'Up to 5 user accounts',
        'Advanced analytics',
        'API access',
        'Custom workflows'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited content pieces',
        'Premium AI models',
        'Custom AI training',
        'White-label options',
        '24/7 dedicated support',
        'Unlimited user accounts',
        'Custom analytics',
        'Advanced integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Rachel Green',
      company: 'Creative Agency Pro',
      role: 'Content Director',
      content: 'AI Content Studio has revolutionized our content creation process. We can now produce 10x more content with the same team.',
      rating: 5
    },
    {
      name: 'Mark Thompson',
      company: 'Digital Marketing Co.',
      role: 'Marketing Manager',
      content: 'The AI-generated content is incredibly high quality. Our engagement rates have increased by 40% since we started using it.',
      rating: 5
    },
    {
      name: 'Sarah Kim',
      company: 'E-commerce Solutions',
      role: 'Brand Manager',
      content: 'The brand voice consistency feature is amazing. All our content now sounds like it came from the same expert writer.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead
        title="AI Content Studio - AI-Powered Content Creation Platform | Zion Tech Group"
        description="Create stunning content with AI. Generate blog posts, social media content, images, videos, and more. Starting at $79/month."
        keywords="AI content creation, content generation, AI writing, social media content, blog writing, content marketing, AI tools"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 animated-bg cyber-grid">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <PenTool className="w-4 h-4" />
                #1 AI Content Platform
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 futuristic-text">
                AI Content Studio
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Create stunning content at scale with AI. Generate blog posts, social media content, 
                images, videos, and more using advanced artificial intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#pricing"
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover-glow flex items-center justify-center gap-2"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#demo"
                  className="group glass-morphism text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover-glow flex items-center justify-center gap-2"
                >
                  View Demo
                  <Activity className="w-5 h-5" />
                </a>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Free 14-day trial
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Cancel anytime
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="glass-morphism p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <FileText className="w-6 h-6 text-white" />
                      <span className="text-white text-sm">10K+</span>
                    </div>
                    <p className="text-white text-sm">Blog Posts</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <Globe className="w-6 h-6 text-white" />
                      <span className="text-white text-sm">50K+</span>
                    </div>
                    <p className="text-white text-sm">Social Posts</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <Image className="w-6 h-6 text-white" />
                      <span className="text-white text-sm">25K+</span>
                    </div>
                    <p className="text-white text-sm">Images</p>
                  </div>
                  <div className="bg-gradient-to-r from-orange-600 to-red-600 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <Video className="w-6 h-6 text-white" />
                      <span className="text-white text-sm">5K+</span>
                    </div>
                    <p className="text-white text-sm">Videos</p>
                  </div>
                </div>
                <div className="h-32 bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg flex items-center justify-center">
                  <PenTool className="w-12 h-12 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 neon-text">
              Create Any Type of Content
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From blog posts to social media, generate high-quality content for every platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentTypes.map((type, index) => (
              <div key={index} className="glass-morphism p-8 rounded-xl hover-glow group text-center">
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform flex justify-center">
                  {type.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{type.count}</div>
                <h3 className="text-lg font-semibold mb-2 text-white">{type.title}</h3>
                <p className="text-gray-300 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 futuristic-text">
              Powerful Content Creation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create, manage, and optimize your content
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass-morphism p-8 rounded-xl hover-glow group">
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 futuristic-text">
              Choose Your Content Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Scale your content creation with flexible pricing options
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`glass-morphism p-8 rounded-xl hover-glow relative ${
                plan.popular ? 'ring-2 ring-blue-500' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover-glow'
                      : 'glass-morphism text-white hover:bg-slate-700/50'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 neon-text">
              Loved by Content Creators
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what content creators and marketers say about AI Content Studio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-morphism p-8 rounded-xl hover-glow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6 futuristic-text">
            Start Creating Amazing Content
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of creators who are already using AI to scale their content production
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover-glow flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+13024640950"
              className="group glass-morphism text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover-glow flex items-center justify-center gap-2"
            >
              Call: +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AIContentStudio;
