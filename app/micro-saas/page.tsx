<<<<<<< HEAD
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare } from 'lucide-react';
import { Zap, CheckCircle, ArrowRight, Star, Users, Shield, Cloud, BarChart3, Target, Rocket, MessageSquare, TrendingUp } from 'lucide-react';
interface MicroSaasProduct {}
=======
'use client;

import React from 'react;

import { Helmet } from 'react-helmet-async;

import { Link } from 'react-router-dom;

import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare } from 'lucide-react;

interface MicroSaasProduct {
>>>>>>> origin/main
  id: string;

  icon: React.ComponentType<any>;

  title: string;

  description: string;

  features: string[];

  price: string;

  users: string;

  popular: boolean;

  category: string;

}

<<<<<<< HEAD
const MicroSaasPage: React.FC = () => {}
  const microSaasProducts: MicroSaasProduct[] = []
    {}
      id: '1',
      icon: '📊',
      icon: BarChart3,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence and predictive analytics for small to medium businesses',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app', 'API integration'],
      price: '$99/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Analytics'
    },
      category: 'Analytics'
      ico,
    n: '📊',
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence and predictive analytics for small to medium businesses',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app'],
      price: '$99;
      user,
    s: 'Up to 50 users'},
      category: 'Analytics'});;)
},
    {}
      id: '2',
      icon: '👥',
      icon: Users,
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with automated lead scoring and personalized interactions',
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs', 'Custom fields'],
      price: '$149/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'CRM'
    },
      category: 'CRM'
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs'],
      price: '$149;
      user,
    s: 'Up to 100 users'},
      category: 'CRM'});;)
},
    {}
      id: '3',
      icon: '🔒',
      icon: Shield,
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring and threat detection for growing businesses',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring', 'Incident response'],
      price: '$199/month',
      users: 'Up to 200 users',
      popular: false,
      category: 'Security'
    },
      category: 'Security'
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24;
      price: '$199;
      user,
    s: 'Up to 200 users'},
      category: 'Security'});;)
},
    {}
      id: '4',
      icon: '☁️',
      icon: Cloud,
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management and cost optimization for multi-cloud environments',
      features: ['Resource optimization', 'Cost tracking', 'Auto-scaling', 'Multi-cloud support', 'Backup management'],
      price: '$299/month',
      users: 'Unlimited users',
=======
const MicroSaasPage: React.FC = () => {
  const microSaasProducts: MicroSaasProduct[] = [
    {
      id: '1,
      icon: '📊,
      title: 'AI Analytics Dashboard,
      description: 'Real-time business intelligence and predictive analytics for small to medium businesses,
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app', 'API integration],
      price: '$99/month,
      users: 'Up to 50 users,
      popular: true,
      category: 'Analytics
    },
      category: 'Analytics
    },
      category: 'Analytics});)},
    {
      id: '2,
      icon: '👥,
      title: 'AI-Powered CRM,
      description: 'Intelligent customer relationship management with automated lead scoring and personalized interactions,
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs', 'Custom fields],
      price: '$149/month,
      users: 'Up to 100 users,
      popular: false,
      category: 'CRM
    },
      category: 'CRM
    },
      category: 'CRM});)},
    {
      id: '3,
      icon: '🔒,
      title: 'Security Monitoring Suite,
      description: 'Comprehensive cybersecurity monitoring and threat detection for growing businesses,
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring', 'Incident response],
      price: '$199/month,
      users: 'Up to 200 users,
      popular: false,
      category: 'Security
    },
      category: 'Security
    },
      category: 'Security});)},
    {
      id: '4,
      icon: '☁️,
      title: 'Cloud Infrastructure Manager,
      description: 'Automated cloud resource management and cost optimization for multi-cloud environments,
      features: ['Resource optimization', 'Cost tracking', 'Auto-scaling', 'Multi-cloud support', 'Backup management],
      price: '$299/month,
      users: 'Unlimited users,
>>>>>>> origin/main
      popular: false,
      category: Infrastructure
    },
<<<<<<< HEAD
    {}
      id: '5',
=======
    {
      id: '5,
>>>>>>> origin/main
      icon: MessageSquare,
      title: 'Email Marketing Automation,
      description: 'AI-driven email campaigns with advanced segmentation and personalization,
      features: ['Email templates', 'A/B testing', 'Segmentation', 'Analytics', 'Integration tools],
      price: '$79/month,
      users: 'Up to 25,000 contacts,
      popular: false,
      category: Marketing
    },
<<<<<<< HEAD
    {}
      id: '6',
=======
    {
      id: '6,
>>>>>>> origin/main
      icon: MessageSquare,
      title: 'Customer Support Chatbot,
      description: 'Intelligent chatbot solution for 24/7 customer support and lead generation,
      features: ['Natural language processing', 'Multi-channel support', 'Knowledge base', 'Analytics', 'Custom training],
      price: '$129/month,
      users: 'Unlimited conversations,
      popular: false,
<<<<<<< HEAD
      category: 'Support'
    }
      category: 'Support'
      features: ['Resource optimization', 'Cost tracking', 'Auto-scaling', 'Multi-cloud support'],
      price: '$299;
      user,
    s: 'Unlimited users'}
      category: 'Support'});;)
}
  ];
  const benefits = []
    'No upfront costs or setup fees',
    'Quick deployment in 24-48 hours',
    'Scalable solutions that grow with you',
    'Regular updates and new features',
    '24/7 technical support',
    'Easy integration with existing tools',
    'Free trial for all products',
    'Cancel anytime, no long-term contracts'
  ];
  const categories = "['All', 'Analytics', 'CRM', 'Security', 'Infrastructure', 'Marketing', 'Support'];"
  const stats = []
    {}
=======
      category: 'Support
    }

      category: 'Support
    }

      category: 'Support});)
}

  ];

  const benefits = [    'No upfront costs or setup fees,;
    'Quick deployment in 24-48 hours,
    'Scalable solutions that grow with you,
    'Regular updates and new features,
    '24/7 technical support,
    'Easy integration with existing tools,
    'Free trial for all products,
    Cancel anytime, no long-term contracts
  ];

  const categories = ['All', 'Analytics', 'CRM', 'Security', 'Infrastructure', 'Marketing', Support];;

  const stats = [;;

    {
>>>>>>> origin/main
      icon: Users,
      value: '10,000+,
      label: 'Active Users,
      description: Growing community of satisfied customers
    },
    {}
      icon: TrendingUp,
      value: '99.9%,
      label: 'Uptime,
      description: Reliable service you can count on
    },
    {}
      icon: Star,
      value: '4.8/5,
      label: 'Rating,
      description: Highly rated by our customers
    },
    {}
      icon: Zap,
<<<<<<< HEAD
      value: '24/7',
      label: 'Support',
      description: 'Always here when you need us'
=======
      value: '24/7,
      label: 'Support,
      description: Always here when you need us
>>>>>>> origin/main
    }

  ];
<<<<<<< HEAD
  const features = []
    {}
=======

  const features = [;;

    {
>>>>>>> origin/main
      icon: Zap,
      title: 'Lightning Fast Setup,
      description: Get up and running in minutes with our streamlined onboarding process
    },
    {}
      icon: Target,
      title: 'Focused Solutions,
      description: Each micro SaaS is designed to solve specific business challenges effectively
    },
    {}
      icon: Rocket,
<<<<<<< HEAD
      title: 'Rapid Innovation',
      description: 'Frequent updates and new features based on user feedback and market needs'
=======
      title: 'Rapid Innovation,
      description: Frequent updates and new features based on user feedback and market needs
>>>>>>> origin/main
    }

  ];
  return (

    <>
      <Helmet></Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Ready-to-Use Business Tools</title>
<<<<<<< HEAD
        <meta name="description" content=""Discover our collection of micro SaaS solutions designed for small to medium businesses. AI-powered tools for analytics, CRM, security, and more." /></meta>"
        <meta name="keywords" content=""micro SaaS, business tools, AI analytics, CRM, security monitoring, cloud management, small business software" /></meta>"
        <meta property="og:title" content=""Micro SaaS Solutions - Zion Tech Group" /></meta>"
        <meta property="og:description" content=""Focused AI and IT tools for specific business needs" /></meta>"
        <meta property="og:type" content=""website" /></meta>"
        <meta property="og:url" content=""https://ziontechgroup.com/micro-saas" /></meta>"
      </Helmet>
      <div className=""min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>"
        {/* Hero Section */}
        <section className=""py-20 px-4"></section>"
          <div className=""max-w-7xl mx-auto text-center"></div>"
            <h1 className=""text-4xl md:text-6xl font-bold text-white mb-6"></h1>"
              Micro <span className=""text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SaaS</span> Solutions;"
            <h1 className=""text-5xl md:text-6xl font-bold text-white mb-6"></h1>"
              <span className=""bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"></span>"
                Micro SaaS Solutions;
              </span>
            </h1>
            <p className=""text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>"
              Focused, affordable AI and IT tools designed for specific business needs. 
              Quick deployment, scalable, and cost-effective solutions for growing businesses.
            </p>
            <div className=""grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"></div>"
              {stats.map((stat, index) => (
                <div key={index} className=""text-center"></div>"
                  <div className=""w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center"></div>"
                    <stat.icon className=""w-8 h-8 text-slate-900" /></stat>"
                  </div>
                  <div className=""text-3xl font-bold text-white mb-2">{stat.value}</div>"
                  <div className=""text-gray-400 text-sm">{stat.label}</div>"
                  <div className=""text-gray-500 text-xs mt-1">{stat.description}</div>"
=======
        <meta name="description" content="Discover our collection of micro SaaS solutions designed for small to medium businesses. AI-powered tools for analytics, CRM, security, and more. />
        <meta name="keywords" content="micro SaaS, business tools, AI analytics, CRM, security monitoring, cloud management, small business software />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>
        {/* Hero Section */}

        <section className="py-20 px-4>
          <div className="max-w-7xl mx-auto text-center>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6>
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400>SaaS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto>
              Focused, affordable AI and IT tools designed for specific business needs. 
              Quick deployment, scalable, and cost-effective solutions for growing businesses.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto>
              {stats.map((stat, index) => (

                <div key={index} className="text-center>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center>
                    <stat.icon className="w-8 h-8 text-slate-900 />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2>{stat.value}</div>
                  <div className="text-gray-400 text-sm>{stat.label}</div>
                  <div className="text-gray-500 text-xs mt-1>{stat.description}</div>
>>>>>>> origin/main
                </div>
              ))}

            </div>
          </div>
        </section>
        {/* Category Filter */}
<<<<<<< HEAD
        <section className=""py-8 px-4"></section>"
          <div className=""max-w-7xl mx-auto"></div>"
            <div className=""flex flex-wrap justify-center gap-4"></div>"
              {categories.map((category) => (
                <button key = "{category}></button>"
                  className="{`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${}"
                    category === 'All'
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}>
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className=""py-16 px-4"></section>"
          <div className=""max-w-7xl mx-auto"></div>"
            <h2 className=""text-3xl font-bold text-white mb-12 text-center">Why Choose Micro SaaS?</h2>"
            <div className=""grid grid-cols-1 md:grid-cols-3 gap-8"></div>"
              {features.map((feature, index) => (
                <div key={index} className=""text-center"></div>"
                  <div className=""w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4"></div>"
                    <feature.icon className=""w-8 h-8 text-slate-900" /></feature>"
                  </div>
                  <h3 className=""text-xl font-semibold text-white mb-2">{feature.title}</h3>"
                  <p className=""text-gray-300">{feature.description}</p>"
                </div>
=======

        <section className="py-8 px-4>
          <div className="max-w-7xl mx-auto>
            <div className="flex flex-wrap justify-center gap-4>
              {categories.map((category) => (

                <button
                  key={category}

                  className={px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    category === All
                      ? bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900
                      : bg-white/10 text-gray-300 hover:bg-white/20
                  }}

                >
                  {category}

                </button>
>>>>>>> origin/main
              ))}

            </div>
          </div>
        </section>
        {/* Products Grid */}
<<<<<<< HEAD
        <section className=""py-16 px-4"></section>"
          <div className=""max-w-7xl mx-auto"></div>"
            <div className=""text-center mb-16"></div>"
              <h2 className=""text-3xl font-bold text-white mb-6">Our Micro SaaS Products</h2>"
              <p className=""text-xl text-gray-300 max-w-3xl mx-auto"></p>"
                Choose from our collection of specialized business tools designed to solve specific challenges.
              </p>
            </div>
            <div className=""grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>"
              {microSaasProducts.map((product) => (
                <div key = "{product.id}></div>"
                  className="{`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group ${}"
                    product.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-slate-700'
                  }`}>
                  {product.popular && (
                    <div className=""absolute -top-4 left-1/2 transform -translate-x-1/2"></div>"
                      <div className=""bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2"></div>"
                        <Star className=""w-4 h-4 fill-current" /></Star>"
                    <div className=""absolute -top-3 left-1/2 transform -translate-x-1/2"></div>"
                      <div className=""bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1"></div>"
                        <Star className=""w-3 h-3 fill-current" /></Star>"
                        Most Popular;
=======

        <section className="py-16 px-4>
          <div className="max-w-7xl mx-auto>
            <div className="text-center mb-16>
              <h2 className="text-3xl font-bold text-white mb-6>Our Micro SaaS Products</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto>
                Choose from our collection of specialized business tools designed to solve specific challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8>
              {microSaasProducts.map((product) => (

                <div
                  key={product.id}

                  className={relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group ${
                    product.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20 : border-slate-700
                  }}

                >
                  {product.popular && (

                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2>
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2>
                        <Star className="w-4 h-4 fill-current />                        Most Popular
>>>>>>> origin/main
                      </div>
                    </div>
                  )}

<<<<<<< HEAD
                  <div className=""text-center mb-6"></div>"
                    <div className=""text-4xl mb-4">{product.icon}</div>"
                    <h3 className=""text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors"></h3>"
=======
                  <div className="text-center mb-6>
                    <div className="text-4xl mb-4>{product.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors>
>>>>>>> origin/main
                      {product.title}

                    </h3>
<<<<<<< HEAD
                    <p className=""text-gray-300 text-sm mb-4">{product.description}</p>"
                    <div className=""flex items-center justify-center gap-2 mb-4"></div>"
                      <span className=""text-2xl font-bold text-white">{product.price}</span>"
                      <span className=""text-gray-400 text-sm">{product.users}</span>"
                    </div>
                    <div className=""inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full"></div>"
=======
                    <p className="text-gray-300 text-sm mb-4>{product.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-4>
                      <span className="text-2xl font-bold text-white>{product.price}</span>
                      <span className="text-gray-400 text-sm>{product.users}</span>
                    </div>
                    <div className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full>
>>>>>>> origin/main
                      {product.category}

                    </div>
                  </div>
<<<<<<< HEAD
                  <ul className=""space-y-3 mb-8"></ul>"
                    {product.features.map((feature, index) => (
                      <li key={index} className=""flex items-center text-gray-300 text-sm"></li>"
                        <CheckCircle className=""w-4 h-4 text-green-400 mr-3 flex-shrink-0" /></CheckCircle>"
                        {feature}
                      </li>
=======

                  <ul className="space-y-3 mb-8>
                    {product.features.map((feature, index) => (

                      <li key={index} className="flex items-center text-gray-300 text-sm>
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0 />
                        {feature}                      </li>
>>>>>>> origin/main
                    ))}

                  </ul>
<<<<<<< HEAD
                  <div className=""flex flex-col gap-3"></div>"
                    <button className=""w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transform hover:scale-105"></button>"
                      Start Free Trial;
                    </button>
                    <button className=""w-full py-2 px-6 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20"></button>"
                      Learn More;
                    </button>
                  </div>
                  <div className=""text-center mb-6"></div>"
                    <div className=""w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg flex items-center justify-center mx-auto mb-4"></div>"
                      <product.icon className=""w-8 h-8 text-cyan-400" /></product>"
                    </div>
                    <h3 className=""text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors"></h3>"
                      {product.title}
                    </h3>
                    <p className=""text-gray-300 text-sm mb-4">{product.description}</p>"
                    <div className=""text-3xl font-bold text-cyan-400 mb-1">{product.price}</div>"
                    <div className=""text-gray-400 text-sm">{product.users}</div>"
                    <div className=""inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full mt-2"></div>"
                      {product.category}
                    </div>
                  </div>
                  <ul className=""space-y-3 mb-6"></ul>"
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className=""flex items-center gap-3"></li>"
                        <CheckCircle className=""w-4 h-4 text-cyan-400 flex-shrink-0" /></CheckCircle>"
                        <span className=""text-gray-300 text-sm">{feature}</span>"
                      </li>
                    ))}
                  </ul>
                  <button className="{`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${></button>"
                    product.popular;
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 hover:from-cyan-300 hover:to-purple-300'
                      : 'bg-slate-700 text-white hover:bg-slate-600 border border-slate-600'
                  }`}>
                    Start Free Trial;
                    <ArrowRight className=""w-4 h-4" /></ArrowRight>"
                  </button>
                </div>
=======

                  <div className="flex flex-col gap-3>
                    <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transform hover:scale-105>
                      Start Free Trial
                    </button>
                    <button className="w-full py-2 px-6 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20>
                      Learn More
                    </button>
                  </div>                </div>
>>>>>>> origin/main
              ))}

            </div>
          </div>
        </section>
        {/* Benefits Section */}
<<<<<<< HEAD
        <section className=""py-16 px-4"></section>"
          <div className=""max-w-7xl mx-auto"></div>"
            <div className=""text-center mb-16"></div>"
              <h2 className=""text-3xl font-bold text-white mb-6">Why Choose Our Micro SaaS Solutions?</h2>"
              <p className=""text-xl text-gray-300 max-w-3xl mx-auto"></p>"
                We've designed our micro SaaS products to be simple, powerful, and accessible to businesses of all sizes.
              </p>
            </div>
            <div className=""bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"></div>"
              <div className=""grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>"
                {benefits.map((benefit, index) => (
                  <div key={index} className=""flex items-start space-x-3"></div>"
                    <CheckCircle className=""w-5 h-5 text-green-400 flex-shrink-0 mt-1" /></CheckCircle>"
            <div className=""bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12"></div>"
              <h2 className=""text-3xl font-bold text-white mb-8 text-center">Benefits of Micro SaaS</h2>"
              <div className=""grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>"
                {benefits.map((benefit, index) => (
                  <div key={index} className=""flex items-center gap-3"></div>"
                    <CheckCircle className=""w-5 h-5 text-cyan-400 flex-shrink-0" /></CheckCircle>"
                    <span className=""text-gray-300">{benefit}</span>"
=======

        <section className="py-16 px-4>
          <div className="max-w-7xl mx-auto>
            <div className="text-center mb-16>
              <h2 className="text-3xl font-bold text-white mb-6>Why Choose Our Micro SaaS Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto>
                Weve designed our micro SaaS products to be simple, powerful, and accessible to businesses of all sizes.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6>
                {benefits.map((benefit, index) => (

                  <div key={index} className="flex items-start space-x-3>
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />                    <span className="text-gray-300>{benefit}</span>
>>>>>>> origin/main
                  </div>
                ))}

              </div>
            </div>
          </div>
        </section>
        {/* How It Works */}
<<<<<<< HEAD
        <section className=""py-16 px-4"></section>"
          <div className=""max-w-7xl mx-auto"></div>"
            <div className=""text-center mb-16"></div>"
              <h2 className=""text-3xl font-bold text-white mb-6">How It Works</h2>"
              <p className=""text-xl text-gray-300 max-w-3xl mx-auto"></p>"
                Getting started with our micro SaaS solutions is simple and straightforward.
              </p>
            </div>
            <div className=""grid grid-cols-1 md:grid-cols-3 gap-8"></div>"
              <div className=""text-center"></div>"
                <div className=""w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-6 flex items-center justify-center"></div>"
                  <span className=""text-2xl font-bold text-slate-900">1</span>"
                </div>
                <h3 className=""text-xl font-bold text-white mb-4">Choose Your Solution</h3>"
                <p className=""text-gray-300">Browse our collection and select the micro SaaS product that fits your needs.</p>"
              </div>
              <div className=""text-center"></div>"
                <div className=""w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-6 flex items-center justify-center"></div>"
                  <span className=""text-2xl font-bold text-slate-900">2</span>"
                </div>
                <h3 className=""text-xl font-bold text-white mb-4">Start Free Trial</h3>"
                <p className=""text-gray-300">Sign up for a free trial and explore all features without any commitment.</p>"
              </div>
              <div className=""text-center"></div>"
                <div className=""w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-6 flex items-center justify-center"></div>"
                  <span className=""text-2xl font-bold text-slate-900">3</span>"
                </div>
                <h3 className=""text-xl font-bold text-white mb-4">Scale & Grow</h3>"
                <p className=""text-gray-300">Upgrade when you're ready and scale your usage as your business grows.</p>"
=======

        <section className="py-16 px-4>
          <div className="max-w-7xl mx-auto>
            <div className="text-center mb-16>
              <h2 className="text-3xl font-bold text-white mb-6>How It Works</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto>
                Getting started with our micro SaaS solutions is simple and straightforward.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8>
              <div className="text-center>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-6 flex items-center justify-center>
                  <span className="text-2xl font-bold text-slate-900>1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4>Choose Your Solution</h3>
                <p className="text-gray-300>Browse our collection and select the micro SaaS product that fits your needs.</p>
              </div>
              <div className="text-center>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-6 flex items-center justify-center>
                  <span className="text-2xl font-bold text-slate-900>2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4>Start Free Trial</h3>
                <p className="text-gray-300>Sign up for a free trial and explore all features without any commitment.</p>
              </div>
              <div className="text-center>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-6 flex items-center justify-center>
                  <span className="text-2xl font-bold text-slate-900>3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4>Scale & Grow</h3>
                <p className="text-gray-300">Upgrade when youre ready and scale your usage as your business grows.</p>
>>>>>>> origin/main
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
<<<<<<< HEAD
        <section className=""py-16 px-4"></section>"
          <div className=""max-w-4xl mx-auto text-center"></div>"
            <div className=""bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-12"></div>"
              <h2 className=""text-3xl font-bold text-white mb-6"></h2>"
        <section className=""py-16 px-4"></section>"
    'No upfront costs',
    'Quick deployment',
    'Scalable solutions',
    'Regular updates',
    '24;
    'Easy integration'
  ];
  return (<div></div>
        {/* CTA Section *
        <section className=""py-20 px-4"></section>"
          <div className=""max-w-4xl mx-auto text-center"></div>"
            <div className=""bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20"></div>"
              <h2 className=""text-3xl font-bold text-white mb-6"></h2>"
=======

        <section className="py-16 px-4>
          <div className="max-w-4xl mx-auto text-center>
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-12>
              <h2 className="text-3xl font-bold text-white mb-6>
        <section className="py-16 px-4>
          <div className="max-w-4xl mx-auto text-center">            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20>
              <h2 className="text-3xl font-bold text-white mb-6>
>>>>>>> origin/main
        <section></section>
          <div></div>
            <div></div>
              <h2></h2>
                Ready to Get Started?
              </h2>
<<<<<<< HEAD
              <p className=""text-xl text-gray-300 mb-8 max-w-2xl mx-auto"></p>"
              <p className=""text-xl text-gray-300 mb-8 max-w-2xl mx-auto"></p>"
              <
              <p className=""text-xl text-white"></p>"
                Choose the micro SaaS solution that fits your business needs. 
                Start with a free trial and scale as you grow.
              <
              <div className=""flex flex-col sm:flex-row gap-4 justify-center"></div>"
                <Link to=""/contact"></Link>"
                  className=""inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">"
                  <Zap className=""w-5 h-5" /></Zap>"
                  Start Free Trial;
                </Link>
                <Link to=""/pricing"></Link>"
                  className=""inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">"
                  <Zap className=""w-5 h-5"></Zap>"
                  <span>Start Free Trial<
                <
                
                  View All Plans;
                <
=======
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto>
                Choose the micro SaaS solution that fits your business needs.                 Start with a free trial and scale as you grow.
              <
              <div className="flex flex-col sm:flex-row gap-4 justify-center>
                <Link
                  to="/contact
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105
                >
                  <Zap className="w-5 h-5 />
                  Start Free Trial
                </Link>
                <Link
                  to="/pricing
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300
                >
                  View All Plans                <
>>>>>>> origin/main
              <
            <
          <
        <
      <
    <)
  );
<<<<<<< HEAD
=======

>>>>>>> origin/main
              <p></p>
                Choose the micro SaaS solution that fits your business needs. 
                Start with a free trial and scale as you grow.
              </p>
<<<<<<< HEAD
              <div className=""flex flex-col sm:flex-row gap-4 justify-center"></div>"
                <Link to=""/contact"></Link>"
                  className=""inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 transform hover:scale-105">"
                  <Zap className=""w-5 h-5" /></Zap>"
                  Start Free Trial;
                </Link>
                <Link to=""/pricing"></Link>"
                  className=""inline-flex items-center gap-2 bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold border border-slate-600 hover:bg-slate-600 transition-all duration-300">"
                  View All Plans;
=======
              <div className="flex flex-col sm:flex-row gap-4 justify-center>
                <Link
                  to="/contact
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 transform hover:scale-105
                >
                  <Zap className="w-5 h-5 />
                  Start Free Trial
                </Link>
                <Link
                  to="/pricing
                  className="inline-flex items-center gap-2 bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold border border-slate-600 hover:bg-slate-600 transition-all duration-300
                >
                  View All Plans
>>>>>>> origin/main
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
<<<<<<< HEAD
  ));)
};
export default MicroSaasPage;
=======

};

export default MicroSaasPage;
>>>>>>> origin/main
