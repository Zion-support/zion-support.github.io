import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  EnvelopeIcon, 
  ChartBarIcon, 
  CpuChipIcon, 
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  ClockIcon,
  ShieldCheckIcon,
  BoltIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const AIEmailOptimizerPage: React.FC = () => {
  const features = [
    {
      icon: CpuChipIcon,
      title: 'AI Subject Line Optimization',
      description: 'Machine learning algorithms analyze your audience and optimize subject lines for maximum open rates.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: ClockIcon,
      title: 'Send Time Optimization',
      description: 'AI determines the optimal send times for each subscriber based on their engagement patterns.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: UserGroupIcon,
      title: 'Advanced Segmentation',
      description: 'Intelligent customer segmentation based on behavior, preferences, and engagement history.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: ChartBarIcon,
      title: 'Predictive Analytics',
      description: 'AI-powered insights predict customer behavior and optimize campaign performance in real-time.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BoltIcon,
      title: 'Automated A/B Testing',
      description: 'Continuous optimization through automated A/B testing of subject lines, content, and send times.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Deliverability Optimization',
      description: 'Advanced algorithms ensure maximum inbox placement and prevent spam folder delivery.',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5,000 subscribers',
        'Basic AI optimization',
        'Email templates (50)',
        'Basic analytics',
        'Email support',
        'Mobile app access'
      ],
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Most popular for growing businesses',
      features: [
        'Up to 25,000 subscribers',
        'Advanced AI optimization',
        'Unlimited templates',
        'Advanced analytics & reporting',
        'Priority support',
        'API access',
        'Custom integrations',
        'A/B testing automation'
      ],
      popular: true,
      color: 'from-pink-500 to-rose-500'
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited subscribers',
        'Custom AI models',
        'White-label options',
        'Custom analytics',
        'Dedicated support',
        'Custom development',
        'SLA guarantee',
        'Advanced security'
      ],
      popular: false,
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'Marketing Director',
      company: 'E-commerce Plus',
      content: 'AI Email Optimizer increased our open rates by 45% and click-through rates by 60%. The AI subject line optimization is incredible.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'CEO',
      company: 'TechStart Inc.',
      content: 'The send time optimization feature alone paid for itself in the first month. Our engagement rates have never been higher.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      role: 'Email Marketing Manager',
      company: 'RetailMax',
      content: 'The automated A/B testing saves us hours every week and consistently improves our campaign performance.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead
        title="AI Email Marketing Pro - Advanced Email Optimization"
        description="Transform your email marketing with AI-powered optimization. Advanced subject line optimization, send time optimization, and predictive analytics for maximum engagement and ROI."
        keywords="AI email marketing, email optimization, subject line optimization, send time optimization, email automation, email analytics, email marketing AI"
        canonicalUrl="https://ziontechgroup.com/ai-email-optimizer"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-900/30 via-slate-900 to-rose-900/30"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff0080' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
                <EnvelopeIcon className="w-5 h-5 text-pink-400 mr-2" />
                <span className="text-pink-400 font-medium">AI Email Marketing</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">
                  AI Email Marketing Pro
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your email marketing with AI-powered optimization. Advanced subject line optimization, 
                send time optimization, and predictive analytics for maximum engagement and ROI.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="btn-futuristic px-8 py-4 text-lg">
                  Start Free Trial
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-pink-400 text-pink-300 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-white transition-all duration-300">
                  Watch Demo
                </button>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">45%</div>
                  <div className="text-gray-300 text-sm">Open Rate Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">60%</div>
                  <div className="text-gray-300 text-sm">Click Rate Boost</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">35%</div>
                  <div className="text-gray-300 text-sm">Conversion Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">50K+</div>
                  <div className="text-gray-300 text-sm">Active Users</div>
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
                Powerful <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">AI Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge artificial intelligence to optimize every aspect of your email marketing campaigns.
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
                Simple <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business. All plans include a 30-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`glass-card p-8 relative ${plan.popular ? 'ring-2 ring-pink-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-pink-400">{plan.price}</span>
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
                  
                  <button className={`w-full btn-futuristic py-3 ${plan.popular ? 'bg-gradient-to-r from-pink-500 to-rose-500' : ''}`}>
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
                What Our <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">Customers Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses that have transformed their email marketing with AI Email Marketing Pro.
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
                    <div className="text-pink-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/40 via-slate-900 to-rose-900/40"></div>
          <div className="absolute top-10 left-10 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              Ready to Transform Your Email Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and see the difference AI can make in your email marketing campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic px-8 py-4 text-lg">
                Start Free Trial (30 days)
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Sales
              </button>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-4">Questions? Contact our team:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <a href="tel:+13024640950" className="text-pink-400 hover:text-pink-300">
                  📞 +1 (302) 464-0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="text-pink-400 hover:text-pink-300">
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

export default AIEmailOptimizerPage;