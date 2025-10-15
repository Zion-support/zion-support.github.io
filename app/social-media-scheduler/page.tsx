import { 
  UserGroupIcon,SparklesIcon, 
  CheckCircleIcon, 
  StarIcon
} from '@heroicons/react/24/outline';
'use client';
import SEOHead from '../components/SEOHead';

const SocialMediaSchedulerPage: React.FC = () => {
  const features = [
    {
      icon: UserGroupIcon,
      title: 'Smart Scheduling',
      description: 'AI-powered scheduling that determines optimal posting times for maximum engagement across all platforms.',
      benefits: ['40% higher engagement', 'Optimal timing analysis', 'Multi-platform sync', 'Timezone optimization']
    },
    {
      icon: UserGroupIcon,
      title: 'Content Optimization',
      description: 'AI analyzes your content and suggests improvements for better performance and engagement.',
      benefits: ['25% higher reach', 'Hashtag optimization', 'Content suggestions', 'Performance prediction']
    },
    {
      icon: UserGroupIcon,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and reporting to track performance across all your social media platforms.',
      benefits: ['Real-time analytics', 'ROI tracking', 'Audience insights', 'Competitor analysis']
    },
    {
      icon: UserGroupIcon,
      title: 'Multi-Platform Management',
      description: 'Manage all your social media accounts from one dashboard with platform-specific optimizations.',
      benefits: ['8+ platforms supported', 'Bulk posting', 'Content recycling', 'Cross-platform analytics']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for individuals',
      features: [
        'Up to 3 social accounts',
        '30 posts per month',
        'Basic scheduling',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for small businesses',
      features: [
        'Up to 10 social accounts',
        'Unlimited posts',
        'AI optimization',
        'Priority support',
        'Advanced analytics',
        'Content calendar',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$149',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited accounts',
        'White-label solution',
        'Custom integrations',
        'Dedicated support',
        'Advanced reporting',
        'API access',
        'Custom training'
      ],
      popular: false
    }
  ];

  const platforms = [
    { name: 'Facebook', description: 'Posts, stories, and ads management' },
    { name: 'Instagram', description: 'Feed posts, stories, and reels' },
    { name: 'Twitter', description: 'Tweets, threads, and replies' },
    { name: 'LinkedIn', description: 'Posts, articles, and company updates' },
    { name: 'TikTok', description: 'Videos and trending content' },
    { name: 'YouTube', description: 'Video uploads and community posts' },
    { name: 'Pinterest', description: 'Pins and boards management' },
    { name: 'Tumblr', description: 'Posts and reblogs' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Digital Marketing Co.',
      role: 'Social Media Manager',
      content: 'Social Media Scheduler has transformed our social media strategy. The AI optimization increased our engagement by 40% and saved us 10 hours per week.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'E-commerce Solutions',
      role: 'Marketing Director',
      content: 'The multi-platform management is incredible. We can now manage all our social accounts from one place, and the analytics are incredibly detailed.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Creative Agency',
      role: 'Content Manager',
      content: 'The content optimization suggestions are spot-on. Our posts are performing much better, and the scheduling feature is a game-changer.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="Social Media Scheduler - AI-Powered Social Media Management | Zion Tech Group"
        description="Streamline your social media with AI-powered scheduling and optimization. Increase engagement by 40% and save 10 hours per week."
        keywords="social media scheduler, social media management, content scheduling, social media automation, AI optimization"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-900/30 via-slate-900 to-orange-900/30"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
                <SparklesIcon className="w-5 h-5 text-pink-400 mr-2" />
                <span className="text-pink-300 text-sm font-medium">AI-Powered Social Media</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Social Media Scheduler
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Streamline your social media strategy with AI-powered scheduling, content optimization, and multi-platform management.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-pink-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-pink-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-pink-400 text-pink-300 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-white transition-all duration-300">
                  View Demo
                </button>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">40%</div>
                  <div className="text-gray-300 text-sm">Higher Engagement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">8+</div>
                  <div className="text-gray-300 text-sm">Platforms</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">10h</div>
                  <div className="text-gray-300 text-sm">Time Saved/Week</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">AI</div>
                  <div className="text-gray-300 text-sm">Optimization</div>
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
                Powerful <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage and optimize your social media presence across all platforms.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <div key={index} className="group bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 mb-4">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">Supported Platforms</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Manage all your social media accounts from one powerful dashboard.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-pink-300 transition-colors">
                    {platform.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {platform.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Simple <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your social media management needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-pink-500 shadow-pink-500/20' 
                    : 'border-slate-700 hover:border-pink-500 hover:shadow-pink-500/20'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-pink-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-pink-600 to-orange-600 text-white hover:from-pink-700 hover:to-orange-700'
                      : 'border-2 border-pink-400 text-pink-300 hover:bg-pink-400 hover:text-white'
                  }`}>
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
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
                What Our <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">Customers Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of social media managers who trust our platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-pink-900/40 via-slate-900 to-orange-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
              Ready to Transform Your Social Media?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and see how AI can revolutionize your social media strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-pink-500/25">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SocialMediaSchedulerPage;