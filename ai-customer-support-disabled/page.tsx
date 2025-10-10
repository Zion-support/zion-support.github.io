'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { MessageCircle, Headphones, Bot, Zap, Shield, BarChart, Clock, Users, CheckCircle, Star, ArrowRight, Phone, Mail } from 'lucide-react';
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
    <>{}</>{}{}
      <SEOOptimizer
        title="AI Customer Support Solutions - Zion Tech Group"
        description="Revolutionary AI-powered customer support with chatbots, omnichannel support, and intelligent automation. Boost satisfaction by 95% and reduce costs by 60%."
        keywords={['AI customer support', 'chatbots', 'omnichannel support', 'customer service automation', 'AI helpdesk']}
        canonicalUrl="https://ziontechgroup.com/ai-customer-support"
      /></SEOOptimize></SEOOptimizer>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></di></div>
        <Navigation /></Navigatio></Navigation>
        <main className="pt-16"></mai></main>
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center"></sectio></section>
            <div className="max-w-4 xl mx-auto"></di></div>
              <h1 className="text-4 xl md:text-6 xl font-bold text-white mb-6 neon-text"></h1></<<<h>AI</h></<<h>Customer</h> Support Solutions
              </h1>
              <p className="text-xl md:text-2 xl text-cyan-400 mb-8">
                Transform your customer service with intelligent AI that never sleeps
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3 xl mx-auto">
                Our AI-powered customer support platform combines advanced chatbots, omnichannel communication, 
                and intelligent automation to deliver exceptional customer experiences while reducing costs by up to 60%.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"></di></div>
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center space-x-2"
                ></a>
                  <Phone className="w-5 h-5" /></Phon></Phone>
                  <<<<span>Call</span></span></span> (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center space-x-2"
                  style={{background: 'linear-gradient(45 deg, #8 b5 cf6, #ec4899)'}}
                ></a>
                  <Mail className="w-5 h-5" /></Mai></Mail>
                  <<<<span>Get</span></span></<<span>Free</span></<span>Demo</span>
                </a>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"></di></div>
                {stats.map((stat, index) => (
                  <div key={index} className="cyber-card p-6 text-center"></di></div>
                    <div className="text-3 xl md:text-4 xl font-bold text-cyan-400 mb-2 neon-text"></div></di>
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-medium">{stat.label}</di></div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    
  );
};

const AICustomerSupportPage2: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg"></di></div>
      <Navigation /></Navigatio></Navigation>
      
      <main className="pt-24 pb-16 px-4"></mai></main>
        <div className="max-w-7 xl mx-auto"></di></div>
          {/* Hero Section */}
          <section className="text-center mb-16"></sectio></section>
            <h1 className="text-4 xl sm:text-5 xl md:text-6 xl font-bold text-white mb-6 neon-text"></h1></<<<h>AI</h></<<h>Customer</h> Support
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto">
              Transform your customer support with intelligent AI solutions that provide 24/7 assistance, 
              smart ticket routing, and predictive analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></di></div>
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center space-x-2"
              ></a>
                <MessageCircle className="w-4 h-4" /></MessageCircl></MessageCircle>
                <<<<span>Get</span></span></<<span>Started</span></span></span>
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </section>
          {/* Features Section */}
          <section className="mb-16"></sectio></section>
            <h2 className="text-3 xl md:text-4 xl font-bold text-white text-center mb-12 neon-text"></h2></<<<h>Key</h></<<h>Features</h>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></di></div>
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300"></di></div>
                  <feature.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" /></featur></feature>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h></h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2"></u></ul>
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300"></l></li>
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /></CheckCircl></CheckCircle>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
          {/* Pricing Section */}
          <section className="mb-16"></sectio></section>
            <h2 className="text-3 xl md:text-4 xl font-bold text-white text-center mb-12 neon-text"></h2></<<<h>Pricing</h></<<h>Plans</h>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6 xl mx-auto"></di></div>
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`cyber-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                  }`}
                ></di></div>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></di></div>
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold"></span></<<<spa>Most</spa></spa></<<spa>Popular</spa></spa>
                      </span>
                    </div>
                  )}
                  <h3 className="text-2 xl font-bold text-white mb-2">{plan.name}</h></h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4 xl font-bold text-cyan-400 mb-6">{plan.price}</di></div>
                  <ul className="space-y-3 mb-8"></u></ul>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300"></l></li>
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" /></CheckCircl></CheckCircle>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan`}
                    className="cyber-button w-full text-center block"
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>
          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16 text-center"></sectio></section>
            <div className="cyber-card p-12 max-w-4 xl mx-auto"></di></div>
              <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-6 neon-text"></h2></<<<h>Ready</h></<<h>to</h> Transform Your Customer Support?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join 500+ companies already using our AI customer support solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></di></div>
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                ></a>
                  <Phone className="w-5 h-5" /></Phon></Phone>
                  <<<<span>Call</span></span></span> (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45 deg, #8 b5 cf6, #ec4899)'}}
                ></a>
                  <Mail className="w-5 h-5" /></Mai></Mail>
                  <<<<span>Schedule</span></span></<<span>Demo</span></span></span>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer /></Foote></Footer>
      </div>
    </div>

  );
};

export default AICustomerSupportPage2;
