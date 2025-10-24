<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import { Helmet } from 'react-helmet-async';
export default function WebDevelopmentPage() {
=======
'use client';
import React from 'react';
import { Code, Smartphone, Globe, Database, Shield, BarChart, Users, CheckCircle, ArrowRight, Cloud, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
<<<<<<< HEAD
const $1: React.FC = () => {
  const webServices = [,
    {,
=======
const WebDevelopmentPage: React.FC = () => {
  const webServices = [
    {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
      title: 'Frontend Development',
      description: 'Modern, responsive web applications with cutting-edge technologies',
      icon: Code,
      price: '$1,200/month',
      features: ['React/Next.js', 'Vue.js/Angular', 'Responsive Design', 'PWA Development'],
      benefits: ['50% faster load times', 'Mobile-first approach', 'SEO optimized'],
<<<<<<< HEAD
      color: 'text-blue-400',},
=======
      color: 'text-blue-400'},
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    {
      title: 'Backend Development',
      description: 'Scalable server-side solutions and API development',
      icon: Database,
      price: '$1,500/month',
      features: ['Node.js/Python', 'RESTful APIs', 'Microservices', 'Database Design'],
      benefits: ['99.9% uptime', 'Scalable architecture', 'Secure APIs'],
<<<<<<< HEAD
      color: 'text-green-400',},
=======
      color: 'text-green-400'},
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    {
      title: 'Full-Stack Development',
      description: 'Complete web solutions from frontend to backend',
      icon: Globe,
      price: '$2,200/month',
      features: ['End-to-end development', 'Cloud deployment', 'DevOps integration', 'Testing & QA'],
      benefits: ['Unified solution', 'Faster development', 'Better performance'],
<<<<<<< HEAD
      color: 'text-purple-400',},
=======
      color: 'text-purple-400'},
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    {
      title: 'E-commerce Development',
      description: 'Custom e-commerce platforms and online stores',
      icon: Smartphone,
      price: '$1,800/month',
      features: ['Custom platforms', 'Payment integration', 'Inventory management', 'Analytics'],
      benefits: ['Higher conversion rates', 'Mobile optimized', 'Secure payments'],
<<<<<<< HEAD
      color: 'text-orange-400',},
=======
      color: 'text-orange-400'},
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    {
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance and support for your web applications',
      icon: Users,
      price: '$500/month',
      features: ['24/7 Support', 'Regular Updates', 'Bug Fixes', 'Performance Monitoring'],
<<<<<<< HEAD
      color: 'text-gray-400',}
=======
      color: 'text-gray-400'}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  ];
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Web Development - Zion Tech Group</title>
        <meta name="description" content="Web Development solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Web Development</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive web development solutions designed to meet your business needs.
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
  );
}
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Code, Server, Cloud, Monitor, Smartphone, Laptop, Tablet } from 'lucide-react'

const WebDevelopmentPage: React.FC = () => {
  const technologies = [
<<<<<<< HEAD
    { name: 'React/Next.js', icon: Code, description: 'Modern frontend frameworks' },
    { name: 'Node.js', icon: Server, description: 'Server-side JavaScript' },
    { name: 'Python/Django', icon: Globe, description: 'Backend development' },
    { name: 'MongoDB/PostgreSQL', icon: Database, description: 'Database solutions' },
    { name: 'AWS/Azure', icon: Cloud, description: 'Cloud platforms' },
    { name: 'Docker/Kubernetes', icon: Shield, description: 'Containerization' }
  ]

  const services = [
    {
      icon: Monitor,
      title: 'Responsive Web Design',
      description: 'Modern, mobile-first websites that work perfectly on all devices',
      features: ['Mobile-first design', 'Cross-browser compatibility', 'Fast loading times', 'SEO optimization']
    },
    {
      icon: Code,
      title: 'Custom Web Applications',
      description: 'Tailored web applications built to meet your specific business needs',
      features: ['Custom functionality', 'User authentication', 'Database integration', 'API development']
    },
    {
      icon: Smartphone,
      title: 'Progressive Web Apps',
      description: 'Web applications that provide a native app-like experience',
      features: ['Offline functionality', 'Push notifications', 'App-like interface', 'Installable']
    },
    {
      icon: Globe,
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with payment processing and inventory management',
      features: ['Payment integration', 'Inventory management', 'Order tracking', 'Admin dashboard']
    },
    {
      icon: Shield,
      title: 'Security & Performance',
      description: 'Secure, high-performance websites with enterprise-grade security',
      features: ['SSL certificates', 'Security audits', 'Performance optimization', 'Monitoring']
    },
    {
      icon: Settings,
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance and support to keep your website running smoothly',
      features: ['Regular updates', 'Security patches', 'Performance monitoring', '24/7 support']
    }
  ]
=======
    { name: 'React/Next.js', icon: Code, description: 'Modern frontend frameworks' ,},
    { name: 'Node.js', icon: Database, description: 'Server-side JavaScript' ,},
    { name: 'Python/Django', icon: Globe, description: 'Backend development' ,},
    { name: 'MongoDB/PostgreSQL', icon: Database, description: 'Database solutions' ,},
    { name: 'AWS/Azure', icon: Cloud, description: 'Cloud platforms' ,},
    { name: 'Docker/Kubernetes', icon: Shield, description: 'Containerization' ,}
  ];
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361

  const process = [
    {
      step: 1,
      title: 'Discovery & Planning',
<<<<<<< HEAD
      description: 'We analyze your requirements and create a detailed project plan'
=======
      description: 'We analyze your requirements and create a detailed project plan',
      icon: BarChart;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
    },
    {
      step: 2,
      title: 'Design & Prototyping',
<<<<<<< HEAD
      description: 'We create wireframes and prototypes to visualize your website'
=======
      description: 'Create wireframes and prototypes to visualize your solution',
      icon: Code;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
    },
    {
      step: 3,
      title: 'Development',
<<<<<<< HEAD
      description: 'We build your website using the latest technologies and best practices'
=======
      description: 'Build your web application using modern technologies and best practices',
      icon: Globe;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
    },
    {
      step: 4,
      title: 'Testing & Launch',
<<<<<<< HEAD
      description: 'We thoroughly test your website and launch it with full support'
=======
      description: 'Thorough testing and deployment with ongoing support',
      icon: Shield;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
    }
  ]

<<<<<<< HEAD
  const stats = [
    { label: 'Websites Built', value: '200+', icon: Globe },
    { label: 'Client Satisfaction', value: '99%', icon: Star },
    { label: 'Average Load Time', value: '<2s', icon: Zap },
    { label: 'Uptime Guarantee', value: '99.9%', icon: Clock }
  ]
=======
  return(<React.Fragment>
      <SEOOptimizer;
        title="Web Development Services - Zion Tech Group"
<<<<<<< HEAD
        description="Professional web development services including frontend, backend, full-stack, and e-commerce solutions. Modern technologies and best practices."
        keywords={['web development', 'frontend development', 'backend development', 'full-stack', 'e-commerce', 'React', 'Node.js']}
        canonicalUrl="https: //ziontechgroup.com/web-development",
      />,
        <PerformanceOptimizer;
=======
        description="Professional web development services including frontend, backend, full-stack, e-commerce, and performance optimization. Build modern, scalable web applications."
        keywords={['web development', 'frontend development', 'backend development', 'full-stack', 'e-commerce', 'web applications']}
        canonicalUrl="https://ziontechgroup.com/web-development"
      />
        <PerformanceOptimizer
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0468
          enableImageOptimization={true}
          enableLazyLoading={true}
          enableCodeSplitting={true}
          enablePrefetching={true}
        />
<<<<<<< HEAD
      <AccessibilityEnhancer;
=======
      <AccessibilityEnhancer
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0468
        enableKeyboardNavigation={true}
        enableScreenReaderSupport={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer;
        enableCSP={true}
        enableHTTPSRedirect={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
</div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <Navigation />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361

  return (
    <>
      <Helmet>
        <title>Web Development | Zion Tech Group</title>
        <meta name="description" content="Professional web development services including responsive design, custom applications, and e-commerce solutions." />
        <meta name="keywords" content="web development, responsive design, custom web applications, e-commerce, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Web Development
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Create stunning, high-performance websites and web applications that engage 
              your audience and drive business growth.
            </p>
<<<<<<< HEAD
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-700">
                  <stat.icon className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-semibold">{stat.value}</span>
                  <span className="text-gray-400 text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                View Portfolio
              </Link>
=======
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <a;
=======

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <Navigation />
        <main className="container mx-auto px-4 py-16 pt-24"></main>
          {/* Hero Section */}
          <section className="text-center mb-16"></section>
            <h1 className="text-4xl md: text-5xl lg:text-6xl font-bold text-white mb-6 neon-text"></h1>
              Web Development Services;
            </h1>,
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">,
              Build modern, scalable, and high-performance web applications with our expert development team.
              From frontend to backend, we deliver solutions that drive business growth.
            </p>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></section>
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
<<<<<<< HEAD
              >Start Your Project<a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >Call +1 302 464 0950</a>
              >
=======
              ></a>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                Start Your Project;
              </a>
              <a;
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              ></a>
                Call +1 302 464 0950;
              </a>
            </div>,
          </section>,
,
          {/* Services Grid */}
<<<<<<< HEAD
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">Our Web Development Services<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{webServices.map((service, index) => (</div>
=======
          <section className="mb-20"></section>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-12 text-center neon-text"></h2>
              Our Web Development Services;)
            </h2>)
)
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">),
              {webServices.map((service, index) => (
                <div key={index} className="cyber-card p-8 hover: scale-105 transition-all duration-300"></div>
                  <div className="flex items-center mb-6">,
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">,
                      <service.icon className="w-8 h-8 text-white" />,
                    </div>,
                    <div>,
                      <h3 className="text-2xl font-bold text-white mb-2 neon-text">{service.title}</h3>
                      <div className={`font-semibold ${service.color}`}>{service.price}</div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">Our Web Development Services</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{webServices.map((service, index) => (</section>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300"></div>
                  <div className="flex items-center mb-6"></div>
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-4"></div>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div></div>
                      <h3 className="text-2xl font-bold text-white mb-2 neon-text">{service.title}<div className={`font-semibold ${service.color}`}>{service.price}<p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-12 text-center neon-text">
              Our Web Development Services;)
            </h2>)
)
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">),
              {webServices.map((service, index) => (</div></div>
                <div key={index} className="cyber-card p-8 hover: scale-105 transition-all duration-300"></div>
                  <div className="flex items-center mb-6">,</div>
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">,</div>
                      <service.icon className="w-8 h-8 text-white" />,
                    </div>,
                    <div>,</div>
                      <h3 className="text-2xl font-bold text-white mb-2 neon-text">{service.title}</h3>
                      <div className={`font-semibold ${service.color}`}>{service.price}</div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">Our Web Development Services</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{webServices.map((service, index) => (</section>
                <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300"></div></div>
                  <div className="flex items-center mb-6"></div>
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-4"></div>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div></div>
                      <h3 className="text-2xl font-bold text-white mb-2 neon-text">{service.title}</h3><div className={`font-semibold ${service.color}`}>{service.price}</div><p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                  <div className="mb-6"></div>
                    <h4 className="text-lg font-semibold text-white mb-3">Features<ul className="space-y-2">{service.features.map((feature, featureIndex) => (</ul>
                        <li key={featureIndex} className="flex items-center text-gray-300"></li>
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" >{feature}</CheckCircle>
                        </CheckCircle>
                      ))}
                    </ul>
                  </div>

                  {service.benefits && (
                    <div className="mb-6"></div>
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits<ul className="space-y-2">{service.benefits.map((benefit, benefitIndex) => (</ul>
                          <li key={benefitIndex} className="flex items-center text-gray-300"></li>
                            <ArrowRight className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" >{benefit}</ArrowRight>
                          </ArrowRight>
                        ))}
                      </ul>
                    </div>
                  )}

                  <a;
                    href="/contact"
<<<<<<< HEAD
                    className="w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 cyber-button"
                  >Get Started</a>
                  </a>
                </div>
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                    className="w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover: scale-105 cyber-button"
                  ></a>
                    Get Started;
                  </a>,
                </div>))}
            </div>
          </section>

          {/* Technologies */}
<<<<<<< HEAD
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">Technologies We Use<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">{technologies.map((tech, index) => (</div>
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300"></div>
                  <tech.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{tech.name}<p className="text-sm text-gray-300">{tech.description}</p>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-12 text-center neon-text">
=======
          <section className="mb-20"></section>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-12 text-center neon-text"></h2>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
              Technologies We Use;
            </h2>,
,
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">,
              {technologies.map((tech, index) => (</div>
                <div key={index} className="cyber-card p-6 text-center hover: scale-105 transition-all duration-300">,</div>
                  <tech.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />,
                  <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-sm text-gray-300">{tech.description}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">Technologies We Use</h2><div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">{technologies.map((tech, index) => (</section>
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300"></div></div>
                  <tech.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3><p className="text-sm text-gray-300">{tech.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
<<<<<<< HEAD
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">Our Development Process<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{process.map((step, index) => (</div>
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                    <span className="text-2xl font-bold text-white">{step.step}<h3 className="text-xl font-bold text-white mb-3 neon-text">{step.title}<p className="text-gray-300">{step.description}</p>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-12 text-center neon-text">
=======
          <section className="mb-20"></section>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-12 text-center neon-text"></h2>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
              Our Development Process;
            </h2>,
,
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">,
              {process.map((step, index) => (</div>
                <div key={index} className="cyber-card p-6 text-center hover: scale-105 transition-all duration-300">,</div>
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">,</div>
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 neon-text">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">Our Development Process</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{process.map((step, index) => (</section>
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300"></div></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                    <span className="text-2xl font-bold text-white">{step.step}</span><h3 className="text-xl font-bold text-white mb-3 neon-text">{step.title}</h3><p className="text-gray-300">{step.description}</p>
                </div>
              ))}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Web Development Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We provide comprehensive web development solutions tailored to your 
                business needs and goals.
              </p>
<<<<<<< HEAD
=======
=======
          {/* CTA Section */}
          <section className="text-center"></section>
              <h2 className="text-3xl md: text-4xl font-bold text-white mb-6 neon-text"></h2>
                Ready to Build Your Next Web Application?
              </h2>
              <p className="text-xl text-gray-300 mb-8"></p>
                Let's discuss your project requirements and create a custom solution that drives your business forward.
              </p>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <a;
            <div className="cyber-card p-12 max-w-4xl mx-auto"></section>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">Ready to Build Your Next Web Application?</h2><p className="text-xl text-gray-300 mb-8">Let's discuss your project requirements and create a custom solution that drives your business forward.</p>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div>
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
<<<<<<< HEAD
                >Start Your Project<a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >Call +1 302 464 0950</a>
                >
=======
                ></a>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                  Start Your Project;
                </a>
                <a;
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                ></a>
                  Call +1 302 464 0950;
                </a>
              </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group">
                  <service.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Technologies Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Technologies We Use
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We use the latest technologies and frameworks to build modern, 
                scalable, and secure web applications.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 text-center">
                  <tech.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-300 text-sm">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const WebDevelopmentPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Web Development - Zion Tech Group</title>
        <meta name="description" content="Professional web development services." />
        <meta name="keywords" content="web development, websites, applications" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Web Development
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional web development services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
=======
        <Footer />
      </div>,
<<<<<<< HEAD
    </React.Fragment>);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
=======
    </>);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6

        {/* Process Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Development Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a proven development process to ensure your project is delivered 
                on time, on budget, and exceeds your expectations.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Your Next Website?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a website that perfectly represents 
              your brand and achieves your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}

export default WebDevelopmentPage
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
=======
import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function WebDevelopment() {return (
    <>
      <title>WebDevelopment - Zion Tech Group</title>

            <h1 className="text-4xl font-bold text-white mb-6">WebDevelopment</h1>
            <p className="text-lg text-gray-300 mb-8">Professional webdevelopment services coming soon.</p>

              Contact Us

      <  />
  );}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
