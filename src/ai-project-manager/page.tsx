import React from 'react'
import React from 'react';

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Phone, TrendingUp } from 'lucide-react'

constAIProjectManagerPage: React.FC= () =>{constfeatures= [
    'AI-powered project planning and resource allocation',
    'Intelligent timeline prediction and risk assessment',
    'Smart task management with priority optimization',
    'Real-time collaboration and team coordination',
    'Predictive analytics for project success',
    'Automated progress tracking and reporting',
    'Budget optimization and cost forecasting',
    'Integration with popular project management tools'
  ]

  const benefits = [
    '40% increase in project delivery speed',
    '70% reduction in project delays',
    '85% improvement in planning accuracy',
    '30% cost reduction through optimization',
    '95% team productivity boost',
    '50% faster decision making'
  ]

  constpricing= [
    {
      plan: 'Starter',
      price: '$19 9',
      period: '/month',
      features: ['Up to5projects', '10team members', 'Basic AI planning', 'Email support'],
      popular: false
   },
    {plan: 'Professional',
      price: '$39 9',
      period: '/month',
      features: ['Unlimited projects', '50team members', 'Advanced AI features', 'Priority support', 'Custom integrations'],
      popular: true
   },
    {plan: 'Enterprise',
      price: 'Custom',
      period: '',
      features: ['Unlimited everything', 'Custom AI training', 'Dedicated support', 'On-premise deployment', 'SLA guarantee'],
      popular: false
    }
  ]

  return (
    <>
      <Navigation />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
        <main className=&quot;container mx-auto px-4 py-16 pt-24&quot;>
          {/* Hero Section */}
          <section className=&quot;text-center mb-16&quot;></section>
            <h1 className=&quot;text-5xl md:text-6xl font-bold text-white mb-6 neon-text&quot;>
              AI Project Manager Pro
            </h1>
            <p className=&quot;text-xl text-cyan-400 mb-8&quot;>
              Intelligent project planning with AI-powered resource optimization
            </p>
            <p className=&quot;text-lg text-gray-300 max-w-4xl mx-auto mb-8&quot;>
              Transform your project management with our advanced AI system that predicts timelines,
              optimizes resources, and ensures project success through intelligent automation.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <a
                href=&quot;/contact&quot;
                className=&quot;cyber-button px-8 py-4 text-lg font-semibold&quot;
              >
                Get Started Today
              </a>
              <a
                href=&quot;tel:+13024640950&quot;
                className=&quot;flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300&quot;
              >
                <Phone className=&quot;w-5 h-5&quot; />
                +1 302 464 0950
              </a>
            </div>
          </section>
          {/* Features Section */}
          <section className=&quot;mb-16&quot;></section>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text&quot;>
              Powerful AI Features
            </h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;></div>
              {features.map((feature, index) => (
                <div key={index} className=&quot;cyber-card p-6 hover:scale-105 transition-all duration-300&quot;></div>
                  <CheckCircle className=&quot;w-8 h-8 text-green-400 mb-4&quot; />
                  <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>{feature}</h3>
                </div>
              ))}
            </div>
          </section>
          {/* Benefits Section */}
          <section className=&quot;mb-16&quot;></section>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text&quot;>
              Proven Results
            </h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;></div>
              {benefits.map((benefit, index) => (
                <div key={index} className=&quot;quantum-card p-6 text-center hover:scale-105 transition-all duration-300&quot;></div>
                  <TrendingUp className=&quot;w-12 h-12 text-cyan-400 mx-auto mb-4&quot; />
                  <p className=&quot;text-lg text-white font-semibold&quot;>{benefit}</p>
                </div>
              ))}
            </div>
          </section>
          {/* Pricing Section */}
          <section className=&quot;mb-16&quot;></section>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text&quot;>
              Choose Your Plan
            </h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto&quot;></div>
              {pricing.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}></div>
                  {plan.popular && (
                    <div className=&quot;absolute -top-4 left-1/2 transform -translate-x-1/2&quot;></div>
                      <div className=&quot;bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold&quot;></div>
                        Most Popular
                      </div>
                    </div>
                  )}
                  <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{plan.plan}</h3>
                  <div className=&quot;mb-6&quot;></div>
                    <span className=&quot;text-4xl font-bold text-cyan-400&quot;>{plan.price}</span>
                    <span className=&quot;text-gray-300&quot;>{plan.period}</span>
                  </div>
                  <ul className=&quot;space-y-3 mb-8&quot;>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className=&quot;flex items-center text-gray-300&quot;>
                        <CheckCircle className=&quot;w-5 h-5 text-green-400 mr-3 flex-shrink-0&quot; />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href=&quot;/contact&quot;
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>
          {/* Contact Section */}
          <section className=&quot;text-center&quot;></section>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-8 neon-text&quot;>
              Ready to Transform Your Project Management?
            </h2>
            <p className=&quot;text-lg text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
              Contact us today to learn more about AI Project Manager Pro and how it can revolutionize your project management processes.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <a
                href=&quot;/contact&quot;
                className=&quot;cyber-button px-8 py-4 text-lg font-semibold&quot;
              >
                Contact Us
              </a>
              <a
                href=&quot;tel:+13024640950&quot;
                className=&quot;flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300&quot;
              >
                <Phone className=&quot;w-5 h-5&quot; />
                +1 302 464 0950
              </a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default AIProjectManagerPage