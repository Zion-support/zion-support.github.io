import React from 'react',;',';';
    ';';';';
import { Helmet } from 'react-helmet-async';
import {
  Headphones,
  Brain,
  Zap,
  Shield,
  BarChart3,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  MessageSquare,
  Filter,
  Target,;
  Clock,;';
  Users,;';';
  Bot,;';';';
  Phone,;',';';
    ';';';
  Mail} from 'lucide-react';
const AICustomerSupportPlatform: Reac t.FC = () => {
  const features = [
    {
      icon: Bo t,
      title: "AI-Powered Chatbots",
      description: "Intelligent chatbots that understand context, provide instant responses, and escalate complex issues to human agents seamlessly.";
},
    {
      icon: MessageSquar e,
      title: "Multi-Channel Support",
      description: "Unified support across live chat, email, phone, social media, and messaging apps with consistent experience.";
},
    {
      icon: Brai n,
      title: "Smart Ticket Routing",
      description: "AI automatically categorizes and routes tickets to the right agents based on expertise and workload."},
    {
      icon: BarChart 3,
      title: "Real-Time Analytics",
      description: "Comprehensive dashboards with customer satisfaction scores, response times, and agent performance metrics.";
},
    {
      icon: Shiel d,
      title: "Knowledge Base AI",
      description: "Automatically updated knowledge base with AI-powered search and intelligent article suggestions."},
    {
      icon: Glob e,
      title: "24/7 Availability",
      description: "Round-the-clock customer support with AI handling common queries and human agents for complex issues."}
  ]
  const benefits = [
    "Reduce response time by 70%",
    "Increase customer satisfaction by 50%",
    "Handle 80% of queries automatically",
    "Scale support without hiring more agents",
    "Improve first-call resolution rates",
    "Reduce support costs by 60%"
  ]
  const integrations = [
    {
      title: "CRM Integration",
      description: "Seamlessly integrate with Salesforce, HubSpot, and other CRM platforms for complete customer context.",
      icon: User s},
    {
      title: "E-commerce Platforms",
      description: "Connect with Shopify, WooCommerce, and Magento for order tracking and product support.",
      icon: Targe t},
    {
      title: "Communication Tools",
      description: "Integrate with Slack, Microsoft Teams, and other collaboration tools for internal coordination.",
      icon: MessageSquar e},
    {
      title: "Analytics Platforms",
      description: "Connect with Google Analytics, Mixpanel, and other tools for comprehensive customer insights.",
      icon: BarChart 3}
  ]
  const pricing = [
    {
      name: "Starter",
      price: "$40",
      period: "/month",
      description: "Perfect for small teams",
      features: [
        "Up to 2 agents",
        "Basic AI chatbot",
        "Email & live chat",
        "Standard templates",
        "Email support"
      ]
},
    {
      name: "Professional",
      price: "$80",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10 agents",
        "Advanced AI features",
        "Multi-channel support",
        "Custom integrations",
        "Priority support",
        "Analytics dashboard"
      ],
      popular: tru e},
    {
      name: "Enterprise",
      price: "$150",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited agents",
        "Custom AI training",
        "Advanced analytics",
        "API access",
        "Dedicated support",
        "White-label solution",
        "SSO integration"
      ]
}
  ]
  return (
    <>
      <Helmet>
        <title>AI Customer Support Platform | Zion Tech Group</title>
        <meta name="description" content="Transform customer support with AI-powered chatbots, multi-channel support, and intelligent ticket routing. Reduce response time by 70% and improve satisfaction."   />
        <meta name="keywords" content="AI customer support, helpdesk software, chatbot, customer service, support platform"   />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
        {/* Hero Section */}
        <section className="py-20 px-4 sm: p x-6 lg: p x-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
                <Headphones className="w-4 h-4 mr-2"  />
                AI-Powered Customer Support
              </div>
              <h1 className="text-4xl md: tex t-6xl font-bold text-gray-900 mb-6">
                AI Customer Support Platform
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Transform your customer support with AI-powered chatbots, intelligent ticket routing, and multi-channel support.
                Reduce response time by 70% and improve customer satisfaction with our comprehensive platform.
              </p>
              <div className="flex flex-col sm: fle x-row gap-4 justify-center">
                <a
                  href="https://ziontechgroup.com/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover: b g-blue-700 transition-colors"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5"  />
                </a>
                <a
                  href="https://ziontechgroup.com/demo"
                  className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover: b g-gray-50 transition-colors"
                >
                  Watch Demo
                </a>
              </div>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-1 md: gri d-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">70%</div>
                <div className="text-gray-600">Faster Response</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">80%</div>
                <div className="text-gray-600">Auto Resolution</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50%</div>
                <div className="text-gray-600">Higher Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Always Available</div>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 px-4 sm: p x-6 lg: p x-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-6">
                Comprehensive Support Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI-powered platform provides everything you need to deliver exceptional customer support at scale.
              </p>
            </div>
            <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 rounded-xl border border-gray-200 hover: shado w-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-blue-100">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 ml-4">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))
      )}
    </div>
  );
}
            </div>
          </div>
        </section>
        {/* Integrations Section */}
        <section className="py-20 px-4 sm: p x-6 lg: p x-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-6">
                Seamless Integrations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Connect with your existing tools and workflows for a unified customer support experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md: gri d-cols-2 gap-8">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover: shado w-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-blue-100">
                      <integration.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 ml-4">{integration.title}</h3>
                  </div>
                  <p className="text-gray-600 text-lg">{integration.description}</p>
                </div>
              ))
      )}
    </div>
  );
}
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-20 px-4 sm: p x-6 lg: p x-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Support Platform?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the benefits of AI-powered customer support that scales with your business.
              </p>
            </div>
            <div className="grid grid-cols-1 md: gri d-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0"  />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))
      )}
    </div>
  );
}
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Real Results</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Response Time</span>
                    <span className="font-semibold text-green-600">-70%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Customer Satisfaction</span>
                    <span className="font-semibold text-green-600">+50%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Auto Resolution</span>
                    <span className="font-semibold text-green-600">80%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Support Costs</span>
                    <span className="font-semibold text-green-600">-60%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Pricing Section */}
        <section className="py-20 px-4 sm: p x-6 lg: p x-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md: tex t-4xl font-bold text-gray-900 mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your support team size. All plans include AI-powered features.
              </p>';
            </div>';';
            <div className={`grid grid-cols-1 md: gri d-cols-3 gap-8`>';';' {pricing.map((plan, index) => (',';';
    ';';';
                <div key={index} className={`relative p-8 rounded-xl border-2 ${plan.popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'} hover: shado w-lg transition-shadow`}>
                  {plan.popular && (
                    <div className=`absolute -top-4 left-1/2 transform -translate-x-1/2`}>
                      <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )
      )}
    </div>
  );
}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-600 mt-2">{plan.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"  />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))
      )}
    </div>
  );
}
                  </ul>';
                  <a href={`https: //ziontechgroup.com/contact`';';
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${';';';
                      plan.popular',';';
    ';';';
                        ? 'bg-blue-600 text-white hover: b g-blue-700'',';';
    ';';';
                        : 'bg-gray-900 text-white hover: b g-gray-800'}`}
                  >
                    Get Started
                  </a>
                </div>
              ))
      )}
    </div>
  );
}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className=`py-20 px-4 sm: p x-6 lg: p x-8 bg-blue-600`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md: tex t-4xl font-bold text-white mb-6">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of businesses using our AI platform to deliver exceptional customer support experiences.
            </p>
            <div className="flex flex-col sm: fle x-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover: b g-gray-100 transition-colors"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5"  />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover: b g-white hover: tex t-blue-600 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-blue-100">
              <p>Email: klebe r@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>';
    </>';';
  )};';';';
export default AICustomerSupportPlatform;"';';';';