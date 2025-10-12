import { Helmet } from 'react-helmet-async'
import { FileText, Clock, Shield, Users, CheckCircle, ArrowRight, BarChart3, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContractManagerPage: React.FC = () => {
  const features = [
    {
      icon: <FileText className="w-5 h-5ml-2" />,
      title: 'Smart Contract Templates',
      description: 'Pre-built contract templates for common business agreements with AI-powered customization.'
    },
    {
      icon: <Clock className="w-5 h-5ml-2" />,
      title: 'Automated Renewals',
      description: 'Never miss a contract renewal with intelligent tracking and automated notifications.'
    },
    {
      icon: <Shield className="w-5 h-5ml-2" />,
      title: 'Compliance Monitoring',
      description: 'Ensure all contracts meet legal requirements with built-in compliance checks.'
    },
    {
      icon: <Users className="w-5 h-5ml-2" />,
      title: 'Team Collaboration',
      description: 'Collaborate on contract reviews with real-time editing and commenting features.'
    },
    {
      icon: <BarChart3 className="w-5 h-5ml-2" />,
      title: 'Analytics Dashboard',
      description: 'Track contract performance, renewal rates, and key metrics in real-time.'
    },
    {
      icon: <Calendar className="w-5 h-5ml-2" />,
      title: 'Deadline Management',
      description: 'Never miss important contract deadlines with smart calendar integration.'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 50 contracts',
        'Basic templates',
        'Email notifications',
        'Standard support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 500 contracts',
        'Advanced templates',
        'Team collaboration',
        'Analytics dashboard',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited contracts',
        'Custom templates',
        'Advanced analytics',
        'API integration',
        'Dedicated support'
      ],
      popular: false
    }
  ]

  return (
    <>
      <Helmet></Helmet>
        <title />AI Contract Manager - Smart Contract Management | Zion Tech Group</title>
        <meta name="description" content="Streamline contract management with AI-powered automation, smart templates, and compliance monitoring. Perfect for businesses of all sizes." />
        <meta name="keywords" content="contract management, AI contracts, legal automation, contract templates, compliance monitoring" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas/contract-manager"  />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <FileText className="w-5 h-5ml-2" />
              <span />AI Contract Management</span>
            </div>
            
            <h1 className="w-5 h-5ml-2" />
              Smart <span className="w-5 h-5ml-2" />Contract Manager</span>
            </h1>
            
            <p className="w-5 h-5ml-2">Automate contract management with AI-powered insights, smart templates, 
              and intelligent compliance monitoring. Never miss a deadline again.
            </p>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <Link to="/contact" className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
                <span />Start Free Trial</span>
                <ArrowRight className="w-5 h-5ml-2" />
              </Link>
              <Link to="/demo" className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                <span />Watch Demo</span>
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
                Powerful <span className="w-5 h-5ml-2" />Features</span>
              </h2>
              <p className="w-5 h-5ml-2">Everything you need to manage contracts efficiently and stay compliant.
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
              <p className="w-5 h-5ml-2">Choose the plan that fits your business needs. All plans include a 14-day free trial.
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
                Ready to Streamline Your <span className="w-5 h-5ml-2" />Contract Management?</span>
              </h2>
              
              <p className="w-5 h-5ml-2">Join thousands of businesses already using our AI-powered contract management solution. 
                Start your free trial today and experience the difference.
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

export default ContractManagerPage;