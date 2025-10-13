import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Star, 
  Zap, 
  Crown, 
  ArrowRight,
  Brain,
  Cloud,
  Shield,
  Code,
  BarChart3,
  Smartphone,
  Users,
  Clock,
  Lock,
  Target
} from 'lucide-react';

const PricingPage: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      popular: false,
      features: [
        '1 AI Content Generator',
        'Basic Cloud Monitoring',
        'Email Support',
        '5GB Storage',
        'Basic Analytics',
        'Mobile App Access'
      ],
      limitations: [
        'Limited to 1000 API calls/month',
        'Basic security features',
        'Standard response time'
      ]
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      icon: Crown,
      color: 'from-purple-500 to-pink-500',
      popular: true,
      features: [
        '3 AI Services Included',
        'Advanced Cloud Monitoring',
        'Priority Support',
        '50GB Storage',
        'Advanced Analytics',
        'API Management',
        'Custom Integrations',
        'Team Collaboration'
      ],
      limitations: [
        'Up to 10,000 API calls/month',
        'Advanced security features',
        'Priority response time'
      ]
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'Complete solution for large organizations',
      icon: Target,
      color: 'from-orange-500 to-red-500',
      popular: false,
      features: [
        'Unlimited AI Services',
        'Full Cloud Infrastructure',
        '24/7 Dedicated Support',
        'Unlimited Storage',
        'Custom Analytics',
        'Full API Suite',
        'White-label Solutions',
        'Dedicated Account Manager',
        'Custom Development'
      ],
      limitations: [
        'Unlimited API calls',
        'Enterprise-grade security',
        'Immediate response time'
      ]
    }
  ];

  const microSaasServices = [
    {
      name: 'AI Content Generator Pro',
      price: '$29/month',
      description: 'Advanced AI-powered content creation',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      features: ['Multi-language', 'SEO optimization', 'Brand voice', 'Scheduling']
    },
    {
      name: 'Cloud Infrastructure Monitor',
      price: '$49/month',
      description: 'Real-time cloud resource monitoring',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      features: ['Real-time alerts', 'Cost optimization', 'Multi-cloud', 'Analytics']
    },
    {
      name: 'Cyber Threat Detection Suite',
      price: '$99/month',
      description: 'AI-powered cybersecurity monitoring',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      features: ['Threat intelligence', '24/7 monitoring', 'Incident response', 'Compliance']
    },
    {
      name: 'API Management Platform',
      price: '$79/month',
      description: 'Complete API lifecycle management',
      icon: Code,
      color: 'from-green-500 to-teal-500',
      features: ['API gateway', 'Rate limiting', 'Analytics', 'Developer portal']
    },
    {
      name: 'Business Intelligence Dashboard',
      price: '$59/month',
      description: 'Advanced data visualization platform',
      icon: BarChart3,
      color: 'from-indigo-500 to-purple-500',
      features: ['Interactive dashboards', 'Custom reports', 'Data connectors', 'Collaboration']
    },
    {
      name: '5G Network Optimizer',
      price: '$199/month',
      description: '5G network performance optimization',
      icon: Smartphone,
      color: 'from-cyan-500 to-blue-500',
      features: ['Network optimization', 'Performance monitoring', 'Edge computing', 'QoS management']
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.'
    },
    {
      question: 'Do you offer custom pricing for large organizations?',
      answer: 'Absolutely! We offer custom enterprise solutions with tailored pricing based on your specific needs and requirements.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, all our plans come with a 14-day free trial. No credit card required to get started.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for enterprise customers.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. There are no cancellation fees or long-term contracts.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing Plans - Zion Tech Group | Affordable AI & IT Solutions</title>
        <meta name="description" content="Choose the perfect plan for your business. Starting from $29/month for AI services, cloud solutions, and micro SAAS tools. Free trial available." />
        <meta name="keywords" content="pricing, AI services, micro saas, cloud solutions, cybersecurity, enterprise plans" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Simple, Transparent Pricing
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Choose the perfect plan for your business. All plans include free trials, 
                no setup fees, and 24/7 support.
              </p>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-medium">
                <CheckCircle className="w-4 h-4 mr-2" />
                14-day free trial on all plans
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <div key={index} className={`relative bg-slate-800/50 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-purple-500/50 shadow-2xl shadow-purple-500/25' 
                    : 'border-purple-500/20 hover:border-purple-500/40'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="text-center mb-8">
                      <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-white">{plan.price}</span>
                        <span className="text-gray-400 ml-2">{plan.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link 
                      to="/contact"
                      className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-purple-500/25'
                          : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Micro SAAS Services */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Individual Micro SAAS Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Need just one specific service? Choose from our individual micro SAAS offerings 
              and pay only for what you use.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-slate-800/50 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-2xl font-bold text-white">{service.price}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      to="/contact"
                      className="w-full block text-center py-2 px-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Features Comparison */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What's Included</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              All our plans include these essential features to help your business succeed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock technical support and monitoring.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security and compliance standards.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Team Collaboration</h3>
              <p className="text-gray-300">Work together seamlessly with your team.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Custom Solutions</h3>
              <p className="text-gray-300">Tailored solutions for your specific needs.</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">
              Got questions? We've got answers. Here are some common questions about our pricing.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg border border-purple-500/20 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 text-center border border-purple-500/20">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using our services. 
              Start your free trial today and see the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
                Start Free Trial
              </Link>
              <Link to="/demo" className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;