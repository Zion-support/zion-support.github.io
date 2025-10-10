'use client';
import React from 'react';
import { Users, Phone, Mail, Calendar, BarChart, Target, CheckCircle, ArrowRight, Phone as PhoneIcon, Mail as MailIcon, Star, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const CRMLitePage: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Contact Management',
      description: 'Organize and manage all your customer contacts in one place'
    },
    {
      icon: Phone,
      title: 'Communication Tracking',
      description: 'Track all interactions with customers across multiple channels'
    },
    {
      icon: Calendar,
      title: 'Task Management',
      description: 'Schedule and track follow-ups, meetings, and important tasks'
    },
    {
      icon: BarChart,
      title: 'Sales Analytics',
      description: 'Monitor sales performance with detailed reports and insights'
    },
    {
      icon: Target,
      title: 'Lead Management',
      description: 'Track leads from initial contact to conversion'
    },
    {
      icon: Mail,
      title: 'Email Integration',
      description: 'Sync with your email for seamless communication tracking'
    }
  ];

  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams getting started',
      features: [
        'Up to 1,000 contacts',
        'Basic reporting',
        'Email integration',
        'Mobile app access',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$59',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 contacts',
        'Advanced analytics',
        'Custom fields',
        'API access',
        'Priority support',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited contacts',
        'Custom reporting',
        'Advanced automation',
        'White-label options',
        'Dedicated support',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Easy Setup',
      description: 'Get started in minutes with our intuitive setup wizard',
      metric: '5 min setup'
    },
    {
      title: 'Mobile Ready',
      description: 'Access your CRM anywhere with our mobile app',
      metric: '100% mobile'
    },
    {
      title: 'Affordable',
      description: 'Powerful CRM features at a fraction of the cost',
      metric: '80% savings'
    },
    {
      title: 'No Training Required',
      description: 'Intuitive interface that anyone can use immediately',
      metric: 'Zero learning curve'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">{/* Hero Section */}</div>
      <div className="container mx-auto px-4 py-16"></div>
        <div className="text-center mb-16"></div>
          <h1 className="text-5 xl font-bold text-white mb-6"></h1></<<<h1>CRM</h1></h1> <span className="text-cyan-400"></span></<<<span>Lite</span></span><p className="text-xl text-gray-300 max-w-3 xl mx-auto mb-8">The perfect CRM solution for small and medium businesses. Simple, powerful, and affordable customer relationship management</p></<<<p>that</p></<<p>helps</p> you grow your business without the complexity.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            ></Lin>
              <Users className="w-5 h-5 mr-2" >Get Started</User>
            </Users>
            <Link
              href="/demo"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            ></Lin>
              <BarChart className="w-5 h-5 mr-2" >Try Demo</BarChar>
            </BarChart>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16"></div>
          <h2 className="text-3 xl font-bold text-white text-center mb-12"></h2></<<<h2>Essential</h2></h2> <span className="text-cyan-400"></span></<<<span>Features</span></span><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2 xl p-6 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              ></div>
                <div className="p-3 bg-cyan-400 rounded-lg w-fit mb-4"></div>
                  <feature.icon className="w-6 h-6 text-white" /></featur>
                <h3 className="text-xl font-semibold text-white mb-3"></h>{feature.title}<p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-16"></div>
          <h2 className="text-3 xl font-bold text-white text-center mb-12"></h2></<<<h2>Simple</h2></h2> <span className="text-cyan-400"></span></<<<span>Pricing</span></span><div className="grid md:grid-cols-3 gap-8"></div>{plans.map((plan, index) => (<div
                key={index}
                className={`relative bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border ${
                  plan.popular
                    ? 'border-cyan-400 shadow-2 xl shadow-cyan-400/20 scale-105'
                    : 'border-gray-600 hover:border-cyan-400/50'
                } transition-all duration-300`}
              >{plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center"></spa>
                      <Star className="w-4 h-4 mr-2" >Most Popular</Sta>
                    </Star>
                  </div>
                )}

                <div className="text-center mb-8"></div>
                  <h3 className="text-2 xl font-bold text-white mb-2"></h>{plan.name}<p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center"></div>
                    <span className="text-4 xl font-bold text-cyan-400"></spa>{plan.price}<span className="text-gray-400 ml-2"></spa>{plan.period}<ul className="space-y-4 mb-8">{plan.features.map((feature, featureIndex) => (</u>
                    <li key={featureIndex} className="flex items-center text-gray-300"></l>
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" >{feature}</CheckCircl>
                    </CheckCircle>
                  ))}
                <Link
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-white/10 text-white border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10'
                  }`}
                >Choose Plan</Lin>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16"></div>
          <h2 className="text-3 xl font-bold text-white text-center mb-12"></h2></<<<h2>Why</h2></<<h2>Choose</h2> <span className="text-cyan-400">CRM Lite</spa>?
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{benefits.map((benefit, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-4"></div>
                  <TrendingUp className="w-8 h-8 text-white" /></TrendingU>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h>
                <p className="text-gray-300 mb-4"></p>{benefit.description}<div className="text-cyan-400 font-bold text-lg">{benefit.metric}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mb-16"></div>
          <h2 className="text-3 xl font-bold text-white text-center mb-12"></h2></<<<h2>Clean</h2></h2> & <span className="text-cyan-400">Intuitive</span></<<<span>Interface</span></span>
          </h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-gray-600"></div>
            <div className="grid md:grid-cols-3 gap-8"></div>
              <div className="bg-white/5 rounded-lg p-6"></div>
                <h3 className="text-lg font-semibold text-white mb-4">Dashboard Overview</h>
                <div className="space-y-3"></div>
                  <div className="flex justify-between text-sm"></div>
                    <span className="text-gray-300"></span></<<<span>Total</span></<<span>Contacts</span><span className="text-cyan-400">1,247</spa>
                  </div>
                  <div className="flex justify-between text-sm"></div>
                    <span className="text-gray-300"></span></<<<span>Active</span></<<span>Leads</span><span className="text-green-400">89</spa>
                  </div>
                  <div className="flex justify-between text-sm"></div>
                    <span className="text-gray-300"></span></<<<span>This</span></<<span>Month</span> Sales<span className="text-yellow-400">$45,230</spa>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-6"></div>
                <h3 className="text-lg font-semibold text-white mb-4">Recent Activities</h>
                <div className="space-y-2 text-sm text-gray-300"></div>
                  <div></div>• New lead: John Smith<div>• Follow-up scheduled</div>
                  <div></div>• Email sent to client<div>• Meeting completed</div>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-6"></div>
                <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h>
                <div className="space-y-2"></div>
                  <button className="w-full bg-cyan-400 text-white py-2 px-4 rounded text-sm">Add Contact</button><button className="w-full bg-white/10 text-white py-2 px-4 rounded text-sm">Schedule Meeting</button><button className="w-full bg-white/10 text-white py-2 px-4 rounded text-sm">Send Email</butto>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Section */}
        <div className="mb-16"></div>
          <h2 className="text-3 xl font-bold text-white text-center mb-12"></h2></<<<h2>Seamless</h2></h2> <span className="text-cyan-400">Integrations</spa>
          </h2>
          <div className="grid md:grid-cols-4 gap-8"></div>
            <div className="text-center"></div>
              <div className="p-4 bg-white/10 rounded-lg mb-4"></div>
                <Mail className="w-8 h-8 text-cyan-400 mx-auto" /></Mai>
              <h3 className="text-lg font-semibold text-white"></h3></<<<h3>Email</h3></h3><p className="text-gray-300 text-sm">Gmail, Outlook, Yahoo</p>
            </div>
            <div className="text-center"></div>
              <div className="p-4 bg-white/10 rounded-lg mb-4"></div>
                <Phone className="w-8 h-8 text-cyan-400 mx-auto" /></Phon>
              <h3 className="text-lg font-semibold text-white"></h3></<<<h3>Phone</h3></h3><p className="text-gray-300 text-sm">VoIP integration</p>
            </div>
            <div className="text-center"></div>
              <div className="p-4 bg-white/10 rounded-lg mb-4"></div>
                <Calendar className="w-8 h-8 text-cyan-400 mx-auto" /></Calenda>
              <h3 className="text-lg font-semibold text-white"></h3></<<<h3>Calendar</h3></h3><p className="text-gray-300 text-sm">Google Calendar, Outlook</p>
            </div>
            <div className="text-center"></div>
              <div className="p-4 bg-white/10 rounded-lg mb-4"></div>
                <BarChart className="w-8 h-8 text-cyan-400 mx-auto" /></BarChar>
              <h3 className="text-lg font-semibold text-white"></h3></<<<h3>Analytics</h3></h3><p className="text-gray-300 text-sm">Google Analytics, Mixpanel</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2 xl p-12 text-center"></div>
          <h2 className="text-3 xl font-bold text-white mb-4"></h2></<<<h2>Start</h2></<<h2>Managing</h2> Your Customers Better Today<p className="text-xl text-gray-300 mb-8 max-w-2 xl mx-auto">Join thousands of businesses using CRM Lite to streamline their customer relationships and grow their sales.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            ></Lin>
              <ArrowRight className="w-5 h-5 mr-2" >Get Started Now</ArrowRigh>
            </ArrowRight>
            <Link
              href="/pricing"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            ></Lin>
              <Target className="w-5 h-5 mr-2" >View All Plans</Targe>
            </Target>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRMLitePage;