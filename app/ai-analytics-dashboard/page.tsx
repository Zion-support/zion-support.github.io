'use client';
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  BarChart3,
  TrendingUp,
  PieChart,
  Activity,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Users,
  Zap,
  Star as StarIcon,
  CheckCircle as Check,
  ArrowRight as Arrow,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as Location
} from 'lucide-react';

const AIAnalyticsDashboardPage: React.FC = () => {
  const features = [
    {
      title: "Real-time Analytics",
      description: "Monitor your business performance with live data updates and instant insights across all key metrics.",
      icon: Activity,
      benefits: ["Live data streaming", "Instant updates", "Real-time alerts"]
    },
    {
      title: "Predictive Modeling",
      description: "Forecast future trends and outcomes using advanced machine learning algorithms and historical data analysis.",
      icon: TrendingUp,
      benefits: ["Future predictions", "Trend analysis", "Risk assessment"]
    },
    {
      title: "Custom Dashboards",
      description: "Create personalized dashboards tailored to your specific business needs and reporting requirements.",
      icon: BarChart3,
      benefits: ["Customizable views", "Drag-and-drop", "Role-based access"]
    },
    {
      title: "Data Visualization",
      description: "Transform complex data into clear, actionable insights with interactive charts and visual representations.",
      icon: PieChart,
      benefits: ["Interactive charts", "Multiple formats", "Export options"]
    },
    {
      title: "Performance Tracking",
      description: "Track KPIs and performance metrics with automated reporting and goal monitoring capabilities.",
      icon: Target,
      benefits: ["KPI tracking", "Goal setting", "Progress monitoring"]
    },
    {
      title: "AI Insights",
      description: "Get intelligent recommendations and insights powered by artificial intelligence and machine learning.",
      icon: Zap,
      benefits: ["Smart recommendations", "Pattern recognition", "Automated insights"]
    }
  ];

  const benefits = [
<<<<<<< HEAD
    'Reduce data analysis time by 90%',
    'Increase decision-making speed by 75%',
    'Improve data accuracy by 95%',
    'Lower operational costs by 40%',
    'Enable real-time business insights',
    'Automate routine reporting tasks',
    'Scale analytics across departments',
    'Enhance competitive advantage'
  ];

  const useCases = [
    {
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable business insights',
      icon: '📊'
    },
    {
      title: 'Financial Analytics',
      description: 'Monitor financial performance and predict trends',
      icon: '💰'
    },
    {
      title: 'Marketing Analytics',
      description: 'Track campaign performance and customer behavior',
      icon: '📈'
    },
    {
      title: 'Operations Dashboard',
      description: 'Monitor operational efficiency and KPIs',
      icon: '⚙️'
    },
    {
      title: 'Customer Analytics',
      description: 'Understand customer behavior and preferences',
      icon: '👥'
    },
    {
      title: 'Sales Performance',
      description: 'Track sales metrics and forecast revenue',
      icon: '🎯'
    }
  ],

=======
    'Increase decision-making speed by 75%',
    'Reduce data analysis time by 90%',
    'Improve forecast accuracy by 60%',
    'Enhance team productivity by 50%',
    'Optimize resource allocation by 40%',
    'Boost revenue growth by 35%'
  ];

>>>>>>> origin/main
  return (
    <>
      <Helmet>
        <title>AI Analytics Dashboard - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Transform your data into actionable insights with our AI Analytics Dashboard. Real-time analytics, predictive modeling, and custom dashboards for better business decisions." />
        <meta name="keywords" content="AI analytics, business intelligence, data visualization, predictive analytics, dashboard, data insights" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-8">
              <BarChart3 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Analytics Dashboard
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data into actionable insights with our advanced AI Analytics Dashboard. 
              Real-time analytics, predictive modeling, and custom dashboards for better business decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center">
                Start Analyzing
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Analytics Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI Analytics Dashboard combines cutting-edge technology with intuitive design
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Applications & Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From startups to enterprises, our AI Analytics Dashboard serves diverse industries
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Analytics Dashboard?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the future of data analytics with our revolutionary AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Data?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join thousands of businesses who are already using our AI Analytics Dashboard
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
=======
        <meta name="description" content="Advanced AI-powered analytics dashboard for data-driven business decisions. Real-time insights, predictive modeling, and custom dashboards." />
      </Helmet>

      <Navigation />
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Analytics
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Dashboard
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your data into actionable insights with our advanced AI Analytics Dashboard. 
            Real-time analytics, predictive modeling, and custom dashboards for better business decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center">
              Start Analyzing
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered analytics dashboard provides comprehensive insights for data-driven decision making.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Analytics Dashboard delivers measurable improvements in business performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our analytics experts to learn how our AI dashboard can revolutionize your business intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
>>>>>>> origin/main

      <Footer />
    </>
  );
};

export default AIAnalyticsDashboardPage;
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
import React from 'react';
import {Helmet}}from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
<<<<<<< HEAD
import {CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings}}from 'lucide-react';
const AiAnalyticsDashboardPage: React.FC = () => {,
    const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']},
    {icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']},
    {icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']},
    {icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']}}
  ]
const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',;
    'Improve decision-making with AI insights',;
    'Scale operations without proportional staff increases',;
    'Gain competitive advantage with advanced technology';
  ]
return(<>)
      <Helmet />
        <title>Ai Analytics Dashboard - Zion Tech Group</title>
        <meta />
        <meta />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900"></div>
        {/* Hero Section */} <section className="relative py-20 px-4 overflow-hidden"></section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" /></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} /></div>
          <div className="relative max-w-7xl mx-auto text-center"></div>
            <h1>Ai Analytics Dashboard;</h1>
            </h1>
            <p>Advanced AI-powered ai analytics dashboard solution for modern businesses.;</p>
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
              <button>Get Started;</button>
              </button>
              <button>View Demo,</button>
              </button>
            </div>
          </div>
        </section>
        {/* Features Section */} <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2>Key Features;</h2>
              </h2>
              <p>Advanced AI technology that drives results;</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div>,
              {features.map((feature, index) => (} <div key={index}className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 group"></div>,
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform"></div>,
                    <feature>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description</p>}</p>
                  {feature.benefits && (;
                    <ul>
                      {feature.benefits.map((benefit, idx) => (} <li>
                          <CheckCircle />

                          {benefit} </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

            </div>
          </div>
        </section>
        {/* Benefits Section */} <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2>Why Choose Our Solution?;</h2>
              </h2>
              <p>Proven results that drive business growth and efficiency;</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8"></div>,
              {benefits.map((benefit, index) => (} <div key={index}className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 group"></div>,
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform"></div>,
                    <CheckCircle />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit</p>}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */} <section className="py-20 px-4"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>
              <h2>Ready to Get Started?;</h2>
              </h2>
              <p>Contact our experts to discuss your requirements and get started today.;</p>
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
                <button>Contact Us;</button>
                </button>
                <button>Learn More;</button>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer>
    </>
  ),
}
export default AiAnalyticsDashboardPage;

<<<<<<< HEAD
import React, {useState, useEffect}from 'react';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> main
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {BarChart, TrendingUp, Users, Zap, Shield, CheckCircle, Star, ArrowRight, Brain, Database, Target, Globe}}from 'lucide-react';

const AIAnalyticsDashboard: React.FC = () => {,
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);}, []);

  const features = [
    {icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Live data visualization with instant updates and interactive dashboards',
      benefits: ['Instant insights', 'Live monitoring', 'Interactive charts']},
    {icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Machine learning algorithms analyze patterns and predict trends',
      benefits: ['Predictive analytics', 'Pattern recognition', 'Smart recommendations']},
    {icon: Database,
      title: '100+ Integrations',
      description: 'Connect with all your business tools and data sources seamlessly',
      benefits: ['CRM integration', 'E-commerce platforms', 'Social media APIs']},
    {icon: Target,
      title: 'Custom Dashboards',
      description: 'Create personalized dashboards tailored to your business needs',
      benefits: ['Drag & drop builder', 'Custom widgets', 'Role-based views']},
    {icon: Zap,
      title: 'Automated Reports',
      description: 'Schedule and automate report generation with AI insights',
      benefits: ['Scheduled reports', 'Email delivery', 'PDF export']},
    {icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with data encryption and compliance',
      benefits: ['SOC 2 compliant', 'GDPR ready', 'End-to-end encryption']}];

  const pricingPlans = [
    {name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [,
        'Up to 5 dashboards',
        '10 data sources',
        'Basic AI insights',
        'Email support',
        '1 user account'
      ],
      popular: false;,},
    {name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [,
        'Unlimited dashboards',
        '50 data sources',
        'Advanced AI analytics',
        'Priority support',
        'Up to 10 users',
        'Custom integrations'
      ],
      popular: true;,},
    {name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [,
        'Everything in Professional',
        'Unlimited data sources',
        'Custom AI models',
        '24/7 phone support',
        'Unlimited users',
        'White-label options',
        'Dedicated account manager'
      ],
      popular: false;,}];

  const testimonials = [
    {name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'The AI Analytics Dashboard transformed our decision-making process. We saw a 300% improvement in data-driven insights.',
      rating: 5;,},
    {name: 'Michael Chen',
      role: 'Marketing Director, GrowthCorp',
      content: 'The predictive analytics helped us identify market trends 6 months ahead of our competitors.',
      rating: 5;,},
    {name: 'Emily Rodriguez',
      role: 'Operations Manager, ScaleUp',
      content: 'The automated reporting saves us 20 hours per week. The AI insights are incredibly accurate.',
      rating: 5;,}];

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg matrix-bg quantum-particles">)</div>
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">{/* Hero Section */</main>} <section className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
            <Brain className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Analytics</span>
          </div>
          
          <h1 className="text-4xl md: text-6xl font-bold text-white mb-6 neon-text">,</h1>
            AI Analytics Dashboard;
          </h1>
          
          <p className="text-xl md: text-2xl text-cyan-400 mb-8 font-medium">,</p>
            Transform Your Data Into Actionable Insights;
          </p>
          
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">Our AI-powered analytics platform provides real-time business intelligence, predictive analytics,</p>
            and automated reporting. Make data-driven decisions with confidence using our advanced machine learning algorithms.
          </p>

          <div className="flex flex-col sm: flex-row gap-4 justify-center items-center mb-16">,</div>
            <a;
              href="tel: +13024640950",
              className="cyber-button w-full sm: w-auto text-center",
            >
              📞 Call Now: (302) 464-0950;,
            </a>
            <a;
              href="/contact"
              className="cyber-button w-full sm: w-auto text-center",
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Start Free Trial;
            </a>
          </div>

          {/* Key Stats */} <div className="grid grid-cols-1 sm: grid-cols-3 gap-8 max-w-4xl mx-auto">,</div>
            <div className="hologram-card-enhanced p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
              <div className="text-gray-300">Faster Insights</div>
            </div>
            <div className="hologram-card-enhanced p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="hologram-card-enhanced p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">100+</div>
              <div className="text-gray-300">Integrations</div>
            </div>
          </div>
        </section>

        {/* Features Section */} <section className="mb-16">
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-4 text-center neon-text mb-12">,</h2>
            Powerful Features;
          </h2>
          
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,</div>
            {features.map((feature, index) => (
              <div key={index}className="hologram-card-enhanced p-6 hover: scale-105 transition-all duration-300">,</div>
                <div className="text-4xl mb-4 text-cyan-400">
                  <feature.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description</p>}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx}className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit} </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */} <section className="mb-16">
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-4 text-center neon-text mb-12">,</h2>
            Simple, Transparent Pricing;
          </h2>
          
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8 max-w-6xl mx-auto">,</div>
            {pricingPlans.map((plan, index) => (
              <div key={index}className={`hologram-card-enhanced p-8 relative ${
                plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>{plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular;</div>
                    </div>
                  </div>
                )} <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description</p>}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price</span>}</span>
                    <span className="text-gray-400 ml-1">{plan.period</span>}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature} </li>
                  ))}
                </ul>
                
                <a;
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular;
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover: from-cyan-500 hover:to-purple-600',
                      : 'bg-gray-800 text-white hover: bg-gray-700 border border-gray-600',}`}
                >
                  Get Started;
                </a>
=======
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, PieChart, Activity } from 'lucide-react';

const AiAnalyticsDashboardPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Real-Time Analytics',
      description: 'Get instant insights with real-time data visualization and monitoring.',
      benefits: ['Live dashboards', 'Real-time updates', 'Instant alerts', 'Performance monitoring'];
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Leverage artificial intelligence to uncover hidden patterns and trends.',
      benefits: ['Predictive analytics', 'Anomaly detection', 'Smart recommendations', 'Automated insights']
    },
    {
      icon: PieChart,
      title: 'Advanced Visualizations',
      description: 'Create stunning charts and graphs to present your data effectively.',
      benefits: ['Interactive charts', 'Custom visualizations', 'Export capabilities', 'Responsive design']
    },
    {
      icon: Activity,
      title: 'Performance Tracking',
      description: 'Monitor key performance indicators and track business metrics.',
      benefits: ['KPI tracking', 'Goal monitoring', 'Progress reports', 'Trend analysis']
    },
  ];];];
  const benefits = [
    'Make data-driven decisions with confidence',
    'Identify opportunities and threats early',
    'Improve operational efficiency by 40%',
    'Reduce reporting time by 80%',
    'Gain competitive advantage with insights';
  ];

  return (
    <>
  </>
      <Helmet>
        <title>AI Analytics Dashboard - Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with our AI-powered analytics dashboard. Real-time monitoring, predictive analytics, and advanced visualizations." />
        <meta name="keywords" content="AI analytics dashboard, business intelligence, data visualization, predictive analytics, real-time analytics" />
      </Helmet>
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="relative py-20 px-4 overflow-hidden">
        </section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ai Analytics Dashboard
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ai analytics dashboard solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
=======
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Analytics Dashboard
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your data into actionable insights with our AI-powered analytics platform. 
                Monitor performance, predict trends, and make data-driven decisions with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get Started
                </button>
                <button className="border border-gray-300 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                  View Demo
                </button>
>>>>>>> origin/main
              </div>
>>>>>>> origin/main
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Testimonials Section */} <section className="mb-16">
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-4 text-center neon-text mb-12">,</h2>
            What Our Customers Say;
          </h2>
          
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,</div>
            {testimonials.map((testimonial, index) => (
              <div key={index}className="hologram-card-enhanced p-6">
                <div className="flex items-center mb-4">{[...Array(testimonial.rating)].map((_, i) => (</div>
                    <Star key={i}className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content</p>}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name</div>}</div>
                  <div className="text-sm text-gray-400">{testimonial.role</div>}</div>
=======
      </main>
    </>
  );
}
      </main>
    </>
  );
}
      </main>
    </>
  );
}
        {/* Features Section */}
<<<<<<< HEAD
        <section className="py-20 px-4">
        </section>
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
>>>>>>> origin/main
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to analyze and visualize your data
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
<<<<<<< HEAD
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
=======
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
>>>>>>> origin/main
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
<<<<<<< HEAD
        <section className="py-20 px-4">
        </section>
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
>>>>>>> origin/main
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose AI Analytics?
              </h2>
              <p className="text-xl text-gray-300">
                Transform your business with intelligent data analysis
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
>>>>>>> origin/main
                </div>
              ))}
            </div>
          ))
        </section>

<<<<<<< HEAD
        {/* CTA Section */} <section className="text-center">
          <div className="hologram-card-enhanced p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">,</h2>
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">Join thousands of businesses already using our AI Analytics Dashboard to make smarter decisions.</p>
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
              <a;
                href="tel: +13024640950",
                className="cyber-button w-full sm: w-auto text-center",
              >
                📞 Call (302) 464-0950;
              </a>
              <a;
                href="mailto: kleber@ziontechgroup.com",
                className="cyber-button w-full sm: w-auto text-center",
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Email Us;
              </a>
=======
        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 px-4">
        </section>
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
>>>>>>> origin/main
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start analyzing your data with AI-powered insights today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
              <button className="border border-gray-300 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Contact Sales
              </button>
>>>>>>> origin/main
            </div>
          ))
        </section>
      </main>
      
      <Footer />

  );
};
=======
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
