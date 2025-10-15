import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon, 
  ClockIcon, 
  ChartBarIcon, 
  UserGroupIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  StarIcon,
  GlobeAltIcon,
  CogIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const AITimeTrackerPage: React.FC = () => {
  const features = [
    'AI-powered time tracking',
    'Automatic activity detection',
    'Smart productivity insights',
    'Team performance analytics',
    'Project time estimation',
    'Billing & invoicing integration',
    'Mobile & desktop apps',
    'Offline time tracking',
    'Custom reporting',
    'API & integrations'
  ];

  const pricingPlans = [
    {
      name: 'Solo',
      price: '$9',
      period: '/month',
      description: 'Perfect for freelancers',
      features: [
        'Unlimited time tracking',
        'Basic reporting',
        'Mobile app',
        'Email support',
        '1 project'
      ],
      popular: false
    },
    {
      name: 'Team',
      price: '$29',
      period: '/month',
      description: 'Ideal for small teams',
      features: [
        'Up to 10 team members',
        'Advanced analytics',
        'Project management',
        'Priority support',
        'Unlimited projects',
        'Team collaboration',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$79',
      period: '/month',
      description: 'For growing companies',
      features: [
        'Unlimited team members',
        'Advanced AI insights',
        'Custom integrations',
        'White-label options',
        '24/7 phone support',
        'Advanced security',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: ClockIcon,
      title: 'Save 2+ Hours Daily',
      description: 'Automatic time tracking eliminates manual entry and increases accuracy'
    },
    {
      icon: ChartBarIcon,
      title: 'Boost Productivity 25%',
      description: 'AI insights help identify time-wasting activities and optimize workflows'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Accurate Billing',
      description: 'Precise time tracking ensures you bill for every billable hour'
    },
    {
      icon: UserGroupIcon,
      title: 'Team Insights',
      description: 'Comprehensive analytics help manage team performance and workload'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Rodriguez',
      role: 'Freelance Developer',
      company: 'CodeCraft Studio',
      content: 'AI Time Tracker increased my billable hours by 20% and saved me 3 hours per day on manual tracking.',
      rating: 5
    },
    {
      name: 'Maria Santos',
      role: 'Project Manager',
      company: 'Digital Agency Pro',
      content: 'The AI insights are game-changing. We identified productivity bottlenecks and improved team efficiency by 30%.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'CEO',
      company: 'StartupTech',
      content: 'Best time tracking solution we\'ve used. The automatic detection and smart reporting features are incredible.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead
        title="AI Time Tracker Pro - Smart Time Management & Productivity Analytics | Zion Tech Group"
        description="Revolutionary AI-powered time tracking with automatic activity detection, smart productivity insights, and team analytics. Boost productivity by 25%."
        keywords="AI time tracker, automatic time tracking, productivity analytics, team time management, billable hours, time tracking software"
        canonicalUrl="https://ziontechgroup.com/ai-time-tracker"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-700 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6">
                <StarIcon className="w-4 h-4 mr-2" />
                #1 AI Time Tracking Platform
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                AI Time Tracker
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Pro
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto leading-relaxed">
                Revolutionize your time management with AI-powered tracking, automatic activity detection, 
                and smart productivity insights. Boost team efficiency by 25% and save 2+ hours daily.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/contact?service=ai-time-tracker"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Start Free Trial
                  <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
                </Link>
                <Link
                  to="#demo"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
                >
                  Watch Demo
                </Link>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">25%</div>
                  <div className="text-sm text-purple-200">Productivity Boost</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">2+</div>
                  <div className="text-sm text-purple-200">Hours Saved Daily</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">99%</div>
                  <div className="text-sm text-purple-200">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">25K+</div>
                  <div className="text-sm text-purple-200">Active Users</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose AI Time Tracker Pro?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the power of AI-driven time management that transforms your productivity
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Powerful Features for Modern Teams
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to track time, boost productivity, and manage your team effectively
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group p-6 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <CheckCircleIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the perfect plan for your team. All plans include our core AI features with no hidden fees.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                  plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-500 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact?service=ai-time-tracker&plan=team"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Trusted by Teams Worldwide
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See what our customers say about AI Time Tracker Pro
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Time Management?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of teams already using AI Time Tracker Pro to boost productivity and save time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact?service=ai-time-tracker"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm opacity-75">
              <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AITimeTrackerPage;