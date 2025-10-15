import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon, 
  ClockIcon, 
  UserGroupIcon, 
  ChartBarIcon,
  CogIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  StarIcon,
  CurrencyDollarIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const AIProjectManagerPage: React.FC = () => {
  const features = [
    'AI-powered task prioritization',
    'Smart resource allocation',
    'Automated progress tracking',
    'Predictive timeline estimation',
    'Team collaboration tools',
    'Real-time project analytics',
    'Risk assessment & mitigation',
    'Custom workflow automation',
    'Integration with 50+ tools',
    'Mobile & desktop access'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 5 projects',
        '10 team members',
        'Basic AI insights',
        'Email support',
        'Standard templates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing teams',
      features: [
        'Unlimited projects',
        '50 team members',
        'Advanced AI analytics',
        'Priority support',
        'Custom workflows',
        'API access',
        'Advanced reporting'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Everything in Professional',
        'Unlimited team members',
        'Custom AI training',
        '24/7 phone support',
        'White-label options',
        'Advanced security',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Project Director',
      company: 'TechCorp Inc.',
      content: 'AI Project Manager increased our team productivity by 40% and helped us deliver projects 25% faster.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'StartupXYZ',
      content: 'The AI insights are incredible. It predicted project delays before they happened and saved us thousands.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Manager',
      company: 'Global Solutions',
      content: 'Best project management tool we\'ve used. The automation features are game-changing.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead
        title="AI Project Manager Pro - Intelligent Project Management | Zion Tech Group"
        description="Revolutionary AI-powered project management platform with smart task prioritization, predictive analytics, and automated workflows. Boost productivity by 40%."
        keywords="AI project management, smart task management, project analytics, team collaboration, workflow automation, project planning software"
        canonicalUrl="https://ziontechgroup.com/ai-project-manager"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6">
                <StarIcon className="w-4 h-4 mr-2" />
                #1 AI Project Management Platform
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                AI Project Manager
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Pro
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
                Revolutionize your project management with AI-powered insights, smart automation, and predictive analytics. 
                Boost team productivity by 40% and deliver projects 25% faster.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/contact?service=ai-project-manager"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Start Free Trial
                  <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
                </Link>
                <Link
                  to="#demo"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Watch Demo
                </Link>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">40%</div>
                  <div className="text-sm text-blue-200">Productivity Boost</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">25%</div>
                  <div className="text-sm text-blue-200">Faster Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">95%</div>
                  <div className="text-sm text-blue-200">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">10K+</div>
                  <div className="text-sm text-blue-200">Happy Users</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Powerful AI Features for Modern Teams
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to transform your project management workflow
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <CheckCircleIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50">
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
                  plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
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
                    to="/contact?service=ai-project-manager&plan=professional"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
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
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Trusted by Teams Worldwide
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See what our customers say about AI Project Manager Pro
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
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
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Project Management?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of teams already using AI Project Manager Pro to deliver better projects faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact?service=ai-project-manager"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
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

export default AIProjectManagerPage;