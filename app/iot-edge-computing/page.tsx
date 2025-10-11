<<<<<<< HEAD
'use client';
import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const IotEdgeComputingPage: React.FC = () => {
  const services = [
    {
      title: 'IoT Device Management',
      description: 'Comprehensive management of IoT devices and sensors',
      features: ['Device Provisioning', 'Remote Monitoring', 'Firmware Updates'],
      price: 'Starting at $1,200/month',
      icon: '📱'
    },
    {
      title: 'Edge Computing Platform',
      description: 'Distributed computing infrastructure for real-time processing',
      features: ['Edge Servers', 'Data Processing', 'Low Latency'],
      price: 'Starting at $1,800/month',
      icon: '⚡'
    },
    {
      title: 'Data Analytics',
      description: 'Real-time analytics and insights from IoT data',
      features: ['Stream Processing', 'Predictive Analytics', 'Visualization'],
      price: 'Starting at $1,500/month',
      icon: '📊'
    },
    {
      title: 'Industrial IoT',
      description: 'IoT solutions for manufacturing and industrial applications',
      features: ['Predictive Maintenance', 'Quality Control', 'Process Optimization'],
      price: 'Starting at $2,000/month',
      icon: '🏭'
    },
    {
      title: 'Smart City Solutions',
      description: 'IoT infrastructure for smart city applications',
      features: ['Traffic Management', 'Environmental Monitoring', 'Public Safety'],
      price: 'Starting at $2,500/month',
      icon: '🏙️'
    },
    {
      title: 'IoT Security',
      description: 'Comprehensive security for IoT devices and networks',
      features: ['Device Authentication', 'Network Security', 'Data Encryption'],
      price: 'Starting at $1,000/month',
      icon: '🔒'
    }
  ];

  const benefits = [
    { metric: 'Real-time', description: 'Data Processing' },
    { metric: '50%', description: 'Latency Reduction' },
    { metric: '99.9%', description: 'Uptime Guarantee' },
    { metric: 'Scalable', description: 'Infrastructure' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            IoT & Edge Computing
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Connect and process data at the edge with IoT and edge computing solutions 
            that enable real-time decision-making and intelligent automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Explore IoT Solutions
            </Link>
            <Link to="/case-studies" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              View IoT Case Studies
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">IoT & Edge Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center cyber-card">
                <div className="text-4xl font-bold text-blue-400 mb-2">{benefit.metric}</div>
                <div className="text-gray-300">{benefit.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">IoT & Edge Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <span className="text-blue-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-400 mb-3">{service.price}</div>
                  <Link to="/contact" className="text-blue-400 hover:text-blue-300 font-medium">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="cyber-card hologram-card p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Connect Everything?
          </h2>
          <p className="text-gray-300 mb-6">
            Build intelligent IoT solutions with our edge computing expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button">
              Start IoT Journey
            </Link>
            <a href="tel:+13024640950" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              Call: (302) 464-0950
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default IotEdgeComputingPage;
=======
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const PagePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
=======
import {Helmet}}from 'react-helmet-async';
import {CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe}}from 'lucide-react';
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
>>>>>>> origin/main
const features = [
    {icon: Brain,
>>>>>>> origin/main
      title: 'AI-Powered Solutions',
<<<<<<< HEAD
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

=======
      description: 'Advanced AI technology to transform your business operations and improve efficiency',},
    {icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',},
    {icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',},
    {icon: Globe,
      title: 'Global Reach',
<<<<<<< HEAD
      description: 'Worldwide deployment and support for international businesses',}}
  ]
=======
      description: 'Worldwide deployment and support for international businesses'
  }
    }
<<<<<<< HEAD
  ];];];
>>>>>>> origin/main
const benefits = [
=======
  ]
>>>>>>> origin/main
  const benefits = [
>>>>>>> origin/main
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',

    '24/7 technical support',

    'Easy integration with existing systems',

    'Cost-effective pricing plans',

<<<<<<< HEAD
<<<<<<< HEAD
    'Proven track record of success'
  ]
return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>)
      <Helmet />
=======
    'Proven track record of success';
  ];
<<<<<<< HEAD

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet>
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group, page" />
=======
return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet>
>>>>>>> origin/main
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
      {/* Hero Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
=======
    'Proven track record of success'
  ]
return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet>
        </Helmet><title>Page | Zion Tech Group</title>
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
>>>>>>> origin/main
      </Helmet>
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
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
=======
=======
      <section className="py-20 px-4">
          </section>< className="$2 />
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
>>>>>>> origin/main
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
>>>>>>> origin/main
        </section>
          </div>
        </div>
      </section>
      {/* Features Section */} </p>
          </div>
<<<<<<< HEAD

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
=======
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div>,
>>>>>>> origin/main
>>>>>>> origin/main
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
<<<<<<< HEAD
      {/* Benefits Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
=======
      {/* Benefits Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        </section>
>>>>>>> origin/main
              </div>
            ))}
=======
      <section className="py-20 px-4">
          </section>< className="$2 />
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
>>>>>>> origin/main
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
              </div>
            ))}

>>>>>>> origin/main
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
<<<<<<< HEAD
      {/* CTA Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
=======
      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
=======
      <section className="py-20 px-4">
          </section>< className="$2 />
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
>>>>>>> origin/main
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
>>>>>>> origin/main
        </section>
>>>>>>> origin/main
          </div>
        </div>
      </section>
    </div>
<<<<<<< HEAD
  );
};

export default PagePage;
<<<<<<< HEAD
=======
=======
  ),
}
export default PagePage
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page | Zion Tech Group
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group, page" />
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            ))}
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
            ))}
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
  )
}
export default PagePage</div></div></section></section></section>
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
