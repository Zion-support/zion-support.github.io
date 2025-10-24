'use client'
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { MessageCircle } from 'lucide-react';
import { CheckCircle, Phone, Mail } from 'lucide-react';
        description="Revolutionary AI-powered customer support with chatbots, omnichannel support, and intelligent automation. Boost satisfaction by9 5% and reduce costs by6 0%."
        keywords = {['AI customer support', 'chatbots', 'omnichannel support', 'customer service automation', 'AIhelpdesk']};
        canonicalUrl="https: '//ziontechgroup.com/ai-customer-support"
      />
    <div className="min-h-screen bg-gradient-to-br from-slate-90 0 via-purple-90 0 to-slate-90 0 cyber-grid neural-network-bg"></div>
      <Navigation />
      <main className="pt-2 4 pb-1 6 px-4">
        <div className="max-w-7xl mx-auto"></div>
          {
    /* Hero Section  */
    return (</section>
            <h 1 className="text-4xl sm: text-5xl m'',
      d: 'text-6xl font-bold text-white mb-6 neon-text">AI Customer Support
            </h 1>
            <p className="text-xl text-gray-30 0 mb-8 max-w-3xl mx-auto">Transform your customer support with intelligent AI solutions that provide 2 4/7 assistance
              smart ticket routing'', and predictive analytics.
            </p>
            <div className="flex flex-col sm: 'flex-row gap-4 justify-center"></div>
              <a href="tel:+1302464095 0">
                className="cyber-button inline-flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span >Get Started</span>
              </a>
              <a href="/contact">className="border-2 border-cyan-40 0 text-cyan-40 0 px-8 py-3 rounded-lg font-semibold hove'',
      r: 'bg-cyan-40 0 hove',
      r: 'text-slate-90 0 transition-all duration-30 0"
              >
                Learn More
              </a>
            </div>
          </section>
          {
    /* Features Section  */
    return (</section>
            <h 2 className="text-3xl md: text-4xl font-bold text-white text-center mb-1 2 neon-text">Key Features
            </h 2>
            <div className="grid grid-cols-1 m'',
      d: 'grid-cols-2 l',
      g: 'grid-cols-4 gap-8"></div>
              {features.map((feature'', index) => ()
                <div key={index} className="cyber-card p-6 text-center hover: 'scale-10 5 transition-all duration-30 0"></div>
                  <feature.icon className="w-1 2 h-1 2 text-cyan-40 0 mx-auto mb-4" />
                  <h 3 className="text-xl font-bold text-white mb-3">{feature.title''};

  return (
                  <p className="text-gray-30 0 mb-4">{feature.description};

  return (
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => ()
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-30 0">
                        <CheckCircle className="w-4 h-4 text-green-40 0 mr-2 flex-shrink-0" />
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
            <h 2 className="text-3xl md: 'text-4xl font-bold text-white text-center mb-1 2 neon-text">Pricing Plans
            </h 2>
            <div className="grid grid-cols-1 m'',
      d: 'grid-cols-3 gap-8 max-w-6xl mx-auto"></div>
              {pricing.map((plan'', index) => ()
                <div key = {index}>className={`cyber-card p-8 relative ${}
                    index === 1 ? 'ring-2 ring-cyan-40 0 scale-10 5' : '
                  }`}
                ></div>;
                  {index === 1 && ();
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                      <span className="bg-cyan-40 0 text-slate-90 0 px-4 py-1 rounded-full text-sm font-bold">Most Popular
                      </span>
                    </div>
                  )};

  return ({plan.name};

  return (
                  <p className="text-gray-30 0 mb-4">{plan.description};

  return (
                  <div className="text-4xl font-bold text-cyan-40 0 mb-6">{plan.price};

  return (
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => ()
                      <li key={featureIndex} className="flex items-center text-gray-30 0">
                        <CheckCircle className="w-5 h-5 text-green-40 0 mr-3 flex-shrink-0" />
                        {feature};

  return (
                    ))};

  return (
                  <a href = {`mailto: 'kleber@ziontechgroup.com?subject=Interest in ${plan.name'} Plan`};>className="cyber-button w-full text-center block"
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
            <div className="cyber-card p-1 2 max-w-4xl mx-auto"></div>
              <h 2 className="text-3xl md: 'text-4xl font-bold text-white mb-6 neon-text">Ready to Transform Your Customer Support?
              </h 2>
              <p className="text-xl text-gray-30 0 mb-8">Join 50 0+ companies already using our AI customer support solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <a href="tel:+1302464095 0">
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span >Call (30 2) 46 4-095 0</span>
                </a>
                <a href="mailt'',
      o: 'kleber@ziontechgroup.com">
                  className="cyber-button flex items-center justify-center space-x-2"
                  style = {{backgroun'',
      d: 'linear-gradient(4 5deg', #8b5cf 6, #ec489 9)'}};
                >;
                  <Mail className="w-5 h-5" />
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