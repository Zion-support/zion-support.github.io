import { Helmet } from 'react-helmet-async'
import { Mail, Palette, Users, Zap, CheckCircle, ArrowRight, BarChart3, Shield, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import React  from 'react';
import { Palette, ArrowRight} from 'lucide-react';
import { Link } from 'react-router-dom';

const EmailSignaturePage: React.FC = () => {
  features = [
    {
      icon: <Palette className="w-6 h-6text-cyan-400" />,
      title: 'Custom Design Templates',
      description: 'Beautiful, professional email signature templates that match your brand identity.'
    },
    {
      icon: <Users className="w-6 h-6text-emerald-400" />,
      title: 'Team Management',
      description: 'Manage signatures for your entire team with centralized control and consistency.'
    },
    {
      icon: <Zap className="w-6 h-6text-purple-400" />,
      title: 'One-Click Setup',
      description: 'Deploy signatures across your organization with just one click.'
    },
    {
      icon: <BarChart3 className="w-6 h-6text-orange-400" />,
      title: 'Analytics & Tracking',
      description: 'Track email engagement and signature performance with detailed analytics.'
    },
    {
      icon: <Shield className="w-6 h-6text-pink-400" />,
      title: 'Security & Compliance',
      description: 'Ensure all signatures meet security standards and compliance requirements.'
    },
    {
      icon: <Clock className="w-6 h-6text-blue-400" />,
      title: 'Auto-Updates',
      description: 'Automatically update signatures when team members change roles or information.'
    }
  ]

  pricingPlans = [
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
    <>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <title>AI Email Signature Manager - Professional Email Signatures | Zion Tech Group</title>
        <meta name="description" content="Create and manage professional email signatures for your team. Beautiful templates, team management, and analytics included." />
        <meta name="keywords" content="email signature, email marketing, team management, professional signatures, email branding" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas/email-signature" />
      </Helmet>
    </>

      <div className="mi n-h-screenbg-gray-900text-white">
        </div>
        {/* Hero Section */}
    <>
        <section className="relativ e py-20px-4overflow-hidden" />
          <div className="absolut e inset-0 bg-gradient-to-rfrom-cyan-500/10to-purple-500/10" />
          <div className="relativ e max-w-7xlmx-autotext-center">
            <div className="inlin e-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-cyan-400/30">
              <Mail className="w-4 h-4" />
              <span   />Email Signature Management</span>
            </div>
    </>
            
            <h1 className="tex t-4xl sm:text-6 xl md:text-7 xl font-bold text-white mb-8leading-tight" />
              Professional <span className="b g-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Email Signatures</span>
            </h1>
    </>
            
            <p className="tex t-lg sm:text-xl md:text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed">
              Create beautiful, consistent email signatures for your entire team. 
              Boost your brand presence with professional email signatures that convert.
            </p>
            
            <div className="fle x flex-col sm:flex-row gap-6justify-centermb-16">
              <Link to="/contact" className="grou p bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" >
           
          <span    />
        </Link>Start Free Trial</span>
                <ArrowRight className="w-5 h-5grou p-hover:translate-x-1transition-transform" />
              </Link>
              <Link to="/demo" className="grou p border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" >
           
          <span    />
        </Link>View Templates</span>
                <ArrowRight className="w-5 h-5grou p-hover:translate-x-1transition-transform" />
              </Link>
            </div>
        </section>
    </>

        {/* Features Section */}
    <>
        <section className="p y-20px-4relative" />
          <div className="absolut e inset-0 bg-gradient-to-br from-purple-500/5via-cyan-500/5to-pink-500/5" />
          <div className="relativ e max-w-7xlmx-auto">
            <div className="tex t-centermb-16">
              <h2 className="tex t-4xl md:text-5 xl font-bold text-white mb-6" />
                Everything You Need for <span className="b g-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Email Signatures</span>
              </h2>
              <p className="tex t-xl text-gray-300 max-w-4xlmx-auto">
              Professional email signatures that enhance your brand and drive engagement.
              </p>
            </div>
    </>
            
            <div className="gri d grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
        </div>
              {features.map((feature, index) => (
    <>
                <div key="{index}" className="grou p bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                  <div className="fle x items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{feature.icon}
                  </div>
                  <h3 className="tex t-2 xl font-bold text-white mb-4group-hover:text-cyan-400 transition-colors"  />{feature.title}
                  </h3>
                  <p className="tex t-gray-300leading-relaxed">
              {feature.description}
                  </p>
                </div>
    </>
              ))}
    <>
            </div>
        </section>
    </>

        {/* Pricing Section */}
    <>
        <section className="p y-20 px-4 bg-gradient-to-br from-slate-800/50to-purple-900/50relative" />
          <div className="relativ e max-w-7xlmx-auto">
            <div className="tex t-centermb-16">
              <h2 className="tex t-4xl md:text-5 xl font-bold text-white mb-6" />
                Simple <span className="b g-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Pricing</span>
              </h2>
              <p className="tex t-xl text-gray-300 max-w-3xlmx-auto">
              Choose the plan that fits your team size. All plans include a 14-day free trial.
              </p>
            </div>
    </>
            
            <div className="gri d grid-cols-1md:grid-cols-3gap-8">
        </div>
              {pricingPlans.map((plan, index) => (
                <div key="{index}" className="{`relativ e" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-2 xl shadow-cyan-500/20' 
                    : 'border-white/20 hover: border-cyan-400/30'
                }`} />
                  {plan.popular && (
                    <div className="absolut e -top-4 left-1/2transform-translate-x-1/2">
                      <div className="b g-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold"  />Most Popular
                      </div>
                  )}
                  
                  <div className="tex t-centermb-8">
                    <h3 className="tex t-2 xl font-bold text-white mb-2"   />{plan.name}</h3>
                    <p className="tex t-gray-300 mb-4">
              {plan.description}</p>
                    <div className="fle x items-baselinejustify-center">
                      <span className="tex t-5 xlfont-bold text-white"   />{plan.price}</span>
                      <span className="tex t-gray-400ml-2"   />{plan.period}</span>
                    </div>
                  
                  <ul className="spac e-y-4mb-8" />
                    {plan.features.map((feature, featureIndex) => (
                      <li key="{featureIndex}" className="fle x items-centerspace-x-3" />
                        <CheckCircle className="w-5 h-5tex t-green-400flex-shrink-0" />
                        <span className="tex t-gray-300"   />{feature}</span>
                      </li>
    </>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className="{`bloc k" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                    }`}
                    />Get Started
    <>
                  </Link>
                </div>
    </>
              ))}
    <>
            </div>
        </section>
    </>

        {/* CTA Section */}
    <>
        <section className="p y-20px-4relative" />
          <div className="absolut e inset-0 bg-gradient-to-r from-cyan-500/10via-purple-500/10to-pink-500/10" />
          <div className="relativ e max-w-7xlmx-autotext-center">
            <div className="b g-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3 xl p-8sm:p-12lg:p-16">
              <h2 className="tex t-4xl sm:text-5 xl md:text-6 xl font-bold text-white mb-6leading-tight" />
                Ready to Elevate Your <span className="b g-gradient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent"   />Email Branding?</span>
              </h2>
    </>
              
              <p className="tex t-xl sm:text-2 xl text-white/90 mb-8 sm:mb-12 max-w-4 xlmx-autoleading-relaxed">
              Join thousands of businesses using our email signature management platform. 
                Start your free trial today and see the difference professional signatures make.
              </p>
              
              <div className="fle x flex-col sm:flex-rowgap-6justify-center">
                <Link to="/contact" className="grou p bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" >
           
          <span    />
        </Link>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5grou p-hover:translate-x-1transition-transform" />
                </Link>
                <Link to="/pricing" className="grou p border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" >
           
          <span    />
        </Link>View All Plans</span>
                  <ArrowRight className="w-5 h-5grou p-hover:translate-x-1transition-transform" />
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
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default EmailSignaturePage;
    </>