'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { MessageCircle } from 'lucide-react';
const AICustomerSupportPage: React.FC = () => {
  const features = [
    {
      icon: MessageCircle,
      title: '24/7 AI Chat Support',
      description: 'Intelligent chatbots that provide instant responses to customer queries with natural language understanding.',
      benefits: ['Instant Response', 'Multi-language Support', 'Context Awareness', 'Escalation to Humans']
    },
    {
      icon: Users,
      title: 'Smart Ticket Routing',
      description: 'AI-powered ticket classification and routing to the most appropriate support agent based on expertise and workload.',
      benefits: ['Intelligent Routing', 'Priority Classification', 'Load Balancing', 'Expert Matching']
    },
    {
      icon: Clock,
      title: 'Predictive Analytics',
      description: 'Predict customer issues before they occur and proactively reach out with solutions.',
      benefits: ['Issue Prediction', 'Proactive Support', 'Trend Analysis', 'Prevention Strategies']
    },
    {
      icon: Shield,
      title: 'Knowledge Base Integration',
      description: 'Seamlessly integrated knowledge base that provides accurate, up-to-date information to both AI and human agents.',
      benefits: ['Real-time Updates', 'Version Control', 'Search Optimization', 'Content Management']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$149/month',
      description: 'Perfect for small businesses',
      features: ['Up to 1,000 conversations/month', 'Basic AI chatbot', 'Email support', 'Standard integrations']
    },
    {
      name: 'Professional',
      price: '$299/month',
      description: 'Ideal for growing companies',
      features: ['Up to 10,000 conversations/month', 'Advanced AI with learning', 'Phone & email support', 'Advanced integrations', 'Analytics dashboard']
    },
    {
      name: 'Enterprise',
      price: '$599/month',
      description: 'For large organizations',
      features: ['Unlimited conversations', 'Custom AI training', '24/7 human support', 'Custom integrations', 'Advanced analytics', 'Dedicated account manager']
    }
  ];
  
  const stats = [
    { number: '95%', label: 'Customer Satisfaction' },
    { number: '60%', label: 'Faster Resolution' },
    { number: '24/7', label: 'Availability' },
    { number: '50+', label: 'Languages Supported' }
  ];
  
  return (
    <>
      <SEOOptimizer
        title="AI Customer Support Solutions - Zion Tech Group"
        description="Revolutionary AI-powered customer support with chatbots, omnichannel support, and intelligent automation. Boost satisfaction by 95% and reduce costs by 60%."
        keywords={['AI customer support', 'chatbots', 'omnichannel support', 'customer service automation', 'AI helpdesk']}
        canonicalUrl="https://ziontechgroup.com/ai-customer-support"
      /><>
</SEOOptimizer
        title="AI Customer Support Solutions - Zion Tech Group"
        description="Revolutionary AI-powered customer support with chatbots, omnichannel support, and intelligent automation. Boost satisfaction by 95% and reduce costs by 60%."
        keywords={['AI customer support', 'chatbots', 'omnichannel support', 'customer service automation', 'AI helpdesk']}
        canonicalUrl="https://ziontechgroup.com/ai-customer-support"
      />
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg"></div><>
<//div>
<Navigation /><>
</Navigation />
<main className="pt-24 pb-16 px-4"><>
</main className="pt-24 pb-16 px-4">
<div className="max-w-7xl mx-auto"></div><//div>
          {/* Hero Section */}</div><>
<//div>
<section className="text-center mb-16"><>
</section className="text-center mb-16">
<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text"></h1><//h1>
              AI Customer Support</h1><>
<//h1>
</h1><>
<//h1>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your customer support with intelligent AI solutions that provide 24/7 assistance, </p><//p>
              smart ticket routing, and predictive analytics.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center space-x-2"
              ><>
</a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center space-x-2"
              >
<MessageCircle className="w-4 h-4" /><>
</MessageCircle className="w-4 h-4" />
<span>Get Started</span><>
<//span>
</a><>
<//a>
<a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              ></a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Learn More
              </a><>
<//a>
</div><>
<//div>
</section><//section>
          {/* Features Section */}
          <section className="mb-16"><>
</section className="mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text"></h1><//h1>
              Key Features</h1><>
<//h1>
</h2><>
<//h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div><//div>
              {features.map((feature, index) => (</div><>
<//div>
<div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300"></div><>
<//div>
<feature.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" /><>
</feature.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
<h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3><>
<//h3>
<p className="text-gray-300 mb-4">{feature.description}</p><>
<//p>
<ul className="space-y-2"></ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300"><>
</li key={benefitIndex} className="flex items-center text-sm text-gray-300">
<CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /></CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li><//li>
                    ))}
                  </ul><>
<//ul>
</div><//div>
              ))}
            </div><>
<//div>
</section><//section>
          {/* Pricing Section */}
          <section className="mb-16"><>
</section className="mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text"></h1><//h1>
              Pricing Plans</h1><>
<//h1>
</h2><>
<//h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"></div><//div>
              {pricing.map((plan, index) => (</div><>
<//div>
<div
                  key={index}
                  className={`cyber-card p-8 relative ${
                    index === 1 ? 'ring-2 ring-cyan-400 scale-105' : ''
                  }`}
                ></div><//div>
                  {index === 1 && (</div><>
<//div>
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div><>
<//div>
<span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold"></span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span><>
<//span>
</div><//div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3><>
<//h3>
<p className="text-gray-300 mb-4">{plan.description}</p><>
<//p>
<div className="text-4xl font-bold text-cyan-400 mb-6">{plan.price}</div><>
<//div>
<ul className="space-y-3 mb-8"></ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300"><>
</li key={featureIndex} className="flex items-center text-gray-300">
<CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" /></CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li><//li>
                    ))}
                  </ul><>
<//ul>
<a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan`}
                    className="cyber-button w-full text-center block"
                  ></a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan`}
                    className="cyber-button w-full text-center block"
                  >
                    Get Started
                  </a><>
<//a>
</div><//div>
              ))}
            </div><>
<//div>
</section><//section>
          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16 text-center"><>
</section className="container mx-auto px-4 py-16 text-center">
<div className="cyber-card p-12 max-w-4xl mx-auto"></div><>
<//div>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text"></h1><//h1>
                Ready to Transform Your Customer Support?</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-gray-300 mb-8"></p><//p>
                Join 500+ companies already using our AI customer support solutions</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                ><>
</a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
<Phone className="w-5 h-5" /><>
</Phone className="w-5 h-5" />
<span>Call (302) 464-0950</span><>
<//span>
</a><>
<//a>
<a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                ><>
</a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
<Mail className="w-5 h-5" /><>
</Mail className="w-5 h-5" />
<span>Schedule Demo</span><>
<//span>
</a><>
<//a>
</div><>
<//div>
</div><>
<//div>
</section><>
<//section>
</div><>
<//div>
</main><>
<//main>
<Footer /><>
</Footer />
</div><>
<//div>
</><//>
  );
};

export default AICustomerSupportPage;