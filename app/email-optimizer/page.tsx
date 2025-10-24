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
    </div>
  );
}
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const EmailOptimizerPage: React.FC = () => {
  const features = [
    {
      icon: Target;
      title: 'AI-Powered Subject Lines',
      description: 'Generate compelling subject lines that increase open rates by up to 40%'},
    {
      icon: BarChart;
      title: 'Performance Analytics',
      description: 'Track email performance with detailed analytics and insights'},
    {
      icon: Users;
      title: 'Audience Segmentation',
      description: 'Automatically segment your audience for personalized campaigns'},
    {
      icon: Zap;
      title: 'A/B Testing',
      description: 'Test different versions to find the most effective content'},
    {
      icon: Shield;
      title: 'Deliverability Optimization',
      description: 'Ensure your emails reach the inbox with advanced deliverability tools'},
    {
      icon: TrendingUp;
      title: 'ROI Tracking',
      description: 'Measure and optimize your email marketing ROI in real-time'}
  ];

  const benefits = [
    {
      title: '40% Higher Open Rates',
      description: 'AI-optimized subject lines and content'},
    {
      title: '60% More Clicks',
      description: 'Personalized content that resonates with your audience'},
    {
      title: '3x Better ROI',
      description: 'Data-driven optimization for maximum returns'},
    {
      title: 'Save 10 Hours/Week',
      description: 'Automated optimization and campaign management'}
  ];

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16"></div>
        <div className="text-center mb-16">)
          <h1 className="text-5xl font-bold text-white mb-6">)
            Email <span className="text-cyan-400">Optimizer</span>)
          </h1>)
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">)
            Transform your email marketing with AI-powered optimization. Increase open rates)
            boost engagement, and maximize ROI with our intelligent email optimization platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            ></Link>
              <Mail className="w-5 h-5 mr-2" />
              Get Started;
            </Link>
            <Link;
              href="/demo"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            ></Link>
              <BarChart className="w-5 h-5 mr-2" />
              View Demo;
            </Link>
          </div>,
        </div>,
,
        {/* Features Section */}
        <div className="mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12"></h2>
            Powerful <span className="text-cyan-400">Features</span>
          </h2>
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {features.map((feature, index) => (
              <div;
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-600 hover: border-cyan-400/50 transition-all duration-300",
              >,
                <div className="p-3 bg-cyan-400 rounded-lg w-fit mb-4">,
                  <feature.icon className="w-6 h-6 text-white" />,
                </div>,
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3><p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <div className="mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12"></h2>
            Proven <span className="text-cyan-400">Results</span>
          </h2>
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">,
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center"></div>
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-4"></div>
            Proven</h2> <span className="text-cyan-400">Results</span><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{benefits.map((benefit, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-4"></div>
                  <TrendingUp className="w-8 h-8 text-white" />
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3><p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center"></div>
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Optimize Your Email Marketing?</h2><p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join thousands of marketers using our AI-powered email optimization to boost their campaigns.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            ></Link>
              <ArrowRight className="w-5 h-5 mr-2" />
              Start Optimizing;
            </Link>
            <Link;
              href="/pricing"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            ></Link>
              <Target className="w-5 h-5 mr-2" />
              View Pricing;
            </Link>
          </div>
        </div>
      </div>,
    </div>);
};

export default EmailOptimizerPage;
import React from 'react';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function EmailoptimizerPage() {
  return (
    <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>Email Optimizer - Zion Tech Group</title>
        <h1 className="text-4 xl font-boldtext-whitemb-6">Email Optimizer</h1>
        <p className="text-lgtext-gray-300mb-8">Professional email optimizer services coming soon.</p>
          Contact Us

  );

import React from 'react';
import { Helmet } from 'react-helmet-async';
import React  from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function EmailoptimizerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20">
      <Helmet>
        <title>Email Optimizer - Zion Tech Group</title>
        <meta name="description" content="Professional email optimizer services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Email Optimizer</h1>
          <p className="text-lg text-gray-300 mb-8">Professional email optimizer services coming soon.</p>
          
          <ArrowRight className="w-5h-5ml-2"  />
        </Link>
      </div>
    </div>
  );
}
