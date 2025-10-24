<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
export default function AIAnalyticsDashboardProZionTechGroup() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Analytics Dashboard Pro - Zion Tech Group</title>
        <meta name="description" content="Ai Analytics Dashboard Pro solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Analytics Dashboard Pro</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai analytics dashboard pro solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
  );
}
=======


import {BarChart3, ArrowRight, CheckCircle, Brain, Globe, Star, Target} from 'lucide-react'

import Layout from '../layout'
import React from 'react';

import React from 'react';
import {Helmet} from 'react-helmet-async';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function AIAnalyticsDashboardPro() {return (
    <>
      <title>AI Analytics Dashboard Pro - Zion Tech Group</title>

            <h1 className="text-4xl font-bold text-white mb-6">AI Analytics Dashboard Pro</h1>
            <p className="text-lg text-gray-300 mb-8">Professional AI analytics dashboard pro services coming soon.</p>

              Contact Us

      <  />
  );}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AianalyticsdashboardproPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Ai Analytics Dashboard Pro - Zion Tech Group</title>
        <meta name="description" content="Professional ai analytics dashboard pro services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Analytics Dashboard Pro</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai analytics dashboard pro services coming soon.</p>
          
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
=======
import React from 'react'
import { Link } from 'react-router-dom'
import { BarChart3, ArrowRight, CheckCircle, Brain, Globe, Star, Target } from 'lucide-react';
import Layout from '../layout'

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4sm:px-6lg:px-8" />
          <div className="max-w-7xlmx-auto">

              {features.map((feature, index) => (
                <div key="{index}" className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-green-500/20 hover:border-green-400/40transition-allduration-300" />

              {dashboardFeatures.map((feature, index) => (
                <div key="{index}" className="bg-slate-800/50 rounded-xl p-6borderborder-slate-700" />

              {pricingPlans.map((plan, index) => (
                <div key="{index}" className="{`bg-gradient-to-br" from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-green-400/40 scale-105 shadow-2xll shadow-green-500/20' 
                    : 'border-green-500/20 hover: border-green-400/40'
                }`} />
                  {plan.popular && (
                    <div className="inline-flex items-center px-3 py-1 bg-green-500/20 rounded-full text-green-400 text-smfont-mediummb-4">
                      <Star className="w-4h-4mr-1" />
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2 xl font-bold text-white mb-2"   />{plan.name}</h3>
                  <p className="text-gray-300 mb-6">
              {plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xlfont-bold text-white"   />{plan.price}</span>
                    <span className="text-gray-400"   />{plan.period}</span>
                  </div>
                  <ul className="space-y-3mb-8" />
                    {plan.features.map((feature, featureIndex) => (
                      <li key="{featureIndex}" className="flex items-center text-gray-300" />
                        <CheckCircle className="w-5 h-5text-green-400mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="{`w-full" block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-purple-600 text-white hover:from-green-600 hover:to-purple-700'
                        : 'border-2 border-green-400 text-green-400 hover: bg-green-400/10'
                    }`}
                    />Get Started
                  </Link>
                </div>
              ))}
            </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-rfrom-slate-800/30to-purple-900/30" />
          <div className="max-w-7xlmx-auto">
            <div className="text-centermb-12">
              <h2 className="text-3 xl font-bold text-white mb-4"  />Trusted by Data-Driven Companies
              </h2>
              <p className="text-gray-300">
              See how our analytics platform transforms business decisions
              </p>
            </div>
            <div className="grid grid-cols-1md:grid-cols-3gap-8">
              {testimonials.map((testimonial, index) => (
                <div key="{index}" className="bg-slate-800/50 rounded-xl p-6borderborder-slate-700" />
                  <div className="flex items-centermb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key="{i}" className="w-5 h-5text-yellow-400fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">
              "{testimonial.content}"</p>
                  <div />
                    <div className="font-semiboldtext-white"   />{testimonial.name}</div>
                    <div className="text-smtext-gray-400"   />{testimonial.company}</div>
                </div>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4sm:px-6lg:px-8" />
          <div className="max-w-4 xlmx-autotext-center">
            <div className="bg-gradient-to-r from-green-500/20 to-purple-500/20 rounded-2xll p-8borderborder-green-500/30">
              <h2 className="text-3 xl font-bold text-white mb-4"  />Start Making Data-Driven Decisions Today
              </h2>
              <p className="text-lg text-gray-300 mb-8">
              Join thousands of businesses using AI Analytics Dashboard Pro to unlock their data potential
              </p>
              <div className="flex flex-col sm:flex-rowgap-4justify-center">
                <Link to="/contact" className="bg-gradient-to-r from-green-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-purple-700transition-allduration-300">Start Your Free Trial
                </Link>
                <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">Learn More
                </Link>
              </div>
          </div>
        </section>
      </div>
    </Layout>
  )
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
