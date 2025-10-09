'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AICustomerSupportBotPage: React.FC = () => {
        return (
    <>
      <Helmet>
        <title>AI Customer Support Bot - 24/7 Intelligent Support | Zion Tech Group</title>
        <meta name="description" content="Provide 24/7 intelligent customer support with AI-powered chatbot. Achieve 90% response time reduction and 45% satisfaction increase." />
        <meta name="keywords" content="AI chatbot, customer support, 24/7 support, natural language processing, customer service automation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-customer-support-bot" />
      </Helmet>
      
      <div>
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">AI Customer Support Bot</h1>
              <p className="text-xl text-cyan-400 mb-8">Provide 24/7 intelligent customer support with AI-powered chatbot</p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Transform your customer service with our advanced AI chatbot. Achieve 90% response time reduction, 
                45% satisfaction increase, and 80% query resolution with intelligent automation.
              </p>
              
              <div>
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >Get Started Today</a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />+1 302 464 0950</a>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="container mx-auto px-4 py-16">
            <div>
              {stats.map((stat, index) => (
                <div>
                  <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">Advanced AI Capabilities</h2>
            
            <div>
              {features.map((feature, index) => (
                <div>
                  <div>
                    <div>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">Choose Your Plan</h2>
            
            <div>
              {pricingPlans.map((plan, index) => (
                <div>
                  {plan.popular && (
                    <div>
                      <div>Most Popular</div>
                    </div>
                  )}
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div>
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a href="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'cyber-button'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >Get Started</a>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Transform Your Customer Support?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of businesses already using AI Customer Support Bot to provide exceptional customer service.
              </p>
              <div>
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >Start Free Trial</a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />Call (302) 464-0950</a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>);
}
export default AICustomerSupportBotPage