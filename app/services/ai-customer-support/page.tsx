import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  MessageSquare, 
  Brain, 
  Users, 
  BarChart3, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Phone,
  Mail,
  MapPin,
  Star,
  Clock,
  Target,
  Award,
  Globe,
  Smartphone,
  Database,
  Settings,
  TrendingUp,
  Headphones,
  Bot,
  Cpu,
  Lock,
  FileText
} from 'lucide-react';

export default function AICustomerSupportPage() {
  const title = 'AI-Powered Customer Support Automation — Zion Tech Group';
  const description = 'Intelligent chatbot with sentiment analysis, ticket routing, and escalation management. Reduce support costs by 60% and improve response time by 80%.';

  const features = [
    {
      icon: Brain,
      title: 'Natural Language Processing',
      description: 'Advanced NLP with 95% accuracy for understanding customer intent and context'
    },
    {
      icon: Globe,
      title: 'Multi-Channel Support',
      description: 'Seamless integration across web, email, social media, and mobile platforms'
    },
    {
      icon: BarChart3,
      title: 'Sentiment Analysis',
      description: 'Real-time emotion detection and automatic escalation for frustrated customers'
    },
    {
      icon: Users,
      title: 'Smart Ticket Routing',
      description: 'AI-powered routing to the right agent based on expertise and workload'
    },
    {
      icon: Database,
      title: 'CRM Integration',
      description: 'Deep integration with Salesforce, HubSpot, Zendesk, and other popular CRMs'
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Real-time metrics, customer satisfaction scores, and actionable insights'
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$1,200/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 conversations/month',
        'Basic chatbot functionality',
        'Email integration',
        'Standard analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$4,500/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI capabilities',
        'Multi-channel support',
        'CRM integration',
        'Sentiment analysis',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$8,500/month',
      description: 'For large organizations',
      features: [
        'Unlimited conversations',
        'Custom AI training',
        'White-label solution',
        'Advanced analytics',
        'Dedicated support',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const benefits = [
    { metric: '60%', description: 'Reduction in support costs' },
    { metric: '80%', description: 'Improvement in response time' },
    { metric: '95%', description: 'Customer satisfaction rate' },
    { metric: '2-4 weeks', description: 'Average delivery time' }
  ];

  const useCases = [
    {
      industry: 'E-commerce',
      challenge: 'High volume of product inquiries and order issues',
      solution: 'AI chatbot handles 70% of inquiries automatically, routing complex issues to human agents',
      result: '40% reduction in support tickets, 50% faster resolution times'
    },
    {
      industry: 'SaaS',
      challenge: 'Technical support requests and onboarding questions',
      solution: 'Intelligent routing based on user expertise level and issue complexity',
      result: '65% faster onboarding, 30% reduction in churn'
    },
    {
      industry: 'Healthcare',
      challenge: 'Appointment scheduling and general inquiries',
      solution: 'HIPAA-compliant chatbot with appointment booking and FAQ automation',
      result: '50% reduction in phone calls, improved patient satisfaction'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/services/micro-saas/ai-customer-support" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <Bot className="h-8 w-8 mr-3" />
              <span className="text-lg font-semibold">AI-Powered Automation</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI-Powered Customer Support Automation
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Intelligent chatbot with sentiment analysis, ticket routing, and escalation management. 
              Reduce support costs by 60% and improve response time by 80%.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg">
              <a 
                href={`tel:${contactInfo.phone}`} 
                className="flex items-center bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                {contactInfo.phone}
              </a>
              <a 
                href={`mailto:${contactInfo.email}`} 
                className="flex items-center bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                {contactInfo.email}
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Transform Your Customer Support
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI-powered platform automates routine inquiries, improves response times, and enhances customer satisfaction across all channels.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{benefit.metric}</div>
                  <div className="text-gray-600">{benefit.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Advanced AI Capabilities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform combines cutting-edge AI technology with proven customer service best practices.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Real-World Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how businesses across different industries are transforming their customer support with our AI platform.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.industry}</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-700">Challenge:</h4>
                      <p className="text-gray-600 text-sm">{useCase.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Solution:</h4>
                      <p className="text-gray-600 text-sm">{useCase.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Result:</h4>
                      <p className="text-gray-600 text-sm">{useCase.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your business size and support volume. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white p-8 rounded-lg shadow-lg border-2 ${plan.popular ? 'border-blue-500 relative' : 'border-gray-200'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-blue-600 mb-2">{plan.price}</div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:${contactInfo.email}?subject=AI Customer Support - ${plan.name} Plan`}
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Automate Your Customer Support?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses that have transformed their customer support with AI automation. 
              Get started with a free consultation and see the results in just 2-4 weeks.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}?subject=AI Customer Support Inquiry`}
                className="flex items-center bg-white/20 hover:bg-white/30 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 bg-gray-900 text-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex items-center justify-center">
                <Phone className="h-6 w-6 mr-3" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-blue-400 transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="h-6 w-6 mr-3" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-blue-400 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="h-6 w-6 mr-3" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}