'use client'
import { BarChart, Target } from 'lucide-react';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Building } from 'lucide-react';
import { CheckCircle, Phone, Mail } from 'lucide-react';
    { number: '200%', label: 'ROI Improvement' }
  ]

  const useCases = []
    {title: 'B2 B Sales'
      descriptio,
      n: 'Automate lead qualification, follow-ups, and pipeline management for B2 B sales teams.'
      icon: Building
   }
    {title: 'E-commerce'
      descriptio,
      n: 'Personalize customer experiences and optimize conversion rates with AI-driven insights.'
      ico,
      n: ShoppingCart
   }
    {title: 'SaaS Companies'
      descriptio,
      n: 'Streamline the sales process from lead generation to customer onboarding and retention.'
      ico,
      n: Cloud
   }
    {title: 'Real Estate'
      descriptio,
      n: 'Qualify leads, schedule showings, and follow up with potential buyers automatically.'
      icon: Home
    }
  ]

const Page = () => {};
  return ();
  <><SEOOptimizertitle=&quot;AI Sales Automation Solutions - ZionTechGroup&quot;
        description=&quot;Revolutionize your sales process with AI-powered automation. Increase sales by40%, save60% time, and improve lead accuracy by85%.&quot;
        keywords = {['AI sales automation', 'lead scoring', 'sales forecasting', 'customer segmentation', 'salesoptimization']}
        canonicalUrl=&quot;https: //ziontechgroup.com/ai-sales-automation&quot;
      />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
        <Navigation />
        <main className=&quot;pt-16&quot;>
          {
    /* Hero Section  */
    return (</section>
            <div className=&quot;max-w-4xl mx-auto&quot;></div>
              <h1 className=&quot;text-4xl md: text-6xl font-bold text-white mb-6 neon-text&quot;>AI Sales Automation Solutions
              </h1>
              <p className=&quot;text-xl m,
      d:text-2xl text-cyan-400 mb-8&quot;>Automate your sales process and boost revenue with intelligent AI
              </p>
              <p className=&quot;text-lg text-gray-300 mb-12 max-w-3xl mx-auto&quot;>Our AI-powered sales automation platform helps you identify high-value leads
                optimize your sales process, and close more deals with less effort.
              </p>
              <div className=&quot;flex flex-col sm: flex-row gap-4 justify-center items-center mb-16&quot;></div>
                <a href=&quot;tel:+13024640950&quot;>
                  className=&quot;cyber-button flex items-center space-x-2&quot;
                >
                  <Phone className=&quot;w-5 h-5&quot; />
                  <span >Call (302) 464-0950</span>
                </a>
                <a href=&quot;mailt,
      o:kleber@ziontechgroup.com&quot;>
                  className=&quot;cyber-button flex items-center space-x-2&quot;
                  style = {{backgroun,
      d: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >;
                  <Mail className=&quot;w-5 h-5&quot; />
                  <span >Get Free Demo</span>
                </a>
              </div>
              {
    /* Stats  */
    return (</div>
                {stats.map((stat, index) => ()
                  <div key={index} className=&quot;cyber-card p-6 text-center&quot;></div>
                    <div className=&quot;text-3xl md: text-4xl font-bold text-cyan-400 mb-2 neon-text&quot;></div>
                      {stat.number};

  return (
                    <div className=&quot;text-gray-300 font-medium&quot;>{stat.label};

  return (
                  </div>
                ))};

  return (
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
    /* Use Cases Section  */
    return (</section>
            <h2 className=&quot;text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text&quot;>Perfect for Every Industry
            </h2>
            <div className=&quot;grid grid-cols-1 m,
      d:grid-cols-2 gap-8&quot;></div>
              {useCases.map((useCase, index) => ()
                <div key={index} className=&quot;cyber-card p-6 hover: scale-105 transition-all duration-300&quot;></div>
                  <useCase.icon className=&quot;w-12 h-12 text-cyan-400 mb-4&quot; />
                  <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{useCase.title};

  return (
                  <p className=&quot;text-gray-300&quot;>{useCase.description};

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
              <h2 className=&quot;text-3xl md: text-4xl font-bold text-white mb-6 neon-text&quot;>Ready to Automate Your Sales?
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>Join 400+ companies already using our AI sales automation solutions
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
        </main>
        <Footer />
      </div>
</>
  )
{}

export default Page;
}}}}}}