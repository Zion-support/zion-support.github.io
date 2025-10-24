'use client';
import React from "react";
import { Helmet } from 'react-helmet-async';
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

const BlockchainIntegrationServicesPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Blockchain Integration',
      description: 'Advanced blockchain technology integration with enterprise-grade security',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast blockchain transactions and smart contract execution',
    },
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Intelligent blockchain solutions powered by advanced AI technology',
    },
    {
      icon: Globe,
      title: 'Multi-Chain Support',
      description: 'Support for multiple blockchain networks and protocols',
    }
  ];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  return (
    <>
      <Helmet>
        <title>Blockchain Integration Services - Zion Tech Group</title>
        <meta name="description" content="Professional blockchain integration services for enterprises." />
        <meta name="keywords" content="blockchain, integration, enterprise, cryptocurrency" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Blockchain Integration Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our advanced blockchain integration solutions. 
            Powered by cutting-edge AI technology and industry expertise.
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our blockchain solutions deliver unmatched performance, security, and scalability.
          </p>
        </div></div></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <feature.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div></div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Why Choose Our Blockchain Integration Services?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div></div></div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Contact our experts to discuss your blockchain integration needs and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </button>
          </div></div>
        </div>
      </div>
      <Footer />
    </>
  );
const blockchainintegrationservicesPage: React.FC = () => {
  return(<>)
      <Helmet>)
        <title>Blockchain Integration Services | Zion Tech Group</title>)
        <meta name="description" content="Professional blockchain integration services services by Zion Tech Group. Advanced AI and IT solutions for your business." />),
        <meta name="keywords" content="blockchain integration services, AI solutions, IT services, Zion Tech Group" />
      </Helmet>

            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6"></h1>
              Blockchain Integration Services;
            </h1>
            <p className="text-xl text-gray-300 mb-8"></p>
              Professional blockchain integration services services powered by advanced AI and cutting-edge technology.
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="container mx-auto px-4 py-16"></div>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Blockchain Integration Services</h1><p className="text-xl text-gray-300 mb-8">Professional blockchain integration services services powered by advanced AI and cutting-edge technology.</p>
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12"></div>
              <h2 className="text-2xl font-semibold text-white mb-4">Why Choose Zion Tech Group?</h2>
              <div className="grid md:grid-cols-3 gap-6 text-left"></div>
                <div className="bg-cyan-500/20 rounded-lg p-6"></div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Advanced AI</h3><p className="text-gray-300">Cutting-edge artificial intelligence solutions</p>
                </div>
                <div className="bg-purple-500/20 rounded-lg p-6"></div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Expert Team</h3><p className="text-gray-300">Experienced professionals with proven track record</p>
                </div>
                <div className="bg-pink-500/20 rounded-lg p-6"></div>
                  <h3 className="text-lg font-semibold text-pink-400 mb-2">24/7 Support</h3><p className="text-gray-300">Round-the-clock technical support and monitoring</p>
                </div>
              </div>
            </div>

            <div className="space-y-4"></div>
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              ></a>
                Get Started Today;
              </a>
              <div></div>
                <a
                  href="/"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                ></a>
                  ← Back to Home;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>,
    </>);
};

export default BlockchainIntegrationServicesPage;
import React from 'react';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function BlockchainintegrationservicesPage() {
  return (
    <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>Blockchain Integration Services - Zion Tech Group</title>
        <h1 className="text-4 xl font-boldtext-whitemb-6">Blockchain Integration Services</h1>
        <p className="text-lgtext-gray-300mb-8">Professional blockchain integration services services coming soon.</p>
          Contact Us

  );

import React from 'react';
import { Helmet } from 'react-helmet-async';
import React  from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BlockchainintegrationservicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20">
      <Helmet>
        <title>Blockchain Integration Services - Zion Tech Group</title>
        <meta name="description" content="Professional blockchain integration services services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Blockchain Integration Services</h1>
          <p className="text-lg text-gray-300 mb-8">Professional blockchain integration services services coming soon.</p>
          
          <ArrowRight className="w-5h-5ml-2"  />
        </Link>
      </div>
    </div>
  );
}
