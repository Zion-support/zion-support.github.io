import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { 
  SparklesIcon, 
  CheckCircleIcon, 
  ArrowRightIcon, 
  StarIcon, 
  ClockIcon, 
  BoltIcon,
  ChartBarIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  EyeIcon,
  CpuChipIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const AIContentGeneratorPage: React.FC = () => {
  const features = [
    'Unlimited content generation',
    'SEO optimization & analytics',
    '50+ languages supported',
    'Brand voice customization',
    'Real-time optimization',
    'Multi-platform publishing',
    'Content templates library',
    'Plagiarism detection',
    'A/B testing capabilities',
    'Team collaboration tools'
  ];

  const benefits = [
    'Save 80% time on content creation',
    'Increase engagement by 40%',
    'Improve SEO rankings by 60%',
    'Maintain consistent brand voice',
    'Reduce content costs by 70%',
    'Scale content production 10x'
  ];

  const useCases = [
    'Blog posts and articles',
    'Social media content',
    'Email marketing campaigns',
    'Product descriptions',
    'Ad copy and landing pages',
    'Technical documentation',
    'Press releases',
    'Website content'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$99/mo',
      originalPrice: '$199/mo',
      features: [
        '1,000 content pieces/month',
        '5 languages',
        'Basic SEO optimization',
        'Email support',
        'Standard templates'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: '$199/mo',
      originalPrice: '$399/mo',
      features: [
        'Unlimited content generation',
        '50+ languages',
        'Advanced SEO optimization',
        'Priority support',
        'Premium templates',
        'Brand voice training',
        'Analytics dashboard',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499/mo',
      originalPrice: '$999/mo',
      features: [
        'Everything in Pro',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Advanced analytics',
        'Team management',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '10M+', label: 'Content Pieces Generated' },
    { number: '50K+', label: 'Happy Customers' },
    { number: '95%', label: 'Accuracy Rate' },
    { number: '40%', label: 'Engagement Increase' },
    { number: '80%', label: 'Time Saved' },
    { number: '60%', label: 'SEO Improvement' }
  ];

  return (
    <>
      <SEOHead
        title="AI Content Generator Pro - Zion Tech Group"
        description="Generate high-quality content for blogs, social media, and marketing materials using advanced AI with 95% accuracy. Save 80% time on content creation with our intelligent content generator."
        keywords="ai content generator, content creation, blog writing, social media content, marketing copy, seo content, automated writing, content marketing"
        canonicalUrl="https://ziontechgroup.com/ai-content-generator"
      />
      
      <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0 futuristic-bg"></div>
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="absolute inset-0 cyber-circuit"></div>
        
        {/* Quantum Particles */}
        <div className="quantum-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="quantum-particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}></div>
          ))}
        </div>

        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center neon-border-animated">
                  <SparklesIcon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 holographic-text cyber-glitch" data-text="AI CONTENT GENERATOR PRO">
                AI CONTENT GENERATOR PRO
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 matrix-text">
                Generate high-quality content for blogs, social media, and marketing materials using advanced AI with 95% accuracy and real-time optimization.
              </p>
              <div className="flex items-center justify-center mt-6 space-x-4">
                <div className="flex items-center text-green-400">
                  <StarIcon className="w-5 h-5 fill-current mr-1" />
                  <span className="font-semibold">4.9/5 Rating</span>
                </div>
                <div className="flex items-center text-cyan-400">
                  <BoltIcon className="w-5 h-5 mr-1" />
                  <span className="font-semibold">50% OFF</span>
                </div>
                <div className="flex items-center text-purple-400">
                  <ClockIcon className="w-5 h-5 mr-1" />
                  <span className="font-semibold">Free Trial</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto px-4 mb-16">
              {stats.map((stat, index) => (
                <div key={index} 
                  className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10 group"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400 mb-1 lg:mb-2 group-hover:text-cyan-300 transition-colors neon-text">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-xs sm:text-sm lg:text-base group-hover:text-white transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Powerful <span className="holographic-text neon-text">Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Everything you need to create, optimize, and manage high-quality content at scale.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} 
                  className="group holographic-card-enhanced p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  <div className="flex items-center mb-4">
                    <CheckCircleIcon className="w-6 h-6 text-cyan-400 mr-3 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {feature}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="relative py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Why Choose <span className="holographic-text neon-text">AI Content Generator Pro</span>?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Transform your content strategy with AI-powered intelligence and automation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} 
                  className="group flex items-start space-x-4 p-6 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-green-500/10"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="relative">
                    <ArrowRightIcon className="w-6 h-6 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-green-400 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                  <span className="text-gray-300 font-medium text-base group-hover:text-white transition-colors">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="relative py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Perfect For <span className="holographic-text neon-text">Every Content Need</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                From blog posts to social media, create any type of content with ease.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} 
                  className="group p-6 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 border border-slate-700 hover:border-purple-500"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <DocumentTextIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {useCase}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="relative py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Choose Your <span className="holographic-text neon-text">Plan</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Flexible pricing options to fit your content needs and budget.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={plan.name} 
                  className={`group relative p-8 rounded-xl transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'holographic-card-enhanced border-2 border-cyan-500 shadow-xl shadow-cyan-500/20' 
                      : 'bg-slate-800/50 border border-slate-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <span className="text-4xl font-bold text-cyan-400 neon-text">{plan.price}</span>
                      <span className="text-lg text-gray-400 line-through">{plan.originalPrice}</span>
                    </div>
                    <div className="flex items-center justify-center text-sm text-green-400">
                      <BoltIcon className="w-4 h-4 mr-1" />
                      <span>50% OFF</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/contact"
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                      plan.popular
                        ? 'cyber-button-enhanced'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 holographic-text">
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 matrix-text">
              Start your free trial today and experience the power of AI-driven content creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"
                className="relative group bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-cyan-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Link>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-300">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIContentGeneratorPage;