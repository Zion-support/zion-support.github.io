import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { BarChart, MessageSquare, Shield, Cloud, CheckCircle, ArrowRight, Users } from 'lucide-react';

const MicroSaasServicesPage: React.FC = () => {
  services = [
    {
      icon: BarChart,
      title: 'Zion Analytics Pro',
      description: 'Advanced business intelligence platform with real-time analytics and custom dashboards.',
      features: ['Real-time Analytics', 'Custom Dashboards', 'Data Visualization', 'Export Reports'],
      price: 'Starting at $99/month',
      color: 'from-cyan-500 to-blue-500',
      link: '/zion-analytics-pro'
    },
    {
      icon: MessageSquare,
      title: 'Zion Chat AI',
      description: 'Intelligent customer support chatbot with natural language processing capabilities.',
      features: ['24/7 Support', 'Multi-language', 'Integration APIs', 'Analytics Dashboard'],
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
      title: 'Zion CRM Intelligence',
      description: 'AI-powered customer relationship management with predictive analytics.',
      features: ['Lead Scoring', 'Sales Forecasting', 'Customer Insights', 'Automation Rules'],
      price: 'Starting at $129/month',
      color: 'from-indigo-500 to-purple-500',
      link: '/zion-crm-intelligence'
    }
  ];

  features = [
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
      icon: BarChart,
      title: 'Scalable Solutions',
      description: 'Grow with confidence knowing our solutions scale with your business needs.'
    }
  ];

  return (
    <>
    <>
      <Helmet>
}
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful micro SaaS solutions including analytics, chatbots, security, cloud backup, workflow automation, and CRM intelligence for modern businesses." />
        <meta name="keywords" content="micro SaaS, business software, analytics, chatbots, security, cloud backup, workflow automation, CRM" />
      </Helmet>

      <div className="mi n-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="p t-32 pb-20">
          <div className="containe r mx-auto px-4">
            <div className="tex t-center max-w-4xl mx-auto">
              <h1 className="tex t-5xl md:text-6xl font-bold text-white mb-6">
                Micro <span className="b g-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">SaaS Services</span>
              </h1>
              <p className="tex t-xl text-gray-300 mb-8 leading-relaxed">
                Powerful, purpose-built software solutions designed to solve specific business challenges. 
                Get enterprise-grade functionality without the complexity.
              </p>
              <div className="fle x flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="b g-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/ai-services"
                  className="borde r border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  View AI Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="p y-20">
          <div className="containe r mx-auto px-4">
            <div className="tex t-center mb-16">
              <h2 className="tex t-4xl font-bold text-white mb-6">
                Our <span className="b g-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Micro SaaS Solutions</span>
              </h2>
              <p className="tex t-xl text-gray-300 max-w-3xl mx-auto">
                Specialized software tools that solve specific business problems with precision and efficiency
              </p>
            </div>

            <div className="gri d grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="b g-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 tex t-white" />
                  </div>
                  
                  <h3 className="tex t-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="tex t-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="spac e-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="fle x items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 tex t-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="fle x items-center justify-between mb-6">
                    <span className="tex t-2xl font-bold text-cyan-400">{service.price}</span>
                    <Link 
                      to={service.link}
                      className="tex t-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1 inline-flex items-center"
                    >
                      Learn More <ArrowRight className="w-4 h-4 m l-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="p y-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="containe r mx-auto px-4">
            <div className="tex t-center mb-16">
              <h2 className="tex t-4xl font-bold text-white mb-6">
                Why Choose <span className="b g-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Micro SaaS</span>?
              </h2>
              <p className="tex t-xl text-gray-300 max-w-3xl mx-auto">
                Get the power of enterprise software without the complexity and cost
              </p>
            </div>

            <div className="gri d grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="tex t-center group">
                  <div className="w-2 0 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-1 0 h-10 text-cyan-400" />
                  </div>
                  <h3 className="tex t-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="tex t-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="p y-20">
          <div className="containe r mx-auto px-4">
            <div className="tex t-center mb-16">
              <h2 className="tex t-4xl font-bold text-white mb-6">
                Simple <span className="b g-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="tex t-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your needs. All plans include 24/7 support and regular updates.
              </p>
            </div>

            <div className="gri d grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="b g-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
                <h3 className="tex t-2xl font-bold text-white mb-4">Starter</h3>
                <div className="tex t-4xl font-bold text-cyan-400 mb-6">$99<span className="tex t-lg text-gray-400">/month</span></div>
                <ul className="spac e-y-3 mb-8">
                  <li className="fle x items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 tex t-green-400 mr-3" />
                    Up to 3 Micro SaaS tools
                  </li>
                  <li className="fle x items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 tex t-green-400 mr-3" />
                    Basic support
                  </li>
                  <li className="fle x items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 tex t-green-400 mr-3" />
                    Standard features
                  </li>
                </ul>
                <Link 
                  to="/contact"
                  className="w-ful l bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 block"
                >
                  Get Started
                </Link>
              </div>

              <div className="b g-gradient-to-br from-cyan-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-500/50 rounded-xl p-8 relative">
                <div className="absolut e -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="b g-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="tex t-2xl font-bold text-white mb-4">Professional</h3>
                <div className="tex t-4xl font-bold text-cyan-400 mb-6">$199<span className="tex t-lg text-gray-400">/month</span></div>
                <ul className="spac e-y-3 mb-8">
                  <li className="fle x items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 tex t-green-400 mr-3" />
                    Up to 10 Micro SaaS tools
                  </li>
                  <li className="fle x items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 tex t-green-400 mr-3" />
                    Priority support
                  </li>
                  <li className="fle x items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 tex t-green-400 mr-3" />
                    Advanced features
                  </li>
                  <li className="fle x items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 tex t-green-400 mr-3" />
                    Custom integrations
                  </li>
                </ul>
                <Link 
                  to="/contact"
                  className="w-ful l bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 block"
                >
                  Get Started
                </Link>
              </div>

              <div className="b g-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
                <h3 className="tex t-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="tex t-4xl font-bold text-cyan-400 mb-6">Custom</div>
                <ul className="spac e-y-3 mb-8">
                  <li className="fle x items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 tex t-green-400 mr-3" />
                    Unlimited Micro SaaS tools
                  </li>
                  <li className="fle x items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 tex t-green-400 mr-3" />
                    24/7 dedicated support
                  </li>
                  <li className="fle x items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 tex t-green-400 mr-3" />
                    All features included
                  </li>
                  <li className="fle x items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 tex t-green-400 mr-3" />
                    Custom development
                  </li>
                </ul>
                <Link 
                  to="/contact"
                  className="w-ful l border border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg font-semibold text-center hover:bg-cyan-500/10 transition-all duration-300 block"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="p y-20">
          <div className="containe r mx-auto px-4">
            <div className="b g-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center">
              <h2 className="tex t-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="tex t-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Start your free trial today and experience the power of our Micro SaaS solutions.
              </p>
              <div className="fle x flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="b g-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/about"
                  className="borde r border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasServicesPage;
}
