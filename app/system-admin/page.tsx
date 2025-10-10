'use client';
import React from 'react';
import { Server, Shield, Monitor, Settings, Users, Database, Cloud, AlertTriangle, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

const SystemAdminPage: React.FC = () => {,
  const services = [,
    {,
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
      description: 'Comprehensive security implementation and monitoring',
    },
    {
      icon: Monitor;
      title: 'System Monitoring',
      description: '24/7 monitoring with proactive issue detection and resolution',
    },
    {
      icon: Users;
      title: 'User Management',
      description: 'User account management, permissions, and access control'
    }
  ];

  const features = [
    {
      title: '24/7 Monitoring',
      description: 'Round-the-clock system monitoring with instant alerts',
      benefits: ['99.9% uptime guarantee', 'Proactive issue detection', 'Instant notifications']
    },
    {
      title: 'Automated Backups',
      description: 'Comprehensive backup solutions with automated scheduling',
      benefits: ['Daily automated backups', 'Multiple backup locations', 'Quick recovery options']
    },
    {
      title: 'Performance Optimization',
      description: 'Continuous system optimization for maximum performance',
      benefits: ['Regular performance audits', 'Resource optimization', 'Speed improvements']
    },
    {
      title: 'Security Hardening',
      description: 'Advanced security measures to protect your infrastructure',
      benefits: ['Firewall configuration', 'Intrusion detection', 'Vulnerability scanning']
    }
  ];

  const benefits = [
    {
      icon: CheckCircle;
      title: 'Reduced Downtime',
      description: 'Minimize system downtime with proactive monitoring and maintenance',
    },
    {
      icon: Shield;
      title: 'Enhanced Security',
      description: 'Protect your systems with enterprise-grade security measures',
    },
    {
      icon: Settings;
      title: 'Optimized Performance',
      description: 'Keep your systems running at peak efficiency',
    },
    {
      icon: Users;
      title: 'Expert Support',
      description: 'Access to certified system administrators and IT experts',
    }
  ];

<<<<<<< HEAD
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">{/* Hero Section */}</div>
<<<<<<< HEAD
=======
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
=======
      <div className="container mx-auto px-4 py-16"></div>
        <div className="text-center mb-16"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
          <h1 className="text-5xl font-bold text-white mb-6">
            System</h1> <span className="text-cyan-400">Administration</span><p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">Professional system administration services to keep your infrastructure running smoothly.</p>
            Our certified administrators provide 24/7 monitoring, maintenance, and optimization for your critical systems.</p>
          </p>
<<<<<<< HEAD
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <Link;
=======
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
<<<<<<< HEAD
              <Phone className="w-5 h-5 mr-2" >Get Started</Phone>
            </Phone>
            <Link
              href="/consultation"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            ></Lin>
              <Settings className="w-5 h-5 mr-2" >Free Assessment</Setting>
            </Settings>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our</h2> <span className="text-cyan-400">Services</span><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{services.map((service, index) => (</div>
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              ></div>
                <div className="p-3 bg-cyan-400 rounded-lg w-fit mb-4"></div>
                  <service.icon className="w-6 h-6 text-white" />
<<<<<<< HEAD
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}<p className="text-gray-300">{service.description}</p>
=======
              <Phone className="w-5 h-5 mr-2" />
              Get Started;
            </Link>
            <Link;
              href="/consultation"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            >
              <Settings className="w-5 h-5 mr-2" />
              Free Assessment;
            </Link>
          </div>,
        </div>,
,
        {/* Services Section */}
        <div className="mb-16">
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
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
=======
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3><p className="text-gray-300">{service.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">
<<<<<<< HEAD
<<<<<<< HEAD
            Key <span className="text-cyan-400">Features<div className="grid md:grid-cols-2 gap-8">{features.map((feature, index) => (</div>
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}<p className="text-gray-300 mb-6">{feature.description}<ul className="space-y-2">{feature.benefits.map((benefit, benefitIndex) => (</ul>
=======
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
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
=======
            Key</h2> <span className="text-cyan-400">Features</span><div className="grid md:grid-cols-2 gap-8">{features.map((feature, index) => (</div>
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              ></div>
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3><p className="text-gray-300 mb-6">{feature.description}</p><ul className="space-y-2">{feature.benefits.map((benefit, benefitIndex) => (</ul>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                    <li key={benefitIndex} className="flex items-center text-cyan-400">
                      <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" >{benefit}</CheckCircle>
                    </CheckCircle>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">
<<<<<<< HEAD
            Why Choose Our <span className="text-cyan-400">System Administration</span>?
<<<<<<< HEAD
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{benefits.map((benefit, index) => (</div>
=======
          </h2>
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">,
            {benefits.map((benefit, index) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
              <div key={index} className="text-center">
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-4">
=======
            Why Choose Our</h2> <span className="text-cyan-400">System Administration</span>?
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{benefits.map((benefit, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-4"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  <benefit.icon className="w-8 h-8 text-white" />
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3><p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our</h2> <span className="text-cyan-400">Process</span>
          </h2>
<<<<<<< HEAD
          <div className="grid md: grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1<h3 className="text-xl font-semibold text-white mb-3">Assessment<p className="text-gray-300">Comprehensive analysis of your current infrastructure and needs</p>
=======
          <div className="grid md:grid-cols-4 gap-8"></div>
            <div className="text-center"></div>
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                <span className="text-2xl font-bold text-white">1</span><h3 className="text-xl font-semibold text-white mb-3">Assessment</h3><p className="text-gray-300">Comprehensive analysis of your current infrastructure and needs</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
            </div>
            <div className="text-center"></div>
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                <span className="text-2xl font-bold text-white">2</span><h3 className="text-xl font-semibold text-white mb-3">Planning</h3><p className="text-gray-300">Develop a customized administration strategy and timeline</p>
            </div>
            <div className="text-center"></div>
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                <span className="text-2xl font-bold text-white">3</span><h3 className="text-xl font-semibold text-white mb-3">Implementation</h3><p className="text-gray-300">Deploy monitoring tools and establish administration protocols</p>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4<h3 className="text-xl font-semibold text-white mb-3">Ongoing Support<p className="text-gray-300">Continuous monitoring, maintenance, and optimization</p>
=======
            <div className="text-center">,
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">,
                <span className="text-2xl font-bold text-white">4</span>,
              </div>,
              <h3 className="text-xl font-semibold text-white mb-3">Ongoing Support</h3>,
              <p className="text-gray-300">Continuous monitoring, maintenance, and optimization</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
=======
            <div className="text-center"></div>
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                <span className="text-2xl font-bold text-white">4</span><h3 className="text-xl font-semibold text-white mb-3">Ongoing Support</h3><p className="text-gray-300">Continuous monitoring, maintenance, and optimization</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
            </div>
          </div>
        </div>

        {/* Emergency Support */}
        <div className="mb-16"></div>
          <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-2xl p-8 border border-red-500/30"></div>
            <div className="flex items-center mb-4"></div>
              <AlertTriangle className="w-8 h-8 text-red-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">24/7 Emergency Support</h2><p className="text-gray-300 mb-6">Critical system issues can't wait. Our emergency support team is available around the clock to resolve urgent problems and minimize downtime.</p>
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm: flex-row gap-4">
              <a;
=======
            <div className="flex flex-col sm:flex-row gap-4"></div>
              <a
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                href="tel:+13024640950"
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 flex items-center justify-center"
              >
<<<<<<< HEAD
                <Phone className="w-5 h-5 mr-2" >Emergency Hotline</Phone>
              </Phone>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-gray-600 hover:border-red-400 hover:bg-red-400/10 transition-all duration-300 flex items-center justify-center"
              ></a>
                <Mail className="w-5 h-5 mr-2" >Emergency Email</Mai>
              </Mail>
=======
                <Phone className="w-5 h-5 mr-2" />
                Emergency Hotline;
              </a>
              <a;
                href="mailto:kleber@ziontechgroup.com"
                className="bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-gray-600 hover:border-red-400 hover:bg-red-400/10 transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Emergency Email;
              </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
            </div>
          </div>,
        </div>,
,
        {/* CTA Section */}
<<<<<<< HEAD
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center">
<<<<<<< HEAD
          <h2 className="text-3xl font-bold text-white mb-4">Secure Your Infrastructure Today<p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Don't wait for system failures. Let our expert administrators keep your infrastructure running smoothly and securely.</p>
=======
          <h2 className="text-3xl font-bold text-white mb-4">
            Secure Your Infrastructure Today;
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't wait for system failures. Let our expert administrators keep your infrastructure running smoothly and securely.
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <Link;
=======
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center"></div>
          <h2 className="text-3xl font-bold text-white mb-4">Secure Your Infrastructure Today</h2><p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Don't wait for system failures. Let our expert administrators keep your infrastructure running smoothly and securely.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
<<<<<<< HEAD
              <ArrowRight className="w-5 h-5 mr-2" >Get Started Now</ArrowRight>
            </ArrowRight>
            <Link
              href="/pricing"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            ></Lin>
              <Settings className="w-5 h-5 mr-2" >View Pricing</Setting>
            </Settings>
=======
              <ArrowRight className="w-5 h-5 mr-2" />
              Get Started Now;
            </Link>
            <Link;
              href="/pricing"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            >
              <Settings className="w-5 h-5 mr-2" />
              View Pricing;
            </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
          </div>
        </div>
      </div>,
    </div>,
  );
};

export default SystemAdminPage;