import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Zap, 
  Bot, 
  Cpu, 
  Workflow, 
  CheckCircle,
  Star,
  TrendingUp,
  Shield,
  Clock,
  Target,
  BarChart3
} from 'lucide-react';

export default function AIAutomationPage() {
  const features = [
    {
      icon: Bot,
      title: 'Intelligent Process Automation',
      description: 'Automate complex business processes with AI-powered bots that learn and adapt.',
      benefits: ['Reduce manual work by 80%', '24/7 operation', 'Self-learning algorithms', 'Error-free execution']
    },
    {
      icon: Workflow,
      title: 'Workflow Optimization',
      description: 'Streamline your workflows with intelligent automation that identifies bottlenecks.',
      benefits: ['Faster processing times', 'Reduced costs', 'Improved accuracy', 'Scalable solutions']
    },
    {
      icon: Cpu,
      title: 'Machine Learning Integration',
      description: 'Leverage ML algorithms to make data-driven decisions and predictions.',
      benefits: ['Predictive analytics', 'Pattern recognition', 'Continuous improvement', 'Real-time insights']
    },
    {
      icon: Shield,
      title: 'Secure Automation',
      description: 'Enterprise-grade security for all automated processes and data handling.',
      benefits: ['End-to-end encryption', 'Access controls', 'Audit trails', 'Compliance ready']
    }
  ];

  const useCases = [
    {
      title: 'Customer Service Automation',
      description: 'AI-powered chatbots and virtual assistants for 24/7 customer support.',
      icon: Bot,
      results: ['90% faster response times', '60% cost reduction', '95% customer satisfaction']
    },
    {
      title: 'Data Processing & Analytics',
      description: 'Automated data collection, processing, and analysis for business insights.',
      icon: BarChart3,
      results: ['Real-time analytics', 'Automated reporting', 'Predictive insights']
    },
    {
      title: 'Document Management',
      description: 'Intelligent document processing, classification, and workflow automation.',
      icon: Workflow,
      results: ['80% faster processing', '99% accuracy', 'Reduced manual errors']
    },
    {
      title: 'Sales & Marketing Automation',
      description: 'Automated lead generation, nurturing, and conversion optimization.',
      icon: Target,
      results: ['3x more qualified leads', '40% higher conversion', 'Automated follow-ups']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$2,999',
      period: 'per month',
      description: 'Perfect for small businesses getting started with AI automation',
      features: [
        'Up to 5 automated workflows',
        'Basic AI chatbot',
        'Email automation',
        'Standard support',
        'Monthly reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: 'per month',
      description: 'Ideal for growing businesses with complex automation needs',
      features: [
        'Unlimited workflows',
        'Advanced AI capabilities',
        'Custom integrations',
        'Priority support',
        'Real-time analytics',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Tailored solutions for large organizations with specific requirements',
      features: [
        'Custom AI models',
        'Dedicated support team',
        'On-premise deployment',
        'Advanced security',
        'Custom training',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Automation Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI automation solutions. Reduce costs, increase efficiency, and scale operations with intelligent automation." />
        <meta name="keywords" content="AI automation, business process automation, machine learning, workflow optimization, intelligent automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Automation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business operations with intelligent automation solutions. 
              Reduce costs, increase efficiency, and scale your operations with AI-powered workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              AI Automation Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Real-World Use Cases
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                        <p className="text-gray-300 mb-4">{useCase.description}</p>
                        <ul className="space-y-1">
                          {useCase.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center space-x-2 text-sm text-cyan-400">
                              <TrendingUp className="w-4 h-4 flex-shrink-0" />
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              AI Automation Pricing
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                    : 'border-slate-700/50 hover:border-cyan-500/50'
                }`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of businesses that have transformed their operations with AI automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                Start Your Automation Journey
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}