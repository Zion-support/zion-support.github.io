<<<<<<< HEAD
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
const PagePage: React.FC = () => {}
import { CheckCircle, Star, ArrowRight, Zap } from 'lucide-react';
const PricingPage: React.FC = () => {}
  const plans = []
    {}
      nam,
    e: 'Starter',
      price: '$2,999',
      period: '
      descriptio,
    n: 'Perfect for small businesses getting started with AI',
      features: []
        'Basic AI Integration',
        'Cloud Infrastructure Setup',
        'Email Support',
        'Monthly Reports',
        'Basic Analytics Dashboard'
      ],
      popular: false});;)
},
    {}
      name: 'Professional',
      price: '$7,999',
      period: '
      descriptio,
    n: 'Ideal for growing companies with advanced needs',
      features: []
        'Advanced AI Solutions',
        'Custom Development',
        'Priority Support',
        'Weekly Reports',
        'Advanced Analytics',
        'API Access',
        'Training Sessions'
      ],
      popular: true});;)
},
    {}
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: []
        'Custom AI Solutions',
        'Dedicated Team',
        '24;
        'Real-time Monitoring',
        'Custom Integrations',
        'White-label Options',
        'On-site Training',
        'SLA Guarantee'
      ],
      popular: false});;)
}
  ];
=======
'use client;

import React from 'react;

import { Helmet } from 'react-helmet-async;

import { Link } from 'react-router-dom;

import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react;

const PagePage: React.FC = () => {
>>>>>>> origin/main
  return (

    <>
      <Helmet></Helmet>
        <title>Page - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content=""Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." /></meta>"
        <meta name="keywords" content=""page, AI solutions, IT services, Zion Tech Group" /></meta>"
      </Helmet>
      <div className=""min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>"
        <div className=""container mx-auto px-4 py-16"></div>"
          <div className=""text-center mb-16"></div>"
            <h1 className=""text-4xl md:text-6xl font-bold text-white mb-6"></h1>"
              Transparent <span className=""text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Pricing</span>"
            </h1>
            <p className=""text-xl text-gray-300 max-w-3xl mx-auto"></p>"
              Choose the perfect plan for your business needs. All plans include our core AI and IT solutions with transparent, no-hidden-fees pricing.
            </p>
          </div>
          <div className=""grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"></div>"
            {plans.map((plan, index) => (
              <div key = "{plan.name}></div>"
                className="{`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${}"
                  plan.popular;
                    ? 'border-purple-400 shadow-2xl shadow-purple-500/25 scale-105'
                    : 'border-white/20'
                }`}>
                {plan.popular && (
                  <div className=""absolute -top-4 left-1/2 transform -translate-x-1/2"></div>"
                    <div className=""bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2"></div>"
                      <Star className=""w-4 h-4 fill-current" /></Star>"
                      Most Popular;
=======
        <meta name="description" content=Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business. />
        <meta name="keywords" content=page, AI solutions, IT services, Zion Tech Group />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>
        <div className="container mx-auto px-4 py-16>
          <div className="text-center mb-16>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6>
              Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400>Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto>
              Choose the perfect plan for your business needs. All plans include our core AI and IT solutions with transparent, no-hidden-fees pricing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto>
            {plans.map((plan, index) => (

              <div
                key={plan.name}

                className={relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                  plan.popular
                    ? 'border-purple-400 shadow-2xl shadow-purple-500/25 scale-105
                    : 'border-white/20
                }}

              >
                {plan.popular && (

                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2>
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2>
                      <Star className="w-4 h-4 fill-current />
                      Most Popular
>>>>>>> origin/main
                    </div>
                  </div>
                )}

<<<<<<< HEAD
                <div className=""text-center mb-8"></div>"
                  <h3 className=""text-2xl font-bold text-white mb-2">{plan.name}</h3>"
                  <p className=""text-gray-300 mb-6">{plan.description}</p>"
                  <div className=""flex items-baseline justify-center"></div>"
                    <span className=""text-4xl font-bold text-white">{plan.price}</span>"
                    <span className=""text-gray-400 ml-1">{plan.period}</span>"
                  </div>
                </div>
                <ul className=""space-y-4 mb-8"></ul>"
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=""flex items-center text-gray-300"></li>"
                      <CheckCircle className=""w-5 h-5 text-green-400 mr-3 flex-shrink-0" /></CheckCircle>"
=======
                <div className="text-center mb-8>
                  <h3 className="text-2xl font-bold text-white mb-2>{plan.name}</h3>
                  <p className="text-gray-300 mb-6>{plan.description}</p>
                  <div className="flex items-baseline justify-center>
                    <span className="text-4xl font-bold text-white>{plan.price}</span>
                    <span className="text-gray-400 ml-1>{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8>
                  {plan.features.map((feature, featureIndex) => (

                    <li key={featureIndex} className="flex items-center text-gray-300>
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 />
>>>>>>> origin/main
                      {feature}

                    </li>
                  ))}

                </ul>
<<<<<<< HEAD
                <Link to=""/contact"></Link>"
                  className="{`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${}"
                    plan.popular;
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transform hover:scale-105'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}>
                  Get Started;
                  <ArrowRight className=""w-4 h-4" /></ArrowRight>"
=======

                <Link
                  to="/contact
                  className={w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transform hover:scale-105
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20
                  }}

                >
                  Get Started
                  <ArrowRight className="w-4 h-4 />
>>>>>>> origin/main
                </Link>
              </div>
            ))}

          </div>
<<<<<<< HEAD
          <div className=""text-center mt-16"></div>"
            <div className=""bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-4xl mx-auto"></div>"
              <h3 className=""text-2xl font-bold text-white mb-4"></h3>"
                Need a Custom Solution?
              </h3>
              <p className=""text-gray-300 mb-6"></p>"
                We understand that every business is unique. Contact us for a personalized quote tailored to your specific requirements.
              </p>
              <Link to=""/contact"></Link>"
                className=""inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">"
                <Zap className=""w-5 h-5" /></Zap>"
                Get Custom Quote;
=======

          <div className="text-center mt-16>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-4xl mx-auto>
              <h3 className="text-2xl font-bold text-white mb-4>
                Need a Custom Solution?
              </h3>
              <p className="text-gray-300 mb-6>
                We understand that every business is unique. Contact us for a personalized quote tailored to your specific requirements.
              </p>
              <Link
                to="/contact
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105
              >
                <Zap className="w-5 h-5 />
                Get Custom Quote
>>>>>>> origin/main
              </Link>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      <div className=""min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>"
        {/* Hero Section */}
        <section className=""py-20 px-4"></section>"
          <div className=""max-w-7xl mx-auto text-center"></div>"
            <h1 className=""text-5xl md:text-6xl font-bold text-white mb-6"></h1>"
              <span className=""bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"></span>"
                Page;
              </span>
            </h1>
            <p className=""text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>"
              Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business.
            </p>
            <div className=""flex flex-col sm:flex-row gap-4 justify-center"></div>"
              <Link to=""/contact"></Link>"
                className=""inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300">"
                Get Started;
                <ArrowRight className=""w-5 h-5" /></ArrowRight>"
              </Link>
              <Link to=""/services"></Link>"
                className=""inline-flex items-center gap-2 bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold border border-slate-600 hover:bg-slate-600 transition-all duration-300">"
                Learn More;
                <ArrowRight className=""w-5 h-5" /></ArrowRight>"
              </Link>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className=""py-16 px-4"></section>"
          <div className=""max-w-7xl mx-auto"></div>"
            <h2 className=""text-3xl font-bold text-white mb-12 text-center">Why Choose Our Page Services?</h2>"
            <div className=""grid grid-cols-1 md:grid-cols-3 gap-8"></div>"
              <div className=""bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center"></div>"
                <div className=""w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center"></div>"
                  <CheckCircle className=""w-8 h-8 text-white" /></CheckCircle>"
                </div>
                <h3 className=""text-xl font-bold text-white mb-3">Expert Solutions</h3>"
                <p className=""text-gray-300">Professional Page services with proven results</p>"
              </div>
              <div className=""bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center"></div>"
                <div className=""w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center"></div>"
                  <CheckCircle className=""w-8 h-8 text-white" /></CheckCircle>"
                </div>
                <h3 className=""text-xl font-bold text-white mb-3">24/7 Support</h3>"
                <p className=""text-gray-300">Round-the-clock assistance for your business needs</p>"
              </div>
              <div className=""bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center"></div>"
                <div className=""w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center"></div>"
                  <CheckCircle className=""w-8 h-8 text-white" /></CheckCircle>"
                </div>
                <h3 className=""text-xl font-bold text-white mb-3">Custom Solutions</h3>"
                <p className=""text-gray-300">Tailored Page solutions for your specific requirements</p>"
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className=""py-16 px-4"></section>"
          <div className=""max-w-4xl mx-auto text-center"></div>"
            <div className=""bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12"></div>"
              <h2 className=""text-3xl font-bold text-white mb-4"></h2>"
                Ready to Get Started?
              </h2>
              <p className=""text-xl text-gray-300 mb-8"></p>"
                Contact our experts to discuss your Page needs and get a customized solution.
              </p>
              <div className=""flex flex-col sm:flex-row gap-4 justify-center"></div>"
                <a href=""tel:+13024640950"></a>"
                  className=""inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300">"
                  <Phone className=""w-5 h-5" /></Phone>"
                  Call Now;
                </a>
                <a href=""mailto:kleber@ziontechgroup.com"></a>"
                  className=""inline-flex items-center gap-2 bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold border border-slate-600 hover:bg-slate-600 transition-all duration-300">"
                  <Mail className=""w-5 h-5" /></Mail>"
                  Email Us;
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
  return (<div></div>
        <title>Pricing - Zion Tech Group | Transparent AI & IT Pricing<
        <meta name="description" content=""Transparent pricing for AI and IT solutions. Choose from Starter, Professional, or Enterprise plans. Custom solutions available. Get started today."></meta>"
        <meta name="keywords" content=""AI pricing, IT services pricing, cloud solutions cost, enterprise AI pricing, custom development pricing"></meta>"
      <
    <)
  );
  ));)
=======
      </div>
    </>
  );

  );  ));)
>>>>>>> origin/main
};
export default PagePage;