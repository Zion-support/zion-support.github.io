import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, 
  Bot, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Clock,
  Phone,
  Mail,
  MapPin,
  Brain,
  Target,
  Users,
  Award,
  Globe,
  Smartphone,
  Database,
  Cloud,
  Activity,
  Headphones,
  Shield
} from 'lucide-react';

const AiChatbotEnterprisePage: React.FC = () => {
  const features = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Intelligent Conversational AI",
      description: "Advanced natural language processing for human-like conversations and context understanding."
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Multi-Channel Support",
      description: "Deploy chatbots across websites, mobile apps, social media, and messaging platforms."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Machine Learning",
      description: "Continuously learn and improve from customer interactions to provide better responses."
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "24/7 Customer Support",
      description: "Provide round-the-clock customer support with instant responses and escalation to human agents."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security with data encryption, compliance, and privacy protection."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Custom Integration",
      description: "Seamlessly integrate with your existing CRM, helpdesk, and business systems."
    }
  ];

  const pricingPlans = [
    {
      name: "Professional",
      price: "$249",
      period: "per month",
      description: "Perfect for growing businesses with customer support needs",
      features: [
        "Up to 10,000 conversations/month",
        "Basic AI capabilities",
        "Standard integrations",
        "Email support",
        "Basic analytics",
        "5 user accounts"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "$499",
      period: "per month",
      description: "Ideal for large organizations with complex requirements",
      features: [
        "Up to 100,000 conversations/month",
        "Advanced AI capabilities",
        "Premium integrations",
        "Priority support",
        "Advanced analytics",
        "25 user accounts",
        "Custom training",
        "API access",
        "Multi-language support"
      ],
      popular: true
    },
    {
      name: "Custom Solution",
      price: "Contact Us",
      period: "for pricing",
      description: "Tailored chatbot solutions for unique requirements",
      features: [
        "Unlimited conversations",
        "Premium AI features",
        "Custom integrations",
        "24/7 dedicated support",
        "Custom analytics",
        "Unlimited user accounts",
        "White-label solution",
        "On-premise deployment",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Chatbot Enterprise | Zion Tech Group - Advanced Conversational AI Platform</title>
        <meta name="description" content="Transform customer support with our enterprise AI chatbot platform. Intelligent conversations, multi-channel support, and 24/7 automation starting at $249/month." />
        <meta name="keywords" content="AI chatbot, conversational AI, customer support, enterprise chatbot, virtual assistant, customer service automation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Chatbot Enterprise
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform customer support with our advanced AI chatbot platform. Provide intelligent, 
                24/7 customer service with human-like conversations and seamless integration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </Link>
                <Link to="/services" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Advanced Chatbot Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our enterprise chatbot platform provides comprehensive conversational AI capabilities for modern businesses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Flexible Chatbot Plans
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the chatbot solution that fits your customer support needs and budget.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white rounded-2xl shadow-xl p-8 relative border-2 ${plan.popular ? 'border-purple-500 scale-105' : 'border-gray-200'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to="/contact" 
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700' 
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

        {/* Contact Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Customer Support?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses already using our AI chatbot platform to provide exceptional customer service.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center group">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                  <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors text-lg">
                    +1 302 464 0950
                  </a>
                  <p className="text-sm text-gray-400 mt-2">24/7 Support Available</p>
                </div>

                <div className="flex flex-col items-center group">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors text-lg">
                    kleber@ziontechgroup.com
                  </a>
                  <p className="text-sm text-gray-400 mt-2">Response within 2 hours</p>
                </div>

                <div className="flex flex-col items-center group">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-300 text-lg">364 E Main St STE 1008</p>
                  <p className="text-gray-300 text-lg">Middletown DE 19709</p>
                </div>
              </div>

              <div className="text-center mt-12">
                <Link to="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 inline-block">
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiChatbotEnterprisePage;