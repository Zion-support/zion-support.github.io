<<<<<<< HEAD
=======
'use client';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
import React from 'react';
import { Helmet } from 'react-helmet-async';

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/clean-main-20251013-145848
export default function Pricing() {
=======
import React from 'react;

import { Helmet } from 'react-helmet-async;

import { Link } from 'react-router-dom;

import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react;

const PagePage: React.FC = () => {}
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

const PricingPage: React.FC = () => {
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
>>>>>>> origin/cursor/ad-creation-and-management-f267
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
<<<<<<< HEAD
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Advanced pricing solutions by Zion Tech Group" />
=======
<<<<<<< HEAD
        <title>Page - Zion Tech Group</title>
        <meta name="description" content=Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business. />
        <meta name="keywords" content=page, AI solutions, IT services, Zion Tech Group />
>>>>>>> origin/cursor/ad-creation-and-management-f267
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Pricing
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced pricing solutions by Zion Tech Group
          </p>
        </div>
<<<<<<< HEAD
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Coming Soon</h2>
            <p className="text-gray-600">
              This page is under development. Please check back later for updates.
            </p>
          </div>
<div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Basic</h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">$99<span className="text-lg text-gray-600">/month</span></p>
              <ul className="space-y-2 text-gray-600">
                <li>Basic AI features</li>
                <li>Email support</li>
                <li>Standard templates</li>
=======
      </div>
    <>
  </>
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent AI & IT Pricing</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose from Starter, Professional, or Enterprise plans. Custom solutions available. Get started today." />
        <meta name="keywords" content="AI pricing, IT services pricing, cloud solutions cost, enterprise AI pricing, custom development pricing" />
      </Helmet>
  );
};

export default PricingPage;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include 
              our core AI and IT services with no hidden fees.
                className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular
                    ? 'border-cyan-500 bg-cyan-500/10 scale-105'
                    : 'border-white/10 hover:bg-white/10'
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <Link
                  to="/consultation"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border border-white/20 text-white hover:bg-white/10'
                  }`}
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">What's Included</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Free initial consultation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">30-day money-back guarantee</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">No setup fees</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Flexible payment options</span>
                </li>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-2 border-blue-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional</h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">$299<span className="text-lg text-gray-600">/month</span></p>
              <ul className="space-y-2 text-gray-600">
                <li>Advanced AI features</li>
                <li>Priority support</li>
                <li>Custom templates</li>
                <li>Analytics dashboard</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise</h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">$999<span className="text-lg text-gray-600">/month</span></p>
              <ul className="space-y-2 text-gray-600">
                <li>Full AI suite</li>
                <li>24/7 dedicated support</li>
                <li>Custom development</li>
                <li>Advanced analytics</li>
                <li>White-label options</li>
              </ul>
            </div>
          </div>
<<<<<<< HEAD
=======
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Pricing services from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Pricing</h1>
          <p className="text-gray-300">Coming soon...</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD

  );  ));)
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
};

export default PricingPage;
>>>>>>> origin/cursor/ad-creation-and-management-f267
=======
export default PricingPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
