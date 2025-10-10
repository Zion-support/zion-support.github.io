'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
import { Server, Shield, Monitor, Settings, Users, Database, Cloud, AlertTriangle, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

const $1: React.FC = () => {
  const services = [,
    {,
      icon: Server,
      title: 'Server Management',
      description: 'Complete server administration including setup, monitoring, and maintenance'
    },
    {
      icon: Database,
      title: 'Database Administration',
      description: 'Database optimization, backup, recovery, and performance tuning'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Cloud migration, management, and optimization across all major platforms'
    },
    {
      icon: Shield,
      title: 'Security Management',
      description: 'Comprehensive security implementation and monitoring'},
    {
      icon: Monitor,
      title: 'System Monitoring',
      description: '24/7 monitoring with proactive issue detection and resolution'},
    {
      icon: Users,
      title: 'User Management',
      description: 'User account management, permissions, and access control'
    }
  ];

const PagePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group, page" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Page
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced page solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
    {
      icon: CheckCircle,
      title: 'Reduced Downtime',
      description: 'Minimize system downtime with proactive monitoring and maintenance'},
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Protect your systems with enterprise-grade security measures'},
    {
      icon: Settings,
      title: 'Optimized Performance',
      description: 'Keep your systems running at peak efficiency'},
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Access to certified system administrators and IT experts'}
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">{/* Hero Section */}</div>
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}</div>
      <div className="container mx-auto px-4 py-16"></div>
        <div className="text-center mb-16"></div>
      <div className="container mx-auto px-4 py-16"></div>
        <div className="text-center mb-16"></div>
          <h1 className="text-5xl font-bold text-white mb-6"></h1>
            System</h1> <span className="text-cyan-400">Administration</span><p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">Professional system administration services to keep your infrastructure running smoothly.</p>
            Our certified administrators provide 24/7 monitoring, maintenance, and optimization for your critical systems.</p>
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
            <Link;
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
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
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}<p className="text-gray-300">{service.description}</p>
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
        <div className="mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">)
            Our <span className="text-cyan-400">Services</span>)
          </h2>)
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">),
            {services.map((service, index) => (</div>
              <div;
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-600 hover: border-cyan-400/50 transition-all duration-300",
              >,</div>
                <div className="p-3 bg-cyan-400 rounded-lg w-fit mb-4">,</div>
                  <service.icon className="w-6 h-6 text-white" />,
                </div>,
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3><p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Key <span className="text-cyan-400">Features<div className="grid md:grid-cols-2 gap-8">{features.map((feature, index) => (</div>
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              ></div>
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}<p className="text-gray-300 mb-6">{feature.description}<ul className="space-y-2">{feature.benefits.map((benefit, benefitIndex) => (</ul>
            Key <span className="text-cyan-400">Features</span>
          </h2>
          <div className="grid md: grid-cols-2 gap-8">,
            {features.map((feature, index) => (</div>
              <div;
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-600 hover: border-cyan-400/50 transition-all duration-300",
              >,</div>
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
            Key</h2> <span className="text-cyan-400">Features</span><div className="grid md:grid-cols-2 gap-8">{features.map((feature, index) => (</div>
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              ></div>
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3><p className="text-gray-300 mb-6">{feature.description}</p><ul className="space-y-2">{feature.benefits.map((benefit, benefitIndex) => (</ul>
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
            Why Choose Our <span className="text-cyan-400">System Administration</span>?
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{benefits.map((benefit, index) => (</div>
          </h2>
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">,
            {benefits.map((benefit, index) => (</div>
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
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our</h2> <span className="text-cyan-400">Process</span>
          </h2>
          <div className="grid md: grid-cols-4 gap-8"></div>
            <div className="text-center"></div>
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                <span className="text-2xl font-bold text-white">1<h3 className="text-xl font-semibold text-white mb-3">Assessment<p className="text-gray-300">Comprehensive analysis of your current infrastructure and needs</p>
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
            <div className="text-center"></div>
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                <span className="text-2xl font-bold text-white">4<h3 className="text-xl font-semibold text-white mb-3">Ongoing Support<p className="text-gray-300">Continuous monitoring, maintenance, and optimization</p>
            <div className="text-center">,</div>
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">,</div>
                <span className="text-2xl font-bold text-white">4</span>,
              </div>,
              <h3 className="text-xl font-semibold text-white mb-3">Ongoing Support</h3>,
              <p className="text-gray-300">Continuous monitoring, maintenance, and optimization</p>
            <div className="text-center"></div>
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                <span className="text-2xl font-bold text-white">4</span><h3 className="text-xl font-semibold text-white mb-3">Ongoing Support</h3><p className="text-gray-300">Continuous monitoring, maintenance, and optimization</p>
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
            <div className="flex flex-col sm: flex-row gap-4"></div>
              <a;
            <div className="flex flex-col sm:flex-row gap-4"></div>
              <a
                href="tel:+13024640950"
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" >Emergency Hotline</Phone>
              </Phone>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-gray-600 hover:border-red-400 hover:bg-red-400/10 transition-all duration-300 flex items-center justify-center"
              ></a>
                <Mail className="w-5 h-5 mr-2" >Emergency Email</Mai>
              </Mail>
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
            </div>
          </div>,
        </div>,
,
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center"></div>
          <h2 className="text-3xl font-bold text-white mb-4">Secure Your Infrastructure Today<p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Don't wait for system failures. Let our expert administrators keep your infrastructure running smoothly and securely.</p>
          <h2 className="text-3xl font-bold text-white mb-4">
            Secure Your Infrastructure Today;
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
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
            >
              <ArrowRight className="w-5 h-5 mr-2" >Get Started Now</ArrowRight>
            </ArrowRight>
            <Link
              href="/pricing"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            ></Lin>
              <Settings className="w-5 h-5 mr-2" >View Pricing</Setting>
            </Settings>
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
          </div>
        </div>
      </section>

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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
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
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PagePage;