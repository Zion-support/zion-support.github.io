import React from 'react';
import { Metadata } from 'next';

<<<<<<< HEAD
export const metadata: Metadata = {
  title: 'Page - Zion Tech Group',
  description: 'Comprehensive page solutions for modern businesses.',
  keywords: 'page, AI solutions, technology services',
  openGraph: {
    title: 'Page - Zion Tech Group',
    description: 'Comprehensive page solutions for modern businesses.',
    type: 'website',
    url: 'https://ziontechgroup.com/ai-chatbot-builder',
  },
};

const PagePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Page
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive page solutions for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Started
            </a>
            <a href="/services" className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagePage;
=======
const features = [
  {
    title: 'No-Code Builder',
    description: 'Create sophisticated chatbots without any programming knowledge using our visual interface',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Multi-Language Support',
    description: 'Deploy chatbots in 50+ languages with automatic translation and localization',
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Advanced Analytics',
    description: 'Track performance with detailed analytics, conversation insights, and user behavior data',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'AI-Powered Responses',
    description: 'Leverage advanced NLP and machine learning for intelligent, context-aware conversations',
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Easy Integration',
    description: 'Seamlessly integrate with your existing systems, websites, and messaging platforms',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Custom Branding',
    description: 'Customize the chatbot appearance to match your brand identity and design guidelines',
    color: 'from-indigo-500 to-purple-500',
  },
];

const useCases = [
  {
    title: 'Customer Support',
    description: 'Provide 24/7 customer support with instant responses to common queries',
    benefits: ['Reduce support tickets by 60%', '24/7 availability', 'Instant responses'],
  },
  {
    title: 'Lead Generation',
    description: 'Qualify leads and capture contact information through engaging conversations',
    benefits: ['Increase lead quality by 40%', 'Automated qualification', 'Higher conversion rates'],
  },
  {
    title: 'E-commerce Assistant',
    description: 'Help customers find products, answer questions, and guide them through purchases',
    benefits: ['Boost sales by 25%', 'Reduce cart abandonment', 'Personalized recommendations'],
  },
  {
    title: 'Internal HR Bot',
    description: 'Answer employee questions about policies, benefits, and company information',
    benefits: ['Reduce HR workload', 'Consistent information', 'Employee satisfaction'],
  },
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    description: 'Perfect for small businesses getting started',
    features: [
      'Up to 1,000 conversations/month',
      'Basic AI responses',
      'Email support',
      'Standard templates',
      'Basic analytics',
    ],
  },
  {
    name: 'Professional',
    price: '$99',
    period: '/month',
    description: 'Ideal for growing businesses with more needs',
    features: [
      'Up to 10,000 conversations/month',
      'Advanced AI with custom training',
      'Priority support',
      'Custom branding',
      'Advanced analytics',
      'Multi-language support',
      'API access',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations with complex requirements',
    features: [
      'Unlimited conversations',
      'Custom AI models',
      'Dedicated support',
      'White-label solution',
      'Advanced integrations',
      'Custom development',
      'SLA guarantee',
    ],
  },
];

const stats = [
  { number: '10,000+', label: 'Chatbots Created' },
  { number: '50+', label: 'Languages Supported' },
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Customer Support' },
];

export default function AIChatbotBuilderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI <span className="text-blue-600">Chatbot Builder</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Create intelligent, conversational AI chatbots that engage your customers, 
              automate support, and drive business growth - no coding required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Start Building
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to build, deploy, and manage intelligent chatbots.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full mb-4`}>
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform your business with AI chatbots across various industries and functions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your business needs and scale as you grow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`p-6 rounded-lg shadow-md ${index === 1 ? 'bg-blue-600 text-white' : 'bg-white'}`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-2">
                    {plan.price}
                    <span className="text-lg font-normal">{plan.period}</span>
                  </div>
                  <p className={`${index === 1 ? 'text-blue-100' : 'text-gray-600'}`}>{plan.description}</p>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className={`h-5 w-5 mr-2 flex-shrink-0 ${index === 1 ? 'text-blue-200' : 'text-green-500'}`} />
                      <span className={index === 1 ? 'text-blue-100' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className={`w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md transition-colors ${
                      index === 1
                        ? 'bg-white text-blue-600 hover:bg-gray-50'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join the growing community of businesses using our chatbot platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Build Your AI Chatbot?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start creating intelligent conversations that engage your customers and drive results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Start Building Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-45ea
