import React from 'react';
import { Head } from 'next/head';
import { 
  Bot, 
  MessageSquare, 
  Clock, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  Globe,
  Brain,
  Target,
  Award,
  Rocket,
  Lightbulb,
  BarChart3,
  Settings,
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Workflow,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Palette,
  ChevronDown
} from 'lucide-react';

export default function AICustomerSupportAutomation
export { AICustomerSupportAutomation }() {
  const features = [
    {
      icon: Bo t,
      title: "AI-Powered Chatbots",
      description: "Intelligent chatbots that understand context and provide instant, accurate responses 24/7",
      benefits: ["Instant response time", "Multilingual support", "Context-aware conversations", "Seamless handoff to humans"]
    },
    {
      icon: Brai n,
      title: "Natural Language Processing",
      description: "Advanced NLP that understands customer intent and sentiment for better service delivery",
      benefits: ["Intent recognition", "Sentiment analysis", "Emotion detection", "Contextual understanding"]
    },
    {
      icon: Workflo w,
      title: "Automated Ticket Routing",
      description: "Smart routing system that directs tickets to the right agent based on expertise and workload",
      benefits: ["Reduced resolution time", "Improved agent efficiency", "Better customer satisfaction", "Load balancing"]
    },
    {
      icon: BarChart 3,
      title: "Real-time Analytics",
      description: "Comprehensive analytics dashboard for monitoring support performance and customer satisfaction",
      benefits: ["Performance metrics", "Customer satisfaction tracking", "Agent productivity insights", "Trend analysis"]
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$299/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 conversations/month",
        "Basic AI chatbot",
        "Email support",
        "Basic analytics",
        "Standard integrations"
      ],
      popular: fals e
    },
    {
      name: "Professional",
      price: "$799/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 conversations/month",
        "Advanced AI with NLP",
        "Multi-channel support",
        "Advanced analytics",
        "Custom integrations",
        "Priority support"
      ],
      popular: tru e
    },
    {
      name: "Enterprise",
      price: "$1,999/month",
      description: "For large organizations",
      features: [
        "Unlimited conversations",
        "Custom AI training",
        "White-label solution",
        "Advanced reporting",
        "Dedicated support",
        "SLA guarantee"
      ],
      popular: fals e
    }
  ];

  const benefits = [
    {
      icon: Cloc k,
      title: "24/7 Availability",
      description: "Never miss a customer inquiry with round-the-clock automated support"
    },
    {
      icon: TrendingU p,
      title: "Increased Efficiency",
      description: "Reduce response time by 80% and handle 5x more inquiries simultaneously"
    },
    {
      icon: User s,
      title: "Improved Satisfaction",
      description: "Deliver consistent, high-quality support that keeps customers happy"
    },
    {
      icon: Shiel d,
      title: "Scalable Solution",
      description: "Easily scale your support operations without proportional cost increases"
    }
  ];

  return (
    <>
      <Head>
        <title>AI Customer Support Automation - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered customer support automation that reduces response time by 80% and increases customer satisfaction. 24/7 intelligent chatbots with natural language processing."   />
        <meta name="keywords" content="AI customer support, chatbot automation, customer service AI, support automation, AI chatbots, customer experience"   />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm: p x-6 lg: p x-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
                <Bot className="w-4 h-4 mr-2"  />
                AI-Powered Customer Support
              </div>
              <h1 className="text-5xl md: tex t-6xl font-bold text-gray-900 mb-6">
                Transform Your Customer
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Support</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Revolutionary AI-powered customer support automation that reduces response time by 80%, 
                increases customer satisfaction by 40%, and handles 5x more inquiries simultaneously.
              </p>
              <div className="flex flex-col sm: fle x-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover: shado w-lg transition-all duration-300 font-medium flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2"  />
                  Call +1 302 464 0950
                </a>
                <a 
                  href="mailto: klebe r@ziontechgroup.com" 
                  className="bg-white text-gray-900 px-8 py-4 rounded-lg border-2 border-gray-200 hover: borde r-blue-600 transition-all duration-300 font-medium flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2"  />
                  Get Quote
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md: gri d-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">80%</div>
                <div className="text-gray-600">Faster Response</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">5x</div>
                <div className="text-gray-600">More Inquiries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">40%</div>
                <div className="text-gray-600">Higher Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600">Availability</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm: p x-6 lg: p x-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI customer support automation platform combines cutting-edge technology 
                with intuitive design to deliver exceptional customer experiences.
              </p>
            </div>

            <div className="grid md: gri d-cols-2 lg: gri d-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-xl hover: shado w-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"  />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm: p x-6 lg: p x-8 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our AI Support?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the future of customer support with our intelligent automation platform.
              </p>
            </div>

            <div className="grid md: gri d-cols-2 lg: gri d-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm: p x-6 lg: p x-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All plans include our core AI features.
              </p>
            </div>

            <div className="grid md: gri d-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`relative bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-blue-600 transform scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-blue-600 mb-2">{plan.price}</div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"  />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="tel:+13024640950" 
                    className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover: shado w-lg' 
                        : 'bg-gray-100 text-gray-900 hover: b g-gray-200'
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
        <section className="py-20 px-4 sm: p x-6 lg: p x-8 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of businesses already using our AI-powered customer support automation.
            </p>
            <div className="flex flex-col sm: fle x-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover: shado w-lg transition-all duration-300 font-medium flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2"  />
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto: klebe r@ziontechgroup.com" 
                className="bg-transparent text-white px-8 py-4 rounded-lg border-2 border-white hover: b g-white hover: tex t-blue-600 transition-all duration-300 font-medium flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2"  />
                Email Us
              </a>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 px-4 sm: p x-6 lg: p x-8 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
              <div className="grid md: gri d-cols-3 gap-8 text-sm">
                <div>
                  <p className="font-semibold mb-2">Phone</p>
                  <a href="tel:+13024640950" className="text-blue-400 hover: tex t-blue-300">
                    +1 302 464 0950
                  </a>
                </div>
                <div>
                  <p className="font-semibold mb-2">Email</p>
                  <a href="mailto: klebe r@ziontechgroup.com" className="text-blue-400 hover: tex t-blue-300">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div>
                  <p className="font-semibold mb-2">Address</p>
                  <p>364 E Main St STE 1008<br  />Middletown DE 19709</p>
                </div>
              </div>
              <div className="mt-8">
                <a 
                  href="https://ziontechgroup.com" 
                  className="text-blue-400 hover: tex t-blue-300 font-medium"
                >
                  Visit our website: ziontechgrou p.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}