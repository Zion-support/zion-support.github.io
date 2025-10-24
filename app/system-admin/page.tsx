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
'use client';
import React from 'react';
import { Server, Shield, Monitor, Settings, Users, Database, Cloud, AlertTriangle, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

const SystemAdminPage: React.FC = () => {
  const services = [
    {
      icon: Server;
      title: 'Server Management',
      description: 'Complete server administration including setup, monitoring, and maintenance'
    },
    {
      icon: Database;
      title: 'Database Administration',
      description: 'Database optimization, backup, recovery, and performance tuning'
    },
    {
      icon: Cloud;
      title: 'Cloud Infrastructure',
      description: 'Cloud migration, management, and optimization across all major platforms'
    },
    {
      icon: Shield;
      title: 'Security Management',
      description: 'Comprehensive security implementation and monitoring'},
    {
      icon: Monitor;
      title: 'System Monitoring',
      description: '24/7 monitoring with proactive issue detection and resolution'},
    {
      icon: Users;
      title: 'User Management',
      description: 'User account management, permissions, and access control'
    }
  ];

const SystemAdministrationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',
    }
  ];

  const benefits = [
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Page?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our page solutions deliver unmatched performance, security, and scalability.
            </p>
          </div></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div></div></div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
    {
      icon: CheckCircle;
      title: 'Reduced Downtime',
      description: 'Minimize system downtime with proactive monitoring and maintenance'},
    {
      icon: Shield;
      title: 'Enhanced Security',
      description: 'Protect your systems with enterprise-grade security measures'},
    {
      icon: Settings;
      title: 'Optimized Performance',
      description: 'Keep your systems running at peak efficiency'},
    {
      icon: Users;
      title: 'Expert Support',
      description: 'Access to certified system administrators and IT experts'}
  ];

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16"></div>
        <div className="text-center mb-16"></div>
      <div className="container mx-auto px-4 py-16"></div>
        <div className="text-center mb-16"></div>
          <h1 className="text-5xl font-bold text-white mb-6"></h1>
            System</h1> <span className="text-cyan-400">Administration</span><p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">Professional system administration services to keep your infrastructure running smoothly.</p>
            Our certified administrators provide 24/7 monitoring, maintenance, and optimization for your critical systems.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            ></Link>
              <Phone className="w-5 h-5 mr-2" />
              Get Started;
            </Link>
            <Link;
              href="/consultation"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            ></Link>
              <Settings className="w-5 h-5 mr-2" />
              Free Assessment;
            </Link>
          </div>,
        </div>,
,
        {/* Services Section */}
        <div className="mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">)
            Our <span className="text-cyan-400">Services</span>)
          </h2>)
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">),
            {services.map((service, index) => (
              <div;
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-600 hover: border-cyan-400/50 transition-all duration-300",
              >,
                <div className="p-3 bg-cyan-400 rounded-lg w-fit mb-4">,
                  <service.icon className="w-6 h-6 text-white" />,
                </div>,
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3><p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our page solutions for your business.
            </p>
          </div></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div></div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your page needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div></div></div>
          </div>
        </section>

        {/* Features Section */}
        <div className="mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12"></h2>
            Key <span className="text-cyan-400">Features</span>
          </h2>
          <div className="grid md: grid-cols-2 gap-8">,
            {features.map((feature, index) => (
              <div;
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-600 hover: border-cyan-400/50 transition-all duration-300",
              >,
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2"></ul>
                  {feature.benefits.map((benefit, benefitIndex) => (
            Key</h2> <span className="text-cyan-400">Features</span><div className="grid md:grid-cols-2 gap-8">{features.map((feature, index) => (</div>
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              ></div>
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3><p className="text-gray-300 mb-6">{feature.description}</p><ul className="space-y-2">{feature.benefits.map((benefit, benefitIndex) => (</ul>
                    <li key={benefitIndex} className="flex items-center text-cyan-400"></li>
                      <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" >{benefit}</CheckCircle>
                    </CheckCircle>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <div className="mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12"></h2>
          </h2>
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">,
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center"></div>
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-4"></div>
            Why Choose Our</h2> <span className="text-cyan-400">System Administration</span>?
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{benefits.map((benefit, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-4"></div>
                  <benefit.icon className="w-8 h-8 text-white" />
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3><p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12"></h2>
            Our</h2> <span className="text-cyan-400">Process</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8"></div>
            <div className="text-center"></div>
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                <span className="text-2xl font-bold text-white">1</span><h3 className="text-xl font-semibold text-white mb-3">Assessment</h3><p className="text-gray-300">Comprehensive analysis of your current infrastructure and needs</p>
            </div>
            <div className="text-center"></div>
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                <span className="text-2xl font-bold text-white">2</span><h3 className="text-xl font-semibold text-white mb-3">Planning</h3><p className="text-gray-300">Develop a customized administration strategy and timeline</p>
            </div>
            <div className="text-center"></div>
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                <span className="text-2xl font-bold text-white">3</span><h3 className="text-xl font-semibold text-white mb-3">Implementation</h3><p className="text-gray-300">Deploy monitoring tools and establish administration protocols</p>
            </div>
            <div className="text-center">,
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">,
                <span className="text-2xl font-bold text-white">4</span>,
              </div>,
              <h3 className="text-xl font-semibold text-white mb-3">Ongoing Support</h3>,
              <p className="text-gray-300">Continuous monitoring, maintenance, and optimization</p>
            <div className="text-center"></div>
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                <span className="text-2xl font-bold text-white">4</span><h3 className="text-xl font-semibold text-white mb-3">Ongoing Support</h3><p className="text-gray-300">Continuous monitoring, maintenance, and optimization</p>
            </div>
          </div>
        </section>

        {/* Emergency Support */}
        <div className="mb-16"></div>
          <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-2xl p-8 border border-red-500/30"></div>
            <div className="flex items-center mb-4"></div>
              <AlertTriangle className="w-8 h-8 text-red-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">24/7 Emergency Support</h2><p className="text-gray-300 mb-6">Critical system issues can't wait. Our emergency support team is available around the clock to resolve urgent problems and minimize downtime.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4"></div>
              <a
                href="tel:+13024640950"
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 flex items-center justify-center"
              ></a>
                <Phone className="w-5 h-5 mr-2" />
                Emergency Hotline;
              </a>
              <a;
                href="mailto:kleber@ziontechgroup.com"
                className="bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-gray-600 hover:border-red-400 hover:bg-red-400/10 transition-all duration-300 flex items-center justify-center"
              ></a>
                <Mail className="w-5 h-5 mr-2" />
                Emergency Email;
              </a>
            </div>
          </div>,
        </div>,
,
        {/* CTA Section */}
          <h2 className="text-3xl font-bold text-white mb-4"></h2>
            Secure Your Infrastructure Today;
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"></p>
            Don't wait for system failures. Let our expert administrators keep your infrastructure running smoothly and securely.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
            <Link;
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center"></div>
          <h2 className="text-3xl font-bold text-white mb-4">Secure Your Infrastructure Today</h2><p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Don't wait for system failures. Let our expert administrators keep your infrastructure running smoothly and securely.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            ></Link>
              <ArrowRight className="w-5 h-5 mr-2" />
              Get Started Now;
            </Link>
            <Link;
              href="/pricing"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            ></Link>
              <Settings className="w-5 h-5 mr-2" />
              View Pricing;
            </Link>
          </div>
        </div>
      </div>,
    </div>);
};

export default SystemAdministrationPage;
import React from 'react';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function SystemadminPage() {
  return (
    <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>System Admin - Zion Tech Group</title>
        <h1 className="text-4 xl font-boldtext-whitemb-6">System Admin</h1>
        <p className="text-lgtext-gray-300mb-8">Professional system admin services coming soon.</p>
          Contact Us

  );

import React from 'react';
import { Helmet } from 'react-helmet-async';
import React  from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function SystemadminPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20">
      <Helmet>
        <title>System Admin - Zion Tech Group</title>
        <meta name="description" content="Professional system admin services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">System Admin</h1>
          <p className="text-lg text-gray-300 mb-8">Professional system admin services coming soon.</p>
          
          <ArrowRight className="w-5h-5ml-2"  />
        </Link>
      </div>
    </div>
  );
}
