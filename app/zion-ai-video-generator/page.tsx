import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Video, 
  Brain, 
  Play, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Clock, 
  Award, 
  Target, 
  Mail, 
  Phone, 
  Globe,
  TrendingUp,
  MessageSquare,
  Calendar,
  FileText,
  Settings,
  Database,
  Smartphone,
  Monitor,
  Headphones,
  Camera,
  Mic,
  Edit,
  Download,
  Share,
  Users,
  BarChart3,
  Shield
} from 'lucide-react';

const ZionAiVideoGeneratorPage: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Script Generation',
      description: 'Create compelling video scripts in seconds using advanced natural language processing and industry-specific templates.',
      icon: <FileText className="w-6 h-6" />,
      benefits: ['60+ industry templates', 'Multi-language support', 'SEO-optimized content', 'Brand voice customization']
    },
    {
      title: 'Intelligent Voice Synthesis',
      description: 'Generate natural-sounding voiceovers in 50+ languages with emotion control and accent customization.',
      icon: <Mic className="w-6 h-6" />,
      benefits: ['50+ voice options', 'Emotion control', 'Accent customization', 'Real-time preview']
    },
    {
      title: 'Smart Video Editing',
      description: 'Automated video editing with AI-powered scene detection, transition optimization, and color grading.',
      icon: <Edit className="w-6 h-6" />,
      benefits: ['Auto scene detection', 'Smart transitions', 'Color correction', 'Background removal']
    },
    {
      title: 'Dynamic Asset Library',
      description: 'Access millions of high-quality stock footage, images, music, and graphics with AI-powered recommendations.',
      icon: <Camera className="w-6 h-6" />,
      benefits: ['10M+ assets', 'AI recommendations', 'Rights management', 'Brand consistency']
    },
    {
      title: 'Multi-Platform Optimization',
      description: 'Automatically optimize videos for different platforms (YouTube, TikTok, Instagram, LinkedIn) with platform-specific formatting.',
      icon: <Smartphone className="w-6 h-6" />,
      benefits: ['Platform-specific formats', 'Aspect ratio optimization', 'Compression algorithms', 'Quality optimization']
    },
    {
      title: 'Real-Time Collaboration',
      description: 'Collaborate with team members in real-time with comments, approvals, and version control.',
      icon: <Users className="w-6 h-6" />,
      benefits: ['Real-time editing', 'Comment system', 'Version control', 'Approval workflows']
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$49',
      period: '/month',
      description: 'Perfect for content creators and small businesses',
      features: [
        'Up to 10 videos/month',
        'HD quality export',
        'Basic AI voice synthesis',
        'Standard asset library',
        'Email support',
        'Basic templates'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for marketing teams and agencies',
      features: [
        'Up to 50 videos/month',
        '4K quality export',
        'Advanced AI features',
        'Full asset library',
        'Priority support',
        'Custom branding',
        'Team collaboration',
        'Analytics dashboard'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited videos',
        '8K quality export',
        'Full AI suite',
        'Custom asset uploads',
        'Dedicated support',
        'White-label options',
        'API access',
        'SLA guarantee'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Jessica Martinez',
      company: 'Digital Marketing Pro',
      role: 'Content Director',
      content: 'Zion AI Video Generator reduced our video production time by 80%. We can now create professional videos in minutes instead of hours.',
      rating: 5,
      avatar: 'JM'
    },
    {
      name: 'David Kim',
      company: 'TechStart Agency',
      role: 'Creative Director',
      content: 'The AI voice synthesis is incredibly realistic. Our clients can\'t tell the difference between AI-generated and human voiceovers.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Sarah Thompson',
      company: 'E-commerce Solutions',
      role: 'Marketing Manager',
      content: 'The platform-specific optimization feature is a game-changer. Our videos perform 3x better across all social media platforms.',
      rating: 5,
      avatar: 'ST'
    }
  ];

  const useCases = [
    {
      title: 'Marketing Videos',
      description: 'Create compelling product demos, promotional videos, and brand stories',
      icon: <Target className="w-6 h-6" />,
      examples: ['Product demos', 'Brand stories', 'Promotional content', 'Social media ads']
    },
    {
      title: 'Educational Content',
      description: 'Develop training videos, tutorials, and educational content',
      icon: <Play className="w-6 h-6" />,
      examples: ['Training videos', 'Tutorials', 'How-to guides', 'Course content']
    },
    {
      title: 'Social Media',
      description: 'Generate engaging content for all social media platforms',
      icon: <Share className="w-6 h-6" />,
      examples: ['TikTok videos', 'Instagram reels', 'YouTube shorts', 'LinkedIn videos']
    },
    {
      title: 'Corporate Communications',
      description: 'Create professional internal and external communications',
      icon: <MessageSquare className="w-6 h-6" />,
      examples: ['Company updates', 'Internal training', 'Client presentations', 'Recruitment videos']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Video Generator - AI-Powered Video Creation Platform | Zion Tech Group</title>
        <meta name="description" content="Create professional videos in minutes with Zion AI Video Generator. AI-powered script writing, voice synthesis, and automated editing. Start your free trial today!" />
        <meta name="keywords" content="AI video generator, video creation, automated video editing, AI voice synthesis, video marketing, content creation" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-video-generator" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Zion AI Video Generator",
            "description": "AI-powered video creation platform with automated script generation, voice synthesis, and editing",
            "url": "https://ziontechgroup.com/zion-ai-video-generator",
            "applicationCategory": "MultimediaApplication",
            "operatingSystem": "Web, iOS, Android",
            "offers": {
              "@type": "Offer",
              "price": "49",
              "priceCurrency": "USD",
              "priceValidUntil": "2025-12-31"
            },
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <Video className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">AI-Powered Video Creation</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Zion <span className="text-cyan-400">AI Video Generator</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Create professional videos in minutes, not hours. Our AI-powered platform generates scripts, 
                synthesizes voices, and edits videos automatically. Perfect for marketing, education, and social media.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Free 7-Day Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  <Play className="w-5 h-5 mr-2 inline" />
                  Watch Demo
                </Link>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">80%</div>
                  <div className="text-gray-300 text-sm">Time Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-gray-300 text-sm">Voice Options</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">10M+</div>
                  <div className="text-gray-300 text-sm">Assets Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">4K</div>
                  <div className="text-gray-300 text-sm">Export Quality</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge AI technology to create professional videos with minimal effort and maximum impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Perfect for Every Use Case
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Whether you're creating marketing content, educational videos, or social media posts, our AI has you covered.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{useCase.description}</p>
                  <ul className="space-y-1 text-sm text-cyan-400">
                    {useCase.examples.map((example, idx) => (
                      <li key={idx}>• {example}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your video creation needs. All plans include 7-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-cyan-500/50 ring-2 ring-cyan-500/20 relative' 
                      : 'border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Content Creators Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how creators and businesses are revolutionizing their video content with Zion AI Video Generator
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-12 border border-cyan-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Create Amazing Videos?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of creators already using Zion AI Video Generator to produce professional content. 
                Start your free 7-day trial today - no credit card required.
              </p>
              
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email Support</h3>
                  <p className="text-cyan-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone Support</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Headphones className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Live Chat</h3>
                  <p className="text-cyan-400">24/7 Available</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  <Play className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAiVideoGeneratorPage;