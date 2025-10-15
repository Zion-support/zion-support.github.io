import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon, 
  UserPlusIcon, 
  ChartBarIcon, 
  CursorArrowRaysIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  StarIcon,
  GlobeAltIcon,
  CogIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const AILeadGeneratorPage: React.FC = () => {
  const features = [
    'AI-powered lead identification',
    'Automated prospect research',
    'Smart lead scoring & qualification',
    'Multi-channel lead capture',
    'Real-time lead enrichment',
    'CRM integration & sync',
    'Email sequence automation',
    'Social media prospecting',
    'Advanced analytics & reporting',
    'Custom lead workflows'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 leads/month',
        'Basic AI scoring',
        'Email integration',
        'Standard templates',
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
        'Up to 10,000 leads/month',
        'Advanced AI insights',
        'Multi-channel capture',
        'Priority support',
        'CRM integrations',
        'Custom workflows',
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
        'Unlimited leads',
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
      icon: UserPlusIcon,
      title: '3x More Qualified Leads',
      description: 'AI identifies and scores leads with 95% accuracy, focusing on high-converting prospects'
    },
    {
      icon: CursorArrowRaysIcon,
      title: '50% Higher Conversion',
      description: 'Smart targeting and personalization increase conversion rates significantly'
    },
    {
      icon: ChartBarIcon,
      title: 'Real-time Analytics',
      description: 'Track lead generation performance with detailed insights and ROI metrics'
    },
    {
      icon: CogIcon,
      title: 'Fully Automated',
      description: 'Set it and forget it - AI handles lead research, scoring, and follow-up automatically'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Marketing Director',
      company: 'TechStart Inc.',
      content: 'AI Lead Generator increased our qualified leads by 300% and reduced our cost per lead by 60%.',
      rating: 5
    },
    {
      name: 'David Park',
      role: 'Sales Manager',
      company: 'GrowthCorp',
      content: 'The AI scoring is incredibly accurate. We\'re closing 40% more deals with the same effort.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      role: 'CEO',
      company: 'Innovation Labs',
      content: 'Best lead generation tool we\'ve used. The automation saves us 20 hours per week.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead
        title="AI Lead Generator Pro - Smart Lead Generation & Qualification | Zion Tech Group"
        description="Revolutionary AI-powered lead generation with automated prospecting, smart qualification, and multi-channel capture. Generate 3x more qualified leads."
        keywords="AI lead generator, automated lead generation, lead qualification, prospect research, lead scoring, sales automation, CRM integration"
        canonicalUrl="https://ziontechgroup.com/ai-lead-generator"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-red-600 to-pink-700 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6">
                <StarIcon className="w-4 h-4 mr-2" />
                #1 AI Lead Generation Platform
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                AI Lead Generator
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Pro
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-orange-100 mb-8 max-w-4xl mx-auto leading-relaxed">
                Revolutionize your lead generation with AI-powered prospecting, automated qualification, 
                and smart targeting. Generate 3x more qualified leads and boost conversions by 50%.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/contact?service=ai-lead-generator"
                  className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Start Free Trial
                  <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
                </Link>
                <Link
                  to="#demo"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300"
                >
                  Watch Demo
                </Link>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">3x</div>
                  <div className="text-sm text-orange-200">More Qualified Leads</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">50%</div>
                  <div className="text-sm text-orange-200">Higher Conversion</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">95%</div>
                  <div className="text-sm text-orange-200">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">15K+</div>
                  <div className="text-sm text-orange-200">Leads Generated</div>
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
                Why Choose AI Lead Generator Pro?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the power of AI-driven lead generation that transforms your sales pipeline
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
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
                Powerful Features for Modern Sales Teams
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to generate, qualify, and convert leads at scale
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group p-6 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
                  plan.popular ? 'ring-2 ring-orange-500 scale-105' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
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
                    to="/contact?service=ai-lead-generator&plan=professional"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-orange-600 text-white hover:bg-orange-700'
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
                Trusted by Sales Teams Worldwide
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See what our customers say about AI Lead Generator Pro
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
        <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Lead Generation?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of sales teams already using AI Lead Generator Pro to generate more qualified leads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact?service=ai-lead-generator"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300"
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

export default AILeadGeneratorPage;