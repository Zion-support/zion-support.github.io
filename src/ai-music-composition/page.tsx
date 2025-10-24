import React from 'react';

const Page: React.FC = () => {
  const features = []
    'AI Composition'
    'Multiple Genres'
    'Custom Length'
    'Royalty-free'
    'Commercial Use'
    'High Quality'
    'Mood Selection'
    'Instrument Selection'
    'Tempo Control'
    'Export Options'
  ]

  const benefit,
      s = []
    'Unlimited music'
    'No copyright issues'
    'Custom compositions'
    'Professional quality'
    'Fast generation'
    'Cost-effective'
  ]

  constpricingPlan,
      s = [
    {
      name: 'Starter'
      price: '$9 9'
      perio,
      d: '/month'
      feature,
      s: ['10tracks/month', 'MP3 export', 'Basic genres', 'Email support']
      popular: false
   }
    {name: 'Professional'
      price: '$19 9'
      perio,
      d: '/month'
      feature,
      s: ['Unlimited tracks', 'WAV/MP3 export', 'All genres', 'API access', 'Priority support']
      popular: true
   }
    {name: 'Enterprise'
      price: '$39 9'
      perio,
      d: '/month'
      feature,
      s: ['Everything in Pro', 'Custom genres', 'White-label', 'Dedicated support', 'Commercial license']
      popular: false
    }
  ]


        description=&quot;Create professional, royalty-free music and soundtracks with AI Music Composer. Generate custom compositions in any genre starting at$99/month.&quot;
        keywords = {['AI music composition', 'royalty-free music', 'AI music generation', 'background music', 'music automation', 'AIcomposer']}
        canonicalUrl=&quot;https: //ziontechgroup.com/ai-music-composition&quot;
      />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
        <Navigation />
        <main className=&quot;container mx-auto px-4 py-16 pt-24&quot;>
          {
    /* Hero Section  */
    return (</section>
            <div className=&quot;max-w-4xl mx-auto&quot;></div>
              <div className=&quot;flex items-center justify-center mb-6&quot;></div>
                <div className=&quot;w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4&quot;></div>
                  <Music className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <h1 className=&quot;text-4xl md: text-5xl font-bold text-white neon-text&quot;>AI Music Composer
                </h1>
              </div>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>Generate royalty-free music and soundtracks with AI composition technology
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
                <a href=&quot;/contact&quot;>className=&quot;cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300&quot;
                >
                  Start Free Trial
                </a>
                <a href=&quot;#demo&quot;>
                  className=&quot;flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hove,
      r:bg-cyan-400 hove,
      r:text-slate-900 transition-all duration-300&quot;
                >
                  <Play className=&quot;w-5 h-5&quot; />
                  Listen to Samples
                </a>
              </div>
            </div>
          </section>
          {
    /* Features Section  */
    return (</section>
            <h2 className=&quot;text-3xl font-bold text-white mb-8 text-center neon-text&quot;>AI Music Generation Features
            </h2>
            <div className=&quot;grid grid-cols-1 md: grid-cols-2 l,
      g:grid-cols-3 gap-6&quot;></div>
              {features.map((feature, index) => ()
                <div key={index} className=&quot;cyber-card p-6 hover: scale-105 transition-all duration-300&quot;></div>
                  <div className=&quot;flex items-center mb-4&quot;></div>
                    <CheckCircle className=&quot;w-5 h-5 text-green-400 mr-3&quot; />
                    <h3 className=&quot;text-lg font-semibold text-white&quot;>{feature};

  return (
                  </div>
                </div>
              ))};

  return (
          </section>
          {
    /* Benefits Section  */
    return (</section>
            <h2 className=&quot;text-3xl font-bold text-white mb-8 text-center neon-text&quot;>Why Choose AI Music Composer?
            </h2>
            <div className=&quot;grid grid-cols-1 md: grid-cols-2 l,
      g:grid-cols-3 gap-8&quot;></div>
              {benefits.map((benefit, index) => ()
                <div key={index} className=&quot;text-center&quot;></div>
                  <div className=&quot;w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                    <Zap className=&quot;w-8 h-8 text-white&quot; />
                  </div>
                  <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>{benefit};

  return (
                </div>
              ))};

  return (
          </section>
          {
    /* Pricing Section  */
    return (</section>
            <h2 className=&quot;text-3xl font-bold text-white mb-8 text-center neon-text&quot;>Simple, Transparent Pricing
            </h2>
            <div className=&quot;grid grid-cols-1 md: grid-cols-3 gap-8 max-w-6xl mx-auto&quot;></div>
              {pricingPlans.map((plan, index) => ()
                <div key = {index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}></div>
                  {plan.popular && ();
                    <div className=&quot;absolute -top-4 left-1/2 transform -translate-x-1/2&quot;></div>
                      <div className=&quot;bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold&quot;></div>
                        Most Popular
                      </div>
                    </div>
                  )};

  return (</div>
                    <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{plan.name};

  return (
                    <div className=&quot;flex items-baseline justify-center&quot;></div>
                      <span className=&quot;text-4xl font-bold text-cyan-400&quot;>{plan.price};

  return (
                      <span className=&quot;text-gray-400 ml-1&quot;>{plan.period};

  return (
                    </div>
                  </div>
                  <ul className=&quot;space-y-3 mb-8&quot;>
                    {plan.features.map((feature, featureIndex) => ()
                      <li key={featureIndex} className=&quot;flex items-center text-gray-300&quot;>
                        <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-3 flex-shrink-0&quot; />
                        {feature};

  return (
                    ))};

  return (
                  <a href=&quot;/contact&quot;>className = {`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${}
                      plan.popular
                        ? 'cyber-button'
                        : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hove,
      r:text-slate-900'
                    }`}
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
              <h2 className=&quot;text-3xl font-bold text-white mb-4 neon-text&quot;>Ready to Create Amazing Music?
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>Join thousands of creators using AI music technology
              </p>
              <div className=&quot;flex flex-col sm: flex-row gap-4 justify-center&quot;></div>
                <a href=&quot;/contact&quot;>className=&quot;cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300&quot;
                >
                  Start Your Free Trial
                </a>
                <a href=&quot;tel:+13024640950&quot;>
                  className=&quot;flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hove,
      r:bg-cyan-400 hove,
      r:text-slate-900 transition-all duration-300&quot;
                >
                  <span >Call +1 302 464 0950</span>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
}}}}}
