    "use client",
import { Brain, BarChart } from 'lucide-react';
import React from 'react';
import { BookOpen, ShieldCheck, Wifi, Server, Monitor, Printer, Router, Laptop, Tablet, Watch, Headset, Keyboard, Mouse, Webcam, Speaker, Battery, Power, Cog, Settings2 } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle } from 'lucide-react';
constMicroSAASPage: React.FC = () =>{constcategories= [
    {
      title: "AI-Powered Tools",
      icon: Brain,
      color: "text-purple-40 0",
      bgColor: 'bg-purple-50 0/2 0'
      services: []
        { name: 'AI Writing Assistant', price: '$1 9/month', description: 'AI-powered content creation and editing'}
        {name: 'AI Code Generator', price: '$4 9/month', description: 'AI-assisted coding and development'}
        {name: 'AI Design Studio', price: '$3 9/month', description: 'AI-powered graphic design tools'}
        {name: 'AI Analytics Dashboard', price: '$7 9/month', description: 'Real-time business intelligence'}
        {name: 'AI Chatbot Builder', price: '$2 9/month', description: 'No-code chatbot creation'}
        {name: 'AI SEO Optimizer', price: '$4 9/month', description: 'Automated SEO analysis and optimization'}
  ]
  }
    {title: "Business Applications",
      icon: BarChart,
      color: "text-blue-40 0",
      bgColor: 'bg-blue-50 0/2 0'
      services: []
        { name: 'AI-Powered CRM', price: '$4 9/month', description: 'Intelligent customer relationship management'}
        {name: 'AI Invoice Generator', price: '$1 9/month', description: 'Automated invoicing and billing'}
        {name: 'AI Lead Scoring', price: '$3 9/month', description: 'Intelligent lead qualification'}
        {name: 'AI Social Media Manager', price: '$5 9/month', description: 'Social media automation'}
        {name: 'AI Email Marketing', price: '$5 9/month', description: 'Automated email campaigns'}
        {name: 'AI Financial Planner', price: '$6 9/month', description: 'Financial planning and analysis'}
  ]
  }
    {title: "Productivity Tools",
      icon: Settings2,
      color: "text-green-40 0",
      bgColor: 'bg-green-50 0/2 0'
      services: []
        { name: 'AI Task Manager Pro', price: '$2 9/month', description: 'Intelligent task management'}
        {name: 'AI Expense Tracker', price: '$1 9/month', description: 'Smart expense management'}
        {name: 'AI Scheduler', price: '$3 9/month', description: 'Intelligent scheduling'}
        {name: 'AI Document Processor', price: '$4 9/month', description: 'Intelligent do cument processing'}
        {name: 'AI Password Manager', price: '$9/month', description: 'Secure password management'}
        {name: 'AI Voice Assistant', price: '$3 9/month', description: 'Custom voice assistants'}
  ]
  }
    {title: "Creative & Media",
      icon: Palette,
      color: "text-pink-40 0",
      bgColor: 'bg-pink-50 0/2 0'
      services: []
        { name: 'AI Video Creator', price: '$7 9/month', description: 'Automated video production'}
        {name: 'AI Music Composer', price: '$4 9/month', description: 'AI music generation'}
        {name: 'AI3D Generator', price: '$8 9/month', description: 'AI3D modeling and design'}
        {name: 'AI Fashion Design', price: '$6 9/month', description: 'AI fashion solutions'}
        {name: 'AI Photo Editor', price: '$2 9/month', description: 'AI-powered photo editing'}
        {name: 'AI Content Studio', price: '$5 9/month', description: 'Complete content creation suite'}
  ]
  }
    {title: "E-commerce & Marketing",
      icon: CreditCard,
      color: "text-orange-40 0",
      bgColor: 'bg-orange-50 0/2 0'
      services: []
        { name: 'AI E-commerce Assistant', price: '$7 9/month', description: 'E-commerce optimization'}
        {name: 'AI Store Optimizer', price: '$5 9/month', description: 'Store performance optimization'}
        {name: 'AI Market Research', price: '$8 9/month', description: 'Automated market analysis'}
        {name: 'AI A/B Testing', price: '$4 9/month', description: 'Intelligent testing platform'}
        {name: 'AI Growth Hacker', price: '$9 9/month', description: 'Automated growth strategies'}
        {name: 'AI Website Builder', price: '$3 9/month', description: 'AI website creation'}
  ]
  }
    {title: "Security & Monitoring",
      icon: ShieldCheck,
      color: "text-red-40 0",
      bgColor: 'bg-red-50 0/2 0'
      services: []
        { name: 'AI Security Monitor', price: '$9 9/month', description: 'Real-time security monitoring'}
        {name: 'AI Performance Tracker', price: '$4 9/month', description: 'Comprehensive performance tracking'}
        {name: 'AI Predictive Analytics', price: '$7 9/month', description: 'Future outcome predictions'}
        {name: 'AI Health Tracker', price: '$2 9/month', description: 'Personal health monitoring'}
        {name: 'AI Learning Platform', price: '$5 9/month', description: 'Personalized learning'}
        {name: 'AI Data Pipeline', price: '$6 9/month', description: 'Automated data processing'}
  ]
  }
  ]
  constbenefits= []
    {
      icon: Zap,
      title: "Instant Deployment",
      description: 'Get started in minutes with our ready-to-use applications'
  }
    {
      icon: Star,
      title: "Proven Results",
      description: 'Average200% productivity increase within 30days'
  }
    {
      icon: ShieldCheck,
      title: "Enterprise Security",
      description: 'Bank-level security and compliance for all applications'
  }
    {
      icon: BarChart,
      title: "Scalable Solutions",
      description: 'Grow from startup to enterprise with flexible pricing'
  }
  ]
const Page = () => {
  return (
    <div className="min-h-s creenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="con tainermx-auto px-4 py-16 pt-24">
        </div>
        {/* Hero Section */}
        <section className="tex t-centermb-16">
          <h1 className="tex t-4xlmd: text-6xl font-bold text-white mb-6"></h1>
            <span className="bg-gr adient-to-rfrom-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        </div>
              Micro SAAS Solutions
            </span>
          </h1>
          <p className="tex t-xltext-gray-300 mb-8 max-w-4xl mx-auto">
        </div>
            Choose from 100+ ready-to-use AI-powered applications that solve specific business problems.
            Deploy instantly and start seeing results from day one.
          </p>
          <div className="fle xflex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              className="bg-gr adient-to-rfrom-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
            >
        </div>
              Browse All Solutions
            </a>
            <a href="tel:+13024640950">
              className="bor der-2border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
        </div>
              (302) 464-0950
            </a>
          </div>
        </section>
        {/* Categories */}
        <section className="mb-16">
          <h2 className="tex t-3xlfont-bold text-white text-center mb-12">Solution Categories</h2>
          <div className="gri dgrid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => ()
              <div key={index} className="bg-sl ate-800/50backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                <div className="fle xitems-center mb-6">
                  <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mr-4`}></div>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="tex t-xlfont-bold text-white">{category.title}</h3>
                </div>
                <div className="spa ce-y-3">
                  {category.services.map((service, serviceIndex) => ()
                    <div key={serviceIndex} className="fle xjustify-between items-center p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors">
                        <div className="fon t-mediumtext-white text-sm">{service.name}</div>
                        <div className="tex t-xstext-gray-400">{service.description}</div>
                      </div>
                      <div className="tex t-right">
                        <div className={`font-bold ${category.color} text-sm`}>{service.price}</div>
                        <a href="/contact">
                          className="tex t-xstext-cyan-400 hover: text-cyan-300 transition-colors"
                        >
        </div>
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
        <section className="mb-16">
          <div className="bg-gr adient-to-rfrom-indigo-900/50 to-purple-900/50 rounded-2xl p-8">
            <h2 className="tex t-3xlfont-bold text-white text-center mb-12">Why Choose Our Micro SAAS Solutions?</h2>
            <div className="gri dgrid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => ()
                <div key={index} className="tex t-center">
                  <div className="w-16h-16bg-c y an-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8h-8te x t-cyan-400" />
                  </div>
                  <h3 className="tex t-xlfont-bold text-white mb-2">{benefit.title}</h3>
                  <p className="tex t-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Pricing Tiers */}
        <section className="mb-16">
          <h2 className="tex t-3xlfont-bold text-white text-center mb-12">Simple Pricing</h2>
          <div className="gri dgrid-cols-1 md: grid-cols-3 gap-8">
            <div className="bg-sl ate-800/50backdrop-blur-sm rounded-xl p-6">
              <h3 className="tex t-xlfont-bold text-white mb-4">Starter</h3>
              <div className="tex t-3xlfont-bold text-cyan-400 mb-4">$19/month</div>
              <ul className="spa ce-y-2mb-6">
        </div>
                <li className="fle xitems-center text-sm text-gray-300">
        </div>
                  <CheckCircle className="w-4h-4te x t-green-400 mr-2" />
                  Up to 5 applications
                </li>
                <li className="fle xitems-center text-sm text-gray-300">
        </div>
                  <CheckCircle className="w-4h-4te x t-green-400 mr-2" />
                  Basic support
                </li>
                <li className="fle xitems-center text-sm text-gray-300">
        </div>
                  <CheckCircle className="w-4h-4te x t-green-400 mr-2" />
                  Standard features
                </li>
              </ul>
              <a href="/contact">
                className="blo ckw-full text-center bg-cyan-500 text-white py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
              >
        </div>
                Get Started
              </a>
            </div>
            <div className="bg-sl ate-800/50backdrop-blur-sm rounded-xl p-6 border-2 border-cyan-500">
              <h3 className="tex t-xlfont-bold text-white mb-4">Professional</h3>
              <div className="tex t-3xlfont-bold text-cyan-400 mb-4">$99/month</div>
              <ul className="spa ce-y-2mb-6">
        </div>
                <li className="fle xitems-center text-sm text-gray-300">
        </div>
                  <CheckCircle className="w-4h-4te x t-green-400 mr-2" />
                  Up to 25 applications
                </li>
                <li className="fle xitems-center text-sm text-gray-300">
        </div>
                  <CheckCircle className="w-4h-4te x t-green-400 mr-2" />
                  Priority support
                </li>
                <li className="fle xitems-center text-sm text-gray-300">
        </div>
                  <CheckCircle className="w-4h-4te x t-green-400 mr-2" />
                  Advanced features
                </li>
                <li className="fle xitems-center text-sm text-gray-300">
        </div>
                  <CheckCircle className="w-4h-4te x t-green-400 mr-2" />
                  Custom integrations
                </li>
              </ul>
              <a href="/contact">
                className="blo ckw-full text-center bg-cyan-500 text-white py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
              >
        </div>
                Get Started
              </a>
            </div>
            <div className="bg-sl ate-800/50backdrop-blur-sm rounded-xl p-6">
              <h3 className="tex t-xlfont-bold text-white mb-4">Enterprise</h3>
              <div className="tex t-3xlfont-bold text-cyan-400 mb-4">Custom</div>
              <ul className="spa ce-y-2mb-6">
        </div>
                <li className="fle xitems-center text-sm text-gray-300">
        </div>
                  <CheckCircle className="w-4h-4te x t-green-400 mr-2" />
                  Unlimited applications
                </li>
                <li className="fle xitems-center text-sm text-gray-300">
        </div>
                  <CheckCircle className="w-4h-4te x t-green-400 mr-2" />
                  24/7 dedicated support
                </li>
                <li className="fle xitems-center text-sm text-gray-300">
        </div>
                  <CheckCircle className="w-4h-4te x t-green-400 mr-2" />
                  Custom development
                </li>
                <li className="fle xitems-center text-sm text-gray-300">
        </div>
                  <CheckCircle className="w-4h-4te x t-green-400 mr-2" />
                  On-premise deployment
                </li>
              </ul>
              <a href="/contact">
                className="blo ckw-full text-center bg-cyan-500 text-white py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
              >
        </div>
                Contact Sales
              </a>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="tex t-center">
          <div className="bg-gr adient-to-rfrom-cyan-900/50 to-purple-900/50 rounded-2xl p-8">
            <h2 className="tex t-3xlfont-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="tex t-gray-300mb-8 max-w-2xl mx-auto">
        </div>
              Choose from our extensive library of AI-powered applications and start seeing results immediately.
            </p>
            <div className="fle xflex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                className="bg-gr adient-to-rfrom-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
        </div>
                Browse All Solutions
              </a>
              <a href="tel:+13024640950">
                className="bor der-2border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
        </div>
                (302) 464-0950
              </a>
            </div>
            <div className="mt-8te xt-sm text-gray-400">
              <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
};
;
  }
export default Page;