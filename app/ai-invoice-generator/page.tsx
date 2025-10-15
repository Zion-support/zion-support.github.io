import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon, 
  DocumentTextIcon, 
  CurrencyDollarIcon, 
  ClockIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  StarIcon,
  GlobeAltIcon,
  CogIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const AIInvoiceGeneratorPage: React.FC = () => {
  const features = [
    'AI-powered invoice generation',
    'Automated payment tracking',
    'Smart tax calculations',
    'Multi-currency support',
    'Custom branding options',
    'Recurring invoice automation',
    'Client portal integration',
    'Real-time payment notifications',
    'Advanced reporting & analytics',
    'Mobile app access'
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$19',
      period: '/month',
      description: 'Perfect for freelancers',
      features: [
        'Up to 50 invoices/month',
        'Basic templates',
        'Payment tracking',
        'Email support',
        'PDF export'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for small businesses',
      features: [
        'Unlimited invoices',
        'Custom branding',
        'Recurring invoices',
        'Client portal',
        'Priority support',
        'Advanced analytics',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For growing companies',
      features: [
        'Everything in Professional',
        'Multi-user access',
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
      title: 'Save 10+ Hours Weekly',
      description: 'Automate invoice creation and reduce manual work by 80%'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Get Paid 30% Faster',
      description: 'Smart payment reminders and automated follow-ups'
    },
    {
      icon: ShieldCheckIcon,
      title: '99.9% Accuracy',
      description: 'AI-powered calculations eliminate human errors'
    },
    {
      icon: ChartBarIcon,
      title: 'Real-time Analytics',
      description: 'Track cash flow and payment trends with detailed reports'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'Freelance Designer',
      company: 'Creative Studio',
      content: 'AI Invoice Generator saved me 15 hours per week. The automated reminders increased my payment rate by 40%.',
      rating: 5
    },
    {
      name: 'David Thompson',
      role: 'CEO',
      company: 'TechStart Inc.',
      content: 'The AI features are incredible. It automatically calculates taxes and generates professional invoices in seconds.',
      rating: 5
    },
    {
      name: 'Lisa Chen',
      role: 'Accountant',
      company: 'Finance Pro LLC',
      content: 'Best invoicing software I\'ve used. The reporting features give us complete visibility into our cash flow.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead
        title="AI Invoice Generator Pro - Smart Invoicing & Payment Management | Zion Tech Group"
        description="Revolutionary AI-powered invoice generator with automated payment tracking, smart tax calculations, and multi-currency support. Get paid 30% faster."
        keywords="AI invoice generator, automated invoicing, payment tracking, smart invoicing, invoice software, billing automation, financial management"
        canonicalUrl="https://ziontechgroup.com/ai-invoice-generator"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-teal-700 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6">
                <StarIcon className="w-4 h-4 mr-2" />
                #1 AI Invoice Generator
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                AI Invoice Generator
                <span className="block bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                  Pro
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-green-100 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your invoicing with AI-powered automation. Generate professional invoices, track payments, 
                and get paid 30% faster with smart reminders and automated workflows.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/contact?service=ai-invoice-generator"
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Start Free Trial
                  <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
                </Link>
                <Link
                  to="#demo"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
                >
                  Watch Demo
                </Link>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">30%</div>
                  <div className="text-sm text-green-200">Faster Payments</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">10+</div>
                  <div className="text-sm text-green-200">Hours Saved/Week</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">99.9%</div>
                  <div className="text-sm text-green-200">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">50K+</div>
                  <div className="text-sm text-green-200">Invoices Generated</div>
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
                Why Choose AI Invoice Generator Pro?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the power of AI-driven invoicing that transforms your financial workflow
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
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
                Powerful Features for Modern Businesses
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to streamline your invoicing process and get paid faster
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group p-6 rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
                Choose the perfect plan for your business. All plans include our core AI features with no hidden fees.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                  plan.popular ? 'ring-2 ring-green-500 scale-105' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
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
                    to="/contact?service=ai-invoice-generator&plan=professional"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-green-600 text-white hover:bg-green-700'
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
                Trusted by Businesses Worldwide
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See what our customers say about AI Invoice Generator Pro
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
        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Invoicing?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of businesses already using AI Invoice Generator Pro to get paid faster and save time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact?service=ai-invoice-generator"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
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

export default AIInvoiceGeneratorPage;