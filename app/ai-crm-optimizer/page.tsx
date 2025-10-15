import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CogIcon, 
  ChartBarIcon, 
  UserGroupIcon, 
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  ClockIcon,
  ShieldCheckIcon,
  BoltIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

const AICRMOptimizerPage: React.FC = () => {
  const features = [
    {
      icon: CpuChipIcon,
      title: 'AI Lead Scoring',
      description: 'Advanced machine learning algorithms analyze lead behavior and predict conversion probability with 95% accuracy.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BoltIcon,
      title: 'Automated Follow-ups',
      description: 'Intelligent email sequences triggered by lead behavior, ensuring no opportunity is missed.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: ChartBarIcon,
      title: 'Sales Pipeline Optimization',
      description: 'AI-powered insights help optimize your sales process and identify bottlenecks in real-time.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: UserGroupIcon,
      title: 'Customer Segmentation',
      description: 'Automatically segment customers based on behavior, preferences, and purchase history.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Data Security',
      description: 'Enterprise-grade security with end-to-end encryption and GDPR compliance.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: ClockIcon,
      title: 'Real-time Analytics',
      description: 'Live dashboards and reports updated in real-time for instant decision making.',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 contacts',
        'Basic AI lead scoring',
        'Email automation (50 sequences)',
        'Standard analytics',
        'Email support',
        'Mobile app access'
      ],
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Most popular for growing businesses',
      features: [
        'Up to 10,000 contacts',
        'Advanced AI lead scoring',
        'Unlimited email sequences',
        'Advanced analytics & reporting',
        'Priority support',
        'API access',
        'Custom integrations',
        'Team collaboration tools'
      ],
      popular: true,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited contacts',
        'Custom AI models',
        'Advanced automation',
        'Custom analytics',
        'Dedicated support',
        'White-label options',
        'Custom development',
        'SLA guarantee'
      ],
      popular: false,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Sales Director',
      company: 'TechCorp Inc.',
      content: 'AI CRM Optimizer increased our conversion rate by 40% and reduced our sales cycle by 25%. The AI lead scoring is incredibly accurate.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'StartupXYZ',
      content: 'The automated follow-ups have been a game-changer. We never miss an opportunity anymore, and our team is more productive.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Manager',
      company: 'GrowthCo',
      content: 'The customer segmentation feature helped us personalize our campaigns and increase customer lifetime value by 35%.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead
        title="AI CRM Optimizer - Advanced Customer Relationship Management"
        description="Transform your sales process with AI-powered CRM optimization. Advanced lead scoring, automated follow-ups, and intelligent customer segmentation for maximum conversion rates."
        keywords="AI CRM, lead scoring, sales automation, customer relationship management, sales optimization, AI-powered CRM, automated follow-ups"
        canonicalUrl="https://ziontechgroup.com/ai-crm-optimizer"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-slate-900 to-red-900/30"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff6600' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                <CpuChipIcon className="w-5 h-5 text-orange-400 mr-2" />
                <span className="text-orange-400 font-medium">AI-Powered CRM</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                  AI CRM Optimizer
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your sales process with intelligent customer relationship management. 
                AI-powered lead scoring, automated follow-ups, and predictive analytics for maximum conversion rates.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="btn-futuristic px-8 py-4 text-lg">
                  Start Free Trial
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-orange-400 text-orange-300 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300">
                  Watch Demo
                </button>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">95%</div>
                  <div className="text-gray-300 text-sm">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">40%</div>
                  <div className="text-gray-300 text-sm">Conversion Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">25%</div>
                  <div className="text-gray-300 text-sm">Faster Sales Cycle</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">10K+</div>
                  <div className="text-gray-300 text-sm">Happy Customers</div>
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
                Powerful <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">AI Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge artificial intelligence to optimize every aspect of your customer relationship management.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="glass-card p-8 hover:scale-105 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-6 neon-glow`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
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
                Simple <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`glass-card p-8 relative ${plan.popular ? 'ring-2 ring-orange-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-orange-400">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full btn-futuristic py-3 ${plan.popular ? 'bg-gradient-to-r from-orange-500 to-red-500' : ''}`}>
                    Start Free Trial
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                What Our <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Customers Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses that have transformed their sales process with AI CRM Optimizer.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="glass-card p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-orange-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/40 via-slate-900 to-red-900/40"></div>
          <div className="absolute top-10 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Ready to Transform Your Sales Process?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and see the difference AI can make in your customer relationship management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Start Free Trial (14 days)
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Sales
              </button>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-4">Questions? Contact our team:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <a href="tel:+13024640950" className="text-orange-400 hover:text-orange-300">
                  📞 +1 (302) 464-0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="text-orange-400 hover:text-orange-300">
                  ✉️ kleber@ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICRMOptimizerPage;