import { Link } from 'react-router-dom'

import { Languages, ArrowRight, CheckCircle, Brain, Star, Target, Clock, FileText } from 'lucide-react', Layout from '../layout'

import React from 'react';

export default function AITranslationService() {
  
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 100,000 words/month',
        '100+ languages',
        'Advanced document translation',
        'Priority support',
        'High quality',
        'Human review',
        'Custom terminology'
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited words',
        'All languages',
        'Custom translation models',
        'Dedicated support',
        'Premium quality',
        'White-label solution',
        'SLA guarantee'
      ],
      popular: false;
    }
  ]

    },
    {
      name: 'James Wilson',
      company: 'E-learning Platform',
      content: 'Translating our courses into 8 languages was seamless. The educational content translation is spot-on.',
      rating: 5;
    },
    {
      name: 'Lisa Chen',
      company: 'Legal Firm',
      content: 'The legal translation accuracy is impressive. Our international clients are very satisfied with the service.',
      rating: 5;
    }
  ]

  return (</Target>
    <div></div>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <Languages className="w-5h-5ml-2" /></Languages>
                AI-Powered Translation;
              </div>
              <h1 className="w-5h-5ml-2">AI Translation Service;</h1>
              </h1>
              <p className="w-5h-5ml-2">Transform your global communication with AI-powered translation in 100+ languages. </p>
                Professional quality, real-time translation, and industry-specific solutions.</p>
              </p>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <Link;</Link></Link>
          to="/contact"
          className="bg-gradient-to-rfrom-amber-500to-purple-600text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
        ></Link>
          Start Free Trial;
          <ArrowRight className="w-5h-5ml-2" /></ArrowRight>
        </Link>
                <Link to="#demo" className="border-2border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10 transition-colors">Try Demo;</Link>
                </Link>
              </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h2 className="w-5h-5ml-2" />Intelligent Translation Solutions;</h2>
              </h2>
              <p className="w-5h-5ml-2">AI-powered features that break down language barriers and enable global communication;</p>
              </p>
            </div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-amber-500/20 hover:border-amber-400/40transition-all duration-300" /></div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    {feature.icon}
                    <h3 className="w-5h-5ml-2" />{feature.title}</h3>
                  </div>
                  <p className="w-5h-5ml-2">{feature.description}</p>
                </div>
              ))}
            </div>
        </section>
        {/* Translation Features */}
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h2 className="w-5h-5ml-2" />Complete Translation Platform;</h2>
              </h2>
              <p className="w-5h-5ml-2">Everything you need to translate content across languages and cultures;</p>
              </p>
            </div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {translationFeatures.map((feature, index) => (
                <div key={index} className="bg-slate-800/50rounded-xl p-6 border border-slate-700" /></div>
                  <h3 className="w-5h-5ml-2" />{feature.category}</h3>
                  <ul className="w-5h-5ml-2" /></ul>
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300" /></li>
                        <CheckCircle className="w-5h-5ml-2" /></CheckCircle>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
        </section>
        {/* Pricing Section */}
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h2 className="w-5h-5ml-2" />Flexible Pricing Plans;</h2>
              </h2>
              <p className="w-5h-5ml-2">Choose the plan that fits your translation needs;</p>
              </p>
            </div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {pricingPlans.map((plan, index) => (
                <div key={index} className="{`bg-gradient-to-br" from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular;
                    ? 'border-amber-400/40 scale-105 shadow-2 xl shadow-amber-500/20' 
                    : 'border-amber-500/20 hover: border-amber-400/40'
                }`} /></div>
                  {plan.popular && (
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                      <Star className="w-5h-5ml-2" /></Star>
                      Most Popular;
                    </div>
                  )}
                  <h3 className="w-5h-5ml-2" />{plan.name}</h3>
                  <p className="w-5h-5ml-2">{plan.description}</p>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <span className="w-5h-5ml-2" />{plan.price}</span>
                    <span className="w-5h-5ml-2" />{plan.period}</span>
                  </div>
                  <ul className="w-5h-5ml-2" /></ul>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300" /></li>
                        <CheckCircle className="w-5h-5ml-2" /></CheckCircle>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link;</Link></Link>
                    to="/contact"
                    className="{`w-full" block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular;
                        ? 'bg-gradient-to-r from-amber-500 to-purple-600 text-white hover:from-amber-600 hover:to-purple-700'
                        : 'border-2 border-amber-400 text-amber-400 hover: bg-amber-400/10'
                    }`}
                    />Get Started;
                  </Link>
                </div>
              ))}
            </div>
        </section>
        {/* Testimonials */}
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h2 className="w-5h-5ml-2" />Trusted by Global Businesses;</h2>
              </h2>
              <p className="w-5h-5ml-2">See how our AI Translation Service enables global communication;</p>
              </p>
            </div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50rounded-xl p-6 border border-slate-700" /></div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5h-5tex t-yellow-400fill-current"  /></Star>
                    ))}
                  </div>
                  <p className="w-5h-5ml-2">"{testimonial.content}"</p>
                  <div /></div>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.name}</div>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.company}</div>
                </div>
              ))}
            </div>
        </section>
        {/* CTA Section */}
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h2 className="w-5h-5ml-2" />Break Down Language Barriers Today;</h2>
              </h2>
              <p className="w-5h-5ml-2">Join thousands of businesses using AI Translation Service to reach global audiences;</p>
              </p>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <Link to="/contact" className="bg-gradient-to-rfrom-amber-500to-purple-600text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-purple-700transition-all duration-300">Start Your Free Trial;</Link>
                </Link>
                <Link to="/about" className="border-2border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10 transition-colors">Learn More;</Link>
                </Link>
              </div>
          </div>
        </section>
      </div>
    </Layout>
  )
};

