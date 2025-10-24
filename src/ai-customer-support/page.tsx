'use client'


const Page: React.FC = () => {
  const feature,
      s = [
    {,
    'icon: MessageCircle,',
    'title: '2 4/7 AI Chat Support'',
    'description: 'Intelligent chatbots that provide instant responses to customer queries with natural language understanding.'',
    'benefits: ['Instant Response', 'Multi-language Support', 'Context Awareness', 'Escalation to Humans''
  ]
   }
    {
      icon: Users,
      title: 'Smart Ticket Routing'
      descriptio,
      n: 'AI-powered ticket class ification and routing to the most appropriate support agent based on expertise and workload.'
      benefit,
      s: ['Intelligent Routing', 'Priority Classification', 'Load Balancing', 'Expert Matching']
   }
    {
      icon: Clock,
      title: 'Predictive Analytics'
      descriptio,
      n: 'Predict customer issues before they occur and proactively reach out with solutions.'
      benefit,
      s: ['Issue Prediction', 'Proactive Support', 'Trend Analysis', 'Prevention Strategies']
   }
    {
      icon: Shield,
      title: 'Knowledge Base Integration'
      descriptio,
      n: 'Seamlessly integrated knowledge base that provides accurate, up-to-date information to both AI and human agents.'
      benefits: ['Real-time Updates', 'Version Control', 'Search Optimization', 'Content Management']
    }
  ]

  const pricing = []
    {name: 'Starter'
      price: '$14 9/month'
      descriptio,
      n: 'Perfect for small businesses'
      feature,
      s: ['Up to 1,000conversations/month', 'Basic AI chatbot', 'Email support', 'Standard integrations']
   }
    {name: 'Professional'
      price: '$29 9/month'
      descriptio,
      n: 'Ideal for growing companies'
      feature,
      s: ['Up to10,000conversations/month', 'Advanced AI with learning', 'Phone & email support', 'Advanced integrations', 'Analytics dashboard']
   }
    {name: 'Enterprise'
      price: '$59 9/month'
      descriptio,
      n: 'For large organizations'
      feature,
      s: ['Unlimited conversations', 'Custom AI training', '24/7 human support', 'Custom integrations', 'Advanced analytics', 'Dedicated account manager']
    }
  ]


        description=&quot;Revolutionary AI-powered customer support with chatbots, omnichannel support, and intelligent automation. Boost satisfaction by95% and reduce costs by60%.&quot;
        keywords = {['AI customer support', 'chatbots', 'omnichannel support', 'customer service automation', 'AIhelpdesk']}
        canonicalUrl=&quot;https: //ziontechgroup.com/ai-customer-support&quot;
      />
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg&quot;></div>
      <Navigation />
      <main className=&quot;pt-24 pb-16 px-4&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;></div>
          {
    /* Hero Section  */
    return (</section>
            <h1 className=&quot;text-4xl sm: text-5xl m,
      d:text-6xl font-bold text-white mb-6 neon-text&quot;>AI Customer Support
            </h1>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto&quot;>Transform your customer support with intelligent AI solutions that provide 24/7 assistance
              smart ticket routing, and predictive analytics.
            </p>
            <div className=&quot;flex flex-col sm: flex-row gap-4 justify-center&quot;></div>
              <a href=&quot;tel:+13024640950&quot;>
                className=&quot;cyber-button inline-flex items-center space-x-2&quot;
              >
                <MessageCircle className=&quot;w-4 h-4&quot; />
                <span >Get Started</span>
              </a>
              <a href=&quot;/contact&quot;>className=&quot;border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hove,
      r:bg-cyan-400 hove,
      r:text-slate-900 transition-all duration-300&quot;
              >
                Learn More
              </a>
            </div>
          </section>
          {
    /* Features Section  */
    return (</section>
            <h2 className=&quot;text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text&quot;>Key Features
            </h2>
            <div className=&quot;grid grid-cols-1 m,
      d:grid-cols-2 l,
      g:grid-cols-4 gap-8&quot;></div>
              {features.map((feature, index) => ()
                <div key={index} className=&quot;cyber-card p-6 text-center hover: scale-105 transition-all duration-300&quot;></div>
                  <feature.icon className=&quot;w-12 h-12 text-cyan-400 mx-auto mb-4&quot; />
                  <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{feature.title};

  return (
                  <p className=&quot;text-gray-300 mb-4&quot;>{feature.description};

  return (
                  <ul className=&quot;space-y-2&quot;>
                    {feature.benefits.map((benefit, benefitIndex) => ()
                      <li key={benefitIndex} className=&quot;flex items-center text-sm text-gray-300&quot;>
                        <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2 flex-shrink-0&quot; />
                        {benefit};

  return (
                    ))};

  return (
                </div>
              ))};

  return (
          </section>
          {
    /* Pricing Section  */
    return (</section>
            <h2 className=&quot;text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text&quot;>Pricing Plans
            </h2>
            <div className=&quot;grid grid-cols-1 m,
      d:grid-cols-3 gap-8 max-w-6xl mx-auto&quot;></div>
              {pricing.map((plan, index) => ()
                <div key = {index}>className={`cyber-card p-8 relative ${}
                    index === 1 ? 'ring-2 ring-cyan-400 scale-105' : ''
                  }`}
                ></div>
                  {index === 1 && ();
                    <div className=&quot;absolute -top-4 left-1/2 transform -translate-x-1/2&quot;></div>
                      <span className=&quot;bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold&quot;>Most Popular
                      </span>
                    </div>
                  )};

  return ({plan.name};

  return (
                  <p className=&quot;text-gray-300 mb-4&quot;>{plan.description};

  return (
                  <div className=&quot;text-4xl font-bold text-cyan-400 mb-6&quot;>{plan.price};

  return (
                  <ul className=&quot;space-y-3 mb-8&quot;>
                    {plan.features.map((feature, featureIndex) => ()
                      <li key={featureIndex} className=&quot;flex items-center text-gray-300&quot;>
                        <CheckCircle className=&quot;w-5 h-5 text-green-400 mr-3 flex-shrink-0&quot; />
                        {feature};

  return (
                    ))};

  return (
                  <a href = {`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan`};>className=&quot;cyber-button w-full text-center block&quot;
                  >
                    Get Started
                  </a>
                </div>
              ))};

  return (
          </section>
          {
    /* CTA Section  */
    return (</section>
            <div className=&quot;cyber-card p-12 max-w-4xl mx-auto&quot;></div>
              <h2 className=&quot;text-3xl md: text-4xl font-bold text-white mb-6 neon-text&quot;>Ready to Transform Your Customer Support?
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>Join 500+ companies already using our AI customer support solutions
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
                <a href=&quot;tel:+13024640950&quot;>
                  className=&quot;cyber-button flex items-center justify-center space-x-2&quot;
                >
                  <Phone className=&quot;w-5 h-5&quot; />
                  <span >Call (302) 464-0950</span>
                </a>
                <a href=&quot;mailt,
      o:kleber@ziontechgroup.com&quot;>
                  className=&quot;cyber-button flex items-center justify-center space-x-2&quot;
                  style = {{backgroun,
      d: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >;
                  <Mail className=&quot;w-5 h-5&quot; />
                  <span >Schedule Demo</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
</>
  )
{}

export default Page;
}}}}