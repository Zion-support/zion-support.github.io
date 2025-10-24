import React from 'react'
import { Play } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
import { CheckCircle, Zap, Video } from 'lucide-react'

constAIVideoGenerationPage: React.FC= () =>{constfeatures= []
    'AI Video Creation',
    'Auto-editing',
    'Voice Synthesis',
    'Text-to-video',
    'Template Library',
    'Brand Customization',
    'Multi-language Support',
    'HD/4 K Export',
    'Real-time Preview',
    'Collaboration Tools'
  ]

  constbenefits= []
    '9 0% time savings',
    'Professional quality',
    'Unlimited videos',
    'Multi-language support',
    'No technical skills needed',
    'Cost-effective solution'
  ]

  constpricingPlans= [
    {
      name: 'Starter',
      price: '$19 9',
      period: '/month',
      features: ['10videos/month', 'HD quality', 'Basic templates', 'Email support'],
      popular: false
   },
    {name: 'Professional',
      price: '$39 9',
      period: '/month',
      features: ['Unlimited videos', '4 K quality', 'Premium templates', 'Voice cloning', 'Priority support'],
      popular: true
   },
    {name: 'Enterprise',
      price: '$79 9',
      period: '/month',
      features: ['Everything in Pro', 'Custom templates', 'API access', 'Dedicated support', 'White-label'],
      popular: false
    }
  ]

const Page = () => {}
  return ()
  <><SEOOptimizertitle=&quot;AI Video Generator Pro - Create Professional Videos with AI | ZionTechGroup&quot;
        description=&quot;Transform your content creation with AI Video Generator Pro. Create professional videos, animations, and presentations with AI-powered editing and voice synthesis. Starting at$199/month.&quot;
        keywords={['AI video generation', 'video creation', 'AI editing', 'voice synthesis', 'text to video', 'videoautomation']}
        canonicalUrl=&quot;https://ziontechgroup.com/ai-video-generation&quot;
      />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
        <Navigation />
        <main className=&quot;container mx-auto px-4 py-16 pt-24&quot;>
          {/* Hero Section */}
          <section className=&quot;text-center mb-16&quot;></section>
            <div className=&quot;max-w-4xl mx-auto&quot;></div>
              <div className=&quot;flex items-center justify-center mb-6&quot;></div>
                <div className=&quot;w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4&quot;></div>
                  <Video className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <h1 className=&quot;text-4xl md:text-5xl font-bold text-white neon-text&quot;>
                  AI Video Generator Pro
                </h1>
              </div>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Create professional videos with AI-powered editing, voice synthesis, and intelligent automation
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
                <a
                  href=&quot;/contact&quot;
                  className=&quot;cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300&quot;
                >
                  Start Free Trial
                </a>
                <a
                  href=&quot;#demo&quot;
                  className=&quot;flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300&quot;
                >
                  <Play className=&quot;w-5 h-5&quot; />
                  Watch Demo
                </a>
              </div>
            </div>
          </section>
          {/* Features Section */}
          <section className=&quot;mb-16&quot;></section>
            <h2 className=&quot;text-3xl font-bold text-white mb-8 text-center neon-text&quot;>
              Powerful AI Video Features
            </h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;></div>
              {features.map((feature, index) => ()
                <div key={index} className=&quot;cyber-card p-6 hover:scale-105 transition-all duration-300&quot;></div>
                  <div className=&quot;flex items-center mb-4&quot;></div>
                    <CheckCircle className=&quot;w-5 h-5 text-green-400 mr-3&quot; />
                    <h3 className=&quot;text-lg font-semibold text-white&quot;>{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* Benefits Section */}
          <section className=&quot;mb-16&quot;></section>
            <h2 className=&quot;text-3xl font-bold text-white mb-8 text-center neon-text&quot;>
              Why Choose AI Video Generator Pro?
            </h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
              {benefits.map((benefit, index) => ()
                <div key={index} className=&quot;text-center&quot;></div>
                  <div className=&quot;w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                    <Zap className=&quot;w-8 h-8 text-white&quot; />
                  </div>
                  <h3 className=&quot;text-lg font-semibold text-white mb-2&quot;>{benefit}</h3>
                </div>
              ))}
            </div>
          </section>
          {/* Pricing Section */}
          <section className=&quot;mb-16&quot;></section>
            <h2 className=&quot;text-3xl font-bold text-white mb-8 text-center neon-text&quot;>
              Simple, Transparent Pricing
            </h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto&quot;></div>
              {pricingPlans.map((plan, index) => ()
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}></div>
                  {plan.popular && ()
                    <div className=&quot;absolute -top-4 left-1/2 transform -translate-x-1/2&quot;></div>
                      <div className=&quot;bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold&quot;></div>
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className=&quot;text-center mb-6&quot;></div>
                    <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{plan.name}</h3>
                    <div className=&quot;flex items-baseline justify-center&quot;></div>
                      <span className=&quot;text-4xl font-bold text-cyan-400&quot;>{plan.price}</span>
                      <span className=&quot;text-gray-400 ml-1&quot;>{plan.period}</span>
                    </div>
                  </div>
                  <ul className=&quot;space-y-3 mb-8&quot;>
                    {plan.features.map((feature, featureIndex) => ()
                      <li key={featureIndex} className=&quot;flex items-center text-gray-300&quot;>
                        <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-3 flex-shrink-0&quot; />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href=&quot;/contact&quot;
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${}
                      plan.popular
                        ? 'cyber-button'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>
          {/* CTA Section */}
          <section className=&quot;text-center mb-16&quot;></section>
            <div className=&quot;cyber-card p-12 max-w-4xl mx-auto&quot;></div>
              <h2 className=&quot;text-3xl font-bold text-white mb-4 neon-text&quot;>
                Ready to Transform Your Video Creation?
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Join thousands of businesses creating professional videos with AI
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
                <a
                  href=&quot;/contact&quot;
                  className=&quot;cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300&quot;
                >
                  Start Your Free Trial
                </a>
                <a
                  href=&quot;tel:+13024640950&quot;
                  className=&quot;flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300&quot;
                >
                  <span>Call +1 302 464 0950</span>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
</>
  )
}

export default Page;