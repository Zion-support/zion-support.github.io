import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  ShieldCheckIcon, 
  EyeIcon, 
  CpuChipIcon, 
  ChartBarIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ExclamationTriangleIcon,
  GlobeAltIcon,
  CogIcon
} from '@heroicons/react/24/outline';

const ZionAIContentModeratorPage: React.FC = () => {
  const features = [
    {
      icon: CpuChipIcon,
      title: 'AI-Powered Detection',
      description: 'Advanced machine learning algorithms detect inappropriate content across text, images, and videos with 99.5% accuracy'
    },
    {
      icon: ClockIcon,
      title: 'Real-time Processing',
      description: 'Process content in milliseconds with our high-performance infrastructure and edge computing'
    },
    {
      icon: ChartBarIcon,
      title: 'Confidence Scoring',
      description: 'Get detailed confidence scores for each moderation decision to fine-tune your content policies'
    },
    {
      icon: CogIcon,
      title: 'Custom Rules Engine',
      description: 'Create custom moderation rules and policies tailored to your specific business needs and brand guidelines'
    },
    {
      icon: GlobeAltIcon,
      title: 'Multi-language Support',
      description: 'Moderate content in 50+ languages with cultural context understanding and regional compliance'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Enterprise Security',
      description: 'Bank-level security with data encryption, GDPR compliance, and SOC 2 Type II certification'
    }
  ];

  const contentTypes = [
    {
      type: 'Text Content',
      icon: '📝',
      description: 'Moderate comments, posts, messages, and user-generated text content',
      features: ['Toxic language detection', 'Spam filtering', 'Hate speech detection', 'Profanity filtering']
    },
    {
      type: 'Images',
      icon: '🖼️',
      description: 'Analyze images for inappropriate content, violence, and policy violations',
      features: ['Nudity detection', 'Violence detection', 'Weapon identification', 'Drug content detection']
    },
    {
      type: 'Videos',
      icon: '🎥',
      description: 'Process video content frame by frame for comprehensive moderation',
      features: ['Real-time video analysis', 'Audio content analysis', 'Scene detection', 'Motion analysis']
    },
    {
      type: 'Live Streams',
      icon: '📺',
      description: 'Monitor live streaming content with real-time moderation capabilities',
      features: ['Live content analysis', 'Real-time alerts', 'Automatic blocking', 'Stream quality monitoring']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 199,
      period: 'month',
      description: 'Perfect for small platforms and communities',
      features: [
        'Up to 100K content items/month',
        'Text and image moderation',
        'Basic analytics dashboard',
        'Email support',
        'Standard API access',
        'Basic custom rules'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: 599,
      period: 'month',
      description: 'Ideal for growing platforms with advanced needs',
      features: [
        'Up to 1M content items/month',
        'Text, image, and video moderation',
        'Advanced analytics & reporting',
        'Priority support',
        'Advanced API access',
        'Custom rule engine',
        'A/B testing',
        'Real-time monitoring'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 1499,
      period: 'month',
      description: 'For large platforms with complex moderation requirements',
      features: [
        'Unlimited content items',
        'All content types supported',
        'Custom analytics & dashboards',
        '24/7 dedicated support',
        'Custom model training',
        'White-label solution',
        'SLA guarantee',
        'On-premise deployment option'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Reduced Manual Work',
      description: 'Automate 95% of content moderation tasks, freeing up your team for strategic work',
      icon: '⚡',
      stat: '95%'
    },
    {
      title: 'Faster Response Time',
      description: 'Process content in milliseconds instead of hours or days',
      icon: '🚀',
      stat: '<100ms'
    },
    {
      title: 'Improved Accuracy',
      description: 'AI-powered detection with 99.5% accuracy reduces false positives and missed violations',
      icon: '🎯',
      stat: '99.5%'
    },
    {
      title: 'Cost Savings',
      description: 'Reduce moderation costs by up to 80% while improving content quality',
      icon: '💰',
      stat: '80%'
    }
  ];

  return (
    <>
      <SEOHead 
        title="Zion AI Content Moderator Pro - Automated Content Moderation Platform"
        description="Automate content moderation with AI-powered detection across text, images, and videos. 99.5% accuracy, real-time processing, and enterprise security. Start your free trial today."
        keywords="AI content moderation, automated moderation, content filtering, image moderation, video moderation, text analysis, content safety"
        canonicalUrl="https://ziontechgroup.com/zion-ai-content-moderator"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-slate-900 to-orange-900/30"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent leading-tight">
                  Zion AI Content Moderator Pro
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Automate content moderation with AI-powered detection across text, images, and videos. 99.5% accuracy, real-time processing, and enterprise security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4">
                <a 
                  href="#pricing"
                  className="relative group bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-red-500/25 hover:shadow-red-500/40"
                >
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </a>
                <a 
                  href="#demo"
                  className="border-2 border-red-400 text-red-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-red-400/25"
                >
                  Watch Demo
                </a>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-400 mb-1 lg:mb-2">99.5%</div>
                  <div className="text-gray-300 text-xs sm:text-sm lg:text-base">Accuracy Rate</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400 mb-1 lg:mb-2">&lt;100ms</div>
                  <div className="text-gray-300 text-xs sm:text-sm lg:text-base">Response Time</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 mb-1 lg:mb-2">50+</div>
                  <div className="text-gray-300 text-xs sm:text-sm lg:text-base">Languages</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-400 mb-1 lg:mb-2">1B+</div>
                  <div className="text-gray-300 text-xs sm:text-sm lg:text-base">Items Processed</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Types Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Multi-Media <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Content Support</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Moderate all types of content with our comprehensive AI-powered detection system.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contentTypes.map((content, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 sm:p-8 rounded-xl border border-slate-700 hover:border-red-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/20">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {content.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-red-300 transition-colors">
                    {content.type}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors text-sm sm:text-base">
                    {content.description}
                  </p>
                  <ul className="space-y-2">
                    {content.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Advanced <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Powerful AI capabilities designed to keep your platform safe and compliant.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 sm:p-8 rounded-xl border border-slate-700 hover:border-orange-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-orange-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Proven <span className="bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">Results</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                See the measurable impact our AI content moderation platform delivers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 sm:p-8 rounded-xl border border-slate-700 hover:border-yellow-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/20 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors">
                    {benefit.stat}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white group-hover:text-yellow-300 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm sm:text-base">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Flexible <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Choose the perfect plan for your content moderation needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-6 sm:p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-red-500 shadow-red-500/20' 
                    : 'border-slate-700 hover:border-red-500 hover:shadow-red-500/20'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-red-400">${plan.price}</span>
                      <span className="text-gray-400 ml-1">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact"
                    className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white shadow-lg shadow-red-500/25'
                        : 'border-2 border-red-400 text-red-300 hover:bg-red-400 hover:text-white'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-red-900/40 via-slate-900 to-orange-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Ready to Automate Your Content Moderation?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Join thousands of platforms already using our AI-powered content moderation to keep their communities safe and compliant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="relative group bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-red-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
              <a 
                href="tel:+13024640950"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAIContentModeratorPage;