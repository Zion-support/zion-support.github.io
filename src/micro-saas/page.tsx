'use client'
import { Brain, BarChart } from 'lucide-react'
import React from 'react'
import { BookOpen, ShieldCheck, Wifi, Server, Monitor, Printer, Router, Laptop, Tablet, Watch, Headset, Keyboard, Mouse, Webcam, Speaker, Battery, Power, Cog, Settings2 } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle } from 'lucide-react'

const MicroSAASPage: React.FC = () => {constcategories= [
    {
      title: 'AI-Powered Tools',
      icon: Brain,
      color: 'text-purple-40 0',
      bgColor: 'bg-purple-50 0/2 0',
      services: [
        { name: 'AI Writing Assistant', price: '$1 9/month', description: 'AI-powered content creation and editing'},
        {name: 'AI Code Generator', price: '$4 9/month', description: 'AI-assisted coding and development'},
        {name: 'AI Design Studio', price: '$3 9/month', description: 'AI-powered graphic design tools'},
        {name: 'AI Analytics Dashboard', price: '$7 9/month', description: 'Real-time business intelligence'},
        {name: 'AI Chatbot Builder', price: '$2 9/month', description: 'No-code chatbot creation'},
        {name: 'AI SEO Optimizer', price: '$4 9/month', description: 'Automated SEO analysis and optimization'}
      ]
    },
    {title: 'Business Applications',
      icon: BarChart,
      color: 'text-blue-40 0',
      bgColor: 'bg-blue-50 0/2 0',
      services: [
        { name: 'AI-Powered CRM', price: '$4 9/month', description: 'Intelligent customer relationship management'},
        {name: 'AI Invoice Generator', price: '$1 9/month', description: 'Automated invoicing and billing'},
        {name: 'AI Lead Scoring', price: '$3 9/month', description: 'Intelligent lead qualification'},
        {name: 'AI Social Media Manager', price: '$5 9/month', description: 'Social media automation'},
        {name: 'AI Email Marketing', price: '$5 9/month', description: 'Automated email campaigns'},
        {name: 'AI Financial Planner', price: '$6 9/month', description: 'Financial planning and analysis'}
      ]
    },
    {title: 'Productivity Tools',
      icon: Settings2,
      color: 'text-green-40 0',
      bgColor: 'bg-green-50 0/2 0',
      services: [
        { name: 'AI Task Manager Pro', price: '$2 9/month', description: 'Intelligent task management'},
        {name: 'AI Expense Tracker', price: '$1 9/month', description: 'Smart expense management'},
        {name: 'AI Scheduler', price: '$3 9/month', description: 'Intelligent scheduling'},
        {name: 'AI Document Processor', price: '$4 9/month', description: 'Intelligent do cument processing'},
        {name: 'AI Password Manager', price: '$9/month', description: 'Secure password management'},
        {name: 'AI Voice Assistant', price: '$3 9/month', description: 'Custom voice assistants'}
      ]
    },
    {title: 'Creative & Media',
      icon: Palette,
      color: 'text-pink-40 0',
      bgColor: 'bg-pink-50 0/2 0',
      services: [
        { name: 'AI Video Creator', price: '$7 9/month', description: 'Automated video production'},
        {name: 'AI Music Composer', price: '$4 9/month', description: 'AI music generation'},
        {name: 'AI3D Generator', price: '$8 9/month', description: 'AI3D modeling and design'},
        {name: 'AI Fashion Design', price: '$6 9/month', description: 'AI fashion solutions'},
        {name: 'AI Photo Editor', price: '$2 9/month', description: 'AI-powered photo editing'},
        {name: 'AI Content Studio', price: '$5 9/month', description: 'Complete content creation suite'}
      ]
    },
    {title: 'E-commerce & Marketing',
      icon: CreditCard,
      color: 'text-orange-40 0',
      bgColor: 'bg-orange-50 0/2 0',
      services: [
        { name: 'AI E-commerce Assistant', price: '$7 9/month', description: 'E-commerce optimization'},
        {name: 'AI Store Optimizer', price: '$5 9/month', description: 'Store performance optimization'},
        {name: 'AI Market Research', price: '$8 9/month', description: 'Automated market analysis'},
        {name: 'AI A/B Testing', price: '$4 9/month', description: 'Intelligent testing platform'},
        {name: 'AI Growth Hacker', price: '$9 9/month', description: 'Automated growth strategies'},
        {name: 'AI Website Builder', price: '$3 9/month', description: 'AI website creation'}
      ]
    },
    {title: 'Security & Monitoring',
      icon: ShieldCheck,
      color: 'text-red-40 0',
      bgColor: 'bg-red-50 0/2 0',
      services: [
        { name: 'AI Security Monitor', price: '$9 9/month', description: 'Real-time security monitoring'},
        {name: 'AI Performance Tracker', price: '$4 9/month', description: 'Comprehensive performance tracking'},
        {name: 'AI Predictive Analytics', price: '$7 9/month', description: 'Future outcome predictions'},
        {name: 'AI Health Tracker', price: '$2 9/month', description: 'Personal health monitoring'},
        {name: 'AI Learning Platform', price: '$5 9/month', description: 'Personalized learning'},
        {name: 'AI Data Pipeline', price: '$6 9/month', description: 'Automated data processing'}
      ]
    }
  ]

  constbenefits= [
    {icon: Zap,
      title: 'Instant Deployment',
      description: 'Get started in minutes with our ready-to-use applications'
   },
    {icon: Star,
      title: 'Proven Results',
      description: 'Average200% productivity increase within 30days'
   },
    {icon: ShieldCheck,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for all applications'
   },
    {icon: BarChart,
      title: 'Scalable Solutions',
      description: 'Grow from startup to enterprise with flexible pricing'
    }
  ]

const Page = () => {
  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
      <Navigation />
      <main className=&quot;container mx-auto px-4 py-16 pt-24&quot;>
        {/* Hero Section */}
        <section className=&quot;text-center mb-16&quot;></section>
          <h1 className=&quot;text-4xl md:text-6xl font-bold text-white mb-6&quot;></h1>
            <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent&quot;>
              Micro SAAS Solutions
            </span>
          </h1>
          <p className=&quot;text-xl text-gray-300 mb-8 max-w-4xl mx-auto&quot;>
            Choose from 100+ ready-to-use AI-powered applications that solve specific business problems.
            Deploy instantly and start seeing results from day one.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
            <a
              href=&quot;/contact&quot;
              className=&quot;bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105&quot;
            >
              Browse All Solutions
            </a>
            <a
              href=&quot;tel:+13024640950&quot;
              className=&quot;border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300&quot;
            >
              (302) 464-0950</a>
          </div>
        </section>
        {/* Categories */}
        <section className=&quot;mb-16&quot;></section>
          <h2 className=&quot;text-3xl font-bold text-white text-center mb-12&quot;>Solution Categories</h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
            {categories.map((category, index) => (
              <div key={index} className=&quot;bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300&quot;></div>
                <div className=&quot;flex items-center mb-6&quot;></div>
                  <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mr-4`}></div>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className=&quot;text-xl font-bold text-white&quot;>{category.title}</h3>
                </div>
                <div className=&quot;space-y-3&quot;></div>
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className=&quot;flex justify-between items-center p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors&quot;></div>
                      <div></div>
                        <div className=&quot;font-medium text-white text-sm&quot;>{service.name}</div>
                        <div className=&quot;text-xs text-gray-400&quot;>{service.description}</div>
                      </div>
                      <div className=&quot;text-right&quot;></div>
                        <div className={`font-bold ${category.color} text-sm`}>{service.price}</div>
                        <a
                          href=&quot;/contact&quot;
                          className=&quot;text-xs text-cyan-400 hover:text-cyan-300 transition-colors&quot;
                        >
                          Learn More →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Benefits Section */}
        <section className=&quot;mb-16&quot;></section>
          <div className=&quot;bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8&quot;></div>
            <h2 className=&quot;text-3xl font-bold text-white text-center mb-12&quot;>Why Choose Our Micro SAAS Solutions?</h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
              {benefits.map((benefit, index) => (
                <div key={index} className=&quot;text-center&quot;></div>
                  <div className=&quot;w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                    <benefit.icon className=&quot;w-8 h-8 text-cyan-400&quot; />
                  </div>
                  <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{benefit.title}</h3>
                  <p className=&quot;text-gray-300&quot;>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Pricing Tiers */}
        <section className=&quot;mb-16&quot;></section>
          <h2 className=&quot;text-3xl font-bold text-white text-center mb-12&quot;>Simple Pricing</h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;></div>
            <div className=&quot;bg-slate-800/50 backdrop-blur-sm rounded-xl p-6&quot;></div>
              <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Starter</h3>
              <div className=&quot;text-3xl font-bold text-cyan-400 mb-4&quot;>$19/month</div>
              <ul className=&quot;space-y-2 mb-6&quot;>
                <li className=&quot;flex items-center text-sm text-gray-300&quot;>
                  <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
                  Up to 5 applications
                </li>
                <li className=&quot;flex items-center text-sm text-gray-300&quot;>
                  <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
                  Basic support
                </li>
                <li className=&quot;flex items-center text-sm text-gray-300&quot;>
                  <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
                  Standard features
                </li>
              </ul>
              <a
                href=&quot;/contact&quot;
                className=&quot;block w-full text-center bg-cyan-500 text-white py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors&quot;
              >
                Get Started</a>
            </div>
            <div className=&quot;bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border-2 border-cyan-500&quot;></div>
              <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Professional</h3>
              <div className=&quot;text-3xl font-bold text-cyan-400 mb-4&quot;>$99/month</div>
              <ul className=&quot;space-y-2 mb-6&quot;>
                <li className=&quot;flex items-center text-sm text-gray-300&quot;>
                  <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
                  Up to 25 applications
                </li>
                <li className=&quot;flex items-center text-sm text-gray-300&quot;>
                  <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
                  Priority support
                </li>
                <li className=&quot;flex items-center text-sm text-gray-300&quot;>
                  <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
                  Advanced features
                </li>
                <li className=&quot;flex items-center text-sm text-gray-300&quot;>
                  <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
                  Custom integrations
                </li>
              </ul>
              <a
                href=&quot;/contact&quot;
                className=&quot;block w-full text-center bg-cyan-500 text-white py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors&quot;
              >
                Get Started</a>
            </div>
            <div className=&quot;bg-slate-800/50 backdrop-blur-sm rounded-xl p-6&quot;></div>
              <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Enterprise</h3>
              <div className=&quot;text-3xl font-bold text-cyan-400 mb-4&quot;>Custom</div>
              <ul className=&quot;space-y-2 mb-6&quot;>
                <li className=&quot;flex items-center text-sm text-gray-300&quot;>
                  <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
                  Unlimited applications
                </li>
                <li className=&quot;flex items-center text-sm text-gray-300&quot;>
                  <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
                  24/7 dedicated support
                </li>
                <li className=&quot;flex items-center text-sm text-gray-300&quot;>
                  <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
                  Custom development
                </li>
                <li className=&quot;flex items-center text-sm text-gray-300&quot;>
                  <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
                  On-premise deployment
                </li>
              </ul>
              <a
                href=&quot;/contact&quot;
                className=&quot;block w-full text-center bg-cyan-500 text-white py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors&quot;
              >
                Contact Sales</a>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className=&quot;text-center&quot;></section>
          <div className=&quot;bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-2xl p-8&quot;></div>
            <h2 className=&quot;text-3xl font-bold text-white mb-4&quot;>Ready to Transform Your Business?</h2>
            <p className=&quot;text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
              Choose from our extensive library of AI-powered applications and start seeing results immediately.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <a
                href=&quot;/contact&quot;
                className=&quot;bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105&quot;
              >
                Browse All Solutions
              </a>
              <a
                href=&quot;tel:+13024640950&quot;
                className=&quot;border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300&quot;
              >
                (302) 464-0950</a>
            </div>
            <div className=&quot;mt-8 text-sm text-gray-400&quot;></div>
              <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
    </div>
  )
}
   }
  ];

export default Page;
