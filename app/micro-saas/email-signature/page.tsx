<<<<<<< HEAD
import { Helmet } from 'react-helmet-async'
import { Mail, Palette, Users, Zap, CheckCircle, ArrowRight, BarChart3, Shield, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import React from 'react';
import { Palette, ArrowRight} from 'lucide-react';
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

<<<<<<< HEAD
const EmailSignaturePage: React.FC = () => {
  const features = [
    {
      icon: <Palette className="w-5 h-5ml-2" />,
      title: 'Custom Design Templates',
      description: 'Beautiful, professional email signature templates that match your brand identity.'
    },
    {
      icon: <Users className="w-5 h-5ml-2" />,
      title: 'Team Management',
      description: 'Manage signatures for your entire team with centralized control and consistency.'
    },
    {
      icon: <Zap className="w-5 h-5ml-2" />,
      title: 'One-Click Setup',
      description: 'Deploy signatures across your organization with just one click.'
    },
    {
      icon: <BarChart3 className="w-5 h-5ml-2" />,
      title: 'Analytics & Tracking',
      description: 'Track email engagement and signature performance with detailed analytics.'
    },
    {
      icon: <Shield className="w-5 h-5ml-2" />,
      title: 'Security & Compliance',
      description: 'Ensure all signatures meet security standards and compliance requirements.'
    },
    {
      icon: <Clock className="w-5 h-5ml-2" />,
      title: 'Auto-Updates',
      description: 'Automatically update signatures when team members change roles or information.'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$9',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 10 signatures',
        'Basic templates',
        'Email support',
        'Standard analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$29',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 100 signatures',
        'Premium templates',
        'Team management',
        'Advanced analytics',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited signatures',
        'Custom templates',
        'API integration',
        'White-label options',
        'Dedicated support'
      ],
      popular: false
    }
  ]

  return (
    <>
      <Helmet>
        <title />AI Email Signature Manager - Professional Email Signatures | Zion Tech Group</title>
        <meta name="description" content="Create and manage professional email signatures for your team. Beautiful templates, team management, and analytics included." />
        <meta name="keywords" content="email signature, email marketing, team management, professional signatures, email branding" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas/email-signature"  />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <Mail className="w-5 h-5ml-2" />
              <span />Email Signature Management</span>
            </div>
            
            <h1 className="w-5 h-5ml-2" />
              Professional <span className="w-5 h-5ml-2" />Email Signatures</span>
            </h1>
            
            <p className="w-5 h-5ml-2">Create beautiful, consistent email signatures for your entire team. 
              Boost your brand presence with professional email signatures that convert.
            </p>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <Link to="/contact" className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
                <span />Start Free Trial</span>
                <ArrowRight className="w-5 h-5ml-2" />
              </Link>
              <Link to="/demo" className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                <span />View Templates</span>
                <ArrowRight className="w-5 h-5ml-2" />
              </Link>
            </div>
        </section>

        {/* Features Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5 h-5ml-2" />
                Everything You Need for <span className="w-5 h-5ml-2" />Email Signatures</span>
              </h2>
              <p className="w-5 h-5ml-2">Professional email signatures that enhance your brand and drive engagement.
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              {features.map((feature, index) => (
                <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{feature.icon}
                  </div>
                  <h3 className="w-5 h-5ml-2" />{feature.title}
                  </h3>
                  <p className="w-5 h-5ml-2">{feature.description}
                  </p>
                </div>
              ))}
            </div>
        </section>

        {/* Pricing Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5 h-5ml-2" />
                Simple <span className="w-5 h-5ml-2" />Pricing</span>
              </h2>
              <p className="w-5 h-5ml-2">Choose the plan that fits your team size. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              {pricingPlans.map((plan, index) => (
                <div key="{index}" className="{`relative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-2 xl shadow-cyan-500/20' 
                    : 'border-white/20 hover: border-cyan-400/30'
                }`} />
                  {plan.popular && (
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">Most Popular
                      </div>
                  )}
                  
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    <h3 className="w-5 h-5ml-2" />{plan.name}</h3>
                    <p className="w-5 h-5ml-2">{plan.description}</p>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                      <span className="w-5 h-5ml-2" />{plan.price}</span>
                      <span className="w-5 h-5ml-2" />{plan.period}</span>
                    </div>
                  
                  <ul className="w-5 h-5ml-2" />
                    {plan.features.map((feature, featureIndex) => (
                      <li key="{featureIndex}" className="flex items-centerspace-x-3" />
                        <CheckCircle className="w-5 h-5ml-2" />
                        <span className="w-5 h-5ml-2" />{feature}</span>
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
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5 h-5ml-2" />
                Ready to Elevate Your <span className="w-5 h-5ml-2" />Email Branding?</span>
              </h2>
              
              <p className="w-5 h-5ml-2">Join thousands of businesses using our email signature management platform. 
                Start your free trial today and see the difference professional signatures make.
              </p>
              
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <Link to="/contact" className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
                  <span />Start Free Trial</span>
                  <ArrowRight className="w-5 h-5ml-2" />
                </Link>
                <Link to="/pricing" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                  <span />View All Plans</span>
                  <ArrowRight className="w-5 h-5ml-2" />
                </Link>
              </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default EmailSignaturePage;
=======
export default function EmailSignature() {
  return (
    <>
      <Helmet>
        <title>EmailSignature - Zion Tech Group</title>
        <meta name="description" content="Professional emailsignature services by Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">EmailSignature</h1>
            <p className="text-lg text-gray-300 mb-8">Professional emailsignature services coming soon.</p>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b882
