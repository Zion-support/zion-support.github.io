import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
import { Zap, Bar Chart, Message Square, Shield, Cloud, CheckCircle, ArrowRight, Users, Award, Star } from 'lucide-react';
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Bar Chart, Message Square, Shield, Cloud, CheckCircle, ArrowRight, Users } from 'lucide-react';

const Micro Saas Services Page: React.F C = () => {
  const services = [
    {
      icon: Bar Chart,
      title: 'Zion Analytics Pro',
      description: 'Advanced business intelligence platform with real-time analytics and custom dashboards.',
      features: ['Real-time Analytics', 'Custom Dashboards', 'Data Visualization', 'Export Reports'],
      price: 'Starting at $99/month',
      color: 'from-cyan-500 to-blue-500',
      link: '/zion-analytics-pro'
    },
    {
      icon: Message Square,
      title: 'Zion Chat A I',
      description: 'Intelligent customer support chatbot with natural language processing capabilities.',
      features: ['24/7 Support', 'Multi-language', 'Integration A PIs', 'Analytics Dashboard'],
      price: 'Starting at $79/month',
      color: 'from-purple-500 to-pink-500',
      link: '/zion-chat-ai'
    },
    {
      icon: Shield,
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection for your business.',
      features: ['Threat Detection', 'Security Monitoring', 'Compliance Reports', 'Incident Response'],
      price: 'Starting at $149/month',
      color: 'from-red-500 to-orange-500',
      link: '/zion-security-shield'
    },
    {
      icon: Cloud,
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution for your critical data.',
      features: ['Automated Backups', 'Disaster Recovery', 'Data Encryption', 'Version Control'],
      price: 'Starting at $59/month',
      color: 'from-green-500 to-emerald-500',
      link: '/zion-cloud-vault'
    },
    {
      icon: Zap,
      title: 'Zion Workflow Automation',
      description: 'Streamline your business processes with intelligent workflow automation.',
      features: ['Process Automation', 'Task Scheduling', 'Integration Tools', 'Performance Analytics'],
      price: 'Starting at $89/month',
      color: 'from-yellow-500 to-orange-500',
      link: '/zion-workflow-automation'
    },
    {
      icon: Users,
      title: 'Zion C RM Intelligence',
      description: 'A I-powered customer relationship management with predictive analytics.',
      features: ['Lead Scoring', 'Sales Forecasting', 'Customer Insights', 'Automation Rules'],
      price: 'Starting at $129/month',
      color: 'from-indigo-500 to-purple-500',
      link: '/zion-crm-intelligence'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get up and running in minutes with our easy-to-use interface and pre-built templates.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, compliance, and regular security updates.'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert team to ensure your success.'
    },
    {
      icon: Bar Chart,
      title: 'Scalable Solutions',
      description: 'Grow with confidence knowing our solutions scale with your business needs.'
    }
  ];

  return (

      <H elmet>
        <t itle>Micro Saa S Services - Zion Tech Group</t itle>
        <m eta name="description" content="Powerful micro Saa S solutions including analytics, chatbots, security, cloud backup, workflow automation, and C RM intelligence for modern businesses." />
        <m eta name="keywords" content="micro Saa S, business software, analytics, chatbots, security, cloud backup, workflow automation, C RM" />
      </H elmet>

      <d iv class Name="m in-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <s ection class Name="p t-32 pb-20">
          <d iv class Name="c ontainer mx-auto px-4">
            <d iv class Name="t ext-center max-w-4xl mx-auto">
              <h1 c lass Name="t ext-5xl md:text-6xl font-bold text-white mb-6">
                Micro <s pan class Name="b g-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Saa S Services</s pan>
              </h1>
              <p c lass Name="t ext-xl text-gray-300 mb-8 leading-relaxed">
                Powerful, purpose-built software solutions designed to solve specific business challenges. 
                Get enterprise-grade functionality without the complexity.
              </p>
              <d iv class Name="f lex flex-col sm:flex-row gap-4 justify-center">
                <L ink 
                  to="/contact"
                  class Name="b g-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                </L ink>
                <L ink 
                  to="/ai-services"
                  class Name="b order border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  View A I Services
                </L ink>
              </d iv>
            </d iv>
          </d iv>
        </s ection>

        {/* Services Grid */}
        <s ection class Name="p y-20">
          <d iv class Name="c ontainer mx-auto px-4">
            <d iv class Name="t ext-center mb-16">
              <h2 c lass Name="t ext-4xl font-bold text-white mb-6">
                Our <s pan class Name="b g-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Micro Saa S Solutions</s pan>
              </h2>
              <p c lass Name="t ext-xl text-gray-300 max-w-3xl mx-auto">
                Specialized software tools that solve specific business problems with precision and efficiency
              </p>
            </d iv>

            <d iv class Name="g rid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <d iv 
                  key={index}
                  class Name="b g-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <d iv class Name={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <s ervice.icon class Name="w-8 h-8 t ext-white" />
                  </d iv>
                  
                  <h3 c lass Name="t ext-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p c lass Name="t ext-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <u l class Name="s pace-y-2 mb-6">
                    {service.features.map((feature, feature Index) => (
                      <l i key={feature Index} class Name="f lex items-center text-sm text-gray-300">
                        <C heck Circle class Name="w-4 h-4 t ext-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </l i>
                    ))}
                  </u l>

                  <d iv class Name="f lex items-center justify-between mb-6">
                    <s pan class Name="t ext-2xl font-bold text-cyan-400">{service.price}</s pan>
                    <L ink 
                      to={service.link}
                      class Name="t ext-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1 inline-flex items-center"
                    >
                      Learn More <A rrow Right class Name="w-4 h-4 m l-1" />
                    </L ink>
                  </d iv>
                </d iv>
              ))}
            </d iv>
          </d iv>
        </s ection>

        {/* Features Section */}
        <s ection class Name="p y-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <d iv class Name="c ontainer mx-auto px-4">
            <d iv class Name="t ext-center mb-16">
              <h2 c lass Name="t ext-4xl font-bold text-white mb-6">
                Why Choose <s pan class Name="b g-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Micro Saa S</s pan>?
              </h2>
              <p c lass Name="t ext-xl text-gray-300 max-w-3xl mx-auto">
                Get the power of enterprise software without the complexity and cost
              </p>
            </d iv>

            <d iv class Name="g rid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <d iv key={index} class Name="t ext-center group">
                  <d iv class Name="w-20 h-20 b g-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <f eature.icon class Name="w-10 h-10 t ext-cyan-400" />
                  </d iv>
                  <h3 c lass Name="t ext-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p c lass Name="t ext-gray-300 leading-relaxed">{feature.description}</p>
                </d iv>
              ))}
            </d iv>
          </d iv>
        </s ection>

        {/* Pricing Section */}
        <s ection class Name="p y-20">
          <d iv class Name="c ontainer mx-auto px-4">
            <d iv class Name="t ext-center mb-16">
              <h2 c lass Name="t ext-4xl font-bold text-white mb-6">
                Simple <s pan class Name="b g-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</s pan>
              </h2>
              <p c lass Name="t ext-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your needs. All plans include 24/7 support and regular updates.
              </p>
            </d iv>

            <d iv class Name="g rid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <d iv class Name="b g-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
                <h3 c lass Name="t ext-2xl font-bold text-white mb-4">Starter</h3>
                <d iv class Name="t ext-4xl font-bold text-cyan-400 mb-6">$99<s pan class Name="t ext-lg text-gray-400">/month</s pan></d iv>
                <u l class Name="s pace-y-3 mb-8">
                  <l i class Name="f lex items-center text-gray-300">
                    <C heck Circle class Name="w-5 h-5 t ext-green-400 mr-3" />
                    Up to 3 Micro Saa S tools
                  </l i>
                  <l i class Name="f lex items-center text-gray-300">
                    <C heck Circle class Name="w-5 h-5 t ext-green-400 mr-3" />
                    Basic support
                  </l i>
                  <l i class Name="f lex items-center text-gray-300">
                    <C heck Circle class Name="w-5 h-5 t ext-green-400 mr-3" />
                    Standard features
                  </l i>
                </u l>
                <L ink 
                  to="/contact"
                  class Name="w-f ull bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 block"
                >
                  Get Started
                </L ink>
              </d iv>

              <d iv class Name="b g-gradient-to-br from-cyan-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-500/50 rounded-xl p-8 relative">
                <d iv class Name="a bsolute -top-4 left-1/2 transform -translate-x-1/2">
                  <s pan class Name="b g-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </s pan>
                </d iv>
                <h3 c lass Name="t ext-2xl font-bold text-white mb-4">Professional</h3>
                <d iv class Name="t ext-4xl font-bold text-cyan-400 mb-6">$199<s pan class Name="t ext-lg text-gray-400">/month</s pan></d iv>
                <u l class Name="s pace-y-3 mb-8">
                  <l i class Name="f lex items-center text-gray-300">
                    <C heck Circle class Name="w-5 h-5 t ext-green-400 mr-3" />
                    Up to 10 Micro Saa S tools
                  </l i>
                  <l i class Name="f lex items-center text-gray-300">
                    <C heck Circle class Name="w-5 h-5 t ext-green-400 mr-3" />
                    Priority support
                  </l i>
                  <l i class Name="f lex items-center text-gray-300">
                    <C heck Circle class Name="w-5 h-5 t ext-green-400 mr-3" />
                    Advanced features
                  </l i>
                  <l i class Name="f lex items-center text-gray-300">
                    <C heck Circle class Name="w-5 h-5 t ext-green-400 mr-3" />
                    Custom integrations
                  </l i>
                </u l>
                <L ink 
                  to="/contact"
                  class Name="w-f ull bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 block"
                >
                  Get Started
                </L ink>
              </d iv>

              <d iv class Name="b g-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
                <h3 c lass Name="t ext-2xl font-bold text-white mb-4">Enterprise</h3>
                <d iv class Name="t ext-4xl font-bold text-cyan-400 mb-6">Custom</d iv>
                <u l class Name="s pace-y-3 mb-8">
                  <l i class Name="f lex items-center text-gray-300">
                    <C heck Circle class Name="w-5 h-5 t ext-green-400 mr-3" />
                    Unlimited Micro Saa S tools
                  </l i>
                  <l i class Name="f lex items-center text-gray-300">
                    <C heck Circle class Name="w-5 h-5 t ext-green-400 mr-3" />
                    24/7 dedicated support
                  </l i>
                  <l i class Name="f lex items-center text-gray-300">
                    <C heck Circle class Name="w-5 h-5 t ext-green-400 mr-3" />
                    All features included
                  </l i>
                  <l i class Name="f lex items-center text-gray-300">
                    <C heck Circle class Name="w-5 h-5 t ext-green-400 mr-3" />
                    Custom development
                  </l i>
                </u l>
                <L ink 
                  to="/contact"
                  class Name="w-f ull border border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg font-semibold text-center hover:bg-cyan-500/10 transition-all duration-300 block"
                >
                  Contact Sales
                </L ink>
              </d iv>
            </d iv>
          </d iv>
        </s ection>

        {/* C TA Section */}
        <s ection class Name="p y-20">
          <d iv class Name="c ontainer mx-auto px-4">
            <d iv class Name="b g-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center">
              <h2 c lass Name="t ext-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p c lass Name="t ext-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Start your free trial today and experience the power of our Micro Saa S solutions.
              </p>
              <d iv class Name="f lex flex-col sm:flex-row gap-4 justify-center">
                <L ink 
                  to="/contact"
                  class Name="b g-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                </L ink>
                <L ink 
                  to="/about"
                  class Name="b order border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  Learn More About Us
                </L ink>
              </d iv>
            </d iv>
          </d iv>
        </s ection>
      </d iv>

  );
};

export default Micro Saas Services Page;
        <t itle>5 G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5 G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>

}
