<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react'
import { Helmet } from 'react-helmet-async'

const ARVRSolutionsPage: React.FC = () => {
=======
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ArVrSolutionsZionTechGroup() {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
  return (
    <>
      <Helmet>
        <title>AR/VR Solutions - Zion Tech Group</title>
        <meta name="description" content="AR/VR Solutions services by Zion Tech Group. Advanced AI and IT solutions for your business." />
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
<<<<<<< HEAD
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp } from 'lucide-react'
const PagePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced AI algorithms provide intelligent insights and recommendations.',
<<<<<<< HEAD
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']},
    {icon: BarChart,
=======
=======
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp } from 'lucide-react';
;
const PagePage: React.FC = () => {
const features = [
];
};
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
  },
    {
    icon: BarChart,
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
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
<<<<<<< HEAD
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']}]
return (
    <>
  <Helmet />
=======
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
<<<<<<< HEAD
  }
    }
  ]
return (
    <>
=======
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Scale your solutions globally with intelligent distribution.',
      benefits: ['Global deployment', 'Edge computing', 'Load balancing', 'Geographic optimization']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Enterprise-grade security to protect your data and operations.',
      benefits: ['End-to-end encryption', 'Access controls', 'Audit trails', 'Compliance support']
    };
  ];
  const benefits = [
];
    'Transform your business with AI technology',
    'Make data-driven decisions with confidence',
    'Identify trends and opportunities early',
    'Optimize business processes and workflows',
    'Reduce costs through intelligent automation',
    'Gain competitive advantage with advanced technology'
  ];
  return (
    <React .Fragment>
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      <Helmet>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        <title>Page - Zion Tech Group</title>
        <meta />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
      </Helmet>
<<<<<<< HEAD
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AR/VR Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Coming soon - Advanced AR/VR Solutions solutions by Zion Tech Group
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ARVRSolutionsPage
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
=======
<<<<<<< HEAD
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden"></section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" /></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} /></div>
          <div className="relative max-w-7xl mx-auto text-center"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Page</h1>
            <p>
              Advanced page solutions powered by AI technology.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300">Get Started
              </button>
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300">Learn More,
              </button>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p>
                Powerful AI technology that drives results
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        {/* Hero Section */};
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Page
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Advanced page solution powered by artificial intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#features"
                  className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */};
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Powerful Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive platform provides everything you need to succeed.
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {features.map((feature, index) => (
<<<<<<< HEAD
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"></div>
                    <feature.icon className="w-8 h-8 text-white" />
=======
                <div key={index} className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="bg-cyan-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                    <feature .icon className="w-6 h-6 text-cyan-400" />
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {
    feature.benefits && (
                    <ul>
                      {feature.benefits.map((benefit, idx) => (
<<<<<<< HEAD
  }
                        <li>
                          <CheckCircle>

                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
=======
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit};
                        </li>
                      ));
                    </ul>);
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                </div>
              ))}

            </div>
          </div>
        </section>
<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Contact our experts to discuss your requirements and get started today.</p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
                <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300">Contact Us
                </button>
                <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300">Learn More
                </button>
=======
        {/* Benefits Section */};
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Solution?</h2>
                <p className="text-lg text-gray-300 mb-8">
                  Our platform is designed to help you achieve your goals efficiently and effectively.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))};
                </ul>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                  <div className="text-center">
                    <div className="bg-cyan-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                      <Brain className="w-10 h-10 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">AI-Powered</h3>
                    <p className="text-gray-300 mb-6">
                      Leverage the power of artificial intelligence to transform your business.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-cyan-400">99.9%</div>
                        <div className="text-gray-300 text-sm">Uptime</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-purple-400">50ms</div>
                        <div className="text-gray-300 text-sm">Response Time</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */};
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of companies that have already transformed their business with our solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Get Started Now</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="/pricing"
                  className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>View Pricing</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
              </div>
            </div>
          </div>
        </section>
<<<<<<< HEAD
      </div>
      <Footer />
  )
}
export default PagePage
=======
        <Footer />
      </div>
      <Footer />
    </React.Fragment>)
  );
};
export default PagePage;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
