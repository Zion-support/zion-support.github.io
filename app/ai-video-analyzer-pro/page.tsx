import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  EyeIcon, 
  CheckCircleIcon, 
  PlayIcon, 
  ClockIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CogIcon,
  ArrowRightIcon,
  StarIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  GlobeAltIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const AIVideoAnalyzerProPage: React.FC = () => {
  const features = [
    {
      icon: EyeIcon,
      title: 'AI Video Analysis',
      description: 'Advanced AI-powered video content analysis with object detection and scene recognition',
      benefits: ['Object detection', 'Scene recognition', 'Content classification']
    },
    {
      icon: PlayIcon,
      title: 'Real-time Processing',
      description: 'Process videos in real-time with instant analysis and insights',
      benefits: ['Live analysis', 'Instant insights', 'Real-time feedback']
    },
    {
      icon: ClockIcon,
      title: 'Automated Metadata',
      description: 'Automatically generate comprehensive metadata and tags for your videos',
      benefits: ['Auto-tagging', 'Metadata extraction', 'Content indexing']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Content Moderation',
      description: 'AI-powered content moderation with safety and compliance checking',
      benefits: ['Safety scanning', 'Compliance checking', 'Inappropriate content detection']
    },
    {
      icon: ChartBarIcon,
      title: 'Analytics Dashboard',
      description: 'Comprehensive video analytics with performance metrics and insights',
      benefits: ['Performance metrics', 'Viewer insights', 'Engagement analysis']
    },
    {
      icon: CogIcon,
      title: 'Custom Workflows',
      description: 'Create custom analysis workflows tailored to your specific needs',
      benefits: ['Workflow automation', 'Custom rules', 'Batch processing']
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: 49,
      originalPrice: 99,
      period: 'month',
      description: 'Perfect for content creators',
      features: [
        'Up to 100 hours/month',
        'Basic AI analysis',
        'Email support',
        'Standard features',
        'HD processing',
        '1 user'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: 149,
      originalPrice: 299,
      period: 'month',
      description: 'Ideal for businesses',
      features: [
        'Up to 500 hours/month',
        'Advanced AI analysis',
        'Priority support',
        'All features',
        '4K processing',
        'Up to 10 users',
        'API access',
        'Custom workflows'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 399,
      originalPrice: 799,
      period: 'month',
      description: 'For large organizations',
      features: [
        'Unlimited hours',
        'Full AI suite',
        '24/7 dedicated support',
        'Custom features',
        '8K processing',
        'Unlimited users',
        'Advanced API access',
        'Custom integrations',
        'SLA guarantee',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      role: 'Content Manager',
      company: 'MediaCorp',
      content: 'AI Video Analyzer Pro has transformed how we process our video content. The AI analysis is incredibly accurate and saves us hours of manual work.',
      rating: 5
    },
    {
      name: 'Lisa Wang',
      role: 'Marketing Director',
      company: 'Brand Solutions',
      content: 'The real-time analysis helps us optimize our video content instantly. Our engagement rates have improved by 40% since using this platform.',
      rating: 5
    },
    {
      name: 'James Rodriguez',
      role: 'Video Producer',
      company: 'Creative Studio',
      content: 'The automated metadata generation is a game-changer. We can now organize and search our video library effortlessly.',
      rating: 5
    }
  ];

  const useCases = [
    {
      title: 'Content Creation',
      description: 'Analyze and optimize video content for better engagement and performance',
      icon: '🎬',
      benefits: ['Content optimization', 'Engagement analysis', 'Performance tracking']
    },
    {
      title: 'Security Monitoring',
      description: 'Monitor video feeds for security threats and suspicious activities',
      icon: '🔒',
      benefits: ['Threat detection', 'Anomaly detection', 'Real-time alerts']
    },
    {
      title: 'Education',
      description: 'Analyze educational videos for content quality and learning effectiveness',
      icon: '🎓',
      benefits: ['Content assessment', 'Learning analytics', 'Quality metrics']
    },
    {
      title: 'E-commerce',
      description: 'Analyze product videos for marketing effectiveness and customer engagement',
      icon: '🛍️',
      benefits: ['Product analysis', 'Marketing insights', 'Customer behavior']
    }
  ];

  return (
    <>
      <SEOHead
        title="AI Video Analyzer Pro - Intelligent Video Analysis | Zion Tech Group"
        description="Revolutionary AI-powered video analysis with real-time processing, content moderation, and comprehensive analytics. Transform your video workflow!"
        keywords="AI video analysis, video processing, content moderation, video analytics, object detection, scene recognition, video AI"
        canonicalUrl="https://ziontechgroup.com/ai-video-analyzer-pro"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-pink-900/30"></div>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-8">
                <EyeIcon className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-300 text-sm font-medium">AI-Powered Video Analysis</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  AI Video Analyzer Pro
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your video workflow with AI-powered analysis, real-time processing, 
                and intelligent insights that optimize your content performance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                  Watch Demo
                </button>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">Real-time</div>
                  <div className="text-gray-300 text-sm">Processing</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
                  <div className="text-gray-300 text-sm">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">4K/8K</div>
                  <div className="text-gray-300 text-sm">Video Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                  <div className="text-gray-300 text-sm">AI Analysis</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Powerful <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to analyze and optimize your video content
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Simple <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your video analysis needs. All plans include our core AI features with no hidden fees.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-purple-500 shadow-purple-500/20' 
                    : 'border-slate-700 hover:border-purple-500'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-6">{plan.description}</p>
                    
                    <div className="flex items-center justify-center mb-4">
                      <span className="text-5xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <span className="text-lg text-gray-400 line-through mr-2">${plan.originalPrice}</span>
                      <span className="text-sm text-green-400 font-semibold">
                        {Math.round((1 - plan.price / plan.originalPrice) * 100)}% OFF
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Perfect for <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Every Industry</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI video analysis solution adapts to your specific industry and use case
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                    {useCase.description}
                  </p>
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Trusted by <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Video Professionals</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about AI Video Analyzer Pro
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/40 via-slate-900 to-pink-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ready to Transform Your Video Workflow?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of video professionals already using AI Video Analyzer Pro to optimize their content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📞 <strong>Phone:</strong> +1 302 464 0950 | ✉️ <strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIVideoAnalyzerProPage;