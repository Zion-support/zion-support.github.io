'use client'
import React from 'react'
import SEOHead from '../components/SEOHead'
import { 
  UserGroupIcon, 
  ChartBarIcon, 
  CogIcon, 
  CheckCircleIcon,
  StarIcon,
  ShieldCheckIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
const AICRMOptimizerPage: React.FC = () => {
  const features = [
    {
      icon: UserGroupIcon,
      title: 'Smart Lead Scoring',
      description: 'AI-powered lead scoring that analyzes customer behavior, engagement patterns, and demographic data to prioritize high-value prospects.',
      benefits: ['Increase conversion rates by 40%', 'Reduce sales cycle by 25%', 'Improve lead quality by 60%']
    },
    {
      icon: ChartBarIcon,
      title: 'Predictive Analytics',
      description: 'Advanced machine learning models predict customer lifetime value, churn probability, and optimal contact timing.',
      benefits: ['Predict customer behavior with 85% accuracy', 'Reduce churn by 30%', 'Increase revenue per customer by 45%']
    },
    {
      icon: CogIcon,
      title: 'Automated Workflows',
      description: 'Intelligent automation that triggers personalized follow-ups, email sequences, and task assignments based on customer actions.',
      benefits: ['Save 15 hours per week', 'Improve response time by 70%', 'Increase customer satisfaction by 35%']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Data Security',
      description: 'Enterprise-grade security with end-to-end encryption, GDPR compliance, and SOC 2 Type II certification.',
      benefits: ['100% data encryption', 'GDPR compliant', 'SOC 2 certified']
    }
  ]
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 contacts',
        'Basic AI lead scoring',
        'Email automation',
        'Standard reporting',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 10,000 contacts',
        'Advanced AI analytics',
        'Multi-channel automation',
        'Custom dashboards',
        'Priority support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited contacts',
        'Custom AI models',
        'Advanced integrations',
        'Dedicated account manager',
        '24/7 phone support',
        'Custom training'
      ],
      popular: false
    }
  ]
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'Sales Director',
      content: 'AI CRM Optimizer increased our conversion rates by 40% and reduced our sales cycle by 25%. The predictive analytics are incredibly accurate.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'GrowthCorp',
      role: 'VP of Sales',
      content: 'The automated workflows save us 15 hours per week. Our team can focus on high-value activities while AI handles the routine tasks.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'ScaleUp Solutions',
      role: 'Marketing Manager',
      content: 'The lead scoring is spot-on. We can now identify high-value prospects before they even express interest, giving us a huge competitive advantage.',
      rating: 5
    }
  ]
  return (
    <>
      <SEOHead 
        title="AI CRM Optimizer - Smart Customer Relationship Management | Zion Tech Group"
        description="Transform your sales process with AI-powered CRM optimization. Increase conversion rates by 40%, reduce sales cycle by 25%, and boost revenue with intelligent automation."
        keywords="AI CRM, customer relationship management, lead scoring, predictive analytics, sales automation, CRM optimization"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <SparklesIcon className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-300 text-sm font-medium">AI-Powered CRM Solution</div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  AI CRM Optimizer
                </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your sales process with intelligent automation, predictive analytics, and AI-powered lead scoring that increases conversion rates by 40%.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
                  <div className="text-gray-300 text-sm">Conversion Increase</div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">25%</div>
                  <div className="text-gray-300 text-sm">Sales Cycle Reduction</div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">85%</div>
                  <div className="text-gray-300 text-sm">Prediction Accuracy</div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">15h</div>
                  <div className="text-gray-300 text-sm">Time Saved/Week</div>
          </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Powerful <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">AI Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge artificial intelligence to optimize every aspect of your customer relationship management.
              </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <div key={index} className="group bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                        {feature.title}
                      <p className="text-gray-400 mb-4">
                        {feature.description}
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                            <span>{benefit}
                        ))}
                      </div>
              ))}
            </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Simple <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All plans include our core AI features and 24/7 support.
              </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-purple-500 shadow-purple-500/20' 
                    : 'border-slate-700 hover:border-purple-500 hover:shadow-purple-500/20'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}
                    <p className="text-gray-400 mb-4">{plan.description}
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-purple-400">{plan.price}
                      <span className="text-gray-400 ml-1">{plan.period}
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                        <span>{feature}
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                      : 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'
                  }`}>
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
              ))}
            </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                What Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Customers Say</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses that have transformed their sales process with AI CRM Optimizer.
              </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}
              ))}
            </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Transform Your CRM?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and see how AI can revolutionize your sales process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Sales
              </section>
      </>
  )
  }
export default AICRMOptimizerPage
                                                                                                </button>
                                                                                              </div>
                                                                                            </div>
                                                                                          </div>
                                                                                        </div>
                                                                                      </div>
                                                                                    </StarIcon>
                                                                                  </div>
                                                                                </div>
                                                                              </p>
                                                                            </span>
                                                                          </div>
                                                                        </span>
                                                                      </CheckCircleIcon>
                                                                    </li>
                                                                  </span>
                                                                </span>
                                                              </div>
                                                            </p>
                                                          </h3>
                                                        </div>
                                                      </span>
                                                    </div>
                                                  </p>
                                                </span>
                                              </div>
                                            </span>
                                          </CheckCircleIcon>
                                        </li>
                                      </ul>
                                    </p>
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </span>
      </span>
    </SparklesIcon>
  </div>
</div>