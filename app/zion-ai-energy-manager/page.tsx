import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Battery, TrendingDown, Target, CheckCircle, Phone, Mail, BarChart, Settings, AlertTriangle, Clock, Users, DollarSign, Leaf, Activity, Shield } from 'lucide-react'

export default function ZionAiEnergyManagerPage() {
  const features = [
    {
      icon: Zap,
      title: 'Smart Energy Monitoring',
      description: 'Real-time energy consumption tracking across all devices and systems with AI-powered insights'
    },
    {
      icon: Battery,
      title: 'Predictive Maintenance',
      description: 'AI algorithms predict equipment failures and optimize maintenance schedules to prevent costly downtime'
    },
    {
      icon: TrendingDown,
      title: 'Cost Optimization',
      description: 'Automatically identify energy waste and implement cost-saving measures with detailed ROI tracking'
    },
    {
      icon: Target,
      title: 'Carbon Footprint Tracking',
      description: 'Monitor and reduce your environmental impact with comprehensive carbon footprint analysis'
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive energy usage reports and predictive analytics for informed decision making'
    },
    {
      icon: Settings,
      title: 'Automated Controls',
      description: 'Smart automation systems that adjust energy usage based on occupancy, weather, and demand patterns'
    }
  ];

  const benefits = [
    'Reduce energy costs by up to 40%',
    'Decrease carbon footprint by 60%',
    'Prevent equipment failures with 95% accuracy',
    'Save 20+ hours per week on energy management',
    'Achieve sustainability goals faster',
    'Increase equipment lifespan by 30%'
  ];

  const pricingPlans = [
    {
      name: 'Small Business',
      price: '$199',
      period: '/month',
      description: 'Perfect for small offices and retail spaces',
      features: [
        'Up to 50 devices',
        'Basic energy monitoring',
        'Monthly reports',
        'Email support',
        'Mobile app access',
        'Basic automation'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'Ideal for large buildings and facilities',
      features: [
        'Unlimited devices',
        'Advanced AI analytics',
        'Real-time monitoring',
        'Priority support',
        'Custom dashboards',
        'API integration',
        'Advanced automation',
        'Multi-site management'
      ],
      popular: true
    },
    {
      name: 'Industrial',
      price: '$999',
      period: '/month',
      description: 'For manufacturing and industrial facilities',
      features: [
        'Everything in Enterprise',
        'Custom AI models',
        '24/7 monitoring',
        'Dedicated support',
        'White-label solution',
        'Custom integrations',
        'SLA guarantee',
        'On-site training'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Office Buildings',
      description: 'Optimize HVAC, lighting, and equipment usage for maximum efficiency',
      icon: Users,
      savings: '35% energy reduction'
    },
    {
      title: 'Manufacturing',
      description: 'Monitor production equipment and optimize energy consumption during peak hours',
      icon: Settings,
      savings: '45% cost savings'
    },
    {
      title: 'Retail Stores',
      description: 'Smart lighting and climate control based on customer traffic patterns',
      icon: Target,
      savings: '30% energy savings'
    },
    {
      title: 'Data Centers',
      description: 'Optimize cooling systems and server utilization for maximum efficiency',
      icon: Activity,
      savings: '50% cooling costs'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      company: 'GreenTech Solutions',
      role: 'Facilities Manager',
      content: 'Zion AI Energy Manager has transformed our energy efficiency. We\'ve reduced costs by 40% and significantly improved our sustainability metrics. The ROI was achieved in just 3 months.',
      rating: 5
    },
    {
      name: 'David Chen',
      company: 'Manufacturing Corp',
      role: 'Operations Director',
      content: 'The predictive maintenance features have been invaluable. We\'ve prevented several major equipment failures and reduced maintenance costs by 60%. The system pays for itself.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      company: 'Retail Chain',
      role: 'Sustainability Manager',
      content: 'Our carbon footprint has decreased by 60% since implementing this system. The automated controls and AI insights have made energy management effortless and highly effective.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Zion AI Energy Manager - Smart Energy Management | Zion Tech Group</title>
        <meta name="description" content="Optimize energy consumption with our AI-powered energy management platform. Reduce costs by 40%, decrease carbon footprint by 60%, and achieve sustainability goals. Starting at $199/month." />
        <meta name="keywords" content="energy management, AI energy optimization, smart energy, energy efficiency, carbon footprint, sustainability, energy monitoring" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-4">
              🌱 Reduce Energy Costs by 40%
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Zion AI Energy Manager
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your energy management with our AI-powered platform. Monitor, optimize, and automate 
            energy consumption to reduce costs, improve sustainability, and maximize efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="tel:+13024640950" 
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/40 transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="px-8 py-4 border-2 border-green-400 text-green-400 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
            >
              <Mail className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
            <div className="text-gray-300 text-sm">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">60%</div>
            <div className="text-gray-300 text-sm">Carbon Footprint Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
            <div className="text-gray-300 text-sm">Predictive Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
            <div className="text-gray-300 text-sm">Happy Clients</div>
          </div>
        </div>

        {/* Features Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful AI Energy Management
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our advanced AI technology provides comprehensive energy optimization and management capabilities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-green-400/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Perfect for Every Industry
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our AI energy management solution works across all industries and facility types
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{useCase.description}</p>
                <div className="text-green-400 font-bold text-sm">{useCase.savings}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your Energy Management
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of AI-powered energy optimization
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-2xl p-8 border border-green-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Proven Results</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Average Cost Savings</span>
                  <span className="text-green-400 font-bold text-xl">40%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Carbon Footprint Reduction</span>
                  <span className="text-cyan-400 font-bold text-xl">60%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Predictive Accuracy</span>
                  <span className="text-blue-400 font-bold text-xl">95%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Time Saved Weekly</span>
                  <span className="text-purple-400 font-bold text-xl">20+ hours</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Energy Plan
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed for businesses of all sizes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'border-green-400/50 shadow-2xl shadow-green-500/20' 
                  : 'border-white/10 hover:border-green-400/30'
              }`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-green-500 to-cyan-500 text-white text-center py-2 px-4 rounded-full text-sm font-semibold mb-6 -mt-4">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-green-400 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-cyan-500 text-white hover:from-green-600 hover:to-cyan-600 shadow-lg shadow-green-500/25'
                      : 'border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Energy Managers
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See what our clients are saying about Zion AI Energy Manager
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-green-400/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Zap key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-white/10 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-green-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-green-500/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Optimize Your Energy?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join 500+ businesses that have already transformed their energy management with our AI platform. 
              Start your free trial today and see the savings in your first month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/40 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-green-400 text-green-400 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
            </div>
            <div className="text-sm text-gray-400">
              <p>✓ 30-day free trial • ✓ No setup fees • ✓ Cancel anytime</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}