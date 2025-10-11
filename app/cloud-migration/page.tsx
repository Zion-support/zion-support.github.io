'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
<<<<<<< HEAD
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';
=======
import { BarChart, TrendingUp, PieChart, ArrowRight, CheckCircle, Zap, Shield, Target } from 'lucide-react';

const CloudMigrationPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'AI-powered insights to optimize your business performance.',
      benefits: ['Predictive analytics', 'Trend analysis', 'Performance metrics', 'Growth forecasting']
    },
    {
      icon: PieChart,
      title: 'Data Visualization',
      description: 'Transform complex data into clear, actionable insights.',
      benefits: ['Interactive charts', 'Custom reports', 'Data export', 'Visual storytelling']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    }
  ];

  const benefits = [
<<<<<<< HEAD
    'Increase efficiency by up to 80%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Real-time processing and analysis',
    'Seamless integration with existing systems'
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7

const PagePage: React.FC = () => {
  return (
<<<<<<< HEAD
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Page
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive solutions designed to transform your business.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Coming Soon
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                This page is under development. Please check back soon for updates.
              </p>
              <button className="cyber-button">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default PagePage;
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Cloud Migration
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-300">Everything you need to succeed with AI</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI Solutions?</h2>
              <p className="text-xl text-gray-300">Transform your business with intelligent automation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Zap className="h-6 w-6 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CloudMigrationPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
=======
    'Advanced cloud migration technology',
    'Real-time migration monitoring',
    'Enterprise-grade security and compliance',
    'Scalable and flexible migration solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div></div>
      </div><Helmet>
        </Helmet><title>Cloud Migration | Zion Tech Group</title>
        <meta name="description" content="Professional Cloud Migration services by Zion Tech Group. Advanced AI and IT solutions for your business." />
            Powered by cutting-edge AI technology and industry expertise.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8"></section></section>
        </section>
        <div className="max-w-7xl mx-auto"></div></div>
          <div className="text-center mb-16"></div></div>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4"></h2></h2>,</h2>
              Why Choose Our Cloud Migration?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p></p>Our cloud migration solutions deliver unmatched performance, security, and scalability.</p>
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div></div>,</div>
            {features.map((feature, index) => (
              <div key={index}className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover: bg-white/20 transition-all duration-300"></div></div>,</div>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"></div></div>
                  <feature.icon className="h-6 w-6 text-white" />
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8"></section></section>
        </section>< className="$2 />
          </div><div className="text-center mb-16"></div></div>
            </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2></h2>
              Why Choose Our Cloud Migration?
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p></p>
              Our cloud migration solutions deliver unmatched performance, security, and scalability.
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div></div>
            {features.map((feature, index) => (
              </div><div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"></div></div>
                </div><div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"></div></div>
                  </div><feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3"></h3></h3>{feature.title}</h3>
                <p className="text-gray-300"></p></p>{feature.description</p&gt;}</p>
              </div>
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"></div></div>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"></div></div>
                  <feature.icon className="h-6 w-6 text-white" />

  const pricingPlans = [
    {
      name: 'Assessment',
      price: '$2,999',
      period: 'one-time',
      description: 'Comprehensive cloud readiness assessment',
      features: [
        'Current infrastructure analysis',
        'Cloud readiness report',
        'Migration roadmap',
        'Cost estimation',
        'Security assessment',
        'Recommendations'
      ],
      popular: false
    },
    {
      name: 'Standard Migration',
      price: '$9,999',
      period: 'one-time',
      description: 'Complete migration for small to medium businesses',
      features: [
        'Up to 10 applications',
        'Data migration',
        'Security setup',
        'Testing & validation',
        'Go-live support',
        '30 days support'
      ],
      popular: true
    },
    {
      name: 'Enterprise Migration',
      price: 'Custom',
      period: 'quote',
      description: 'Large-scale enterprise migration',
      features: [
        'Unlimited applications',
        'Custom architecture',
        'Dedicated team',
        '24/7 support',
        'SLA guarantee',
        'Ongoing optimization'
      ],
      popular: false
    }
  ]

  const stats = [
    { value: '99.9%', label: 'Uptime Guarantee', icon: <Clock className="w-8 h-8 text-green-400" /&gt; },
    { value: '50%', label: 'Cost Reduction', icon: <BarChart className="w-8 h-8 text-blue-400" /&gt; },
    { value: '3x', label: 'Performance Improvement', icon: <Zap className="w-8 h-8 text-purple-400" /&gt; },
    { value: '24/7', label: 'Support Available', icon: <Users className="w-8 h-8 text-cyan-400" /&gt; }
  ]

  const migrationSteps = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Analyze current infrastructure and create detailed migration plan'
    },
    {
      step: '02',
      title: 'Environment Setup',
      description: 'Configure cloud environment and security settings'
    },
    {
      step: '03',
      title: 'Data Migration',
      description: 'Transfer data and applications to cloud infrastructure'
    },
    {
      step: '04',
      title: 'Testing & Validation',
      description: 'Comprehensive testing to ensure everything works perfectly'
    },
    {
      step: '05',
      title: 'Go-Live & Support',
      description: 'Deploy to production with ongoing monitoring and support'
    }
  ]

  const testimonials = [
    {
      name: 'Robert Kim',
      role: 'CTO, FinanceFirst',
      content: 'Cloud migration reduced our infrastructure costs by 60% and improved performance by 300%.',
      rating: 5,
      company: 'FinanceFirst'
    },
    {
      name: 'Jennifer Martinez',
      role: 'IT Director, RetailMax',
      content: 'The migration was seamless with zero downtime. Our team was impressed with the professionalism.',
      rating: 5,
      company: 'RetailMax'
    },
    {
      name: 'David Chen',
      role: 'CEO, TechStart',
      content: 'ROI was achieved in 6 months. The cloud infrastructure is more reliable than our on-premise setup.',
      rating: 5,
      company: 'TechStart'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div></div>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"></section></section>
        <div className="max-w-7xl mx-auto"></div></div>
          <div className="text-center"></div></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1></h1>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"></span></span>Cloud Migration</span> Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p></p>
              Seamlessly migrate your infrastructure to the cloud with zero downtime. 
              Reduce costs by 50% and improve performance by 300%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
                Get Free Assessment
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button>
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8"></section></section>
        <div className="max-w-7xl mx-auto"></div></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div></div>
            {stats.map((stat, index) => (
              <div key={index} className="text-center"></div></div>
                <div className="flex justify-center mb-4"></div></div>
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2"></div></div>
                  {stat.value}
                </div>
                <div className="text-gray-300"></div></div>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
  </button>
  </button>
  </h2>
  </section>
  </h1>
  </div>
  </div>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"></section></section>
        </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8"></section></section>
        <div className="max-w-7xl mx-auto"></div></div>
          <div className="text-center mb-16"></div></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2></h2>
              Comprehensive Migration Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p></p>
              End-to-end cloud migration solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div></div>
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"></div></div>
                <div className="flex items-center mb-4"></div></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4"></div></div>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white"></h3></h3>{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6"></p></p>{feature.description}</p>
                <ul className="space-y-2"></ul>
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-gray-300"></li>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

export default CloudMigrationPage
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
