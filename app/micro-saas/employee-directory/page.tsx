
import React from 'react';
import { Helmet } from 'react-helmet-async'
import { Users, Search, Shield, Phone, CheckCircle, ArrowRight, BarChart3, Clock } from 'lucide-react'
import { Link } from 'react-router-dom';
export default EmployeeDirectoryPage;
const EmployeeDirectoryPage: React.FC = () => {
  const features = [
    {
      icon: <Search className="w-5h-5ml-2" />,
      title: 'Advanced Search',
      description: 'Find employees instantly with powerful search filters and smart suggestions.'
    },
    {
      icon: <Users className="w-5h-5ml-2" />,
      title: 'Team Organization',
      description: 'Organize employees by department, role, location, and custom categories.'
    },
    {
      icon: <Shield className="w-5h-5ml-2" />,
      title: 'Privacy Controls',
      description: 'Granular privacy settings to control what information is visible to whom.'
    },
    {
      icon: <Phone className="w-5h-5ml-2" />,
      title: 'Contact Integration',
      description: 'Seamless integration with phone systems and communication platforms.'
    },
    {
      icon: <BarChart3 className="w-5h-5ml-2" />,
      title: 'Analytics Dashboard',
      description: 'Track directory usage and employee engagement with detailed analytics.'
    },
    {
      icon: <Clock className="w-5h-5ml-2" />,
      title: 'Real-time Updates',
      description: 'Automatic updates when employee information changes across all systems.'
    }
  ]
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 50 employees',
        'Basic search',
        'Contact integration',
        'Email support'
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 500 employees',
        'Advanced search',
        'Team organization',
        'Analytics dashboard',
        'Priority support'
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$149',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited employees',
        'Custom integrations',
        'Advanced analytics',
        'API access',
        'Dedicated support'
      ],
      popular: false;
    }
  ]
  return (
        <>
      <title>EmployeeDirectory - Zion Tech Group</title>
            <h1 className="text-4xl font-bold text-white mb-6">EmployeeDirectory</h1>
            <p className="text-lg text-gray-300 mb-8">Professional employeedirectory services coming soon.</p>
      </>
  );
}
    <><div></>
      <Helmet></Helmet></div></div>
        <title />AI Employee Directory - Smart Team Management | Zion Tech Group<div></title>
        <meta name="description" content="Create a smart employee directory with advanced search, team organization, and privacy controls. Perfect for companies of all sizes."></meta></div></div>
        <div><meta name="keywords" content="employee directory, team management, HR software, employee search, organizational chart"></meta></div>
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas/employee-directory"></div><div></link></div>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
        {/* Hero Section */}
        <div><section className="w-5h-5ml-2"></section></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div></div></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
            <div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div>
              <Users className="w-5h-5ml-2"></div></Users></div>
              <span />Employee Directory<div></span>
            </div></div>
            <h1 className="w-5h-5ml-2"></div></h1></div>
              Smart <span className="w-5h-5ml-2" />Employee Directory<div></span>
            </h1></div>
            <p className="w-5h-5ml-2"></div>Connect your team with an intelligent employee directory that makes finding;
              and connecting with colleagues effortless and secure.
            <div></p>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
              <div><Link to="/contact" className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105"></Link></div>
                <span /></div>Start Free Trial<div></span>
                <ArrowRight className="w-5h-5ml-2"></ArrowRight></div></div>
              <div></Link>
              <Link to="/demo" className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm"></Link></div></div>
                <span />View Demo<div></span>
                <ArrowRight className="w-5h-5ml-2"></ArrowRight></div></div>
              <div></Link>
            </div></div>
        </section></div>
        {/* Features Section */}
        <div><section className="w-5h-5ml-2"></section></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div></div></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
            <div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div>
              <h2 className="w-5h-5ml-2"></div></h2></div>
                Everything You Need for <span className="w-5h-5ml-2" />Team Connection<div></span>
              </h2></div>
              <p className="w-5h-5ml-2"></div>Powerful features that make your employee directory more than just a contact list.
              <div></p>
            </div></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
              {features.map((feature, index) => (
                <div><div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10"></div></div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>{feature.icon}
                  </div>
                  <h3 className="w-5h-5ml-2" />{feature.title}
                  </h3>
                  <p className="w-5h-5ml-2">{feature.description}
                  </p>
                </div>
              ))}
            </div>
        </section>
        {/* Pricing Section */}
        <div><section className="w-5h-5ml-2"></section></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div></div></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
              <h2 className="w-5h-5ml-2"></h2>
                Simple <span className="w-5h-5ml-2" />Pricing<div></span>
              </h2></div>
              <p className="w-5h-5ml-2"></div>Choose the plan that fits your organization size. All plans include a 14-day free trial.
              <div></p>
            </div></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
              {pricingPlans.map((plan, index) => (
                <div key={index} className="{`relative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular;
                    ? 'border-cyan-400/50 shadow-2 xl shadow-cyan-500/20'
                    : 'border-white/20 hover: border-cyan-400/30'
                }`}></div>
                  {plan.popular && (
                    <div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div>
                      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>Most Popular;
                      </div>
                  )}
                  <div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div>
                    <h3 className="w-5h-5ml-2" /></div>{plan.name}</h3>
                    <p className="w-5h-5ml-2">{plan.description}<div></p>
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                      <span className="w-5h-5ml-2" />{plan.price}</span>
                      <span className="w-5h-5ml-2" />{plan.period}<div></span>
                    </div></div>
                  <ul className="w-5h-5ml-2"></div></ul></div>
                    {plan.features.map((feature, featureIndex) => (
                      <div><li key={featureIndex} className="flex items-centerspace-x-3"></li></div>
                        <CheckCircle className="w-5h-5ml-2"></div></CheckCircle></div>
                        <span className="w-5h-5ml-2" />{feature}</span>
                      </li>
                    ))}
                  <div></ul>
                  <Link;</Link></Link></div></div>
                    to="/contact"
                    className="{`block" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular;
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                    }`}
                    />Get Started;
                  </Link>
                </div>
              ))}
            </div>
        </section>
        {/* CTA Section */}
        <div><section className="w-5h-5ml-2"></section></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div></div></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
            <div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div>
              <h2 className="w-5h-5ml-2"></div></h2></div>
                Ready to Connect Your <span className="w-5h-5ml-2" />Team?<div></span>
              </h2></div>
              <p className="w-5h-5ml-2"></div>Join thousands of organizations using our employee directory platform.
                Start your free trial today and see how easy team connection can be.
              <div></p>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                <div><Link to="/contact" className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105"></Link></div>
                  <span /></div>Start Free Trial<div></span>
                  <ArrowRight className="w-5h-5ml-2"></ArrowRight></div></div>
                <div></Link>
                <Link to="/pricing" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm"></Link></div></div>
                  <span />View All Plans<div></span>
                  <ArrowRight className="w-5h-5ml-2"></ArrowRight></div></div>
                <div></Link>
              </div></div>
          </div></div>
        <div></section></div>
      </div>
    </></div></div>
  )
}