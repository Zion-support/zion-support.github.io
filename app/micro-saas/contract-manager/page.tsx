import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContractManagerPage: React.FC = () => {
  const features = [
    {
      icon: <FileText className="w-6 h-6 text-cyan-400" / />,
      title: 'Smart Contract Templates',
      description: 'Pre-built contract templates for common business agreements with AI-powered customization.'
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald-400" / />,
      title: 'Automated Renewals',
      description: 'Never miss a contract renewal with intelligent tracking and automated notifications.'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" / />,
      title: 'Compliance Monitoring',
      description: 'Ensure all contracts meet legal requirements with built-in compliance checks.'
    },
    {
      icon: <Users className="w-6 h-6 text-orange-400" / />,
      title: 'Team Collaboration',
      description: 'Collaborate on contract reviews with real-time editing and commenting features.'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-pink-400" / />,
      title: 'Analytics Dashboard',
      description: 'Track contract performance, renewal rates, and key metrics in real-time.'
    },
    {
      icon: <Calendar className="w-6 h-6 text-blue-400" / />,
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
      <Helmet />
        <title  >AI Contract Manager - Smart Contract Management | Zion Tech Group</title>
        <meta name="description" content="Streamline contract management with AI-powered automation, smart templates, and compliance monitoring. Perfect for businesses of all sizes." / / />
        <meta name="keywords" content="contract management, AI contracts, legal automation, contract templates, compliance monitoring" / / />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas/contract-manager" / />
      </Helmet>

      <div className="min-h-screen bg-gray-900 text-white" />
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" / />
          <div className="relative max-w-7 xl mx-auto text-center" />
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30" />
              <FileText className="w-4 h-4" / />
              <span  >AI Contract Management</span>
            </div>
            
            <h1 className="text-4 xl sm:text-6 xl md:text-7 xl font-bold text-white mb-8 leading-tight" />
              Smart <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"  >Contract Manager</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2 xl text-gray-300 mb-12 max-w-4 xl mx-auto leading-relaxed">
              Automate contract management with AI-powered insights, smart templates, 
              and intelligent compliance monitoring. Never miss a deadline again.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16" />
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105"
               />
                <span  >Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" / />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
               />
                <span  >Watch Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" / />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 relative" />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-pink-500/5" / />
          <div className="relative max-w-7 xl mx-auto" />
            <div className="text-center mb-16" />
              <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6" />
                Powerful <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"  >Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4 xl mx-auto">
                Everything you need to manage contracts efficiently and stay compliant.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" />
              {features.map((feature, index) => (
                <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2 xl hover:shadow-cyan-500/10" />
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110 transition-transform duration-300"  />{feature.icon}
                  </div>
                  <h3 className="text-2 xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors"  />{feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-purple-900/50 relative" />
          <div className="relative max-w-7 xl mx-auto" />
            <div className="text-center mb-16" />
              <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6" />
                Simple <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"  >Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
                Choose the plan that fits your business needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" />
              {pricingPlans.map((plan, index) => (
                <div key="{index}" className="{`relative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-2 xl shadow-cyan-500/20' 
                    : 'border-white/20 hover: border-cyan-400/30'
                }`} />
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2" />
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold"  />Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8" />
                    <h3 className="text-2 xl font-bold text-white mb-2"  >{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center" />
                      <span className="text-5 xl font-bold text-white"  >{plan.price}</span>
                      <span className="text-gray-400 ml-2"  >{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8" />
                    {plan.features.map((feature, featureIndex) => (
                      <li key="{featureIndex}" className="flex items-center space-x-3" />
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" / />
                        <span className="text-gray-300"  >{feature}</span>
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" / />
          <div className="relative max-w-7 xl mx-auto text-center" />
            <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3 xl p-8 sm:p-12 lg:p-16" />
              <h2 className="text-4 xl sm:text-5 xl md:text-6 xl font-bold text-white mb-6 leading-tight" />
                Ready to Streamline Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent"  >Contract Management?</span>
              </h2>
              
              <p className="text-xl sm:text-2 xl text-white/90 mb-8 sm:mb-12 max-w-4 xl mx-auto leading-relaxed">
                Join thousands of businesses already using our AI-powered contract management solution. 
                Start your free trial today and experience the difference.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center" />
                <Link 
                  to="/contact" 
                  className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                 />
                  <span  >Start Free Trial</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" / />
                </Link>
                <Link 
                  to="/pricing" 
                  className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                 />
                  <span  >View All Plans</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" / />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ContractManagerPage;