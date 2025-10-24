import { Helmet } from 'react-helmet-async';
export default function WebDevelopmentPage() {
'use client';
import React from 'react';
import { Code, Smartphone, Globe, Database, Shield, BarChart, Users, CheckCircle, ArrowRight, Cloud, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
const WebDevelopmentPage: React.FC = () => {
  const webServices = [
    {
      title: 'Frontend Development',
      description: 'Modern, responsive web applications with cutting-edge technologies',
      icon: Code,
      price: '$1,200/month',
      features: ['React/Next.js', 'Vue.js/Angular', 'Responsive Design', 'PWA Development'],
      benefits: ['50% faster load times', 'Mobile-first approach', 'SEO optimized'],
      color: 'text-blue-400'},
    {
      title: 'Backend Development',
      description: 'Scalable server-side solutions and API development',
      icon: Database,
      price: '$1,500/month',
      features: ['Node.js/Python', 'RESTful APIs', 'Microservices', 'Database Design'],
      benefits: ['99.9% uptime', 'Scalable architecture', 'Secure APIs'],
      color: 'text-green-400'},
    {
      title: 'Full-Stack Development',
      description: 'Complete web solutions from frontend to backend',
      icon: Globe,
      price: '$2,200/month',
      features: ['End-to-end development', 'Cloud deployment', 'DevOps integration', 'Testing & QA'],
      benefits: ['Unified solution', 'Faster development', 'Better performance'],
      color: 'text-purple-400'},
    {
      title: 'E-commerce Development',
      description: 'Custom e-commerce platforms and online stores',
      icon: Smartphone,
      price: '$1,800/month',
      features: ['Custom platforms', 'Payment integration', 'Inventory management', 'Analytics'],
      benefits: ['Higher conversion rates', 'Mobile optimized', 'Secure payments'],
      color: 'text-orange-400'},
    {
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance and support for your web applications',
      icon: Users,
      price: '$500/month',
      features: ['24/7 Support', 'Regular Updates', 'Bug Fixes', 'Performance Monitoring'],
      color: 'text-gray-400'}
  ];

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
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Code, Server, Cloud, Monitor, Smartphone, Laptop, Tablet } from 'lucide-react'

const WebDevelopmentPage: React.FC = () => {
  const technologies = [
    { name: 'React/Next.js', icon: Code, description: 'Modern frontend frameworks' ,},
    { name: 'Node.js', icon: Database, description: 'Server-side JavaScript' ,},
    { name: 'Python/Django', icon: Globe, description: 'Backend development' ,},
    { name: 'MongoDB/PostgreSQL', icon: Database, description: 'Database solutions' ,},
    { name: 'AWS/Azure', icon: Cloud, description: 'Cloud platforms' ,},
    { name: 'Docker/Kubernetes', icon: Shield, description: 'Containerization' ,}
  ];

  const process = [
    {
      step: 1,
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project plan',
      icon: BarChart;
    },
    {
      step: 2,
      title: 'Design & Prototyping',
      description: 'Create wireframes and prototypes to visualize your solution',
      icon: Code;
    },
    {
      step: 3,
      title: 'Development',
      description: 'Build your web application using modern technologies and best practices',
      icon: Globe;
    },
    {
      step: 4,
      title: 'Testing & Launch',
      description: 'Thorough testing and deployment with ongoing support',
      icon: Shield;
    }
  ]

  return(<React.Fragment>
      <SEOOptimizer;
        title="Web Development Services - Zion Tech Group"
        description="Professional web development services including frontend, backend, full-stack, e-commerce, and performance optimization. Build modern, scalable web applications."
        keywords={['web development', 'frontend development', 'backend development', 'full-stack', 'e-commerce', 'web applications']}
        canonicalUrl="https://ziontechgroup.com/web-development"
      />
        <PerformanceOptimizer
          enableImageOptimization={true}
          enableLazyLoading={true}
          enableCodeSplitting={true}
          enablePrefetching={true}
        />
      <AccessibilityEnhancer
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
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <a;

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
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></section>
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              ></a>
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
                    className="w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover: scale-105 cyber-button"
                  ></a>
                    Get Started;
                  </a>,
                </div>))}
            </div>
          </section>

          {/* Technologies */}
          <section className="mb-20"></section>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-12 text-center neon-text"></h2>
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
          <section className="mb-20"></section>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-12 text-center neon-text"></h2>
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
            </div>
          </div>
        </section>

          {/* CTA Section */}
          <section className="text-center"></section>
              <h2 className="text-3xl md: text-4xl font-bold text-white mb-6 neon-text"></h2>
                Ready to Build Your Next Web Application?
              </h2>
              <p className="text-xl text-gray-300 mb-8"></p>
                Let's discuss your project requirements and create a custom solution that drives your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <a;
            <div className="cyber-card p-12 max-w-4xl mx-auto"></section>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">Ready to Build Your Next Web Application?</h2><p className="text-xl text-gray-300 mb-8">Let's discuss your project requirements and create a custom solution that drives your business forward.</p>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div>
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                ></a>
                  Start Your Project;
                </a>
                <a;
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                ></a>
                  Call +1 302 464 0950;
                </a>
              </div>
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

'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Code, CheckCircle, ArrowRight, Star, Zap, Shield, Smartphone, Database, Clock, Link as LinkIcon } from 'lucide-react';

const WebDevelopmentPage: React.FC = () => {
  return (
        {/* Hero Section */}
        <section className="pt-32pb-20" />
          <div className="containermx-autopx-4">

                <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300transformhover:scale-105">Start Your Project
                </Link>
                <Link to="/it-services" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">View All IT Services
                </Link>
              </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20" />
          <div className="containermx-autopx-4">

              {services.map((service, index) => (
                <div 
                  key="{index}"
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 grouphover:transformhover:scale-105" />
                  <div className="{`w-16" h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform duration-300`} />
                    <service.icon className="w-8h-8text-white" />
                  </div>

              {technologies.map((tech, index) => (
                <div key="{index}" className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50rounded-xlp-6" />
                  <h3 className="text-xl font-bold text-white mb-4text-center"  >{tech.title}</h3>
                  <ul className="space-y-2" />

                    {tech.items.map((item, itemIndex) => (
                      <li key="{itemIndex}" className="flex items-center text-gray-300" />
                        <CheckCircle className="w-4 h-4 text-green-400mr-2flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              ))}
            </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20" />
          <div className="containermx-autopx-4">
            <div className="text-centermb-16">
              <h2 className="text-4xl font-bold text-white mb-6" />
                Why Choose <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"  >Zion Tech Group</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xlmx-auto">
              We deliver exceptional web solutions through expertise, innovation, and commitment to quality
              </p>
            </div>

            <div className="grid grid-cols-1md:grid-cols-3gap-8">
              <div className="text-centergroup">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110transition-transformduration-300">
                  <Zap className="w-10h-10text-cyan-400" />
                </div>
                <h3 className="text-2 xl font-bold text-white mb-4"  >Fast Development</h3>
                <p className="text-gray-300leading-relaxed">
              Rapid development cycles with modern tools and agile methodologies for faster time-to-market.
                </p>
              </div>

              <div className="text-centergroup">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110transition-transformduration-300">
                  <Users className="w-10h-10text-purple-400" />
                </div>
                <h3 className="text-2 xl font-bold text-white mb-4"  >Expert Team</h3>
                <p className="text-gray-300leading-relaxed">
              Certified developers with years of experience in modern web technologies and best practices.
                </p>
              </div>

              <div className="text-centergroup">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110transition-transformduration-300">
                  <Award className="w-10h-10text-green-400" />
                </div>
                <h3 className="text-2 xl font-bold text-white mb-4"  >Quality Assurance</h3>
                <p className="text-gray-300leading-relaxed">
              Comprehensive testing and quality assurance to ensure your web application works flawlessly.
                </p>
              </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20" />
          <div className="containermx-autopx-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xllp-12text-center">
              <h2 className="text-4xl font-bold text-white mb-6"  />Ready to Build Your Web Application?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xlmx-auto">
              Let's discuss your web project and create a solution that engages your users and drives business growth.
              </p>
              <div className="flex flex-col sm:flex-rowgap-4justify-center">
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300transformhover:scale-105">Start Your Project
                </Link>
                <Link to="/about" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">Learn More About Us
                </Link>
              </div>
          </div>
        </section>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      </div>

  );
        <Footer />
      </div>,
    </>);
};

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

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function WebdevelopmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Web Development - Zion Tech Group</title>
        <meta name="description" content="Professional web development services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Web Development</h1>
          <p className="text-lg text-gray-300 mb-8">Professional web development services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default WebDevelopmentPage;
