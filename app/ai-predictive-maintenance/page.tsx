<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
'use client';
import React from "react";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0738
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

<<<<<<< HEAD
export default function GDataAnalyticsZionTechGroupPage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-900 text-white">
=======
    <React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
      <Helmet>
        <title>Ai Predictive Maintenance - Zion Tech Group</title>
        <meta name="description" content="Ai Predictive Maintenance solutions by Zion Tech Group" />
      </Helmet>
<<<<<<< HEAD
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Predictive Maintenance</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai predictive maintenance solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
=======

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ai Predictive Maintenance
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ai predictive maintenance solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div></div></div></div></div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div></div></div>
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
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div></div></div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div></div></div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
            </div>
          </div>
        </div>
      </div>
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
=======
const AIPredictiveMaintenancePage: React.FC = () => {
  const features = [
    'Machine learning algorithms for failure prediction',
    'Real-time sensor data analysis',
    'Predictive maintenance scheduling',
    'Equipment health monitoring',
    'Anomaly detection and alerting',
    'Maintenance cost optimization',
    'Asset lifecycle management',
    'Integration with existing systems',
    'Custom dashboard and reporting',
    'Mobile app for technicians',
    'IoT device connectivity',
    'Cloud-based analytics platform'
  ];

  const benefits = [
    'Reduce maintenance costs by 30-50%',
    'Increase equipment uptime by 25%',
    'Prevent unexpected breakdowns',
    'Optimize maintenance schedules',
    'Extend asset lifespan',
    'Improve safety and compliance'
  ];

  const industries = [
    {
      name: 'Manufacturing',
      description: 'Optimize production equipment maintenance',
      savings: '40% cost reduction',
      icon: Settings;
    },
    {
      name: 'Energy & Utilities',
      description: 'Predict power plant and grid failures',
      savings: '35% cost reduction',
      icon: Zap;
    },
    {
      name: 'Transportation',
      description: 'Maintain fleet vehicles and infrastructure',
      savings: '45% cost reduction',
      icon: Globe;
    },
    {
      name: 'Healthcare',
      description: 'Monitor medical equipment reliability',
      savings: '30% cost reduction',
      icon: Shield;
    },
    {
      name: 'Oil & Gas',
      description: 'Predict equipment failures in harsh environments',
      savings: '50% cost reduction',
      icon: Database;
    },
    {
      name: 'Aviation',
      description: 'Aircraft maintenance optimization',
      savings: '25% cost reduction',
      icon: Target;
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2,500',
      period: '/month',
      originalPrice: '$3,500',
      features: [
        'Up to 50 assets',
        'Basic predictive models',
        'Email alerts',
        'Standard dashboard',
        'Email support',
        'Data retention: 1 year'],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$5,000',
      period: '/month',
      originalPrice: '$7,000',
      features: [
        'Up to 200 assets',
        'Advanced ML models',
        'Real-time alerts',
        'Custom dashboard',
        'Priority support',
        'Data retention: 3 years',
        'Mobile app access',
        'API integration'
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$10,000',
      period: '/month',
      originalPrice: '$15,000',
      features: [
        'Unlimited assets',
        'Custom ML models',
        'Multi-site management',
        'White-label solution',
        'Dedicated support',
        'Unlimited data retention',
        'Custom integrations',
        'On-premise deployment'
      ],
      popular: false;
    }
  ];

  const testimonials = [
    {
      name: 'John Mitchell',
      role: 'Plant Manager, AutoCorp',
      content: 'AI Predictive Maintenance has revolutionized our operations. We reduced unplanned downtime by 60% and saved over $2M in the first year.',
      rating: 5;
    },
    {
      name: 'Sarah Johnson',
      role: 'Operations Director, PowerGrid',
      content: 'The predictive accuracy is incredible. We can now schedule maintenance exactly when needed, not too early or too late.',
      rating: 5;
    },
    {
      name: 'Michael Rodriguez',
      role: 'Fleet Manager, TransLogistics',
      content: 'Our maintenance costs dropped by 45% while improving vehicle reliability. The ROI was achieved in just 6 months.',
      rating: 5;
    }
  ];

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900"></div>
      <Navigation />
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4"></section>
        <div className="container mx-auto max-w-6xl"></div>
          <div className="text-center mb-16"></div>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mb-6"></div>
              <Settings className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6"></h1>
              AI Predictive Maintenance;
            </h1>,
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">,
              Transform your maintenance operations with AI-powered predictive analytics. Reduce costs by 30-50%, prevent unexpected failures, and optimize equipment performance with machine learning algorithms.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center mb-8"></div>
              <div className="flex items-center space-x-2 text-green-400"></div>
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mb-6"></div>
              <Settings className="w-10 h-10 text-white" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI Predictive Maintenance</h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your maintenance operations with AI-powered predictive analytics. Reduce costs by 30-50%, prevent unexpected failures, and optimize equipment performance with machine learning algorithms.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"></div>
              <div className="flex items-center space-x-2 text-green-400"></div>
                <CheckCircle className="w-5 h-5" />
                <span>30-50% cost reduction</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400"></div>
                <Users className="w-5 h-5" />
                <span>200+ successful implementations</span>
              </div>
              <div className="flex items-center space-x-2 text-yellow-400"></div>
                <Star className="w-5 h-5 fill-current" />
                <span>4.9/5 client rating</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="#contact"
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              ></a>
                Get Free Assessment;
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a;
                href="#demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-400 hover:text-white transition-all duration-300"
              ></a>
                Watch Demo;
              </a>
            </div>
          </div>
        </div>,
      </section>,
,
      {/* Features Section */}
      <section className="py-16 px-4 bg-slate-800/50"></section>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6"></h2>
              Advanced Predictive Features;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Comprehensive AI-powered predictive maintenance solution with real-time monitoring and intelligent insights.
            </p>)
          </div>)
)
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">),
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/80 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 hover: border-green-400/40 transition-all duration-300">,
                <div className="flex items-center space-x-3 mb-4">,
                  <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">,
                    <Brain className="w-5 h-5 text-white" />,
                  </div>,
                  <h3 className="text-lg font-semibold text-white">{feature}</h3>
                </div>
                <p className="text-gray-300 text-sm"></p>
                  {feature === 'Machine learning algorithms for failure prediction' && 'Advanced ML models analyze historical data and sensor readings to predict equipment failures with 95%+ accuracy.'}
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Advanced Predictive Features</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive AI-powered predictive maintenance solution with real-time monitoring and intelligent insights.</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/80 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 hover:border-green-400/40 transition-all duration-300"></div>
                <div className="flex items-center space-x-3 mb-4"></div>
                  <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center"></div>
                    <Brain className="w-5 h-5 text-white" />
                  <h3 className="text-lg font-semibold text-white">{feature}</h3><p className="text-gray-300 text-sm">{feature === 'Machine learning algorithms for failure prediction' && 'Advanced ML models analyze historical data and sensor readings to predict equipment failures with 95%+ accuracy.'}
                  {feature === 'Real-time sensor data analysis' && 'Continuous monitoring of sensor data with real-time analysis to detect anomalies and potential issues immediately.'}
                  {feature === 'Predictive maintenance scheduling' && 'Intelligent scheduling system that optimizes maintenance windows based on predicted failure timelines and operational requirements.'}
                  {feature === 'Equipment health monitoring' && 'Comprehensive health scoring system that tracks equipment condition and provides actionable insights for maintenance teams.'}
                  {feature === 'Anomaly detection and alerting' && 'AI-powered anomaly detection identifies unusual patterns and sends immediate alerts to prevent potential failures.'}
                  {feature === 'Maintenance cost optimization' && 'Cost-benefit analysis tools that help optimize maintenance spending while maximizing equipment reliability and uptime.'}
                  {feature === 'Asset lifecycle management' && 'Complete asset lifecycle tracking from installation to replacement with predictive insights for optimal timing.'}
                  {feature === 'Integration with existing systems' && 'Seamless integration with CMMS, ERP, and other enterprise systems for unified maintenance management.'}
                  {feature === 'Custom dashboard and reporting' && 'Customizable dashboards and reports that provide insights tailored to your specific operational needs.'}
                  {feature === 'Mobile app for technicians' && 'Mobile application that provides technicians with real-time alerts, work orders, and equipment information in the field.'}
                  {feature === 'IoT device connectivity' && 'Connect and monitor thousands of IoT sensors and devices for comprehensive equipment visibility.'}</p>
                  {feature === 'Cloud-based analytics platform' && 'Scalable cloud platform that processes massive amounts of data and provides insights through advanced analytics.'}</p>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-4"></section>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6"></h2>
              Industry Applications;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Proven results across multiple industries with significant cost savings and improved reliability.
            </p>
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">,
            {industries.map((industry, index) => (
              <div key={index} className="bg-slate-800/80 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 hover: border-green-400/40 transition-all duration-300"></div>
                <div className="flex items-center space-x-3 mb-4">,
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">,
                    <industry.icon className="w-6 h-6 text-white" />,
                  </div>,
                  <div>,
                    <h3 className="text-lg font-semibold text-white">{industry.name}</h3>
                    <p className="text-green-400 text-sm font-semibold">{industry.savings}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">{industry.description}</p>
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Industry Applications</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Proven results across multiple industries with significant cost savings and improved reliability.</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{industries.map((industry, index) => (</div>
              <div key={index} className="bg-slate-800/80 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 hover:border-green-400/40 transition-all duration-300"></div>
                <div className="flex items-center space-x-3 mb-4"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center"></div>
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <div></div>
                    <h3 className="text-lg font-semibold text-white">{industry.name}</h3><p className="text-green-400 text-sm font-semibold">{industry.savings}</p><p className="text-gray-300 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-slate-800/50"></section>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6"></h2>
              Proven Business Benefits;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Transform your maintenance operations with measurable results and significant cost savings.
            </p>
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">,
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Proven Business Benefits</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Transform your maintenance operations with measurable results and significant cost savings.</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{benefits.map((benefit, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <CheckCircle className="w-8 h-8 text-white" />
                <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h3><p className="text-gray-300">{benefit === 'Reduce maintenance costs by 30-50%' && 'Optimize maintenance schedules and prevent unnecessary repairs, resulting in significant cost savings.'}
                  {benefit === 'Increase equipment uptime by 25%' && 'Predict and prevent failures before they occur, maximizing equipment availability and productivity.'}
                  {benefit === 'Prevent unexpected breakdowns' && 'AI algorithms identify potential failures weeks or months in advance, allowing for planned maintenance.'}
                  {benefit === 'Optimize maintenance schedules' && 'Intelligent scheduling ensures maintenance is performed at the optimal time, balancing cost and reliability.'}
                  {benefit === 'Extend asset lifespan' && 'Proactive maintenance and optimal operating conditions extend the useful life of your equipment.'}</p>
                  {benefit === 'Improve safety and compliance' && 'Predictive maintenance reduces safety risks and helps maintain compliance with industry regulations.'}</p>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4"></section>
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Choose Your Plan</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Flexible pricing plans designed to meet your predictive maintenance needs at any scale.</p><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (</div><div key={index} className={`bg-slate-800/80 backdrop-blur-sm border rounded-xl p-8 relative ${plan.popular ? 'border-green-400/40 ring-2 ring-green-400/20' : 'border-gray-600/40'}`}>{plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6"></h2>
              Choose Your Plan;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Flexible pricing plans designed to meet your predictive maintenance needs at any scale.
            </p>
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">,
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/80 backdrop-blur-sm border rounded-xl p-8 relative ${plan.popular ? 'border-green-400/40 ring-2 ring-green-400/20' : 'border-gray-600/40'}`}></div>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold"></span>
                      Most Popular;
                    </span>
                  </div>
                )}

                <div className="text-center mb-8"></div>
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="flex items-center justify-center space-x-2 mb-2"></div>
                    <span className="text-4xl font-bold text-white">{plan.price}</span><span className="text-gray-400">{plan.period}</span>
                  </div>
                  {plan.originalPrice && (
                    <span className="text-gray-400 line-through text-lg">{plan.originalPrice}</spa>
                  )}
                <ul className="space-y-4 mb-8">{plan.features.map((feature, featureIndex) => (</u>
                    <li key={featureIndex} className="flex items-center space-x-3"></l>
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" /></CheckCircl>
                      <span className="text-gray-300">{feature}</spa>
                    </li>
                  ))}
                </ul>

                <a;
                  href="#contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular;
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover: from-green-700 hover:to-blue-700'}
                      : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-white'}
                  }`}
                ></a>
                  Get Started;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-slate-800/50"></section>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6"></h2>
              Client Success Stories;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              See how AI Predictive Maintenance has transformed operations across various industries.
            </p>
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">,
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/80 backdrop-blur-sm border border-green-400/20 rounded-xl p-6"></div>
                <div className="flex items-center space-x-1 mb-4">{[...Array(testimonial.rating)].map((_, i) => (<Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >))}<p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div></div>
                  <p className="font-semibold text-white">{testimonial.name}<p className="text-gray-400 text-sm">{testimonial.role}</p>
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Client Success Stories</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">See how AI Predictive Maintenance has transformed operations across various industries.</p><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{testimonials.map((testimonial, index) => (</div>
              <div key={index} className="bg-slate-800/80 backdrop-blur-sm border border-green-400/20 rounded-xl p-6"></div>
                <div className="flex items-center space-x-1 mb-4">{[...Array(testimonial.rating)].map((_, i) => (</div><Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >))}<p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div></div>
                  <p className="font-semibold text-white">{testimonial.name}</p><p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600"></section>
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-6"></h2>
            Ready to Transform Your Maintenance?
          </h2>
          <p className="text-xl text-green-100 mb-8"></p>
            Contact us today for a free predictive maintenance assessment and ROI analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
            <a;
        <div className="container mx-auto max-w-4xl text-center"></section>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Maintenance?</h2><p className="text-xl text-green-100 mb-8">Contact us today for a free predictive maintenance assessment and ROI analysis.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
            <a
              href="tel:+13024640950"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors flex items-center space-x-2"
            ></a>
              <Phone className="w-5 h-5" /></Phon>
              <span>+1 302 464 0950</spa>
            </a>
            <a;
              href="mailto:kleber@ziontechgroup.com"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors flex items-center space-x-2"
            ></a>
              <Mail className="w-5 h-5" /></Mai>
              <<<<span>kleber</span></span>@ziontechgroup.com</span>
            </a>
          </div>
          <div className="mt-8 text-green-100"></div>
            <p className="flex items-center justify-center space-x-2"></p>
              <MapPin className="w-4 h-4" />
              <span>364 E Main St STE 1008, Middletown, DE 19709</span>
            </p>
          </div>
        </div>
      </section>

      <Footer /></Foote>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    </div>
=======
    </React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
  );
}
=======
import React from 'react';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function AipredictivemaintenancePage() {
  return (
    <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>Ai Predictive Maintenance - Zion Tech Group</title>
        <h1 className="text-4 xl font-boldtext-whitemb-6">Ai Predictive Maintenance</h1>
        <p className="text-lgtext-gray-300mb-8">Professional ai predictive maintenance services coming soon.</p>
          Contact Us

  );

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
import React  from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AipredictivemaintenancePage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
      <Helmet>
        <title>Ai Predictive Maintenance - Zion Tech Group</title>
        <meta name="description" content="Professional ai predictive maintenance services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Predictive Maintenance</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai predictive maintenance services coming soon.</p>
          
<<<<<<< HEAD
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
=======
          <ArrowRight className="w-5h-5ml-2"  />
        </Link>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
      </div>
    </div>
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
