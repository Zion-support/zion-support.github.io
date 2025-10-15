import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon, 
  UserGroupIcon, 
  DocumentTextIcon, 
  ChartBarIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  StarIcon,
  GlobeAltIcon,
  CogIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const AIHRAssistantPage: React.FC = () => {
  const features = [
    'AI-powered resume screening',
    'Automated candidate matching',
    'Smart interview scheduling',
    'Employee performance analytics',
    'Automated onboarding workflows',
    'HR policy compliance checking',
    'Employee sentiment analysis',
    'Payroll integration',
    'Benefits administration',
    'Custom HR workflows'
  ];

  const pricingPlans = [
    {
      name: 'Small Business',
      price: '$199',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 50 employees',
        'Basic AI screening',
        'Standard templates',
        'Email support',
        'Core HR features'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 200 employees',
        'Advanced AI insights',
        'Custom workflows',
        'Priority support',
        'Advanced analytics',
        'API integrations',
        'Compliance tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited employees',
        'Custom AI training',
        'White-label options',
        '24/7 phone support',
        'Advanced security',
        'Dedicated account manager',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: UserGroupIcon,
      title: '50% Faster Hiring',
      description: 'AI automates resume screening and candidate matching, reducing time-to-hire significantly'
    },
    {
      icon: ChartBarIcon,
      title: 'Better Employee Retention',
      description: 'Smart analytics help identify and address employee satisfaction issues proactively'
    },
    {
      icon: ShieldCheckIcon,
      title: '100% Compliance',
      description: 'Automated compliance checking ensures your HR practices meet all legal requirements'
    },
    {
      icon: CogIcon,
      title: 'Fully Automated',
      description: 'Streamline HR processes with AI-powered automation and smart workflows'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Adams',
      role: 'HR Director',
      company: 'TechCorp Inc.',
      content: 'AI HR Assistant reduced our hiring time by 60% and improved candidate quality by 40%.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'CEO',
      company: 'StartupXYZ',
      content: 'The AI insights are incredible. We identified retention issues before they became problems.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'People Operations',
      company: 'GrowthTech',
      content: 'Best HR software we\'ve used. The automation saves us 30 hours per week on admin tasks.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead
        title="AI HR Assistant Pro - Smart Human Resources Management | Zion Tech Group"
        description="Revolutionary AI-powered HR management with automated recruitment, employee analytics, and compliance checking. Reduce hiring time by 50%."
        keywords="AI HR assistant, automated recruitment, employee management, HR analytics, compliance checking, human resources software"
        canonicalUrl="https://ziontechgroup.com/ai-hr-assistant"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-700 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6">
                <StarIcon className="w-4 h-4 mr-2" />
                #1 AI HR Management Platform
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                AI HR Assistant
                <span className="block bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  Pro
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-indigo-100 mb-8 max-w-4xl mx-auto leading-relaxed">
                Revolutionize your human resources with AI-powered recruitment, employee analytics, 
                and automated compliance. Reduce hiring time by 50% and improve employee satisfaction.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/contact?service=ai-hr-assistant"
                  className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Start Free Trial
                  <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
                </Link>
                <Link
                  to="#demo"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
                >
                  Watch Demo
                </Link>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">50%</div>
                  <div className="text-sm text-indigo-200">Faster Hiring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">40%</div>
                  <div className="text-sm text-indigo-200">Better Retention</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">100%</div>
                  <div className="text-sm text-indigo-200">Compliance</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">5K+</div>
                  <div className="text-sm text-indigo-200">HR Teams</div>
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
                Why Choose AI HR Assistant Pro?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the power of AI-driven HR management that transforms your workforce
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
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
                Powerful Features for Modern HR Teams
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to manage your workforce efficiently and effectively
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
                Choose the perfect plan for your organization. All plans include our core AI features with no hidden fees.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                  plan.popular ? 'ring-2 ring-indigo-500 scale-105' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-indigo-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
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
                    to="/contact?service=ai-hr-assistant&plan=professional"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
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
                Trusted by HR Teams Worldwide
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See what our customers say about AI HR Assistant Pro
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
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your HR Management?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of HR teams already using AI HR Assistant Pro to streamline their workforce management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact?service=ai-hr-assistant"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
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

export default AIHRAssistantPage;