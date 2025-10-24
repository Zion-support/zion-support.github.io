import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async'
import { Mail, Palette, Users, Zap, CheckCircle, ArrowRight, BarChart3, Shield, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import React  from 'react';
import { Palette, ArrowRight} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

      <Helmet>
        <title>Email Signature - Zion Tech Group</title>
        <meta name="description" content="Email Signature solutions by Zion Tech Group" />
      </Helmet>
        <title>AI Email Signature Manager - Professional Email Signatures | Zion Tech Group</title>
        <meta name="description" content="Create and manage professional email signatures for your team. Beautiful templates, team management, and analytics included." / / />
        <meta name="keywords" content="email signature, email marketing, team management, professional signatures, email branding" / / />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas/email-signature" />
      </Helmet>

      <div className="min-h-screenbg-gray-900text-white">
        </div>
        {/* Hero Section */}
        <section className="relative py-20px-4overflow-hidden" />

              {features.map((feature, index) => (
                <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2xll p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xllhover:shadow-cyan-500/10" />
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xll mb-6 group-hover:scale-110transition-transformduration-300">{feature.icon}
                  </div>

              {pricingPlans.map((plan, index) => (
                <div key="{index}" className="{`relative" bg-white/10 backdrop-blur-lg rounded-2xll p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-2xll shadow-cyan-500/20' 
                    : 'border-white/20 hover: border-cyan-400/30'
                }`} />
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2transform-translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold"  />Most Popular
                      </div>
                  )}
                  
                  <div className="text-centermb-8">
                    <h3 className="text-2 xl font-bold text-white mb-2"   />{plan.name}</h3>
                    <p className="text-gray-300 mb-4">
              {plan.description}</p>
                    <div className="flex items-baselinejustify-center">
                      <span className="text-5 xlfont-bold text-white"   />{plan.price}</span>
                      <span className="text-gray-400ml-2"   />{plan.period}</span>
                    </div>
                  
                  <ul className="space-y-4mb-8" />
                    {plan.features.map((feature, featureIndex) => (
                      <li key="{featureIndex}" className="flex items-centerspace-x-3" />
                        <CheckCircle className="w-5 h-5text-green-400flex-shrink-0" />
                        <span className="text-gray-300"   />{feature}</span>
                      </li>

                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className="{`block" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                    }`}
                    />Get Started
                  </Link>
                </div>

              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-20px-4relative" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10via-purple-500/10to-pink-500/10" />
          <div className="relative max-w-7xlmx-autotext-center">
            <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3 xl p-8sm:p-12lg:p-16">
              <h2 className="text-4xl sm:text-5 xl md:text-6 xl font-bold text-white mb-6leading-tight" />
                Ready to Elevate Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent"   />Email Branding?</span>
              </h2>

              <p className="text-xl sm:text-2 xl text-white/90 mb-8 sm:mb-12 max-w-4 xlmx-autoleading-relaxed">
              Join thousands of businesses using our email signature management platform. 
                Start your free trial today and see the difference professional signatures make.
              </p>
              
              <div className="flex flex-col sm:flex-rowgap-6justify-center">
                <Link to="/contact" className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" >
           
          <span    />
        </Link>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
                </Link>
                <Link to="/pricing" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" >
           
          <span    />
        </Link>View All Plans</span>
                  <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
                </Link>
              </div>
          </div>
        </section>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      </div>

  )
}

export default function EmailsignaturePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Email Signature - Zion Tech Group</title>
        <meta name="description" content="Professional email signature services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Email Signature</h1>
          <p className="text-lg text-gray-300 mb-8">Professional email signature services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default EmailSignaturePage;
