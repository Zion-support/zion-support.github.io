'use client',
import React from 'react';
import { Users, Phone, Mail, Calendar, BarChart, Target, CheckCircle, ArrowRight, Phone as PhoneIcon, Mail as MailIcon, Star, TrendingUp } from 'lucide-react',
import Link from 'next/link';

const CRMLitePage: React.FC = () => {
const features = [
    {
      icon: Users,
      title: 'Contact Management',
      description: 'Organize and manage all your customer contacts in one place',
    },
    {
      icon: Phone,
      title: 'Communication Tracking',
      description: 'Track all interactions with customers across multiple channels',
    },
    {
      icon: Calendar,
      title: 'Task Management',
      description: 'Schedule and track follow-ups, meetings, and important tasks'
    },
    {
      icon: BarChart,
      title: 'Sales Analytics',
      description: 'Monitor sales performance with detailed reports and insights',
    },
    {
      icon: Target,
      title: 'Lead Management',
      description: 'Track leads from initial contact to conversion',
    },
    {
      icon: Mail,
      title: 'Email Integration',
      description: 'Sync with your email for seamless communication tracking',
    }
  ],

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
      popular: false,
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
      popular: true,
    },
    {
      name: 'Enterprise'
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
      popular: false,
    }
  ],

const benefits = [
    {
      title: 'Easy Setup',
      description: 'Get started in minutes with our intuitive setup wizard',
      metric: '5 min setup',
    },
    {
      title: 'Mobile Ready',
      description: 'Access your CRM anywhere with our mobile app',
      metric: '100% mobile',
    },
    {
      title: 'Affordable',
      description: 'Powerful CRM features at a fraction of the cost',
      metric: '80% savings',
    },
    {
      title: 'No Training Required',
      description: 'Intuitive interface that anyone can use immediately',
      metric: 'Zero learning curve',
    }
  ],

          </p>
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3><p className="text-gray-300">{feature.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Simple</h2> <span className="text-cyan-400">Pricing</span><div className="grid md:grid-cols-3 gap-8">{plans.map((plan, index) => (</div><div
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                key={index}
                className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                  plan.popular,
                    ? 'border-cyan-400 shadow-2xl shadow-cyan-400/20 scale-105'}
                    : 'border-gray-600 hover:border-cyan-400/50'}
                } transition-all duration-300`}
              >{plan.popular && (</div>
                      <Star className="w-4 h-4 mr-2" >Most Popular</Star>
                    </Star>
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular,
                    </span>
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                  </div>
                )}

                <div className="text-center mb-8"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3><p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center"></div>
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span><span className="text-gray-400 ml-2">{plan.period}</span><ul className="space-y-4 mb-8">{plan.features.map((feature, featureIndex) => (</ul>
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" >{feature}</CheckCircle>
                    </CheckCircle>
                  ))}
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular,
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover: from-cyan-600 hover:to-blue-700',}
                      : 'bg-white/10 text-white border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10'}
                  }`}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">
              <div key={index} className="text-center">
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-4">
            Why Choose</h2> <span className="text-cyan-400">CRM Lite</span>?
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{benefits.map((benefit, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-4"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  <TrendingUp className="w-8 h-8 text-white" />
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4">{benefit.description}</p><div className="text-cyan-400 font-bold text-lg">{benefit.metric}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Clean &</h2> <span className="text-cyan-400">Intuitive</span> Interface
          </h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-600"></div>
            <div className="grid md:grid-cols-3 gap-8"></div>
              <div className="bg-white/5 rounded-lg p-6"></div>
                <h3 className="text-lg font-semibold text-white mb-4">Dashboard Overview</h3>
                <div className="space-y-3"></div>
                  <div className="flex justify-between text-sm"></div>
                    <span className="text-gray-300">Total Contacts</span><span className="text-cyan-400">1,247</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  </div>
                  <div className="flex justify-between text-sm"></div>
                    <span className="text-gray-300">Active Leads</span><span className="text-green-400">89</span>
                  </div>
                  <div className="flex justify-between text-sm"></div>
                    <span className="text-gray-300">This Month Sales</span><span className="text-yellow-400">$45,230</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-6"></div>
                <h3 className="text-lg font-semibold text-white mb-4">Recent Activities</h3>
                <div className="space-y-2 text-sm text-gray-300"></div>
                  <div>• New lead: John Smith</div><div>• Follow-up scheduled</div>
                  <div>• Email sent to client</div><div>• Meeting completed</div>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-6"></div>
                <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                  <button className="w-full bg-cyan-400 text-white py-2 px-4 rounded text-sm">Add Contact<button className="w-full bg-white/10 text-white py-2 px-4 rounded text-sm">Schedule Meeting<button className="w-full bg-white/10 text-white py-2 px-4 rounded text-sm">Send Email</button>
                  <button className="w-full bg-cyan-400 text-white py-2 px-4 rounded text-sm">
                    Add Contact,
                  </button>
                  <button className="w-full bg-white/10 text-white py-2 px-4 rounded text-sm">
                    Schedule Meeting,
                  </button>
                  <button className="w-full bg-white/10 text-white py-2 px-4 rounded text-sm">
                    Send Email,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                  </button>
                </div>
              </div>
            </div>
          </div>,
        </div>,
,
        {/* Integration Section */}
        <div className="mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Seamless</h2> <span className="text-cyan-400">Integrations</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8"></div>
            <div className="text-center"></div>
              <div className="p-4 bg-white/10 rounded-lg mb-4"></div>
                <Mail className="w-8 h-8 text-cyan-400 mx-auto" />
              <h3 className="text-lg font-semibold text-white">Email</h3><p className="text-gray-300 text-sm">Gmail, Outlook, Yahoo</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
            </div>
            <div className="text-center"></div>
              <div className="p-4 bg-white/10 rounded-lg mb-4"></div>
                <Phone className="w-8 h-8 text-cyan-400 mx-auto" />
              <h3 className="text-lg font-semibold text-white">Phone</h3><p className="text-gray-300 text-sm">VoIP integration</p>
            </div>
            <div className="text-center"></div>
              <div className="p-4 bg-white/10 rounded-lg mb-4"></div>
                <Calendar className="w-8 h-8 text-cyan-400 mx-auto" />
              <h3 className="text-lg font-semibold text-white">Calendar</h3><p className="text-gray-300 text-sm">Google Calendar, Outlook</p>
            </div>
            <div className="text-center"></div>
              <div className="p-4 bg-white/10 rounded-lg mb-4"></div>
                <BarChart className="w-8 h-8 text-cyan-400 mx-auto" />
              <h3 className="text-lg font-semibold text-white">Analytics</h3><p className="text-gray-300 text-sm">Google Analytics, Mixpanel</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <Link,
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center"></div>
          <h2 className="text-3xl font-bold text-white mb-4">Start Managing Your Customers Better Today</h2><p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join thousands of businesses using CRM Lite to streamline their customer relationships and grow their sales.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
          </div>
        </div>
      </div>,
    </div>,
  ),
},

export default CRMLitePage,