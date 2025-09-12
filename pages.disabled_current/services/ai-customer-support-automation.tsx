import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Bot, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  DollarSign, 
  Clock, 
  Users, 
  Target, 
  TrendingUp, 
  MessageSquare, 
  Globe, 
  Mail, 
  Phone, 
  BarChart3,
  Shield,
  Zap,
  Settings,
  Phone as PhoneIcon,
  MapPin,
  Mail as MailIcon,
  Brain
} from 'lucide-react';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

const features = [
  {
    icon: MessageSquare,
    title: "Multi-Channel Support",
    description: "Handle customer inquiries across web chat, email, social media, and phone with unified AI responses."
  },
  {
    icon: Brain,
    title: "Natural Language Understanding",
    description: "Advanced NLP capabilities to understand customer intent and provide accurate, contextual responses."
  },
  {
    icon: BarChart3,
    title: "Sentiment Analysis",
    description: "Real-time mood detection and sentiment analysis to route urgent issues to human agents immediately."
  },
  {
    icon: Zap,
    title: "Automatic Ticket Routing",
    description: "Intelligent categorization and routing of support tickets to the right department or agent."
  },
  {
    icon: Shield,
    title: "Knowledge Base Integration",
    description: "Seamless integration with your existing knowledge base for accurate, up-to-date information."
  },
  {
    icon: Settings,
    title: "Human Escalation",
    description: "Smart escalation to human agents when AI cannot resolve complex or sensitive issues."
  }
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$199",
    period: "/month",
    description: "Perfect for small businesses",
    features: [
      "Up to 1,000 conversations/month",
      "3 support channels",
      "Basic AI responses",
      "Email support",
      "Basic analytics",
      "Standard integrations"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$399",
    period: "/month",
    description: "Ideal for growing businesses",
    features: [
      "Up to 5,000 conversations/month",
      "Unlimited support channels",
      "Advanced AI with sentiment analysis",
      "Priority support",
      "Advanced analytics & reporting",
      "Custom integrations",
      "Team collaboration (up to 10 users)",
      "API access"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$799",
    period: "/month",
    description: "For large organizations",
    features: [
      "Unlimited conversations",
      "All channels + custom integrations",
      "Custom AI training",
      "Dedicated account manager",
      "Custom analytics dashboard",
      "Unlimited team members",
      "White-label solution",
      "SLA guarantee",
      "24/7 phone support"
    ],
    popular: false
  }
];

const benefits = [
  {
    metric: "80%",
    description: "Queries handled automatically",
    icon: Bot
  },
  {
    metric: "90%",
    description: "Reduction in response time",
    icon: Clock
  },
  {
    metric: "35%",
    description: "Improvement in customer satisfaction",
    icon: Star
  },
  {
    metric: "60%",
    description: "Reduction in support costs",
    icon: DollarSign
  }
];

const integrations = [
  { name: "Zendesk", logo: "Z" },
  { name: "Freshdesk", logo: "F" },
  { name: "Intercom", logo: "I" },
  { name: "Salesforce", logo: "S" },
  { name: "HubSpot", logo: "H" },
  { name: "Slack", logo: "S" },
  { name: "Microsoft Teams", logo: "M" },
  { name: "WhatsApp", logo: "W" }
];

export default function AICustomerSupportAutomation() {
  return (
    <>
      <Head>
        <title>AI Customer Support Automation - Zion Tech Group</title>
        <meta name="description" content="Transform your customer support with AI-powered automation. Handle 80% of queries automatically with intelligent chatbots and ticket routing." />
        <meta name="keywords" content="AI customer support, chatbot, ticket routing, sentiment analysis, customer service automation" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Customer Support{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Automation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your customer support with intelligent automation. 
                Handle 80% of customer queries automatically while improving 
                satisfaction and reducing costs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Call {contactInfo.phone}
                </a>
                <a
                  href={`mailto:${contactInfo.email}?subject=AI Customer Support Automation Inquiry`}
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
                >
                  Get Free Demo
                </a>
              </div>

              {/* Contact Information */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center">
                    <PhoneIcon className="w-4 h-4 mr-2" />
                    <a href={`tel:${contactInfo.phone}`} className="hover:text-indigo-300">
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center justify-center">
                    <MailIcon className="w-4 h-4 mr-2" />
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-indigo-300">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose AI Customer Support Automation?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI-powered platform delivers measurable results that transform your customer support operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <div className="text-3xl font-bold text-indigo-600 mb-2">{benefit.metric}</div>
                  <div className="text-gray-600">{benefit.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Powerful Features for Support Success
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to automate and optimize your customer support operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Seamless Integrations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Connect with your existing tools and platforms for a unified support experience.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-100 rounded-lg p-4 text-center hover:bg-gray-200 transition-colors"
                >
                  <div className="w-12 h-12 bg-indigo-600 text-white rounded-lg flex items-center justify-center mx-auto mb-2 text-xl font-bold">
                    {integration.logo}
                  </div>
                  <div className="text-sm font-medium text-gray-700">{integration.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your support needs. All plans include our core AI features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all ${
                    plan.popular ? 'ring-2 ring-indigo-500 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-indigo-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`mailto:${contactInfo.email}?subject=AI Customer Support Automation - ${plan.name} Plan Inquiry`}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                      plan.popular
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start automating your customer support today. Get a free demo and see the difference AI can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.phone}`}
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}?subject=AI Customer Support Automation Demo Request`}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Request Demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}