<<<<<<< HEAD
import React from 'react",";";";
      import { Helmet } from 'react-helmet-async",
      import {};
=======
<<<<<<< HEAD
import React from 'react;'";
import { Helmet } from 'react-helmet-async;'";
'use client;''";
export default function Page() {
  return (
    <div: className ="min-h-screen bg-white">""";
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta: name ="description" content="Professional page services by Zion Tech Group." />""";
      </Helmet>
      <div: className ="container mx-auto px-4 py-16">;""";
        <div: className ="text-center">;""";
          <h1: className ="text-4xl font-bold text-gray-900 mb-8">;""";
            Page;
          </h1>
          <p: className ="text-xl text-gray-600 mb-8">;""";
            Professional page solutions tailored to your business needs.;
          </p>
          <div: className ="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">;""";
            <div: className ="bg-blue-50 border border-blue-200 rounded-lg p-6">;""";
              <h3: className ="text-lg font-semibold text-blue-900 mb-2">;""";
                Expert Solutions;
              </h3>
              <p: className ="text-blue-700">;""";
                Our team of experts delivers cutting-edge page solutions.;
              </p>
=======

import React from 'react',";
      import { Helmet } from 'react-helmet-async',";
      import {}
>>>>>>> main
  CheckCircle, 
  ArrowRight, 
  MessageSquare, 
  Users, 
  Target, 
  TrendingUp,
  Globe,
  Cloud,
<<<<<<< HEAD
  Headphones,";
  ShoppingCart,";";
  DollarSign";";";
} from 'lucide-react",";
      const AiCustomerSupportChatbotPage: React.FC  =  () => {};";";
  const features = [";";";
    'Natural Language Processing (NLP)",";";";
    'Multi-language support (50+ languages)",";";";
    '24/7 automated customer support",";";";
    'Seamless human handoff",";";";
    'Integration with CRM systems",";";";
    'Real-time conversation analytics",";";";
    'Custom knowledge base training",";";";
    'Sentiment analysis and mood detection",";";";
    'Voice and text support",";";";
    'Advanced conversation routing"
  ],";";
      const benefits = [";";";
    'Reduce support costs by 60%",";";";
    'Improve response time by 90%",";";";
    'Handle 1000+ conversations simultaneously",";";";
    'Increase customer satisfaction by 45%",";";";
    'Available 24/7 without breaks",";";";
    'Scale support without additional staff"
  ],";";
      const integrations = [";";";
    { name: 'Salesforce', icon: <Cloud className="w-6 h-6 text-blue-400" /> },"
    { name: 'HubSpot', icon: <Target className="w-6 h-6 text-orange-400" /> },"
    { name: 'Zendesk', icon: <Headphones className="w-6 h-6 text-green-400" /> },"
    { name: 'Intercom', icon: <MessageSquare className="w-6 h-6 text-purple-400" /> },"
    { name: 'Slack', icon: <Users className="w-6 h-6 text-pink-400" /> },"
    { name: 'Microsoft Teams', icon: <Globe className="w-6 h-6 text-blue-600" /> };
  ],";
      const pricingPlans = [";";
    {}";";";
      name: 'Starter",";";";
      price: '$99/mo",";";";
      originalPrice: '$149/mo",";";";
      description: 'Perfect for small businesses",";";
      features: [";";";
        'Up to 1,000 conversations/month",";";";
        'Basic AI responses",";";";
        'Email support",";";";
        'Standard integrations",";";";
        'Basic analytics",";";";
        'Single language support"
      ],
      popular: false";
    },";";
    {}";";";
      name: 'Professional",";";";
      price: '$199/mo",";";";
      originalPrice: '$299/mo",";";";
      description: 'Ideal for growing businesses",";";
      features: [";";";
        'Up to 10,000 conversations/month",";";";
        'Advanced AI capabilities",";";";
        'Priority support",";";";
        'Advanced integrations",";";";
        'Multi-language support",";";";
        'Advanced analytics",";";";
        'Custom training",";";";
        'Human handoff"
      ],
      popular: true";
    },";";
    {}";";";
      name: 'Enterprise",";";";
      price: '$399/mo",";";";
      originalPrice: '$599/mo",";";";
      description: 'For large organizations",";";
      features: [";";";
        'Unlimited conversations",";";";
        'Full AI suite",";";";
        'Dedicated account manager",";";";
        'Custom integrations",";";";
        'White-label options",";";";
        'Advanced security",";";";
        'SLA guarantees",";";";
        'On-premise deployment"
      ],
      popular: false
    };
  ],";
      const useCases = [";";
    {}";";";
      title: 'E-commerce",";";";
      description: 'Handle product inquiries, order tracking, and returns',"
      icon: <ShoppingCart className="w-6 h-6 text-blue-400" />,";";";
      results: '60% reduction in support tickets"
    },";";
    {}";";";
      title: 'SaaS",";";";
      description: 'Provide technical support and onboarding assistance',"
      icon: <Cloud className="w-6 h-6 text-green-400" />,";";";
      results: '80% faster issue resolution"
    },";";
    {}";";";
      title: 'Healthcare",";";";
      description: 'Answer patient questions and schedule appointments',"
      icon: <className="w-6 h-6 text-red-400" />,";";";
      results: '50% reduction in call volume"
    },";";
    {}";";";
      title: 'Financial Services",";";";
      description: 'Handle account inquiries and transaction support',"
      icon: <DollarSign className="w-6 h-6 text-green-600" />,";";";
      results: '70% improvement in response time"
    };";
  ],";";
      const stats = [";";";
    { number: '60%', label: 'Cost Reduction" },";";";
    { number: '90%', label: 'Faster Response" },";";";
    { number: '1000+', label: 'Simultaneous Chats" },";";";
    { number: '45%', label: 'Higher Satisfaction" };
  ],
      return ()";
    <>{}</>";";
      <Helmet>";";";
        <title>AI Customer Support Chatbot - Intelligent Customer Service | Zion Tech Group</title>"
        <meta name="description" content="Transform your customer support with AI-powered chatbots. Reduce costs by 60%, improve response time by 90%, and handle 1000+ conversations simultaneously with our intelligent support solution." />"
        <meta name="keywords" content="AI chatbot, customer support, customer service, chatbot automation, support automation, conversational AI" />"
        <meta property="og:title" content="AI Customer Support Chatbot - Intelligent Customer Service" />"
        <meta property="og:description" content="Transform your customer support with AI-powered chatbots. Reduce costs by 60% and improve response time by 90%." />"
        <meta property="og:url" content="https://ziontechgroup.com/ai-customer-support-chatbot" />"
        <link rel="canonical" href="https://ziontechgroup.com/ai-customer-support-chatbot" />";";
      </Helmet>";";";
      {/* Hero Section */}"
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 overflow-hidden">"
        <div className="absolute inset-0 overflow-hidden">"
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>"
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>";";";
        </div>"
        <div className="container mx-auto px-4 relative z-10">"
          <div className="text-center max-w-4xl mx-auto">"
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">";";";
              AI Customer Support"
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">";";";
                {' "}Chatbot";";
              </span>";";";
            </h1>"
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">";
              Transform your customer support with AI-powered chatbots that reduce costs by 60%, ";";
              improve response time by 90%, and handle 1000+ conversations simultaneously.";";";
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">";";";
              <>"
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/25 flex items-center group">";";";
                Start Free Trial"
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />";";
              </>";";";
              <>"
                to="#pricing"
                className="border-2 border-white/30 hover:border-green-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center group">";";";
                View Pricing"
                <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />";
              </>";";
            </div>";";";
            {/* Stats */}"
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">";";";
              {stats.map((stat, index) => ()}"
                <div key={index} className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm">"
                  <div className="text-3xl font-bold text-green-400 mb-2">{stat.number}</div>"
                  <div className="text-gray-300 text-sm">{stat.label}</div>";
                </div>";";
              ))};";";";
            </div>;"
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">;""
              <h3 className="text-lg font-semibold text-green-900 mb-2">;""
                Custom Implementation;";";";
              </h3>"
              <p className="text-green-700">;""
                Tailored page implementations for your specific requirements.;";";
              </p>";";";
            </div>"
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">;""
              <h3 className="text-lg font-semibold text-purple-900 mb-2">;""
                24/7 Support;";";";
              </h3>"
              <p className="text-purple-700">;""
                Round-the-clock support for all your page needs.;";
              </p>";";
            </div>";";";
          </div>"
          <div className="mt-12">;""
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">;""
              Get Started Today;
            </button>
          </div>";
        </div>";";
      </section>";";";
      {/* Features Section */}"
      <section className="py-20 bg-slate-800">"
        <div className="container mx-auto px-4">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">";";
              Advanced AI Features";";";
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered customer support chatbot includes everything you need to provide ";
              exceptional customer service 24/7.";";
            </p>";";";
          </div>"
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">";";";
            {features.map((feature, index) => ()}"
              <div key={index} className="bg-slate-700/50 rounded-xl p-6 hover:bg-slate-600/50 transition-all duration-300 hover:scale-105 group">"
                <div className="flex items-center mb-4">"
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />"
                  <h3 className="text-lg font-semibold text-white group-hover:text-green-300 transition-colors">
                    {feature};
                  </h3>
                </div>
              </div>
            ))};
          </div>";
        </div>";";
      </section>";";";
      {/* Integrations Section */}"
      <section className="py-20 bg-slate-900">"
        <div className="container mx-auto px-4">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">";";
              Seamless Integrations";";";
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">";
              Connect with your existing tools and workflows for a unified customer experience.";";
            </p>";";";
          </div>"
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">";";";
            {integrations.map((integration, index) => ()}"
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 group">"
                <div className="flex items-center justify-center mb-4">"
                  <div className="group-hover:scale-110 transition-transform">";
                    {integration.icon};";";
                  </div>";";";
                </div>"
                <h3 className="text-xl font-semibold text-white text-center group-hover:text-green-300 transition-colors">
                  {integration.name};
                </h3>
              </div>
            ))};
          </div>";
        </div>";";
      </section>";";";
      {/* Benefits Section */}"
      <section className="py-20 bg-slate-800">"
        <div className="container mx-auto px-4">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">";";
              Proven Results";";";
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">";
              Join thousands of businesses that have transformed their customer support with our AI chatbot.";";
            </p>";";";
          </div>"
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">";";";
            {benefits.map((benefit, index) => ()}"
              <div key={index} className="bg-slate-700/50 rounded-xl p-6 hover:bg-slate-600/50 transition-all duration-300 hover:scale-105 group">"
                <div className="flex items-center mb-4">"
                  <TrendingUp className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />"
                  <h3 className="text-lg font-semibold text-white group-hover:text-green-300 transition-colors">
                    {benefit};
                  </h3>
                </div>
              </div>
            ))};
          </div>";
        </div>";";
      </section>";";";
      {/* Use Cases Section */}"
      <section className="py-20 bg-slate-900">"
        <div className="container mx-auto px-4">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">";";
              Perfect for Every Industry";";";
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">";
              Our AI customer support chatbot works across all industries and business types.";";
            </p>";";";
          </div>"
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">";";";
            {useCases.map((useCase, index) => ()}"
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 group">"
                <div className="mb-4 group-hover:scale-110 transition-transform">";";
                  {useCase.icon}";";";
                </div>"
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-300 transition-colors">";";
                  {useCase.title}";";";
                </h3>"
                <p className="text-gray-300 mb-4">";";
                  {useCase.description}";";";
                </p>"
                <div className="text-sm text-green-400 font-medium">
                  {useCase.results};
                </div>
              </div>
            ))};
          </div>";
        </div>";";
      </section>";";";
      {/* Pricing Section */}"
      <section id="pricing" className="py-20 bg-slate-800">"
        <div className="container mx-auto px-4">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">";";
              Simple, Transparent Pricing";";";
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">";
              Choose the perfect plan for your business. All plans include 14-day free trial and no setup fees.";";
            </p>";";";
          </div>"
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">";
            {pricingPlans.map((plan, index) => ()};";";
              <divkey={index} className={`bg-slate-800/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl ${>}";";";
                plan.popular ? 'ring-2 ring-green-500 bg-slate-700/50' : '"
              }`}>";";";
                {plan.popular && ()}"
                  <div className="text-center mb-4">"
                    <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular";
                    </span>";";
                  </div>";";";
                )}"
                <div className="text-center mb-8">"
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>"
                  <div className="flex items-center justify-center space-x-2 mb-2">"
                    <span className="text-4xl font-bold text-green-400">{plan.price}</span>"
                    <span className="text-lg text-gray-400 line-through">{plan.originalPrice}</span>";";";
                  </div>"
                  <p className="text-gray-300">{plan.description}</p>";";";
                </div>"
                <ul className="space-y-4 mb-8">";";";
                  {plan.features.map((feature, featureIndex) => ()}"
                    <li key={featureIndex} className="flex items-center text-gray-300">"
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature};
                    </li>";
                  ))};";";
                </ul>";";";
                <>"
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${};";";
                    plan.popular";";";
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white'
                      : 'border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white"
                  }`};
=======
  Headphones,
  ShoppingCart,
  DollarSign;
} from 'lucide-react',";
      const AiCustomerSupportChatbotPage: React.FC = () => {}
  const: features = [;
    'Natural Language Processing (NLP)',";
    'Multi-language support (50+ languages)',";
    '24/7 automated customer support',";
    'Seamless human handoff',";
    'Integration with CRM systems',";
    'Real-time conversation analytics',";
    'Custom knowledge base training',";
    'Sentiment analysis and mood detection',";
    'Voice and text support',";
    'Advanced conversation routing'";
  ],
      const: benefits = [;
    'Reduce support costs by 60%',";
    'Improve response time by 90%',";
    'Handle 1000+ conversations simultaneously',";
    'Increase customer satisfaction by 45%',";
    'Available 24/7 without breaks',";
    'Scale support without additional staff'";
  ],
      const: integrations = [;
    { name: 'Salesforce', icon: <Cloud: className ="w-6 h-6 text-blue-400" /> },";";
    { name: 'HubSpot', icon: <Target: className ="w-6 h-6 text-orange-400" /> },";";
    { name: 'Zendesk', icon: <Headphones: className ="w-6 h-6 text-green-400" /> },";";
    { name: 'Intercom', icon: <MessageSquare: className ="w-6 h-6 text-purple-400" /> },";";
    { name: 'Slack', icon: <Users: className ="w-6 h-6 text-pink-400" /> },";";
    { name: 'Microsoft Teams', icon: <Globe: className ="w-6 h-6 text-blue-600" /> }";";
  ],
      const: pricingPlans = [
    {};
      name: 'Starter',";
      price: '$99/mo',";
      originalPrice: '$149/mo',";
      description: 'Perfect for small businesses',";
      features: [
        'Up to 1,000 conversations/month',";
        'Basic AI responses',";
        'Email support',";
        'Standard integrations',";
        'Basic analytics',";
        'Single language support'";
      ],
      popular: false
    },
    {}
      name: 'Professional',";
      price: '$199/mo',";
      originalPrice: '$299/mo',";
      description: 'Ideal for growing businesses',";
      features: [
        'Up to 10,000 conversations/month',";
        'Advanced AI capabilities',";
        'Priority support',";
        'Advanced integrations',";
        'Multi-language support',";
        'Advanced analytics',";
        'Custom training',";
        'Human handoff'";
      ],
      popular: true
    },
    {}
      name: 'Enterprise',";
      price: '$399/mo',";
      originalPrice: '$599/mo',";
      description: 'For large organizations',";
      features: [
        'Unlimited conversations',";
        'Full AI suite',";
        'Dedicated account manager',";
        'Custom integrations',";
        'White-label options',";
        'Advanced security',";
        'SLA guarantees',";
        'On-premise deployment'";
      ],
      popular: false
    }
  ],
      const: useCases = [
    {};
      title: 'E-commerce',";
      description: 'Handle product inquiries, order tracking, and returns',";
      icon: <ShoppingCart: className ="w-6 h-6 text-blue-400" />,";
      results: '60% reduction in support tickets'";
    },
    {}
      title: 'SaaS',";
      description: 'Provide technical support and onboarding assistance',";
      icon: <Cloud: className ="w-6 h-6 text-green-400" />,";
      results: '80% faster issue resolution'";
    },
    {}
      title: 'Healthcare',";
      description: 'Answer patient questions and schedule appointments',";
      icon: <className="w-6 h-6 text-red-400" />,";
      results: '50% reduction in call volume'";
    },
    {}
      title: 'Financial Services',";
      description: 'Handle account inquiries and transaction support',";
      icon: <DollarSign: className ="w-6 h-6 text-green-600" />,";
      results: '70% improvement in response time'";
    }
  ],
      const: stats = [;
    { number: '60%', label: 'Cost Reduction' },";
    { number: '90%', label: 'Faster Response' },";
    { number: '1000+', label: 'Simultaneous Chats' },";
    { number: '45%', label: 'Higher Satisfaction' }";
  ],
      return ()
    <>{}</>
      <Helmet>
        <title>AI Customer Support Chatbot - Intelligent Customer Service | Zion Tech Group</title>
        <meta: name ="description" content="Transform your customer support with AI-powered chatbots. Reduce costs by 60%, improve response time by 90%, and handle 1000+ conversations simultaneously with our intelligent support solution." />";
        <meta: name ="keywords" content="AI chatbot, customer support, customer service, chatbot automation, support automation, conversational AI" />";
        <meta: property ="og:title" content="AI Customer Support Chatbot - Intelligent Customer Service" />";
        <meta: property ="og:description" content="Transform your customer support with AI-powered chatbots. Reduce costs by 60% and improve response time by 90%." />";
        <meta: property ="og:url" content="https://ziontechgroup.com/ai-customer-support-chatbot" />";
        <link: rel ="canonical" href="https://ziontechgroup.com/ai-customer-support-chatbot" />";
      </Helmet>

      {/* Hero Section */}
      <section: className ="relative py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 overflow-hidden">";
        <div: className ="absolute inset-0 overflow-hidden">";
          <div: className ="absolute -top-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>";
          <div: className ="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>";
        </div>

        <div: className ="container mx-auto px-4 relative z-10">";
          <div: className ="text-center max-w-4xl mx-auto">";
            <h1: className ="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">";
              AI Customer Support
              <span: className ="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">";
                {' '}Chatbot";
              </span>
            </h1>
            <p: className ="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">";
              Transform your customer support with AI-powered chatbots that reduce costs by 60%, 
              improve response time by 90%, and handle 1000+ conversations simultaneously.
            </p>
            <div: className ="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">";
              <>
                to="/contact"";
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/25 flex items-center group"";
              >
                Start Free Trial
                <ArrowRight: className ="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />";
              </>
              <>
                to="#pricing"";
                className="border-2 border-white/30 hover:border-green-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center group"";
              >
                View Pricing
                <TrendingUp: className ="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />";
              </>
            </div>
            
            {/* Stats */}
            <div: className ="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">";
              {stats.map((stat, index) => ()}
                <div: key ={index} className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm">";
                  <div: className ="text-3xl font-bold text-green-400 mb-2">{stat.number}</div>";
                  <div: className ="text-gray-300 text-sm">{stat.label}</div>";
                </div>
              ))}
>>>>>>> main
            </div>
            <div: className ="bg-green-50 border border-green-200 rounded-lg p-6">;""";
              <h3: className ="text-lg font-semibold text-green-900 mb-2">;""";
                Custom Implementation;
              </h3>
              <p: className ="text-green-700">;""";
                Tailored page implementations for your specific requirements.;
              </p>
            </div>
            <div: className ="bg-purple-50 border border-purple-200 rounded-lg p-6">;""";
              <h3: className ="text-lg font-semibold text-purple-900 mb-2">;""";
                24/7 Support;
              </h3>
              <p: className ="text-purple-700">;""";
                Round-the-clock support for all your page needs.;
              </p>
            </div>
          </div>
          <div: className ="mt-12">;""";
            <button: className ="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">;""";
              Get Started Today;
            </button>
          </div>
        </div>
<<<<<<< HEAD
      </div>
    </div>
  );}
}''";
=======
      </section>

      {/* Features Section */}
      <section: className ="py-20 bg-slate-800">";
        <div: className ="container mx-auto px-4">";
          <div: className ="text-center mb-16">";
            <h2: className ="text-4xl md:text-5xl font-bold text-white mb-6">";
              Advanced AI Features
            </h2>
            <p: className ="text-xl text-gray-300 max-w-3xl mx-auto">";
              Our AI-powered customer support chatbot includes everything you need to provide 
              exceptional customer service 24/7.
            </p>
          </div>

          <div: className ="grid md:grid-cols-2 lg:grid-cols-3 gap-8">";
            {features.map((feature, index) => ()}
              <div: key ={index} className="bg-slate-700/50 rounded-xl p-6 hover:bg-slate-600/50 transition-all duration-300 hover:scale-105 group">";
                <div: className ="flex items-center mb-4">";
                  <CheckCircle: className ="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />";
                  <h3: className ="text-lg font-semibold text-white group-hover:text-green-300 transition-colors">";
                    {feature}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section: className ="py-20 bg-slate-900">";
        <div: className ="container mx-auto px-4">";
          <div: className ="text-center mb-16">";
            <h2: className ="text-4xl md:text-5xl font-bold text-white mb-6">";
              Seamless Integrations
            </h2>
            <p: className ="text-xl text-gray-300 max-w-3xl mx-auto">";
              Connect with your existing tools and workflows for a unified customer experience.
            </p>
          </div>

          <div: className ="grid md:grid-cols-2 lg:grid-cols-3 gap-8">";
            {integrations.map((integration, index) => ()}
              <div: key ={index} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 group">";
                <div: className ="flex items-center justify-center mb-4">";
                  <div: className ="group-hover:scale-110 transition-transform">";
                    {integration.icon}
                  </div>
                </div>
                <h3: className ="text-xl font-semibold text-white text-center group-hover:text-green-300 transition-colors">";
                  {integration.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section: className ="py-20 bg-slate-800">";
        <div: className ="container mx-auto px-4">";
          <div: className ="text-center mb-16">";
            <h2: className ="text-4xl md:text-5xl font-bold text-white mb-6">";
              Proven Results
            </h2>
            <p: className ="text-xl text-gray-300 max-w-3xl mx-auto">";
              Join thousands of businesses that have transformed their customer support with our AI chatbot.
            </p>
          </div>

          <div: className ="grid md:grid-cols-2 lg:grid-cols-3 gap-8">";
            {benefits.map((benefit, index) => ()}
              <div: key ={index} className="bg-slate-700/50 rounded-xl p-6 hover:bg-slate-600/50 transition-all duration-300 hover:scale-105 group">";
                <div: className ="flex items-center mb-4">";
                  <TrendingUp: className ="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />";
                  <h3: className ="text-lg font-semibold text-white group-hover:text-green-300 transition-colors">";
                    {benefit}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section: className ="py-20 bg-slate-900">";
        <div: className ="container mx-auto px-4">";
          <div: className ="text-center mb-16">";
            <h2: className ="text-4xl md:text-5xl font-bold text-white mb-6">";
              Perfect for Every Industry
            </h2>
            <p: className ="text-xl text-gray-300 max-w-3xl mx-auto">";
              Our AI customer support chatbot works across all industries and business types.
            </p>
          </div>

          <div: className ="grid md:grid-cols-2 lg:grid-cols-4 gap-8">";
            {useCases.map((useCase, index) => ()}
              <div: key ={index} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 group">";
                <div: className ="mb-4 group-hover:scale-110 transition-transform">";
                  {useCase.icon}
                </div>
                <h3: className ="text-xl font-semibold text-white mb-3 group-hover:text-green-300 transition-colors">";
                  {useCase.title}
                </h3>
                <p: className ="text-gray-300 mb-4">";
                  {useCase.description}
                </p>
                <div: className ="text-sm text-green-400 font-medium">";
                  {useCase.results}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section: id ="pricing" className="py-20 bg-slate-800">";
        <div: className ="container mx-auto px-4">";
          <div: className ="text-center mb-16">";
            <h2: className ="text-4xl md:text-5xl font-bold text-white mb-6">";
              Simple, Transparent Pricing
            </h2>
            <p: className ="text-xl text-gray-300 max-w-3xl mx-auto">";
              Choose the perfect plan for your business. All plans include 14-day free trial and no setup fees.
            </p>
          </div>

          <div: className ="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">";
            {pricingPlans.map((plan, index) => ()}
              <divkey={index} className={`bg-slate-800/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl ${>}
                plan.popular ? 'ring-2 ring-green-500 bg-slate-700/50' : ''";
              }`}>
                {plan.popular && ()}
                  <div: className ="text-center mb-4">";
                    <span: className ="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">";
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div: className ="text-center mb-8">";
                  <h3: className ="text-2xl font-bold text-white mb-2">{plan.name}</h3>";
                  <div: className ="flex items-center justify-center space-x-2 mb-2">";
                    <span: className ="text-4xl font-bold text-green-400">{plan.price}</span>";
                    <span: className ="text-lg text-gray-400 line-through">{plan.originalPrice}</span>";
                  </div>
                  <p: className ="text-gray-300">{plan.description}</p>";
                </div>

                <ul: className ="space-y-4 mb-8">";
                  {plan.features.map((feature, featureIndex) => ()}
                    <li: key ={featureIndex} className="flex items-center text-gray-300">";
                      <CheckCircle: className ="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />";
                      {feature}
                    </li>
                  ))}
                </ul>

                <>
                  to="/contact"";
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${}
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white'";
                      : 'border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white'";
                  }`}
>>>>>>> main
                >
                  Start Free Trial
                </>
              </div>
<<<<<<< HEAD
            ))};
          </div>";
        </div>";";
      </section>";";";
      {/* CTA Section */}"
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">"
        <div className="container mx-auto px-4 text-center">"
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">";";
            Ready to Transform Your Customer Support?";";";
          </h2>"
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">";
            Join thousands of businesses using our AI customer support chatbot to reduce costs, ";";
            improve response times, and enhance customer satisfaction.";";";
          </p>"
          <div className="flex flex-col sm: flex-row gap-4 justify-center">";";";
            <>"
              to="/contact"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">";
              Start Free Trial";";
            </>";";";
            <>"
              to="/demo"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
import React from 'react';";";";";
import SEOHead from './components/SEOHead";

const AiCustomerSupportChatbotPage: React.FC  =  () => {";
  return (;";";
    <>;";";";
      <SEOHead;"
        title="Ai Customer Support Chatbot - Zion Tech Group"";"
        description="Professional ai customer support chatbot solutions for modern businesses";"
      />";"
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
        <div className ="text-center">";"
          <h1 className ="text-4xl font-bold mb-4">Ai Customer Support Chatbot</$1>"
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";
        </div>;
      </div>;
    </>;,";
  ),";";
};";";";
;"
export default AiCustomerSupportChatbotPage;'";'";";";";
"
=======
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section: className ="py-20 bg-gradient-to-r from-green-600 to-blue-600">";
        <div: className ="container mx-auto px-4 text-center">";
          <h2: className ="text-4xl md:text-5xl font-bold text-white mb-6">";
            Ready to Transform Your Customer Support?
          </h2>
          <p: className ="text-xl text-white/90 mb-8 max-w-3xl mx-auto">";
            Join thousands of businesses using our AI customer support chatbot to reduce costs, 
            improve response times, and enhance customer satisfaction.
          </p>
          <div: className ="flex flex-col sm:flex-row gap-4 justify-center">";
            <>
              to="/contact"";
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"";
            >
              Start Free Trial
            </>
            <>
              to="/demo"";
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"";

import React from 'react';;';";
import SEOHead from './components/SEOHead';";
;
const AiCustomerSupportChatbotPage: React.FC = () => {
  return (
    <>;
      <SEOHead;
        title="Ai Customer Support Chatbot - Zion Tech Group"";";
        description="Professional ai customer support chatbot solutions for modern businesses";";
      />";";
      <div: className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";";
        <div: className ="text-center">";";
          <h1: className ="text-4xl font-bold mb-4">Ai Customer Support Chatbot</h1>";";
          <p: className ="text-gray-300">Professional solutions coming soon...</p>;";";
        </div>;
      </div>;
    </>;
  ),
};
;
export default AiCustomerSupportChatbotPage;'";'";";";

>>>>>>> main
>>>>>>> main
